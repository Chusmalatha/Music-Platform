import React from 'react';
import { motion } from 'framer-motion';

const Form = ({ fields, onSubmit, buttonText, errorMessage }) => {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y:0}}
      transition={{duration:0.5}}
    >
    <form
      onSubmit={onSubmit}
      className="bg-black p-6 sm:p-8 rounded-lg shadow-md w-full max-w-sm sm:max-w-md mx-auto"
      encType="multipart/form-data"
    >
      {fields.map(({ name, type, placeholder, value, onChange }) => (
        <div key={name} className="mb-4">
          {type === "file" ? (
            <input
              type="file"
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          ) : (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          )}
        </div>
      ))}

      {errorMessage && (
        <p className="text-sm text-red-500 mb-4 text-center">{errorMessage}</p>
      )}

      <button
        type="submit"
        className="w-full py-2 bg-white text-black font-semibold rounded hover:bg-indigo-700 hover:text-white transition"
      >
        {buttonText}
      </button>
    </form>
    </motion.div>
  );
};

export default Form;
