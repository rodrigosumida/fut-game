import styled from "styled-components";

export const DivCentral = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95%;
    width: 95%;
    border-radius: 15px;
    background-color: #305252;
    gap: 10px;
`;

export const SectionMenu = styled.section`
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    width: 45%;
    height: 80%;
`;

export const TituloInfo = styled.h1`
    color: white;
    overflow: hidden;
`;

export const VersaoInfo = styled.h3`
    color: white;
    overflow: hidden;
`;

export const ParagrafoInfo = styled.p`
    color: white;
    text-align: justify;
    overflow: hidden;
`;

export const DivBotoes = styled.div`
    max-width: 100%;
    height: fit-content;
`;

export const Botao = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #B7D5D4;
    border-radius: 7px;
    margin: 20px 0;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;