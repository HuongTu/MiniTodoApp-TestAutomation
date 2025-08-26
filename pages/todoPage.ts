import { Page } from "@playwright/test";

export class TodoPage{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

}