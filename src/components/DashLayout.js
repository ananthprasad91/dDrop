import React from "react"
import {
    Container,
    Row,
    Col
} from "react-bootstrap"
import LeftColumn from "../components/LeftColumn"
import RightColumn from "../components/RightColumn"

const DashLayout = () => {
    return (
        <Container>
            <Row>
                <Col md="4">
                    <LeftColumn />
                </Col>
                <Col md="8">
                    <RightColumn />
                </Col>
            </Row>
        </Container>
    )
}

export default DashLayout