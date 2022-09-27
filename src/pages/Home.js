import React from "react";
import Card from "../components/Card";
import "../styles/Home.css";
import HomeImage from "../assets/Home2.png";
import { Link } from "react-router-dom";

function Home({data}) {
  const project1 = data?.find(x => x.id === 448354677)
  const project2 = data?.find(x => x.id === 535940034)
  const project3 = data?.find(x => x.id === 274699920)
  let projectArray = [project1,project2,project3]



  return (
    <div className="container">
      <div className="hero">
        <h1>
          Make Your
          <br /> Dream Project <br /> Come True
        </h1>
        <h5>Using my skills to accomplish your vision.</h5>
      </div>

    <div className="hero_image">
      <img alt="rien de speical pour l'instant" src={HomeImage} />
    </div>

      <div className="projects">
        <div className="description">
          <h4>Showing some of my work:</h4>
          <p>
            Here you can find some of my most recent projects. Want to learn
            more about them? Click on one of those cards to see more! You can
            also click on the button below and discover about other projects
            that I did!
          </p>
          <Link to='/projects' className="myButton">See more!</Link>
        </div>
        <div className="card-list">
         { data.length < 1 ? "loading...." : projectArray.map(proj => <Card projectdata={proj} key={proj?.id}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
