import {observable} from 'mobx';
import {AuthStore} from './stores/auth.store';
import {ReviewStore} from './stores/review.store';

export class DataProcessingStore {
    @observable test = null;
    @observable test2 ='HEHEH';

    authStore = new AuthStore();
    reviewStore = new ReviewStore();

    init(){
        this.test = 'Hello';
        this.authStore.init();
        this.reviewStore.init();
    }

}

