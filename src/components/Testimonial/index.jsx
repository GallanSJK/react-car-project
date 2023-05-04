import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ImgPhoto1 from '../../assets/img_photo.png'
import ImgPhoto2 from '../../assets/img_photo1.png'
import 'swiper/css';


export default function Testimonial() {
  return (
      <>
          <section id="Testimonial">
            
              <Col xs={12} lg={12} className='text-center'>
                <h2>Testimonial</h2>
                <p>Berbagai review positif dari para pelanggan kami</p>
              </Col>
              <div className="carousel-wrapper">
                <div className="swiper-container mySwiper">
               
                <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{ 
                nextEl: ".swipernext",
                prevEl: ".swiperprev", 
                }}
                breakpoints={{ 
                }}>
                  <SwiperSlide>
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col md={12} lg={3} className='d-grid justify-content-center'>
                            <img src={ImgPhoto1} />
                          </Col>
                          <Col md={12} lg={9}>
                          <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum explicabo, suscipit iusto fuga facilis
                            ea blanditiis vel odio aspernatur pariatur!
                          </p>
                          <p className="fw-bold">
                            John Dee 32, Bromo
                          </p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card> 
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col md={12} lg={3} className='d-grid justify-content-center'>
                            <img src={ImgPhoto2} />
                          </Col>
                          <Col md={12} lg={9}>
                          <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum explicabo, suscipit iusto fuga facilis
                            ea blanditiis vel odio aspernatur pariatur!
                          </p>
                          <p className="fw-bold">
                            John Dee 32, Bromo
                          </p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card> 
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col md={12} lg={3} className='d-grid justify-content-center'>
                            <img src={ImgPhoto1} />
                          </Col>
                          <Col md={12} lg={9}>
                          <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum explicabo, suscipit iusto fuga facilis
                            ea blanditiis vel odio aspernatur pariatur!
                          </p>
                          <p className="fw-bold">
                            John Dee 32, Bromo
                          </p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card> 
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col md={12} lg={3} className='d-grid justify-content-center'>
                            <img src={ImgPhoto2} />
                          </Col>
                          <Col md={12} lg={9}>
                          <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum explicabo, suscipit iusto fuga facilis
                            ea blanditiis vel odio aspernatur pariatur!
                          </p>
                          <p className="fw-bold">
                            John Dee 32, Bromo
                          </p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card> 
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col md={12} lg={3} className='d-grid justify-content-center'>
                            <img src={ImgPhoto1} />
                          </Col>
                          <Col md={12} lg={9}>
                          <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum explicabo, suscipit iusto fuga facilis
                            ea blanditiis vel odio aspernatur pariatur!
                          </p>
                          <p className="fw-bold">
                            John Dee 32, Bromo
                          </p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card> 
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col md={12} lg={3} className='d-grid justify-content-center'>
                            <img src={ImgPhoto2} />
                          </Col>
                          <Col md={12} lg={9}>
                          <p className="star"><label>⭐⭐⭐⭐⭐</label></p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum explicabo, suscipit iusto fuga facilis
                            ea blanditiis vel odio aspernatur pariatur!
                          </p>
                          <p className="fw-bold">
                            John Dee 32, Bromo
                          </p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card> 
                  </SwiperSlide>
                </Swiper>
                <div className="swiper-navigation">
                  <button className='swiperprev'>{'<'}</button>
                  <button className='swipernext'>{'>'}</button>
                </div>
                </div> 
              </div>
              
          </section>
      </>
  )
}