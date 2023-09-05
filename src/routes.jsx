import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications, IMPCUSTOMER, EXPModal, EXPCUSTOMER } from "@/pages/dashboard";
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
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Modal",
        path: "/import/Modal",
        element: <Modal />,
        dontShowToShidebar: true
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Modal",
        path: "/export/EXPModal",
        element: <EXPModal />,
        dontShowToShidebar: true
      },
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
        dontShowToShidebar: true
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "modorg",
        path: "/import/IMPCUSTOMER",
        element: <IMPCUSTOMER />,
        dontShowToShidebar: true
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "modorg",
        path: "/export/EXPCUSTOMER",
        element: <EXPCUSTOMER />,
        dontShowToShidebar: true
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
        items: [
          {
            name: "Dashboard",
            path: "/home",
            // element: <Home />,
          },
          {
            name: "Job Creation",
            path: "/createjob/jobimport",
            element: <Home />,
          },
          {
            name: "Process",
            path: "/import/import",
            element: <Home />,
          },
        ]
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
      // {
      //   icon: <HomeIcon {...icon} />,
      //   name: "Menu",
      //   items: [
      //     {
      //       name: "Sub Menu1",
      //       path: "/home1",
      //       element: <Home />,
      //     },
      //     {
      //       name: "Sub Menu2",
      //       path: "/home2",
      //       element: <Home />,
      //     }
      //   ]
      // },
      // {
      //   icon: <HomeIcon {...icon} />,
      //   name: "Menu1",
      //   items: [
      //     {
      //       name: "Sub Menu1",
      //       path: "/home3",
      //       element: <Home />,
      //     },
      //     {
      //       name: "Sub Menu2",
      //       path: "/home4",
      //       element: <Home />,
      //     }
      //   ]
      // }
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
