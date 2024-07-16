import React from 'react';
import {Register_Form, Input_First_Name, Input_Last_Name, Input_Email} from './assets/scss/RegisterForm.scss';

function RegisterForm() {
    return (
        <form className={Register_Form}>
            <input type='text' name='firstName' placeholder='성' className={Input_First_Name} />
            <input type='text' name='lastName' placeholder='이름' className={Input_Last_Name} />
            <input type='text' name='email' placeholder='이메일' className={Input_Email} />
            <input type='submit' value='등록' />
        </form> 
    );
}

export default RegisterForm;