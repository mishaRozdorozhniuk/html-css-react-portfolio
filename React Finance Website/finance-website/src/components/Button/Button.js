import './Button.css';

const Button = ({btnText, color}) => {
	return <button className="header-button" style={{backgroundColor: `#${color}`}}>{btnText}</button>
};

export default Button;