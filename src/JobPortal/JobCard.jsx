import React from "react";

function JobCard({ job, saved, onSave, onView, onApply, applied }) {
  return (
    <div className="job-card">
      <div className="job-top">
        <div className="company-logo">{job.company.charAt(0)}</div>

        <button className="save-btn" onClick={() => onSave(job.id)}>
          {saved ? "♥ Saved" : "♡ Save"}
        </button>
      </div>

      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>

      <div className="job-info">
        <span>📍 {job.location}</span>
        <span>💼 {job.type}</span>
        <span>💰 {job.salary}</span>
      </div>

      <p className="description">{job.description}</p>

      <div className="job-footer">
        <button className="outline-btn" onClick={() => onView(job)}>
          View Details
        </button>

        <button
          className="primary-btn"
          disabled={applied}
          onClick={() => onApply(job)}
        >
          {applied ? "Applied" : "Apply Now"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
