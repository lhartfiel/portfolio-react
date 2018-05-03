import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

import Type from './Type.js';
import Employee from './Employee.js';
import WorkSkills from './WorkSkills.js';
import button from '../img/button.svg';

class Work extends Component {
	constructor(props){
		super(props);

		this.state = {
			sites: []
		}
	}

	componentDidMount(){

		let dataUrl;
		process.env.NODE_ENV === 'development' ? dataUrl = process.env.REACT_APP_API_HOST+'/wp-json/wp/v2/site?_embed': dataUrl = process.env.REACT_APP_PROD_HOST+'/wp-json/wp/v2/site?_embed';

		fetch(dataUrl)
			.then(res => res.json())
			.then(res => {
				this.setState({
					sites: res
				})
			})
	}

	render(){
		return(
			<div className="work" id="work">
				<div className="wrapper wrapper--vertical">
					<Slide right big cascade when={true} duration={1800} appear={true}>
						<h1 className="intro h1--work" dangerouslySetInnerHTML={{__html: this.props.section.work_headline}}></h1>
					</Slide>
					<h1 className="section-title section-title--left">{this.props.section.section_title}</h1>
					<div className="flex">
					{
						[].concat(this.state.sites)
		    		.sort((a, b) => a.menu_order > b.menu_order)
						.map( (site, index) => {
							return(
								<Slide right big cascade when={true} duration={1800} appear={true}>
									<a href={site.acf["site_url"]} target="_blank" className={ site.menu_order < 4 ? "container third" : "container half"}  key={site+'-'+index}>
										{ site._embedded["wp:featuredmedia"] && 
										(
												<img src={ site._embedded["wp:featuredmedia"]["0"].media_details.sizes.work.source_url } alt="" className="work__img"/>
										)}
										<div className="work__content">
											<h1 className="c-white fw--medium">{site.title.rendered}</h1>
											<div className="work__info">
												{site.site_types.map( (site_type, index) => {
													return(
														<div className="work--type" key={site_type+'-'+index}>
															<Type site_id={site.id}/>
														</div>
													)
												})}

												{site.site_types.map( (professional_org, index) => {
													return(
														<Employee site_id={site.id} key={professional_org+'-'+index}/>
													)
												})}
											</div>

											<ul className="work--list">
												{site.skills.map( (skill, index) => {
													return (
															<WorkSkills site_id={site.id} skill_id={skill} index={'line--'+index} key={skill+'-'+index}/>
													)
												})}	
											</ul>
										</div>
										<div className="work__link__wrapper flex">
											<p className="work__link">View Site</p>
											<span className="link--svg"><img src={button} alt=""/></span>
										</div>
									</a>
								</Slide>
							)
					})}
					</div>
				</div>	
			</div>	
		)
	}
}

export default Work;