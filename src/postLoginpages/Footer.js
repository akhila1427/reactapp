import React from 'react';


const Footer = () => {
    return (
      <footer style={styles.footer}>
        <div>
          <p>Contact us: Akhila@gmail.com</p>
          <p>Follow us on Twitter: Akhila@gmail</p>
        </div>
        <div>
          <p>Address: 123 Main Street, City:Hyderabad</p>
          <p>Phone: 1800-2108-6402</p>
        </div>
        <div>
          <p>Welcome to E-Commerce Website</p>
        </div>
      </footer>
    );
  };
  
  const styles = {
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
      
      bottom: 0,
      width: '100%',
     
      display: 'flex',
      justifyContent: 'space-around',
    },
  };
  

export default Footer;

