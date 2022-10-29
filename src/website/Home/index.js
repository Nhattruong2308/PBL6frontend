import React, { useState } from "react";
import { Box, Button, Center, Flex, Heading, HStack, IconButton, Image, List, ListIcon, ListItem, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/react";
import Header from "../Header";
import Footer from "../Footer";
import {FaUser} from 'react-icons/fa'
import {BsSaveFill} from 'react-icons/bs'
import {HiWrenchScrewdriver} from 'react-icons/hi2'
import {AiFillLock, AiOutlineMenu} from 'react-icons/ai'
import {ImHome} from 'react-icons/im'
import ListTag from "../ListTag";
function Home(){
    const [left, setLeft]=useState('-240px')
    const [wCenter, setWCenter] =useState('81%')
    const [wLeft, setWLeft] =useState('3%')
    const [spa, setSpa] =useState('5')
    const [cols, setCols] =useState(3)
    const ClickMenu =()=>{
        if(left ==='0') 
        {setLeft('-240px')
        setWCenter('81%')
        setWLeft('3%')
        setCols(3)
        setSpa('5')}
        else {setLeft('0')
        setWCenter('69%')
        setWLeft('16%')
        setCols(2)
        setSpa('10')}
    }
    const data=['1','2','3','4','5','6','7','8','9']
    const list=data.map(item=><ListTag data={item}/>)
    
    return(
        <Stack  minH='100vh'  maxW='100vw' overflow='hidden'
        pt='55px' >
              <Header/>

              <Flex  w='100vw'>
              <IconButton color={'white'} bg='rgba(37,42,52,0.5)' icon={<AiOutlineMenu/>} size='sm'
                  pos='fixed' left='10px' top='75px' onClick={ClickMenu} zIndex='10' _hover={{bg:'black'}}/>
                <Box w={wLeft} transition={'all 0.5s'}>
                  <Box bgColor={'rgba(37,42,52,0.5)'} pos='fixed' left={left} w='240px' h='500px' 
                  transition={'all 0.5s'} >
                    <Center mt='70px' >
                    <Box>
                     <Image src={require('../../imgs/img1.png')} w='120px' h='120px'
                     border={'2px'} borderColor='#08D9D6'/>
                     <Text color='white'>John Wick</Text>
                     <List color='white' spacing={'3'} fontSize='15px' mt='20px' cursor='pointer'>
                     <ListItem _hover={{color:'#08D9D6'}}>
                            <ListIcon as={ImHome}/>
                             Trang chủ
                        </ListItem>
                        <ListItem _hover={{color:'#08D9D6'}}>
                            <ListIcon as={FaUser}/>
                             Thông tin cá nhân
                        </ListItem>
                        <ListItem _hover={{color:'#08D9D6'}}>
                            <ListIcon as={BsSaveFill} />
                             Bài test đã lưu
                        </ListItem>
                        <ListItem _hover={{color:'#08D9D6'}}>
                            <ListIcon as={HiWrenchScrewdriver}/>
                             Quản lý bài test
                        </ListItem>
                        <ListItem _hover={{color:'#08D9D6'}}>
                            <ListIcon as={AiFillLock}/>
                             Đổi mật khẩu
                        </ListItem>
                     </List>
                     </Box>
                     </Center>
                  </Box></Box>

                <Box w={wCenter} pt='20px' pl='30px' pr='20px' transition={'all 0.5s'} >
                    <Heading fontSize='20px' color='white'>WELCOME TO <span style={{color:'#08D9D6'}}>ENGLISH </span>
                    <span style={{color:'#FF2E63'}}>ACADEMY</span>!</Heading>
                    <Heading fontSize='20px' color='white' ml='75%' mb='40px'>XIN CHÀO JOHN WICK!</Heading>
                    <Center>
                    <SimpleGrid columns={cols} spacing={spa}>
                        {list}
                    </SimpleGrid>
                    </Center>
                </Box>

                <Box w='15%'>
                    <Box bg='rgba(255,255,255,0.95)' pos='fixed' right='0' h={'500px'} w='15%'
                    color={'black'}>
                        <Text ml='20px' mt='10px' mb='10px'  
                        fontWeight='bold'>Từ của tôi</Text>
                        <Box  bg={'#C3C3C3'} w='100%' h='2px'></Box>

                        <Box mt='30px' bg='white' ml='20px' h='120px' w='190px' 
                        boxShadow='0px 2px 2px 2px #888888' pt='10px' pr='10px'>
                            <Flex alignItems='center'  ml='10px'>
                                <Image src={require('../../imgs/word.png')} w='35px'/>
                                <Text ml='5px' fontSize='20px'> Từ vựng</Text>
                            </Flex>
                            <HStack w='100%' mt='10px'>
                               <Spacer/>
                               <Text fontSize={'15px'}>Số lượng: 12</Text>
                            </HStack>
                            <HStack w='100%' mt='10px'>
                               <Spacer/>
                               <Image src={require('../../imgs/word_button.png')} w='20px'/>
                               <Text fontSize={'15px'}>Chi tiết</Text>
                            </HStack>
                        </Box>

                        <Box mt='30px' bg='white' ml='20px' h='120px' w='190px' 
                        boxShadow='0px 2px 2px 2px #888888' pt='10px' pr='10px'>
                            <Flex alignItems='center'  ml='10px'>
                                <Image src={require('../../imgs/grammar.png')} w='35px'/>
                                <Text ml='5px' fontSize='20px'>Ngữ pháp</Text>
                            </Flex>
                            <HStack w='100%' mt='10px'>
                               <Spacer/>
                               <Text fontSize={'15px'}>Số lượng: 12</Text>
                            </HStack>
                            <HStack w='100%' mt='10px'>
                               <Spacer/>
                               <Image src={require('../../imgs/grammar_button.png')} w='20px'/>
                               <Text fontSize={'15px'}>Chi tiết</Text>
                            </HStack>
                        </Box>
                    </Box>
                    
                </Box>
              </Flex>
              <Spacer/>
              <Footer/>
        </Stack>
    )
}

export default Home