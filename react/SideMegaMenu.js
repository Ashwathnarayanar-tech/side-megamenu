import React from "react";
import Tabs from "./VerticalTab/Tabs";
import styles from "./index.css";
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [
    'megamenuContentWrapper',
    'menuHeading',
    'subMenuWrapper',
    'menuList',
    'categoryLink',
    'menuImageWrapper',
    'menuImage',
    'megamenuContainer',
    'menuItemWrapper',
    'menuTitleWrapper',
    'mainMenuTitle'
];

const SideMegaMenu = (props) => {
    const handles = useCssHandles(CSS_HANDLES);
    const menuArr = [...props.children];
    const blockPropArr = menuArr.map(mitem => mitem.props.blockProps);

    const showSubMenuContent = (blockPropArr) => {
        return (
            <div className={handles.megamenuContentWrapper}>
                <div className={handles.menuHeading}>
                    <h2>{props.itemProps.text}</h2>
                </div>
                <Tabs>
                    {
                        blockPropArr.map((subMenuL1) => {
                            return (
                                <div label={subMenuL1.title} id={subMenuL1.id}>
                                    <div className={handles.subMenuWrapper}>
                                        <div className={handles.menuList}>
                                            {subMenuL1.content
                                                && subMenuL1.content.map((subMenuL2, i) => {
                                                    return (
                                                        <a href={subMenuL2.url} title={subMenuL2.name + " Menu Link"} className={handles.categoryLink}>
                                                            <span>{subMenuL2.name}</span>
                                                        </a>
                                                    );
                                                })
                                            }
                                        </div>
                                        {props.imgUrl &&
                                            <div className={handles.menuImageWrapper}>
                                                <img src={props.imgUrl} alt={props.itemProps.text + " Menu Image"} className={handles.menuImage} />
                                            </div>
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </Tabs>
            </div>
        )
    }

    return (
        <div className={handles.megamenuContainer}>
            <div className={handles.menuItemWrapper}>
                <div className={handles.menuTitleWrapper + " mh6 pv5"} >
                    <a href={props.itemProps.href} title={props.itemProps.text} className={handles.mainMenuTitle}>
                        {props.itemProps.text}
                    </a>
                </div>
                {showSubMenuContent(blockPropArr)}
            </div>
        </div>
    );
}

export default SideMegaMenu;