import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../assets/logo.svg';
import * as Style from './styles';

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        const loadingData = async () => {
            const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
            await sleep(3000);

            navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'MainTab',
                  },
                ],
              })
        };

        loadingData();
    }, []);

    return (
        <Style.Container>
            <Logo />
            <Style.LoadingIcon size='large' color={Style.colors.colorPrimary}/>
        </Style.Container>
    );
};