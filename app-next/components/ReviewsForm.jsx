"use client";
import { useState } from "react";

export default function ReviewsForm({ mealId }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    stars: "",
  });
  const url = 'https://meal-sharing-production-fc23.up.railway.app';

  function handleFormInput(event) {
    const inputName = event.target.name;

    setFormData({
      ...formData,
      [inputName]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const dataToSend = [
      {
        title: formData.title,
        description: formData.description,
        stars: formData.stars,
        meal_id: parseInt(mealId),
        created_date: new Date().toISOString().split("T")[0],
      },
    ];

    const response = await fetch(`${url}/api/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });

    try {
      if (response.ok) {
        alert("Review Submitted");
      } else {
        const err = await response.json();
        alert(err.message);
      }
    } catch (error) {
      alert("network issue" + err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="reviewForm">
      <h1>🌟 Reviews</h1>

      <div className="reviewFormContainer">
        <div>
          <label htmlFor="title">📝 Title:</label>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleFormInput}
            required
          />
        </div>

        <div>
          <label htmlFor="description">💬 Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleFormInput}
            rows="20"
            cols="80"
            placeholder="Write your review here..."
            required
          />
        </div>

        <div>
          <label htmlFor="stars">⭐ Stars:</label>
          <input
            name="stars"
            type="number"
            value={formData.stars}
            onChange={handleFormInput}
            min={1}
            max={5}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
