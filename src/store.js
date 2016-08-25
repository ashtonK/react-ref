import {DataProcessingStore} from './data-processing/data-processing.store';


class Store {
    title = 'React MobX Seed';
    dataProcessing = new DataProcessingStore();
    init() {
        this.dataProcessing.init();
    }
}

const store = new Store();
store.init();
export {store};
