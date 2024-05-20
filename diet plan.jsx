import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import './DietPlanUpload.css';

const DietPlanUpload = () => {
  const [title, setTitle] = useState('');
  const [calories, setCalories] = useState('');
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('calories', calories);
      formData.append('recipe', recipe);
      formData.append('ingredients', ingredients);

      // Send formData to backend for processing
      // Example:
      const response = await fetch('http://localhost:5000/api/upload-diet-plan', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast.success("Diet plan uploaded successfully");
      } else {
        toast.error("Failed to upload diet plan");
      }
    } catch (error) {
      console.error("Error uploading diet plan:", error);
      toast.error("Failed to upload diet plan");
    }
  };

  return (
    <div className="diet-plan-upload">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
      <div className="form-container">
        <h2>Upload Diet Plan</h2>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Calories Intake:</label>
          <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Recipe:</label>
          <textarea value={recipe} onChange={(e) => setRecipe(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label>Ingredients:</label>
          <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
        </div>
        <button onClick={handleUpload}>Upload</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DietPlanUpload;
