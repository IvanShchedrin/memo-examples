import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';

import Memo from './examples/Memo';
import UseCallback from './examples/UseCallback';
import UseMemo from './examples/UseMemo';
import UseRef from './examples/UseRef';
import ShouldComponentUpdate from './examples/ShouldComponentUpdate';
import PureComponent from './examples/PureComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

const LINKS = [{
  path: '/memo',
  name: 'memo',
  element: <Memo title="Apples counter" />,
}, {
  path: '/callback',
  name: 'useCallback',
  element: <UseCallback />,
}, {
  path: '/use-memo',
  name: 'useMemo',
  element: <UseMemo />,
}, {
  path: '/use-ref',
  name: 'useRef',
  element: <UseRef />
}, {
  path: '/should-component-update',
  name: 'shouldComponentUpdate',
  element: <ShouldComponentUpdate title="Apples counter with shouldComponentUpdate" />,
}, {
  path: '/pure-component',
  name: 'PureComponent',
  element: <PureComponent title="Apples counter with PureComponent" />,
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
  <>
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
  </>
);
