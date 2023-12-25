import { Task } from "./ITask"

export interface TaskSliceState {
  tasks: Task[]
  status: 'idle' | 'loading' | 'failed'
}