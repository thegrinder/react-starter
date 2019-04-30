// import React from 'react';

// import { render } from '../../../helpers/test-utils';
// import { User } from '..';

// const id = 'id';
// const fetchUser = jest.fn();
// const requiredProps = {
//   fetchUser,
//   loading: false,
//   match: {
//     params: {
//       id,
//     },
//   },
//   user: {
//     name: 'name',
//     username: 'username',
//     email: 'email@email.com',
//     phone: '132456776',
//   },
// };

// const renderComponent = (props = {}) => render(
//   <User {...requiredProps} {...props} />,
// );

// describe('<User />', () => {
//   it('should render correctly', () => {
//     const { container: { firstChild } } = renderComponent();
//     expect(firstChild).toBeDefined();
//     expect(firstChild).toMatchSnapshot();
//   });

//   it('should render the spinner if loading flag set to true', () => {
//     const { container: { firstChild }, getByLabelText } = renderComponent({ loading: true });
//     const spinnerElement = getByLabelText('loading...');
//     expect(firstChild).toContainElement(spinnerElement);
//   });

//   it('should render the spinner if user is not defined', () => {
//     const { container: { firstChild }, getByLabelText } = renderComponent({ user: undefined });
//     const spinnerElement = getByLabelText('loading...');
//     expect(firstChild).toContainElement(spinnerElement);
//   });

//   it('should fetch user with a specific id on mount', () => {
//     renderComponent();
//     expect(fetchUser).toHaveBeenCalledWith(id);
//   });
// });
