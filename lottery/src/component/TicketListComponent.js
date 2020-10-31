import React, { useEffect, useState } from 'react';

const TicketListComponent = (props) => {
    return (
        <div class="card" style={{width:'90%', marginLeft:'5%', height:'130px', backgroundColor:'#484281', marginTop: "20px"}}>
            <div class="card-body" style={{marginLeft: '5%'}}>
                <p class="card-text" style={{position:'absolute', color:'#FFFFFF'}}>Ticket ID : {`${props.TicketID}`}</p>
                <p class="card-text" style={{position:'absolute', paddingTop:'30px', color:'#FFFFFF'}}>Lottey ID : {`${props.LotteryID}`}</p>
                <p class="card-text" style={{position:'absolute', paddingTop:'60px', color:'#FFFFFF'}}>Lottery Number : {`${props.LotteryNumber}`}</p>
        </div>
</div>
    )
}

export default TicketListComponent;