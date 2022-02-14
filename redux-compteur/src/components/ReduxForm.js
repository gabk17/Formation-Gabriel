import { Field, reduxForm } from 'redux-form';

let ReduxForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <Field name="age" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <Field name="date" component="input" type="date" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

ReduxForm = reduxForm({
  form: 'contact'
})(ReduxForm);

export default ReduxForm;