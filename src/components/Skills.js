import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Skills extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="skills" id="skills">
				<div className="wrapper wrapper--vertical flex flex--end">
					<h1 className="section-title section-title--right">{this.props.section.section_title}</h1>
					<div className="triangle triangle--left"></div>
					<div className="triangle--secondary triangle--secondary--left"></div>
					<div className="content__wrapper">
						<Slide right big cascade when={true} duration={1800} appear={true}>
							<h1 className="intro intro--narrow skills__intro" dangerouslySetInnerHTML={{__html: this.props.section.headline}}></h1>
						</Slide>
						
							<div className="skills__wrapper flex">
								{this.props.section.sections.map( (section, index) => {
									return(
										<div className={index === 2 ? 'full' : 'half'} key={section+'-'+index}>
											<Slide right big cascade when={true} duration={1800} appear={true}>
												<h2 className="skills__title" dangerouslySetInnerHTML={{__html: section.title}}></h2>
											</Slide>
											<Slide right big cascade when={true} duration={1800} delay={500} appear={true}>
												<ul>
													{section.bullets.map( (bullet, index) => {
														return(
															<li key={bullet+'-'+index}>{bullet.bullet}</li>
														)
													})}
												</ul>
											</Slide>
											
										</div>

									)
								})}
							</div>
						
					</div>
				</div>	
			</div>
		)
	}
}


export default Skills;