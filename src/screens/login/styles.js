import {StyleSheet} from 'react-native'
import theme from '../../themes/theme'
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import {Dimensions} from 'react-native'

const heightScreen = Dimensions.get('screen').height;
const widthScreen = Dimensions.get('screen').width;

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
        marginTop:heightScreen*0.2,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        color:'black',
        width:widthScreen*0.5,
        fontSize:22,
        borderWidth:1,
        borderColor:'white',
        padding:5,
        marginBottom:5,
        borderRadius:8,
        textAlign:'center',
        backgroundColor:'white',
    },

})                   