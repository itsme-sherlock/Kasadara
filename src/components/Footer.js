import React from "react";
import { ReactComponent as LogoFooter } from "../Assets/Logo dark.svg";
import { ReactComponent as FB } from "../Assets/footer/fb.svg";
import { ReactComponent as Insta } from "../Assets/footer/insta.svg";
import { ReactComponent as Linkedin } from "../Assets/footer/linkedin.svg";
const Footer = () => {
  return (
    <section>
      <div className="px-[2%] sm:px-[10%] py-12">
        <div className="flex justify-between items-center sm:flex-row flex-col">
          <div className="flex flex-col gap-y-6 w-[50%]">
            <LogoFooter />
            <p className="w-[60% ]">
              We've carefully crafted our programs to provide you with a
              flawless educational experience, led by industry experts who bring
              real-world insights to your studies.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div class="flex flex-wrap justify-center gap-4">
              <a href="https://www.instagram.com/ux.kasadara/" target="_blank" rel="noreferrer">
                <FB className="w-8 h-8 bg-gray-300"></FB>
              </a>
              <a href="https://www.instagram.com/ux.kasadara/">
                <Insta className="w-8 h-8 bg-gray-300"></Insta>
              </a>
              <a href="https://www.linkedin.com/company/kasadara-school/">
                <Linkedin className="w-8 h-8 bg-gray-300"></Linkedin>
              </a>
            </div>
            <div>+91 9876 543 210</div>
            <div>help@kasadara.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
