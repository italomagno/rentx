import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

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
 Acessories,
 Period,
 Price,
 About,
 Footer,


} from './styles'
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';



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
       
       <Acessories>
           <Acessory name='360km/h' icon={SpeedSvg}/>
           <Acessory name='3.2s' icon={AccelerationSvg}/>
           <Acessory name='800 HP' icon={ForceSvg}/>
           <Acessory name='Gasolina' icon={GasolineSvg}/>
           <Acessory name='Auto' icon={ExchangeSvg}/>
           <Acessory name='2 pessoas' icon={PeopleSvg}/>
         </Acessories>

       <About>
       Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla.
        É um belíssimo carro para quem gosta de acelerar.

       </About>

     </Content>

       <Footer>
         <Button title='Confirmar'/>
       </Footer>

 </Container>
 );
}