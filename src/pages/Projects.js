import React from "react";
import Card from "../components/Card";
import Project from "../components/Project";

import "../styles/Projects.css";

import ImageProject1 from '../assets/project1/image1.png'
import Image2Project1 from '../assets/project1/image2.png'
import Image3Project1 from '../assets/project1/image3.png'
import ImageProject2 from '../assets/project2/image.png'
import ImageProject3 from '../assets/project3/image1.png'
import Image2Project3 from '../assets/project3/image2.png'
import Image3Project3 from '../assets/project3/image3.png'


function Projects({data}) {
const project1 = data.find(x => x.id === 448354677)
const project2 = data.find(x => x.id === 535940034)
const project3 = data.find(x => x.id === 274699920)

const imagesforProject1 = [ImageProject1,Image2Project1,Image3Project1]

const imagesforProject3 = [ImageProject3,Image2Project3, Image3Project3]

let dataFiltered = data.filter(project => project.id !== 448354677 && project.id !== 535940034 && project.id !== 274699920).splice(0,5)


  return (
    <div className="container-projects">
      <div className="title">
        <h1>My Projects</h1>
        <h5>Here are some of most accomplished projects : </h5>
      </div>

      <div className="main">
        <Project title={project1?.name.replace(/-/g, " ")} description={project1?.description} conditionalStyle={true} image={imagesforProject1} homepage={project1?.homepage}  />
        <Project title={project2?.name.replace(/-/g, " ")} description={project2?.description} conditionalStyle={false} image={imagesforProject3} homepage={project2?.homepage} />
        <Project title={project3?.name.replace(/_/g, " ")} description={project3?.description} conditionalStyle={true}  image={ImageProject2} homepage={project3?.homepage} />
      </div>

      <div className="other-projects">
        <h4>My Others Projects:</h4>
        <div className="card-list-projects"> 
       {dataFiltered.map(project => (
        project && <Card projectdata={project} key={project.id} />
        ))
        }
        </div>
      </div>
    </div>
  );
}

export default Projects;
