import logo from "./logo.svg";
import "./App.css";

function App() {
  function displayEnteredText() {
    var inputText = document.querySelector("#text-input").value;
    var resultText = document.querySelector("#result");
    if (inputText === "") {
      alert("Please input a value");
    } else if (isPalidrome(inputText)) {
      resultText.innerText = `${inputText} is a Palindrome`;
    } else {
      resultText.innerText = `${inputText} is not a Palindrome`;
    }
  }
  function isPalidrome(str) {
    var cleanSentence = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    return cleanSentence === cleanSentence.split("").reverse("").join("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {"Is this a"}{" "}
          <code>
            <a
              href="https://www.dictionary.com/e/palindromic-word/"
              style={{ color: "skyblue", textDecoration: "none" }}
            >
              {"Palindrome?"}
            </a>
          </code>{" "}
          {"Let's See!."}
        </p>
        <input type="text" id="text-input" />
        <button id="check-btn" onClick={displayEnteredText} type="submit">
          {"Check"}
        </button>
        <div id="result"></div>
      </header>
    </div>
  );
}

export default App;
