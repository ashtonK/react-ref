import {observable} from 'mobx';

export class DataProcessingStore {
    @observable test = null;

    init(){
        this.test = 'Hello';
    }

}

