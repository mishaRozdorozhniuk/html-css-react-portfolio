import './Stories.css';

const Stories = () => {
	return (
		<div className="stories-bg"
		     style={{backgroundImage: `url("../img/bg_testimonials.jpg")`}}>
			<div className="stories-wrapper container" data-aos="flip-left"
			     data-aos-easing="ease-out-cubic"
			     data-aos-duration="2000">
				<h1 className="stories-title">
					Customer Stories
				</h1>
				<p className="stories-info">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.<p />
					Mollitia voluptates facere explicabo!
					Rerum necessitatibus cum qui veritatis<p />reprehenderit,
					neque sapiente consequatur atque eaque
					molestias,<p /> est, quod totam quo laudantium ratione.
				</p>
				<p className="stories-person">
					John Doe, UI Designer
				</p>
				<button className="stories-button">
					Read Stories >
				</button>
			</div>
		</div>
	);
};

export default Stories;