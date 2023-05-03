import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";
import ImgFacebook from '../../assets/icon_facebook.png'
import ImgInstagram from '../../assets/icon_instagram.png'
import ImgTwitter from '../../assets/icon_twitter.png'
import ImgMail from '../../assets/icon_mail.png'
import ImgTwitch from '../../assets/icon_twitch.png'
import Biru from '../../assets/biru.png'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Footer() {
    return (
        <>
            <section id="Footer">
                <Container>
                    <Row>
                        <Col xs={12} lg={3}>
                            <div className="footer-text">
                                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                <p>binarcarrental@gmail.com</p>
                                <p>081-233-334-808</p>
                            </div>
                        </Col>
                        <Col xs={12} lg={2} >
                            <div className="footer-text">
                                <p><a href="#OurService">Our services</a></p>
                                <p><a href="#WhyUs">Why Us</a></p>
                                <p><a href="#Testimonial">Testimonial</a></p>
                                <p><a href="#Faq">FAQ</a></p>
                            </div>
                        </Col>
                        <Col xs={12} lg={3}>
                            <p>Connect with us</p>
                            <div className="footer-icons">
                                <Image src={ImgFacebook} fluid />
                                <Image src={ImgInstagram} fluid />
                                <Image src={ImgTwitter} fluid />
                                <Image src={ImgMail} fluid />
                                <Image src={ImgTwitch} fluid />
                            </div>
                        </Col>
                        <Col xs={12} lg={3}>
                            <div>
                                <p className="footer-text">Copyright Binar 2022</p>
                                <Image src={Biru} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}