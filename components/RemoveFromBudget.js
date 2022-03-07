import { React, useState } from 'react'
import {
    Button,
    FlatList,
    View,
    Modal,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

const RemoveFromBudget = ({addMode, removeHandler, addMoveHandler}) => {

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
    const validateAmountToRemove = () => {
        
        addMoveHandler(description, amount, date)
        removeHandler(amount)
        setAmount('')
        setDescription('')
        setDate('')
    }

    return (
        <Modal visible={addMode} animationType={'slide'}>
            <View stlye={StyleSheet.container}>
                <Text>Concepto</Text>
                <TextInput 
                    placeholder="Introduce concepto del gasto"
                    value={description}
                    onChangeText={descriptionHandler}
                />
                <Text>Introduce la cantidad del gasto</Text>
                <TextInput 
                    placeholder="Introduce la cantidad a retirar"
                    value={amount}
                    onChangeText={amountHandler}
                />
                <Text>Introduce la fecha</Text>
                <TextInput 
                    placeholder="Introduce la fecha"
                    value={date}
                    onChangeText={dateHandler}
                />
                
                <Button 
                    onPress={validateAmountToRemove}
                    title="Confirmar"
                />
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RemoveFromBudget