import { Page } from "@playwright/test";
import { LeftMenuComponents } from "./components/leftMenuComponents";
import { TopMenuComponents } from "./components/topMenuComponents";

export class HomePage{
    private leftMenuComponent: LeftMenuComponents
    private topMenuComponent: TopMenuComponents
    private page: Page

    constructor(page:Page){
        this.page = page
        this.leftMenuComponent = new LeftMenuComponents(page)
        this.topMenuComponent = new TopMenuComponents(page)   
    }

    
    get getLeftMenuComponent(){
        return this.leftMenuComponent
    }

    get getTopMenuComponent(){
        return this.topMenuComponent
    }


}