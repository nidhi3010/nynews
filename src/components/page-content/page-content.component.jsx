import React from "react";

import NewsBlog from "../news-blog/news-blog.component";

import './page-content.styles.scss';

const PageContent = () => (
    <div className="page-content">
      <ul>
      <li><a href="#" className="he-1"><span>LIVE</span></a></li>
      <li><a href="#">Russian Invasion of Ukraine</a><span>9m ago</span></li>
      <li><a href="#">Queen Elizabeth's Jubilee</a><span>15m ago</span></li>
      <li><a href="#">U.S. Jobs Report</a><span>21m ago</span></li>
      </ul>
      <NewsBlog/>
    </div>
)
export default PageContent;
