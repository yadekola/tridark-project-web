import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Your email is ${email}`);
    console.log(`Your password is ${password}`);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="signin-cont">
        <div>
          <div>
            <label>Email</label>
            <input type="email" onChange={onEmailChange} value={email} />
          </div>
          <label>Password</label>
          <input type="password" value={password} onChange={onPasswordChange} />
        </div>
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default Login;
