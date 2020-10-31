import React, { useEffect, useState } from 'react';

const TicketComponent = (props) => {
    const [canbuyticket, setCanbuyticket] = useState(props.canbuyTicket)
    return (
        <div class="card" style={{width:'90%', marginLeft:'5%', height:'150px', backgroundColor:'#484281', marginTop: "20px"}}>
            <div class="card-body" style={{marginLeft: '5%'}}>
                <p class="card-text" style={{position:'absolute', color:'#FFFFFF'}}>Lottery ID : {`${props.LotteryId}`}</p>
                <p class="card-text" style={{position:'absolute', paddingTop:'30px', color:'#FFFFFF'}}>{`${props.DrawDate}`}</p>
                <p class="card-text" style={{position:'absolute', paddingTop:'60px', color:'#FFFFFF'}}>Reward : {`${props.Reward}`} token</p>
                <p class="card-text" style={{position:'absolute', paddingTop:'90px', color:'#FFFFFF'}}>Ticket Price : {`${props.TicketPrice}`} token</p>
            
            
            {canbuyticket === false ? <button type="button" class="btn btn-warning" style={{marginLeft:'80%', marginTop:'3%', color:'#FFFFFF', borderColor:'#FFFFFF'}}>View Ticket</button> :
            <button type="button" class="btn btn-success" style={{marginRight:'10px', color:'#FFFFFF', borderColor:'#FFFFFF', marginTop:'3%', marginLeft:'80%'}}>Buy Ticket</button>}
        </div>
</div>
    )
}

export default TicketComponent;