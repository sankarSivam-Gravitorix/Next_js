"use client";
import { useState } from "react";
import FormButton from "./components/form_button";
import FormInput from "./components/form_input";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const formData = {
      name,
      email,
    };
    console.log("send info", formData);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "lightseagreen",
      }}
    >
      <div
        style={{
          width: "95%",
          height: "auto",
          border: "1px solid yellow",
          backgroundColor: "whitesmoke",
          borderRadius: "5px",
          boxShadow: "2px 2px 2px 0.5px gray ",
          padding: "40px",
          marginTop: "50px",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Contact Us</h2>

        <div>
          <FormInput
            label="Full Name"
            name="fullName"
            placeholder="Full Name"
            value={name}
            handleOnChange={(e) => setName(e.target.value)}
            handleSubmit={(data) => console.log("send info", data)}
          />
        </div>
        <div>
          <FormInput
            label="Email Address"
            name="email"
            placeholder="Email Address"
            value={email}
            handleOnChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <FormButton text="Save" handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
