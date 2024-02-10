import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { calculateBmr } from './AnalysisFxn';


const Example = () => {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        activityLevel: ''
      });
      const [response, setResponse] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, like sending it to a server
        const result = calculateBmr(formData.gender, formData.weight, formData.height, formData.age, formData.activityLevel);
        setResponse(result);
        console.log(formData);
      };

      const clearForm=(e)=>{
        
        setFormData({
          name: '',
          age: '',
          gender: '',
          height: '',
          weight: '',
          activityLevel: ''
        });
        setResponse(null);
        
        
      };


  return (
    <div className="container mt-5 w-50 h-100">
      <div className="card border rounded shadow">
        {/* <div className="card-header text-white text-center " style={{backgroundColor:"#95aee9"}}>
          Bio Data
        </div> */}
        <div className="card-body">
        {response ? (
  // Display the response if available
  <div className="alert alert-success" role="alert">
    <h4>Results: </h4> 
    <p><strong>Name:</strong> {formData.name} <strong>Age: </strong>{formData.age}, {formData.gender}</p>
    <p><strong>BMR:</strong> {response.bmr}</p>
    <p><strong>BMI:</strong> {response.bmi}</p>
    {/* <p>Category: {response.category}</p> */}
    <h5>Suggestions:</h5>
    <table className="table">
      <thead>
        <tr>
          <th>Food Group</th>
          <th>Portion</th>
          <th>Total Calories</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(response.foodPortions).map((groupName, index) => (
          <tr key={index}>
            <td>{groupName}</td>
            <td>{response.foodPortions[groupName].portion}</td>
            <td>{response.foodPortions[groupName].calories}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="2"><strong>Total Calories</strong></td>
          <td><strong>{response.caloriesQty}</strong></td>
        </tr>
      </tbody>
    </table>
    {/* Display other properties as needed */}
    <button className="btn d-block mx-auto text-white " style={{backgroundColor:"#880808"}} onClick={clearForm}>
          Clear
    </button>
  </div>
) : (
        <form onSubmit={handleSubmit} className="p-4 rounded">
            <h3 className='text-center'>Analysis Form</h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
        
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            placeholder='Age'
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          
          <input
            type="number"
            className="form-control"
            id="height"
            name="height"
            placeholder='Height(m)'
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="weight"
            name="weight"
            placeholder='Weight (kg)'
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            id="activityLevel"
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Activity Level</option>
            <option value="Sedentary">Sedentary (little or no exercise)</option>
            <option value="Light">Lightly active (light exercise or sports 1-3 days a week)</option>
            <option value="Moderate">Moderately active (moderate exercise or sports 3-5 days a week)</option>
            <option value="Very">Very active (hard exercise or sports 6-7 days a week)</option>
            <option value="Super">Super active (very hard exercise and physical job or 2x training)</option>
          </select>
        </div>
        
        <button type="submit" className="btn d-block mx-auto text-white " style={{backgroundColor:"#121f57"}}>
          Submit
        </button>
        
      </form>
        )}
       
      </div>
    </div>
    </div>
  );
};

export default Example;
