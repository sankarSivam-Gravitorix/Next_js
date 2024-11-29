import React from "react";
import { useEffect } from "react";
import localStore from "./store";

const MyForm = () => {
  const { formData, setFormData, clearFormData } = localStore();

  const handleInputChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); 
    // clearFormData(); 
  };

  useEffect(() => {
    console.log("Form data loaded from localStorage:", formData);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default MyForm;
