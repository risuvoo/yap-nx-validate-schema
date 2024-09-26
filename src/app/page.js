"use client";
import { useState } from "react";
import { signUp } from "./utilities/ValidationSchema";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp.validate(formData, { abortEarly: false });
      console.log("Form is valid:", formData);
    } catch (validationErrors) {
      const formattedErrors = {};
      validationErrors.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      setErrors(formattedErrors);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-3 w-1/2">
        <span>Name</span>
        <input
          type="text"
          className="border"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <span>Email</span>
        <input
          type="text"
          className="border"
          id="name"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <button
          onClick={handleSubmit}
          className="px-3 py-1.5 bg-blue-500 text-white"
        >
          Button
        </button>
      </div>
    </div>
  );
}
