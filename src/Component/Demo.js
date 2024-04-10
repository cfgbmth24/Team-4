
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Demo() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // 假设图片都存放在项目的 public/images 目录下
  const ongoingUrl = 'https://images.squarespace-cdn.com/content/v1/5ed662e787387b148c01bc27/1669714475419-2IHTK9NN7ZKI9N60IVXL/Gala+Ball+236.jpg'; // 中间大图
  const successUrl = 'https://images.squarespace-cdn.com/content/v1/5ed662e787387b148c01bc27/1600170289935-2N8W6SQNMUESRGE4M69Z/Thank+you+-+Hooray+2.JPG'; // 底部左图
  const possibleUrl = 'https://img.freepik.com/free-photo/full-shot-friends-playing-basketball_23-2149160522.jpg'; // 底部右图
  const backgroundUrl = 'https://t4.ftcdn.net/jpg/04/97/86/15/360_F_497861573_EX9cjKXjVLBhbHrawjVK8M3BthLDS5lE.jpg';
  const chatIconUrl = 'https://cdn.iconscout.com/icon/free/png-256/free-chat-2639493-2187526.png?f=webp';
  const iconUrl = 'https://images.squarespace-cdn.com/content/v1/5ed662e787387b148c01bc27/7fae089b-41df-40f0-abaa-2848fbdbb35e/Diverse+Abilities+-+Logo.jpg?format=1500w';

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #d1d1d1', // 示例底边框
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
  };

  const ongoingUrlStyle = {
    position: 'relative',
    flex: 2, 
    backgroundImage: `url(${ongoingUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: '2rem',
  };

  const infoTextStyle = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景提升可读性
    color: 'white',
    padding: '20px', // 适当的内边距
  };

  const bottomImagesContainerStyle = {
    flex: 1,
  };

  const buttonStyle = {
    padding: '10px 20px', 
    height: '50px', 
    width: '150px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '10px',
  };
  
  const navigate = useNavigate();

  const handleNavigateToOngoing = () => {
    navigate('/ongoing'); // 导航到Ongoing组件的路由
  };
  const handleNavigateToSucc = () => {
    navigate('/successful'); // 导航到Ongoing组件的路由
  };
  const handleNavigateToPoss = () => {
    navigate('/possible'); // 导航到Ongoing组件的路由
  };

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <img src={iconUrl} alt="icon" style={{ width: '500px', height: '90px' }}/>
        <img src={chatIconUrl} alt="Open Dialog" style={{ cursor: 'pointer', width: '30px', height: '30px' }} onClick={toggleDialog} />
        {isDialogOpen && (
        <div style={{ position: 'absolute', right: '10px', top: '60px', backgroundColor: 'white', padding: '20px', border: '1px solid black', borderRadius: '5px', zIndex: 100 }}>
          <p>It will show a guiding chat...</p>
          <button onClick={toggleDialog}>Close</button>
        </div>
      )}
      </div>
      <div style={ongoingUrlStyle}>
        <div style={infoTextStyle}>
          <h1>Ongoing Events</h1>
          <button style={buttonStyle} onClick={handleNavigateToOngoing}>Click for more info...</button>
        </div>
      </div>
      <div style={bottomImagesContainerStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '25vh' }}>
            <img src={successUrl} alt="Bottom content 1" style={{ width: '50%', height: '100%', objectFit: 'cover' }} />
            <div style={{ width: '50%', padding: '1rem' }}>
            <h2>Success Stories</h2>    
            <p>We have made many possitive impacts on disabled addults and children. We have a really amazing gala ball, you can click the below button to see more stories...</p>
            <button style={buttonStyle} onClick={handleNavigateToSucc}>Learn more</button>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '25vh' }}>
            <div style={{ width: '50%', padding: '1rem' }}>
            <h2>Upcoming Events</h2>    
            <p>We want to make more impactful stories in the future. We really hope your contribution. Click the bellow button to see which one you want to join...</p>
            <button style={buttonStyle} onClick={handleNavigateToPoss}>Learn more</button>
            </div>
            <img src={possibleUrl} alt="Bottom content 2" style={{ width: '50%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      
    
    </div>
  );
}

export default Demo;
