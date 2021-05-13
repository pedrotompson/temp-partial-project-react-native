
import React, { useLayoutEffect, useState, useRef } from 'react';
import { View, StatusBar, SafeAreaView, Alert, KeyboardAvoidingView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { PeText, PeButton, PeInput, PeColors, PeModal, PePreloadFull, PeLine } from '../../components';
import * as Style from './style';


export default function RegisterInvestidor4Screen({ route, navigation }) {

    const previousParams = route.params;

    const inputRef = useRef(null);
    const [PreloadVisible, setModalPreloadVisible] = useState(false);
    const [items, setItems] = useState(route.params.startups);
    const [isValid, setIsValid] = useState(false);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <PeText h2 light secondary mr4 >4/4</PeText>
            ),
        });
    }, [])


    const btnFormClick = () => {

        let currentParams = {
            ...previousParams,
            ...{ startupsWithValue: items },
        }

        setModalPreloadVisible(true);

    };

    const setValueOfItem = (item, value) => {


        let itemsAux = [...items];
        //let itemsAux = [{'key':'0', 'nome':'OPA OPA', 'valor':'350'}];
        let index = itemsAux.findIndex((o => o.key == item.key));
        itemsAux[index].valor = value;

        setItems(itemsAux);

    };


    const renderItem = ({ item, index }) => (
        <Style.StartupItem>
            <PeText>{item.nome}</PeText>
            <Style.ValueContainer>
                <PeInput
                    label='R$'
                    value={item.valor}
                    onChangeText={(value) => { setValueOfItem(item, value) }}
                    autoCapitalize='none'
                    autoCompleteType='off'
                    autoCorrect={false}
                    keyboardType='numeric'
                    returnKeyType='Ok'
                    textContentType='none'
                    maskType='currency'
                    currencyDivider='.'
                />
            </Style.ValueContainer>
        </Style.StartupItem>
    );


    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            // contentContainerStyle={{ flex: 1}}
            keyboardVerticalOffset={60}
        >


            <PePreloadFull visible={PreloadVisible} text='Cadastrando...' />


            <Style.Container>
                <Style.Content>


                    <PeText h2 secondary>Para finalizar!</PeText>
                    <PeText h2 semibold mb2>Informe os investimentos</PeText>

                    <PeText mb6>Informe quanto já investiu em cada uma das startups.</PeText>

                    <FlatList
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={item => item.key}
                        ItemSeparatorComponent={() => <PeLine />}
                        style={{ marginVertical: 20 }}
                    />

                </Style.Content>


                <Style.ButtonSection>

                    <PeButton noradius safearea disabled={items.length == 0} onPress={btnFormClick}>
                        Concluir
                    </PeButton>

                </Style.ButtonSection>
            </Style.Container>



        </KeyboardAvoidingView>
    );
}