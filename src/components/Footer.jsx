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
                <Link to={"#projects"}><span className='svg-holder'><img className="icons" src={WhiteSword} alt="Sword"/></span></Link>
                <Link to={"#about"}><span className='svg-holder'><img className="icons" src={WhiteRose} alt="Rose"/></span></Link>
                <Link to={"#contact"}><span className='svg-holder'><img className="icons" src={WhiteTower} alt="Tower"/></span></Link>
            </div>
            <p>"Through Many Frustrations"<br/> - KVC</p>
            <div className="social">
                <a href="https://twitter.com/illus_c/"><span className='svg-holder'><img className="icons" src={WhiteTwitter} alt="Twitter"/></span></a>
                <a href="https://github.com/kcoime/"><span className='svg-holder'><img className="icons" src={WhiteGithub} alt="Github"/></span></a>
                <a href="https://www.linkedin.com/in/keyfie-coime-0458001aa/"><span className='svg-holder'><img className="icons" src={WhiteLinkedin} alt="LinkedIn"/></span></a>
            </div>
        </footer>
    );
}

export default Footer;