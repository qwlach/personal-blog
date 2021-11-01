import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './container/home-page';
import './index.css';

// const HomePage = React.lazy(() => import('./container/home-page'));

// interface HomeProps {
//   component: React.FC;
// }

// function WrapperComponent(props: HomeProps) {
//   return <React.Suspense fallback={<div>Loading...</div>}>{props.component}</React.Suspense>;
// }

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
