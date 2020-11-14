import {useEffect, useState} from 'react';
import axios from "axios";


/*Inside of this component we wil query our API taking a few paprameters for what we are querying.
The first thing we want to take in is "query," which is essentially whatever we typeinto the search box.
we want to send to our search. We also want to send what page  number we are on "pageNumber".
The way infinite scrolling works is that as soon as you get to the bottomof the list of results, 
it willquery the next page of results from the API and append it on to the bottom of our page, so we need 
to know what page number we are trying to get from the API.
Once we have those to pieces of information we can set axios inside useEffect. 
Axios is a function that will take all the parameters that we need to give it. 
*/

/*this is an open library API, and we are using the search, which has pagination 
built into it so that we can pass it into our params.*/

/* "query" is for anything we type into the search and pageNumber is the 
the page number we are trying to get fromthe API*/

/*The first param we will pass is query, which is called "q" in the API, so we willpass "q" as "query" and 
we also need to pass "page"as our pageNumber that we are on inside our query.*/

/* ".then" => Axios is promissed bese, so we use ".then," which is going to return our response. So we have our response variable "res." 
/We can actually dosomething with our response. The data of our response is inside res.data*/

/* Axios uses a param called "cancelToken, which is used to setup cancellations, used so that we don't send a quary every single time we type
a letter in the search box.
we use cancelToken: new axios.cancelToken"
Inside the axios.CancelToken, it will take a function, which takes a single parameter, whicj=h is goig to be the cancel token and
we are going to set our own variable to that. */

/* Inside of useEffect, if we return something....we return a function and inside this function we can just call cancel
and this is going to cancel our request every single time we call useEffect */

/* The catch(e => {}) inside useEffect function is to avoid the error "Uncaught promisses," since every single time that 
we cancel something it causes the error to occur inside our promisse. So we want to see if this is an axios error.
Inside the axios they have a built in an easy way to say if axios.isCancel(e), we just pass that error. So in other words we are 
just saying "Ignore every single time we cancel a request, because that's what we meant to do" */

/* To actually return results data we need to setup our state and we will have a different things to state.
The first thing we are goingto have is "loading" and "setLoading" so we want a setLoading. We set our default useState to  "True" because 
the first thing we want to do is loading inside our application.
The next thing we want to set is "error" and "setError" and by default we are not going to have an error, so we set useState to "false."
The next two pieces are "books" and "setBooks."  These are actually the books we get back fromour API call....and we want this to be 
an empty array to start with, because we have not books being found. 
The last two pieces are "hasMore" and "setHasMore." By default we are going to set its useState to "false," jus in case we have no more results.
So when we get to the num_found at the end of all my results, we don't want to continue making API calls, because there are no more results. So
this willprevent us from making API request we don't want to make. */

/* The next thing is to set the state inside our application.
The first thing we want to do is inside useEffect is that every time we send a request we want to set "loading" to "true," because we are now loading.
and "error" to "false," because we no longer have an error since we are statting a brand new request, which hopefully will succeed instead of fail. 
Also...inside the ".then" we set our state for a book using a function version of setState, which allows us to take the previous state, which in our case is 
previous books "prevBooks." So what we want to do is return our previous books combined we the new books. So we say "[...prevBooks]" and we want to spread that.
and als addthe new books using "res.data.docs." docs in from the API. We want to map() over that because we just want the tiles of the books.*/

/* "[...prevBooks, res.data.docs.map(b => b.title)]"" will return a list of variables...but we can actually have multiple titles because the datahas not just tiles, 
but also editions, etc....resulting on many titles that are just the same and we want to remove those.The way todo so is by using "Set." In javascript,
you can pass an array to "Set" and it will just return unique values...it will not return any other information. All we need to do is to convert the 
resultback to an array by spreading over our entire Set => return [...new Set()]; */

/* Now we also need to set our "hasMore."  It is very simple. We just want to check here if res.data.docs.length is grater than zero, 
which essentially means we have no more data, because there is no book returned to us, so we know we don't need to make this query again.
We also setLoading to "false," because we are no longer loading data.  */

/* Also, we setError inside our "catch" to true, because ifwe actually have an error coming from our results in case something goes wrong with our API and
we want to make sure we catch that.  */

/* Now that we have all the variables set, we can return these to our user. So, down in the "return," we can return an object, 
which is going to contain "loading," "error," "books," and "hasMore."  
Now, all the states from my hook is being returned from the hook and we can use it inside the component "InfiniteScrollingHook."  */

/* To avoid getting results mixed with previous results, we need to add a new useEffect. This effect is going to be a very small effect.
All is this going to do is that every single time we change our query we are going to set our books to an empty array.  */

export default function useBookSearch(query, pageNumber) { 
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true); 
    const [books, setBooks] = useState([]); 
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {   //Here, every single time we change our query, we will set books to an empty array.
       setBooks([]);
    }, [query])

    useEffect(() => { //This function will be called each time the parameters query and pageNumber change
        setLoading(true);
        setError(false);
        
        let cancel; //This variable allows us to cancel the request

        axios ({
        method: 'GET',
        url: 'http://openlibrary.org/search.json', 
        params: { q: query, page: pageNumber },
        cancelToken: new axios.CancelToken(c => cancel = c) //here we set the variable c 
      }).then(res => { 
          console.log(res.data);
          setBooks(prevBooks => {
              return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]; //This will return a list of variables. 
                                       //We are combining our old books with our new books, converting it to a set, so that we remove all the duplicates, 
                                       //and we convert it back to an array, so that we can do all our normal array manipulations, such as looping and maping 
                                       //that we want to do later.
          });
          setHasMore(res.data.docs.length > 0); //essentially means we have no more data, because there is no book returned to us
          setLoading(false); //We setLoading to "false," because we are no longer loading data.                       
          //console.log(res.data);
      }).catch(e => {
          if (axios.isCancel(e)) return;
          setError(true);
      }) 
      return () => cancel() 
    }, [query, pageNumber])
    
    return (
       { loading, error, books, hasMore} 
    )
}
