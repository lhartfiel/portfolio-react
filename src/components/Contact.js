import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';

class Contact extends Component {

	constructor(props){
		super(props);

		this.state = {
			first: "",
			last: "",
			email: "",
			message: ""
		}

		this.labelHandler = this.labelHandler.bind(this);
		this.labelBlur = this.labelBlur.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	}

	labelHandler(e){
		e.preventDefault();
		const field = e.target;

		field.parentNode.classList.toggle('active-input');

	}

	labelBlur(e){
		e.preventDefault();
		const field = e.target;

		field.parentNode.classList.remove('active-input');

	}

	onSubmit(e){
		const {first, last, email, message} = this.state;

		// $.ajax({
  //     url: "http://localhost:3000/mailer.php",
  //     type: 'POST',
  //     data: {
  //       'first': this.state.first,
  //       'last': this.state.last,
  //       'email': this.state.email,
  //       'message': this.state.message
  //     },
  //     cache: false,
  //     success: function(data) {
  //       // Success..
  //       this.setState({
  //         first: 'success',
  //         successMessage: '<p>Thanks for your submission! I\'ll respond within 48 hours.</p>'
  //       });
  //       $('form').slideUp();
  //       $('form').after(this.state.contactMessage);
  //       console.log('success', data);
  //     }.bind(this),
  //     // Fail..
  //     error: function(xhr, status, err) {
  //       console.log(xhr, status);
  //       console.log(err);
  //       this.setState({
  //         contactEmail: 'danger',
  //         contactMessage: '<h1>Sorry, you\'re email could not be sent.</p>'
  //       });
  //       console.log(this.state.contactEmail + this.state.contactMessage + 'fail');
  //     }.bind(this)
  //   });
  	// 'http://localhost:3000/mailer.php'
  
		// fetch('http://www.lindsayhartfiel.com/portfolio/mailer.php', {
		// 	method: 'post',
		// 	headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
		//     first: first,
		//     last: last,
		//     email: email,
		//     message: message
		//   })
		// })
		// .then(function(res){
		// 	return res.json();
		// })
	
		let formVal = e.target;
	}

	render(){
		const { first, last, email, message } = this.state;
		return (
			<div className="contact">
				<h1 className="section-title section-title--right">{this.props.section.section_title}</h1>
				<div className="triangle triangle--right"></div>
				<div className="wrapper wrapper--vertical" id="contact">
					<Slide right big cascade when={true} duration={1800} appear={true}>
						<div className="contact__email--wrapper">
								<h1>{this.props.section.email_title}</h1>
								<p className="contact--description">{this.props.section.description}</p>
								<a href={`mailto:`+this.props.section.email} className="contact__link">{this.props.section.email}</a>
						</div>
						<div className="social">
							<a href={this.props.section.github} target="_blank"><img src={github} alt=""/></a>
							<a href={this.props.section.linkedin} target="_blank">
								<img src={linkedin} alt=""/>
							</a>
						</div>
					</Slide>
					
					<div className="content__wrapper">

						{/*<form onSubmit={this.onSubmit}>
								<h1>{this.props.section.contact_title}</h1>
								<ul className="flex">
									<li className="form__first">
										<label htmlFor="first_name">First Name</label>
										<input id="first" type="text" name="first" value={first} onChange={this.onChange} onClick={this.labelHandler} onBlur={this.labelBlur} />
									</li>
									<li className="form__last">
										<label htmlFor="last_name">Last Name</label>
										<input id="last" type="text" name="last" value={last} onChange={this.onChange} onClick={this.labelHandler} onBlur={this.labelBlur}/>
									</li>
									<li className="form__email">
										<label htmlFor="email">Email</label>
										<input id="email" type="text" name="email" value={email} onChange={this.onChange} onClick={this.labelHandler} onBlur={this.labelBlur}/>
									</li>
									<li className="form__message">
										<label htmlFor="message">Message</label>
										<textarea id="message" type="text" name="message" value={message} onChange={this.onChange} onClick={this.labelHandler} onBlur={this.labelBlur}/>
									</li>
								</ul>		
								<input type="hidden" name="submitted" value="1"/>
								<div className="submit__wrapper flex">
									<div className="submit__button">
										<input type="submit" value="Submit"/>
									</div>
								</div>
						</form>*/}
					</div>
				</div>
			</div>
		)
	}
}


export default Contact;