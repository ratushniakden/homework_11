import reset from './css/reset.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const SignInForm = React.lazy(() => import('./components/forms/SignInForm'));
const LoginForm = React.lazy(() => import('./components/forms/LoginForm'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={SignInForm} />
          <Route path="/login" component={LoginForm} />
          <Route path={['/', '/signin']} component={SignInForm} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
