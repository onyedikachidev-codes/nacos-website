"use client";
import React, { useState } from "react";
import FormInput from "../ui/FormInput";
import { title } from "process";
import Link from "next/link";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "Fisayo Fosudo",
    email: "fisayo@email.com",
    phone: "08123456789",
    message: "I'm interested in this event: Event Name",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted! Check the console for the data.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 max-w-4xl mx-auto bg-gray-50 rounded-md shadow-lg mb-18"
    >
      <h2 className="font-medium mb-8 text-xl">Interested in this event?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
        <FormInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />

        <FormInput
          label="Phone (WhatsApp)"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="08012345678"
        />

        <FormInput
          label="Message"
          name="message"
          as="textarea"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
        />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="submit"
          className="w-sm cursor-pointer rounded-md bg-green-700 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-green-700"
        >
          Send Enquiry
        </button>

        <Link
          href="/events"
          className="text-green-700 w-sm flex items-center justify-center cursor-pointer hover:text-green-600"
        >
          Or Contact Via WhatsApp
        </Link>
      </div>
    </form>
  );
};

export default EnquiryForm;
