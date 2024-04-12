import "./Header.css";

function Header({ scrollOn }) {
  return (
    <div className={`header-wrapper ${scrollOn ? "header-dark" : ""}`}>
      <span>This is a Header</span>
    </div>
  )
}

export default Header;