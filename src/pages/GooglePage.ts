import { pageObject } from "../decorators/PageObject";

@pageObject('www.google.com')
class GooglePage {
    constructor(){}
}

export default GooglePage;