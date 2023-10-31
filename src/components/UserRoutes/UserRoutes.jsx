import { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Redirect from "../Redirect";

const UserRoutes = ({ pageInformation }) => {
  const routes = pageInformation.map(({ id, path }) => {
    const Component = lazy(() => import(`../../${path}`));

    return <Route key={id} path={`/${id}`} element={<Component />} />;
  });

  const firstRoute = pageInformation.find(({ order }) => order === 0).id;

  console.log(firstRoute);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Redirect firstRoute={firstRoute} />} />
        {routes}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
