import React from "react"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"

import Swiper from "./Swiper"
import CardPoster from "./CardPoster"
import IndustryCardHolder from "./IndustryCardHolder"

import data from "../data/industries.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const Industries = (props) => {
  const { verticalMargin } = props
  const py = `py-${verticalMargin ? verticalMargin : 6}`
  return (
    <section className={`${py} ${props.greyBackground ? "bg-gray-100" : ""}`}>
      <Container>
        {/* <Row className="mb-5"> */}
        <Col md="8">
          {/* <p className="subtitle text-primary">{data.subTitle}</p> */}
          <h1 className="mb-4">{data.title}</h1>
        </Col>
        {/* <Col
            md="4"
            className="d-lg-flex align-items-center justify-content-end"
          >
            {data.buttonLink && (
              <Link href={data.buttonLink}>
                <a className="text-muted text-sm">
                  {data.button}
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="ms-2" />
                </a>
              </Link>
            )}
          </Col> */}
        {/* </Row> */}
        <IndustryCardHolder data={data.swiperItems} />
      </Container>
    </section>
  )
}

export default Industries
