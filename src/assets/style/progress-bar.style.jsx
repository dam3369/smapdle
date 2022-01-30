import styled from "styled-components"

const Progress = styled.div`
    height: 12px;
`

export const ProgressBar = styled(Progress)`
    align-items: stretch;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 50px;
`

export const ProgressBarTens = styled(ProgressBar)`
    background-color: transparent;
    width: 5px;
`

export const ProgressContent = styled.div`
    background-color: tomato;
    height: 12px;
    width: 0%;

    &.s-0 {
        width: 0%;
    }
    &.s-10 {
        width: 10%;
    }
    &.s-20 {
        width: 20%;
    }
    &.s-30 {
        width: 30%;
    }
    &.s-40 {
        width: 40%;
    }
    &.s-50 {
        width: 50%;
    }
    &.s-60 {
        width: 60%;
    }
    &.s-70 {
        width: 70%;
    }
    &.s-80 {
        width: 80%;
    }
    &.s-90 {
        width: 90%;
    }
    &.s-100 {
        width: 100%;
    }
`
