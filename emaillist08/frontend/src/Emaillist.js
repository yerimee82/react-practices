import React from 'react';
import {Email_List} from './assets/scss/Emaillist.scss';
import Email from './Email';

function Emaillist({emails}) {
    return (
        <ul className={Email_List}>
            {
                emails.map(email => <Email
                                        key={email.no}
                                        firstName={email.firstName}
                                        lastName={email.lastName}
                                        email={email.email} />)
            }
        </ul>
    );
}

export default Emaillist;