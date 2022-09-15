import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header.js'
import AddBar from './components/AddBar.js'
import {uuid} from 'uuidv4';
import TodoList from './components/TodoList.js'



const App = () => {

    const [isSelecting, setIsSelecting] = useState(false)


    const [todos, setTodos] = useState([
        { id: 1, text: `Todo${1}`},
        { id: 2, text: `Todo${2}`},
        { id: 3, text: `Todo${3}`},
    ])


    const addTodo = (text) => {
        if(text === '') return
        const newTodo = {id: uuid() , text: text}
        setTodos([...todos, newTodo])
    }

    const addTodos = (texts) => {
        const newTodos = texts.map(text => {
            return {id: uuid(), text: text}
        })
        setTodos([...todos, ...newTodos])
    }


    const removeTodo = (id) => {
        const todosWithoutId = todos.filter(todo => todo.id !== id)
        setTodos(todosWithoutId)
    }

    const joinTodos = (idArr) => {
        const todosTextWithIds = todos.map(todo => {
            if (idArr.includes(todo.id)) return todo.text
        })
        const todosWithoutIds = todos.filter(todo => !idArr.includes(todo.id))
        const newTodoText = todosTextWithIds.join('::')
        const newTodo = {id: uuid(), text: newTodoText}
        setTodos([...todosWithoutIds, newTodo])
    }

    const splitTodo = (id) => {
        const todoWithId = todos.find(todo => todo.id === id)
        if(!todoWithId.text.includes('::')) return
        const todoTexts = todoWithId.text.split('::')
        addTodos(todoTexts)
    }

    const toggleSelecting = () => {
        setIsSelecting(!isSelecting)
    }


    return (
        <View style={styles.container}>
            <Header
                title='Todo List'
                isSelectingMode={isSelecting}
                toggleSelectingFxn={toggleSelecting}
            />
            <AddBar addFxn={addTodo}/>
            <TodoList
                itemsList={todos}
                removeFxn={removeTodo}
                joinFnx={joinTodos}
                splitFnx={splitTodo}
                setSelectionModeFxn={toggleSelecting}
                isSelectable={isSelecting}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
});



export default App
