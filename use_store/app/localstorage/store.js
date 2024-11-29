
import { create } from "zustand";

const localStore = create((set) => ({
  formData: JSON.parse(localStorage.getItem("formData")) || {
    name: "",
    email: "",
  },
  setFormData: (newData) => {
    set((state) => {
      const updatedData = { ...state.formData, ...newData };
      localStorage.setItem("formData", JSON.stringify(updatedData));
      return { formData: updatedData };
    });
  },
//   clearFormData: () => {
//     set({ formData: { name: '', email: '' } });
//     localStorage.removeItem('formData'); 
//   },
}));

export default localStore;
