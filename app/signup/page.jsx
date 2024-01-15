"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER", // Default role, can be adjusted based on your needs
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      if (!response.ok) {
        // If the server response is not OK, throw an error
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      // Handle the successful response here
      const result = await response.json();
      console.log("Signup successful:", result);

      // Optionally, redirect the user or clear the form, etc.
      // Example: Redirect to login page
      // window.location.href = '/login';
      redirect("/");
    } catch (error) {
      // Handle errors here, such as displaying a message to the user
      console.error("Signup error:", error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="role">Role:</label>
        <select
          name="role"
          id="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}
