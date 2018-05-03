import  React, { Component } from 'react';

class Employee extends Component {
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

		process.env.NODE_ENV === 'development' ? dataUrl = process.env.REACT_APP_API_HOST+`/wp-json/wp/v2/professional_org?post=${id}` : dataUrl = process.env.REACT_APP_PROD_HOST+`/wp-json/wp/v2/professional_org?post=${id}`;

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
			<div className="employee">
			{this.state.types.map( (type, index) => {
				return(
					<div className="employee__wrapper" key={type}>
							<h3 className="employee__name c-white fw--medium">{type.name}</h3>
					</div>
				)
			})}
			</div>
		)
	}
}

export default Employee;