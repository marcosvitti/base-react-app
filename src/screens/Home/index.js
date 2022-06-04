import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Style from './styles';

import { Text } from "react-native";

export default () => {
    const navigation = useNavigation();

    return (
        <Style.Container>
            <Text>Home</Text>
        </Style.Container>
    );
};