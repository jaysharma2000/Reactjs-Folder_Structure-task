// import { useState } from 'react';
// import './App.css'
// import Folder from './components/Folder';
// import explorer from './components/data';

// function App() {

//   const [explorerData, setExplorerData] = useState(explorer);

//   return (
//     <>
//       <Folder explorer={explorerData} /> 
//     </>
//   )
// }

// export default App


import { useState } from 'react';
import './App.css';
import Folder from './components/Folder';
import explorer from './components/data';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const [fileContent, setFileContent] = useState("");

  // Function to handle file clicks and display content
  const handleFileClick = (file) => {
    setFileContent(file.content);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Folder Structure</h1>
       
        <Folder explorer={explorerData} onFileClick={handleFileClick} />
        {fileContent && (
          <div className="file-content">
            <h2>File Content</h2>
            <p>{fileContent}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
