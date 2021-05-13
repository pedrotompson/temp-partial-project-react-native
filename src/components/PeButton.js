import React from 'react';
import { SafeAreaView } from "react-native";
import styled from 'styled-components/native';
import  PeColors  from './PeColors';
import  PeText from './PeText';
import {setMarginTop, setMarginRight, setMarginBottom, setMarginLeft} from './PeDefaults';
//import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function PeButton(props) {

    //Declarando os valores padrão
    let paddingVertical = 12;
    let backgroundColor = props.disabled ? PeColors.buttonPrimaryDisabled : PeColors.buttonPrimary;
    let borderStyle = 'solid';
    let borderWidth = 0;
    let borderColor = props.disabled ? PeColors.buttonPrimaryDisabled : PeColors.buttonPrimary;
    let textColor = props.disabled ? PeColors.textButtonPrimaryDisabled : PeColors.textButtonPrimary;
    let boxed = false;
    let safearea = (props.safearea || props.SafeArea || props.Safearea);

    //Calculando valores de acordo com o parâmetro
    if (props.outlined) {
        backgroundColor = 'transparent';
        borderStyle = 'solid';
        borderWidth = 1;
        borderColor = props.disabled ? PeColors.buttonOutlinedDisabled : PeColors.buttonOutlined;
        textColor = props.disabled ? PeColors.textButtonOutlinedDisabled : PeColors.textButtonOutlined;
    } else if (props.link) {
        backgroundColor = 'transparent';
        textColor = props.disabled ? PeColors.textButtonOutlinedDisabled : (props.light ? PeColors.textParagraph : PeColors.textButtonOutlined);
    }

    if (props.big) {
        paddingVertical = 20;
    } else if (props.small) {
        paddingVertical = 10;
    }

    if (props.boxed || props.Boxed) {
        boxed = true;
    }

    if (props.nopadding || props.noPadding || props.NoPadding) {
        paddingVertical = 0;
    }

    //Definindo o styled component de acordo com os valores calculados
    const ButtonStyled = styled.TouchableOpacity`
        padding: ${paddingVertical}px ${paddingVertical == 0? 0 : 15}px;
        background-color: ${backgroundColor};
        border-style: ${borderStyle};
        border-width: ${borderWidth}px;
        border-color: ${borderColor};
        border-radius: ${props.radius ? 100 : (props.noradius ? 0 : 5)}px;
        align-items: center;
        width: ${boxed ? '100%' : 'auto'};
        min-height: ${safearea ? 77: 0}px;
        margin: ${setMarginTop(props,0)}px ${setMarginLeft(props,0)}px ${setMarginBottom(props,0)}px ${setMarginRight(props,0)}px;
    `;
    
    
    //Criando o componente
    if (safearea) {
        return ( 
            <ButtonStyled disabled={props.disabled} onPress={props.onPress}>
                <SafeAreaView>
                    <PeText button numberOfLines={1} customColor={textColor} >{props.children}</PeText>
                </SafeAreaView>
            </ButtonStyled>
            
        )
    } else {
        return ( 
            <ButtonStyled disabled={props.disabled} onPress={props.onPress}>
                <PeText button numberOfLines={1} customColor={textColor} >{props.children}</PeText>
            </ButtonStyled>
            
        )
    }
}