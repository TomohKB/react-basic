import logo from './logo.svg';
import './App.css';
import Student from './Student';
import { useState } from 'react';
import Counter from "./components/counter";

function App() {
  // let count = 0;
  //useStateの引数にcountの初期値を書く
  //setCountはcountの中身を変更する関数
    const[count, setCount] = useState(0);
    const [isAdmin, setAdmin] = useState(true);
    //子コンポーネントが更新されたらレンダリングされる

  // const handleCurrentCount = (num) => {
  //   if(num === -1) {
  //     count = count -1;
  //   }
  //   if(num === +1) {
  //     count = count +1;
  //   }
  // }
  const handleCurrentCount = (num) => {
    setCount((current) => {
      return current + num;
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>新・日本一わかりやすいReact入門シリーズで環境構築しました。</p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Student name="田中たろう" age="20" gender="男" />
        <Student name="鈴木大輔" age="19" gender="男" />
        <Student name="山田花子" age="18" gender="女" />
        {/* <div>
          <h3>田中たろう</h3>
          <p>
            <span>19</span>歳
          </p>
          <p>男</p>
          <hr />
        </div>
        <div>
          <h3>鈴木大輔</h3>
          <p>
            <span>19</span>歳
          </p>
          <p>男</p>
          <hr />
        </div>
        <div>
          <h3>山田花子</h3>
          <p>
            <span>18</span>歳
          </p>
          <p>女</p>
          <hr />
        </div> */}
        <div>
          <button onClick={() => handleCurrentCount(-1)}>-</button>
          <button onClick={() => handleCurrentCount(+1)}>+</button>
          <p>{count}</p>
        </div>
        {/* //key属性を割り当てることで、コンポーネントの判別を明示的にする */}
        {isAdmin ? (
          <Counter name="管理者" key="admin"/> 
        ) : (
          <Counter name="スタッフ" key="staff"/>
        )}
        <br />
        <button onClick={() => setAdmin((user) => !user)}>切り替え</button>
      </header>
    </div>
  );
}

export default App;
