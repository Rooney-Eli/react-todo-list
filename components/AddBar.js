import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

const AddBar = ({addFxn}) => {

    const [text, setText] = useState('')
    const onChange = textValue => setText(textValue)

    return (
        <View style={styles.container}>
            <TextInput placeholder="Type todo..." style={styles.textInput} onChangeText={onChange} value={text}/>
            <TouchableOpacity onPress={() => { addFxn(text); setText("") }}>
                <Text style={styles.plusButton} >{'+'}</Text>
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
        backgroundColor: '#ddccff',
    },
    plusButton: {
        height: '100%',
        width: 20,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10,
        paddingRight: 40,
        justifyContent:'center',
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
    },
    textInput: {
        flexGrow: 1,
        height: '100%',
        padding: 0,
        justifyContent:'center',
        overflow:'scroll'
    }
})

export default AddBar