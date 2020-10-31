import React, { useState } from 'react';
import lottery from '../pic/lottery.jpg';
const Buyticket = () => {
    const [userticket, setUserticket] = useState('vachirachat')
    const [timeleft, setTimeleft] = useState('10 : 20 : 40 : 40')
    
    return (
        <div style={{backgroundColor:"#2E295C",height: "100vh"}}>
            <div class="card" style={{width:'50%', backgroundColor:'#484281', margin:'auto'}}>
            <div class="card-body">
            <img src={lottery} />
            <h2 style={{color:'#FFFFFF', marginTop:'10px'}}>{`${userticket}`}</h2>
            <h2 style={{color:'#FFFFFF'}}>COUNTING TIME</h2>
            <h2 style={{color:'#FFFFFF'}}>{`${timeleft}`}</h2>
            <div style={{ display:'flex'}}>
            <input type="text" class="form-control" placeholder="TICKET PRICE" style={{width:"70%", margin:"auto" ,marginTop:'20px'}}/>
            <button type="button" class="btn btn-success" style={{width:"25%", borderColor:'#FFFFFF', marginTop:'20px', marignRight:'10px'}}>Create</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Buyticket;