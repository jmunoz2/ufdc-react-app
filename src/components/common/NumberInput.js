import React from "react";
import {Form, Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";


function NumberInput (props) {
  /*----Handeling dynamic classes: With Boostrap if the input is an error state, then we should set a "has-error" 
        className on the "form-group wrapper".
        The wrappeClass starts with a default value of "form-group". If props.error is set (which we know it will) and the error isn't an empty tring, 
        then we want to add another class to the string, starting with a leading space " has-error". Then we can apply the 
        calculated class to the wrapper <div>.
        There is a nicer way to handle this by using "calssnames npm package". However, I am using a simpler approach.
        Now, if an error is passed in on props, the input will be styled in red and the error message will be displayed 
        below the input styled using bootstrap  ----*/

  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="number"
          name={props.name}
          onChange={props.onChange}
          className="form-control"
          value={props.value}
        />                  
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>} {/*----If there is an error passed in on props, then I want to display a div that displays that error------*/}
      {/*----javascript runs the code on the right if the condition on the left istrue. In this case if there is an error, then show the <div>-------*/}
    </div>        
  );

}
/*---Here we declare the propTypes for reusable components----*/
NumberInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number, /*---value is optional---*/
  error: PropTypes.string  /*---error is optional---*/
};

/*---It is also a good idea to delare default prop for the error. In this case if an error is not passed in, then it should default to an empty string   ---*/
NumberInput.defaultProps = {
    error: ""
}

export default NumberInput;