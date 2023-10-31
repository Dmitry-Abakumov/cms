import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { TailSpin } from "react-loader-spinner";

import Redirect from "../Redirect";

const UserRoutes = ({ pageInformation }) => {
  const routes = pageInformation.map(({ id, path }) => {
    const Component = lazy(() => import(`../../${path}`));

    return <Route key={id} path={`/${id}`} element={<Component />} />;
  });

  const firstRoute = pageInformation.find(({ order }) => order === 0).id;

  return (
    <Suspense
      fallback={
        <div className="spinnerWrap">
          <TailSpin
            height="80"
            width="80"
            color="#2a303c"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{ marginRight: "auto", marginLeft: "auto" }}
            wrapperClass=".spinner"
            visible={true}
          />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Redirect firstRoute={firstRoute} />} />
        {routes}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
