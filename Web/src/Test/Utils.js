import checkPropTypes from 'check-prop-types';

export const checkProps = (component, expectProps) => {
    const propsErr = checkPropTypes(component.protoTypes, expectProps, 'props', component.name);
    return propsErr;
}

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}