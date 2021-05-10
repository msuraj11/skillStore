import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";

const SkillDetails = ({skill}) => {
    const {icon, title, description, utterances, user} = skill;
    return (
        <Fragment>
            <div className="dash-header">
                <h3 className="header">Skill-Store</h3>
                <h3>{title}</h3>
                <Link to={`/skillstore/${user}`}>Back</Link>
            </div>
            <div className="skill-details">
                <IconContext.Provider value={{ size: "100px" }}>
                    <div>
                        {icon}
                    </div>
                </IconContext.Provider>
                <h4>{title}</h4>    
                <p>{description}</p>
                <ul>
                    {utterances.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            
        </Fragment>
    )
};

export default SkillDetails;
