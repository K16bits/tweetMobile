import React from 'react'
import {Text,View} from 'react-native'
import {styled} from './styles'
import {data} from './data'

export default function Home(){
    return(
        <View style={styled.container}>
                {
                    data.map((data)=>(
                        <View style={styled.messageContainer} key={data.nome}>
                            <View style={styled.headMessage}>
                                <Text style={styled.username}>@{data.nome}</Text>
                                <Text style={styled.username}>{data.data}</Text>
                            </View> 
                            <Text style={styled.text}>{data.texto}</Text>
                        </View>
                    ))
                }
        </View>
    )} 