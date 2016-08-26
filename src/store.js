import {DataProcessingStore} from './data-processing/data-processing.store';
import {AuthStore} from './data-processing/stores/auth.store';
import {ReviewStore} from './data-processing/stores/review.store';
import {ReportStore} from './data-processing/stores/report.store';
import authService from './data-processing/services/auth.service';
import {browserHistory} from 'react-router';

class Store {
    title = 'React MobX Seed';
    dataProcessing = new DataProcessingStore();

    authStore = new AuthStore();
    reviewStore = new ReviewStore();
    reportStore = new ReportStore();

    init() {
        this.dataProcessing.init();
        this.authStore.init();
        this.reviewStore.init();
        this.reportStore.init();
        this.checkLogin();
    }
    checkLogin(){
        authService.observeAuthChanges(firebaseUser => {
            if(firebaseUser){
                this.authStore.setUser(firebaseUser).then(() => {
                    if(this.authStore.user.role == 'admin'){
                        browserHistory.push('/processing');
                    }
                });
            } else{
                browserHistory.push('/');
            }
        });
    }
}


const store = new Store();
store.init();
export {store};
