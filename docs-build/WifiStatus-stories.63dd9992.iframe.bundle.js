"use strict";(self.webpackChunkreact_wifi_status_indicator=self.webpackChunkreact_wifi_status_indicator||[]).push([[776],{"./stories/WifiStatus.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>WifiStatus_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let WifiStatusType=function(WifiStatusType){return WifiStatusType.Excellent="Excellent",WifiStatusType.Good="Good",WifiStatusType.Fair="Fair",WifiStatusType.Poor="Poor",WifiStatusType.Unavailable="Unavailable",WifiStatusType.Error="Error",WifiStatusType.Searching="Searching",WifiStatusType}({});const SearchingKeyFrames=styled_components_browser_esm.F4`
    0% {
      opacity: 0.2;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.2;
    }
  `,animation=()=>styled_components_browser_esm.iv`
  ${SearchingKeyFrames} 2s ease infinite
`,SVG=styled_components_browser_esm.ZP.svg`
  width: ${props=>"number"==typeof props.width?`${props.width}px`:props.width};
  height: 100%;
`,Path=styled_components_browser_esm.ZP.path``,Level1Path=(0,styled_components_browser_esm.ZP)(Path)`
  opacity: ${props=>props.isActive?1:.2};
  animation: ${props=>WifiStatusType.Searching===props.status?animation:""};
  animation-delay: 1.5s;
`,Level2Path=(0,styled_components_browser_esm.ZP)(Path)`
  opacity: ${props=>props.isActive?1:.2};
  animation: ${props=>WifiStatusType.Searching===props.status?animation:""};
  animation-delay: 1s;
`,Level3Path=(0,styled_components_browser_esm.ZP)(Path)`
  opacity: ${props=>props.isActive?1:.2};
  animation: ${props=>WifiStatusType.Searching===props.status?animation:""};
  animation-delay: 0.5s;
`,Level4Path=(0,styled_components_browser_esm.ZP)(Path)`
  opacity: ${props=>props.isActive?1:.2};
  animation: ${props=>WifiStatusType.Searching===props.status?animation:""};
`,WifiStatus=_ref=>{let{status=WifiStatusType.Excellent,color="#148742",errorColor="#D32F2F",offlineColor="#CFCFCF",width="100%"}=_ref;const isLevel1=status===WifiStatusType.Excellent,isLevel2=status===WifiStatusType.Good||isLevel1,isLevel3=status===WifiStatusType.Fair||isLevel1||isLevel2,isLevel4=status===WifiStatusType.Poor||isLevel1||isLevel2||isLevel3;return(0,jsx_runtime.jsxs)(SVG,{width,viewBox:"0 0 475 350",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)(Level1Path,{isActive:isLevel1,status,fillRule:"evenodd",clipRule:"evenodd",d:"M33.9277 129.879C87.4393 80.3039 159.061 50 237.76 50C316.199 50 387.606 80.1032 441.06 129.387L474.988 92.659C412.62 35.1371 329.294 0 237.76 0C145.966 0 62.4254 35.3378 0 93.1516L33.9277 129.879Z",fill:color}),(0,jsx_runtime.jsx)(Level2Path,{isActive:isLevel2,status,fillRule:"evenodd",clipRule:"evenodd",d:"M101.783 203.335C137.467 170.236 185.251 150 237.76 150C290.009 150 337.579 170.035 373.205 202.843L407.132 166.115C362.592 125.069 303.104 100 237.76 100C172.156 100 112.453 125.27 67.8555 166.607L101.783 203.335Z",fill:color}),(0,jsx_runtime.jsx)(Level3Path,{isActive:isLevel3,status,fillRule:"evenodd",clipRule:"evenodd",d:"M169.639 276.791C187.495 260.168 211.44 250 237.76 250C263.82 250 287.551 259.968 305.349 276.298L339.277 239.571C312.565 215.002 276.914 200 237.76 200C198.345 200 162.481 215.202 135.711 240.063L169.639 276.791Z",fill:color}),(0,jsx_runtime.jsx)(Level4Path,{isActive:isLevel4,status,fillRule:"evenodd",clipRule:"evenodd",d:"M203.567 313.519L237.266 350L271.421 313.027C262.537 304.934 250.725 300 237.76 300C224.535 300 212.509 305.135 203.567 313.519Z",fill:color}),(0,jsx_runtime.jsx)("path",{display:status===WifiStatusType.Unavailable?"block":"none",id:"wifi-status-off",fillRule:"evenodd",clipRule:"evenodd",d:"M0.0473388 92.9563L1.24574e-05 92.9051C62.3966 35.2374 145.83 0 237.494 0C329.158 0 412.592 35.2374 474.988 92.9052L474.946 92.9503L475 93L435.111 136.074L237.494 350L237.267 349.754L237 350L236.266 349.321L236.32 349.263L0 93L0.0473388 92.9563Z",fill:offlineColor}),(0,jsx_runtime.jsx)("path",{display:status===WifiStatusType.Error?"block":"none",id:"wifi-status-error",fillRule:"evenodd",clipRule:"evenodd",d:"M220 27C214.477 27 210 31.4771 210 37V250.343C210 255.866 214.477 260.343 220 260.343H254C259.523 260.343 264 255.866 264 250.343V37C264 31.4772 259.523 27 254 27H220ZM220 273.307C214.477 273.307 210 277.784 210 283.307V313C210 318.523 214.477 323 220 323H254C259.523 323 264 318.523 264 313V283.307C264 277.784 259.523 273.307 254 273.307H220Z",fill:errorColor})]})};WifiStatus.displayName="WifiStatus";try{WifiStatus.displayName="WifiStatus",WifiStatus.__docgenInfo={description:"",displayName:"WifiStatus",props:{status:{defaultValue:{value:"WifiStatusType.Excellent"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"Excellent"'},{value:'"Good"'},{value:'"Fair"'},{value:'"Poor"'},{value:'"Unavailable"'},{value:'"Error"'},{value:'"Searching"'}]}},color:{defaultValue:{value:"#148742"},description:"",name:"color",required:!1,type:{name:"string"}},errorColor:{defaultValue:{value:"#D32F2F"},description:"",name:"errorColor",required:!1,type:{name:"string"}},offlineColor:{defaultValue:{value:"#CFCFCF"},description:"",name:"offlineColor",required:!1,type:{name:"string"}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#WifiStatus"]={docgenInfo:WifiStatus.__docgenInfo,name:"WifiStatus",path:"src/index.tsx#WifiStatus"})}catch(__react_docgen_typescript_loader_error){}const WifiStatus_stories={title:"Welcome",component:WifiStatus,argTypes:{children:{control:{type:"text"}}},parameters:{controls:{expanded:!0}}},Template=args=>(0,jsx_runtime.jsx)(WifiStatus,{status:WifiStatusType.Excellent,...args});Template.displayName="Template";const Default=Template.bind({});Default.args={status:WifiStatusType.Excellent,color:"#148742",width:500},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <WifiStatus status={WifiStatusType.Excellent} {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=WifiStatus-stories.63dd9992.iframe.bundle.js.map