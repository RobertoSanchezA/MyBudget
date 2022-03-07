import React from 'react'
import {
    Button,
    View,
    Text,
    Input,
    Modal,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

const MoveItem = ({ value }) => {
    return (

        <TouchableOpacity>
            <View style={styles.moveCont}>
                <Text>Descripcion: {value.description}</Text>
                <Text>Cantidad: {value.amount}</Text>
                <Text>Fecha: {value.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    moveCont: {
        borderWidth: 1,
        marginVertical: 2,

    }
})

export default MoveItem