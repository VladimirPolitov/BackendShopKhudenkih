import React, {useContext, useEffect} from 'react';
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row"
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchType} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=>{
        fetchType().then(data=> device.setTypes(data))
        fetchBrands().then(data=> device.setBrands(data))
        fetchDevices(null, null, 1, 3).then(data=> {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(()=> {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3).then(data=> {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <Container className='mt-2'>
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;