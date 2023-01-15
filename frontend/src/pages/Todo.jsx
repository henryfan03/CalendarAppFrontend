import React from 'react'
import TaskForm from '../components/TaskForm'

function Todo() {
  return (
    <>
      <section className='heading'>
        <h1>Time to get things done.</h1>
        <p>Tasks</p>
      </section>

      <TaskForm />

    </>
  )
}

export default Todo