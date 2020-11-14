import React, { useState, useEffect } from "react";
import { getCreators } from "../api/creatorApi";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function CollectionForm(props) {

    const [creators, setCreators] = useState([]);

    useEffect(() => {
      getCreators().then((_creators) => setCreators(_creators));
    }, []);
    
  return (
      <form onSubmit={props.onSubmit}> {/*---We are putting the "onSubmit prop here on the <form> tag" 
                                          rather then on the <submit> button deliverally.
                                          This is better for accessability, because user can ither click 
                                          the save button to submit or press the "Enter" key to submit the form */}
          <TextInput
            id="title"
            label="Title"
            name="title"
            onChange={props.onChange}
            value={props.collection.title}
            error={props.errors.title}
          />
              
          <div className="form-group">
              <label htmlFor="creator">Creator</label>
              <div className="field">
                  <select
                    id="creator"
                    name="creatorId"
                    onChange={props.onChange}
                    value={props.collection.creatorId || "" /*Set creatorId to an empty string if it is passed in as null. */}
                    className="form-control"
                  >
                      <option value="" />
                      <option value="1">McLoughlin Bros., inc</option>
                      <option value="2">Garnier, F. A., 1803-1863</option>
                      <option value="3">Firk, Frank W. K.</option>
                      <option value="4">Dollero, Adolfo</option>
                      <option value="5">Xie, Huisheng</option>
                      <option value="6">Colburn, David R.</option>
                  </select>
              </div>
              {props.errors.creatorId && (
                <div className="alert alert-danger">{props.errors.creatorId}</div>
              )}
          </div>
          
          
          <TextInput
            id="language"
            label="Language"
            name="language"
            onChange={props.onChange}
            value={props.collection.language}
            error={props.errors.language}
          />

          <input type="submit" value="Save" className="btn btn-info" />

      </form>
  )
}

//We must be more explicit about the props we expect to receive on our collection form.
//Below we declare the propTypes so that other developers are clear about what data is expected.
//propTypes are also usefull because they help document a component's expectations. So these are
//usefull for developers in the future so that they can quickly see what this component expects.

CollectionForm.propTypes = {
  collection: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default CollectionForm;