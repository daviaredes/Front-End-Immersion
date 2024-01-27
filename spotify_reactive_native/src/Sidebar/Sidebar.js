import React from 'react';
import './Sidebar.css';
import LogoSpotify from '../assets/icons/logo-spotify.png';

const Sidebar = () => {
    return (
    <div class="sidebar">
        <nav class="sidebar__navigation">
            <div class="logo">
                <a href="">
                    <img src={LogoSpotify} alt="Logo" />
                </a>
            </div>
            <ul>
                <li>
                    <a href="">
                        <span class="fa fa-home"></span>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="fa fa-search"></span>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="library">
            <div class="library__content">
                <button class="library__button">
                    <span class="fa fas fa-book"></span>
                    <span>Sua Bibliote</span>
                </button>
                <span class="fa fa-plus"></span>
            </div>
            <section class="selection_playlist">
                <div class="section-playlist__content">
                    <span class="text title">Crie sua Playlist</span>
                    <span class="text subtitle">É facil, vamos te ajudar</span>
                    <button class="selection-playlist__button">
                        <span>Criar Playlist</span>
                    </button>
                </div>
            </section>
            <div class="cookies">
                <a href="">Cookies</a>
            </div>
            <div class="languages">
                <button class="languages__button">
                    <span class="fa fa-globe"></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
};

export default Sidebar;