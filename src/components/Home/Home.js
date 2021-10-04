import React, { useEffect, useState } from 'react';
import Featured from '../Featured/Featured';

const Home = () => {
    const [courses, setCourses]= useState([]);
    useEffect(()=>{
        fetch('/courses.JSON')
        .then(res=> res.json())
        .then(data=> setCourses(data));
        

    },[])
    return (
        <div>
        <div className="bg-success container-fluid mb-3">
       
            <div className="row p-5 d-flex align-items-center justify-content-md-around">
                <br />
            <div className="col-lg-4 p-4">
                <h1 className="text-white fw-bold">
                    <span className="text-warning">Enlighten</span> <span className="text-white">Yourself</span></h1>
            
                    <p className="text-white ">Coaching is a form of development in which an experienced person, called a coach, supports a learner or client in achieving a specific personal or professional goal by providing training and guidance. The learner is sometimes called a coachee</p>
                    

            </div>

            <div className="col-lg-8">
                <img src="https://preppandit.com/wp-content/uploads/2021/02/nn-home-s1.png" alt=""/>

            </div>

        </div>
        

        </div>
        <div>
           <h1>Featured courses</h1>
           <h6>Uplift your skills with these trendy courses</h6>
           <section className="container mb-3">
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-2">
            {
                courses.slice(0,4).map(course=> <Featured
                key={course.id}
                course={course}
                ></Featured>)
            }
            </div>

           

            </section>
        </div>
           
           <div>
               <br />
               <br />
               <br />
              
               
           </div>

        </div>
       
          
                
          

      
           
    );
};

export default Home;