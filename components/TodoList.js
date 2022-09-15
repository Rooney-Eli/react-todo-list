import React, {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import TodoItem from './TodoItem.js'

const TodoList = ({
    itemsList,
    removeFxn,
    joinFnx,
    splitFnx,
    setSelectionModeFxn,
    isSelectable,
}) => {

    //list of IDs
    const [selected, setSelected] = useState([])

    const toggleSelected = (id) => {
        if(selected.includes(id)) {
            console.log(`removing selected: ${id}`)
            setSelected(selected.filter(it => it !== id))
        } else {
            console.log(`adding selected: ${id}`)
            setSelected([...(selected), id])
        }
    }

    const joinSelected = () => {
        joinFnx(selected)
    }


    return (
        <TouchableOpacity onLongPress={() => {setSelectionModeFxn()}}>
            <FlatList
                data={itemsList}
                renderItem={ ({item}) => (
                    <TodoItem
                        id={item.id}
                        text={item.text}
                        removeFxn={removeFxn}
                        isSelectable={isSelectable}
                        joinSelectedFxn={joinSelected}
                        toggleSelectedFxn={toggleSelected}
                        splitFxn={splitFnx}
                    />
                )}
            />
        </TouchableOpacity>
    )
}

export default TodoList