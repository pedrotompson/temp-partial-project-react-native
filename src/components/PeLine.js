import React from 'react'
import styled from 'styled-components/native';
import PeColors from './PeColors';

export default function PeLine(props) {

    
    const setSpace = () => {
        if (props.space1 || props.Space1) {
            return 5;
        } else if (props.space2 || props.Space2) {
            return 10;
        } else if (props.space3 || props.Space3) {
            return 15;
        } else if (props.space4 || props.Space4) {
            return 20;
        } else if (props.space5 || props.Space5) {
            return 25;
        } else if (props.space6 || props.Space6) {
            return 30;
        } else {
            return 0;
        }
    }

    //Definindo o styled component de acordo com os valores calculados
    const LineStyled = styled.View`
        border-bottom-width: 1px;
        border-style: solid;
        border-bottom-color: ${PeColors.line};
        margin: ${setSpace()}px 0px; 
        /* width:100%; */
        
    `;
    //TODO Observar problema na exibição do tamanho

    //Criando o componente
    return ( 
        <LineStyled></LineStyled>
    )
}