import {StyleSheet} from 'react-native'
import theme from '../../themes/theme'
import {Dimensions} from 'react-native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

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
        marginTop:3,
    },
    headMessage:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    username:{
        fontSize:20,
        fontFamily:theme.fonts.font500,
        color:'white',
    },
    text:{
        color:'white',
        fontSize:18,
        fontFamily:theme.fonts.font400,
    },
    title:{
        color:'white',
        fontFamily: theme.fonts.font900,
        fontSize:30,
        margin:10,
        marginTop:getStatusBarHeight(),
    },
})