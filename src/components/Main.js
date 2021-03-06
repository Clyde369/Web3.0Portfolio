import React from 'react';
import {useState, useEffect} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({selectedPunk, punkListData}) => {
   const [activePunk , setActivePunk] = useState(punkListData[0])

   useEffect(() => {
      setActivePunk(punkListData[selectedPunk])
      
   }, [ punkListData, selectedPunk ])

  return(
   <div className="main">
      <div className="mainContent">
         <div className="punkHighlight">
            <div className="punkContainer">
               <img className="selectedPunk" src={activePunk.image_original_url} alt="image_original_url"/>
            </div>
         </div>
         <div className="punkDetails" style={{color: 'white'}}>
            <div className="title">
               {activePunk.name}
            </div>
            <span className="itemNumber">#{activePunk.token_id}</span>
         </div>
         <div className="owner">
            <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} className="selectedPunk" alt="selectedPunk"
               />
               
            </div>
            <div className="ownerDetails">
               <div className="ownerNameAndHandle">
                     {activePunk.owner.address}
                     <div className="ownerHandle">
                        @Clyde
                     </div>
               </div>
            </div>
         </div>
      </div>
   </div>
  ) 
};

export default Main;
