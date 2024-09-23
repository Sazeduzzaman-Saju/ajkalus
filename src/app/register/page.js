"use client";

import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";
import "./register.css";

const Page = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    gender: "1",
    password: "",
    username: "",
    address: "",
    policy: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://backoffice.ajkal.us/auth/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      toast.success("User created successfully");
    } catch (error) {
      toast.error("Failed to create user: " + error.message);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name) newErrors.full_name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email address is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.policy) newErrors.policy = "You must accept the policy";
    return newErrors;
  };

  return (
    <div className="container">
      <div className="row my-5 align-items-center">
        <div className="col-lg-6">
          <Image
            className="img-fluid"
            src="https://ajkal.us/img/settings/Sign-up-rafiki.png"
            alt="Sign Up"
            width={600}
            height={600}
            title="Sign Up"
          />
        </div>
        <div className="col-lg-6">
          <div className="card border-0 login-form bg-transparent">
            <div className="card-body py-5 form-area-register">
              <div>
                <div className="text-center py-2">
                  <h3 className="text-muted mb-0">রেজিস্টার করুন !</h3>
                  <div className="text-muted mb-0">
                    সাপ্তাহিক আজকালে আপনাকে স্বাগতম।
                  </div>
                </div>
                <div className="row pt-4">
                  <div className="col-lg-10 offset-1 mx-auto">
                    <form onSubmit={handleSignUp} className="pb-5">
                      <div className="row">
                        <div className="col-lg-6">
                          <label htmlFor="full_name">
                            আপনার নাম <span className="text-danger">*</span>
                          </label>
                          <input
                            id="full_name"
                            name="full_name"
                            type="text"
                            value={formData.full_name}
                            onChange={handleChange}
                            placeholder="আপনার নাম"
                            className="form-style mb-2 form-control"
                          />
                          {errors.full_name && (
                            <div className="text-danger">{errors.full_name}</div>
                          )}
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="phone">
                            আপনার ফোন নাম্বার{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="15******"
                            className="form-style mb-2 form-control"
                          />
                          {errors.phone && (
                            <div className="text-danger">{errors.phone}</div>
                          )}
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="email">
                            ইমেইল দিন <span className="text-danger">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ইমেইল"
                            className="form-style mb-2 form-control"
                          />
                          {errors.email && (
                            <div className="text-danger">{errors.email}</div>
                          )}
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="gender">
                            জেন্ডার <span className="text-danger">*</span>
                          </label>
                          <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="form-style mb-2 form-control"
                          >
                            <option value="1">পুরুষ</option>
                            <option value="2">মহিলা</option>
                          </select>
                          {errors.gender && (
                            <div className="text-danger">{errors.gender}</div>
                          )}
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="password">
                            পাসওয়ার্ড দিন{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="*****"
                            className="form-style form-control"
                          />
                          {errors.password && (
                            <div className="text-danger">{errors.password}</div>
                          )}
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="username">
                            ইউজার নেম <span className="text-danger">*</span>
                          </label>
                          <input
                            id="username"
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="ইউজার"
                            className="form-style mb-2 form-control"
                          />
                          {errors.username && (
                            <div className="text-danger">{errors.username}</div>
                          )}
                        </div>
                        <div className="col-lg-12">
                          <label htmlFor="address">
                            ঠিকানা <span className="text-danger">*</span>
                          </label>
                          <input
                            id="address"
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="ঠিকানা দিন"
                            className="form-style form-control"
                          />
                          {errors.address && (
                            <div className="text-danger">{errors.address}</div>
                          )}
                        </div>
                        <div className="col-lg-12">
                          <div className="form-check pt-5">
                            <input
                              id="policy"
                              name="policy"
                              className="form-check-input"
                              type="checkbox"
                              checked={formData.policy}
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="policy"
                            >
                              আমাদের সকল শর্ত আপনি মেনে নিয়েছেন। অথবা শর্ত গুলো
                              পরতে <Link href="/">এখানে ক্লিক করুন।</Link>
                            </label>
                          </div>
                          {errors.policy && (
                            <div className="text-danger">{errors.policy}</div>
                          )}
                        </div>
                      </div>
                      <div className="text-muted text-center pt-5">
                        আপনার অ্যাকাউন্ট আগে থেকেই করা আছে? তাহলে{" "}
                        <Link href="/login">লগিন করুন!</Link>
                      </div>
                      {/* <input
                        type="submit"
                        value="Sign Up"
                        className="submit-btn-one w-100 mx-0"
                      /> */}
                      <Link
                        href={"/user"}
                        className="submit-btn-one w-100 mx-0"
                      >
                        {" "}
                        Sign Up
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
