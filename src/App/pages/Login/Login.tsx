import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEntrar = () => {};
   console.log(email)
   console.log(password)
  return (
    <div>
      <form>
        <label>
          <span>Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button onClick={handleEntrar} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};
