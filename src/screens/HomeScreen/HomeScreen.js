import React from 'react'
import {Text,View} from 'react-native'
import { styled } from './styles'

export default function HomeScreen(){
    return(
        <View style={styled.container}>
            <View style={styled.mainContainer}>
                <Text style={styled.text}>
                    Wellcome to tweet 
                </Text>
            </View>
        </View>
    )
}