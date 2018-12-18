import React from 'react';
import PropTypes from 'prop-types';

function ListLevel(props) {
    const list = props.List;
    const listResult = list.map((listItem, key) =>
        <li className="skill" key={key}>
            <span>{listItem.title}</span>
            <span className={'fill fill_'+listItem.level}>
                <span>{listItem.level} / 10</span>
            </span>
        </li>
    );
    return (
        <ul className="skills">
            {listResult}
        </ul>
    )
}
ListLevel.propTypes = {
    List: PropTypes.array
};

export default ListLevel;