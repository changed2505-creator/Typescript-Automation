export interface ToDo {
  id: number;
  task: string;
}
export let TODO: ToDo[] = [];

export function addTask(task: string) {
  const newTask = { id: Math.floor(Math.random() * 55), task };
  TODO.push(newTask);
  return newTask;
}
export function getTask(id: number) {
  const findTask = TODO.find((task) => task.id === id);
  if (!findTask) {
    throw new Error(`Enter a right ID!!!`);
  }
  return findTask;
}
export function getAllTask() {
  return TODO;
}
export function deleteTask(id: number) {
  TODO = TODO.filter((task) => task.id !== id);
  return TODO;
}
export function updateTask(id: number, task: string) {
  const findTask = getTask(id);
  findTask.task = task;
  return TODO;
}
