
import React, { useLayoutEffect, useState } from 'react';
import { View, StatusBar, SafeAreaView, Alert, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { PeText, PeButton, PeInput, PeColors, PeSelect } from '../../components';
import * as Style from './style';


import { Formik } from 'formik';
import { validationSchema } from './validation';

import { Localizacao } from '../../services/data/localizacao';


export default function RegisterStartup2Screen({ route, navigation }) {

    const previousParams = route.params;

    const [listaCidades, setListaCidades] = useState([]);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [uf, setUf] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <PeText h2 light secondary mr4 >2/3</PeText>
            ),
        });
    }, [])


    const btnFormClick = (values) => {

        let currentParams = {
            ...previousParams,
            ...values,
            'latitude': latitude,
            'longitude': longitude,
            'uf': uf
        }

        navigation.navigate('RegisterStartup3', currentParams);
    };

    const estadoSelected = (setFieldValue, item) => {
        setFieldValue('estado', item.nome, false);
        setFieldValue('cidade', '', false);
        setListaCidades(Localizacao.cidades.filter(o => o.uf == item.sigla));
    }

    const cidadeSelected = (setFieldValue, item) => {
        setFieldValue('cidade', item.cidade, true);
        setLatitude(item.lat);
        setLongitude(item.lon);
        setUf(item.uf);
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            // contentContainerStyle={{ flex: 1}}
            keyboardVerticalOffset={60}
        >
            <Formik
                validationSchema={validationSchema}
                initialValues={{ nomeStartup: '', cnpj: '', valuation: '', cidade: '', estado: '' }}
                validateOnChange={true}
                onSubmit={values => btnFormClick(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, isValid, touched, dirty, actions }) => (


                    <Style.Container>
                        <Style.Content>
                            <PeText h2 secondary>Sobre a startup</PeText>
                            <PeText h2 semibold mb8>Informações da empresa</PeText>

                            <PeInput
                                mb2
                                label='Nome da Startup'
                                value={values.nomeStartup}
                                onChangeText={handleChange('nomeStartup')}
                                onBlur={handleBlur('nomeStartup')}
                                autoCapitalize='words'
                                autoCompleteType='off'
                                autoCorrect={true}
                                keyboardType='default'
                                returnKeyType='next'
                                textContentType='none'
                                enablesReturnKeyAutomatically
                                hintTextColor={PeColors.inputPlaceHolder}
                                errorMessage={errors.nomeStartup && touched.nomeStartup && errors.nomeStartup}
                            />

                            <PeInput
                                mb2
                                label='CNPJ'
                                value={values.cnpj}
                                onChangeText={handleChange('cnpj')}
                                onBlur={handleBlur('cnpj')}
                                autoCapitalize='none'
                                autoCompleteType='off'
                                autoCorrect={false}
                                keyboardType='number-pad'
                                returnKeyType='next'
                                textContentType='none'
                                enablesReturnKeyAutomatically
                                errorMessage={errors.cnpj && touched.cnpj && errors.cnpj}
                                mask="99.999.999/9999-99"
                                hint="00.000.000/0000-00"
                            />

                            <PeInput
                                mb2
                                label='Valuation (Última rodada)'
                                value={values.valuation}
                                onChangeText={handleChange('valuation')}
                                onBlur={handleBlur('valuation')}
                                autoCapitalize='none'
                                autoCompleteType='off'
                                autoCorrect={false}
                                keyboardType='numeric'
                                returnKeyType='next'
                                textContentType='none'
                                enablesReturnKeyAutomatically
                                errorMessage={errors.valuation && touched.valuation && errors.valuation}
                                maskType='currency'
                                currencyDivider='.'

                            />

                            <PeSelect
                                mb2
                                selectedText={values.estado}
                                emptyText={'Selecione o estado'}
                                modalTitle='Estado'
                                modalSubtitle='Selecione o estado da startup'
                                data={Localizacao.estados}
                                textField='nome'
                                handleSelect={(item) => estadoSelected(setFieldValue, item)}
                                errorMessage={errors.estado && touched.estado && errors.estado}
                            />

                            <PeSelect
                                disabled={values.estado == ''}
                                selectedText={values.cidade}
                                emptyText={'Selecione a cidade'}
                                modalTitle='Cidade'
                                modalSubtitle='Selecione a cidade da startup'
                                data={listaCidades}
                                textField='cidade'
                                handleSelect={(item) => { cidadeSelected(setFieldValue,item)}}
                                errorMessage={errors.cidade && touched.cidade && errors.cidade}
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