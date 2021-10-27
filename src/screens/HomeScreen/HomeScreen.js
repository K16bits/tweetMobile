import React from 'react'
import {Text,View} from 'react-native'
import { styled } from './styles'
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen(){
    return(
        <View style={styled.container}>
            <View style={styled.mainContainer}>
                    <AntDesign
                    name="message1" color="white" size={60}/>
                <Text style={styled.text}>
                    Wellcome to tweet 
                </Text>
            </View>
        </View>
    )
}