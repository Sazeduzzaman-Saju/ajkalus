import React from "react";

const UserAddPost = () => {
  return (
    <form encType="multipart/form-data">
      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div>
                <label htmlFor="username">
                  বিজ্ঞাপন দিন <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select form-select-sm"
                  aria-label="Default select example"
                  //   {...register("ad_category_id")}
                >
                  <option disabled>বেছে নিন</option>
                  <option value="1">ইপেপার</option>
                  <option value="2">অনলাইন পোর্টাল</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <label htmlFor="username">
                পে-এমাউন্ট <span className="text-danger">*</span>
              </label>
              <input
                className="w-100 form-control"
                type="number"
                // {...register("pay_amount", { required: true })}
                // aria-invalid={errors.pay_amount ? "true" : "false"}
              />
              {/* {errors.pay_amount?.type === "required" && (
                <div role="alert" className="text-danger">
                  পে-এমাউন্ট দিন!
                </div>
              )} */}
            </div>
            <div className="col-lg-4 mb-3">
              <label htmlFor="username">
                টোটাল পেমেন্ট <span className="text-danger">*</span>
              </label>
              <input
                className="w-100 form-control"
                type="text"
                // {...register("total_payment", { required: true })}
                // aria-invalid={errors.total_payment ? "true" : "false"}
              />
              {/* {errors.total_payment?.type === "required" && (
                <div role="alert" className="text-danger">
                  টোটাল পেমেন্ট দিন।
                </div>
              )} */}
            </div>
            <div className="col-lg-4 mb-3">
              <label htmlFor="username">
                এড ব্যানার <span className="text-danger">*</span>
              </label>
              <input
                className="w-100 form-control"
                type="file"
                // {...register("ad_banner", { required: false })}
                // aria-invalid={errors.ad_banner ? "true" : "false"}
              />
              {/* {errors.ad_banner?.type === "required" && (
                <div role="alert" className="text-danger">
                  এড ব্যানার দিন!
                </div>
              )} */}
            </div>
            <div className="col-lg-4 mb-3">
              <label htmlFor="username">
                এড লিংক <span className="text-danger">*</span>
              </label>
              <input
                className="w-100 form-control"
                type="url"
                // {...register("ad_link", { required: true })}
                // aria-invalid={errors.ad_link ? "true" : "false"}
              />
              {/* {errors.ad_link?.type === "required" && (
                <div role="alert" className="text-danger">
                  এড এর লিংক!
                </div>
              )} */}
            </div>
            <div className="col-lg-2 mb-3">
              <label htmlFor="username">
                এড ডিউরেশন <span className="text-danger">*</span>
              </label>
              <input
                className="w-100 form-control"
                type="text"
                // {...register("duration", { required: true })}
                // aria-invalid={errors.duration ? "true" : "false"}
              />
              {/* {errors.duration?.type === "required" && (
                <div role="alert" className="text-danger">
                  এড এর ডিউরেশন!
                </div>
              )} */}
            </div>
            <div className="col-lg-2 mb-3">
              <label htmlFor="username">এড স্টার্ট ডেট</label>
              <input
                className="w-100 form-control"
                type="date"
                // {...register("start_date", { required: true })}
                // aria-invalid={errors.start_date ? "true" : "false"}
              />
              {/* {errors.start_date?.type === "required" && (
                <div role="alert" className="text-danger">
                  এড স্টার্ট ডেট দিন!
                </div>
              )} */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-end">
                <button type="submit" className="submit-btn-one">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserAddPost;
