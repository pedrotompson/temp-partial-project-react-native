import styled from 'styled-components/native';
import { PeColors, PeDefaults} from '../../components';

export const Container = styled.ScrollView.attrs((props) => ({
    contentContainerStyle: {
        justifyContent: 'space-between', 
        flex: 1
    }
}))`
     
`;

export const Content = styled.View`
   padding: ${PeDefaults.padding}px;
`;

export const ButtonSection = styled.View`
   
`;

export const LinkRecupereContaRow = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
   margin: 30px 0px 30px 0px;
`;