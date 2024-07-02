import React from 'react';
import { Form, Field } from 'react-final-form';
import './../style.css'; // Import CSS styles

const MyForm = () => {
  const onSubmit = (values, form) => {
    // Menampilkan data yang disubmit dalam bentuk popup
    const message = `
      First Name: ${values.firstName}
      Last Name: ${values.lastName}
      Employer: ${values.employer.join(', ')}
      Education: ${values.education.join(', ')}
      Experience: ${values.experience.join(', ')}
      Preferred Technology: ${values.preferredTechnology.join(', ')}
      Note: ${values.note}
    `;
    window.alert(message);
    form.reset(); // Reset form setelah submit
  };

  return (
    <div className="container">
      <div className="form-container">
        <Form
          onSubmit={onSubmit}
          initialValues={{
            firstName: '',
            lastName: '',
            employer: [],
            education: [],
            experience: [],
            preferredTechnology: [],
            note: ''
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
                <center>
                <h2>Employee Form</h2>
                </center>
              <div className="field-group">
                <label>First Name</label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="field-group">
                <label>Last Name</label>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="field-group">
                <label>Employed</label>
                <div>
                  <Field
                    name="employer"
                    component="input"
                    type="checkbox"
                    value="Company"
                  />{' '} 
                </div>
              </div>
              <div className="field-group">
                <label>Education</label>
                <Field
                  name="Education"
                  component="input"
                  type="text"
                  placeholder="Education"
                />
              </div>
              <div className="field-group">
                <label>Experience</label>
                <div>
                  <Field
                    name="preferredTechnology"
                    component="input"
                    type="checkbox"
                    value="HTML"
                  />{' '}
                  HTML
                  <Field
                    name="preferredTechnology"
                    component="input"
                    type="checkbox"
                    value="CSS"
                  />{' '}
                  CSS
                  <Field
                    name="preferredTechnology"
                    component="input"
                    type="checkbox"
                    value="JS"
                  />{' '}
                  Javascript
                  <Field
                    name="preferredTechnology"
                    component="input"
                    type="checkbox"
                    value="NodeJS"
                  />{' '}
                  Nodejs
                  <Field
                    name="preferredTechnology"
                    component="input"
                    type="checkbox"
                    value="ReactJS"
                  />{' '}
                  Reactjs
                </div>
              </div>
              <div className="field-group">
                <label>Preferred Technology</label>
                <div>
                <div>
                 <Field
                  name="preferredTechnology"
                  component="input"
                  type="checkbox"
                  value="FE"
                />{' '}
                Front End
                </div>
                <div>
                <Field
                    name="preferredTechnology"
                    component="input"
                    type="checkbox"
                    value="BE"
                  />{' '}
                  Back End
                </div>
                <div>
                <Field
                    name="preferredTechnology"
                    component="input"
                    type="checkbox"
                    value="FS"
                  />{' '}
                  Fullstack
                </div>
                </div>
              </div>
              <div className="field-group">
                <label>Note</label>
                <Field
                  name="note"
                  component="textarea"
                  placeholder="Enter your note here"
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>{' '}
                <button
                  type="button"
                  onClick={() => form.reset()}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <div className="source-code">
                <h2>Source Code:</h2>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default MyForm;
