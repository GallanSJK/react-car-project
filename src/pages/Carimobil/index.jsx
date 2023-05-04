import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Footer, Header, Cover } from "../../components";
import { List } from "../../pages";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Carimobil() {
    return (
        <>
            <Header />
            <Cover />
            <section className="Carimobil">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                        <div className="shadow p-3 rounded">
                          <Row className="row-cols-lg-auto g-0 justify-content-around">
                            <Col xs={12} lg={2}>
                              <label id="tipedriver" for="exampleDataList" className="form-label">Tipe Driver</label>
                              <Form.Select aria-label="Default select example">
                                <option value="0" selected>Pilih Tipe Driver</option>
                                <option value="Dengan Supir">Dengan Sopir</option>
                                <option value="Lepas Kunci">Tanpa Sopir (Lepas Kunci)</option>
                              </Form.Select>
                            </Col>

                            <Col xs={12} lg={2}>
                              <label for="exampleDataList" className="form-label">Tanggal</label>
                              <Form.Control type="date" id="tersedia" placeholder="Select Date" />
                            </Col>

                            <Col xs={12} lg={2}>
                              <label for="exampleDataList" className="form-label">Waktu</label>
                              <Form.Control type="time" id="waktu" placeholder="Select Time" />
                            </Col>

                            <Col xs={12} lg={3}>
                              <label for="exampleDataList" className="form-label">Jumlah Penumpang (Optional)</label>
                              <Form.Control type="text" id="penumpang" placeholder="Jumlah Penumpang" />
                            </Col>        
                                                
                            <Button id="filter" className="btn-filter">
                              Cari Mobil
                            </Button>
                            
                            </Row>
                        </div>           
                        </Col>
                    </Row>
                </Container>
            </section>
            <List />
            <Footer />
        </>
    )
}