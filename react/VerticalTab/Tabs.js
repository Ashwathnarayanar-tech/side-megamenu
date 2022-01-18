import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styles from '../index.css';

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onHoverTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }
    render() {
        const {
            onHoverTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className={styles.tabs}>
                <ul className={styles.tabList}>
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onMouseOver={onHoverTabItem}
                            />
                        );
                    })}
                </ul>
                <div className={styles.tabContent}>
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;