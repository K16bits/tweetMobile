import {StyleSheet} from 'react-native'
import theme from '../../themes/theme'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import {Dimensions} from 'react-native'

const height = Dimensions.get('screen').height;

export const styled = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.colors.background,
        marginTop: getStatusBarHeight()+5,
    },
    text:{
        color:'white',
        fontFamily: theme.fonts.font900,
        fontSize:30,
        margin:10,
    },
    mainContainer:{
        marginTop:height*0.2,
        justifyContent:'center',
        alignItems:'center'
    },
})                   