import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {
 Container,
 Header,
 CarImages,
 Content,
 Details,
 Description,
 Brand,
 Name,
 Rent,
 Period,
 Price,
 About,

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

     <Content>
       <Details>
         <Description>
           <Brand>Lamborghini</Brand>
           <Name>Muracan</Name>
         </Description>
         <Rent>
           <Period>AO DIA</Period>
           <Price>R$ 580</Price>
         </Rent>

       </Details>
       <About>
       Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla.
        É um belíssimo carro para quem gosta de acelerar.

       </About>

     </Content>

 </Container>
 );
}