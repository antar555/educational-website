import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses]= useState([]);
    useEffect(()=>{
        fetch('/courses.JSON')
        .then(res=> res.json())
        .then(data=> setCourses(data));
        

    },[])
    return (
        <div>
            <br />
            
            <h3 className="text-info fw-bolder">Courses Offered</h3>
            <section className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-2">
            {
                courses.map(course=> <Course
                key={course.id}
                course={course}
                ></Course>)
            }
            </div>

            </section>
          
           
        </div>
    );
};

export default Courses;