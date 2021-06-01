import React from 'react';
import Gist from 'react-gist';

const gistData = {
    id: "d40600d2af1a19899927f06d6fdc89e5",
    file: null
}

const FirstChallangeCine = () => {
    return (
        <section className="development-process-inichall">
            <div className="initial-chal">
                <div className="desc">
                    <h5>Initial Challange</h5>
                    <p>The main challenge of the site is knowing how to use two very important functions of React, <code>useState()</code>, and <code>useEffect()</code>. With <code>useState()</code> we are able to access the information present within an API, and extract what we need for our site (In this case, movie titles, poster, ratings, etc), while with <code>useEffect</code> we are able to take the information we receved and display it within Babel.</p>
                </div>
                {/* <div className="img-wrapper">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div> */}
            </div>

            <div className="code-area">
                <Gist id={gistData.id} />
            </div>

            <p>With the use of both functions, we are able to favourite movies, and add them to our favourites page on the site. A very handy feature.</p>
        </section>
    );
}

export default FirstChallangeCine;