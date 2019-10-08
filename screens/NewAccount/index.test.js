import React from 'react';
import NewAccount from './index';
import 'react-native';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<NewAccount />).toJSON();
  expect(tree).toMatchSnapshot();
});