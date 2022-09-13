import { Box, Image, Text } from "@chakra-ui/react"

const Card = ({ data, bt }) => {
    return (
        data &&
        <>
            {
                data.map((e, i) => (
                    <Box pb={'10px'} key={i}>
                        <Image src={e.image} height={'40px'} width={'40px'} alt={e.image} m={'auto'} />
                        <Text color={'#6c757d'} pt={'20px'} fontSize={'15px'} lineHeight={1.5} fontWeight={'.875rem'}>{e.text}</Text>
                    </Box>
                ))
            }
        </>
    )
}
export default Card