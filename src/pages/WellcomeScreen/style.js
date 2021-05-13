import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { PeColors} from '../../components';

export const Content = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding: 30px;
`;

export const SeparatorContainer = styled.View`
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
`;

export const BackgroundContainer = styled.ImageBackground`
    flex: 1;
    resize-mode: cover;
    justify-content: center;
`;

export const GradientContainer = styled(LinearGradient)`
    flex: 1;
`;

export const LogoIcon = styled.Image`
    width:110px;
    height: 110px;
    align-self: center;
`;

export const ButtonsRegisterBox = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding: 20px 0px 10px 0px;
`;