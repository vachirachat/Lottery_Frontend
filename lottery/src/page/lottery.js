import React from 'react';
import TicketComponent from '../component/TicketComponent';
const lottery = () => {
    return (
        <div style={{backgroundColor:"#2E295C",height: "100vh", paddingTop:'10px'}}>
            <div style={{width: '90%', margin:'auto', display:'flex', justifyContent:'space-between'}}>
                <input type="text" class="form-control" placeholder="Search Lottery by id" style={{marginRight:'20px'}}/>
                <button type="button" class="btn btn-info" style={{  color:'#FFFFFF', borderColor:'#FFFFFF', width:'15%'}}>Search</button>
            </div>
            <TicketComponent LotteryId="1020312" DrawDate="27 oct 2020" Reward='1,000,000' TicketPrice='1,000' canbuyTicket={true}/>
            <TicketComponent LotteryId="1020312" DrawDate="27 oct 2020" Reward='1,000,000' TicketPrice='1,000' canbuyTicket={false}/>
        </div>
    )
}

export default lottery;