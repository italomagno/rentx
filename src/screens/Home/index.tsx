import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg'

import {
 Container,
 HeaderContent,
 Header,
 TotalCars,
 CarList,

} from './styles'

import { Car } from '../../components/Car';

export function Home(){

  const carDataOne = {
    brand: 'audi',
  name: 'R$ 5 Coupe',
  rent: {
    period: 'ao dia',
    price: 120,
  },
  thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeX5cvC0MtQIRdkRFSjBsnhQTCKLXkAU8wzOVLgUjBqPZNBAGfWesaRwqwDqga4VKc7A&usqp=CAU'
  }
  

return(
 <Container>
   <StatusBar
   barStyle={"light-content"}
    backgroundColor="transparent"
    translucent
   />
  

   <Header>
   <HeaderContent>
    <Logo
    width={RFValue(108)}
    height={RFValue(12)} 
     />

     <TotalCars>
       Total de 12 carros
     </TotalCars>
    </HeaderContent>
   </Header>

  <CarList
  data={[1,2,3,4,5,6,7]}
  keyExtractor={item => String(item)}
  renderItem={({item})=> <Car data={carDataOne}/>}
  />
    

 </Container>
 );
}