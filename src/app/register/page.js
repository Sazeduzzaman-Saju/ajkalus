import Image from "next/image";
import "./register.css";
import RegisterFields from "./RegisterFields";

const Page = () => {
  console.log('first')
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
                    <RegisterFields />
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
