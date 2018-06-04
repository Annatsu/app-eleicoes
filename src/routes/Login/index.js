// React
import React from 'react';


import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Panel, { PanelTitle, PanelBody } from '../../components/Panel';


const Login = () => (
    <Panel>
        <PanelTitle>Entre com sua conta</PanelTitle>
        <PanelBody>

            <FormGroup>
                <label htmlFor="username">Usuário</label>
                <Input
                    id="username" />
            </FormGroup>

            <FormGroup>
                <label htmlFor="password">Senha</label>
                <Input
                    id="password" />
            </FormGroup>

        </PanelBody>
    </Panel>
);


export default Login;
