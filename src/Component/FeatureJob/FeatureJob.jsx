// import { key } from "localforage";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Job from "../Job/Job";

import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJob = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div className="py-5">
                <h2 className="text-5xl text-center font-extrabold pb-5">Featured Jobs</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={dataLength=== jobs.length ? 'hidden':''}>
                <div className="text-center pb-10">
                    <button onClick={() => { setDataLength(jobs.length) }}
                        className="btn btn-primary">SHOW All jOBS</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureJob;