const getComponentPaths = (pageInformation) => {
  let paths = {};

  pageInformation.forEach(({ id, path }) => {
    paths = {
      ...paths,
      [id]: paths,
    };
  });

  return paths;
};

export default getComponentPaths;
