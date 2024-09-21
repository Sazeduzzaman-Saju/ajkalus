import Image from 'next/image';
import React from 'react';
import "./profile.css";

const page = () => {
    return (
        <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center pt-5 main-color">আমার প্রফাইল।</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="card">
                  <div
                    className="card-header p-2 border-0"
                    style={{ backgroundColor: "var(--main)" }}
                  >
                    <h4 className="text-center mb-0 pb-0 text-white">
                      Profile Image
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-2">
                      <Image
                        className="rounded-circle mt-1"
                        width={150}
                        height={150}
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                        alt="Profile"
                        title="profile"
                      />
                      {/* {fullName && (
                        <span className="font-weight-bold">{fullName}</span>
                      )}
                      {email && <span className="text-black-50">{email}</span>} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9 border-right">
                <div className="card">
                  <div
                    className="card-header p-2 border-0"
                    style={{ backgroundColor: "var(--main)" }}
                  >
                    <h4 className="text-center mb-0 pb-0 text-white">
                      Profile Settings
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="p-3 py-2">
                      <div className="row mt-2">
                        <div className="col-md-12">
                          <label htmlFor="fullName" className="labels">
                            Name
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="First Name"
                            // defaultValue={fullName}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <label htmlFor="phone" className="labels">
                            Mobile Number
                          </label>
                          <input
                            id="phone"
                            type="text"
                            className="form-control form-control-sm"
                            // defaultValue={phone}
                            placeholder="Enter Phone Number"
                          />
                        </div>
                        <div className="col-md-12">
                          <label htmlFor="address" className="labels">
                            Address
                          </label>
                          <input
                            id="address"
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Enter Address Line 1"
                            // defaultValue={address}
                          />
                        </div>
                        <div className="col-md-12">
                          <label htmlFor="email" className="labels">
                            Email ID
                          </label>
                          <input
                            id="email"
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Enter Email ID"
                            // defaultValue={email}
                          />
                        </div>
                      </div>
                      <div className="mt-0 text-center">
                        <button
                          className="submit-btn-one w-100 d-none"
                          type="button"
                        >
                          Save Profile
                        </button>
                      </div>
                    </div>
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

export default page;