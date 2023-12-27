import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./App.css";

function App() {
    const [url, setUrl] = useState("");
    const [generatedQRCode, setGeneratedQRCode] = useState("");

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const generateQRCode = () => {
        setGeneratedQRCode(url);
    };

    return (
        <div className="container">
            <h1>QR Code Generator</h1>
            <label>Enter URL:</label>
            <input type="text" value={url} onChange={handleUrlChange} />
            <br />
            <button onClick={generateQRCode}>Generate QR Code</button>
            {generatedQRCode && (
                <div>
                    <h2>Generated QR Code:</h2>
                    <QRCode value={generatedQRCode} />
                </div>
            )}
        </div>
    );
}

export default App;
