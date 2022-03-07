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
import Header from './Header'
import AddToBudget from './AddToBudget'
import MoveItem from './MoveItem'

const MainScreen = () => {

    const [budget, setBudget] = useState(0)

    const [movementsList, setMovementsList] = useState([])
    const [RemoveFromBudget, setRemoveFromBusget] = useState(false)
    /* Add a new move to the list with a modal, close modal when added*/
    const [addMovementsModal, setAddMovementModal] = useState(false)

    const addMovementHandler = (description, amount, date) => {
        setMovementsList((currentList) => [
            ...currentList,
            {
                key: Math.random().toString(),
                description,
                amount,
                date
            }
        ])
        setAddMovementModal(false)
    }
    

    return (

        <View style={styles.container}>
            <View style={styles.balance}>
                <Header />
                <Text>{budget} </Text>
            </View>

            

            <Text>Ultimos movimientos</Text>
            <View style={styles.movesList}>
                <FlatList data={movementsList} renderItem={itemData => (
                    <MoveItem
                        value={itemData.item}
                    />
                )}
                />
            </View>
            <View style={styles.buttonCont}>
                <View style={styles.button}>
                    <Button title="Agregar ingreso"
                        onPress={() => setAddMovementModal(true)}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Agregar gasto"

                    />
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
        justifyContent: 'space-around',
        height: '100%'
    },
    button: {
        marginVertical: 5,
        borderRadius: 3,
    },
    title: {
        fontSize: 24,
    },
    movesList: {
        alignItems: "center",
        width: "100%",
        padding: 20,

    },
    balance: {
        marginVertical: 5,
        fontSize: 20,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white'
    }
})

export default MainScreen;