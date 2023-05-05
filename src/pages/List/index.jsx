import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import {
    fetchMobil,
    selectMobil,
    selectMobilLoading
} from '../../app/reducers/mobil/mobilSlice'

export default function List() {
  const firstLoad = useRef(true)
  const mobil = useSelector(selectMobil)
  const mobilLoading = useSelector(selectMobilLoading)

  const dispatch = useDispatch();

  useEffect(() => {
    if(firstLoad.current) dispatch(fetchMobil())

    return () => {
        firstLoad.current = false
    }
  }, [])
  

  return (
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
  )
}
