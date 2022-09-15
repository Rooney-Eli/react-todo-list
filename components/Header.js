import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Header = ({
    title,
    isSelectingMode,
    toggleSelectingFxn,
}) => {

    return (
        <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
        {
            isSelectingMode?
                <TouchableOpacity onPress={() => { toggleSelectingFxn() }}>
                    <Text style={styles.button}>Cancel</Text>
                </TouchableOpacity> : null


        }

        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        height: 75,
        padding: 0,
        backgroundColor: 'darkslateblue',
    },
    text: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        overflow:'hidden',
    },
    button: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        overflow:'hidden',

    }
})

export default Header