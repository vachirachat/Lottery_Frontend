import React from 'react';

const firstPage = () => {
    return (
        <div style={{backgroundColor:"#2E295C",height: "100vh"}}>
        <div style={{paddingTop:"20%"}}>
            <input type="text" class="form-control" placeholder="Mnemonic password" style={{width:"50%", margin:"auto"}}/>
            <div style={{marginTop:'10px', position:'absolute', right:'25%'}}>
            <button type="button" class="btn btn-warning" style={{marginRight:'10px'}}>Sign up</button>
            <button type="button" class="btn btn-success">Sign in</button>
            </div>
        </div>
        </div>
    )
}

export default firstPage;