import { React, useState } from 'react'
import {
    Button,
    FlatList,
    View,
    Text,
    Input,
    TextInput,
    StyleSheet
} from 'react-native'

const RemoveFromBudget = ({addMode}) => {
    return (
        <Modal visible={addMode}>
            <View>
                <Text>Introduce la cantidad del gasto</Text>

            </View>
        </Modal>
    )
}

export default RemoveFromBudget