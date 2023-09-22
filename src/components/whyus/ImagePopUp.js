import React from 'react';

function ImagePopup({ isOpen, onClose, imageSrc, imageAlt, name, designation }) {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-2/3 p-4 rounded-lg shadow-lg">
          <img src={imageSrc} alt={imageAlt} className="max-w-full max-h-64" />
          <h2 className="text-lg font-semibold mt-2">{name}</h2>
          <p className="text-sm text-gray-600">{designation}</p>
          <button onClick={onClose} className="mt-4 bg-gray-300 px-4 py-2 rounded-md">
            Close
          </button>
        </div>
      </div>
    )
  );
}

export default ImagePopup;
