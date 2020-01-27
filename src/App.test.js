/**Testing Components of an app
 * @module Input/test
 * @module Profile/test
 */

import React from 'react';
import { shallow } from 'enzyme';
import Input from "./Components/Input";
import Profile from "./Components/Profile";


/**
 * Test to check the component
 * @name TestInputComponent
 * @function
 * @inner
 * @param {string} TestComponents - Name of test group
 */



describe('Input component',  () => {
  /**
   * It should check wether the function is giving object.
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   *@param {callback} middleware - async function
   */

    it('getDetails is returning object if input is correct.', async () => {
        const wrapper = shallow(<Input />);
        const result = await  wrapper.instance().getDetails("india")
        const status = result.status;
        expect(status).toBe(200)
        expect(typeof result).toEqual('object');
    });

  /**
   * It should check wether function is returning error message.
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - async
   */

    it('getDetails should show error if input is not given',async ()=>{
      const wrapper = shallow(<Input />);
      const result = await wrapper.instance().getDetails();
      const status = result.status;
      expect(status).toBe(400);
    })
});


/**
 * Test to check the component
 * @name TestProfileComponent
 * @function
 * @inner
 * @param {string} TestComponents - Name of test group
 */
describe("Profile Component",()=>{

  /**
   * It should check wether function is returning an object.
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - async
   */

  it("getResponseOfApi function is returning object if input is correct",async ()=>{
    const wrapper = shallow(<Profile/>);
    const result = await wrapper.instance().getResponseOfApi("komal");
    const status = result.status;
    expect(status).toBe(200);
    expect(typeof result).toBe('object')
  });


    /**
   * It should check wether function is returning object.
   * @function
   * @inner
   * @param {string} description - string explaining what test should do
   * @param {callback} middleware - async
   */

  it("getResponseOfApi function is returning error status code",async ()=>{
    const wrapper = shallow(<Profile/>);
    const result = await wrapper.instance().getResponseOfApi();
    const status = result.status;
    expect(status).toBe(200);
    expect(typeof result).toBe('object')
  });
})