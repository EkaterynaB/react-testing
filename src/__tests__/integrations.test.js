import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';

import App from 'App';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><App/></Root>);
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetch1'}, { name: 'Fetch2'}, { name: 'Fetch3'}]
  })
});

afterEach(() => {
  wrapped.unmount();
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  wrapped.find('.fetch-comments').simulate('click');
  
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(3);
    done();
  });
  
});
