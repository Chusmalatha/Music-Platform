import React from 'react';

const Form = ({ fields, onSubmit, buttonText, errorMessage }) => {
  return (
    <form onSubmit={onSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md w-80 mx-auto" encType="multipart/form-data">
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
        className="w-full py-2 bg-indigo-600 rounded text-white hover:bg-indigo-700 transition"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
