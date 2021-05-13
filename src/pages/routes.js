import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, useNavigationState } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import { PeColors, PeButton, PeText } from '../components';
import * as Wellcome from './WellcomeScreen/style';

import * as Pages from '../pages';

const MainStack = createStackNavigator();
const BottomTabStack = createBottomTabNavigator();
const TopTabStack = createMaterialTopTabNavigator();

// const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//         ...DefaultTheme.colors,
//         background: PeColors.backgroundPrimary,
//         card: PeColors.backgroundPrimary,
//         border: PeColors.backgroundPrimary,
//         primary: PeColors.accentPrimary,
//         text: PeColors.textPrimary,
//     },
// };


const MyTheme = {
    dark: false,
    colors: {
        primary: PeColors.accentPrimary,
        background: PeColors.backgroundPrimary,
        card: PeColors.backgroundPrimary,
        text: PeColors.textPrimary,
        border: PeColors.backgroundPrimary,
        notification: PeColors.accentPrimary,
    },
};


const DefaultScreenOptions = {
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerBackImage: ({ tintColor }) => (
        <SimpleLineIcons name="arrow-left" size={25} color={PeColors.accentPrimary} style={{ paddingLeft: 10 }} />
    ),
}



export default function Routes() {



    return <NavigationContainer theme={MyTheme}>
        <MainStack.Navigator screenOptions={DefaultScreenOptions}>
            <MainStack.Screen name='Wellcome' component={Pages.WellcomeScreen} options={{ headerShown: false, }} />
            <MainStack.Screen name='LoginEmail' component={Pages.LoginEmailScreen} options={{ headerShown: true, title: false }} />
            <MainStack.Screen name='LoginSenha' component={Pages.LoginSenhaScreen} options={{ headerShown: true, title: false }} />
            <MainStack.Screen name='RegisterStartup1' component={Pages.RegisterStartup1Screen} options={{ headerShown: true, title: false }} />
            <MainStack.Screen name='RegisterStartup2' component={Pages.RegisterStartup2Screen} options={{ headerShown: true, title: false }} />
            <MainStack.Screen name='RegisterStartup3' component={Pages.RegisterStartup3Screen} options={{ headerShown: true, title: false }} />
            <MainStack.Screen name='RegisterInvestidor1' component={Pages.RegisterInvestidor1Screen} options={{ headerShown: true, title: false }} />
            <MainStack.Screen name='RegisterInvestidor2' component={Pages.RegisterInvestidor2Screen} options={{ headerShown: true, title: false }} />
            <MainStack.Screen name='RegisterInvestidor3' component={Pages.RegisterInvestidor3Screen} options={{ headerShown: true, title: false }} />
            <MainStack.Screen name='RegisterInvestidor4' component={Pages.RegisterInvestidor4Screen} options={{ headerShown: true, title: false }} />
        </MainStack.Navigator>
    </NavigationContainer >


};



// function CreateStack(routesParam) {

//     const currentRoute = routesParam.route ? routesParam.route.params.item : routesParam;


//     if (currentRoute.childGroupType == "stack") {

//         if (currentRoute.childs) {
//             return (
//                 <MainStack.Navigator>
//                     {

//                         currentRoute.childs.map(item =>
//                             <MainStack.Screen
//                                 name={item.name}
//                                 component={CreateStack}
//                                 key={item.id}
//                                 initialParams={{ item: item }}
//                                 options={{
//                                     headerShown: item.headerShown,
//                                 }} />
//                         )
//                     }
//                 </MainStack.Navigator>
//             )
//         } else {
//             return (
//                 <MainStack.Navigator>
//                     {
//                         <MainStack.Screen
//                             name={currentRoute.name}
//                             component={DefaultRenderScreen}
//                             initialParams={{ item: currentRoute }}
//                             options={{
//                                 headerShown: currentRoute.headerShown,
//                             }} />
//                     }
//                 </MainStack.Navigator>
//             )
//         }

//     } else if (currentRoute.childGroupType == 'bottom') {

//         return (
//             <BottomTabStack.Navigator screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;

//                     iconName = focused ? currentRoute.childs.find(o => o.name == route.name).icon.name : currentRoute.childs.find(o => o.name == route.name).icon.nameFocused;

//                     return <Ionicons name={iconName} size={size} color={color} />;
//                 },
//             })}
//                 tabBarOptions={{
//                     activeTintColor: colors.normal.icon,
//                     inactiveTintColor: colors.normal.light,
//                 }}>
//                 {
//                     currentRoute.childs.map(item =>
//                         <BottomTabStack.Screen
//                             name={item.name}
//                             component={CreateStack}
//                             key={item.id}
//                             initialParams={{ item: item }}
//                             options={{
//                                 headerShown: item.headerShown ? item.headerShown : false,
//                             }} />
//                     )
//                 }
//             </BottomTabStack.Navigator>
//         )
//     } else if (currentRoute.childGroupType == 'top') {

//         return (
//             <TopTabStack.Navigator >
//                 {
//                     currentRoute.childs.map(item =>
//                         <TopTabStack.Screen
//                             name={item.name}
//                             component={CreateStack}
//                             key={item.id}
//                             initialParams={{ item: item }}
//                             options={{
//                                 headerShown: item.headerShown ? item.headerShown : false,
//                             }}
//                         />
//                     )
//                 }
//             </TopTabStack.Navigator>
//         )
//     } else {
//         return DefaultRenderScreen();
//     }

// }