import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
const Header = () => {
    return (
        <View>
            <Text style={styles.title}>Saldo actual</Text>
        </View>

    )
}
const styles = StyleSheet.create({

    title: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Header