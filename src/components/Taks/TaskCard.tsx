'use client'
import './task.css'


/* Instruments */
import { Task } from "@/interfaces/Task"
import { taskSlice, useDispatch } from '@/lib/redux';

type propTypes = {
  task: Task
}

const TaskCard = ({ task }: propTypes) => {

  const dispatch = useDispatch()
  

  return (
    <div className='bg-gray-950 p-10'>
        <h3 className='text-xl font-bold mb-4'>
          Title:  <span className="text-lg">{task.title}</span>
        </h3>
        <h4 className='text-xl font-bold mb-4'>
          Description:<p className='text-slate-300'>{task.description}</p>
        </h4>
      <button
      className='bg-red-600 rounded-md p-5 h-[50] w-[75px]  flex flex-col items-center justify-center'
        onClick={() => {
          dispatch(taskSlice.actions.removeTask(task.id))
          alert('Task deleted')
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default TaskCard
