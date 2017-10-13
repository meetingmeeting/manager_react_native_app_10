import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';


class LoginForm extends Component{

    onEmailChange(text){


    }//email change



    render(){
        return (
                <Card>
                        <CardSection>
                        <Input label="Email"
                        placeholder="email@gmail.com" />
                        </CardSection>

                        <CardSection>
                        <Input
                        secureTextEntry
                         label="Password"
                        placeholder="password" />
                         </CardSection>

                         <CardSection>
                             <Button >
                                 Login
                                 </Button>
                          </CardSection>

                </Card>
        );

    }//render

}//class

export default LoginForm;