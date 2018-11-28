import React from 'react';
import homeData from '../../data/home'

function MainHeader(props) {
    return (
        <div className="previewSection">
            <div className="container">
                <span className="borderItem">
                </span>
                <h1>
                    <span dangerouslySetInnerHTML={{__html: homeData.title}}>
                    </span>
                </h1>
            </div>
        </div>
    )
}
export default MainHeader;