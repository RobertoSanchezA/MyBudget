import { React, useState } from 'react'
import {
    Button,
    View,
    Text,
    Input,
    Modal,
    TextInput,
    StyleSheet
} from 'react-native'
const AddToBudget = ({addMode, addMoveHandler, addMoney}) => {

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const descriptionHandler = (descriptionText) => {
        setDescription(descriptionText)
    }
    const amountHandler = (amountText) => {
        setAmount(amountText)
    }
    const dateHandler = (dateText) => {
        setDate(dateText)
    }

    const validateMove = () => {
        addMoveHandler(description, amount, date)
        addMoney(amount)
        setDescription('')
        setAmount('')
        setDate('')
    }

    return (
        <Modal visible={addMode} animationType={'slide'}>
            <View>
                <TextInput 
                    placeholder="Descripcion"
                    value={description}
                    onChangeText={descriptionHandler}
                />
                <TextInput 
                    placeholder="Cantidad"
                    value={amount}
                    onChangeText={amountHandler}
                />
                <TextInput 
                    placeholder="Fecha"
                    value={date}
                    onChangeText={dateHandler}
                />
                <Button 
                    title="Confirmar"
                    onPress={validateMove}
                />
            </View>
        </Modal>
    )
}

export default AddToBudget