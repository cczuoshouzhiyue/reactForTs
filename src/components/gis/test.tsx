import React from 'react';
// @ts-ignore
import BMap from 'BMap'

import './index.scss';
import { reactElement } from '../../common/alias';

class GisDemo1 extends React.PureComponent <any, any>{

    componentDidMount(): void {
        let map = new BMap.Map('container');
        map.centerAndZoom(new BMap.Point(119.303262,32.340362), 25);
        map.enableScrollWheelZoom(false);


    }

    render():reactElement {
        return <div id='container'> </div>;
    }
}

export default GisDemo1
