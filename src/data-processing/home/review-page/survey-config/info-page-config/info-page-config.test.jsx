import React from 'react';
import {shallow} from 'enzyme';
import InfoPageConfig from './info-page-config';
import {Provider} from 'mobx-react';

describe('<InfoPageConfig />', ()=> {
    beforeEach(()=> {
        this.store = {};
    });


    it('should render correctly', ()=> {
        const dom = shallow(
            <Provider store={this.store}>
                <InfoPageConfig />
            </Provider>
        );

        expect(dom).to.have.length(1);
    });

});
