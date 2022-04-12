import React from "react"
import Link from "next/link"
import { Navbar, Nav, Container, Button } from "react-bootstrap"

import ActiveLink from "../ActiveLink"

import menu_new from "../../data/menu_new.json"

const Header = (props) => {
  const menu = menu_new

  return (
    <header
      className={`header ${props.headerClasses ? props.headerClasses : ""}`}
    >
      <Navbar
        variant={props.nav.light ? "light" : "dark"}
        bg={props.nav.color ? props.nav.color : "white"}
        fixed={props.nav.fixed ? props.nav.fixed : "top"}
        expand="lg"
        className={props.nav.classes ? props.nav.classes : ""}
      >
        <Container fluid>
          <div className="d-flex align-items-center">
            {/* NAVBAR BRAND */}
            <Link href="/" passHref>
              <Navbar.Brand className="py-1">
                {/* LOGO IMAGE GOES HERE */}

                {/* <img
                  src="/theme-test-1/content/svg/logo.svg"
                  width="138"
                  height="31"
                  alt="Directory logo"
                /> */}

                <img
                  src="/theme-test-1/content/img/photo/lrfp-logo-italic-transparent.png"
                  width="160rem"
                  alt="Directory logo"
                />

                {/* <h4 className="hero-heading mb-0">Light RFP</h4> */}
              </Navbar.Brand>
            </Link>
            {/* END NAVBAR BRAND */}
          </div>

          <Nav.Item className="mt-lg-0 d-md-inline-block d-lg-inline-block d-xl-inline-block">
            <ActiveLink activeClassName="active" href={menu.betaButton.link}>
              <Button>
                {menu.betaButton.text}
              </Button>
            </ActiveLink>
          </Nav.Item>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
