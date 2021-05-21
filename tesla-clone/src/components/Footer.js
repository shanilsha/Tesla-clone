import React from 'react'
import styled from "styled-components";

function Footer() {
    return (
        <Container>
            <h3>Tesla © 2021</h3>
            <h3>Privacy & Legal</h3>
            <h3>News</h3>
            <h6>© made by Muhammed shanil</h6>
        </Container>
    )
}

export default Footer

const Container = styled.div`

text-transform: uppercase;

`
