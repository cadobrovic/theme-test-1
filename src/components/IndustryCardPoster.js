import React from "react"
import Link from "next/link"

import { Card } from "react-bootstrap"
import Image from "./CustomImage"

const IndustryCardPoster = (props) => {
  const {title, subtitle, img, link} = props.data
  return (
    <Card className="card-poster gradient-overlay hover-animate mb-4 mb-lg-0">
      <Link href={link}>
        <a className="tile-link" aria-label={`Read more about ${title}`} />
      </Link>
      <Image
        src={`/content/${img}`}
        layout="fill"
        className="bg-image"
        alt="Card image"
        sizes="(max-width: 576px) 100vw, (max-width:991px) 50vw, 280px"
      />
      <Card.Body className="overlay-content">
        <Card.Title as="h4" className="text-shadow text-uppercase">
          {title}
        </Card.Title>
        <Card.Text className="text-sm">{subtitle}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default IndustryCardPoster
