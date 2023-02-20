import Header from "./components/Header"
import './assets/global.css'
import Tasks from "./components/Tasks"
import { useEffect } from "react"
import { useTodoContext } from "./contexts/ContextProvider"

function App() {
  const {loadSavedTasks} = useTodoContext()

  useEffect(() => {
    loadSavedTasks()
  }, [])

  return (
    <>
      <Header />
      <Tasks />
    </>
  )
}

export default App
