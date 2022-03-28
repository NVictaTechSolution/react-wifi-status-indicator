# React Wifi Status Indicator

[![MIT License](https://img.shields.io/github/license/NVictaTechSolution/react-wifi-status-indicator)](https://raw.githubusercontent.com/NVictaTechSolution/react-wifi-status-indicator/main/LICENSE)

![Tag](https://img.shields.io/github/v/tag/NVictaTechSolution/react-wifi-status-indicator)

![Open Issues](https://img.shields.io/github/issues/NVictaTechSolution/react-wifi-status-indicator)

A simple wifi status indicator for react applications

## Installation

Install **react-wifi-status-indicator** with **npm**

```bash
  npm install react-wifi-status-indicator
```
Install **react-wifi-status-indicator** with **yarn**

```bash
  yarn add react-wifi-status-indicator
```

## API Reference

| Parameter         | Type             | Description                                                                |
| :---------------- | :--------------- | :------------------------------------------------------------------------- |
| `status`          | `WifiStatusType` | "Excellent", "Good", "Fair", "Poor",  "Unavailable", "Error", "Searching"  |
| `color`           | `string`         | Set to color for wifi status levels                                         |
| `errorColor`      | `string`         | Set to color for wifi status when error occurs                             |
| `offlineColor`    | `string`         | Set to color for wifi status when offline                                  |

## Usage/Examples

```javascript
// ES6 or TypeScript:
import {WifiStatus} from 'react-wifi-status-indicator';

const Example = () =>{
  return <div>
  <WifiStatus status={WifiStatusType.Fair}>
  </div>
}
```

## License

[MIT](https://raw.githubusercontent.com/NVictaTechSolution/react-wifi-status-indicator/main/LICENSE)