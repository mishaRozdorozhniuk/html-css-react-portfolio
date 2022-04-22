import './Question.css'
import Button from "../Button/Button";

const Question = () => {
	return (
		<div className="container">
			<div className="questions-wrapper">
				<h1 className="question-title">Frequently Asked Questions</h1>
				<p className="question-subtitle">
					Vivamus venenatis eu mi ac mattis. Maecenas ut elementum sapien.<p/>
					Nunc euismod risus ac lobortis congue. Sed erat quam.
				</p>
				<div className="question-inner">
					<div className="question-res">
						<h2 className="question-res-title">
							Class aptent taciti sociosqu ad litora <p/> torquent per conubia
						</h2>
						<p className="question-res-info">
							Curabitur placerat diam in risus lobortis, laoreet porttitor est<p/> elementum. Nulla
							ultricies
							risus
							quis risus scelerisque, a aliquam tellus <p/> maximus. Cras pretium nulla ac convallis
							iaculis.
							Aenean <p/>
							bibendum erat vitae odio sodales, in facilisis tellus volutpat. <p className="space"/>
							Sed lobortis pellentesque magna ac congue. Suspendisse quis <p/> molestie magna, id eleifend
							ex.
							Ut
							mollis ultricies diam nec dictum.<p/> Morbi commodo hendrerit mi vel vulputate. Proin non
							tincidunt
							dui.<p/>
							Lorem ipsum dolor sit amet.
						</p>
						<p className="email">Email: <span>misha.roz.2003@gmail.com</span></p>
						<Button text="CONTACT US"
						        bgColor={'#00b4c6'}/>
					</div>
					<div className="question-details">
						<details>
							<summary>First Common Question</summary>
							<h3>
								Duis vulputate porttitor urna sit amet pretium. Phasellus sed pulvinar eros,
								<p/> condimentum
								consequat ex. Suspendisse potenti.<p/>
								<br/>
								Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere<p/> mauris ut eros
								rutrum
								sodales. Aliquam erat volutpat.
							</h3>
						</details>
						<details>
							<summary>Second Question Answer</summary>
							<h3>Sed odio elit, cursus sed consequat at, rutrum eget augue. Cras ac eros<p/> iaculis,
								tempor
								quam
								sit amet, scelerisque mi. Quisque eu risus eget nunc<p/> porttitor vestibulum at a ante.
								<p/>
								<br/>
								Praesent ut placerat turpis, vel pellentesque dolor. Sed rutrum eleifend<p/> tortor, eu
								luctus
								orci sagittis in. In blandit fringilla mollis.
							</h3>
						</details>
						<details>
							<summary>Third Answer for you</summary>
							<h3>Proin feugiat ante ut vulputate rutrum. Nam quis erat turpis. Nullam<p/> maximus
								pharetra
								lorem,
								eu condimentum est iaculis ut. Pellentesque<p/> mattis ultrices dignissim.<p/>
								<br/>
								Etiam et enim finibus, feugiat massa efficitur, finibus sapien. Sed cursus<p/> lacus
								quis
								arcu
								scelerisque, eget ornare risus maximus. Aenean non lectus<p/> id odio rhoncus pharetra.
							</h3>
						</details>
						<details>
							<summary>Fourth Question Asked</summary>
							<h3>Phasellus eu purus ornare, eleifend orci nec, egestas nulla. Sed sed aliquet<p/> sapien.
								Proin
								placerat, ipsum eu posuere blandit, tellus quam consectetur<p/> nisi, id sollicitudin
								diam
								ex at nisi.<p/>
								<br/>
								Aenean fermentum eget turpis egestas semper. Sed finibus mollis<p/> venenatis. Praesent
								at
								sem
								in massa iaculis pharetra.
							</h3>
						</details>
						<details>
							<summary>Fifth Ever Question</summary>
							<h3>Quisque aliquet ipsum ut magna rhoncus, euismod lacinia elit rhoncus. Sed<p/> sapien
								elit,
								mollis ut ultricies quis, fermentum nec ante.<p/>
								<br/>
								Sed nec ex nec tortor fermentum sollicitudin id ut ligula. Ut sagittis rutrum
								<p/> lectus, non
								sagittis ante euismod eu.
							</h3>
						</details>
						<details>
							<summary>Sixth Sense Question</summary>
							<h3>Suspendisse potenti. Ut dapibus leo ut massa vulputate semper.<p/> Pellentesque maximus
								lorem
								sed elit imperdiet mattis. Duis posuere<p/> mauris ut eros rutrum sodales. Aliquam erat
								volutpat.
							</h3>
						</details>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Question;
