import { Navigate, Route, Routes as Router } from 'react-router-dom';

import Home from 'pages/Home';

import { BIBLIOGRAPHY, HOME } from 'utils/Constants';
import Main from 'pages/Home/Main';
import Bibliography from 'pages/Home/Bibliography';

const Routes = () => {
  return (
    <Router>
      <Route path={HOME} element={<Home />}>
        <Route path={HOME} element={<Main />} />

        <Route path={BIBLIOGRAPHY} element={<Bibliography />} />

        <Route path="*" element={<Navigate to={HOME} replace />} />
      </Route>

      <Route path="*" element={<Navigate to={HOME} replace />} />
    </Router>
  );
};

export default Routes;
