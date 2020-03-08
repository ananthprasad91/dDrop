import React from "react"
import {
    Form,
    Button
} from "react-bootstrap"

const OptionA = () => {
    
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Test Label</Form.Label>
                <Form.Control type="text" placeholder="Enter Something" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default OptionA