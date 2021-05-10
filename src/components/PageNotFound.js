import React, {Fragment} from 'react';
import notFound from '../images/notFound.gif';

const PageNotFound = () => {
    return <Fragment>
        <h1 style={{textAlign: 'center', color: 'red'}}>
            Oops...!! Sorry the page you are looking for isn't found.
        </h1>
        <img 
            src={notFound}
            style={{ width: '50%', margin: 'auto', display: 'block' }}
            alt='404-not-found'
        />
    </Fragment>;
};

export default PageNotFound;
