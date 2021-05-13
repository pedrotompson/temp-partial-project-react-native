
import React, { useState, useEffect } from 'react';
import { View, StatusBar, SafeAreaView, Alert, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { FloatingLabelInput } from 'react-native-floating-label-input';

import { PeText, PeButton, PeLine, PeModal, PeColors, PePreloadFull, PeInput } from '../../components';
import * as Style from './style';

import { Formik } from 'formik';
import { validationSchema } from './validation';


export default function LoginSenhaScreen({ route, navigation }) {

    const { email } = route.params;

    const [IsVisibleRecuperarSenha, setIsVisibleRecuperarSenha] = useState(false);
    const [PreloadVisible, setPreloadVisible] = useState(false);

    const btnFormClick = (values) => {
        setPreloadVisible(true);
    };


    const cancelModal = () => {
        setIsVisibleRecuperarSenha(false);
    };

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            // contentContainerStyle={{ flex: 1}}
            keyboardVerticalOffset={60}
        >
            <PePreloadFull visible={PreloadVisible} text='Entrando...' />

            <PeModal visible={IsVisibleRecuperarSenha} handleCancel={cancelModal}>
                <PeText h2 center mb5 primary normal>Verifique seu e-mail</PeText>
                <PeLine />
                <PeText center mt5>Enviamos para o seu e-mail as instruções para recuperação de sua senha.</PeText>
                <PeButton mt8 onPress={cancelModal}>Ok</PeButton>

            </PeModal>

            <Formik
                validationSchema={validationSchema}
                initialValues={{ password: '' }}
                validateOnChange={true}
                onSubmit={values => btnFormClick(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched, dirty }) => (

                    <Style.Container>

                        <Style.Content>
                            <PeText h2 secondary>Para acessar</PeText>
                            <PeText h2 semibold mb7>digite sua senha</PeText>

                            <PeText mb3 big>{email}</PeText>

                            <PeInput
                                inline
                                autoFocus
                                label='Senha'
                                isPassword
                                value={values.senha}
                                onChangeText={handleChange('senha')}
                                onBlur={handleBlur('senha')}
                                autoCapitalize='none'
                                autoCompleteType='password'
                                autoCorrect={false}
                                keyboardType='default'
                                returnKeyType='go'
                                textContentType='newPassword'
                                enablesReturnKeyAutomatically
                                
                            />

                            <PeText mt1 error small >{errors.senha && touched.senha && errors.senha }</PeText>

                            <Style.LinkRecupereContaRow>
                                <PeText>Esqueceu sua senha? </PeText>
                                <PeButton link nopadding onPress={() => { setIsVisibleRecuperarSenha(true) }}>Recupere agora</PeButton>
                                <PeText>.</PeText>
                            </Style.LinkRecupereContaRow>

                        </Style.Content>

                        <Style.ButtonSection>

                            <PeButton noradius safearea disabled={!(isValid && dirty)} onPress={handleSubmit}>
                                Entrar
                            </PeButton>

                        </Style.ButtonSection>



                    </Style.Container>

                )}
            </Formik>

        </KeyboardAvoidingView>
    );
}