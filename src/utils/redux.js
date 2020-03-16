import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.rooms,
);


export {
  middleware
};
