import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { WifiStatus, WifiStatusType } from '../.';

const App = () => {
  return (
    <div>
      <WifiStatus status={WifiStatusType.Searching} width={400} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
