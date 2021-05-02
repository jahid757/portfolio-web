import React from "react";
import "./skill.scss";
import SkillDetail from "./SkillDetail";
import SkillProgress from "./SkillProgress";

const skills = [
    {
        name:'html',
        percent:90,
        _id:1
    },
    {
        name:'css',
        percent:85,
        _id:2
    },
    {
        name:'javascript',
        percent:70,
        _id:3
    },
    {
        name:'react js',
        percent:60,
        _id:4
    },
    {
        name:'node js',
        percent:55,
        _id:5
    },
    {
        name:'mongo db',
        percent:50,
        _id:6
    }

]
const Skills = () => {
  return (
    <div className="content-wrapper">
      <div className="container">
        <h2 className="heading text-center pb-5">Skill</h2>
        <div className="row">
            {
                skills.map(skill => <SkillDetail key={skill._id} skill={skill}></SkillDetail>)
            }
            {/* {
                skills.map(skill => <SkillProgress key={skill._id} skill={skill}></SkillProgress>)
            } */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
