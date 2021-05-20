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
         <Section
            title="Model Y"
            descripition="Order Online for"
            link="Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="CUSTOM OREDER"
            rightBtnText="EXISTING INVENTORY"
          />
         <Section
            title="Model 3"
            descripition="Order Online for"
            link="Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="CUSTOM OREDER"
            rightBtnText="EXISTING INVENTORY" />
         <Section
            title="Model x"
            descripition="Order Online for"
            link="Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="CUSTOM OREDER"
            rightBtnText="EXISTING INVENTORY" />
         <Section
            title="Lowest Cost Solar Panels in America"
            descripition="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="OREDER NOW"
            rightBtnText="LEARN MORE" />
         <Section
            title="Solar for New Roofs"
            descripition="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="OREDER NOW"
            rightBtnText="LEARN MORE" />
         <Section
            title="Accessories"
            backgroundImg="accessories.jpg"
            leftBtnText="SHOP NOW" />  
        </Container>
            
        </div>
    )
}

export default Home

const Container = styled.div`

`

