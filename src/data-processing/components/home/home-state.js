import {observable} from 'mobx';

export class HomeState {
	@observable count = 2;

	//computed values cannot change state, simply derived from state
    @computed get multiply2(){
    	return this.count*2;
    }
    @compited get getValue(){
    	return this.multiply2();

    }
}