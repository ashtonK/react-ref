import {observable} from 'mobx';

export class AuthStore {
    @observable authTest = null;

    init(){
        this.authTest = 'Hello Login Screen';
    }

}

