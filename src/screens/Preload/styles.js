import styled from 'styled-components/native';
import Colors from '../../config/Colors';

export const colors = Colors;

export const Container = styled.SafeAreaView`
    background-color: ${Colors.colorBackground};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;