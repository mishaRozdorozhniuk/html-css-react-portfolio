import React, {useState, useEffect} from 'react';
import './About.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
	const [height, setHeight] = useState(0);
	const [heightFoto, setHeightFoto] = useState(0);
	const [show, setShow] = useState('');

	useEffect(() => {
		Aos.init({duration: 2000})
	}, [])

	useEffect(() => {
		const handleScroll = () => {
			setHeight(window.scrollY);
			if (height >= 320 && height <= 10000) {
				setShow('active');
			} else {
				setShow('disable')
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, [height]);

	return (
		<div className="">
			<div className="about-collaboration container ">
				<img src="../img/clients/alter_sport.png"
				     alt="collaboration-photo"
				     className={height ? show : null}/>
				<img src="../img/clients/cleaning_service.png"
				     alt="collaboration-photo"
				     className={height ? show : null}/>
				<img src="../img/clients/creative_photo.png"
				     alt="collaboration-photo"
				     className={height ? show : null}/>
				<img src="../img/clients/global_tv.png"
				     alt="collaboration-photo"
				     className={height ? show : null}/>
			</div>
			<div className="eccomerce"
			     style={{backgroundImage: `url("../img/pattern_1.svg")`}}>
				<div className="about-info container">
					<div className="about-img-inner">
						<div className={height ? show : 0}>
							<img src="../img/app_preview_2.png"
							     alt="about-img"
							     className="about-img"/>
						</div>
					</div>
					<div className={height ? show : 0}>
						<div className="about-info-inner">
							<div className="about-item">
								<img src="../img/clients/news_digital_tv.png"
								     alt="about-item"
								     className="about-item-icon news"/>
								<h1 className="about-item-title">
									Powerful Features
								</h1>
								<p className="about-item-description">
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
									sed diam nonumy eirmod tempor invidunt ut labore et dolore
								</p>
							</div>
							<div className="about-item">
								<img src="../img/clients/net_sport_tv.png"
								     alt="about-item"
								     className="about-item-icon live"/>
								<h1 className="about-item-title">
									Fully Secured
								</h1>
								<p className="about-item-description">
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
									sed diam nonumy eirmod tempor invidunt ut labore et dolore
								</p>
							</div>
							<div className="about-item">
								<img src="../img/clients/spa_beauty.png"
								     alt="about-item"
								     className="about-item-icon spa"/>
								<h1 className="about-item-title">
									Easy Monitoring
								</h1>
								<p className="about-item-description">
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
									sed diam nonumy eirmod tempor invidunt ut labore et dolore
								</p>
							</div>
						</div>
					</div>
				</div>
				{/*<div className={height ? show : 0}>animated slideInLeft*/}
				<div className="eccomerce-wrapper container">
					<div className="ecommerce-inner"
					     data-aos="fade-up">
						<h1 className="eccomerce-title mow fadeInBottomLeft">
							Ecommerce business opperate easilly
						</h1>
						<p className="eccomerce-subtitle">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Quos, molestiae, perspiciatis laboriosam
							quia placeat recusandae repudiandae corrupti similique
							delectus, aliquam commodi possimus eveniet
							optio magnam quis vel. Reiciendis, fuga excepturi.
						</p>
						<button className="eccomerce-button">
							How it Work
						</button>
					</div>
					<div className="eccomerce-img-wrapper"
					     data-aos="zoom-in"
					     data-aos-duration="2500">
						<img src="../img/app_preview_3.png"
						     alt="ecommerce-img"
						     className="eccomerce-img"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
