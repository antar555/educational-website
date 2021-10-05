import React from 'react';


const Featured = (props) => {
    const {name, fee, des,img,id}=props.course;
    return (
        <div className="col">
                <br />
                <br />
                <div className="card h-100">
                    <img src={img} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                        <p className="card-text">{des}</p>
                       
                       
                    </div>
                    <div className="mx-auto">
                       <button className="btn btn-primary">Enroll Now</button>
                    </div>
                    <br />
                    <div className="card-footer">
                        <small className="text-muted"> <p className="text-center"> Price: {fee} TK </p></small>
                       
                    </div>
                </div>
            </div>
    );
};

export default Featured;