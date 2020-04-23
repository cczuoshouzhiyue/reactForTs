import React from 'react';
import { observer, inject } from 'mobx-react';
import LikeButton from './components/hooks';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch} from 'react-router';
import routes from './router';
import RouterInterface from './interface/router';
import { RouteWithSubRoutes } from './util/router'
import HeaderComponent from './components/header/index';

import './App.scss';


@inject('menuStore')
@observer
class App extends React.Component<any, any>{

  render(): React.ReactElement<any> {
    const {menuStore: {currentMenu}} = this.props
    return (
        <BrowserRouter>
           <div className="App">
               <HeaderComponent/>
               <section>
                   <Switch>
                       {routes.map((route: RouterInterface, i: number) => {
                           return RouteWithSubRoutes(route, i)
                       })}
                   </Switch>
               </section>

           </div>
        </BrowserRouter>
    )
  }
}


export default App
