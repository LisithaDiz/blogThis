import { useState } from "react";
import './styles.css';

const ContactUs = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.username.trim()) {
      errors.username = "Uusername is required!";
    }
    if (!values.email.trim()) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }
    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed 10 characters";
    }
    
    return errors;
  };

  return (
    <div>
    
      <div className="company-contact-info">
        <h2>Contact Information</h2>
        <p><strong>Address:</strong> 45XV, Vilas Street, Arabia Terra, Mars</p>
        <p><strong>Phone:</strong> +M3 (84A) 884C-ADEE</p>
        <p><strong>Email:</strong> neuralshifter@marsmedia.com</p>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="ui form rectangular-form">
          <h1 className="ui dividing header">Login Form</h1>
  
          <div className={`field ${formErrors.username ? 'error' : ''}`}>
            <label>Username</label>
            <div className="ui input">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            {formErrors.username && <div className="ui pointing red basic label">{formErrors.username}</div>}
          </div>
  
          <div className={`field ${formErrors.email ? 'error' : ''}`}>
            <label>Email</label>
            <div className="ui input">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            {formErrors.email && <div className="ui pointing red basic label">{formErrors.email}</div>}
          </div>
  
          <div className={`field ${formErrors.password ? 'error' : ''}`}>
            <label>Password</label>
            <div className="ui input">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            {formErrors.password && <div className="ui pointing red basic label">{formErrors.password}</div>}
          </div>
  
          <button className="ui button primary" type="submit">Submit</button>
  
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="ui success message">
              <div className="header">Signed in successfully</div>
              <p>You can now proceed.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
