import React from "react";
import './dashboard.css'
import { FaFileUpload } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { BiRightArrow } from "react-icons/bi";

export default async function page({params}) {
    // const { dynamicCategory } = params;

    // const combinedPathMore = await dynamicCategory.slice(1).join("/");
    // const route = `https://backoffice.ajkal.us/category-news/${combinedPathMore}`;
    // //(route);
    // let data = await fetch(route);
    // let categoryData = await data.json();
    // // //(categoryData.data);
    // let CategoryList = [...categoryData?.data] || [];
    //(params);
  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-lg-12">
          <h3 className="text-center pt-5">
            Hello, আপনার ড্যাশবোর্ড
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="row py-5">
            <div className="col-lg-6">
              <div className="card border-0 rounded-1 shadow-sm">
                <div className="card-body info-cards d-flex justify-content-between  align-items-center ">
                  <div>
                    <p className="icon-container">
                      <FaFileUpload></FaFileUpload>
                    </p>
                    <h4 className="pt-3">সংবাদ পোস্ট।</h4>
                  </div>
                  <p className="icon-container-amount">
                    58
                    {/* {userNewsData !== null ? (
                      <span  >{userNewsData.length}</span>
                    ) : (
                      <Skeleton height={10}></Skeleton>
                    )} */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 rounded-1 shadow-sm">
                <div className="card-body info-cards d-flex justify-content-between  align-items-center ">
                  <div>
                    <p className="icon-container">
                      <BiRightArrow></BiRightArrow>
                    </p>
                    <h4 className="pt-3">মোট বিজ্ঞাপন পোস্ট।</h4>
                  </div>
                  <p className="icon-container-amount">
                    52
                    {/* {userAddData !== null ? (
                      <span  >{userAddData.length}</span>
                    ) : (
                      <Skeleton height={10}></Skeleton>
                    )} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-lg-12">
          <div>
            <h3 className="text-center pt-3">সকল পোস্ট</h3>
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover table-striped border text-center">
                    <thead>
                      <tr className="user-th">
                        <th>Sl</th>
                        <th>News Image</th>
                        {/* <th>Thumb Image</th> */}
                        <th>Post Image</th>
                        <th>Post Title</th>
                        <th>Category</th>
                        <th>Post Date</th>
                        {/* <th>Post Status</th> */}
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    {/* <tbody className="text-center">
                      {userNewsData &&
                        userNewsData.map((item, index) => (
                          <tr className="text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <img
                                width={50}
                                className="img-fluid"
                                src={`https://ajkal.us/img/news/${item.title_img}`}
                                alt={item.news_title}
                                title={item.news_title}
                              />
                            </td>
                            <td>{item.news_title}</td>
                            <td>{item.category_name}</td>
                            <td>{item.news_time}</td>
                            <td>
                              <span className="badge bg-info rounded-2">
                                {item.status === 0 ? "Inactive" : "Active"}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody> */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
