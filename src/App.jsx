import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



import { Container, ToDoList, InputTask, Button, ListItem, Trash, Check, NoTask } from './styles.js'

function App() {

  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  function changeInput(e) {
    setInputTask(e.target.value)
  }

  function buttonCLicked() {
    if (inputTask === ''){
      alert("Escreva uma tarefa")
    }else{
      setList([...list, { id: uuidv4, task: inputTask, finished: false }])
    }
  }

  function Taskfinished(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function TaskDone(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <InputTask onChange={changeInput} placeholder="Coisas para fazer hoje: "></InputTask>
        <Button onClick={buttonCLicked} >Adicionar</Button>

        <ul>
          {

            list.length > 0 ?
              (
                list.map(item => (
                  <ListItem isFinished={item.finished} key={item.id} >
                    <Check onClick={() => Taskfinished(item.id)} />
                    <li > {item.task}</li>
                    <Trash onClick={() => TaskDone(item.id)} />
                  </ListItem>
                ))

              ) : (
                <NoTask>Não há tarefas</NoTask>
              )
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
