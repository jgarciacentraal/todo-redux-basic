const ADDTASK = 'ADDTASK';
const DELETETASK = 'DELETETASK'
const EDIT = 'EDIT'

export const addTask = value => ({
  type: ADDTASK,
  data: {
    id: Math.random(),
    task: value
  }
});

export const deleteTask = id => ({
  type: DELETETASK,
  id
})

export const editTask = value => ({
  type: EDIT,
  data: {
    id: value.id,
    task: value.task
  }
})

