import React from "react";

const page = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-center pt-5 main-color"> নিউজ পোস্ট করি ।</h3>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-12">
            <div
              className="card shadow-sm "
              style={{ border: "1px solid #eee" }}
            >
              <div className="card-body"></div>
              <form>
                <div className="row p-4 pb-0">
                  {/* Title */}
                  <div className="col-lg-8 mb-3">
                    <label htmlFor="news_title">টাইটেল</label>
                    <input
                      id="news_title"
                      className="w-100 form-control"
                      placeholder="নিউজ এর টাইটেল দিন"
                      type="text"
                      //   aria-invalid={errors.news_title ? "true" : "false"}
                    />
                    {/* {errors.news_title && (
                      <p role="alert" className="text-danger">
                        {errors.news_title.message}
                      </p>
                    )} */}
                  </div>

                  {/* Short Brief */}
                  <div className="col-lg-4 mb-3">
                    <label htmlFor="short_brief">শর্ট ব্রিফ</label>
                    <input
                      id="short_brief"
                      className="w-100 form-control"
                      placeholder="নিউজ এর শর্ট ব্রিফ দিন"
                      type="text"
                      //   aria-invalid={errors.short_brief ? "true" : "false"}
                    />
                    {/* {errors.short_brief && (
                      <p role="alert" className="text-danger">
                        {errors.short_brief.message}
                      </p>
                    )} */}
                  </div>

                  {/* Category */}
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="category_id">ক্যাটাগরি</label>
                    <select
                      id="category_id"
                      className="form-select"
                      aria-label="Select category"
                      //   aria-invalid={errors.category_id ? "true" : "false"}
                    >
                      <option value="" disabled>
                        Choose a category
                      </option>
                      {/* {categoryLink.map((data) => (
                        <option value={data.id} key={data.id}>
                          {data.name_bangla}
                        </option>
                      ))} */}
                    </select>
                    {/* {errors.category_id && (
                      <p role="alert" className="text-danger">
                        {errors.category_id.message}
                      </p>
                    )} */}
                  </div>

                  {/* Video URL */}
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="video_url">ভিডিও লিঙ্ক</label>
                    <input
                      id="video_url"
                      className="w-100 form-control"
                      placeholder="ভিডিও লিঙ্ক"
                      type="text"
                      //   aria-invalid={errors.video_url ? "true" : "false"}
                    />
                    {/* {errors.video_url && (
                      <p role="alert" className="text-danger">
                        {errors.video_url.message}
                      </p>
                    )} */}
                  </div>

                  {/* Author Name */}
                  <div className="col-lg-4 mb-3">
                    <label htmlFor="news_author">অথর নেম</label>
                    <input
                      id="news_author"
                      className="w-100 form-control"
                      type="text"
                      readOnly
                      //   defaultValue={userData?.full_name || ""}
                    />
                  </div>

                  {/* News Image */}
                  <div className="col-lg-4 mb-3">
                    <label htmlFor="news_image">নিউজ ইমেজ</label>
                    <input
                      id="news_image"
                      className="w-100 form-control"
                      type="file"
                      //   aria-invalid={errors.news_image ? "true" : "false"}
                    />
                    {/* {errors.news_image && (
                      <p role="alert" className="text-danger">
                        {errors.news_image.message}
                      </p>
                    )} */}
                  </div>

                  {/* Thumbnail Image */}
                  <div className="col-lg-4 mb-3">
                    <label htmlFor="thumbnail_image">থাম্বনেইল ইমেজ</label>
                    <input
                      id="thumbnail_image"
                      className="w-100 form-control"
                      type="file"
                      //   aria-invalid={errors.thumbnail_image ? "true" : "false"}
                    />
                    {/* {errors.thumbnail_image && (
                      <p role="alert" className="text-danger">
                        {errors.thumbnail_image.message}
                      </p>
                    )} */}
                  </div>

                  {/* News Details */}
                  <div className="col-lg-12 mb-3">
                    <label htmlFor="news_detail">নিউজ ডিটেইলস</label>
                    <textarea
                      id="news_detail"
                      className="form-control"
                      rows="3"
                    ></textarea>
                    {/* {errors.news_detail && (
                      <p role="alert" className="text-danger">
                        {errors.news_detail.message}
                      </p>
                    )} */}
                  </div>
                </div>
                <div className="row pt-3 pb-0">
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="submit-btn-one w-100 mx-0 mb-0"
                    >
                      পোস্ট করুন
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
