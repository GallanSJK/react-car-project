import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Banner () {
    return (
        <>
            <section id="Banner">
                <Container className="text-center">
                    <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Button className="btn-sewa-mobil">Mulai Sewa Mobil</Button>
                </Container>
            </section>
        </>
    )
}