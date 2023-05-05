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
  selectMobilLoading
} from '../../app/reducers/mobil/mobilSlice'


export default function Carimobil() {
  const firstLoad = useRef(true)
  const mobil = useSelector(selectMobil)
  const mobilLoading = useSelector(selectMobilLoading)
  // const [filter, setFilter] = useState({
  //   availableAt: ''
  // })

  const dispatch = useDispatch();

  useEffect(() => {
    if(firstLoad.current) dispatch(fetchMobil())
    return () => {
        firstLoad.current = false
    }
  }, [])

  // const handleChange = (e) => {
  //   setFilter({
  //       ...filter,
  //       [e.target.name]: e.target.value 
  //   })
  // }

  // const handleFilter = (e) => {
  //   e.preventDefault()

  //   dispatch(filterMobil(filter))
  // }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

    return (
        <>
            <Header />
            <Cover />
            {/* <form onSubmit={(e) => handleFilter(e)}>
                <input type="date" name="availableAt" onChange={(e) => handleChange(e)}/>
                <button type='submit'>Search</button>
            </form> */}
            <section className="Carimobil">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                        {/* <Form onSubmit={(e) => handleFilter(e)}></Form> */}
                        <div className="shadow p-3 rounded">
                          <Row className="row-cols-lg-auto g-0 justify-content-around">
                            <Col xs={12} lg={2}>
                              <label id="tipedriver" htmlFor="exampleDataList" className="form-label">Tipe Driver</label>
                              <Form.Select  aria-label="Default select example">
                                <option value="0">Pilih Tipe Driver</option>
                                <option value="Dengan Supir">Dengan Sopir</option>
                                <option value="Lepas Kunci">Tanpa Sopir (Lepas Kunci)</option>
                              </Form.Select>
                            </Col>

                            <Col xs={12} lg={2}>
                              <label htmlFor="exampleDataList" className="form-label">Tanggal</label>
                              <Form.Control type="date" id="tersedia" name="availableAt" placeholder="Select Date" />
                              {/* <Form.Control type="date" id="tersedia" name="availableAt" onChange={(e) => handleChange(e)} /> */}
                            </Col>

                            <Col xs={12} lg={2}>
                              <label htmlFor="exampleDataList" className="form-label">Waktu</label>
                              <Form.Control type="time" id="waktu" placeholder="Select Time" />
                            </Col>

                            <Col xs={12} lg={3}>
                              <label htmlFor="exampleDataList" className="form-label">Jumlah Penumpang (Optional)</label>
                              <Form.Control type="text" id="penumpang" placeholder="Jumlah Penumpang" />
                            </Col>        
                                                
                            <Button id="filter" type="submit" className="btn-filter">
                              Cari Mobil
                            </Button>
                            
                            </Row>
                        </div>           
                        </Col>
                    </Row>
                </Container>
            </section>
            <div>
                { mobilLoading === 'loading' && <div>Loading...</div>}
                <Container>
                  <Row className='mt-4' gap={4}>          
                { mobil ? mobil.map((e,i) => (
                  
                  <Col md={6} lg={4} key={i}>
                    <Card>
                      <Card.Body>
                        <Image fluid src={"https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" + e.image.substring(1)} alt={e.manufacture}/>
                        <h3><b>{e.manufacture}</b>(<b>{e.model}</b>)</h3>
                        <h4><b>Rp. {e.rentPerDay} / Hari</b></h4>

                        <p>Plat Nomer: <b>{e.plate}</b></p>
                        {/* <p>Tipe Driver: <b>{e.typeDriver}</b></p> */}
                        <p><b>{e.description}</b></p>
                        <p>Kapasitas : <b>{e.capacity}</b></p>
                        <p>Transmisi : <b>{e.transmission}</b></p>
                        <p>Tahun : <b>{e.year}</b></p>

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