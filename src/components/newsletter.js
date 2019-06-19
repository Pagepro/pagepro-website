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
            .then(({ result, msg }) => {
                const message = result === 'error' ? 'You are already subscribed our site.' : msg

                this.setState({
                    email: '',
                    msg: message,
                })


            })
    }

    render() {
        return (
            <>
                <div className="l-foot__box g-gr gr-4 no-gutter h-hide@mobile">
                    <div className="c-info-box g-gutter-right-8 g-gutter-right-3@tablet" aria-label="Company address">
                        <div className="c-info-box__head">
                            <h4 className="u-paint-3 t-style-fpn-s-r">Newsletter</h4>
                        </div>
                        <div className="c-info-box__content g-gutter-top-1">
                            <strong className="t-style-fpn-l-r u-line-h-s">
                                Get the latest on PAGEPRO stuff <br className="hide@tablet" />straight to your inbox.
                        </strong>
                            <form noValidate onSubmit={this.handleSubmit} className="f-form f-form--newsletter g-spacing-top-2">
                                <fieldset>
                                    <div className="f-form__section">
                                        <div className="f-field f-field--anim">
                                            <div className="f-label-wrapper">
                                                <label className="t-style-fpn-xxs-r u-paint-3" for="newsletter_email">Your E-mail</label>
                                            </div>

                                            <div className="f-input-wrapper f-input-wrapper--phone">
                                                <input className="u-paint-3" type="email" name="email" id="newsletter_email" value={this.state.email} onChange={this.handleChange} />
                                                <button type="submit" className="js__submit-newsletter u-paint-3">
                                                    <span className="o-icon o-icon--mail"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                            <p style={{ color: 'white', margin: 0, padding: 0 }}>{this.state.msg}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Newsletter;


