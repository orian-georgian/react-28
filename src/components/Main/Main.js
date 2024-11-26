import Card from "../Card/Card";
import "./Main.css";

const imagePath =
  "https://freepnglogo.com/images/all_img/1691829322canva-app-logo-png.png";

function Mariusica() {
  return <span>Mariusica</span>;
}

function Main() {
  return (
    <main className="main-content">
      <h2>Main content</h2>
      <Card color="red" title="Card 1 title">
        <h3>Some text</h3>
        <Mariusica />
      </Card>
      <Card title="Card 2 title">
        <p>
          dwfjdkbg kjsdfgk fdk ukdf bfukh kdks hfildsb fjsduk bvdsjvksdj vfds
        </p>
      </Card>
      {imagePath ? (
        <Card color="blue" title="Image">
          <img className="card-image" src={imagePath} alt="canva" />
        </Card>
      ) : null}
    </main>
  );
}

export default Main;
