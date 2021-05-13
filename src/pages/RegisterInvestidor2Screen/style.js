import styled from 'styled-components/native';
import { PeColors, PeDefaults} from '../../components';


export const Content = styled.ScrollView.attrs((props) => ({
    contentContainerStyle: {
        padding: PeDefaults.padding
        
    }
}))`
     
`;

export const Container = styled.View`
    justify-content: space-between;
    flex: 1;
`;


export const ButtonSection = styled.View`
   
`;

export const LinkCrieContaRow = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin-bottom: 30px
`;