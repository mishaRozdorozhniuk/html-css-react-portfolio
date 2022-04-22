import './App.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import WhyUs from "./components/WhyUs/WhyUs";
import Pricing from "./components/Pricing/Pricing";
import Stories from "./components/Stories/Stories";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<WhyUs />
			<Pricing />
			<Stories />
			<ContactUs />
		</div>
	);
}

export default App;
