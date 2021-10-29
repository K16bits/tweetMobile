import React from 'react'
import { Text,View } from 'react-native'
import {styled} from './styles'

import {data} from '../home/data'

export default function Friends(){
    return(
        <View style={styled.container}>
            <Text>{data[0].nome}</Text>
        </View>
    )
}