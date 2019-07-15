import React from 'react';

class MailForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        const subject = this.subject;
        const message = this.message;
        const emailForm = this.emailForm;
        emailForm.setAttribute("action", `mailto:someone@example.com?subject=${subject.value}&body=${message.value}`);
    }

    render() {
        return (
            <form name="email-form" ref={(v) => this.emailForm = v} method="get" encType="text/plain" id={"#email-form"}>
                <div className="form-group row justify-content-center">
                    <div className="col-md-6">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" ref={(v) => this.subject = v}/>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <div className="col-md-6">
                        <textarea name="" name="message" cols="30" rows="10" className="form-control" placeholder="Message" ref={(v) => this.message = v}/>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Send</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default MailForm;
