
import React, { useState, useEffect } from 'react';
import { View, StatusBar, SafeAreaView, Alert, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { PeText, PeButton, PeInput, PeColors } from '../../components';
import * as Style from './style';

import { Formik } from 'formik';
import { validationSchema } from './validation';



export default function LoginEmailScreen({ navigation }) {

    const btnFormClick = (values) => {
        navigation.navigate('LoginSenha', { email: values.email });
    };

    const btnCriarConta = () => {
        navigation.navigate('Wellcome', {
            register: true,
            time: Date.now()
        }
        );
    };



    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            // contentContainerStyle={{ flex: 1}}
            keyboardVerticalOffset={60}
        >
            <Formik
                validationSchema={validationSchema}
                initialValues={{ email: '' }}
                validateOnChange={true}
                onSubmit={values => btnFormClick(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched, dirty }) => (

                    <Style.Container>
                        <Style.Content>
                            <PeText h2 secondary>Para acessar</PeText>
                            <PeText h2 semibold mb8>digite seu e-mail</PeText>



                            <PeInput
                                inline
                                label='E-mail'
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                hint="seunome@dominio.com"
                                autoCapitalize='none'
                                autoCompleteType='username'
                                autoCorrect={false}
                                keyboardType='email-address'
                                returnKeyType='next'
                                textContentType='emailAddress'
                                autoFocus
                                
                                hintTextColor={PeColors.inputPlaceHolder}
                                errorMessage={errors.email && touched.email && errors.email}
                            />

                        </Style.Content>

                        <Style.ButtonSection>

                            <Style.LinkCrieContaRow>
                                <PeText>Ainda não tem uma conta? </PeText>
                                <PeButton link nopadding onPress={btnCriarConta}>Crie agora</PeButton>
                                <PeText>.</PeText>
                            </Style.LinkCrieContaRow>

                            <PeButton noradius safearea disabled={!(isValid && dirty)} onPress={handleSubmit}>
                                Próximo
                            </PeButton>

                        </Style.ButtonSection>
                    </Style.Container>

                )}
            </Formik>

        </KeyboardAvoidingView>
    );
}