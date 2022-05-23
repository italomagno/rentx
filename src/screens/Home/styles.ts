import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`

flex: 1;


background-color: ${({theme})=> theme.colors.background_primary} ;


`;

export const HeaderContent = styled.View`

flex-direction: row;
align-items: center;

justify-content: space-between;

`
;
export const Header = styled.View`
justify-content: flex-end ;
width: 100% ;
height: 113px ;

background-color: ${({theme})=> theme.colors.header} ;

padding: 32px 24px ;

`;


export const TotalCars = styled.Text`
color: ${({theme})=> theme.colors.text} ;
font-family: ${({theme})=> theme.fonts.primary_400} ;

font-size:${RFValue(15)}px ;

`;