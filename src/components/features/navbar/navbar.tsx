// src/components/Button.tsx
import React, { ReactNode } from 'react';


export const NavBar = () => {
  return (
    <nav className="menu-cote">
            <div className="logo-cahier">📓</div>
            <ul className="menu-notes">
                <li className="active"><a href="#"><span>Notes du jour</span></a></li>
                <li><a href="#"><span>Projets</span></a></li>
                <li><a href="#"><span>Idées</span></a></li>
                <li><a href="#"><span>Listes</span></a></li>
                <li><a href="#"><span>Archives</span></a></li>
            </ul>
            <div className="outils-notes">
                <button className="btn-notes" id="nouvelle-note">+ Nouvelle note</button>
                <button className="btn-notes" id="recherche">🔍 Rechercher</button>
            </div>
    </nav>
  );
};