import React from 'react'
import { useLoaderData } from 'react-router-dom'


const JobDetails = () => {

    const jobDetails = useLoaderData();

  return (
    <div className='job-details'>
        <p><b>Job Title: </b>{jobDetails.title}</p>
        <p><b>Job Salary: </b>{jobDetails.salary}</p>
        <p><b>Job Location: </b>{jobDetails.location}</p>
        <p><b>Job Description: </b>"We are seeking a talented Front-End Developer to join our team. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular."</p>
        <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async({params}) => {
    const {id} = params;
    const res = await fetch("http://localhost:5000/jobs/" + id);
    if (!res.ok){
        throw Error("Could not find the job details!")
    }
    return res.json();
}