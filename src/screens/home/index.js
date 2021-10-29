import React from 'react'
import {Text,View,FlatList} from 'react-native'
import {styled} from './styles'
import {data} from './data'

export default function Home(){
    return(
        <View style={styled.container}>
            <Text style={styled.title}>weet</Text>
            <FlatList
                data={data}
                keyExtractor={(item)=>item.nome}
                renderItem = {({item})=>(
                    <View style={styled.messageContainer}>
                        <View style={styled.headMessage}>
                            <Text style={styled.username}>@{item.nome}</Text>
                            <Text style={styled.username}>{item.data}</Text>
                        </View> 
                    <Text style={styled.text}>{item.texto}</Text>
                    </View>
                )
                }
            />
        </View>
    )} 