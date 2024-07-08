import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { navArray } from "./navigation";
import Layout from "../layouts/Layout";
import NotFound from "../pages/NotFound";

const Router = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      navArray.map((r) => (
        <Route path="/" element={<Layout />}>
          <Route path={r.path} element={r.element} />

          <Route path="*" element={<NotFound />}/>
        </Route>
      ))
    )
  );

  return <RouterProvider router={routes} />;
};

export default Router;
