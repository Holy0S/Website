import "../App.css";

function Navigation() {
  const scrollToPage = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navigation-container">
      <button onClick={() => scrollToPage("home")}>Home</button>
      <button onClick={() => scrollToPage("about")}>About</button>
      <button onClick={() => scrollToPage("projects")}>Projects</button>
      <button onClick={() => scrollToPage("contact")}>Contact Me</button>
      <a className="link" href="https://github.com/Holy0S">
        <button>GitHub</button>
      </a>
    </div>
  );
}

export default Navigation;
