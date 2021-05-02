import React from 'react';

const SkillProgress = ({skill}) => {
    const {name,percent} = skill;
    return (
        <div className="skill-bar">
            <h4 className="text-uppercase">{name}</h4>
            <div className="progress mb-3">
                <div className="progress-bar bg-success" role="progressbar" style={{width: `${percent}%`}} >{percent}%</div>
            </div>
        </div>
    );
};

export default SkillProgress;