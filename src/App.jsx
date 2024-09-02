import React from 'react';

function App() {
  const handleLambdaCall = async () => {
    try {
      const response = await fetch('https://your-lambda-url.amazonaws.com/dev/your-endpoint', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      alert(`Lambda function responded with: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error('Error calling Lambda function:', error);
      alert('Failed to fetch data from AWS Lambda');
    }
  };

  return (
    <div>
      <h1>Minimal React App</h1>
      <button onClick={handleLambdaCall}>Call AWS Lambda</button>
    </div>
  );
}

export default App;
