/*useState allows us to create some state.
  For pagination, we will use useRef. Essentially, a ref is a value that persists after each render.
  In react, every single thing we do is stored inside our render unless it is part ofour state.
  But if we want to store something between renders, that is notpart of our state, we need to use ref.
  Ref is great when we want to store reference to elements, for example, if we want to get reference 
  to our "books"element, <input> element, or if you want to get a reference to something that is related 
  to the document API. In our case we are using intersectin observer, which is part of the document API.

  We also need a reference to the very last book element, so that when scroll all the way down and we reach 
  the very last element, we want to change our page number and add "1" to it.
  
  So intersection observer is going to allow us to say when something is on the screen, but we need to get 
  an element reference element to that very last element in our books array in order to know which element
  is the last one. You'll think you could do this with useRef, but useRef is not part of our state, so it 
  doesn't chane every single time that it changes, so when our reference changes, it actually doen't 
  re-run our component. So, we need to use is calback "useCallback."
  useCallback has a unique interaction with useRef
*/
import React, { useState, useRef, useCallback } from "react"; 

import useBookSearch from "./useBookSearch";


function InfiniteScrollingHooks() {

    //The first thing is to setup state for our query.  By default our query is set to an empty string. 
    //The useState function returns a query as well as the function to set that query
    //By default we will have page number 1

    const [query, setQuery] = useState("")  
    
    const [pageNumber, setPageNumber] = useState(1) 

    const { loading, error, books, hasMore } = useBookSearch(query, pageNumber) //We need to store these inside our state. All the variables from our "useBookSearch" 
                                                                                //component that we have available inside our component. 
                                                                                //And we can start rendering some of this information.

    /*We need to update these variables inside our input. The function handleSearch takes the event. It takes the event and set our query to 
    whatever the value is in the search box. We also want to set our page number back to 1,because anytime we requery, we want our data results 
    to start at the very first page. We don't want it to start at page 7 if we start a new query.*/

    const observer =useRef() //By default, the first time this is ran, this is going to have "undefined" as a value, which is okay.
    const lastBookElementRef = useCallback(node => { //node corresponds to the "ref={lastBookElementRef}" on line 58
      if (loading) return; //We want to check if we are loading, so that if we are loading our information, we don't want to trigger infinite scrolling, otherwise it will constatntly call our API whilewe are loading, and we don't want to do that.
      if (observer.current) observer.current.disconnect() //The way ref works is that it has a variable property called "current," so if we have an observer, we want to disconnect our observer. This line disconnect our observer from the previous element, so that our new last element will be hooked correctly.
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
            console.log("Vissible");
            setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      });
      if (node) observer.current.observe(node)
    }, [loading, hasMore])

    function handleSearch(e) {
        setQuery(e.target.value); //This is the value of whatever is in the search box.
        setPageNumber(1);
    }

    return (
        <>
            <input type="text" value={query} onChange={handleSearch}></input>
            {/* Down we will loop trhu all our books and for each book we will call a function that will print out a div with a unique key,in this case {book}
                and also our loading and if we are loading, we will show the text "Loading...". We will do the exact same thing for error,  */}
            {books.map((book, index) => {
                if (books.length === index + 1 ) {
                return <div ref={lastBookElementRef} key={index}>{book}</div>
                } else {
                  return <div key={index}>{book}</div> 
                }
                
            })}
            <div>{loading && "Loading..."}</div>
            <div>{error && "Error"}</div>

        </>
    )
}
export default InfiniteScrollingHooks;