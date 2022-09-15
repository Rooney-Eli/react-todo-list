import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {CheckBox} from 'react-native-web'

const TodoItem = ({
    id,
    text,
    removeFxn,
    isSelectable,
    joinSelectedFxn,
    toggleSelectedFxn,
    splitFxn
}) => {

    const [isSelected, setSelection] = useState(false)

    const setSelected = () => {
        toggleSelectedFxn(id)
        setSelection(!isSelected)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>

            { isSelectable ?
                <TouchableOpacity onPress={() => { joinSelectedFxn() }}>
                    <Text style={styles.joinBtn}>Join all selected!</Text>
                </TouchableOpacity> : null
            }

            { isSelectable ?
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelected}
                    style={styles.checkbox}
                /> : null
            }

            <TouchableOpacity onPress={() => { splitFxn(id) }}>
                <Text style={styles.splitButton} >{'Split!'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { removeFxn(id) }}>
                <Text style={styles.removeButton} >{'x'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        height: 50,
        padding: 0,
        margin: 10,
        backgroundColor: '#ddccff',
    },
    splitButton: {
        margin:10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'green',
        paddingTop: 10,
        paddingRight: 20,
        color:'green',
        backgroundColor: 'lightgreen'
    },
    joinBtn: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'green',
        paddingTop: 10,
        paddingRight: 20,
        color:'green',
        backgroundColor: 'lightgreen'
    },
    text: {
        flexGrow: 2,
        justifyContent:'flex-start',
        textAlign:'left'
    },
    checkbox: {
        height: 40,
        width: 40
    },
    removeButton: {
        flexGrow: 1,
        height: '100%',
        width: 20,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10,
        paddingRight: 40,
        justifyContent:'center',
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
    },
})

export default TodoItem