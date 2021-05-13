
import React, { useLayoutEffect, useState } from 'react';
import { View, StatusBar, SafeAreaView, Alert, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { PeText, PeButton, PeInput, PeColors, PeSelect, PePreloadFull } from '../../components';
import * as Style from './style';


import { Formik } from 'formik';
import { validationSchema } from './validation';


export default function RegisterStartup3Screen({ route, navigation }) {

    const previousParams = route.params;

    const [PreloadVisible, setPreloadVisible] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <PeText h2 light secondary mr4 >3/3</PeText>
            ),
        });
    }, [])


    const btnFormClick = (values) => {

        let currentParams = {
            ...previousParams,
            ...values,
        }

        setPreloadVisible(true);
    };


    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            // contentContainerStyle={{ flex: 1}}
            keyboardVerticalOffset={60}
        >

            <PePreloadFull visible={PreloadVisible} text='Cadastrando startup...' />

            <Formik
                validationSchema={validationSchema}
                initialValues={{ nomeResponsavel: '', sobrenomeResponsavel: '', cpf: '', dataNascimento: '', telefone: '' }}
                validateOnChange={true}
                onSubmit={values => btnFormClick(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, isValid, touched, dirty }) => (


                    <Style.Container>
                        <Style.Content>
                            <PeText h2 secondary>Para finalizar!</PeText>
                            <PeText h2 semibold mb8>Responsável pela startup</PeText>

                            <PeInput
                                mb2
                                label='Nome'
                                value={values.nomeResponsavel}
                                onChangeText={handleChange('nomeResponsavel')}
                                onBlur={handleBlur('nomeResponsavel')}
                                autoCapitalize='words'
                                autoCompleteType='name'
                                autoCorrect={true}
                                keyboardType='default'
                                returnKeyType='next'
                                textContentType='givenName'
                                enablesReturnKeyAutomatically
                                hintTextColor={PeColors.inputPlaceHolder}
                                errorMessage={errors.nomeResponsavel && touched.nomeResponsavel && errors.nomeResponsavel}
                            />

                            <PeInput
                                mb2
                                label='Sobrenome'
                                value={values.sobrenomeResponsavel}
                                onChangeText={handleChange('sobrenomeResponsavel')}
                                onBlur={handleBlur('sobrenomeResponsavel')}
                                autoCapitalize='words'
                                autoCompleteType='name'
                                autoCorrect={true}
                                keyboardType='default'
                                returnKeyType='next'
                                textContentType='familyName'
                                enablesReturnKeyAutomatically
                                errorMessage={errors.sobrenomeResponsavel && touched.sobrenomeResponsavel && errors.sobrenomeResponsavel}
                            />

                            <PeInput
                                mb2
                                label='CPF'
                                value={values.cpf}
                                onChangeText={handleChange('cpf')}
                                onBlur={handleBlur('cpf')}
                                autoCapitalize='none'
                                autoCompleteType='password'
                                autoCorrect={false}
                                keyboardType='number-pad'
                                returnKeyType='next'
                                textContentType='none'
                                enablesReturnKeyAutomatically
                                errorMessage={errors.cpf && touched.cpf && errors.cpf}
                                mask="99999999999"
                                hint="98078756765"
                            />


                            <PeInput
                                mb2
                                label='Data de nascimento'
                                value={values.dataNascimento}
                                onChangeText={handleChange('dataNascimento')}
                                onBlur={handleBlur('dataNascimento')}
                                autoCapitalize='none'
                                autoCompleteType='off'
                                autoCorrect={false}
                                keyboardType='number-pad'
                                returnKeyType='next'
                                textContentType='none'
                                enablesReturnKeyAutomatically
                                errorMessage={errors.dataNascimento && touched.dataNascimento && errors.dataNascimento}
                                maskType='date'
                                mask='99/99/9999'
                                hint="01/01/1900"
                            />

                            <PeInput
                                mb2
                                label='Telefone celular'
                                value={values.telefone}
                                onChangeText={handleChange('telefone')}
                                onBlur={handleBlur('telefone')}
                                autoCapitalize='none'
                                autoCompleteType='tel'
                                autoCorrect={false}
                                keyboardType='number-pad'
                                returnKeyType='go'
                                textContentType='telephoneNumber'
                                enablesReturnKeyAutomatically
                                errorMessage={errors.telefone && touched.telefone && errors.telefone}
                                mask='(99) 99999-9999'
                                hint="(11) 99999-9999"
                            />

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