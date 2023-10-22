import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button secondary outline rounded>
          Click me!!!
        </Button>
      </div>
      <div>
        <Button warning>Buy Now!</Button>
      </div>
      <div>
        <Button success outline>
          Seal Deal!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
