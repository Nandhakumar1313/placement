import { useState } from "react";

const JobTable = ({ jobs, setJobs }) => {
  const [editingJob, setEditingJob] = useState(null);

  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleEdit = (job) => {
    setEditingJob(job);
  };

  const handleSaveEdit = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
    setEditingJob(null);
  };

  return (
    <div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Company</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Posted Date</th>
            <th className="border p-2">Domain</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border">
              <td className="border p-2">{job.company}</td>
              <td className="border p-2">{job.category}</td>
              <td className="border p-2">{job.postedDate}</td>
              <td className="border p-2">{job.domain}</td>
              <td className="border p-2">
                <button onClick={() => handleEdit(job)} className="bg-yellow-500 text-white px-2 py-1 mr-2">Edit</button>
                <button onClick={() => handleDelete(job.id)} className="bg-red-500 text-white px-2 py-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingJob && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-xl font-bold">Edit Job</h2>
          <input type="text" value={editingJob.company} onChange={(e) => setEditingJob({ ...editingJob, company: e.target.value })} className="block border p-2 mt-2 w-full" />
          <input type="text" value={editingJob.category} onChange={(e) => setEditingJob({ ...editingJob, category: e.target.value })} className="block border p-2 mt-2 w-full" />
          <input type="date" value={editingJob.postedDate} onChange={(e) => setEditingJob({ ...editingJob, postedDate: e.target.value })} className="block border p-2 mt-2 w-full" />
          <input type="text" value={editingJob.domain} onChange={(e) => setEditingJob({ ...editingJob, domain: e.target.value })} className="block border p-2 mt-2 w-full" />
          <button onClick={() => handleSaveEdit(editingJob)} className="bg-green-500 text-white px-4 py-2 mt-2">Save</button>
        </div>
      )}
    </div>
  );
};

export default JobTable;
