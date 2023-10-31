import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import pageInformation from "../page-information.json";

import getComponentPaths from "./utils/getComponentPaths";

const paths = getComponentPaths(pageInformation);

const HomePage = lazy(() => import(`./${paths.homePage}`));
const LoginPage = lazy(() => import(`./${paths.loginPage}`));
const RegisterPage = lazy(() => import(`./${paths.registerPage}`));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {pageInformation.map(({ id, title, order }) => {
          return <></>;
        })}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
