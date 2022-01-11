import React from 'react';
import './Header.css'
import HeaderInfo from "./HeaderInfo";

const Header = () => {
	const headerList = [
		'home',
		'about',
		'services',
		'FREQUENTLY QUESTIONS',
		'drop down',
		'contact us'
	];

	const header = headerList.map(item => {
		return <p className='header-item'>{item.toUpperCase()}</p>
	});

	return (
		<div className='header-wrapper'
		     style={{backgroundImage: `url("../images/banner-bg.png")`}}>
			<div className="container">
				<header>
					<h1>ART FACTORY</h1>
					<div className='header-inner'>{header}</div>
				</header>
				<HeaderInfo />
			</div>
		</div>
	)
		;
};

export default Header;