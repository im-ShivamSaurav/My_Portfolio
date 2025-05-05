import React, { useState } from "react";

const ContactForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send form data to your API endpoint
    const response = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
      });
    } else {
      console.error("Failed to send message");
    }
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Reach Me Out!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        If you have any questions or just want to say hello, feel free to reach out!
      </p>

      {/* Input Field */}
      <form className="mt-8 block w-full overflow-hidden" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-black flex-1 text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="bg-black flex-1 text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-black flex-1 text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="invalid:text-gray-600 w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 appearance-none py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="" disabled hidden className="placeholder:text-gray-600">
              Choose the reason of Approach
            </option>
            <option value="Query">Query/Issue</option>
            <option value="Message">Message</option>
          </select>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Write your thoughts..."
        ></textarea>

        <div className="mt-4">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#7947d4] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
