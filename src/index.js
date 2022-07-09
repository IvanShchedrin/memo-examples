import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';

import HOC from './examples/HOC';
import Callback from './examples/Callback';

const root = ReactDOM.createRoot(document.getElementById('root'));

const LINKS = [{
  path: '/hoc',
  name: 'memo HOC',
  element: <HOC title="Apples counter" />,
}, {
  path: '/callback',
  name: 'useCallback',
  element: <Callback />,
}, {
  path: '/use-memo',
  name: 'useMemo',
  element: null,
}, {
  path: '/should-component-update',
  name: 'shouldComponentUpdate',
  element: null,
}, {
  path: '/pure-component',
  name: 'PureComponent',
  element: null,
}]

const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      {LINKS.map(({ path, name }) => (
        <Link to={path} key={path}>
          <span className={pathname === path ? 'nav-item--active' : ''}>
            {name}
          </span>
        </Link>
      ))}
    </nav>
  );
}

root.render(
  <React.StrictMode>
    <h1>React memo examples</h1>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="" element={<></>} />
        {LINKS.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
