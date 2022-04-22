import React from 'react';
import './About.css'
import Button from "../Button/Button";

const About = () => {
	return (
		<div className="container">
			<div className="about-us">
				<img className="about-first-subsection"
				     src="../images/left-image.png"
				     alt="first-subsection-photo"/>
				<div className="about-us-info">
					<h2 className="about-us-info-title">
						Vivamus sodales nisi
						id ante molestie venenatis
					</h2>
					<p className="about-us-info-subtitle">
						Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit
						amet, ultrices malesuada odio. Duis auctor dolor eu scelerisque
						vestibulum. Vestibulum lacinia, nisl sit amet tristique condimentum.<p/>
						Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien
						sit amet, ultrices malesuada odio. Donec non quam euismod, mattis dui a,
						ultrices nisi.
					</p>
					<Button text="DISCOVER MORE"
					        bgColor={'#00b4c6'}/>
				</div>
			</div>

			<div className="about-us">
				<div className="about-us-info">
					<h2 className="about-us-info-title">
						Curabitur aliquam eget tellus id porta
					</h2>
					<p className="about-us-info-subtitle">
						Proin justo sapien, posuere suscipit tortor in,
						fermentum mattis elit. Aenean in feugiat purus.
					</p>
					<div className="what-we-can-item">
						<img className="service-icon" src="../images/service-icon-01.png"
						     alt=""/>
						<h2 className="what-we-can-title">
							Nulla ultricies risus quis risus
						</h2>
						<p className="what-we-can-subtitle">
							You can use this website template for
							commercial or non-commercial purposes.
						</p>
					</div>
					<div className="what-we-can-item">
						<img className="service-icon" src="../images/service-icon-02.png"
						     alt=""/>
						<h2 className="what-we-can-title">
							Donec consequat commodo purus
						</h2>
						<p className="what-we-can-subtitle">
							If you have any question or comment,
							please contact us on TemplateMo.
						</p>
					</div>
					<div className="what-we-can-item">
						<img className="service-icon" src="../images/service-icon-03.png"
						     alt=""/>
						<h2 className="what-we-can-title">
							Sed placerat sollicitudin mauris
						</h2>
						<p className="what-we-can-subtitle">
							Ut non leo nisi. Praesent quis urna viverra,
							sagittis tortor feugiat, iaculis.
						</p>
					</div>
				</div>
				<img className="about-first-subsection second"
				     src="../images/right-image.png"
				     alt="first-subsection-photo"/>
			</div>
		</div>
	);
};

export default About;
