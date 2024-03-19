import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import { TasksProvider } from './components/TasksContext'

export default function App() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  )
}
