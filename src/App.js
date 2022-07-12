import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
    // const [count, setCount] = useState(0)

    const [tasks, setTasks] = useState([
        {
            "id" : 1,
            "text" : "Doctors Appointment",
            "day" : "Feb 5th at 2:30pm",
            "reminder" : true
        },
        {
            "id" : 2,
            "text" : "Meeting at school",
            "day" : "Feb 6th at 1:30pm",
            "reminder" : true
        },
        {
            "id" : 3,
            "text" : "Take a test",
            "day" : "Feb 7th at 2:30pm",
            "reminder" : false
        }
    ])

    const onDelete = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
        // console.log(tmp)
    }


  return (
    <div className="App">
      <h1>Hello React!!</h1>
        <Header title="Tasks Tracker"/>
        <Tasks tasks={tasks} onDelete={onDelete} />


    </div>
  );
}

export default App;