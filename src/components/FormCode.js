import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}
    if (!values.device) {
      errors.device = 'Required'
    } else if (values.device.length < 2) {
      errors.device = 'Minimum be 2 characters or more'
    }
    return errors
  }

const renderField = ({ input, placeholder, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="form-elememt-block">{label}</label>
      <div className="form-elememt-block">
        <input {...input} placeholder={placeholder} type={type} className="form-control"  />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let FormCode = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-wrapper">
        <Field name="device" component={renderField} placeholder="Iphone 7, Samsung Galaxy S9"  label="Search for your device"  />
      </div>
      <div className="form-wrapper">
        <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}
FormCode = reduxForm({
  form: 'contact',
  validate,
})(FormCode);

export default FormCode;