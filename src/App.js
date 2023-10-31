import { Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import pageInformation from "./page-information.json";

const App = () => {
  const navbar = pageInformation
    .sort(({ order: o1 }, { order: o2 }) => o1 - o2)
    .map(({ id, title }) => {
      return (
        <NavLink key={id} to={`/${id}`}>
          {title}
        </NavLink>
      );
    });

  const routes = pageInformation.map(({ id, path }) => {
    const Component = lazy(() => import(`./${path}`));

    return <Route key={id} path={`/${id}`} element={<Component />} />;
  });

  return (
    <>
      <div>{navbar}</div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>{routes}</Routes>
      </Suspense>
    </>
  );
};

export default App;
