import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages Import
import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/AboutPage";
import ProgramsPage from "../pages/ProgramsPage";
import GalleryPage from "../pages/GalleryPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import ComingSoonPage from "../pages/ComingSoonPage";
import Blog from "../pages/Blog";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/programs",
      element: <ProgramsPage />,
    },
    {
      path: "/gallery",
      element: <GalleryPage />,
    },
    {
      path: "/blog",
      element: <BlogPage />,
    },
    {
      path: "/blog-details/:blogId",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/coming-soon",
      element: <ComingSoonPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
