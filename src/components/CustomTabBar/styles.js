import styled from 'styled-components/native';
import Colors from '../../config/Colors';

export const TabArea = styled.View`
    height: 60px;
    backgound-color: ${Colors.colorBackgound};
    flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;