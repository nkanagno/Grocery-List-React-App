import { useState } from "react";


function GreektoGreeklish(){

  const [greekText, setGreekText] = useState('');
  const [greeklishText, setGreeklishText] = useState('');

  const greekToGreeklishMap = {
    'α': 'a',
    'β': 'v',
    'γ': 'g',
    'δ': 'd',
    'ε': 'e',
    'ζ': 'z',
    'η': 'h',
    'θ': 'th',
    'ι': 'i',
    'κ': 'k',
    'λ': 'l',
    'μ': 'm',
    'ν': 'n',
    'ξ': 'x',
    'ο': 'o',
    'π': 'p',
    'ρ': 'r',
    'σ': 's',
    'ς': 's',
    'τ': 't',
    'υ': 'y',
    'φ': 'f',
    'χ': 'ch',
    'ψ': 'ps',
    'ω': 'o',
  };

  const convertToGreeklish = (text) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      result += greekToGreeklishMap[text[i]] || text[i];
    }
    return result;
  };

  const handleGreekInputChange = (event) => {
    const greekValue = event.target.value;
    setGreekText(greekValue);
    setGreeklishText(convertToGreeklish(greekValue));
  };

  return (
    <div className="App">
      <h1>Greek to Greeklish Converter</h1>
      <textarea
        value={greekText}
        onChange={handleGreekInputChange}
        placeholder="Enter Greek text here..."
        rows="10"
        cols="50"
      ></textarea>
      <h2>Output:</h2>
      <textarea
        value={greeklishText}
        readOnly
        rows="10"
        cols="50"
      ></textarea>
    </div>
  );
}

export default GreektoGreeklish;
