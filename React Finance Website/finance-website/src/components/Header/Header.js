import Button from "../Button/Button";
import './Header.css';
import '../../animate.css'

const Header = () => {
	const header = [
		'Home',
		'About',
		'What\'s New',
		'Contact'
	];

	const headerList = header.map(item => {
		return <li className="header-list-item">{item}</li>
	});

	return (
		<div className="header-bg"
		     style={{backgroundImage: `url("../img/bg_hero_1.svg")`}}>
			<div className="container">
				<header>
					<div className="logo-wrapper">
						<img src="../img/favicon.png"
						     alt="header_photo"/>
					</div>
					<ul className="header-list  ">
						{headerList}
					</ul>
					<Button btnText="Download Now"/>
				</header>
				<div className="info-wrapper">
					{/*<LazyLoad once>*/}
					<div className="header-info">
						<h1 className="header-info-title">
							Manage your Finance easier
						</h1>
						<p className="header-info-subtitle">
							Mobster has features to view and manage
							our finances, such as transfer, and statistics.
						</p>
						<Button btnText='Get App Now'
						        color='3D58F3'/>
					</div>
					{/*</LazyLoad>*/}
					<div className="header-info-img-inner">
						<img className="header-info-img"
						     src="../img/app_preview_1.png"
						     alt="header-info-img"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
