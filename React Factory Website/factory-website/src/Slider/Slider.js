import React, {Component} from 'react';
import Slider from "react-slick";
import './Slider.css'
import Button from "../Button/Button";

class SSlider extends Component {
	render() {
		const settings = {
			// className: "center",
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1
		};
		return (
			<div className="slider-wrapper">
				<div className="container">
					<Slider {...settings}>
						<div className="slider-item">
							<h3 className="slider-title">First Box Service</h3>
							<p className="slider-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Adipisci aliquam blanditiis consequatur debitis doloribus enim incidunt magnam maiores,
								omniз.
							</p>
							<Button bgColor={'#00b4c6'} text="DISCOVER" />
						</div>
						<div className="slider-item">
							<h3 className="slider-title">Second Box Service</h3>
							<p className="slider-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Adipisci aliquam blanditiis consequatur debitis doloribus enim incidunt magnam maiores,
								omniз
							</p>
							<Button bgColor={'#00b4c6'} text="DISCOVER" />
						</div>
						<div className="slider-item">
							<h3 className="slider-title">Third Box Service</h3>
							<p className="slider-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Adipisci aliquam blanditiis consequatur debitis doloribus enim incidunt magnam maiores,
								omniз.
							</p>
							<Button bgColor={'#00b4c6'} text="DISCOVER" />
						</div>
						<div className="slider-item">
							<h3 className="slider-title">Third Box Service</h3>
							<p className="slider-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Adipisci aliquam blanditiis consequatur debitis doloribus enim incidunt magnam maiores,
								omniз.
							</p>
							<Button bgColor={'#00b4c6'} text="DISCOVER" />
						</div>
						<div className="slider-item">
							<h3 className="slider-title">Third Box Service</h3>
							<p className="slider-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Adipisci aliquam blanditiis consequatur debitis doloribus enim incidunt magnam maiores,
								omniз.
							</p>
							<Button bgColor={'#00b4c6'} text="DISCOVER" />
						</div>
					</Slider>
				</div>
			</div>
		);
	}
}

export default SSlider;