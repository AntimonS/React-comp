import { GoBellFill, GoDesktopDownload, GoImage } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked!!!");
  };
  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          <GoBellFill />
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
          <GoDesktopDownload />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoImage />
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
