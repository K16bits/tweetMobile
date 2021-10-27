import React from 'react'
import {Text,View} from 'react-native'
import {styled} from './styles'
import {data} from './data'

export default function Home(){
    return(
        <View style={styled.container}>
                {
                    data.map((data)=>(
                        <View style={styled.messageContainer}>
                            <Text style={styled.username}>{data.nome}</Text>
                            <Text style={styled.text}>{data.texto}</Text>
                        </View>
                    ))
                }
        </View>
    )}