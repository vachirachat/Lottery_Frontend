import React from 'react';

const createLottery = () => {
    return (
        <div style={{backgroundColor:"#2E295C",height: "100vh", paddingTop:'5%'}}>
            <div class="card" style={{width:'40%', height:'350px', backgroundColor:'#484281', margin:'auto'}}>
            <div class="card-body">
            <input type="text" class="form-control" placeholder="Lottery ID" style={{width:"90%", margin:"auto" ,marginTop:'20px'}}/>
            <input type="text" class="form-control" placeholder="DRAW DATE" style={{width:"90%", margin:"auto" ,marginTop:'20px'}}/>
            <input type="text" class="form-control" placeholder="REWARD" style={{width:"90%", margin:"auto" ,marginTop:'20px'}}/>
            <input type="text" class="form-control" placeholder="TICKET PRICE" style={{width:"90%", margin:"auto" ,marginTop:'20px'}}/>
            <div style={{marginTop: '20px', position:'absolute', right:'8%'}}>
            <button type="button" class="btn btn-danger" style={{ borderColor:'#FFFFFF', marginRight:'10px'}}>Cancel</button>
            <button type="button" class="btn btn-success" style={{ borderColor:'#FFFFFF'}}>Create</button>
            </div>
            
        </div>
        </div>
        </div>
    )
}

export default createLottery;