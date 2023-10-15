import { Navigate, Route, Routes as Router } from 'react-router-dom';

import Home from 'pages/Home';

import { HOME } from 'utils/Constants';

const Routes = () => {
  return (
    <Router>
      <Route path={HOME} element={<Home />} />

      <Route path="*" element={<Navigate to={HOME} replace />} />
    </Router>
  );
};

export default Routes;
