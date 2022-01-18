import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../index.css';

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onMouseOver: PropTypes.func.isRequired,
    };

    onMouseOver = () => {
        const { label, onMouseOver } = this.props;
        onMouseOver(label);
    }

    render() {
        const {
            onMouseOver,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = styles.tabListItem;

        if (activeTab === label) {
            className += ' ' + styles.tabListActive;
        }

        return (
            <li className={className} onMouseOver={onMouseOver}>
                <a href="javascript:vid(0)">
                    {label}
                </a>
            </li>
        );
    }
}

export default Tab;