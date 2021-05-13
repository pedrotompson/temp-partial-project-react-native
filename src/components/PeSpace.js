import React from 'react'
import styled from 'styled-components/native';

export default function PeSpace(props) {

    
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
        } else if (props.space7 || props.Space7) {
            return 35;
        } else if (props.space8 || props.Space8) {
            return 40;
        } else if (props.space9 || props.Space9) {
            return 45;
        } else {
            return 20;
        }
    }

    const setHorizontalSpace = () => {
        if (props.horizontal) {
            return setSpace();
        } else {
            return 0;
        }
    };

    const setVerticalSpace = () => {
        //Função padrão
        if (!props.horizontal) {
            return setSpace();
        } else {
            return 0;
        }
    };

    //Definindo o styled component de acordo com os valores calculados
    const SpaceStyled = styled.View `
        
        width: ${setHorizontalSpace()}px; 
        height: ${setVerticalSpace()}px; 
        
    `;
    //TODO Observar problema na exibição do tamanho

    //Criando o componente
    return ( 
        <SpaceStyled></SpaceStyled>
    )
}