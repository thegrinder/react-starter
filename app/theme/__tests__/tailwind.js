import tailwind from '../tailwind';

describe('tailwind theme', () => {
  it('should be defined', () => {
    expect(tailwind).toBeDefined();
    expect(tailwind).toMatchSnapshot();
  });
});
