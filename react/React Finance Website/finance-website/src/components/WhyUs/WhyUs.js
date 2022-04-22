import './WhyUs.css';
import WhyUsItem from "./WhyUsItem";

const WhyUs = () => {
	const WhyUsList = [
		{
			src: '../img/icons/rocket.svg',
			title: 'Very Fast',
			desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
		},
		{
			src: '../img/icons/testimony.svg',
			title: 'Happy Client',
			desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
		},
		{
			src: '../img/icons/promotion.svg',
			title: 'Free Ads',
			desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
		},
		{
			src: '../img/icons/coins.svg',
			title: 'Save Money',
			desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
		},
		{
			src: '',
			title: '',
			desc: '',
		},
		{
			src: '../img/icons/support.svg',
			title: '24/7 Support',
			desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
		},
		{
			src: '../img/icons/laptop.svg',
			title: 'Full Features',
			desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed',
		},
	];
	return (
		<div className="why-us-wrapper">
			<h1 className="why-us-title">
				Why Choose Mobster
			</h1>
			<div className="">
				<WhyUsItem
					WhyUsList={WhyUsList}
				/>
			</div>
		</div>
	);
};

export default WhyUs;