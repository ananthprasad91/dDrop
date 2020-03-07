import React from 'react';

const DropDown = (props) => {

    const results = props.values.map((item)=><option key={item.id} id={item.id}>{item.name}</option>);

    return (
        <select onChange={props.onChanged} value={props.value}>{props.dropDwonData}</select>
    )
}

export default DropDown