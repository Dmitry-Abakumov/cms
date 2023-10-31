import { lazy, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const UserRoutes = ({ pageInformation }) => {
  const navigate = useNavigate();
  const routes = pageInformation.map(({ id, path }) => {
    const Component = lazy(() => import(`../../${path}`));

    return <Route key={id} path={`/${id}`} element={<Component />} />;
  });

  const firstRoute = pageInformation.find(({ order }) => order === 0).id;

  console.log(firstRoute);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route exact path="/" render={() => navigate(`/${firstRoute}`)} />
        {routes}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
