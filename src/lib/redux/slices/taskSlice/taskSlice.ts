/* Core */
import { Task, TaskSliceState } from '@/interfaces/Task'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'


const initialState: TaskSliceState = {
  tasks: [],
  status: 'idle',
}


export const taskSlice = createSlice({
  name: 'task',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
  },
})






