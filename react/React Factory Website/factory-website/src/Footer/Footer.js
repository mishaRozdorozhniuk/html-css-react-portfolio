import './Footer.css';
import Button from "../Button/Button";

const Footer = () => {
	return (
		<footer>
			<form>
				<input type="text"
				       placeholder="Full Name"/>
				<input type="text"
				       placeholder="Email"/>
				<textarea placeholder="Your Message"
				          cols="30"
				          rows="10">

				</textarea>
			</form>
			<Button text="SEND IT" />
		</footer>
	);
};

export default Footer;