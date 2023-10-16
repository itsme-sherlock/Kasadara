import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ReactComponent as Add } from "../../Assets/Faq/add.svg";

function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const changeStyleWhenClicked = {
    background: "#EDEDED",
    color: "black",
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const iconVariants = {
    open: { rotate: 225, originX: 20, originY: 20,  transition: { duration: 0.1,  ease: [0.1, 0.1, 0.1, 0.1] } },
    closed: { rotate: -270, originX: 20, originY: 20,  transition: { duration: 0.1, ease: [0.1, 0.1, 0.1, 0.1] } },
  };
  function Icon({ isOpen }) {
   
    return (
      <motion.svg
       
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className={`transition-transform transform flex-shrink-0 w-5 h-5 sm:w-10 sm:h-10`}
        animate={isOpen ? "open" : "closed"}
        variants={iconVariants}
      >
        <mask
          id="mask0_1611_6030"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="40"
        >
          <rect width="40" height="40" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1611_6030)">
          <path
            d="M18.6128 21.3915H8.33496V18.6137H18.6128V8.33594H21.3905V18.6137H31.6683V21.3915H21.3905V31.6693H18.6128V21.3915Z"
            fill="#1C1B1F"
          />
        </g>
      </motion.svg>
    );
  }

  return (
    <div
      className="rounded-lg cursor-pointer  p-2 sm:p-6 mb-2 flex justify-between bg-white"
      onClick={toggleAccordion}
      style={isOpen ? changeStyleWhenClicked : {}}
    >
      <div className="flex flex-col justify-center">
        <div >
          <h3 className="font-semibold font-poppins text-sm sm:text-2xl">
            {question}
          </h3>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mt-2 font-poppins text-sm sm:text-xl">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Icon isOpen={isOpen}></Icon>
    </div>
  );
}

export default FaqAccordionItem;
