import components from '..';

describe('components theme', () => {
  it('should be defined', () => {
    expect(components).toBeDefined();
    expect(components).toMatchSnapshot();
  });
});
