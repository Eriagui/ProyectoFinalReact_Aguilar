'use client'

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export const Footer = () =>{ 
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            position={"fixed"} bottom={"0"} left={"0"} zIndex={1} w={"100%"}
            >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© 2024 Erick's Store. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <a href='https://x.com/?lang=en' target="_blank">
                    <SocialButton label={'Twitter'} /*href={'https://x.com/?lang=en'}*/>
                        <FaTwitter />
                    </SocialButton>
                    </a>
                    
                    <a href='https://www.youtube.com/' target="_blank">
                    <SocialButton label={'YouTube'} /*href={'https://www.youtube.com/'}*/>
                        <FaYoutube />
                    </SocialButton>
                    </a>
                    
                    <a href='https://www.instagram.com' target="_blank">
                    <SocialButton label={'Instagram'} /*href={'https://www.instagram.com'}*/>
                        <FaInstagram />
                    </SocialButton>
                    </a>
                    
                </Stack>
            </Container>
        </Box>
    )
}