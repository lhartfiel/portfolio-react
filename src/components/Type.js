import React, { Component } from 'react';

class Type extends Component {
	constructor(props){
		super(props);

		this.state = {
			id: this.props.site_id,
			types: []
		}
	}

	componentDidMount(){
		var id = this.state.id;


		let dataUrl;
		process.env.NODE_ENV === 'development' ? dataUrl = process.env.REACT_APP_API_HOST+`/wp-json/wp/v2/site_types?post=${id}`: dataUrl = process.env.REACT_APP_PROD_HOST+`/wp-json/wp/v2/site_types?post=${id}`;

		fetch(dataUrl)
			.then(res => res.json())
			.then(res => {
				this.setState({
					types: res
				})
			})
	}

	render(){
		return(
			<div className="work--type__wrapper">
				{this.state.types.map( (type, index) => {
					return(
						<div className="type__wrapper" key={type+'-'+index}>
								<h2 className="c-white fw--regular">{type.name}</h2>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Type;