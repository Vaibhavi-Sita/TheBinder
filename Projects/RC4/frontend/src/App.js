import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [plaintext, setPlaintext] = useState('')
  const [key, setKey] = useState('')
  const [ciphertext, setCiphertext] = useState('')
  const [decryptedText, setDecryptedText] = useState('')

  const apiUrl = process.env.REACT_APP_API_URL

  const handleEncrypt = async () => {
    try {
      const response = await axios.post(`${apiUrl}/api/rc4/encrypt`, null, {
        params: { plaintext, key },
      })
      setCiphertext(response.data)
    } catch (error) {
      console.error('Error encrypting:', error)
    }
  }

  const handleDecrypt = async () => {
    try {
      const response = await axios.post(`${apiUrl}/api/rc4/decrypt`, null, {
        params: { ciphertext, key },
      })
      setDecryptedText(response.data)
    } catch (error) {
      console.error('Error decrypting:', error)
    }
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>RC4 Encryption & Decryption</h1>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Enter plaintext'
            value={plaintext}
            onChange={(e) => setPlaintext(e.target.value)}
            className='input-field'
          />
        </div>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Enter key'
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className='input-field'
          />
        </div>
        <div className='button-group'>
          <button onClick={handleEncrypt} className='button'>
            Encrypt
          </button>
          <button onClick={handleDecrypt} className='button'>
            Decrypt
          </button>
        </div>
        <div className='output-group'>
          <h2>Ciphertext:</h2>
          <p className='output-text'>{ciphertext}</p>
        </div>
        <div className='output-group'>
          <h2>Decrypted Text:</h2>
          <p className='output-text'>{decryptedText}</p>
        </div>
      </div>
    </div>
  )
}

export default App
