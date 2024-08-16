import React from "react";
import "./skills.scss"; // Include your SCSS file

// Define skills array with hardcoded values
const skills = [
  { id: 1, title: "HTML", imageSrc: "/html.png" },
  { id: 2, title: "CSS", imageSrc: "/css.png" },
  { id: 3, title: "Javascript", imageSrc: "/javascript.png" },
  { id: 4, title: "React.js", imageSrc: "/react.png" },
  { id: 5, title: "PHP", imageSrc: "/php.png" },
  { id: 6, title: "Laravel", imageSrc: "/laravel.png" },
  { id: 7, title: "Python", imageSrc: "/python.jpeg" },
  { id: 8, title: "C++", imageSrc: "/cpp.png" },
  { id: 8, title: "Firebase", imageSrc: "/firebase.png" },
  { id: 8, title: "Git", imageSrc: "/cpp.png" },
  { id: 8, title: "MongoDB", imageSrc: "/mongodb.png" },
  { id: 8, title: "Node.js", imageSrc: "/node.png" },
  { id: 8, title: "Express.js", imageSrc: "/express.png" },
];

const Skills = () => {
  return (
    <div className="container skills my-5" id="skills">
      <h1 className="text-center mb-4">SKILLS</h1>
      <div className="row">
        {skills.map((data) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 mb-4"
            key={data.id}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="item">
              <img src={data.imageSrc} alt={data.title} />
              <h3>{data.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
