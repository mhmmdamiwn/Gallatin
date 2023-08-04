interface PaginationOptions {
  page?: number;
  size?: number;
}

// interface of the string message which we send back
interface ResponseMessage {
  message?: string;
  error?: boolean;
  errorMessage?: string;
}

// interface of the original Task
interface Task {
  id: string;
  parentId?: string;
  title?: string;
  description?: string;
}

// interface of the Task id which client sends
interface TaskId {
  id: string;
}

// interface of the Task which client sends for create method
interface TaskInput {
  parentId: string;
  title: string;
  description: string;
}

// interface of the Task which we send back (it has 2 more property for Error handling reason)
interface ResponseTask {
  id?: string;
  parentId?: string;
  title?: string;
  description?: string;
  error?: boolean;
  errorMessage?: string;
}

// interface of the array of Tasks which we send back
interface Tasks {
  tasks?: Array<Task>;
  error?: boolean;
  errorMessage?: string;
}
export {
  Task,
  Tasks,
  ResponseMessage,
  ResponseTask,
  TaskId,
  TaskInput,
  PaginationOptions,
};
