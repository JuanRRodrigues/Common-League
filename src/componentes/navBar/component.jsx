import styled from 'styled-components'

export const bar = styled.div`
    height: 58.3px;
    border-bottom: 0.5 solid rgb(231, 228, 288);
    border-top: 0.5px solid rgb(231, 228, 228);
    border-right: 0.5px solid rgb(231, 228, 228);
    display: flex;
    align-items: 14px;
    font-size: 14px;
    color: black;
`

export const wrapper = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const a = styled.a`
    position: relative;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    margin-left: 100px;


    &::before{
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: width 3.s;
    }

     &:hover::before{
        width: 100%;
     }


    `;