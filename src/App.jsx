import Navbar from "./components/Navbar";
import UserRoutes from "./components/UserRoutes";

import pageInformation from "./page-information.json";

const App = () => {
  return (
    <>
      <Navbar pageInformation={pageInformation} />
      <UserRoutes pageInformation={pageInformation} />
    </>
  );
};

export default App;
