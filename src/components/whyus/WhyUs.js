import React from "react";
import collageImage from "../../Assets/WhyUs/collage1.png";
import { useState } from "react";
import ImagePopUp from "./ImagePopUp";

function ImageComponent({
  collageImage,
  name,
  designation,
  company,
  position,
  experience,
  top,
  left
}) {
  // Each ImageComponent has its own 'isclicked' state
  const [isclicked, setIsClicked] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  console.log(showInfo);

  const handleClick = () => {
    console.log("handleClick called");
    setIsClicked(!isclicked);
    setShowInfo(!showInfo);
  };
  const borderStyles = {
    border: `5px solid transparent`,
    transition: "border 0.3s ease", // Add a transition effect to the border property
  };
  const userCardStyles={
    borderRadius: "8px",
    background: "var(--K-Green, #0F8C41)",
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
    left:`${left}px`,
    top:`${top}px`,
    opacity: 0,
    transition: "opacity 0.3s ease",

  }

  if (isclicked) {
    borderStyles.border = `10px solid #0F8C41`; // Change the border color when clicked
    userCardStyles.opacity=1;
  }
  return (
    <div
      className={`w-14 sm:w-32 h-14 sm:h-32  rounded-full border-2 sm:border-8 ${
        isclicked ? "border-[#0F8C41]" : ""
      } overflow-hidden`}
      style={borderStyles}
    >
      <div className="">
        <img
          src={collageImage}
          alt="photoTop"
          className="object-center w-full h-full hover:cursor-pointer"
          onClick={handleClick}
        />
      </div>
      {showInfo && (
        <div
          className={`absolute flex flex-col items-start w-60 p-4  bg-green-700 text-center mt-2`}
          style={userCardStyles}
        >
          <div className="flex justify-between w-full">
            <p className="text-sm  flex  font-bold text-white">{name}</p>
            <p
              className="bg-[#32323261] px-4 text-white text-xs rounded-md"
            >{experience}</p>
          </div>
          <p className="text-xs text-white text-opacity-70">{designation}</p>
          <p className="text-xs font-normal text-white text-opacity-70">
            {company}
          </p>
          <p className="text-xs font-normal mt-1  text-[#FBFF2F]">{position}</p>
        </div>
      )}
    </div>
  );
}

function WhyUs() {
  return (
    <section
      className="overflow-hidden  text-center "
      style={{
        // background: 'linear-gradient(219deg, rgba(123, 17, 93, 0.00) -9.63%, #591B76 82.78%)',
        background:
          "var(--K-grad-2, linear-gradient(219deg, #7B115D -9.77%, #591B76 83.29%))",
      }}
    >
      <div>
        <div className="my-6 sm:my-12 flex flex-col items-start mx-4 sm:ml-0 sm:pl-20 sm:w-full  ">
          <h1 className="text-white font-poppins font-extrabold text-2xl sm:text-4xl ">
            Why Us?
          </h1>
          <div className="py-3"></div>
          {/*Empty Space to give sapce bteween*/}
          <p className="text-white font-poppins font-normal text-xs sm:text-xl text-left">
            Hear from our mentors who have{" "}
            <span className="text-[#84ED9B] font-poppins font-normal text-xs sm:text-xl">
              deep expertise in{" "}
            </span>
            <span className="text-[#84ED9B] font-poppins font-normal text-xs sm:text-xl">
              <br className="hidden sm:block"></br>product and service
              industries
            </span>
          </p>
        </div>

        <div className="flex flex-col justify-around sm:flex-row items-center my-6 sm:my-24">
          {/*video content 👇*/}

          {/*Grid for photo Frames*/}
          <div className="relative my-12 sm:grid flex sm:grid-cols-3 gap-4 ">
            {/* Row 1 */}
            <div className="hidden sm:block"></div>
            <ImageComponent
              collageImage={collageImage}
              name="Mathavan"
              designation="Developer"
              company={"Microsoft"}
              position={"Mentor"}
              experience={`10+ Years`}
              top={0}
              left={300}
            />
            <div className="hidden sm:block"></div>

            {/* Row 2 */}
            <ImageComponent
              collageImage={collageImage}
              name="havan"
              designation="Developer"
              company={"Microsoft"}
              position={"Mentor"}
              experience={`10+ Years`}
              top={10}
              left={300}
            />
            <div className="mx-10 hidden sm:block "></div>
            <ImageComponent
              collageImage={collageImage}
              name="Athavan"
              designation="Developer"
              company={"Microsoft"}
              position={"Mentor"}
              experience={`10+ Years`}
              top={150}
              left={450}
            />
            {/* Row 3 */}
            <div className="hidden sm:block"></div>
            <ImageComponent
              collageImage={collageImage}
              name="van"
              designation="Developer"
              company={"Microsoft"}
              position={"Mentor"}
              experience={`10+ Years`}
              top={300}
              left={300}
            />
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
