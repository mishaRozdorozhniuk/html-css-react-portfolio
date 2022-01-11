import React from 'react';
import './Button.css'

const Button = ({text, bgColor}) => {
	return <button style={{backgroundColor: bgColor}} className="find-button">{text}</button>
};

export default Button;