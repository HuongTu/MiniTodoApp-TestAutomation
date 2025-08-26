import {test} from '../fixtures/basePage';
import { getDataFromJson } from '../helpers/DataHelpers';

const listTasks = getDataFromJson("testdata/tasks.json", "tasks");

test.beforeEach(async({todoPage})=>{
    await todoPage.goToApp();
})

test("Add new task", async({todoPage})=>{
    await todoPage.addNewTask("setup automation framework");
    await todoPage.verifyNewTaskAdded("setup automation framework");
})

test("Mark task as completed", async({todoPage}) =>{
    for(const task of listTasks){
        await todoPage.addNewTask(task);
    }
    await todoPage.markTaskAsCompleted(listTasks[0]);
    await todoPage.verifyTaskIsMarkedAsCompleted(listTasks[0]);
})

test("Delete a task", async({todoPage})=>{
     for(const task of listTasks){
        await todoPage.addNewTask(task);
    }
    await todoPage.deleteATask(listTasks[1]);
    await todoPage.verifyTaskIsDeleted(listTasks[1]);

})