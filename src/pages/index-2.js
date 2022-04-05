import React from "react"
import Link from "next/link"

import { Container, Row, Col, Button } from "react-bootstrap"

import Swiper from "../components/Swiper"

import SearchBar from "../components/SearchBar"
import PopularCities from "../components/PopularCities"
import Discover from "../components/Discover"
import Instagram from "../components/Instagram"
import Brands from "../components/Brands"

import data from "../data/index2.json"
import geoJSON from "../data/restaurants-geojson.json"
import Image from "../components/CustomImage"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Restaurants",
    },
  }
}

const Index2 = () => {
  return (
    <React.Fragment>
      {data.hero && (
        <section className="d-flex align-items-center dark-overlay">
          <Image
            src={`/content/${data.hero.img}`}
            layout="fill"
            className="bg-image"
            alt="Hero image"
            loading="eager"
            priority={true}
          />
          <Container className="py-6 py-lg-7 text-white overlay-content text-center">
            <Row>
              <Col xl="10" className="mx-auto">
                <h1 className="display-3 fw-bold text-shadow">
                  {data.hero.title}
                </h1>
                <p className="text-lg text-shadow">{data.hero.subTitle}</p>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <Container>
        <SearchBar
          options={data.searchOptions}
          className="rounded p-3 p-lg-4 position-relative mt-n5 z-index-20"
          halfInputs
          id="index-2-searchbar"
          btnMb="0"
        />
      </Container>
      {data.popularCities && (
        <PopularCities
          title={data.popularCities.title}
          subTitle={data.popularCities.subTitle}
        />
      )}
      {data.discover && (
        <Discover
          className="pt-4 pb-6"
          title={data.discover.title}
          subTitle={data.discover.subTitle}
          blocks={data.discover.blocks}
        />
      )}

      {data.popular && (
        <section className="py-6 bg-gray-100">
          <Container>
            <div className="text-center pb-lg-4">
              <p className="subtitle text-secondary">{data.popular.subTitle}</p>
              <h2 className="mb-5">{data.popular.title}</h2>
            </div>
          </Container>
          <Container fluid>
            <Swiper
              className="swiper-container-mx-negative items-slider-full px-lg-5 pt-3 pb-5"
              perView={1}
              spaceBetween={20}
              loop
              roundLengths
              md={2}
              lg={3}
              xl={4}
              xxl={5}
              xxxl={6}
              data={geoJSON.features}
              restaurantCards
              pagination
            />

            <div className="text-center mt-5">
              <Link href={data.popular.buttonLink} passHref>
                <Button variant="outline-primary">{data.popular.button}</Button>
              </Link>
            </div>
          </Container>
        </section>
      )}
      {data.travel && (
        <section className="py-6 py-lg-7 position-relative dark-overlay">
          <Image
            src={`/content/img/photo/${data.travel.img}`}
            layout="fill"
            className="bg-image"
            alt={data.travel.title}
          />
          <Container>
            <div className="overlay-content text-white py-lg-5 text-center">
              <p className="subtitle text-white letter-spacing-4 mb-4">
                {data.travel.subtitle}
              </p>
              <h3 className="display-3 fw-bold text-serif text-shadow mb-5">
                {data.travel.title}
              </h3>
              <p className="lead text-shadow mb-5">{data.travel.content}</p>
              <Link href={data.travel.buttonLink} passHref>
                <Button>{data.travel.button}</Button>
              </Link>
            </div>
          </Container>
        </section>
      )}
      {data.brands && (
        <Brands title={data.brands.title} brands={data.brands.brands} />
      )}

      {data.bottomBlock && (
        <section className="py-6 bg-gray-100">
          <Container>
            <Row>
              <Col lg="6" className="mb-5 mb-lg-0 text-center text-lg-start">
                <p className="subtitle text-secondary">
                  {data.bottomBlock.title}
                </p>
                <p className="text-lg">{data.bottomBlock.subTitle}</p>
                <p className="text-muted mb-0">{data.bottomBlock.content}</p>
              </Col>
              <Col
                lg="6"
                className="d-flex align-items-center justify-content-center"
              >
                <div className="text-center">
                  <p className="mb-2">
                    <Link href={data.bottomBlock.buttonLink} passHref>
                      <Button size="lg">{data.bottomBlock.button}</Button>
                    </Link>
                  </p>
                  <p className="text-muted text-small">
                    {data.bottomBlock.small}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      <Instagram />
    </React.Fragment>
  )
}

export default Index2
