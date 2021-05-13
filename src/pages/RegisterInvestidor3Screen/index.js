
import React, { useLayoutEffect, useState, useRef } from 'react';
import { View, StatusBar, SafeAreaView, Alert, KeyboardAvoidingView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { PeText, PeButton, PeInput, PeColors, PeModal, PePreloadFull, PeLine } from '../../components';
import * as Style from './style';


export default function RegisterInvestidor3Screen({ route, navigation }) {

    const previousParams = route.params;

    const inputRef = useRef(null);
    const [PreloadVisible, setModalPreloadVisible] = useState(false);
    const [pularVisible, setModalPularVisible] = useState(false);
    const [txtNomeStartup, setTxtNomeStartup] = useState('');
    const [indexItems, setCountItems] = useState(0);
    const [items, setItems] = useState([]);
    const [isValid, setIsValid] = useState(false);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <PeText h2 light secondary mr4 >3/4</PeText>
            ),
        });
    }, [])


    const btnFormClick = () => {

        let currentParams = {
            ...previousParams,
            ...{startups: items},
        }
        
        navigation.navigate('RegisterInvestidor4',currentParams)
    };

    const btnAddClick = () => {

        if (txtNomeStartup.trim() == '') {
            Alert.alert('Preencha o campo', 'Informe de uma startup antes de incluí-la em sua lista.');
            setTxtNomeStartup('');
            return;
        }

        let currentItems = [
            ...items,
            ...[{ 'key': indexItems.toString(), 'nome': txtNomeStartup, 'valor': '' }]
        ]

        setCountItems(indexItems + 1);
        setItems(currentItems);
        setTxtNomeStartup('');

        inputRef.current?.focus();
    };

    const btnRemoveClick = (item) => {

        setItems(items.filter(o => o.key != item.key));

    };


    const cancelRegisterModal = () => {
        setModalPularVisible(false);
    };

    const pularECadastrarClick = () => {
        //setModalPularVisible(false);

        setModalPreloadVisible(true); 
        
    }

    const renderItem = ({ item }) => (
        <Style.StartupItem>
            <PeText>{item.nome}</PeText>
            <PeButton link onPress={() => btnRemoveClick(item)}>
            <Ionicons name="ios-remove-circle" size={24} color={PeColors.textError} />
            </PeButton>
        </Style.StartupItem>
    );


    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            // contentContainerStyle={{ flex: 1}}
            keyboardVerticalOffset={60}
        >

            

            <PeModal visible={pularVisible} handleCancel={cancelRegisterModal}>
                <PeText h2 light center>Que tal continuar informando seus investimentos?</PeText>
                <PeText center mt3 secondary>É importanque que você informe seus investimentos para que possamos atendê-lo melhor.{'\n\n'}Que tal continuar informando os investimentos?</PeText>
                <PeButton mt3 onPress={cancelRegisterModal}>Continuar informando</PeButton>
                <PeButton mt3 outlined lighr onPress={pularECadastrarClick}>Pular e me cadastrar agora</PeButton>

                <PePreloadFull visible={PreloadVisible} text='Cadastrando...' />

            </PeModal>

            




            <Style.Container>
                <Style.Content>

                    <View>
                        <PeText h2 secondary>Quase lá!</PeText>
                        <PeText h2 semibold mb2>Informe as startups</PeText>

                        <PeText mb6>Informe as startups que está investindo para que possamos dirigir o conteúdo adequadamente.</PeText>

                        <Style.ContainerField>
                            <View style={{ flex: 1 }}>
                                <PeInput
                                    passRef={inputRef}
                                    noradius
                                    label='Nome da startup'
                                    value={txtNomeStartup}
                                    onChangeText={(value) => setTxtNomeStartup(value)}
                                    autoCapitalize='words'
                                    autoCompleteType='off'
                                    autoCorrect={true}
                                    keyboardType='default'
                                    returnKeyType='done'
                                    textContentType='none'
                                    enablesReturnKeyAutomatically
                                    hintTextColor={PeColors.inputPlaceHolder}
                                    onSubmitEditing={btnAddClick}
                                />
                            </View>

                            <PeButton noradius >
                                <Ionicons name="add" size={28} color="white" onPress={btnAddClick} />
                            </PeButton>

                        </Style.ContainerField>

                        <FlatList
                            data={items}
                            renderItem={renderItem}
                            keyExtractor={item => item.key}
                            ItemSeparatorComponent={() => <PeLine />}
                            style={{ marginVertical: 20 }}
                        />
                    </View>
                    <View>
                        <PeButton link nopadding onPress={() => setModalPularVisible(true)}>Pular esta etapa</PeButton>
                    </View>

                </Style.Content>


                <Style.ButtonSection>

                    <PeButton noradius safearea disabled={items.length == 0} onPress={btnFormClick}>
                        Próximo
                    </PeButton>

                </Style.ButtonSection>
            </Style.Container>



        </KeyboardAvoidingView>
    );
}