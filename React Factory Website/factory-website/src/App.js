import './App.css';
import Header from "./Header/Header";
import About from "./About/About";
import SSlider from "./Slider/Slider";
import Question from "./Question/Question";
import Footer from "./Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<SSlider />
			<Question />
			<Footer />
		</div>
	);
}

export default App;
