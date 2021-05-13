import React from 'react'
import { View, SafeAreaView, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import PeColors from './PeColors';
import PeDefaults from './PeDefaults';
import PeText from './PeText';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';



export default function PePreloadFull(props) {

    return (

        <Modal

            isVisible={props.visible}
            hasBackdrop={true}
            backdropOpacity={0.5}
            style={{ justifyContent: 'center', margin: 0 }}
            animationIn="zoomIn"
            animationOut="zoomOut"
            animationInTiming={600}
            animationOutTiming={600}
        >


            <Content>
                <ActivityIndicator size="large" color={PeColors.accentPrimary} />
                <PeText center mt3 small>{props.text ? props.text : 'Carregando...'}</PeText>
            </Content>

        </Modal>
    )

}



export const BtnCancel = styled.TouchableOpacity`
    padding: 5px;
`;

export const Content = styled.View`
`;

export const ChildrenContent = styled.View`
    padding: ${PeDefaults.padding}px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`;