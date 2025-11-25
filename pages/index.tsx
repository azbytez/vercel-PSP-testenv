import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [message, setMessage] = useState('')

  return (
    <>
      <Head>
        <title>Client Site Tracker Test</title>
      </Head>
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '12px',
          padding: '3rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textAlign: 'center',
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            🚀 Client Site Tracker Test
          </h1>

          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: '#f8f9fa',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <h2 style={{ color: '#333', marginBottom: '1rem' }}>
              Tracking Code Test Page
            </h2>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              This page is deployed on Vercel to test the Matomo/Prospectory tracking code.
            </p>
            <p style={{ color: '#666' }}>
              ✅ Tracking script is loaded in the page head
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            background: '#e7f3ff',
            borderRadius: '8px',
            border: '1px solid #b3d9ff'
          }}>
            <h3 style={{ color: '#004085', marginBottom: '1rem' }}>
              📊 Tracking Information
            </h3>
            <ul style={{ color: '#004085', lineHeight: '1.8' }}>
              <li><strong>Tracking Script:</strong> https://app-dev.prospectory.ai/psp.tracker.dev.js</li>
              <li><strong>Client ID:</strong> cmdymbp3q001cna243vesyx4r</li>
              <li><strong>User ID:</strong> cm6rgwls50000jb2lypjf341q</li>
            </ul>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: '#fff3cd',
            borderRadius: '8px',
            border: '1px solid #ffc107'
          }}>
            <h3 style={{ color: '#856404', marginBottom: '1rem' }}>
              🔍 How to Verify
            </h3>
            <ol style={{ color: '#856404', lineHeight: '1.8' }}>
              <li>Open browser Developer Tools (F12)</li>
              <li>Go to the Network tab</li>
              <li>Look for requests to <code>psp.tracker.dev.js</code></li>
              <li>Check your Matomo dashboard for page views</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

