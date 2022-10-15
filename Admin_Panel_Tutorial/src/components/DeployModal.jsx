import React from 'react';
import { UALProvider } from 'ual-reactjs-renderer';
import {  ModalOverlay, Modal, ModalContent, Spinner, SpinnerRed, SpinnerBlue, SpinnerGreen } from '../data/ModalStyles';
import { anchor, myChain } from '../data/config';
import { AdminButton } from '../data/HomeStyles';





const DeployModal = (props) => {
    const setDeployModalDisplay = props.setDeployModalDisplay;
    const deployModalDisplay = props.deployModalDisplay;
  
    return (
      <UALProvider chains={[myChain]} authenticators={[anchor]} appName={"WaxDAO"}>

      <ModalOverlay style={{display: deployModalDisplay}}/>
      <Modal style={{display: deployModalDisplay}}>
        <ModalContent>
          {props.deployModalText}
          
        </ModalContent>
  
          <Spinner style={{display:props.loadingDisplay}}>
          <SpinnerRed  />
          <SpinnerBlue  />
          <SpinnerGreen />
          </Spinner>
  
        <br/>
        <AdminButton onClick={() => {setDeployModalDisplay('none'); } }>
          Close Window
        </AdminButton>
        </Modal>
    
      </UALProvider>
    )
  }
  
  export default DeployModal