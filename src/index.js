import React, { useCallback, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useFonts } from 'expo-font';
import { setGlobalStyles } from 'react-native-floating-label-input';
import { PeColors } from './components';
import AppLoading from 'expo-app-loading';


import Routes from './pages/routes';

function App() {



    let [fontsLoaded] = useFonts({
        OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
        OpenSans_SemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
        OpenSans_Bold: require('./assets/fonts/OpenSans-Bold.ttf'),
        OpenSans_Light: require('./assets/fonts/OpenSans-Light.ttf'),
    });

    //Define as cores padrão dos inputs
    setGlobalStyles.containerStyles = {
        backgroundColor: PeColors.inputBackground,
        padding: 10,
        borderRadius: 8,
    };
    setGlobalStyles.labelStyles = {
        paddingLeft: 0,
        marginLeft: -5
    };
    setGlobalStyles.inputStyles = {
        color: PeColors.inputText,
        paddingHorizontal: 0,
        paddingBottom: 0,
        paddingTop: 15,
    };
    setGlobalStyles.customLabelStyles = {
        colorFocused: PeColors.inputLabel,
        fontSizeFocused: 12,
        margin: 50
    }




    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        //Renderiza as telas da aplicação
        return (
            <View
                
                style={{ flex: 1, backgroundColor: PeColors.backgroundPrimary }}>

                <Routes />
            </View>
        );
    }
};

export default App;