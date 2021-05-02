import React from 'react';

const SkillDetail = ({skill}) => {
    const {name,percent} = skill;
    return (
            <div className="col-md-3 mb-4">
            <div className="skill-card">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle style={{strokeDashoffset: `calc(440 - (440 * ${percent}) / 100)`}} cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h3>
                      {percent} <span>%</span>
                    </h3>
                  </div>
                </div>
                <h3 className="text-uppercase">{name}</h3>
              </div>
            </div>
          </div>
    );
};

export default SkillDetail;

