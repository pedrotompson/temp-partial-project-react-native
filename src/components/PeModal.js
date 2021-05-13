import React from 'react'
import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import PeColors from './PeColors';
import PeDefaults from './PeDefaults';
import PeText from './PeText';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';



export default function PeModal(props) {


    return (

        <Modal
            isVisible={props.visible}
            hasBackdrop={true}
            backdropOpacity={0.5}
            swipeDirection={props.noswipe ? [] : ['down']}
            onBackdropPress={props.handleCancel}
            onSwipeComplete={props.noswipe ? undefined : props.handleCancel}
            style={{ justifyContent: 'flex-end', margin: 0 }}
            propagateSwipe={true}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
        >


            <Content>

                <SafeAreaView>

                    <Header>

                        <View style={{ justifySelf: 'center', flex: 1, marginLeft: 30 }}>
                            <PeText h2 semibold center>{props.title}</PeText>
                        </View>
                        <BtnCancel onPress={props.handleCancel}>
                            <Ionicons name="close-outline" size={30} color={PeColors.textSecondary} />
                        </BtnCancel>

                    </Header>

                    <PeText center secondary style={{ height: props.subtitle ? 'auto' : 0 }}>{props.subtitle}</PeText>

                    <ChildrenContent>
                        {props.children}
                    </ChildrenContent>

                </SafeAreaView>

            </Content>

        </Modal>
    )

}



export const BtnCancel = styled.TouchableOpacity`
    padding: 5px;
`;

export const Content = styled.View`
    background-color: ${PeColors.backgroundSecondary};
    min-height: 130px;
    max-height: 80%;
`;

export const ChildrenContent = styled.View`
    padding: ${PeDefaults.padding}px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`;