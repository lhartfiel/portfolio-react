import React, { Component } from 'react';


class Nav extends Component {
	constructor(props){
		super(props);
		this.navOpen = this.navOpen.bind(this);

		this.state = {
			navs: []
		}
	}

	componentDidMount(){

		let url;;

		process.env.NODE_ENV === 'development' ? url = process.env.REACT_APP_API_HOST+'/wp-json/navigation/menu' : url = process.env.REACT_APP_PROD_HOST+'/wp-json/navigation/menu';


		if(url) {
			fetch(url)
				.then(res => res.json())
				.then(res => {
					this.setState({
						navs: res
					})
				})	
		}
	}

	navOpen(e){
		let button = e.currentTarget;
		button.parentNode.classList.toggle('nav--active');
	}

	// scrollDown(e, scrollPosition){

		// e.preventDefault();
		// const navId = e.target.getAttribute('href').substring(1);
		// const section = document.getElementById(navId);
		// const sectionPos = section.getBoundingClientRect().top;
		// let windowPos = window.pageYOffset;
		// let diff;

		// console.log(windowPos + ' ' + sectionPos);
		// if(windowPos > sectionPos) {
		// 	diff = windowPos - sectionPos;
		// } else {
		// 	diff = sectionPos - windowPos;
		// }
		

		// window.scroll({
		// 	top: diff,
		// 	behavior: 'smooth'
		// })
	// }



	render(){
		return (
			<div className="nav">
				<div className="nav__button" onClick={this.navOpen}>
					<div className="nav__triangle">
						<span className="nav--menu"></span>
					</div>
				</div>
				<ul className="flex">
					{this.state.navs.map( (item, index) => {
						return (
							<li className="fw--light" key={item+'-'+index}><a href={item.url} >{item.post_title}</a></li>
						)
					})}
				</ul>
			</div>
		)
	}
}


export default Nav;