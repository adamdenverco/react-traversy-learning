import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobPage = () => {
    const {} = useParams();
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const fetchJob = async () => {
                const apiUrl = "/api/jobs?_limit=1";
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJob(data);
            };
            fetchJob();
            console.log(job);
        } catch (error) {
            console.log("Error fetching data");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    console.log(job);

    return <section className="bg-blue-50 px-4 py-6">Job Page</section>;
};

export default JobPage;
