import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        console.log(formData);
      };


  return (
    <div className="container mt-5 w-50 ">
      <div className="card border rounded shadow">
        {/* <div className="card-header text-white text-center " style={{backgroundColor:"#95aee9"}}>
          Bio Data
        </div> */}
        <div className="card-body">
        {response ? (
            // Display the response if available
            <div className="alert alert-success" role="alert">
              {response.message} {/* Adjust this based on the structure of your response */}
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
            placeholder='Height'
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
            placeholder='Weight'
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
            <option value="Normal">Normal</option>
            <option value="Extra">Extra</option>
            <option value="Other">Other</option>
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
