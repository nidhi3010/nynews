import React from "react";

import './news-blog.styles.scss';

const NewsBlog = () => (
    <div className="news-blog">
        <div className="news-1">
            <a href="#" className="he"><h3>Biden Calls for Assault Weapons Ban and New 'Red Flag' Laws</h3></a>
            <div className="n1-detail-img">
                <div className="n1-detail">

                    <p className="p-1">'Enough, Enough,' He Says,</p>
                    <p className="p-2">Urging Congress to Take Action</p>
                    <ul>
                        <li>Suffolk County on Long Island uses the state’s law, which takes weapons away from people who pose a danger to themselves or others, most aggressively.</li>
                        <li>Though research on the law’s efficacy is mixed, the method could inform the national debate as state and federal lawmakers consider red-flag laws.</li>
                    </ul>
                    <p className="p-3">Battered by Russian Shells, a Monastery Remains Loyal to Moscow</p>
                    <p className="p-4">The monks and nuns cloistered in an eastern Ukrainian church complex remain faithful to the Russian Orthodox Church.</p>
                </div>
                <img style={{ "height": "350px", width: "550px" }} className="n1-img" src="https://www.deccanherald.com/sites/dh/files/article_images/2019/05/06/file6zibuo94aw7i49wwgil-1557083194.jpg" />

            </div>
            <div className="he2-he3">
                <a href="#" className="he-2"><h3>Guerrilla attacks deep inside Russian-controlled Ukrainian territory signal a rising resistance to Russian occupation.</h3></a>
                <a href="#" className="he-3"><h3>The U.S. moved to seize two planes owned by Roman Abramovich, a Russian billionaire tied to Vladimir Putin.</h3></a>

            </div>
        </div>

        <div className="news-2">
            <div className="n2-detail-img">
                <div className="n2-detail">
                    <a href="#" className="n2-he1"><h3>Boris Johnson Survives No-Confidence Vote but Is Politically Damaged</h3></a>
                    <p className="n2-p1">The vote sets off a volatile period: Mr. Johnson vowed to stay on, but history suggests he could still be drummed out of office. Catch up on the vote.</p>
                    <a href="#" className="n2-he2"><h3>Analysis: Boris Johnson’s political invincibility has been shattered. Here’s how he got to this moment.</h3></a>

                </div>
            </div>
        </div>
    </div>
)

export default NewsBlog;

