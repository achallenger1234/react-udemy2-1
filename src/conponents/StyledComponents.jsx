import styled from "styled-components";

export const StyledComponents = () => {
    return (
        <Container>
            <Title>-Styled Components -</Title>
            <Button >FIGHT!</Button>
        </Container>
        )
}


const Container = styled.div`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;           
    display: flex;
    justify-content: space-around;
    align-items: center
`

const Title = styled.div`
    margin: 0;
    color: #3d84a8;
`

const Button = styled.div`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
`