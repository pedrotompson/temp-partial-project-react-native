
import React, { useLayoutEffect, useRef } from 'react';
import { View, StatusBar, SafeAreaView, Alert, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { PeText, PeButton, PeInput, PeColors } from '../../components';
import * as Style from './style';


import { Formik } from 'formik';
import { validationSchema } from './validation';




export default function RegisterStartup1Screen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <PeText h2 light secondary mr4 >1/3</PeText>
            ),
        });
    }, [])


    const btnFormClick = (values) => {

        navigation.navigate('RegisterStartup2', values);
    };

    const btnLoginClick = () => {
        navigation.navigate('Wellcome');
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
                initialValues={{ email: '', senha: '', senhaRepete: '' }}
                validateOnChange={true}
                onSubmit={values => btnFormClick(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched, dirty }) => (


                    <Style.Container>
                        <Style.Content>
                            <View>
                                <PeText h2 secondary>Olá, startup.</PeText>
                                <PeText h2 semibold mb8>Crie uma nova conta</PeText>


                                <PeInput
                                    mb2
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
                                    enablesReturnKeyAutomatically
                                    hintTextColor={PeColors.inputPlaceHolder}
                                    errorMessage={errors.email && touched.email && errors.email}
                                />

                                <PeInput
                                    mb2
                                    label='Senha'
                                    isPassword
                                    value={values.senha}
                                    onChangeText={handleChange('senha')}
                                    onBlur={handleBlur('senha')}
                                    autoCapitalize='none'
                                    autoCompleteType='password'
                                    autoCorrect={false}
                                    keyboardType='default'
                                    returnKeyType='next'
                                    textContentType='newPassword'
                                    enablesReturnKeyAutomatically
                                    errorMessage={errors.senha && touched.senha && errors.senha}
                                />

                                <PeInput
                                    mb2
                                    label='Repita a senha'
                                    isPassword
                                    value={values.senhaRepete}
                                    onChangeText={handleChange('senhaRepete')}
                                    onBlur={handleBlur('senhaRepete')}
                                    autoCapitalize='none'
                                    autoCompleteType='password'
                                    autoCorrect={false}
                                    keyboardType='default'
                                    returnKeyType='go'
                                    textContentType='newPassword'
                                    enablesReturnKeyAutomatically
                                    errorMessage={errors.senhaRepete && touched.senhaRepete && errors.senhaRepete}

                                />
                            </View>
                            <Style.LinkCrieContaRow>
                                <PeText>Ja tem uma conta? </PeText>
                                <PeButton link nopadding onPress={btnLoginClick}>Faça o login</PeButton>
                                <PeText>.</PeText>
                            </Style.LinkCrieContaRow>

                        </Style.Content>

                        <Style.ButtonSection>



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