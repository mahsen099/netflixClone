import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI
           "
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://occ-0-116-114.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFO4h2_Zipe6OODRZ0Ie4xq5MsUKp2k7ce6uto52e4V3trctvyzbI-zEz-xuVpOqtqg9tFJAJICYiAfaZa2v9_hvsqA.png?r=b97"
        alt="Avatar logo"
      />
      <div class="menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#documentary">Documentaries</a>
          </li>
          <li>
            <a href="#movies">Movies</a>
          </li>
          <li>
            <a href="#trending">New&Popular</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
