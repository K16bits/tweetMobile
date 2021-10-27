import {StyleSheet} from 'react-native'
import theme from '../../themes/theme'

export const styled = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.colors.background,
    },
    text:{
        color:'white',
        fontFamily: theme.fonts.font900,
        fontSize:30,
    },
    mainContainer:{
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    }
})                   