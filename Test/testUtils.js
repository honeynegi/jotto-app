/**
 * Return node(s) with the given data-test attrribute
 * @param {ShallowWrapper} wrapper
 * @param {string} val  - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
