import React from "react";
import collageImage from "../../Assets/WhyUs/collage1.png";
import { useState, useRef } from "react";
import ImagePopUp from "./ImagePopUp";

function ImageComponent({ collageImage }) {
  // Each ImageComponent has its own 'isclicked' state
  const [isclicked, setIsClicked] = useState(false);
  const [showRectangle, setShowRectangle] = useState(false);
  const [rectanglePosition, setRectanglePosition] = useState({
    top: 0,
    left: 0,
  });
  const imageRef = useRef(null);

  const handleClick = () => {
    console.log("imageRect");
    setIsClicked(!isclicked); //state is changed therefore the component re renders
    setShowRectangle(!showRectangle); // Show rectangle when clicked, hide when clicked again
    if (imageRef.current) {
      const imageRect = imageRef.current.getBoundingClientRect();
      console.log("imageRect " + imageRect);
      setRectanglePosition({
        top: imageRect.top + window.scrollY,
        left: imageRect.left + window.scrollX,
      });
    }
  };
  const borderStyles = {
    border: `5px solid transparent`,
    transition: "border 0.3s ease", // Add a transition effect to the border property
  };

  if (isclicked) {
    borderStyles.border = `10px solid #0F8C41`; // Change the border color when clicked
  }
  return (
    <div
      className={`w-14 sm:w-32 h-14 sm:h-32 rounded-full border-2 sm:border-8 ${
        isclicked ? "border-[#0F8C41]" : ""
      } overflow-hidden`}
      style={borderStyles}
    >
      <img
        src={collageImage}
        alt="photoTop"
        className="object-center w-full h-full hover:cursor-pointer"
        onClick={handleClick}
      />
      {showRectangle && (
        <div
          className="bg-red-500 w-16 h-16 absolute top-0 left-0"
          style={{
            top: `${rectanglePosition.top}px`,
            left: `${rectanglePosition.left}px`,
          }}
        ></div>
      )}
    </div>
  );
}

function WhyUs(props) {
  return (
    <section
      className="overflow-hidden  text-center "
      style={{
        // background: 'linear-gradient(219deg, rgba(123, 17, 93, 0.00) -9.63%, #591B76 82.78%)',
        background:
          "var(--K-grad-2, linear-gradient(219deg, #7B115D -9.77%, #591B76 83.29%))",
      }}
    >
      <div
        className="border-2"
        style={{
          height:`${props.sectionHeight}px`,
        }}
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

        <div className="flex flex-col justify-around sm:flex-row items-center my-6 sm:my-24">
          {/*video content 👇*/}

          {/*Grid for photo Frames*/}
          <div className="my-12 sm:grid flex sm:grid-cols-3 gap-4 ">
            {/* Row 1 */}
            <div className="hidden sm:block"></div>
            <ImageComponent collageImage={collageImage} />
            <div className="hidden sm:block"></div>

            {/* Row 2 */}
            <ImageComponent collageImage={collageImage} />
            <div className="mx-10 hidden sm:block "></div>
            <ImageComponent collageImage={collageImage} />
            {/* Row 3 */}
            <div className="hidden sm:block"></div>
            <ImageComponent collageImage={collageImage} />
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
