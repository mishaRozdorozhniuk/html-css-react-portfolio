import './Pricing.css';
import Check from "./Check";
import Aos from 'aos'

const Pricing = () => {
	return (
		<div className="">
			<img src="../img/pattern_2.svg" className="pricing-bg"
			     alt=""/>
			<div className="pricing-plan container">
				<div className="pricing-plan-text"
				     data-aos="fade-up">
					<h1 className="pricing-plan-title">
						Pricing Plan
					</h1>
					<p className="pricing-plan-subtitle">
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit.<p/>Dolores inventore maxime ipsa eligendi
						quibusdam velit<p/> maiores adipisci odit, exercitationem cumque iusto
						at debitis <p/>reiciendis a, ipsum aliquam reprehenderit. Sed, delectus.
					</p>
					<button className="pricing-plan-call-btn">
						Custom Plan
					</button>
				</div>

				<div className="business-plan-wrapper">
					<div className="business-plan-block"
					     data-aos="zoom-out-right"
					     style={{backgroundImage: `url(../img/pricing_pattern.svg`}}>
						<h2 className="business-plan-block-title">
							Business Plan
						</h2>
						<p className="business-price">
							$49.00
						</p>
						<ul className="business-plan-list">
							<li className="business-list-item">
								<Check/>
								Push Notification
							</li>
							<li className="business-list-item">
								<Check/>
								Unlimited Bandwith
							</li>
							<li className="business-list-item">
								<Check/>
								Unlimited Bandwith
							</li>
							<li className="business-list-item">
								<Check/>
								Monthly Backup
							</li>
							<li className="business-list-item">
								<Check/>
								24/7 Support
							</li>
						</ul>
						<button>
							Choose Plan
						</button>
					</div>

					<div className="business-plan-block second"
					     data-aos="zoom-out-left"
					     style={{backgroundImage: `url("../img/pricing_pattern_grayscale.svg")`}}>
						<h2 className="business-plan-block-title">
							Business Plan
						</h2>
						<p className="business-price">
							$49.00
						</p>
						<ul className="business-plan-list">
							<li className="business-list-item">
								<Check/>
								Push Notification
							</li>
							<li className="business-list-item">
								<Check/>
								Unlimited Bandwith
							</li>
							<li className="business-list-item">
								<Check/>
								Unlimited Bandwith
							</li>
							<li className="business-list-item">
								<Check/>
								Monthly Backup
							</li>
							<li className="business-list-item">
								<Check/>
								24/7 Support
							</li>
						</ul>
						<button>
							Choose Plan
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;