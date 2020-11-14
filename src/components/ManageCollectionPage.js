import React, { useState, useEffect } from "react"; //The useState hook will allow us to handle state in this function component....and
//the state we want to manage is the collection.
//The useEffect will be used to perpopulate the form when it sees the collection slug on the URL.
//We need to call the Api to request the collection when the component mounts usin the React Hook and
//the Hook we can use is "useEffect"
//import { Prompt } from "react-router-dom";
import CollectionForm from "./CollectionForm";
import * as collectionApi from "../api/collectionApi"; //I amn using a wild card import, which will allow us to refference any functions
//that have been exported from this file
import { toast } from "react-toastify";

const ManageCollectionPage = (props) => {
  /* Below we will add another peace of state. We will store errros and state as an object and initiallize the state to an empty object  */
  const [errors, setErrors] = useState({});

  const [collection, setCollection] = useState({
    /*---We initialaize the state with an empty collection. 
                                                  The call to useState returns an array of two items; 
                                                  The first item is what we want to store in state and 
                                                  the second item is the setter. We want to start collection data
                                                  so we call the variable "collection" and the setter is called "setCollection."
                                                  This is using array destructuring, which is a feature built into javascript.
                                                  useState accepts default values, so we are setting here default value here
                                                  to an empty collection object. ---*/

    id: null,
    slug: "",
    title: "",
    creatorId: null,
    language: "",
  });

  const _style = { textTransform: "capitalize" };

  //Below we call useEffect  and we pass a function to useEffect. Inside this function we declare the code we want to run when this component
  //loads. First, we read the slug from the url with "props.match.params.slug" which will be pulled from the path "/collection/:slug"
  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug && slug !== "add-collection") {
      //if the slug is on the URL, then we want to request that collection by slug
      collectionApi.getCollectionBySlug(slug).then((_collection) => {
        setCollection(_collection);
      }); //We pass in the slug we just read from URL. The "getCollectionBySlug" returns a promisse. So we
      //can handle the promisse to get the result by chaning the ".then". This method will return the collection
      //and what we will do if the response is called, set collection and provide it the collection
    }
  }, [props.match.params.slug]); // If the slug in the URL changes, useEffect should logically re-run. Remeber that by default useEffect will re-run every time React re-renders.
  // So it is important to declare dependency array.

  function handleChange({ target }) {
    //event will be automatically passed over by the browser

    setCollection({
      ...collection,
      [target.name]: target.value,
    });

    //const updatedCollection ={...collection, [target.name]: target.value} //we use the spread operator "..." here to create a copy
    //of the collection object and set the property on the copy
    //to the value passed in on the event.
    //The line says: copy the collection object and set the name poperty
    //on the copy to the value passed in on the event.
    //setCollection(updatedCollection) //This is to pass the updated collection to the setCollection function.
  }

  /*---We are adding a function above "handleSubmit(event)" and call it "formIsValid"  ---*/
  function formIsValid() {
    const _errors = {}; //This is a local variable. It starts with "_" to avoid a name collition with the "errors" in state declared on line 11.

    if (!collection.title) _errors.title = "Title is required";
    if (!collection.creatorId) _errors.creatorId = "Creator is required";
    if (!collection.language) _errors.language = "Language is required";

    setErrors(_errors); //We call setErrors and pass in our local "_errors" variable.
    //The form is valid if the errors object has no properties. To do this we can use a built is javascript feature called "Object.keys," which returns
    //an array of an object's keys. So here we want an array of the keys of the error's object we declared up above.
    //f the length of the array is zero, that means that the errors object has noproperties.
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    //event will be automatically passed over by the browser
    event.preventDefault(); //we want to handle the form submition on the client side so the first thing we want to do is to call event.preventDefault,
    //which willkeep the form from posting back to the server
    //How are we going to save the collection? We call the mockAPI.

    /* below we are passing the collection that is held in state. All the functions in the "collectionApi" file return a propmisse. 
      I cold declare a ".then" here to specify some code that I want to run after the saveCourse is completed, 
      but for now, we will leave that out. We can now pass this function down to <CollectionForm ..../> as a prop
      We setup a transition using react router.
      collectionApi.saveCollection(collection) call returns a promisse. So we can call ".then" to handle the response.
      The question is "What dowe want to do after "save." It makes sense to redirect the user to the collections page.
      We could use <Redirect> here, but I will use a different approach. Since this component was loaded via react-router route component,
      we have access to React Router's history object on props. So, we can programatically redirect the user here after the "save"is completed using
      props.history.push"
       */
    if (!formIsValid()) return; //Return early if the formis not valid. We do not execute the other lines.
    collectionApi.saveCollection(collection).then(() => {
      props.history.push("/collections");
      toast.success("Collection Saved!"); //we call "toast.success" with the message we want to display when the "save" is complete
    });
    /*Now when this function is called, it will save the collection and redirect to the collections page.  */
  }

  return (
    <section className="main-section">
      <h2>Manage Collection</h2>
      {/*<Prompt when={true} message="Are you sure you want to leave?"/>*/}
      <h5 style={_style}>{props.match.params.slug.replace(/[-]/g, " ")}</h5>
      {/*This will read the title placeholder from the URL and replace slashes with empty 
                                                                                  spaces*/}
      <CollectionForm
        errors={errors} //Here our form has access to the erors we are tracking in state
        collection={collection}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default ManageCollectionPage;
