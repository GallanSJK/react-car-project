import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import imgCar from '../../assets/mobil.png'
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Cover() {
    
    return (
        <>
            <section className="Cover">
                <Container>
                    <Row>
                        <Col xs={12} lg={6} >
                            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                            <p className="intro-text">
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                            <Link to='/cari-mobil'>
                                <Button className="btn-sewa">Mulai Sewa Mobil</Button>
                            </Link>
                        </Col>
                        <Col xs={12} lg={6}>
                            <Image src={imgCar} fluid />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
