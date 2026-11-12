//!07/08/2026
//@Funtional components
// const App=()=>{
//   return <h1>Iam functional Based Component ✨</h1>
// }
// export default App
//@ class components
// import { Component } from "react";
// class App extends Component{
//   render(){
//     return<h1>Iam class Component</h1>
//   }
// }
// export default App

// import Greet from "./Props/Greet"

//@ reusability
// import Message from "./Components/Message"
// const App=()=>{
//   return <div>
//     <Message/>
//     <Message/>
//     <Message/>
//   </div>
// }
// export default App

//@10/08/2026 jsx
// import JavasccriptXml from './JSX/JavasccriptXml'

// const App=()=>{
//   return <JavasccriptXml/>
// }
// export default App

//@12-08-2026(props)

// import Greet from "./Props/Greet"
// import Mother from "./Props/Mother"
// const App = () => {
//   return <>
//     {/* {/* {/* <Greet trainer="Yasin"/>
//     <Greet trainer="Monty"/>
//     <Greet trainer="Pavan"/>
//     <Greet trainer="Deva"/> */}
// <Mother/> */
// </>

// }

// export default App

//@13-08-26
// import Restaurant from "./Props/Restaurant";

// const App = () => {
//   return (
//     <>
//       <Resturant title="krishnapattam" food="biryani" price={400} />
//       <Resturant title="mehfil" food="mandi">
//         <p>
//           Cheap and best in quality😋
//         </p>
//       </Resturant>
//       <Resturant title="SVM">

//           <h1>This is my favourite Resturant😄</h1>

//       </Resturant>
//     </>
//   )
// }

//  export default App;
//@17-08-2026(renderlist)

// import RenderList from './List/RenderList'

// const App = () => {
//   return (
//    <RenderList/>
//   )
// }

// export default App
//@ 18-08-2026(conitionalrendering)
// import Condition from "./ConditionalRendering/Condition"

// const App = () => {
//   return <Condition/>
// }

// export default App
//@19-08-2026

// import Events from "./Events/Events"
// const App = () => {
//   return <Events/>
// }

// export default App
//@24-08-2026
// import Count from "./State/Count"

// const App = () => {
//   return <Count/>

// }

// export default App
//@example task

// import Theme from "./State/Theme"

//  const App = () => {
//   return

//   <Theme/>

// }
// export default App
//@example
// import React from 'react'
// import User  from './State/User'
// const App = () => {
//   return (
//     <User/>
//   )
// }

// export default App

//@25/08/2026
//!(lifecycle)

// import Phases from "./LifeCycle/Phases"
// import FallbackUI from "./LifeCycle/FallbackUI"
// import Welcome from "./LifeCycle/Welcome"
// const App = () => {
//   return
//   {/* /<Phases/> */}
//  <FallbackUI>
//   <Welcome trainer="pavan"/>
//  </FallbackUI>

// }

// export default App
//! 26/08/2026(hooks/usestate)
//import React from 'react'
//import Counter from './useState/Counter'
//import Theme from './useState/Theme'

// const App = () => {
//   return <>
//    <Counter/>
//   //<Theme/>
//   </>
// }

// export default App
//@27/08/2026
// import { Salary } from './Salary'
// import Animals from './useState/Animals'
// import User from './useState/User'
// //  import Food from './useState/Food'
// // import Theme from './useState/Theme'

// const App = () => {
//   return <>
//     {/* <Theme/>
//    <Food/>  */}
//    <Animals/>
//    <User/>
//    <Salary/>
//   </>
// }

// export default App

//!31/08/2026(useContext)
// import React from 'react'
// import Malakpet from './useContext/Malakpet'
// import { Icecreamecontext, ItemContext } from './useState/Zepto'
// import {gulamabjamuncontext} from './useState/Zepto'

// const App = () => {
//   let products={
//     biscuits:"tiger",
//     chips:["bingo","a1","lays"],
//     softDrinks:()=>"maaza",
//     chocolate:{
//       choco1:"5 star",
//       choco2:"kit kat"
//     }
//   }
//   return (
//   <Icecreamecontext.Provider value="Chocolate">
//    <gulamabjamuncontext.Provider value="kalajamun">

//     <ItemContext value={products}>
//       <Malakpet/>
//     </ItemContext>
//     </gulamabjamuncontext.Provider>
//     </Icecreamecontext.Provider>
//   )
// }

// export default App

//!01-09-2026  (useRef.....focusiginput field)
// import Reference from './useRef/Reference'

// const App = () => {
//   return <Reference/>
// }

// export default App
//!3-09-2026(useCallback)
// import React from 'react'
// import Title from './useCallback/Title'

// const App = () => {
//   return (
//     <div>
//       <Title/>
//     </div>
//   )
// }

// export default App
//!4-09-2026(adding styles)
// import React from 'react'
// import Inline from './Addingnstyles/Inline'
// import Global from './Addingnstyles/Global'
// import Header from './Addingnstyles/Header'
// import Navbar from './Addingnstyles/Navbar'
// import "./Global.css"
//import  Tailwid  from './Addingnstyles/Tailwid'
//import Tailwind from './Addingnstyles/Tailwind'
// import TailwindTask from "./TailwindTask"

