import React from 'react';
import { observer, inject } from 'mobx-react'
import LikeButton from './components/hooks'
import './App.css';

@inject('menuStore')
@observer
class App extends React.Component<any, any>{

  render(): React.ReactElement<any> {
    const {menuStore: {currentMenu}} = this.props
    return (
       <div className="App">
            <header className="App-header">
                Learn React
                <p>这是渲染的mobx: {currentMenu}</p>
                <p><LikeButton/></p>

            </header>
    </div>
    )
  }
}

// function App() {
//   const { musicPlayStore } = this.props;
//   return (
//     <div className="App">
//       <header className="App-header">
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <LikeButton />
//       </header>
//     </div>
//   );
// }
//
// export default App;
//


export default App
