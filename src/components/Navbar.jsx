import sx from './Navbar.module.css';

const Navbar = function () {
  return (
    <nav className={sx.navbar}>
      <span className={sx.navbarToggle}>
        <i className="fas fa-bars" />
      </span>
      <a href="/" className={sx.logo}>AWSS💻</a>
      <ul className={sx.mainNav}>
        <li>
          <a href="/" className={sx.navLinks}>Home</a>
        </li>
        <li>
          <a href="/about" className={sx.navLinks}>About</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
