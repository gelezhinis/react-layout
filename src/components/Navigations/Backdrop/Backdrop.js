import React from 'react';

import './backdrop.styles.css';

const Backdrop = props => (
   <div className="backdrop" onClick={props.backdropClickHandler} />
);

export default Backdrop;