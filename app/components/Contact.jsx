import React from "react";

const Contact = () => {
  return (
    <section className="code-section" id="sumxbr">
      <div className="mx-auto px-4 py-20 lg:container sm:px-12 xl:px-32">
        <div className="relative z-10 rounded-3xl bg-[#ffffff] p-6 shadow-[0_0_25px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="rounded-3xl bg-[var(--primary-color)] p-8 pt-12 text-[var(--light-text-color)]">
              <div className="mb-4 uppercase">Connect with Us</div>
              <div className="mb-6 text-4xl font-semibold [font-family:var(--font-family-heading)]">
                Let's Bring Your Vision to Life
              </div>
              <div className="hidden py-4 lg:block">
                <div className="mb-6 flex flex-row space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6">
                    <i
                      className="fa-solid fa-location-dot text-3xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-semibold">Our Showroom</div>
                    <div>Boulder, Colorado</div>
                  </div>
                </div>
                <div className="mb-6 flex flex-row space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6">
                    <i
                      className="fa-solid fa-envelope text-3xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-semibold">Email Us</div>
                    <div>
                      <a href="mailto:info@luxuryinteriors.com">
                        info@luxuryinteriors.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#ffffff] p-6">
                    <i
                      className="fa-solid fa-phone text-3xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-semibold">Get in Touch</div>
                    <div>(720) 555-6789</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-6">
              <form data-landingsite-contact-form="">
                <div className="flex flex-col space-y-4 md:space-y-12">
                  <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                    <div className="w-full">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="font-medium text-[var(--dark-text-color)]"
                        >
                          First Name
                        </label>
                      </div>
                      <div>
                        <input
                          name="first-name"
                          type="text"
                          className="w-full border border-[#ffffff] border-b-[var(--light-border-color)] p-2"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div>
                        <label
                          htmlFor="last-name"
                          className="font-medium text-[var(--dark-text-color)]"
                        >
                          Last Name
                        </label>
                      </div>
                      <div>
                        <input
                          name="last-name"
                          type="text"
                          className="w-full border border-[#ffffff] border-b-[var(--light-border-color)] p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                    <div className="w-full">
                      <div>
                        <label
                          htmlFor="email"
                          className="font-medium text-[var(--dark-text-color)]"
                        >
                          Your Email
                        </label>
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          className="w-full border border-[#ffffff] border-b-[var(--light-border-color)] p-2"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div>
                        <label
                          htmlFor="phone"
                          className="font-medium text-[var(--dark-text-color)]"
                        >
                          Your Phone
                        </label>
                      </div>
                      <div>
                        <input
                          type="phone"
                          name="phone"
                          className="w-full border border-[#ffffff] border-b-[var(--light-border-color)] p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div>
                      <label
                        htmlFor="message"
                        className="font-medium text-[var(--dark-text-color)]"
                      >
                        Your Message
                      </label>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        rows="4"
                        className="w-full border border-[#ffffff] border-b-[var(--light-border-color)] p-2"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="items-center rounded-[var(--button-rounded-radius)] bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-sm font-semibold uppercase text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
                    >
                      Start Your Customization Journey
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
