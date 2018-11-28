import React from 'react';
import connect from "react-redux/es/connect/connect";

function MainHeader(props) {
    return (
        <div className="previewSection">
            <div className="container">
                <span className="borderItem">
                </span>
                <h1>
                    <span dangerouslySetInnerHTML={{__html: props.homeData.title}}>
                    </span>
                </h1>
            </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        homeData: state.home
    }
}

export default connect(mapStateToProps)(MainHeader);