import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, message);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="grid place-items-center pt-12">
      <h1 className="text-2xl font-medium">CONTACT FORM</h1>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <div className="my-3">
          <label htmlFor="name">Name</label>
          <input
            className="block w-80 p-2 border border-gray-500 rounded-md"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="my-3">
          <label htmlFor="email">Email</label>
          <input
            className="block w-80 p-2 border border-gray-500 rounded-md"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-3">
          <label htmlFor="phone">Phone</label>
          <input
            className="block w-80 p-2 border border-gray-500 rounded-md"
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="my-3">
          <label htmlFor="message">Message</label>
          <input
            className="block w-80 h-32 p-2 border border-gray-500 rounded-md"
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-medium py-2 w-80 rounded-full mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
