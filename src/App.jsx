// import React from "react";
// const App = () => {
//   const names = ["udai","alex", "mohan", "ramesh"];
//   return (
//     <>
//       <h1 className="font-extrabold text-4xl text-slate-400">Hello</h1>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index} className="text-slate-900 text-2xl">{name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;


// import React from "react";
// import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
// import HomeCards from "./components/HomeCards";
// import JobListings from "./components/JobListings";
// import ViewAllJobs from "./components/ViewAllJobs";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import SingleJobPage, {jobLoader} from "./pages/SingleJobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";


const App = () => {

  //This is the function which is pass as param in AddTheJob, and this func is adding the job in json, Add the New Job
const addJob =  async (newJob) => {
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(newJob)
  });
  return;
}

//delete the Job, and this pass in SingleJobPage
const deleteTheJob = async (id) => {
  //console.log("Deleted the Job" , id)
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE'
  });
  return;
}

//Update Job
const editJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job)
  });
  return;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/job/:id" element={<SingleJobPage deleteJob = {deleteTheJob}/>} loader={jobLoader}/>
      <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={editJob}/>} loader={jobLoader} />
      <Route path="/add-job" element={<AddJobPage addTheJobForm={addJob}/>} />
    </Route>
  )
)

  return <RouterProvider router={router} />
      {/* <NavBar />
      <Hero  title = "Become a React Dev" subTitle="Find the React job that fits your skills and needs"/>
      <HomeCards />
      <JobListings />
      <ViewAllJobs /> */}
    
  
};
export default App;
