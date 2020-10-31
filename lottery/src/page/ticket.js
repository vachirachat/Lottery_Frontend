import React from 'react';
import TicketListComponent from '../component/TicketListComponent';

const ticket = () => {
    return (
        <div style={{backgroundColor:'#2E295C', height:'100vh', padding:'20px'}}>
            <div style={{width: '90%', margin:'auto', display:'flex', justifyContent:'space-between'}}>
                <input type="text" class="form-control" placeholder="Search Lottery by Ticket id" style={{marginRight:'20px'}}/>
                <button type="button" class="btn btn-info" style={{  color:'#FFFFFF', borderColor:'#FFFFFF', width:'15%'}}>Search</button>
            </div>
           <TicketListComponent TicketID="102121" LotteryID="321938" LotteryNumber="321312" />
        </div>
    )
}

export default ticket;