import React from 'react';
import { Link } from 'react-router-dom';
const url = "https://github.com/IamYashSinha"

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p>&copy; {new Date().getFullYear()} <Link style={{textDecoration: "none"}} to={url}> Yash Sinha </Link>Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
