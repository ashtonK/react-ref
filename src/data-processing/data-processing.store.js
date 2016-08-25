import {observable} from 'mobx';
import {AuthStore} from './stores/auth.store';

export class DataProcessingStore {
    @observable test = null;

    authStore = new AuthStore();

    init(){
        this.test = 'Hello';
        this.authStore.init();
    }

}

