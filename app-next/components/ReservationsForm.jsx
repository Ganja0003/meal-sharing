"use client";
import { useState } from "react";


//try with useParams hook when you are done instead of passing it as a prop
export default function ReservationsForm({mealId,meal}) {

  const maxReservations = meal.max_reservations
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    guests: "",
  });

  function handleInputData(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const dataToSend = {
      number_of_guests: formData.guests,
      meal_id: parseInt(mealId),
      created_date: new Date().toISOString().split("T")[0],
      contact_phonenumber: formData.number,
      contact_name: formData.name,
      contact_email: formData.email,
    };

    const response = await fetch("http://127.0.0.1:3001/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    try {
      if (response.ok) {
        alert("Successfully Reserved");
      } else {
        const err = await response.json();
        alert("Error:" + (err.message || "something went wrong"));
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="reservationsForm">
      <h1>Reservations</h1>

      <div>
        <label htmlFor="name">✏️ Name:</label>
        <input 
        name="name"
        type="text" 
        value={formData.name}
        onChange={handleInputData}
        required
        />
      </div>

      <div>
        <label htmlFor="email">📧 Email:</label>
        <input 
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputData}
        required
        />
        
      </div>

      <div>
        <label htmlFor="number">☎️ Phone:</label>
        <input 
        name="number"
        type="tel"
        value={formData.number}
        onChange={handleInputData}
        required
        />
      </div>

      <div>
        <label htmlFor="guests">🍴 Guests:</label>
        <input 
        name="guests"
        type="number"
        value={formData.guests}
        onChange={handleInputData}
        required
        min={1}
        max={maxReservations}
        />
      </div>

    <button type='submit'>Submit</button>

    </form>
  );
}
