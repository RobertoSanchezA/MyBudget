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
import RemoveFromBudget from './RemoveFromBudget'

const MainScreen = () => {

    const [budget, setBudget] = useState(0)

    const [movementsList, setMovementsList] = useState([])
    const [removeFromBudget, setRemoveFromBudget] = useState(false)

    /* Add a new move to the list with a modal*/
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
    }

    const addMoneyToBudget = (money) => {
        setBudget(budget + Number(money))
        setAddMovementModal(false)
    }

    const removeMoneyFromBudget = (money) => {
        console.log(money)
        setBudget(budget + Number(money))
        setRemoveFromBudget(false)
    }

    return (

        <View style={styles.container}>
            <View style={styles.balance}>
                <Header />
                <Text style={{ color: budget >= 0 ? "green" : "red" }}> {budget} </Text>
            </View>

            <AddToBudget
                addMoveHandler={addMovementHandler}
                budget={budget}
                addMoney={addMoneyToBudget}
                addMode={addMovementsModal}
            />
            <RemoveFromBudget
                addMoveHandler={addMovementHandler}
                removeHandler={removeMoneyFromBudget}
                addMode={removeFromBudget}
                budget={budget}
            />

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
                        onPress={() => {
                            setAddMovementModal(true)
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Agregar gasto"
                        onPress={() => {
                            setRemoveFromBudget(true)
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        marginTop: 100,
        width: '100%'
    },
    button: {
        marginVertical: 5,
    },
    title: {
        fontSize: 36,
    },
    movesList: {
        width: "100%",
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    balance: {
        marginVertical: 5,
        fontSize: 24,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    buttonCont: {
        justifyContent: 'flex-end'
    }
})

export default MainScreen;