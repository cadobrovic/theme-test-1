import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import CardRestaurant from "./CardRestaurant"
import CardRoom from "./CardRoom"
import CardPoster from "./CardPoster"
import CardProperty from "./CardProperty"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

import Image from "./CustomImage"
const IndustryCardHolder = (props) => {
  const breakpoints = []
  if (props.sm) {
    breakpoints[565] = {
      slidesPerView: props.sm,
    }
  }
  if (props.md) {
    breakpoints[768] = {
      slidesPerView: props.md,
    }
  }
  if (props.lg) {
    breakpoints[991] = {
      slidesPerView: props.lg,
    }
  }
  if (props.xl) {
    breakpoints[1200] = {
      slidesPerView: props.xl,
    }
  }
  if (props.xxl) {
    breakpoints[1400] = {
      slidesPerView: props.xxl,
    }
  }
  if (props.xxxl) {
    breakpoints[1600] = {
      slidesPerView: props.xxxl,
    }
  }
  const params = {
    className: props.className,
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    slidesPerView: props.perView ? props.perView : 1,
    effect: props.effect,
    allowTouchMove: props.allowTouchMove === false ? false : true,
    spaceBetween: props.spaceBetween ? props.spaceBetween : 0,
    centeredSlides: props.centeredSlides,
    roundLengths: props.roundLengths,
    loop: props.loop,
    speed: props.speed ? props.speed : 400,
    parallax: props.parallax,
    breakpoints: breakpoints,
    autoplay: props.autoplay,
    pagination: props.pagination !== undefined && {
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: props.navigation !== undefined,
  }

  return props.data ? (
    <Container>
      <Row>
        {props.data.map((item, index) =>
          <Col key={item.title} lg="4">
            <CardPoster data={item} />
          </Col>
        )}
      </Row>
    </Container>
  ) : (
    "loading"
  )
}

export default IndustryCardHolder
