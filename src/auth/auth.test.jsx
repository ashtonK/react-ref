import React from 'react';
import {shallow} from 'enzyme';
import Auth from './auth';
import {Provider} from 'mobx-react';

describe('<Auth />', ()=> {
    beforeEach(()=> {
        this.store = {};
    });


    it('should render correctly', ()=> {
        const dom = shallow(
            <Provider store={this.store}>
                <Auth />
            </Provider>
        );

        expect(dom).to.have.length(1);
    });

});
