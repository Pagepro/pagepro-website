import React, { Component } from 'react';

import addToMailchimp from "gatsby-plugin-mailchimp";

class Newsletter extends Component {
    state = {
        email: '',
        msg: '' // holding info about succes of sending email to mailchimp
    }

    handleChange = e => {
        const value = e.target.value;
        this.setState({
            email: value,
            msg: ''
        })
    }


    handleSubmit = e => {
        e.preventDefault();
        addToMailchimp(this.state.email)
            .then(data => {
                if (data.msg.includes('already')) {
                    this.setState({
                        email: '',
                        msg: 'You are already subscribing our site.'
                    })
                } else {
                    this.setState({
                        email: '',
                        msg: data.msg,
                    })
                }
                // console.log(data)
            })
    }

    render() {
        return (
            <>
                <form noValidate onSubmit={this.handleSubmit}>
                    <p>newsletter</p>
                    <p>Teaching is a part of our company`s DNA: we do internal lectures and workshops, speak at meetups, and conferences, write blog posts.</p>
                    <input placeholder='Your e-mail' type="email" id="email" value={this.state.email} onChange={this.handleChange} />
                    <button>Contact</button>
                    {this.state.msg === '' ? null : <p>{this.state.msg}</p>}
                    {/* msgs: Thank you for subscribing!; You are already subscribing our site.; The email you entered is not valid.  */}
                </form>
            </>
        );
    }
}

export default Newsletter;


