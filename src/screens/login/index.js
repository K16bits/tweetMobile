import React from 'react'
import { useState } from 'react'

import { styled } from './styles'
import { AntDesign } from '@expo/vector-icons';
import {Text,View,TextInput,Button} from 'react-native'

import {api} from '../../services/api'

import {useNavigationContainerRef} from '@react-navigation/native'

import {useAuth} from '../../contexts/auth'

export default function Login(){
    const {teste } = useAuth()
    console.log( teste)

    const navigationRef  = useNavigationContainerRef()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const data = {
        name:email,
        password
    }

    async function SubmitData(){

        const {loginUser} = useAuth();

        const dados = await api.post('/login',data)
        .then(response =>{
            console.log('em manuntenção navigate')
            console.log(nome)
            //navigationRef.navigate('Friends')
        })
        .catch(erro=>{
            console.log(erro)
        })
    }

    return(
        <View style={styled.container}>
            <View style={styled.mainContainer}>
                    <AntDesign
                    name="message1" color="white" size={60}/>
                <Text style={styled.text}>
                    Wellcome to tweet
                </Text>
                <TextInput style={styled.input} placeholder="Email"
                    onChangeText={(e)=> setEmail(e)}
                />
                <TextInput style={styled.input} placeholder="Password" secureTextEntry={true}
                    onChangeText={(e)=> setPassword(e)}
                />
                <Button title="login" color="#2196F3"
                    onPress={SubmitData}
                />
            </View>      
        </View>
    )
}