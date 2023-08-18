import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import NavbarIcon from "../../../assets/icons/burger-icon.svg";
import NavigationConfig from "../../../config/NavigationConfig";
import { OwnerDetail } from "../../../config/OwnerDetail";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="pt-3">
      <Navbar color="faded" dark expand="md">
        <NavbarBrand href="/" className="me-auto" style={{fontFamily: 'cursive', fontSize: '30px'}}>
          &lt; <span id="brand">{OwnerDetail.firstName} </span>/&gt;
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2">
          <img src={NavbarIcon}></img>
        </NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ms-auto" navbar>
            {Array.isArray(NavigationConfig) &&
              NavigationConfig.map((item) => (
                <NavItem>
                  <Link to={item.path} className="nav-link ms-3">
                    {item.title}
                  </Link>
                </NavItem>
              ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
