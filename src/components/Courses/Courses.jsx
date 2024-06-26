import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({handleSelectedCourses}) => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch("courses.json")
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    courses.map(course=> <Course key={course.id} handleSelectedCourses={handleSelectedCourses} course={course}></Course> )    
                }
        </div>
    );
};

Courses.propTypes = {
    handleSelectedCourses: PropTypes.func.isRequired
  };

export default Courses;