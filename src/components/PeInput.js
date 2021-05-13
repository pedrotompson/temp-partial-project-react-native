import React from 'react';
import { View } from "react-native";
import styled from 'styled-components/native';
import PeColors from './PeColors';
import PeText from './PeText';
import { setMarginTop, setMarginRight, setMarginBottom, setMarginLeft } from './PeDefaults';
import { FloatingLabelInput } from 'react-native-floating-label-input';

export default function PeInput(props) {

    
    //Criando o componente
    if (props.inline) {
        return (
            <View style={{marginTop: setMarginTop(props,0), marginRight: setMarginRight(props,0), marginBottom: setMarginBottom(props,0), marginLeft: setMarginLeft(props,0)}}>

                <FloatingLabelInput
                    ref={props.passRef}
                    fontSize="25"
                    hintTextColor={PeColors.inputPlaceHolder}
                    {...props}
                    containerStyles={{
                        backgroundColor: 'transparent',
                        padding: 0,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderRadius: 0,
                        borderStyle: 'solid',
                        borderBottomWidth: 1,
                        borderColor: PeColors.inputLabel

                    }}
                    inputStyles={{
                        color: PeColors.inputText,
                        paddingHorizontal: 0,
                        paddingBottom: 0,
                        paddingTop: 15
                    }}
                    customShowPasswordComponent={props.isPassword && <View style={{ flex: 1, justifyContent: 'center' }}><PeText muted tagline small>Mostrar</PeText></View>}
                    customHidePasswordComponent={props.isPassword && <View style={{ flex: 1, justifyContent: 'center' }}><PeText muted tagline small>Esconder</PeText></View>}
                // customLabelStyles={{
                //     colorFocused: PeColors.inputLabel,
                //     fontSizeFocused: 12,
                //     marginLeft: -50,
                // }}
                // labelStyles={{
                //     paddingLeft: 0,
                //     marginLeft: -5,
                //     color: PeColors.inputLabel,
                //     paddingTop:10
                // }}
                />
                {props.errorMessage &&
                    <PeText mt1 error small >{props.errorMessage}</PeText>
                }
            </View>
        )
    } else {
        return (
            <View style={{marginTop: setMarginTop(props,0), marginRight: setMarginRight(props,0), marginBottom: setMarginBottom(props,0), marginLeft: setMarginLeft(props,0)}}>
                <FloatingLabelInput
                    ref={props.passRef}
                    hintTextColor={PeColors.inputPlaceHolder}
                    customShowPasswordComponent={props.isPassword && <PeText muted tagline small>Mostrar</PeText>}
                    customHidePasswordComponent={props.isPassword && <PeText muted tagline small>Esconder</PeText>}
                    {...props}
                    containerStyles={{
                        backgroundColor: props.disabled ? PeColors.inputBackgroundDisabled : PeColors.inputBackground,
                        padding: 10,
                        borderRadius: props.noradius?0:8,
                    }}
                />
                {props.errorMessage &&
                    <PeText mt1 error small >{props.errorMessage}</PeText>
                }
            </View>
        )
    }
}



