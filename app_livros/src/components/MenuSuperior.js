import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuSuperior = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //A função toggleDropdown é definida para alternar o valor do estado dropdownOpen quando o menu é clicado.
  // Isso permite abrir e fechar o dropdown.
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //A função closeDropdown é definida para definir o valor do estado dropdownOpen como false.
  // Isso é usado para fechar o dropdown quando um item é selecionado.
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Controle Pessoal de Livros
        </Link>
        <ul className="navbar-nav">
          <li
            className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`}
            onClick={toggleDropdown}
          >
            <a
              className="nav-link dropdown-toggle"
              href="#menu"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Menu
            </a>
            <div
              className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
              aria-labelledby="navbarDropdown"
            >
              <h6 className="dropdown-header">Inclusões</h6>

              <Link to="/"
                className="dropdown-item"
                onClick={closeDropdown}>
                Inclusão de Livros
              </Link>

              <Link
                to="/autores"
                className="dropdown-item"
                onClick={closeDropdown}
              >
                Inclusão de Autores
              </Link>

              <Link
                to="/Editoras"
                className="dropdown-item"
                onClick={closeDropdown}
              >
                Inclusão de Editoras
              </Link>

              <div className="dropdown-divider"></div>
              <h6 className="dropdown-header">Manutenções</h6>

              <Link to="/manut"
                className="dropdown-item"
                onClick={closeDropdown}>
                Manutenção de Livros
              </Link>

              <Link
                to="/manut_autores"
                className="dropdown-item"
                onClick={closeDropdown}
              >
                Manutenção de Autores
              </Link>

              <Link
                to="/manut_editoras"
                className="dropdown-item"
                onClick={closeDropdown}
              >
                Manutenção de Editoras
              </Link>

            </div>
          </li>
          <li className="nav-item">
            <Link to="/resumo_livros"
              className="nav-link"
            >
              Resumo de Livros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;
