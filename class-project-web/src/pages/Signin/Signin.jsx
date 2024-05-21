import { useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signin = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    const validated = validateInputs();
    console.log(validated);
    console.log(Object.keys(validated));
    // If no errros
    if (Object.keys(validated).length == 0) {
      setTimeout(() => {
        // console.log("Submitted Successfully!");
        toast.success("Sign up successful!");
        setPending(false);
      }, 2000);
    }
    // If there are errors
    else {
      console.log("Invalid inputs, please try again");
      toast("Invalid inputs, please try again");
      setPending(false);
    }
    console.log(formValues);
  };

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setFormValues((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const validateInputs = () => {
    let errors = {};
    if (!formValues.email || formValues.email.length == 0) {
      errors.email = "Email cannot be empyt";
    }
    if (!formValues.name || formValues.name.length == 0) {
      errors.name = "Name cannot be empty";
    }
    if (
      !formValues.phoneNumber ||
      formValues.phoneNumber.length == 0 ||
      formValues.phoneNumber.length !== 11
    ) {
      errors.phoneNumber = "Please enter a valid phone number";
    }
    if (!formValues.password || !formValues.password.length >= 8) {
      errors.password = "Password should be atleast 8 characters";
    }
    if (
      !formValues.confirmPassword ||
      formValues.password !== formValues.confirmPassword
    ) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <div className="signin-cont">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Create An Account</h2>
        <div className="form-inputs">
          {/* Email */}
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          {/* Name */}
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          {/* Phone Number */}
          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
          </div>
          {/* Password */}
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          {/* Confirm Password */}
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button disabled={pending}>{pending ? "signing up..." : 'Signup'}</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
