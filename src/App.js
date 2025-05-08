import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

function App() {
  const [, setValue] = useState('');
  const [largePayload, setLargePayload] = useState(null);

  useEffect(() => {
    fetch('largePayload.json')
      .then((response) => response.json())
      .then((data) => setLargePayload(data))
      .catch((error) => console.error('Error loading payload:', error));
  }, []);

  if (!largePayload) {
    return <div>Loading...</div>; 
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#0052CC', fontSize: '2rem', margin: '16px', padding: '16px' }}>Markdown Editor</h1>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', maxWidth: '90%', margin: 'auto' }}>
        <MDEditor
          value={largePayload.map((item) => `# ${item.title}\n\n${item.content}\n---\n`).join('\n')}
          onChange={setValue}
          height={500}
        />
      </div>
    </div>
  );
}

export default App;