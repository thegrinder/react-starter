import components from '../components';

describe('components theme', () => {
  it('should be defined', () => {
    expect(components).toBeDefined();
    expect(components).toMatchSnapshot();
  });
});
