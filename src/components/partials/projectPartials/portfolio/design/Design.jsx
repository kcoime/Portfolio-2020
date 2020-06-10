import React from 'react';

const DesignPort = () => {
    return (
        <section>
            <h3>Design Process</h3>
            <div className="themes">
                <img src="" alt=""/>
                <div className="themes-desc">
                    <h4>Insperations and Themes</h4>
                    <p>Red and White. It can be argued that no specific combination of colours, except for these, can accuratly represent the glory, the legacy and the might of the Roman Empire. White being a symbol of Marble meaning the peak of civilisations in antiquity, and Red by how it essentally Roflstomped everything that that stood on it's quest to make the mediterranian it's personal swimming pool (before getting so board, it started to roflstomp itself to near utter collapse).</p>
                    <p>To reflect this powerfull colour scheme I opted to use #fff for white. As the historical colour #fffff0(Ivory) gave the site an ugly yellow hue. While that may have looked good in the 90s it certanly an eyescore to look at now. For the Red I though it would be apporpreate to choose a variant of the Imperial Purpura (a colour only allowed by the Emperor) called "Tyrian Red" #990024, just to add a small hint of it's (mostly) fogotten Eastern Legacy.</p>
                    <p>The Shields / Coat of Arms, are a slight deviation from the masive Roman themes of the site. This came from an idea given to me by an Instructor about incorporating Dev and Design stacks as they were bloating my Project section. Then it hit me! The Most Noble Order of the Garter, founded by King Edward III durring the 100 Years War, where each knight's "Coat of Arms" are displayed on St. George's Chapel. However traditionally the were shields not banners, hence the modern stylistic approach to a skill stack. (I call it the wall of Merit)</p>
                    <div className="colour-swatches">
                        <div className="colour-wrapper">
                            <div className="colour white"></div>
                            <p className="image-subtext">#FFFFFF</p>
                        </div>
                        <div className="colour-wrapper">
                            <div className="colour dark"></div>
                            <p className="image-subtext">#292929</p>
                        </div>
                        <div className="colour-wrapper">
                            <div className="colour red"></div>
                            <p className="image-subtext">#990024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="steps">
                <h4>Step by Step</h4>
                <div className="content-map">
                    <h5>Content Map</h5>
                </div>
                <img src="" alt="Content Map Image"/>
                <div className="info-arc">
                    <h5>Information Architecture</h5>
                </div>
                <img src="" alt="Information Architecture Image"/>
                <div className="wireframe">
                    <h5>Wireframe / Design Mockup</h5>
                </div>
                <img src="" alt="Wireframe / Mockup"/>
            </div>
        </section>
    );
}

export default DesignPort;