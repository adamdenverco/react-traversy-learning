import React from "react";
import { useState, useEffect } from "react";
// import jobs from "../jobs.json";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const fetchJobs = async () => {
                const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            };
            fetchJobs();
        } catch (error) {
            console.log("Error fetching data");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // if (isHome && jobs.length > 3) {
    //     setJobs(jobs.slice(0, 3));
    // }

    // console.log("isHome");
    // console.log(isHome);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>

                {isLoading ? (
                    <Spinner />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 !important gap-6">
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobListings;
