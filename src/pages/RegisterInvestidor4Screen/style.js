import styled from 'styled-components/native';
import { PeColors, PeDefaults } from '../../components';


export const Content = styled.ScrollView.attrs((props) => ({
    contentContainerStyle: {
        padding: PeDefaults.padding,
        flex: 1,

    }
}))` 
     
`;

export const Container = styled.View`
    justify-content: space-between;
    flex: 1;
`; 

export const ContainerField = styled.View`
    flex-direction: row;
    
    align-items: stretch;
    justify-content: flex-start;
    border-radius:8px;
    overflow: hidden;
    
    width: 100%;
`;


export const ButtonSection = styled.View` 
   
`;

export const LinkCrieContaRow = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin-bottom: 30px;
`;

export const StartupItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding: 7px 0px;
`;

export const ValueContainer = styled.View`
    width: 100px;
`;