import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JobArray from "../components/JobArray";

const AddJobPage = () => {
  const { jobs, setJobs } = JobArray();
  const navigate = useNavigate();
  const [newJob, setNewJob] = useState({ companyName: "", category: "", JDdate: "", domain: "" });

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedJobs = [...jobs, { id: Date.now(), ...newJob }];
    setJobs(updatedJobs);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Add Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
        <input type="date" name="JDdate" onChange={handleChange} required />
        <input type="text" name="domain" placeholder="Domain" onChange={handleChange} required />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJobPage;
