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

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import React from "react";
// import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
// import HomeCards from "./components/HomeCards";
// import JobListings from "./components/JobListings";
// import ViewAllJobs from "./components/ViewAllJobs";
import MainLayout from './layouts/MainLayout';
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
const App = () => {
  return <RouterProvider router={router} />
      {/* <NavBar />
      <Hero  title = "Become a React Dev" subTitle="Find the React job that fits your skills and needs"/>
      <HomeCards />
      <JobListings />
      <ViewAllJobs /> */}
    
  
};
export default App;
