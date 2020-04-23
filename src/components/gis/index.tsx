import React from 'react';
// @ts-ignore
import BMap from 'BMap'

import './index.scss';
import { reactElement } from '../../common/alias';

class GisDemo extends React.PureComponent <any, any>{

    componentDidMount(): void {
        let map = new BMap.Map('container');
        let point = new BMap.Point(119.303262,32.340362);
        map.centerAndZoom(point, 15);
        //控制缩放
        map.enableScrollWheelZoom(true);
    }

    render():reactElement {
        return <div id='container'> </div>;
    }
}

export default GisDemo
