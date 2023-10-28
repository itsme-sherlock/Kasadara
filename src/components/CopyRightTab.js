import React from "react";
import { ReactComponent as CopyRights } from "../Assets/footer/copyright.svg";
import { ReactComponent as CopyRightsMobile } from "../Assets/footer/copyrignt mobile.svg";
const CopyRight = () => {
  return (
    <section>
      {/* copyright tab */}
      <div className="bg-[#323232] py-6 flex justify-center gap-x-1">
        <CopyRights className="hidden sm:flex"></CopyRights>
        <CopyRightsMobile className="sm:hidden flex"></CopyRightsMobile>
        <p className="text-white text-center">
          All rights reserved by Kasadara - The design school
        </p>
      </div>
    </section>
  );
};
export default CopyRight;
