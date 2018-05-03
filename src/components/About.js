import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class About extends Component {
	constructor(props){
		super();
	}

	render(){
		return (
			<div className="about" id="about">
				<div className="wrapper wrapper--vertical flex flex--end">
					<h1 className="section-title section-title--left">{this.props.section.section_title}</h1>
					<div className="triangle triangle--right"></div>
					<div className="triangle--secondary triangle--secondary--right"></div>
					<Slide left big cascade when={true} duration={1500} delay={2500} appear={true}>
						<div className="about__intro intro intro--narrow" dangerouslySetInnerHTML={{__html: this.props.section.intro}}></div>
					</Slide>
					<Slide right big cascade when={true} duration={1500} appear={true}>
						<div className="content__wrapper">
							<p className="about__description" dangerouslySetInnerHTML={{__html: this.props.section.content}}></p>
						</div>
					</Slide>
					</div>
			</div>
		)
	}
}


export default About;