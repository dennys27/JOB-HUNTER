import React from 'react'
import './CreatePost.css'

const CreatePost = () => {
  return (
    <>
      <div className="Create_Post_Wrapper">
        <div className="content_wrapper2">
          <img
            className="avatar2"
            src="https://as1.ftcdn.net/v2/jpg/04/37/05/00/1000_F_437050078_pvwb7AcQQZuAvMlQNpTEN6O3iLc1Dxmt.jpg"
            alt="profile"
          />
          <input type="text" className="postContent" />
        </div>
      </div>
    </>
  );
}

export default CreatePost