// const App = () => {
//   return <>
//   {/* <Inline/>
//   <br/>
//   <Global/>
//   <br/>
//   <Header/> */}
//   {/* <Navbar/> */}
//   {/* <Tailwid/> */}
//   {/* <Tailwind/> */}
//   <TailwindTask/>
//   </>
// }

// export default App

//!08-09-2026(form handling)
//#cotrolledforms: handling forms by you using usestate hook
//#uncontroledforms:handling forms by using ref and dom
//$ steps
//@ 1.Structure of form
//@ 2.create usestate
//@ 3.using value attribute amd destructure
//@ 4. using onchange
//@ 5. implementing on change methods
//@ 6.setdaetils
//@7. use prevemtDefault if result blinks
//
// import React from 'react'
// import ControlledFoms from './formHandling/ControlledFoms'

// const App = () => {
//   return<ControlledFoms/>
// }

// export default App

//@17/09/2026(customhooks)
// import React from 'react'
// import CounterA from './CustomHooks/CounterA'
// import CounterB from './CustomHooks/CounterB'

// const App = () => {
//   return <>
//     <CounterA/>
//     <CounterB/>
//   </>
// }

// export default App
//@ 18/09/2026(routers
// import {  Route,  Router,  Routes } from "react-router-dom"
// import Home from "./Routers/Home"
// import About from "./Routers/About"
// import Contact from "./Routers/Contact"
// import NotFound from "./Routers/NotFound"
// import Student from "./Routers/Student"
// //const Dashborad =  lazy(()=>import ('./Router/Dashborad'))
// import Login from "./Routers/Login"
// import ProtectedRoute from "./Routers/ProtectedRoute"
// //const JobPortal = lazy(()=> import("./Routers/JobPortal"))
// //onst Application = lazy(()=> import("./Routers/Application"))
// //const RejectedOffer = lazy(()=> import("./Routers/RejectedOffer"))
// import Navbar from "./Routers/Navbar"
// import { lazy, Suspense } from "react"
// import Dashborad from"./Routers/Dashborad"
// import Application from "./Routers/Application"
// import JobPortal from "./Routers/JobPortal"
// import RejectedOffer from "./Routers/RejectedOffer"

// by
// const App = () => {
//   return (
//     <>
//   <Navbar/>
//     <Suspense fallback=<h1>loading...</h1>>
//       <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="/student/:id/:name/:mail" element={<Student/>}/>
//      <Route path="/login" element={<Login/>}/>
//       <Route path="/dashboard" element={
//         <ProtectedRoute><Dashborad/></ProtectedRoute>}>
//     <Route path="/dashboard/jobportal" element={<JobPortal/>}/>
//          <Route path="/dashboard/application" element={<Application/>}/>
//      <Route path="/dashboard/rejectedoffer" element={<RejectedOffer/>}/>

//      </Route>

// <Route path="*" element={<NotFound/>}/>

//     </Routes>
//     </Suspense>
//     </>
//   )
// }

// export default App

//! job portal application
import React, { useState } from "react";
import Navbar from "./JobPortal/Navbar";
import JobCard from "./JobPortal/JobCard";
import JobDetails from "./JobPortal/JobDetails";
import "./App.css";

