"use client";

import { loginAdmin } from "../_lib/actions";

function FormLogin() {
  return (
    <form action={loginAdmin} className="flex flex-col w-[200px]">
      <label>Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="email@admin"
        required
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="*******"
        required
      />
      <button className="buttons">Login</button>
    </form>
  );
}
export default FormLogin;
