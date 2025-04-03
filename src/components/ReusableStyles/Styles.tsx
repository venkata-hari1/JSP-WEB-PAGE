import { Box, Button, styled } from "@mui/material"

export const flex = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
}
export const SmallText = styled(Box)(({ theme }) => ({
    fontSize: '14px',
    color: '#333333',
    fontWeight: '500',
    lineHeight: '22px'
}))
export const StrongSmallText = styled(Box)(({ theme }) => ({
    fontSize: '14px',
    color: '#333333',
    fontWeight: '800',
    lineHeight: '22px'
}))
export const BigText = styled(Box)(({ theme }) => ({
    fontSize: '16px',
    color: '#FF0000',
    fontWeight: '700',
    lineHeight: '22px',
    marginTop: '0.5%',
    marginBottom: '0.5%'
}))
export const MiddleText = styled(Box)(({ theme }) => ({
    fontSize: '16px',
    color: '#333333',
    fontWeight: '800',
    lineHeight: '22px'
}))

export const ButtonText = styled(Button)(({ theme }) => ({
    fontSize: '14px',
    color: '#FF0000',
    textTransform:"capitalize",
    fontWeight: '800',
}))

export const FormGrid = styled(Box)(({ theme }) => ({
    display:'grid',
    width:'100%',
    gridTemplateColumns:'85% 13%',
    gridGap:'1%'
}))
export const RootContainer=styled(Box)(({theme})=>({
...flex,
width:'100%',
flexDirection:'column'
}))


