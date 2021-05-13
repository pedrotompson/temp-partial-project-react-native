import React from 'react'
import styled from 'styled-components/native';
import PeColors from './PeColors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {setMarginTop, setMarginRight, setMarginBottom, setMarginLeft} from './PeDefaults';

export default function PeText(props) {

    //Declarando os valores padrão
    let size = 27;
    let color = PeColors.textParagraph;
    let textTransform = 'none';
    let fontFamily = 'OpenSans';
    let align = 'left';

    //Calculando valores de acordo com o parâmetro
    if (props.h1) {
        size = 70;
        color = PeColors.textPrimary;
        fontFamily = 'OpenSans_SemiBold';
    } else if (props.h2) {
        size = 50;
        color = PeColors.textPrimary;
        fontFamily = 'OpenSans_Light';
    } else if (props.tagline) {
        color = PeColors.textMuted;
        textTransform = 'uppercase';
    } else if (props.button) {
        color = PeColors.textPrimary;
        fontFamily = 'OpenSans_SemiBold';
    }

    

    //Funções
    const setColor = (props, defaultColor) => {
        if (props.customColor) {
            return props.customColor;
        }else if (props.muted || props.Muted) {
            return PeColors.textMuted;
        }else if (props.primary || props.Primary) {
            return PeColors.textPrimary;
        }else if (props.secondary || props.Secondary) {
            return PeColors.textSecondary;
        }else if (props.button || props.Button) {
            return PeColors.textButtonPrimary;
        }else if (props.error || props.Error) {
            return PeColors.textError;
        }else if (defaultColor) {
            return defaultColor;
        }else {
            return PeColors.textPrimary;
        }
    }

    const setFont = (props, defaultFont) => {
        if (props.light || props.Light) {
            return 'OpenSans_Light';
        }else if (props.normal || props.Normal) {
            return 'OpenSans';
        }else if (props.semibold || props.Semibold) {
            return 'OpenSans_SemiBold';
        }else if (props.bold || props.Bold) {
            return 'OpenSans_Bold';
        }else if (defaultFont) {
            return defaultFont;
        }else {
            return 'OpenSans_Regular';
        }
    }

    const setAlign = (props, defaultAlign) => {
        if (props.center || props.Center) {
            return 'center';
        }else if (props.right || props.Right) {
            return 'right';
        }else if (props.left || props.Left) {
            return 'left';
        }else if (defaultAlign) {
            return defaultAlign;
        }else {
            return 'left';
        }
    }

    //Calcular o aumento e diminuição proporcional da fonte
    let resize = props.small ? 0.85 : (props.big ? 1.15 : 1);

    //Definindo o styled component de acordo com os valores calculados
    const TextStyled = styled.Text `
        /* font-size: ${RFValue(size/1.9)}px;  */
        font-size: ${(size * resize)/1.9}px; 
        color: ${setColor(props,color)};
        text-transform: ${textTransform};
        font-family: ${setFont(props,fontFamily)};
        text-align: ${setAlign(props, align)};
        margin: ${setMarginTop(props,0)}px ${setMarginRight(props,0)}px ${setMarginBottom(props,0)}px ${setMarginLeft(props,0)}px;
    `;
    //TODO Observar problema na exibição do tamanho

    //Criando o componente
    return ( 
        <TextStyled numberOfLines={props.numberOfLines} {...props}>{props.children}</TextStyled>
    )
}