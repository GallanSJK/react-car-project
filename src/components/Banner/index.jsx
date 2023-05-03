import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Banner () {
    return (
        <>
            <section id="Banner">
                <Container className="text-center">
                    <h2 className="text-center fw-bold text-light pt-5">Sewa Mobil di (Lokasimu) Sekarang</h2>
                    <p className="text-center pt-3" style={{
                        fontSize: '14px',
                        fontWeight: '300',
                        lineHeight: '20px',
                        color: '#ffff'
                    }}
                    >
                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sequi. dolor sit amet. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Button className="btn-sewa-mobil mt-4">Mulai Sewa Mobil</Button>
                </Container>
            </section>
        </>
    )
}