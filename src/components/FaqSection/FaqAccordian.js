import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const changeStyleWhenClicked={
    background:
      "var(--K-grad-2, linear-gradient(219deg, #7B115D -9.77%, #591B76 83.29%))",
      color:"white"
  }

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  function Icon({ isOpen }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`h-5 w-5 transition-transform transform ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  return (
    <div className="border rounded-lg cursor-pointer border-gray-300 p-2 sm:p-6 mb-2 flex justify-between" onClick={toggleAccordion}
    style={isOpen? changeStyleWhenClicked:{}}>
      <div>
        <div>
          <h3 className="font-bold font-poppins text-sm sm:text-base">{question}</h3>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto"  },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3 }}
              
            >
              <div className="mt-2 font-poppins text-sm sm:text-base">{answer}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Icon isOpen={isOpen}></Icon>
    </div>
  );
}

export default FaqAccordionItem;
