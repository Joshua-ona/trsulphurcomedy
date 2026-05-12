import { useState } from "react";

export default function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    method: "Mobile Money"
  });

  const phoneNumber = "+256 706 423099"; // your WhatsApp number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, I would like to donate to Tr Sulphur Comedy.

Name: ${formData.name}
Email: ${formData.email}
Amount: UGX ${formData.amount}
Method: ${formData.method}`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="section">
      <h2>Support the Ministry</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="amount"
          placeholder="Amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <select
          name="method"
          value={formData.method}
          onChange={handleChange}
        >
          <option>Mobile Money</option>
          
        </select>

        <button type="submit">Donate</button>
      </form>
    </div>
  );
}