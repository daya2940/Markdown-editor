import React,{useState} from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
function App() {

  const [markdown,setMarkdown] = useState('#sup')
  return (
    <div className="App">
      <textarea  value={markdown} onChange={(e) => setMarkdown(e.target.value)}/>
      <ReactMarkdown source={markdown} className="preview" />
    </div>
  );
}

export default App;
