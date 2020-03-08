import React, { useState } from "react"
import DropDown from "../common/DropDown"
import OptionA from "../components/OptionA"
import OptionB from "../components/OptionB"
import { dropDownData1 } from "../services/dropDownData"

const LeftColumn = () => {
    const [option, setOption] = useState("Option A");

    const handleDropDownSelect = (event) => {
        setOption(event.target.value)
    }
    const getCurrentOption = () => {
        if (option === "Option A") {
            return true
        }
        else {
            return false
        }
    }
    return (
        <div>
            <DropDown data={dropDownData1} value={option} onChange={handleDropDownSelect} />
            {getCurrentOption() ? <OptionA /> : <OptionB />}
        </div>
    )
}

export default LeftColumn