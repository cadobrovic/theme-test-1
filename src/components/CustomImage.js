import React from "react"
import Image from "next/image"

// NEEDS /theme-test-1 for github deployment without domain name

const CustomImage = (props) => {
  if (process.env.production_type === "static") {
    return (
      <img
        src={`${props.src}`}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={props.className}
      />
    )
  } else {
    return <Image {...props} />
  }
  // return (
  //   <img
  //     src={props.src}
  //     alt={props.alt}
  //     width={props.width}
  //     height={props.height}
  //     className={props.className}
  //   />
  // )
}
export default CustomImage
