import React from "react"
import Link from "next/link"
import Image from "../components/CustomImage"
import { Container, Row, Col, Card, Button, Breadcrumb } from "react-bootstrap"

import Swiper from "../components/Swiper"
import SearchBar from "../components/SearchBar"
import LastMinute from "../components/LastMinute"
import Guides from "../components/Guides"
import Instagram from "../components/Instagram"
import CardPost from "../components/CardPost"
import Support from "../components/Support"

import SwiperTestimonial from "../components/SwiperTestimonial"

import data from "../data/index.json"
import priceData from "../data/pricing_live.json"
import featuresData from "../data/features_live.json"
import blog from "../data/blog.json"
import Icon from "../components/Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons"
import Industries from "../components/Industries"

export async function getStaticProps() {
  return {
    props: {
      hideFooter: false,
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Homepage",
    },
  }
}

{/* {data.hero.img && (
          <Image
            src={`/content/img/photo/${data.hero.img}`}
            alt={data.hero.title}
            className="bg-image"
            loading="eager"
            layout="fill"
          />
        )} */}

  const Index = () => {
    const groupByN = (n, data) => {
      let result = []
      for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n))
      return result
  }

  const verticalMargins = 5;

  return (
    <React.Fragment>
      {/* <section className="hero-home">
        <Container className="py-6 py-md-7 text-white z-index-20">
          <Row>
            <Col xl="10">
              {data.hero && (
                <div className="text-center text-lg-start">
                  <p className="subtitle letter-spacing-4 mb-2 text-secondary text-shadow">
                    {data.hero.subTitle}
                  </p>
                  <h1 className="display-3 fw-bold text-shadow">
                    {data.hero.title}
                  </h1>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section> */}
      {data.topBlocks && (
        <section className="py-6 bg-gray-100">
          <Container>
            <div className="text-center pb-lg-4 mb-5">
              <h2 className="mb-2">{data.topBlocks.title}</h2>
              <p className="subtitle">
                {data.topBlocks.subTitle}
              </p>  
            </div>
            <Row>
              {data.topBlocks.blocks.map((block) => (
                <Col
                  key={block.title}
                  lg="4"
                  className="mb-3 mb-lg-0 text-center"
                >
                  <div className="px-0 px-lg-3">
                    <div className="icon-rounded bg-primary-light mb-3">
                      <Icon
                        icon={block.icon}
                        className="text-primary w-2rem h-2rem"
                      />
                    </div>
                    <h3 className="h5">{block.title}</h3>
                    <p className="text-muted">{block.content}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
      {/* <LastMinute greyBackground /> */}

      {/* *** PRICING *** */}
      <section className={`py-${verticalMargins}`}>
        <Container>
        <h1 className="hero-heading mb-4">{priceData.subtitle}</h1>
          <Row>
            {priceData.columns &&
              priceData.columns.map((column, index) => (
                <Col key={column.title} lg="6">
                  <Card
                    className={`mb-5 mb-lg-0 border-0 shadow`}
                  >
                    {/* {index === 1 && <div className="card-status bg-primary" />} */}
                    <Card.Body>
                      <h2 className="text-base subtitle text-center text-primary py-3">
                        {column.title}
                      </h2>
                      <p className="text-muted text-center">
                        <span className="h1 text-dark">{column.price}</span>
                        <span className="ms-2">/ contract</span>
                      </p>
                      <hr />
                      <ul className="fa-ul my-4">
                        {column.items.map((item) => (
                          <li
                            key={item.title}
                            className={`mb-3 ${
                              item.status ? "" : "text-muted"
                            }`}
                          >
                            {item.status ? (
                              <span className="fa-li text-primary">
                                <FontAwesomeIcon icon={faCheck} />
                              </span>
                            ) : (
                              <span className="fa-li">
                                <FontAwesomeIcon icon={faTimes} />
                              </span>
                            )}
                            {item.title}
                          </li>
                        ))}
                      </ul>
                      <div className="text-center">
                        {/* <Button href="#" variant="outline-primary">
                          Select
                        </Button> */}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
      
      {/* Industries Section */}
      <Industries verticalMargin={verticalMargins}/>

      {/* *** Features *** */}
      <section className={`py-${verticalMargins}`}>
        <Container>
          {featuresData.questionGroups &&
            featuresData.questionGroups.map((group) => {
              const groupedQuestions =
                group.questions && groupByN(2, group.questions)
              return (
                <div key={group.title} className="py-4">
                  <h2 className="mb-5 text-primary">{group.title}</h2>
                  <Row>
                    {groupedQuestions.map((questions) => (
                      <Col md="6" key={questions[0].title}>
                        {questions.map((question) => (
                          <React.Fragment key={question.title}>
                            <h5>{question.title}</h5>
                            <p className="text-muted mb-4">
                              {question.content}
                            </p>
                          </React.Fragment>
                        ))}
                      </Col>
                    ))}
                  </Row>
                </div>
              )
            })}
        </Container>
      </section>

      {/* *** SUPPORT SECTION *** */}
      <Support />
      {/* *** CALL TO ACTION *** */}
      {data.jumbotron && (
        <section className="py-7 position-relative dark-overlay">
          <Image
            src={`/content/${data.jumbotron.img}`}
            alt=""
            className="bg-image"
            layout="fill"
          />
          <Container>
            <div className="overlay-content text-white py-lg-5">
              <h3 className="display-3 fw-bold text-serif text-shadow mb-5">
                {data.jumbotron.title}
              </h3>
              <Link href={data.jumbotron.link} passHref>
                <Button variant="light">{data.jumbotron.button}</Button>
              </Link>
            </div>
          </Container>
        </section>
      )}
      {/* {data.testimonials && (
        <section className="py-7">
          <Container>
            <div className="text-center">
              <p className="subtitle text-primary">
                {data.testimonials.subTitle}
              </p>
              <h2 className="mb-5">{data.testimonials.title}</h2>
            </div>
            <SwiperTestimonial data={data.testimonials.swiperItems} />
          </Container>
        </section>
      )} */}
      {/* {blog.posts && (
        <section className="py-6 bg-gray-100">
          <Container>
            <Row className="mb-5">
              <Col md="8">
                <p className="subtitle text-secondary">
                  {data.blogPosts.subTitle}
                </p>
                <h2>{data.blogPosts.title}</h2>
              </Col>
              <Col
                md="4"
                className="d-md-flex align-items-center justify-content-end"
              >
                <Link href={data.blogPosts.buttonLink}>
                  <a className="text-muted text-sm">
                    {data.blogPosts.button}
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className="ms-2"
                    />
                  </a>
                </Link>
              </Col>
            </Row>
            <Row>
              {blog.posts.map((post, index) => {
                if (index <= 2)
                  return (
                    <Col
                      key={post.title}
                      lg="4"
                      sm="6"
                      className="mb-4 hover-animate"
                    >
                      <CardPost data={post} />
                    </Col>
                  )
              })}
            </Row>
          </Container>
        </section>
      )} */}

      {/* <Instagram /> */}
    </React.Fragment>
  )
}

export default Index
