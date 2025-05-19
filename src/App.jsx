import QRcode from 'qrcode';
import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    QRcode.toDataURL(url, (err, url) => {
      if (err) return console.error(err);
      setQrcode(url);
    });
  };

  return (
    <div className="container">
      <main className="content">
        <h1 className="main-heading">QR Code Generator</h1>
        <input
          type="text"
          name="url"
          className="url-input"
          placeholder="Enter the URL"
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}
        />
        <br />
        <button onClick={GenerateQRCode}>Generate</button>
        {qrcode && (
          <>
            <img src={qrcode} alt="Generated QR Code" />
            <a href={qrcode} download="qrcode.png" className='download-btn'>
              Download
            </a>
          </>
        )}
      </main>

      <footer style={footerStyle}>
        <p style={{ margin: 0 }}>
          Made with <span style={{ color: 'red' }}>❤️</span> by Ayush Sharma
        </p>
        <a
          href="https://www.linkedin.com/in/ayush-sharma13/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FaLinkedin size={24} />
        </a>
      </footer>
    </div>
  );
}
const footerStyle = {
  marginTop: 'auto',
  padding: '1rem',
  // borderTop: '1px solid #e0e0e0',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: '"Cinzel Decorative", cursive',
  fontSize: '0.95rem',
  color: '#555',
};

const iconStyle = {
  marginTop: '0.5rem',
  color: '#0077b5',
  textDecoration: 'none',
};
export default App;