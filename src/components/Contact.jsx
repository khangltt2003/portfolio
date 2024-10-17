import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To display form status

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_lcwadon";
    const templateID = "template_76ec7iz";
    const userID = "DFuPeVVyeixtXAAIP";

    emailjs
      .send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setStatus("");
        }, 2000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("Failed to send message.");
      });
  };

  return (
    <div className="w-full h-full gradient-background text-white p-8 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <p className="text-lg">Feel free to reach out by filling out the form below,</p>
      <p className="text-lg mb-8">
        or email straight to me at <span className="underline">khangltt2003@gmail.com</span>
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-slate-100 bg-opacity-90 text-black p-6 rounded-lg shadow-lg space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleInput}
            className="p-2 rounded border border-gray-300"
            placeholder="Your Name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleInput}
            className="p-2 rounded border border-gray-300"
            placeholder="Your Email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            name="message"
            value={data.message}
            onChange={handleInput}
            className="p-2 rounded border border-gray-300"
            placeholder="Your Message"
          />
        </div>

        <button type="submit" className="w-full bg-main text-white p-2 rounded hover:bg-[#1d4a5a] transition-all">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};

export default Contact;
