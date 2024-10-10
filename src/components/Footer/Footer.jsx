import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    Button
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
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
                        <Button borderRadius={"50%"}>
                            <FaTwitter />
                        </Button>
                    </a>

                    <a href='https://www.youtube.com/' target="_blank">
                        <Button borderRadius={"50%"}>
                            <FaYoutube />
                        </Button>
                    </a>

                    <a href='https://www.facebook.com/instagram/' target="_blank">
                        <Button borderRadius={"50%"}>
                            <FaInstagram />
                        </Button>
                    </a>

                </Stack>
            </Container>
        </Box>
    )
}