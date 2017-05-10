import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import Main from './components/Main';
import FourOFour from './components/FourOFour';

export default (
    <Route path="/" component={Layout}>
        <IndexRoute component={Main} />
        <Route path="*" component={FourOFour} />
    </Route>
);
