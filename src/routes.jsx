import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications, Import, JobExport, Export, JobImport, CreateJob, Transport } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Freight from "./pages/dashboard/freight";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Create Job",
        path: "/createJob",
        element: <CreateJob />,
      },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "Create Job - Import",
      //   path: "/jobimport",
      //   element: <JobImport />,
      // },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "Create Job - Export",
      //   path: "/jobexport",
      //   element: <JobExport />,
      // },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Import",
        path: "/import",
        element: <Import />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Export",
        path: "/export",
        element: <Export />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Transport",
        path: "/transport",
        element: <Transport />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Freight",
        path: "/freight",
        element: <Freight />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Finances",
        path: "/finance",
        element: <Tables />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Marketing",
        path: "/notifactions",
        element: <Notifications />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "CRM",
        path: "/notifactions",
        element: <Notifications />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Profile",
        path: "/profile",
        element: <Profile />,
      },
      
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
