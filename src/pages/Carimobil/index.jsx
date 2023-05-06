import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Footer, Header, Cover } from "../../components";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  fetchMobil,
  selectMobil,
  filterMobil,
  selectMobilLoading
} from '../../app/reducers/mobil/mobilSlice'


export default function Carimobil() {
  const firstLoad = useRef(true)
  const mobil = useSelector(selectMobil)
  const mobilLoading = useSelector(selectMobilLoading)
  const [filter, setFilter] = useState({
    availableAt: '',
    capacity: 0,
    typeDriver: '',
  })

  const dispatch = useDispatch();

  useEffect(() => {
    if(firstLoad.current) dispatch(fetchMobil())
    return () => {
        firstLoad.current = false
    }
  }, [])

  const handleChange = (e) => {
    setFilter({
        ...filter,
        [e.target.name]: e.target.value 
    })
  }

  const handleFilter = (e) => {
    e.preventDefault()

    dispatch(filterMobil(filter))
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

    return (
        <>
            <Header />
            <Cover />
            <section className="Carimobil">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                        <Form onSubmit={(e) => handleFilter(e)}>
                        <div className="shadow p-3 rounded">
                          <Row className="row-cols-lg-auto g-0 justify-content-around">
                            <Col xs={12} lg={2}>
                              <label id="tipedriver" htmlFor="exampleDataList" className="form-label">Tipe Driver</label>
                              <Form.Select name="typeDriver" aria-label="Default select example" onChange={(e) => handleChange(e)}>
                                <option value="0">Pilih Tipe Driver</option>
                                <option value="Dengan Supir">Dengan Sopir</option>
                                <option value="Lepas Kunci">Tanpa Sopir (Lepas Kunci)</option>
                              </Form.Select>
                            </Col>

                            <Col xs={12} lg={2}>
                              <label htmlFor="exampleDataList" className="form-label">Tanggal</label>
                              <Form.Control type="date" id="tersedia" name="availableAt" onChange={(e) => handleChange(e)} />
                            </Col>

                            <Col xs={12} lg={2}>
                              <label htmlFor="exampleDataList" className="form-label">Waktu</label>
                              <Form.Control type="time" id="waktu" placeholder="Select Time" />
                            </Col>

                            <Col xs={12} lg={3}>
                              <label htmlFor="exampleDataList" className="form-label">Jumlah Penumpang (Optional)</label>
                              <Form.Control type="text" id="penumpang" name="capacity" onChange={(e) => handleChange(e)} />
                            </Col>        
                                                
                            <Button id="filter" type="submit" className="btn-filter">
                              Cari Mobil
                            </Button>
                            
                            </Row>
                        </div>
                        </Form>           
                        </Col>
                    </Row>
                </Container>
            </section>
            <div>
                { mobilLoading === 'loading' && <div>Loading...</div>}
                <Container>
                  <Row className='mt-4 g-4'>          
                { mobil ? mobil.map((e,i) => (
                  
                  <Col md={6} lg={4} key={i}>
                    <Card>
                      <Card.Body>
                        <Image fluid src={"https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" + e.image.substring(1)} alt={e.manufacture}/>
                        <h3><b>{e.manufacture}</b>(<b>{e.model}</b>)</h3>
                        <h4><b>Rp. {e.rentPerDay} / Hari</b></h4>

                        <p>Plat Nomer: <b>{e.plate}</b></p>
                        <p>Tipe Driver: <b>{e.typeDriver}</b></p>
                        <p><b>{e.description}</b></p>
                        <p>Kapasitas : <b>{e.capacity}</b></p>
                        <p>Transmisi : <b>{e.transmission}</b></p>
                        <p>Tahun : <b>{e.year}</b></p>
                        <p>Tersedia : <b>{e.availableAt}</b></p>


                        <Button className='btn-pilih-mobil'>Pilih Mobil</Button>
                      </Card.Body>
                    </Card>
                  </Col>           
                ))       
                : <Col lg={12}> No Data</Col>}
                  </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}