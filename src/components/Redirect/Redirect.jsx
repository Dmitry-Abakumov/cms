import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Redirect = ({ firstRoute }) => {
  const navigate = useNavigate(`/${firstRoute}`);
  useEffect(() => {
    navigate(`/${firstRoute}`);
  }, [navigate, firstRoute]);

  return <></>;
};

export default Redirect;
