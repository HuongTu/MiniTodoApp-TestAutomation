import { Page, Locator } from "@playwright/test";
import { expect } from "playwright/test";

export class TodoPage{
    private page: Page;
    private input_newTask: Locator;
    private btn_addTask: Locator;
    private li_listTask: Locator;

    constructor(page: Page){
        this.page = page;
        this.input_newTask = this.page.locator('#taskInput');
        this.btn_addTask = this.page.locator('#addBtn');
        this.li_listTask = this.page.locator('#taskList').locator('li');
    }

    async goToApp(){
        await this.page.goto('/');
        await expect(this.page).toHaveTitle('SmartOSC Automation Test To-Do App')
    }

    async addNewTask(newTask: string){
        await this.input_newTask.fill(newTask);
        await this.btn_addTask.click();
    }

    async verifyNewTaskAdded(expectedTask: string){
        expect(this.li_listTask.filter({hasText: expectedTask})).toBeVisible();
        const actualText = await this.li_listTask.filter({hasText: expectedTask}).textContent()
        expect(actualText).toMatch(expectedTask)
    }

    async markTaskAsCompleted(task){
        await this.li_listTask.filter({hasText: task}).getByRole("button", {name: "Complete"}).click();
    }

    async verifyTaskIsMarkedAsCompleted(task: string){
        const className = await this.li_listTask.filter({hasText: task}).getAttribute("class")
        expect(className).toMatch('completed');
    }

    async deleteATask(task: string){
        await this.li_listTask.filter({hasText: task}).getByRole("button", {name: "Delete"}).click();
    }

    async verifyTaskIsDeleted(task: string){
      await expect(this.li_listTask.filter({hasText: task})).not.toBeVisible();
    }

}