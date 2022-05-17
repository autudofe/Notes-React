import React from 'react';
import './Row.css'

import {CATEGORY_IMG} from "../../../../reducers/helpers";

const Row = ({statistic}) => {

        const {category, active, archived} = statistic;

        return (
            <>
                <div className="block">
                    <div className="icon">
                        <div className="circle_icon">
                            <i className={CATEGORY_IMG[category]}/>
                        </div>
                    </div>
                    <div className="category_statistic"><p className="">{category}</p></div>
                    <div className="active"><p className="">{active}</p></div>
                    <div className="archived "><p className="">{archived}</p></div>
                </div>
            </>
        );
    }
;

export default Row;