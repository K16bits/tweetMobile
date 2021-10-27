import React from 'react'
import { styled } from './styles'
import { AntDesign } from '@expo/vector-icons';
import {Text,View,TextInput,Button} from 'react-native'


export default function Login({ navigation }){
    return(
        <View style={styled.container}>
            <View style={styled.mainContainer}>
                    <AntDesign
                    name="message1" color="white" size={60}/>
                <Text style={styled.text}>
                    Wellcome to tweet 
                </Text>
                <TextInput style={styled.input} placeholder="Email"/>
                <TextInput style={styled.input} placeholder="Password"/>
                <Button title="login" color="#2196F3"
                    onPress={()=>{
                        navigation.navigate('Home')}
                }/>
            </View>
        </View>
    )
}