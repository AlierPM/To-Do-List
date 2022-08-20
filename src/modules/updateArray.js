const updateArray = (taskArray) => {
  taskArray.forEach((task) => {
    task.id = taskArray.indexOf(task) + 1;
  });
};

export default updateArray;