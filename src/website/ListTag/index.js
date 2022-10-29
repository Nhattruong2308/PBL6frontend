import {  Button, Flex, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ListTag=(props)=>{
   return(
    <Stack bg='rgba(255,255,255,0.95)' h='200px' w='370px' p='10px' borderRadius={'7px'}
    cursor='pointer' _hover={{ bg:'white',transform:'scale(1.07) rotate(3deg)'}}>
    <Flex alignItems='center'mb='15px'>
        <Image src={require('../../imgs/logo.png')} w='35px' h='35px'/>
        <Text ml='5px' color={'#08D9D6'}>ENGLISH <span style={{color:'#FF2E63'}}>ACADEMY</span></Text>
    </Flex>
    <Text  color={'black'} fontWeight='bold'>Unit {props.data}</Text>
    <Text color={'gray'} fontSize='17px'>Từ vựng: 18</Text>
    <Spacer/>
    <HStack alignItems='center' w='350px' >
        <Image src={require('../../imgs/img1.png')} w='35px' h='35px' borderRadius='50%'/>
        <Text ml='5px' fontSize={'17px'} color={'black'}>John Wick</Text>
        <Spacer/>
        <Button  fontWeight={'bold'} color='white' bgColor={'#FF2E63'}
        colorScheme='red' size='xs'>BẮT ĐẦU</Button>
    </HStack>
    </Stack>
  
   )
}

export default ListTag