import "./Header.css";
function Logo({ imageUrl }) {
  return (
    <div className="logo-container">
      <img className="logo" src={imageUrl} alt="logo" />
    </div>
  );
}

function Title({ title }) {
  return <span className="title">{title}</span>;
}

function Header() {
  return (
    <header className="header">
      <Logo imageUrl="https://www.freeiconspng.com/thumbs/logo-design/3d-link-logo-brand-design-png-image-12.png" />
      <Title title="My first react app" />
    </header>
  );
}

export default Header;
