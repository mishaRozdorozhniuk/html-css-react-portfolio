import React from 'react';
import './Header.css'
import Button from "../Button/Button";

const HeaderInfo = () => {
	return (
		<div className="header-free-factory">
			<div className="header-free-factory-info">
				<h1 className="header-free-factory-title">Art Factory is free <span>for YOU</span></h1>
				<p className="header-free-factory-subtitle">This template is available for 100% free of charge.
					Download, modify and use this for your business website.</p>
				<Button text="find out more" />
			</div>

			<div className="header-free-factory-img">
				<img src="../images/slider-icon.png"
				     alt="free-factory-img"/>
			</div>
		</div>
	);
};

export default HeaderInfo;