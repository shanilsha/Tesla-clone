import React,{ useState } from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import {selectCars} from '../features/carSlice/carSlice';
import { useSelector} from 'react-redux';




function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    const cars = useSelector(selectCars)
  

    return (
        <HeaderContainer>
            <a href="/">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car,index)=>(
                    <a key={index} href="#">{car}</a>
                ))}
                <a href="#">SOLAR ROOF</a>
                <a href="#">SOALAR PANELS</a>
            </Menu>

            <RightMenu>
                <a href="#" >SHOP</a>
                <a href="#" >TESLA ACCOUNT</a>
            </RightMenu>
            <CustomMenu onClick={()=>setBurgerStatus(true)} />
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)} />
                </CloseWrapper>
                {cars && cars.map((car,index)=>(
                    <li key={index}><a href="#">{car}</a></li>
                ))}
                <li><a href="#">EXISTING INVENTORY</a></li>
                <li><a href="#">USE INVENTORY</a></li>
                <li><a href="#">EXISTING INVENTORY</a></li>
                <li><a href="#">EXISTING INVENTORY</a></li>
                <li><a href="#">EXISTING INVENTORY</a></li>
                <li><a href="#">EXISTING INVENTORY</a></li>
                <li><a href="#">EXISTING INVENTORY</a></li>
            </BurgerNav>
            

        
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    cursor: pointer;
    top:0;
    left:0;
    right:0;
    z-index:1;
    

`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    
    

    a {
        font-weight:600;
        padding:0 10px;
        flex-wrap:nowrap;
       
    }

    @media(max-width:768px){
        display:none;
    }

`
const RightMenu = styled.div`
    display:flex;

a {
        font-weight:600;
        margin-right:10px;
        flex-wrap:nowrap;
        
    }
    @media(max-width:768px){
        display:none;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
   
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    /* cancel button */
    transform:${props => props.show ?`translateX(0)`:`translateX(100%)`};
    transition:transform 0.2s;
    li {
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2);


        a {
            font-weight:600;
        }

    }

    
`
const CustomClose = styled(ClearIcon)`
    cursor: pointer;

`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;

`