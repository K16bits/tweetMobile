import {StyleSheet} from 'react-native'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import theme from '../../themes/theme'

export const styled = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.colors.background,
    },
    name:{
        fontSize:18,
        color:'white',
        fontFamily:theme.fonts.font900
    },
    title:{
        color:'white',
        fontFamily: theme.fonts.font900,
        fontSize:30,
        margin:10,
        marginTop:getStatusBarHeight()+5,
        textAlign:'center'
    },
    followersContainer:{
        borderWidth:1,
        borderColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        padding:5,
    }
})