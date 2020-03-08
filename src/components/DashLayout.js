import React from "react"
import {
    Container,
    Row,
    Col
} from "react-bootstrap"
import LeftColumn from "../components/LeftColumn"

const DashLayout = () => {
    return (
        <Container>
            <Row></Row>
            <Row>
                <Col md="2">
                </Col>
                <Col md="8">
                    <LeftColumn />
                </Col>
                <Col md="2">
                </Col>
            </Row>
        </Container>
    )
}

export default DashLayout