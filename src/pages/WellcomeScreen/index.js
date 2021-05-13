
import React, { useState, useEffect } from 'react';
import { View, StatusBar, SafeAreaView, Alert } from 'react-native';
import { MaterialIcons, Ionicons  } from '@expo/vector-icons';
import { PeText, PeButton, PeLine, PeSpace, PeModal, PeCard, PeColors } from '../../components';
import {
    Content, GradientContainer, SeparatorContainer, BackgroundContainer, LogoIcon,
    ButtonsRegisterBox, CardIconBox
} from './style';

export default function WellcomeScreen({ route, navigation }) {

    const [IsVisible, setModalIsVisible] = useState(false);

    let pRegister = false;
    let pTime;
    pRegister = route.params?.register;   
    pTime = route.params?.time;   

    useEffect(() => {
        if (pRegister) {
            setModalIsVisible(true);
        }
    }, [pRegister,pTime])
    

    const cancelRegisterModal = () => {
        setModalIsVisible(false);
    };

    return (

        <BackgroundContainer source={require("../../assets/img/wellcome.jpg")}>

            <PeModal visible={IsVisible} handleCancel={cancelRegisterModal} title='Cadastre-se' subtitle='Qual perfil é compatível com você?'>
                <ButtonsRegisterBox>
                    <PeCard button left style={{ width: 150 }} onPress={() => { setModalIsVisible(false); navigation.navigate('RegisterInvestidor1') }}>
                        <PeCard muted>
                            <MaterialIcons name="insert-chart" size={30} color={PeColors.accentTerciary} />
                        </PeCard>

                        <PeText h2 small mt2>Sou investidor</PeText>
                        <PeText secondary>Acompanhe indicadores e notícias de suas startups</PeText>
                    </PeCard>

                    <PeCard button left style={{ width: 150 }} mr2 onPress={() => { setModalIsVisible(false);  navigation.navigate('RegisterStartup1');}}> 
                        <PeCard muted>
                            <Ionicons name="ios-business" size={30} color={PeColors.accentPrimary} />
                        </PeCard>

                        <PeText h2 small mt2>Sou startup</PeText>
                        <PeText secondary>Esteja presente no hub de investimentos</PeText>
                    </PeCard>
                </ButtonsRegisterBox>
            </PeModal>

            <GradientContainer colors={['#040D3033', '#050934ff']}>

                <Content>

                    <StatusBar barStyle="light-content" translucent={true} />

                    <SafeAreaView>
                        <LogoIcon source={require("../../assets/img/icon.png")} />
                        <PeText h1 center mt2 mb3>Equitree</PeText>
                        <PeText center mb8>Seu hub de informações atualizadas de seus investimentos em startups</PeText>

                        <PeButton mb5 onPress={() => navigation.navigate('LoginEmail')}>ENTRAR</PeButton>

                        <SeparatorContainer>
                            <View style={{ flex: 1}}>
                                <PeLine />
                            </View>
                            <PeSpace space3 horizontal />
                            <PeText secondary small >OU</PeText>
                            <PeSpace space3 horizontal />
                            <View style={{ flex: 1 }}>
                                <PeLine />
                            </View>
                        </SeparatorContainer>

                        <PeButton mt2 link light onPress={() => { setModalIsVisible(true) }}>CADASTRE-SE AGORA</PeButton>

                    </SafeAreaView>

                </Content>
            </GradientContainer>
        </BackgroundContainer>

    );
}