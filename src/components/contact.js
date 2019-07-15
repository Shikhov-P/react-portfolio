import React from 'react';
import MailForm from './MailForm';

class Contact extends React.Component {
    render() {
        return (
            <div className={"contact-container"}>
                <h1>Send me an email</h1>
                <MailForm />
            </div>

        )

    }
}

export default Contact;
