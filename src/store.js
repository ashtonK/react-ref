import {DataProcessingStore} from './data-processing/data-processing.store';
<<<<<<< HEAD

=======
import {AuthStore} from './data-processing/stores/auth.store';
import authService from './data-processing/services/auth.service';
import {browserHistory} from 'react-router';
>>>>>>> 5a3e9798552f81175525be04cb4bb34033c0e9e4

class Store {
    title = 'React MobX Seed';
    dataProcessing = new DataProcessingStore();

    authStore = new AuthStore();

    init() {
        this.dataProcessing.init();
        this.authStore.init();
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
