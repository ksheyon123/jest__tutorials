import React from "react";
import renderer from "react-test-renderer";
import Link from './Link';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  const { props } = tree as renderer.ReactTestRendererTree;
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
   props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});