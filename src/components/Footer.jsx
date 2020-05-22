import React from 'react';
import { Link } from 'react-router-dom';
import WhiteRose from './images/w-rose.svg';
import WhiteSword from './images/w-sword.svg';
import WhiteTower from './images/w-tower.svg';
import WhiteTwitter from './images/white-twitter.svg';
import WhiteGithub from './images/white-github.svg';
import WhiteLinkedin from './images/white-linkedin.svg';

const Footer = () => {
    return(
        <footer>
            <div className="icon-nav">
                <Link to={"#projects"}><img className="icons" src={WhiteSword} alt="Sword"/></Link>
                <Link to={"#about"}><img className="icons" src={WhiteRose} alt="Rose"/></Link>
                <Link to={"#contact"}><img className="icons" src={WhiteTower} alt="Tower"/></Link>
            </div>
            <p>"Through Many Frustrations"<br/> - KVC</p>
            <div className="social">
                <a href="https://twitter.com/illus_c/"><img className="icons" src={WhiteTwitter} alt="Twitter"/></a>
                <a href="https://github.com/kcoime/"><img className="icons" src={WhiteGithub} alt="Github"/></a>
                <a href="https://www.linkedin.com/in/keyfie-coime-0458001aa/"><img className="icons" src={WhiteLinkedin} alt="LinkedIn"/></a>
            </div>
        </footer>
    );
}

export default Footer;