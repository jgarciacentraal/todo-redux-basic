const ADDTASK = 'ADDTASK';
const DELETETASK = 'DELETETASK'

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

