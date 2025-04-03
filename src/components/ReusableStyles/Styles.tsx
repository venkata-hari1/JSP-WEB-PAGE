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
    lineHeight: '25px'
}))
export const StrongSmallText = styled(Box)(({ theme }) => ({
    fontSize: '14px',
    color: '#333333',
    fontWeight: '800',
    lineHeight: '25px'
}))
export const BigText = styled(Box)(({ theme }) => ({
    fontSize: '16px',
    color: '#FF0000',
    fontWeight: '700',
    lineHeight: '25px',
    marginTop: '1%',
    marginBottom: '1%'
}))
export const MiddleText = styled(Box)(({ theme }) => ({
    fontSize: '16px',
    color: '#333333',
    fontWeight: '800',
    lineHeight: '25px'
}))

export const ButtonText = styled(Button)(({ theme }) => ({
    fontSize: '14px',
    color: '#FF0000',
    textTransform:"capitalize",
    fontWeight: '800',
}))


