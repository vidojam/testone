import { Image, Col }  from "react-bootstrap";

export default function Panel ( { element: {title, image,}}) {
  return(
    <Col xs={11} md={4} lg={3} xl={3}>
      <Image src={image} fluid />
      <h3> {title}</h3>
    </Col>
  )
}