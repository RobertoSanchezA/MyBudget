import { React, useState } from 'react'
import {
    Button,
    View,
    Text,
    Input,
    TextInput,
    StyleSheet
} from 'react-native'
import Header from './Header'
const MainScreen = () => {

    const [balance, setBalance] = useState(1200)

    return (

        <View style={styles.container}>

            <View style={styles.balance}>
                <Header />
                <Text>{balance} </Text>
            </View>

            <View style={styles.buttonCont}>
                <View style={styles.button}>
                    <Button title="Agregar ingreso" />
                </View>
                <View style={styles.button}>
                    <Button title="Agregar gasto" />
                </View>
                <View>
                    <Button title="Lista" />
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {

    },
    button: {
        marginVertical: 5,
        borderRadius: 3,
    },
    title: {
        fontSize: 24,
    },
    balance: {
        marginVertical: 5,
        fontSize: 20,
    },
    balance: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})

export default MainScreen;