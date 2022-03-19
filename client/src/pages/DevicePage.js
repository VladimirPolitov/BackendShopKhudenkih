import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Iphone 12pro',
        price: 25000,
        rating: 5,
        img: 'https://cdn.svyaznoy.ru/upload/iblock/08a/iphone_13_pro_max_q421_graphite_pdp_image_position-2__ru-ru.jpg'
    }
    const description = [
        {id: 1, title: 'Оперативная память', description: '5Гб'},
        {id: 2, title: 'Камера', description: '5Гб'},
        {id: 3, title: 'Процессор', description: '5Гб'},
        {id: 4, title: 'Ядра', description: '5Гб'},
        {id: 5, title: 'Аккумулятор', description: '5Гб'}
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>

                <Col md={4}>
                    <div className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div className='d-flex align-items-center justify-content-center'>
                            {device.rating}
                        </div>
                    </div>
                </Col>

                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                    style={{width: 300, height:300, fontSize: 32, border:' 5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;