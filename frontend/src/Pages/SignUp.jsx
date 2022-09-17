import { useState } from "react";
import { useSignup } from "../Hooks/useSignup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("first");

    await signup(email, password);
  };

  return (
    <form className="sign-up" onSubmit={submitHandler}>
      <h3>Sign up</h3>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SignUp;
