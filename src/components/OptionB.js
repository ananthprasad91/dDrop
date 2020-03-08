import React, { useState } from "react"
import DropDown from "../common/DropDown"
import {
    dropDownData1,
    dropDownData2
} from "../services/dropDownData"
import { Form, Button } from "react-bootstrap"

const OptionB = () => {

    const [option1, setOption1] = useState([]);
    const [option2, setOption2] = useState([]);

    const handleDropDownSelect1 = (event) => {
        setOption1(event.target.value)
    }
    const handleDropDownSelect2 = (event) => {
        setOption2(event.target.value)
    }

    return (
        <Form>
            <Form.Group controlId="OptionB1">
                <Form.Label>Test Label</Form.Label>
                <DropDown data={dropDownData1} value={option1} onChange={handleDropDownSelect1} />
            </Form.Group>
            <Form.Group controlId="OptionB2">
                <Form.Label>Test Label</Form.Label>
                <DropDown data={dropDownData2} value={option2} onChange={handleDropDownSelect2} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default OptionB