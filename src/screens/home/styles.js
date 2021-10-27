import {StyleSheet} from 'react-native'
import theme from '../../themes/theme'
import {Dimensions} from 'react-native'

const widthScreen = Dimensions.get("screen").width

export const styled = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: theme.colors.background,
        alignItems:'center',
    },
    messageContainer:{
        borderWidth:1,
        borderColor:"red",
        width:widthScreen,
        padding:10,
        margin:2,
    },
    username:{
        fontSize:20,
        fontFamily:theme.fonts.font500,
        color:'white',
    },
    text:{
        color:'white',
        fontSize:22,
        fontFamily:theme.fonts.font500,
    }
})