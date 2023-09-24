import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FaqAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-y border-gray-300 p-2 mb-2">
      <div
        className="cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="font-semibold font-poppins text-lg">{question}</h3>
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
            <div className="mt-2 font-poppins">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FaqAccordionItem;
