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

const MoveItem = ({ value, menuHandler }) => {

    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    return (

        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.moveCont}>
                    <Text>Descripcion: {value.description}</Text>
                    <Text>Cantidad: {value.amount}</Text>
                    <Text>Fecha: {currentDay + '/' + currentMonth + '/' + currentYear + ' a las ' + currentHour + ':' + currentMinutes}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    moveCont: {
        borderWidth: 1,
        marginVertical: 2,
        flexDirection: 'column'
    },
})

export default MoveItem