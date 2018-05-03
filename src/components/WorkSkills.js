import React, { Component } from 'react';


class WorkSkills extends Component {
	constructor(props){
		super(props);

		this.state = {
			id: this.props.site_id,
			skill_id: this.props.skill_id,
			index: this.props.index,
			devskills: [],
		}
	}

	componentDidMount(){
		var id = this.state.id;
		var skill_id = this.state.skill_id;

		// let url = `http://localhost:8888/Sites/Portfolio/wp-json/wp/v2/skills/${skill_id}`;
		// let url = `http://www.lindsayhartfiel.com/wp-json/wp/v2/skills/${skill_id}`;

		let url;
		process.env.NODE_ENV === 'development' ? url = process.env.REACT_APP_API_HOST+`/wp-json/wp/v2/skills/${skill_id}` : url = process.env.REACT_APP_PROD_HOST+`/wp-json/wp/v2/skills/${skill_id}`;

		if(url) {
			fetch(url)
				.then(res => res.json())
				.then(res => {
					this.setState({
						devskills: res
					})
				})	
		}
	}

	render(){
		return (
			<li className="c-white fw--regular">{this.state.devskills.name}</li>
		)
	}
}


export default WorkSkills;