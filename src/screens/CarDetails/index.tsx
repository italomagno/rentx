import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {
 Container,
 Header,
 CarImages,
} from './styles'



export function CarDetails(){

return(
 <Container>
  
   <Header>
     <BackButton onPress={()=>{}}/>
   </Header>
   <CarImages>

   <ImageSlider
     imageUrl={[ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeX5cvC0MtQIRdkRFSjBsnhQTCKLXkAU8wzOVLgUjBqPZNBAGfWesaRwqwDqga4VKc7A&usqp=CAU']}
     />
     </CarImages>

 </Container>
 );
}