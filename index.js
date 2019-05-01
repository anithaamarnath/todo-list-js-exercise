
function newTask(title,description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${task.title} has ${task.complete ? " " : " not "} been completed`);
    },
    markCompleted: function() {
      this.complete = true
    }
  };

  return task;
}

const task1 = newTask("Clean cat Litter", "Take all the  poo out of the litter box");
const task2 = newTask("DO laundry" , "omg");
const task3 = [task1,task2];


task1.title;


task1.logState();
task2.markCompleted();

task2.logState();

