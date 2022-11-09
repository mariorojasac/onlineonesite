import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import svg from "./landing/oop3.svg";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar className="bg-black" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <a href="/" rel="noreferrer">
            {/* <NavbarBrand>Online One</NavbarBrand> */}
            <img src={svg} alt="" srcset="" className="w-3/12" />
          </a>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
            <NavLink href="/" rel="noreferrer" ripple="light">
                <Icon name="apps" size="2xl" />
                &nbsp;Home
              </NavLink>
              <NavLink href="/profile" rel="noreferrer" ripple="light">
                <Icon name="description" size="2xl" />
                &nbsp;About
              </NavLink>
              <NavLink href="/login" rel="noreferrer" ripple="light">
                <Icon name="apps" size="2xl" />
                &nbsp;Services
              </NavLink>
              {/* <div className="text-white">
                  <Dropdown
                    color="transparent"
                    size="sm"
                    buttonType="link"
                    buttonText={
                      <div className="py-2.5 font-medium flex items-center">
                        <Icon name="view_carousel" size="2xl" color="white" />
                        <span className="ml-2">Templates</span>
                      </div>
                    }
                    ripple="light"
                  >
                    <Link to="/">
                      <DropdownItem color="lightBlue">Landing</DropdownItem>
                    </Link>
                    <Link to="/profile">
                      <DropdownItem color="lightBlue">About</DropdownItem>
                    </Link>
                    <Link to="/login">
                      <DropdownItem color="lightBlue">Services</DropdownItem>
                    </Link>
                    <Link to="/register">
                      <DropdownItem color="lightBlue">Projects</DropdownItem>
                    </Link>
                  </Dropdown>
                </div> */}
              {/* <NavLink href="/register" rel="noreferrer" ripple="light">
                <Icon family="font-awesome" name="fab fa-github" size="xl" />
                &nbsp;Projects
              </NavLink> */}
              {/* <NavLink
                href=""
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                Portal
              </NavLink> */}
              <a
                href="mailto:mariorojas.ac@gmail.com?subject=New%20Website%20Development%20Request"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  color="transparent"
                  className="bg-white text-black ml-4"
                  ripple="dark"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
