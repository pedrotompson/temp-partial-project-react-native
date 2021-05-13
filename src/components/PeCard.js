import React from 'react';
import { View } from "react-native";
import styled from 'styled-components/native';
import PeColors from './PeColors';
import { setMarginTop, setMarginRight, setMarginBottom, setMarginLeft } from './PeDefaults';

export default function PeCard(props) {

    //Declarando os valores padrão
    let padding = 10;
    let backgroundColor = PeColors.backgroundCard;
    let button = props.button || false;

    //Calculando valores de acordo com o parâmetro
    if (props.nopadding || props.noPadding || props.NoPadding) {
        padding = 0;
    }


    //Funções
    const setColor = () => {
        if (props.customColor) {
            return props.customColor;
        } else if (props.secondary || props.Secondary) {
            return PeColors.backgroundSecondary;
        } else if (props.primary || props.Primary) {
            return PeColors.backgroundPrimary;
        } else if (props.muted || props.Muted) {
            return PeColors.backgroundCardMuted;
        }else {
            return backgroundColor;
        }
    }

    const setAlign = () => {
        if (props.left) {
            return 'flex-start';
        } else if (props.right) {
            return 'flex-end';
        } else if (props.center) {
            return 'center';
        } else {
            return 'stretch';
        }
    }

    //Definindo o styled component de acordo com os valores calculados


    const CardStyled = styled.TouchableOpacity`
        padding: ${padding}px;
        background-color: ${setColor()};
        border-radius: ${props.radius ? props.radius : (props.noradius ? 0 : 10)}px;
        margin: ${setMarginTop(props, 0)}px ${setMarginLeft(props, 0)}px ${setMarginBottom(props, 0)}px ${setMarginRight(props, 0)}px;
        align-items: ${setAlign};        
    `;



    //Criando o componente
    return (
        <CardStyled disabled={!button} style={props.style} onPress={props.onPress}>
            {props.children}
        </CardStyled>

    )

}