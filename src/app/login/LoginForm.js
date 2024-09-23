// src/app/login/LoginForm.js
"use client"; // Only this file needs to be a client component

import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and Password are required");
      return;
    }

    try {
      const response = await fetch("https://backoffice.ajkal.us/auth/page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to login user");
      }

      const responseData = await response.json();
      localStorage.setItem("accessToken", responseData.access_token);
      toast.success("User login successful");
    } catch (error) {
      toast.error(`Failed to login user: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <div className="row">
        <div className="col-lg-12 mb-3">
          <label htmlFor="email">
            ইমেইল দিন <span className="text-danger">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="ইমেইল"
            className="form-style form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-lg-12 mb-3">
          <label htmlFor="password">
            পাসওয়ার্ড দিন <span className="text-danger">*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="*****"
            className="form-style form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-lg-12">
          <div className="text-muted text-center pt-5">
            আপনি কী নতুন, আপনার একাউন্ট নেই <br />
            তাহলে--<Link href="/register"> রেজিস্টার করুন !</Link>
          </div>
        </div>
      </div>
      <input
        type="submit"
        value="Login"
        className="submit-btn-one w-100 mx-0"
      />
    </form>
  );
};

export default LoginForm;
