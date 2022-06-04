import React from 'react';
import * as Style from './styles';


import { Text } from "react-native";

export default ({ navigation }) => {
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <Style.TabArea>
            <Style.TabItem onPress={ () => { goTo('Home'); } }>
                <Text>Home</Text>
            </Style.TabItem>
            <Style.TabItem onPress={ () => { goTo('Preload'); } }>
                <Text>Preload</Text>
            </Style.TabItem>
        </Style.TabArea>
    );
}