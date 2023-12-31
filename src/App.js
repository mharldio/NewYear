import React from 'react';

const appStyle = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundImage: `url(${require("./image/year.avif")})`,
  backgroundSize: "100% 100%",
  backgroundAttachment: "fixed",
};

const headerStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(40, 44, 52, 0.8)',
  padding: '20px',
  color: 'white',
  width: '80%',
  borderRadius: '15px',
  fontSize: '19px',
};

// Media queries for responsiveness
const mediaQueryMobile = {
  headerStyle: {
    width: '90%', // Adjusted width for mobile screens
  },
  fontSize: '16px', // Adjusted font size for mobile screens
};

const mediaQueryLandscape = {
  headerStyle: {
    width: '50%', // Adjusted width for landscape orientation
  },
  fontSize: '18px', // Adjusted font size for landscape orientation
};

function App() {
  return (
    <div style={appStyle}>
      <header style={{ ...headerStyle, ...mediaQueryMobile.headerStyle, ...mediaQueryLandscape.headerStyle }}>
        <h1>Happy New Year!</h1>
        <p>
          Wishing you a year filled with joy, success, and prosperity. As we step into 2024, I just wanted to send you a quick note to say thank you for being an amazing friend. May this year bring you lots of laughter, moments of joy, and success in all your endeavors. Here's to new beginnings, shared adventures, and the beautiful friendship we have. Wishing you a fantastic year ahead, filled with love and positivity. Happy New Year, my friend! 🌟🥳
        </p>
        <div style={appStyle.mode}>
          <div style={{ marginTop: '8%' }}>
            <p>- Timothy</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
