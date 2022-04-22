import './ContactUs.css'

const ContactUs = () => {
	return (
		<div className="contact-us container">
			<div className="contact-img-wrapper">
				<img className="contact-img"
				     src="../img/illustration_contact.svg"
				     alt="contact-us-img"
				     data-aos="zoom-in"
				     data-aos-duration="2500"
				/>
			</div>
			<div className="contact-us-help-form">
				<h1 className="contact-us-title">
					Need a help?
					Don't worry just contact us
				</h1>
				<form>
					<input type="text"
					       placeholder="Full Name:"
					       data-aos="fade-up"
					       data-aos-duration="1500"/>
				</form>
				<form>
					<input type="email"
					       placeholder="Email:"
					       data-aos="fade-up"
					       data-aos-duration="2000"/>
				</form>
				<textarea name="d"
				          cols="30"
				          rows="10"
				          placeholder="Message:"
				          data-aos="fade-up"
				          data-aos-duration="2500"/>
				<button className="send-message"
				        data-aos="fade-up"
				        data-aos-duration="2900">Send Message
				</button>
			</div>
		</div>
	);
};

export default ContactUs;