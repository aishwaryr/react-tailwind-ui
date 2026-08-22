import { Navigate, createBrowserRouter } from "react-router";

import { CreateIssuePage } from "@/pages/create-issue-page";
import { IssueDetailsPage } from "@/pages/issue-details-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/issues/new" replace />,
  },

  {
    path: "/issues/new",
    element: <CreateIssuePage />,
  },
  {
    path: "/issues/:id",
    element: <IssueDetailsPage />,
  },
]);
