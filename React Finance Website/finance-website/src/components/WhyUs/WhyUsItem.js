import './WhyUs.css'

const WhyUsItem = ({WhyUsList}) => {

	const list = WhyUsList.map(e => {
		return (
			<div className='item' data-aos="zoom-in">
				<img src={e.src}
				     alt=""/>
				<h2 className="why-us-icon-title">{e.title}</h2>
				<p className="why-us-icon-description">{e.desc}</p>
			</div>
		)
	});
	return (
		<div className="wrapper">
			<div className="why-us-icon-item">
				{list}
			</div>
		</div>

	);
};

export default WhyUsItem;