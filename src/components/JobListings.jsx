import React from "react";
import Listing from "./Listing";
import { useState, useEffect } from "react";
import Spinners from "./Spinners";

const JobListings = ({ isHome }) => {
  const apiURL = (isHome) ? "/api/jobs?_limit=3" : "/api/jobs"
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error while fetching data " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {!isHome ? "Browse Jobs" : "Recent Jobs"}
          </h2>
            {loading ? (
              <Spinners loading={loading}/>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <Listing key={job.id} job={job} />
                ))}
              </div>
            )}
        </div>
      </section>
  );
};

export default JobListings;
