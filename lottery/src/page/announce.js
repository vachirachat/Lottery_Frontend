import React from 'react';
import spinner from '../pic/spinner.jpeg'
const Announce = () => {
    return (
        <div style={{backgroundColor:"#2E295C",height: "100vh"}}>
            <div class="card" style={{width:'50%', backgroundColor:'#484281', margin:'auto'}}>
            <img src={spinner} style={{height:'500px'}}/>
            <div class="card-body">
            
            <h2 style={{color:'#FFFFFF'}}>LOTTERY RESULT</h2>
            <h2 style={{color:'#FFFFFF'}}>99 99 99</h2>
            
            </div>
            </div>
            <button type="button" class="btn btn-success" style={{width:"25%", borderColor:'#FFFFFF', marginTop:'20px', marignRight:'10px'}}>Create</button>
            
        </div>
    )
}

export default Announce;