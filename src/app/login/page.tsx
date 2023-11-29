'use client';

import { useState } from 'react';

export default function Login() {
  const [error, setError] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white text-black">
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="username"
          name="username"
          className="py-2 px-4 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          onChange={handleChange}
          value={inputs.username}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="py-2 px-4 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          value={inputs.password}
          onChange={handleChange}
        />
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          disabled={inputs.username && inputs.password ? false : true}
        >
          Login
        </button>
        <span data-testid="error" className={`text-center mt-5 text-red-500 ${error ? 'visible' : 'invisible'}`}>
          Something went wrong!
        </span>
      </form>
    </div>
  );
}
