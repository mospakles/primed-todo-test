export interface TodoModel {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: 'completed' | 'pending' | 'in-progress' | 'open';
//   completed: boolean;
}

export let todos: TodoModel[] = [];
