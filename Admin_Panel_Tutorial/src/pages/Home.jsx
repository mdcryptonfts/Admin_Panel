import React, { useState } from 'react';
import { UALProvider } from 'ual-reactjs-renderer';
import { myChain, wax, anchor, currentUsername } from '../data/config';
import { AdminButton, AdminButtonContainer, LoginContainer } from '../data/HomeStyles';
import DeployModal from '../components/DeployModal';
import { deploy, updateActiveAuth, updateOwnerAuth } from '../data/functions/wallet_functions';
import { ualLogin, ualLogout } from '../data/functions/login_functions';


const Home = () => {

  const [deployModalText, setDeployModalText] = useState("");
  const [loadingDisplay, setLoadingDisplay] = useState("none");
  const [deployModalDisplay, setDeployModalDisplay] = useState("none");


  return (
    <div>

    <UALProvider chains={[myChain]} authenticators={[anchor, wax]} appName={"WaxDAO"}>

    <DeployModal deployModalDisplay={deployModalDisplay} setDeployModalDisplay={setDeployModalDisplay} deployModalText={deployModalText}
           loadingDisplay={loadingDisplay} setLoadingDisplay={setLoadingDisplay}  />


      
        { currentUsername != null && currentUsername != "" ? (
          <span>
          <LoginContainer>
            You are logged in as {currentUsername}
            <br/>
            <AdminButton onClick={() => { ualLogout() }} >
              Log Out
            </AdminButton>
          </LoginContainer>


          <AdminButtonContainer>

          <AdminButton onClick={() => { updateActiveAuth(setDeployModalText, setLoadingDisplay, setDeployModalDisplay);  }} >
            Update Active Auth
          </AdminButton> 


          <br/><br/>


          <AdminButton onClick={() => updateOwnerAuth(setDeployModalText, setLoadingDisplay, setDeployModalDisplay)} >
            Update Owner Auth
          </AdminButton> 
          <br/>
          <br/>

          <AdminButton onClick={() => deploy(setDeployModalText, setLoadingDisplay, setDeployModalDisplay)} >
            Deploy Contract
          </AdminButton> 
          <br/>
          <br/>





          </AdminButtonContainer>
          <br/><br/><br/>


          </span>
        ) : (
          <LoginContainer>
            You are not logged in.
            <br/>
            <AdminButton onClick={() => { ualLogin() }} >
              Log In Now
            </AdminButton>
          </LoginContainer>
        ) }



    </UALProvider>

    </div>
  )
}

export default Home