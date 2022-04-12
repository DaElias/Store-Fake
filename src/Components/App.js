import React from "react";
import { Helmet } from "react-helmet";
import AppRoutes from "../routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
function App() {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Fake Store</title>
        <meta name="author" content="David Cerchiaro" />
        <meta
          name="description"
          content="El área de aprendizaje de MDN pretende proporcionar a los recién llegados a la web todo lo que deben saber para empezar a desarrollar páginas web y aplicaciones web."
        />
      </Helmet>
      <AppRoutes />;
    </>
  );
}

export default App;
