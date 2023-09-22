import React from "react";
import collageImage from "../../Assets/WhyUs/collage1.png";
import { useState} from "react";
// import ImagePopUp from "./ImagePopUp";

function ImageComponent({
  collageImage,
  name,
  designation,
  company,
  position,
  experience,
  top,
  left,
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
  const userCardStyles = {
    borderRadius: "8px",
    background: "var(--K-Green, #0F8C41)",
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
    left: `${left}px`,
    top: `${top}px`,
    opacity: 0, // Initial opacity value
    transition: "opacity 0.3s ease", // Opacity transition property
  };

  if (isclicked) {
    borderStyles.border = `10px solid #0F8C41`; // Change the border color when clicked
    if (showInfo) {
      userCardStyles.opacity = 1; // Update opacity when clicked
    }
  }
  return (
    <div
      className={`w-14 sm:w-32 h-14 sm:h-32  rounded-full border-2 sm:border-8 overflow-hidden`}
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
            <p className="bg-[#32323261] px-4 text-white text-xs rounded-md">
              {experience}
            </p>
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

function WhyUs(props) {
  const imageData = [
    // row-1
    null,
    {
      collageImage: collageImage,
      name: "Mathavan",
      designation: "Developer",
      company: "Microsoft",
      position: "Mentor",
      experience: "10+ Years",
      top: 0,
      left: 300,
    },
    null,
    // row-2
    {
      collageImage: collageImage,
      name: "Mathavan",
      designation: "Developer",
      company: "Microsoft",
      position: "Mentor",
      experience: "10+ Years",
      top: 150,
      left: -250,
    },
    null,
    {
      collageImage: collageImage,
      name: "Mathavan",
      designation: "Developer",
      company: "Microsoft",
      position: "Mentor",
      experience: "10+ Years",
      top: 150,
      left: 450,
    },
    // row-3
    null,
    {
      collageImage: collageImage,
      name: "Mathavan",
      designation: "Developer",
      company: "Microsoft",
      position: "Mentor",
      experience: "10+ Years",
      top: 300,
      left: 300,
    },
    null,
  ];
  return (
    <section
      className="overflow-hidden  text-center mt-40 "
      style={{
        // background: 'linear-gradient(219deg, rgba(123, 17, 93, 0.00) -9.63%, #591B76 82.78%)',
        background:
          "var(--K-grad-2, linear-gradient(219deg, #7B115D -9.77%, #591B76 83.29%))",
      }}
    >
      <div
        className="border-2"
        // style={{
        //   height:`${props.sectionHeight}px`,
        // }}
      >
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

        <div className="flex flex-col justify-around sm:flex-row items-center my-6 sm:-space-x-72">
          {/*video content 👇*/}
          <div className="sm:h-64 sm:w-1/3 sp  mx-4">
            <iframe
              className=" border-2 w-full h-full"
              src={`https://www.youtube.com/embed/VIDEO_ID`}
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>

          {/*Grid for photo Frames*/}
          <div className="flex w-full sm:w-fit">
            <div className="relative my-12 sm:grid flex sm:grid-cols-3 sm:gap-4 w-full sm:w-fit justify-around">
              {imageData.map((data, index) => {
                console.log(data);
                return (
                  <div key={index}>
                    {data !== null && <ImageComponent {...data} />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
