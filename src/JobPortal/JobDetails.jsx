import React from "react";

function JobDetails({ job, onClose, onApply, applied }) {
  if (!job) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>{job.title}</h2>
        <h3>{job.company}</h3>

        <p>📍 Location: {job.location}</p>
        <p>💼 Job Type: {job.type}</p>
        <p>💰 Salary: {job.salary}</p>
        <p>Experience: {job.experience}</p>

        <h3>Job Description</h3>
        <p>{job.description}</p>

        <h3>Required Skills</h3>
        <div className="skills">
          {job.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <button
          className="primary-btn apply-detail"
          disabled={applied}
          onClick={() => onApply(job)}
        >
          {applied ? "Already Applied" : "Apply for this Job"}
        </button>
      </div>
    </div>
  );
}

export default JobDetails;
