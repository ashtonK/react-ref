import {DataProcessingStore} from './data-processing/data-processing.store';
// import {GithubStore} from './github/github.store';

class Store {
    title = 'React MobX Seed';
    dataProcessing = new DataProcessingStore();
    // clock = new ClockStore();

    init() {
        this.dataProcessing.init();
        // this.clock.init();
    }
}

const store = new Store();
store.init();
export {store};
