import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const page = () => {
  return (
    // bg-gradient bg-gradient-to-t"
    <>
      <div className="bg-gradient bg-gradient-to-t absolute top-0 w-full h-full z-20" />
      <section className=" relative max-w-7xl mx-auto space-y-10 z-30 bg-transparent px-4 sm:px-0 overflow-hidden">
        {/* Header */}
        <div className="text-center space-y-5 max-w-3xl mx-auto mt-10">
          <h1 className="text-2xl sm:text-6xl">
            Get in <span className="text-[#0098FF]">Touch</span>
          </h1>
          <p className="text-sm sm:text-xl">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
        {/* Header End */}

        {/* Contact Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14970.089404721462!2d85.8676425!3d20.278635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a0a1b9d5e4f7%3A0x858f50399fbcd038!2sBraynix%20AI!5e0!3m2!1sen!2sin!4v1729076370214!5m2!1sen!2sin"
              className="w-full h-[300px] lg:h-[700px] rounded-2xl"
              style={{ border: 0 }}
              //   allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full lg:w-1/2 space-y-5 ">
            <div className="space-y-3">
              <h3 className="text-3xl lg:text-5xl font-bold">Message Us</h3>
              <p className="text-sm lg:text-base">
                We&apos;ll get back to you within 24 hours
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input w-full bg-opacity-10 bg-white"
                  />
                </label>
              </div>

              <div>
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <label className="input flex items-center gap-2 bg-opacity-10 bg-white">
                  <MdOutlineEmail className="text-[#4394EA] text-xl" />
                  <input
                    type="email"
                    className="w-full bg-transparent"
                    placeholder="example@gmail.com"
                  />
                </label>
              </div>

              <div>
                <div className="label">
                  <span className="label-text">Phone Number</span>
                </div>
                <label className="input flex items-center gap-2 bg-opacity-10 bg-white">
                  <BsTelephone className="text-[#4394EA] text-xl" />
                  <input
                    type="tel"
                    className="w-full bg-transparent"
                    placeholder="Enter your Phone number"
                  />
                </label>
              </div>

              <div className="pt-2">
                <textarea
                  className="textarea w-full bg-opacity-10 bg-white"
                  placeholder="How can we help?"
                  rows={4}
                ></textarea>
              </div>

              <div>
                <button className="btn w-full bg-[#4394EA] text-white hover:bg-[#4394eabc]">
                  Let&apos;s Talk
                </button>
              </div>

              <div>
                <p className="text-xs lg:text-sm">
                  By contacting us, you agree to our Terms of Service and
                  Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* Contact Section End */}
      </section>
    </>
  );
};

export default page;
// AIzaSyBU7DnJCNaEnXNUbz4NsBtnCrIPPqlLOfo
