import React from 'react'
import Navbar from '../components/UI/Navbar/Navbar'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <h1>Профиль пользователя</h1>
      
      <div style={{display: 'flex', flexDirection: 'column'}}>
        
        <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />

        <span>Eleanor Pena</span>

        <span>@eleanorpena</span>

        <button>Edit Profile</button>

        <div>
          <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br></br> Artist/ Creative Director by Day #NFT minting@ with FND night. </span>
        </div>

      </div>
    </div>
  )
}

export default Profile
