import React, { Component } from 'react';
import './App.scss';
import Slide from 'react-reveal/Slide';
// import * as ScrollMagic from 'scrollmagic';

import Nav from './components/Nav.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';


class App extends Component {

	constructor(){
		super();
		this.state = {
			sections: [],
		}

	}
	
	componentDidMount(){
		// let dataUrl = 'http://localhost:8888/Sites/Portfolio/wp-json/wp/v2/pages';
		// let dataUrl = 'http://www.lindsayhartfiel.com/wp-json/wp/v2/pages';
		let dataUrl;

		process.env.NODE_ENV === 'development' ? dataUrl = process.env.REACT_APP_API_HOST+'/wp-json/wp/v2/pages' : dataUrl = process.env.REACT_APP_PROD_HOST+'/wp-json/wp/v2/pages';

		fetch(dataUrl)
			.then(res => res.json())
			.then(res => {
				this.setState({
					sections: res
				})
			})
	}

  render() {
  	let hero = this.state.sections.map( (section, index) => {
	  		return <div className="hero flex" key={index}>
	  			<Nav/>
	  			<div className="hero__img--wrapper">
	  				<img src={section.acf.hero.image.url} alt=""/>
	  			</div>
	  			<div className="wrapper flex">
		  			<div className="hero__content">
		  				<Slide right big cascade duration={1500}>
				  			<div className="hero__intro">
				  				{section.acf.hero.intro.map( (line, index) => {
				  						let num = index+1;
				  						return <p className={'fw-medium line line--'+num} key={index} dangerouslySetInnerHTML={{__html: line.line}}></p>
				  				})}
				  			</div>
			  			</Slide>
			  			<Slide right big cascade duration={2000} delay={1000}>
			    			<div className="hero__name">
			    				<h1 className="h1--xl fw--medium">{section.acf.hero.name} <span>{section.acf.hero.name_last}</span>
			    				</h1>
			    			</div>
			    		</Slide>
		    		</div>
	    	</div>
	      </div>
  	});

  	return (
  		<div className="main">
	  		<div className="portfolio">
	  			<div className="section">
		  		{hero}
	  			</div>
	  			{this.state.sections.map( (section, index) => {
	  				return (
	  					<div className="section" key={section+'-'+index}>
		  					<About section={section.acf.about} key={'about-'+index}/>
								<Skills section={section.acf.skills} key={'skills-'+index}/>
								<Work section={section.acf.work} key={'work-'+index}/>
								<Contact section={section.acf.contact} key={'contact-'+index}/>
	  					</div>
	  				)
					})}
				</div>
	  		<div className="footer">
	  			<p>&copy; {(new Date()).getFullYear()} Lindsay Hartfiel</p>
	  		</div>	
	  	</div>
  	)
  }
}

export default App;

