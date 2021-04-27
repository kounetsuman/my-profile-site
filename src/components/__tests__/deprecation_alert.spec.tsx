import React from 'react';
import renderer from 'react-test-renderer';
import { DeprecationAlert } from '../deprecation_alert';

const ONE_DAY = 24 * 60 * 60 * 1000;
const ONE_MONTH = 32 * ONE_DAY;
const ONE_YEAR = 366 * ONE_DAY;

describe('DeprecationAlert', () => {
    it('today', () => {
        const beforeOneMonth = new Date().toISOString();
        const component = renderer.create(<DeprecationAlert date={beforeOneMonth} />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('one month ago', () => {
        const beforeOneMonth = new Date(new Date().getTime() - ONE_MONTH).toISOString();
        const component = renderer.create(<DeprecationAlert date={beforeOneMonth} />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('one year ago', () => {
        const beforeOneYear = new Date(new Date().getTime() - ONE_YEAR).toISOString();
        const component = renderer.create(<DeprecationAlert date={beforeOneYear} />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});
