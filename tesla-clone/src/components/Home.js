import React from 'react';
import Section from './Section';
import styled from "styled-components";

function Home() {
    return (
        <div>
        <Container>
         <Section
            title="Model S"
            descripition="Order Online for"
            link="Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="CUSTOM OREDER"
            rightBtnText="EXISTING INVENTORY"

          />
         {/* <Section />
         <Section />
         <Section /> */}
        </Container>
            
        </div>
    )
}

export default Home

const Container = styled.div`

`

