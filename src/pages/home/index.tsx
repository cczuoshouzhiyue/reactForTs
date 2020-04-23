import React from 'react';
import GisDemo from '../../components/gis/index';
import GisDemo1 from '../../components/gis/test';
import CanvasComponent from '../../components/canvas/index'
import { reactElement } from '../../common/alias';
import './index.scss'

interface Interface {
    currentMenu: string
}

class Home extends React.Component<any, any>{
    state = {
       currentMenu: '1'
    };
    componentDidMount(): void {

    }
    changeMenu = (value: string):void =>{
        this.setState({
            currentMenu: value
        })
    };

    render(): reactElement {
        const { currentMenu } = this.state;
        const mainNode = (): reactElement => {
            if (currentMenu === '1'){
                return  <GisDemo />
            }
            if (currentMenu === '2') {
                return  <CanvasComponent />
            }
            if (currentMenu === '3') {
                return <GisDemo1 />
            }

            return null
        };
        return <div className='home'>
              <aside>
                  <span onClick={this.changeMenu.bind(this, '1')} className={currentMenu === '1' ? 'active': ''} >地图展示</span>
                  <span onClick={this.changeMenu.bind(this, '2')} className={currentMenu === '2' ? 'active' : ''}>画布</span>
                  <span onClick={this.changeMenu.bind(this, '3')} className={currentMenu === '3' ? 'active' : ''}>地图展示1</span>
              </aside>
              <main>
                 {mainNode()}
              </main>
        </div>
    }
}
export default Home
