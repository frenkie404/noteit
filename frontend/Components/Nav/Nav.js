import React from "react";
import { Link } from "react-router-dom";
import getIconPaths from "@utils/iconDetails";
import TextWithIcon from "../TextWithIcon";
import Links from "./Links";
import linksData from "./utils/linksData";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__wrap flex">
        <h2>
          <Link to="/" className="nav__home">
            NoteIT
          </Link>
        </h2>

        <div className="nav__items">
          <Links links={linksData} />
          <div className="nav__actions">
            <button
              type="button"
              className="btn btn--accent"
              data-trigger-type="add"
              data-trigger-target="loginOptions"
              data-trigger-action="loginOptions--visible"
            >
              <TextWithIcon
                textContent="Login"
                pathData={getIconPaths("login")}
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                iconWidth="1.5rem"
              />
            </button>
            <div className="nav__hamBurger" tabIndex="0"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
