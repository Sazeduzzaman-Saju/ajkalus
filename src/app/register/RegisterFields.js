"use client";

import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const RegisterFields = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();

    const form = e.target;
    const framdata = {
      full_name: form?.full_name.value,
      phone: form?.phone.value,
      email: form?.email.value,
      gender: form?.gender.value,
      password: form?.password.value,
      username: form?.username.value,
      address: form?.address.value,
    };
    console.log(framdata);

    try {
      const response = await fetch(
        "https://backoffice.ajkal.us/auth/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(framdata),
        }
      );
      console.log(response, "response data")
    } catch (error) {
      toast.error("Failed to create user: " + error.message);
    }
  };
  return (
    <div>
      <form className="pb-5" onSubmit={handleSignUp}>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="full_name">
              আপনার নাম <span className="text-danger">*</span>
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              className="form-style mb-2 form-control"
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="phone">
              আপনার ফোন নাম্বার <span className="text-danger">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="15******"
              className="form-style mb-2 form-control"
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="email">
              ইমেইল দিন <span className="text-danger">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="ইমেইল"
              className="form-style mb-2 form-control"
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="gender">
              জেন্ডার <span className="text-danger">*</span>
            </label>
            <select
              id="gender"
              name="gender"
              className="form-style mb-2 form-control"
            >
              <option value="1">পুরুষ</option>
              <option value="2">মহিলা</option>
            </select>
          </div>
          <div className="col-lg-6">
            <label htmlFor="password">
              পাসওয়ার্ড দিন <span className="text-danger">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="*****"
              className="form-style form-control"
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="username">
              ইউজার নেম <span className="text-danger">*</span>
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="ইউজার"
              className="form-style mb-2 form-control"
            />
          </div>
          <div className="col-lg-12">
            <label htmlFor="address">
              ঠিকানা <span className="text-danger">*</span>
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="ঠিকানা দিন"
              className="form-style form-control"
            />
          </div>
          {/* <div className="col-lg-12">
            <div className="form-check pt-5">
              <input
                id="policy"
                name="policy"
                className="form-check-input"
                type="checkbox"
              />
              <label className="form-check-label" htmlFor="policy">
                আমাদের সকল শর্ত আপনি মেনে নিয়েছেন। অথবা শর্ত গুলো পরতে{" "}
                <Link href="/">এখানে ক্লিক করুন।</Link>
              </label>
            </div>
          </div> */}
        </div>
        <div className="text-muted text-center pt-5">
          আপনার অ্যাকাউন্ট আগে থেকেই করা আছে? তাহলে{" "}
          <Link href="/login">লগিন করুন!</Link>
        </div>
        <button type="submit" className="submit-btn-one w-100 mx-0">
          {" "}
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterFields;

// try {
//   const response = await fetch(
//     "https://backoffice.ajkal.us/auth/registration",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to create user");
//   }
//   toast.success("User created successfully");
//   navigate("/user");
// } catch (error) {
//   toast.error("Failed to create user: " + error.message);
// }

{
  /* <form className="pb-5" onSubmit={handleSignUp}>
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="full_name">
                আপনার নাম <span className="text-danger">*</span>
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                className="form-style mb-2 form-control"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="phone">
                আপনার ফোন নাম্বার <span className="text-danger">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="15******"
                className="form-style mb-2 form-control"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="email">
                ইমেইল দিন <span className="text-danger">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="ইমেইল"
                className="form-style mb-2 form-control"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="gender">
                জেন্ডার <span className="text-danger">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                className="form-style mb-2 form-control"
              >
                <option value="1">পুরুষ</option>
                <option value="2">মহিলা</option>
              </select>
            </div>
            <div className="col-lg-6">
              <label htmlFor="password">
                পাসওয়ার্ড দিন <span className="text-danger">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="*****"
                className="form-style form-control"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="username">
                ইউজার নেম <span className="text-danger">*</span>
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="ইউজার"
                className="form-style mb-2 form-control"
              />
            </div>
            <div className="col-lg-12">
              <label htmlFor="address">
                ঠিকানা <span className="text-danger">*</span>
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="ঠিকানা দিন"
                className="form-style form-control"
              />
            </div>
            <div className="col-lg-12">
              <div className="form-check pt-5">
                <input
                  id="policy"
                  name="policy"
                  className="form-check-input"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="policy">
                  আমাদের সকল শর্ত আপনি মেনে নিয়েছেন। অথবা শর্ত গুলো পরতে{" "}
                  <Link href="/">এখানে ক্লিক করুন।</Link>
                </label>
              </div>
            </div>
          </div>
          <div className="text-muted text-center pt-5">
            আপনার অ্যাকাউন্ট আগে থেকেই করা আছে? তাহলে{" "}
            <Link href="/login">লগিন করুন!</Link>
          </div>
          <button type="submit" className="submit-btn-one w-100 mx-0">
            {" "}
            Sign Up
          </button>
        </form> */
}
