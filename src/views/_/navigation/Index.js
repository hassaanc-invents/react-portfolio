import React from "react";
import { Link } from "react-router-dom";
import NavigationConfig from "../../../config/NavigationConfig";

const Navigation = () => {
  return (
    <nav>
      <ul>
        {Array.isArray(NavigationConfig) &&
          NavigationConfig.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;