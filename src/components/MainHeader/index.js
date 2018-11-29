import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import onClickMethod from "../../common/onClickMethod"

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.newTitle = "<span>Coding</span> is a <span>Life</span>";
    }

    changeTitle = (newTitle) => {
        this.props.changeTitle(newTitle);
    };

    render() {
        return (
            <div className="previewSection">
                <div className="container">
                <span className="borderItem">
                </span>
                    <h1>
                        <span dangerouslySetInnerHTML={{__html: this.props.homeData.title}}
                              onClick={onClickMethod(this, this.changeTitle, [this.newTitle])}>
                        </span>
                    </h1>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        homeData: state.home
    }
}
function mapDispatchToProps (dispatch) {
    return {
        changeTitle: (title) => {
            dispatch({type: "CHANGE_TITLE", payload: title})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);