import React from 'react'
import { Button, FlatList, Text,View } from 'react-native'
import {styled} from './styles'

import {data} from '../home/data'

const color = "red"

export default function Friends(){
    return(
        <View style={styled.container}>
            <Text style={styled.title}>Friends</Text>
            <FlatList
                data={data}
                keyExtractor={(item)=> item.nome}
                renderItem={({item})=>(
                    <View style={styled.followersContainer}>
                        <Text style={styled.name}>{item.nome}</Text>
                        <Button title="seguir" color={color}/>
                    </View> 
                )}
            />
        </View>
    )
}

