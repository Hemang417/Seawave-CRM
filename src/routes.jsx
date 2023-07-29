import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { CreateJob } from "@/pages/dashboard/createjob/createJob";
import { Organization } from "@/pages/dashboard/organization/organization";
import { MODORG } from "@/pages/dashboard/organization/MODORG";
import { Import } from "@/pages/dashboard/import/import";
import { Modal } from "@/pages/dashboard/import/Modal";
import { Export } from "@/pages/dashboard/export/export";
import { Transport } from "@/pages/dashboard/transport/transport";
import { Freight } from "@/pages/dashboard/freight/freight";



import { SignIn, SignUp } from "@/pages/auth";
// import Freight from "./pages/dashboard/importModal";

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
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: "Modal",
      //   path: "/import/Modal",
      //   element: <Modal />,
      // },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Organization",
        path: "/organization/Organization",
        element: <Organization />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Create Job",
        path: "/create job/CreateJob",
        element: <CreateJob />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "modorg",
        path: "/organization/MODORG",
        element: <MODORG />,
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
        path: "/import/import",
        element: <Import />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Export",
        path: "/export/export",
        element: <Export />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Transport",
        path: "/transport/transport",
        element: <Transport />,
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
