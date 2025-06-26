

const ProfilePopup=({handleClose})=>{
    
    return(
        <div>
          
        <div className="popup">
          <div className="popup-content">
            <div className="profile-img">
              <img
              src="/images/profile-img.png"
              alt='profimg'
              width={"100px"}
            />
            </div>
            <h2>Developed & Deployed by:</h2>
            <h3>Sumit Sunil Kalebere</h3>
              <p>
                Learned so much during this OJT! This app showcases my independent coding and deployment skills
              </p>
              <button onClick={handleClose}>Got it!</button>
          </div>
        </div>
      
        </div>
    );
};
export default ProfilePopup;