import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {PROFESSIONAL_SKILL_DATA, TECNICAL_SKILL_DATA, NON_TECH_SKILL_DATA} from '../constants';

const SkillStore = ({match: {params}, setAlert, history, setSkill}) => {
    useEffect(() => {
        setAlert();
    }, [setAlert]);

    const [toggleTabs, setToggle] = useState({
        showProfessionalSkills: true,
        showTechSkills: false,
        showNonTechSkills: false
    });

    const ontoggleTab = type => {
        if (type === 'professional') {
            setToggle({showProfessionalSkills: true, showTechSkills: false, showNonTechSkills: false});
        } else if (type === 'tech') {
            setToggle({showProfessionalSkills: false, showTechSkills: true, showNonTechSkills: false});
        } else {
            setToggle({showProfessionalSkills: false, showTechSkills: false, showNonTechSkills: true});
        }
    };

    const skillClickHandler = skill => {
        setSkill({...skill, user: params.user});
        history.push('/skill-details');
    };

    const {showProfessionalSkills, showTechSkills, showNonTechSkills} = toggleTabs;

    return (
        <Fragment>
            <div className="dash-header">
                <h3 className="header">Skill-Store</h3>
                <h3>Hello {params.user}!!</h3>
                <Link to='/login'>Log out</Link>
            </div>
            <div className="section-1">
                <button
                    className={showProfessionalSkills ? 'btn-dark' : 'btn-light'}
                    onClick={() => ontoggleTab('professional')}
                >
                    Professional skills
                </button>
                <button
                    className={showTechSkills ? 'btn-dark' : 'btn-light'}
                    onClick={() => ontoggleTab('tech')}
                >
                    Technical skills
                </button>
                <button
                    className={showNonTechSkills ? 'btn-dark' : 'btn-light'}
                    onClick={() => ontoggleTab('non-tech')}
                >
                    Personal & Communication skills
                </button>
            </div>
            <div className="skills">
                {showProfessionalSkills &&
                    PROFESSIONAL_SKILL_DATA.map((item, key) => {
                        const {title, icon, description} = item;
                        return (
                            <div key={key} className="skill" onClick={() => skillClickHandler(item)}>
                                <IconContext.Provider value={{ size: "100px" }}>
                                    <div className="icon">
                                        {icon}
                                    </div>
                                </IconContext.Provider>
                                <h4>{title}</h4>
                                <p>{description}</p>
                            </div>
                        )
                    })
                }
                {showTechSkills &&
                    TECNICAL_SKILL_DATA.map((item, key) => {
                        const {title, icon, description} = item;
                        return (
                            <div key={key} className="skill" onClick={() => skillClickHandler(item)}>
                                <IconContext.Provider value={{ size: "100px" }}>
                                    <div className="icon">
                                        {icon}
                                    </div>
                                </IconContext.Provider>
                                <h4>{title}</h4>
                                <p>{description}</p>
                            </div>
                        )
                    })
                }
                {showNonTechSkills &&
                    NON_TECH_SKILL_DATA.map((item, key) => {
                        const {title, icon, description} = item;
                        return (
                            <div key={key} className="skill" onClick={() => skillClickHandler(item)}>
                                <IconContext.Provider value={{ size: "100px" }}>
                                    <div className="icon">
                                        {icon}
                                    </div>
                                </IconContext.Provider>
                                <h4>{title}</h4>
                                <p>{description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    );
};

export default SkillStore;
