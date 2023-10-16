import React from "react";
import { ReactComponent as LogoFooter } from "../Assets/Logo dark.svg";
const Footer = () => {
  return (
    <section>
      <div className="px-[2%] sm:px-[10%] py-32">
        <div className="flex justify-between items-center sm:flex-row flex-col">
          <LogoFooter />
          <div className="flex flex-col items-start">
              <div class="flex flex-wrap justify-center gap-4">
                <div class="w-8 h-8 bg-gray-300"></div>
                <div class="w-8 h-8 bg-gray-300"></div>
                <div class="w-8 h-8 bg-gray-300"></div>
                <div class="w-8 h-8 bg-gray-300"></div>
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
