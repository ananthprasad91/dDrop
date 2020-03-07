import React from 'react';

const DropDown = (props) => {

    const dropDownValues = props.data.map((item)=><option key={item.id} id={item.id}>{item.name}</option>);

    return (
        <select onChange={props.onChange} value={props.value}>{dropDownValues}</select>
    )
}

export default DropDown