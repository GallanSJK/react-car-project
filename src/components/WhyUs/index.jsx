import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ImgComplete from '../../assets/icon_complete.png'
import ImgPrice from '../../assets/icon_price.png'
import ImgTime from '../../assets/icon_24hrs.png'
import ImgPro from '../../assets/icon_professional.png'

export default function WhyUs() {
  return (
      <>
          <section id="WhyUs">
          <Container>
                    <Row>
                        <Col lg={12} xs={12} className="header">
                        <h2>Why Us?</h2>
                        <p>Mengapa harus pilih Binar Car Rental?</p>
                        </Col>
                    </Row>
                    <Row className="mt-4 g-4">
                        <Col md={6} lg={3}>
                          <Card>
                            <Card.Body>
                            {/* <Card.Img src="holder.js/100px180" /> */}
                            <img src={ImgComplete} />
                            <h3>Mobil Lengkap</h3>
                            <p className="item">
                              Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                              dan terawat
                            </p>
                            </Card.Body>
                          </Card> 
                        </Col>
                        <Col md={6} lg={3}>
                          <Card>
                            <Card.Body>
                            {/* <Card.Img src="holder.js/100px180" /> */}
                            <img src={ImgPrice} />
                            <h3>Harga Murah</h3>
                            <p className="item">
                              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                            </p>
                            </Card.Body>
                          </Card> 
                        </Col>
                        <Col md={6} lg={3}>
                          <Card>
                            <Card.Body>
                            {/* <Card.Img src="holder.js/100px180" /> */}
                            <img src={ImgTime} />
                            <h3>Layanan 24 Jam</h3>
                            <p className="item">
                              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                            </p>
                            </Card.Body>
                          </Card> 
                        </Col>
                        <Col md={6} lg={3}>
                          <Card>
                            <Card.Body>
                            {/* <Card.Img src="holder.js/100px180" /> */}
                            <img src={ImgPro} />
                            <h3>Sopir Profesional</h3>
                            <p className="item">
                            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                            </p>
                            </Card.Body>
                          </Card> 
                        </Col>
                    </Row>
                </Container>
          </section>

      </>
  )
}