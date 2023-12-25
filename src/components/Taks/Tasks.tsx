'use client';

/* Core */
import { useState } from 'react';

/* Instruments */
import { taskSlice, useSelector, useDispatch,selectTasks} from '@/lib/redux';
import { Task } from '@/interfaces/Task';
import TaskCard from './TaskCard';



export default function Tasks() {

  const dispatch = useDispatch()
  const tasks = useSelector(selectTasks)
  const [task, setTask] = useState<string>('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  
  const addTask = () => {
    const newTask:Task = {
      id: Math.random().toString(),
      title: task,
      description: description,
      
    }
    if(!task || !description) return alert('Please add a task and description')
    dispatch(taskSlice.actions.addTask(newTask))
    setTask('')
    setDescription('')
    setStatus('')
  }



  return (
    <div>
      <div className="">
        
        <div className="flex flex-col size-60 mt-10">
          <input className="border-2 border-gray-500 rounded-md text-gray-600" type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} />
          <input className="border-2 border-gray-500 rounded-md text-gray-600" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button className="border-2 border-gray-500 rounded-md" onClick={addTask}>Add Task</button>
        </div>
      </div>

        All Tasks
        <div className="grid">
          {tasks.map((task: Task) => (
            <TaskCard key={task.id} task={task} />
          ))}

        </div>

    </div>
  )
}
