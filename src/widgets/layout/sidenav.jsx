import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon, PresentationChartBarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Avatar,
  Button,
  IconButton,
  Typography
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import { List, ListItem } from "@mui/material";
import { useState } from "react";

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const [openMenu, handleOpenMenu] = useState('');
  const { sidenavColor, sidenavType, openSidenav } = controller;

  const handleToggleMenu = (menuId) => {
    if (menuId === openMenu) {
      handleOpenMenu('');
    } else {
      handleOpenMenu(menuId)
    }
  }
  console.log(openMenu)
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 overflow-y-auto",
    white: "bg-white shadow-lg overflow-y-auto",
    transparent: "bg-transparent overflow-y-auto",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div
        className={`relative border-b ${sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
          }`}
      >
        <Link to="/" className="flex items-center gap-4 py-4 px-8">
          <Avatar src={brandImg} size="sm" />
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            {brandName}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path, dontShowToShidebar, items }) => (
              !dontShowToShidebar &&
              <li key={name}>
                {
                  items ?
                    <Accordion
                      open={openMenu === name}
                      icon={
                        <ChevronDownIcon
                          strokeWidth={2.5}
                          className={`mx-auto h-4 w-4 transition-transform ${openMenu === name ? "rotate-180" : ""}`}
                        />
                      }
                    >
                      {console.log(openMenu, name)}
                      <ListItem className="p-0" selected={openMenu == name}>
                        <AccordionHeader onClick={() => handleToggleMenu(name)} className="border-b-0 p-3">
                          <Button
                            variant={openMenu === name ? "gradient" : "text"}
                            color={
                              openMenu === name
                                ? sidenavColor
                                : sidenavType === "dark"
                                  ? "white"
                                  : "blue-gray"
                            }
                            className="flex items-center gap-4 px-4 capitalize"
                            fullWidth
                          >
                            {icon}
                            <Typography
                              color="inherit"
                              className="font-medium capitalize"
                            >
                              {name}
                            </Typography>
                          </Button>
                        </AccordionHeader>
                      </ListItem>
                      <AccordionBody className="py-1">
                        <List className="p-0">
                          {
                            items.map((echItem) => {
                              return (
                                <ListItem>
                                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                  {/* {echItem.name} */}
                                  <NavLink to={`/${layout}${echItem.path}`}>
                                  {({ isActive }) => (
                                    <Typography
                                      // color="inherit"
                                      color={
                                        isActive
                                          ? sidenavColor
                                          : sidenavType === "dark"
                                            ? "white"
                                            : "blue-gray"
                                      }
                                      className="font-medium capitalize"
                                    >
                                      {echItem.name}
                                    </Typography>
                                  )}
                                </NavLink>
                                </ListItem>
                              )
                            })
                          }
                        </List>
                      </AccordionBody>
                    </Accordion> :
                    <NavLink onClick={() => handleToggleMenu(name)} to={`/${layout}${path}`}>
                      {({ isActive }) => (
                        <Button
                          variant={isActive ? "gradient" : "text"}
                          color={
                            isActive
                              ? sidenavColor
                              : sidenavType === "dark"
                                ? "white"
                                : "blue-gray"
                          }
                          className="flex items-center gap-4 px-4 capitalize"
                          fullWidth
                        >
                          {icon}
                          <Typography
                            color="inherit"
                            className="font-medium capitalize"
                          >
                            {name}
                          </Typography>
                        </Button>
                      )}
                    </NavLink>
                }
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/Plogo.png",
  brandName: "Prologis Technology",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