const initialJobs = [
  {
    id: 1,
    title: "React JS Developer",
    company: "Tech Solutions",
    location: "Hyderabad",
    type: "Full Time",
    salary: "3-5 LPA",
    experience: "0-2 Years",
    description:
      "We are looking for a React JS developer to build responsive web applications using React, JavaScript, HTML and CSS.",
    skills: ["React JS", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Java Developer",
    company: "Infosys",
    location: "Bangalore",
    type: "Full Time",
    salary: "4-6 LPA",
    experience: "Fresher",
    description:
      "Looking for a Java developer with knowledge of Core Java, OOP concepts, SQL and problem solving.",
    skills: ["Java", "SQL", "OOP", "JDBC"],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Wipro",
    location: "Hyderabad",
    type: "Full Time",
    salary: "3-4 LPA",
    experience: "0-1 Years",
    description:
      "Develop attractive and responsive user interfaces using HTML, CSS, JavaScript and React.",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "UI Developer",
    company: "Google",
    location: "Remote",
    type: "Remote",
    salary: "5-8 LPA",
    experience: "1-2 Years",
    description:
      "Create user-friendly interfaces and improve website performance and accessibility.",
    skills: ["React", "CSS", "JavaScript", "UI Design"],
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "TCS",
    location: "Chennai",
    type: "Full Time",
    salary: "3-4 LPA",
    experience: "Fresher",
    description:
      "Join our software development team and work on real-world applications.",
    skills: ["Java", "SQL", "JavaScript", "React"],
  },
  {
    id: 6,
    title: "Web Developer Intern",
    company: "Startup India",
    location: "Remote",
    type: "Internship",
    salary: "10K-15K",
    experience: "Fresher",
    description:
      "An internship opportunity for beginners interested in web development.",
    skills: ["HTML", "CSS", "React", "JavaScript"],
  },
];

function getStoredData(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function App() {
  const [jobs, setJobs] = useState(() => getStoredData("jobs", initialJobs));

  const [savedJobs, setSavedJobs] = useState(() =>
    getStoredData("savedJobs", []),
  );

  const [applications, setApplications] = useState(() =>
    getStoredData("applications", []),
  );

  const [page, setPage] = useState("Home");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full Time",
    salary: "",
    experience: "",
    description: "",
    skills: "",
  });

  // Save data in localStorage
  function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Save or remove a favourite job
  function toggleSave(id) {
    const updated = savedJobs.includes(id)
      ? savedJobs.filter((item) => item !== id)
      : [...savedJobs, id];

    setSavedJobs(updated);
    saveData("savedJobs", updated);
  }

  // Apply for a job
  function applyJob(job) {
    if (applications.some((item) => item.id === job.id)) {
      return;
    }

    const application = {
      ...job,
      appliedDate: new Date().toLocaleDateString(),
      status: "Applied",
    };

    const updated = [...applications, application];

    setApplications(updated);
    saveData("applications", updated);

    setSelectedJob(null);
    alert("Your application has been submitted successfully!");
  }

  // Post a new job
  function postJob(e) {
    e.preventDefault();

    const newJob = {
      ...form,
      id: Date.now(),
      experience: form.experience,
      skills: form.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
      description: form.description,
    };

    const updated = [newJob, ...jobs];

    setJobs(updated);
    saveData("jobs", updated);

    setForm({
      title: "",
      company: "",
      location: "",
      type: "Full Time",
      salary: "",
      experience: "",
      description: "",
      skills: "",
    });

    setPage("Home");
    alert("Job posted successfully!");
  }

  // Search and filter jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase()),
      );

    const matchesLocation = location === "All" || job.location === location;

    const matchesType = jobType === "All" || job.type === jobType;

    return matchesSearch && matchesLocation && matchesType;
  });

  // Select jobs according to the page
  const displayedJobs =
    page === "Saved Jobs"
      ? jobs.filter((job) => savedJobs.includes(job.id))
      : filteredJobs;

  const appliedIds = applications.map((job) => job.id);

  return (
    <div>
      <Navbar page={page} setPage={setPage} />

      {page === "Home" && (
        <>
          <section className="hero">
            <h1>Find Your Dream Job Today!</h1>

            <p>Explore thousands of job opportunities and build your career.</p>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search job title, company or skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="All">All Locations</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Remote">Remote</option>
              </select>

              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Full Time">Full Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </section>

          <main className="container">
            <h2>Latest Job Openings</h2>

            <p className="subheading">
              Explore opportunities that match your skills.
            </p>

            <div className="job-grid">
              {displayedJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  saved={savedJobs.includes(job.id)}
                  applied={appliedIds.includes(job.id)}
                  onSave={toggleSave}
                  onView={setSelectedJob}
                  onApply={applyJob}
                />
              ))}
            </div>

            {displayedJobs.length === 0 && (
              <p className="empty">No jobs found. Try another search.</p>
            )}
          </main>
        </>
      )}

      {page === "Saved Jobs" && (
        <main className="container">
          <h2>My Saved Jobs</h2>

          <div className="job-grid">
            {displayedJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                saved={true}
                applied={appliedIds.includes(job.id)}
                onSave={toggleSave}
                onView={setSelectedJob}
                onApply={applyJob}
              />
            ))}
          </div>

          {displayedJobs.length === 0 && (
            <p className="empty">You have not saved any jobs yet.</p>
          )}
        </main>
      )}

      {page === "My Applications" && (
        <main className="container">
          <h2>My Applications</h2>

          <p className="subheading">
            Total applications: {applications.length}
          </p>

          {applications.map((job) => (
            <div className="application-card" key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>Applied Date: {job.appliedDate}</p>
              <span className="status">{job.status}</span>
            </div>
          ))}

          {applications.length === 0 && (
            <p className="empty">You have not applied for any jobs yet.</p>
          )}
        </main>
      )}

      {page === "Post Job" && (
        <main className="container">
          <h2>Post a New Job</h2>

          <form className="post-form" onSubmit={postJob}>
            <input
              required
              placeholder="Job Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <input
              required
              placeholder="Company Name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />

            <input
              required
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />

            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Remote</option>
              <option>Internship</option>
            </select>

            <input
              required
              placeholder="Salary (Example: 3-5 LPA)"
              value={form.salary}
              onChange={(e) => setForm({ ...form, salary: e.target.value })}
            />

            <input
              required
              placeholder="Experience (Example: Fresher)"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
            />

            <input
              required
              placeholder="Skills separated by commas"
              value={form.skills}
              onChange={(e) => setForm({ ...form, skills: e.target.value })}
            />

            <textarea
              required
              placeholder="Job Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <button className="primary-btn" type="submit">
              Publish Job
            </button>
          </form>
        </main>
      )}

      <JobDetails
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        onApply={applyJob}
        applied={selectedJob ? appliedIds.includes(selectedJob.id) : false}
      />

      <footer>
        <h3>JobConnect</h3>
        <p>Connecting talent with opportunities.</p>
        <p>© 2026 JobConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
