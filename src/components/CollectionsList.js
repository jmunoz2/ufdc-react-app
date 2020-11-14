import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const CollectionsList = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Slug</th>
          <th>Creator ID</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        {props.collections.map((collection) => {
          return (
            <tr key={collection.id}>
              <td><Link to={"collection/" + collection.slug}>{collection.title}</Link></td>
              <td>{collection.slug}</td>
              <td>{collection.creatorId}</td>
              <td>{collection.language}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CollectionsList.propTypes = {  // "p" is in lower case here because we are declaring a property.
                               // We are declaring a property in a function. In js you can add properties to a function
                               //because everything is an object. 
                               //By convention, if react sees a propTypes property in a component, then it will validate
                               //the props that are passed in.
  /*---We want to declare that collections are an array. We are declaring that this component expects to be passed an array 
  of collections and if it is not, then a run time error should be logged to the console in the browser.
  This check will only happen during development. For performance issues, the production version of react doesn't check for 
  prop types. 
  We are using a more explicit PropTypes declaration declaring the shape of the object that the array should hold by 
  using arrayOf() and inside it we callPropTypes.shape, which allows us to specify the properties that is expected on each object in the array---*/

  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      creatorId: PropTypes.number.isRequired,
      language: PropTypes.string.isRequired
    })
  ).isRequired 
};

/*---We declare a default prop to say that collections default to an empty array. So, if the component doesn't receive a 
CollectionsList prop, then it will default collections to an empty array. See below ---*/

CollectionsList.defaultProps = {
  collections: []
}

export default CollectionsList;
