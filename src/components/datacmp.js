import React from 'react'

import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) =>{
    
    return(
        <div>
    <Sparklines data={props.datas} heigth={110} widtht={100}>
    <SparklinesLine color={props.colour} />
    </Sparklines>
    </div>
    );
}