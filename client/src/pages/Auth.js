import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";

const Auth = () => {
    return (
        <Container
            className='d-flex justify-content-center align-content-center'
            style={{height: "max-content"}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>Авторизация</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш email...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш пароль...'
                    />
                    <Button
                        className='mt-3 align-self-end'
                        variant={'outline-success'}>
                        Войти
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;