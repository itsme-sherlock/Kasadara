import React from "react";
import { ReactComponent as LogoFooter } from "../Assets/Logo dark.svg";
// import { ReactComponent as FB } from "../Assets/footer/Fb.svg";
import { ReactComponent as Insta } from "../Assets/footer/Insta.svg";
import { ReactComponent as Linkedin } from "../Assets/footer/Linkedin.svg";
const Footer = () => {
  return (
    <section>
      <div className="px-[5%] sm:px-[10%] py-12">
        <div className="flex sm:justify-between sm:items-center sm:flex-row flex-col gap-y-5">
          <div className="flex flex-col gap-y-6 sm:w-[50%]">
            <LogoFooter />
            <p className="w-[60% ]">
              We've carefully crafted our programs to provide you with a
              flawless educational experience, led by industry experts who bring
              real-world insights to your studies.
            </p>
          </div>
          <div className="flex flex-col items-start gap-y-5">
            <div class="flex flex-wrap justify-center gap-4">
              <a href="https://www.instagram.com/ux.kasadara/" target="_blank" rel="noreferrer">
                <FB className="w-8 h-8"></FB>
              </a>
              <a href="https://www.instagram.com/ux.kasadara/">
                <Insta className="w-8 h-8"></Insta>
              </a>
              <a href="https://www.linkedin.com/company/kasadara-school/">
                <Linkedin className="w-8 h-8"></Linkedin>
              </a>
            </div>
            <div className="">
              <div>+91 9876 543 210</div>
              <div>info@kasadara.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
