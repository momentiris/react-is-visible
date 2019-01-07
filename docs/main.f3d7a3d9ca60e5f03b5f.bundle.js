(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(56);__webpack_require__(0),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(363)),_createClass2=_interopRequireDefault(__webpack_require__(364)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(365)),_getPrototypeOf3=_interopRequireDefault(__webpack_require__(367)),_inherits2=_interopRequireDefault(__webpack_require__(368)),_assertThisInitialized2=_interopRequireDefault(__webpack_require__(153)),_defineProperty2=_interopRequireDefault(__webpack_require__(94)),_react=_interopRequireDefault(__webpack_require__(31)),_reactDom=_interopRequireDefault(__webpack_require__(146)),_VisibilityObserver=_interopRequireDefault(__webpack_require__(95)),IsVisible=function(_React$Component){function IsVisible(){var _getPrototypeOf2,_this;(0,_classCallCheck2.default)(this,IsVisible);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(IsVisible)).call.apply(_getPrototypeOf2,[this].concat(args))),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(_this)),"state",{isVisible:!1}),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(_this)),"handleVisibilityChange",function(_ref){var isIntersecting=_ref.isIntersecting;_this.state.isVisible!==isIntersecting&&_this.setState({isVisible:isIntersecting})}),_this}return(0,_inherits2.default)(IsVisible,_React$Component),(0,_createClass2.default)(IsVisible,[{key:"componentDidMount",value:function(){this.unwatch=_VisibilityObserver.default.watch(_reactDom.default.findDOMNode(this),this.handleVisibilityChange)}},{key:"shouldComponentUpdate",value:function(_nextProps,nextState){return nextState!==this.state}},{key:"componentWillUnmount",value:function(){this.unwatch()}},{key:"render",value:function(){var isVisible=this.state.isVisible,renderedChildren=this.props.children(isVisible);return renderedChildren&&_react.default.Children.only(renderedChildren)}}]),IsVisible}(_react.default.Component),_default=IsVisible;exports.default=_default,IsVisible.__docgenInfo={description:"",methods:[{name:"handleVisibilityChange",docblock:null,modifiers:[],params:[{name:"{ isIntersecting }",type:null}],returns:null}],displayName:"IsVisible"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/IsVisible.js"]={name:"IsVisible",docgenInfo:IsVisible.__docgenInfo,path:"src/IsVisible.js"})},154:function(module,exports,__webpack_require__){__webpack_require__(155),__webpack_require__(234),module.exports=__webpack_require__(235)},235:function(module,exports,__webpack_require__){"use strict";(function(module){__webpack_require__(15),__webpack_require__(12),__webpack_require__(16);var _react=__webpack_require__(117),_addonNotes=__webpack_require__(351),req=__webpack_require__(353);(0,_react.addDecorator)(_addonNotes.withNotes),(0,_react.configure)(function(){req.keys().forEach(req)},module)}).call(this,__webpack_require__(84)(module))},353:function(module,exports,__webpack_require__){var map={"./index.stories.js":354};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=353},354:function(module,exports,__webpack_require__){"use strict";(function(module){var _interopRequireWildcard=__webpack_require__(355),_interopRequireDefault=__webpack_require__(56),_extends2=_interopRequireDefault(__webpack_require__(150)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(151)),_defineProperty2=_interopRequireDefault(__webpack_require__(94)),_objectSpread2=_interopRequireDefault(__webpack_require__(357)),_react=_interopRequireWildcard(__webpack_require__(31)),_react2=__webpack_require__(117),_src=_interopRequireWildcard(__webpack_require__(358)),_asHOC=_interopRequireDefault(__webpack_require__(377)),_asHook=_interopRequireDefault(__webpack_require__(378)),_asRenderProp=_interopRequireDefault(__webpack_require__(379)),wrapperStyling=function(){var addStyling=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return(0,_objectSpread2.default)({font:"500 16px/1.5 sans-serif",color:"white",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",alignItems:"center"},addStyling)},boxStyling=function(isVisible){var _ref;return _ref={boxSizing:"border-box",margin:0,padding:"25px",height:"256px",width:"256px"},(0,_defineProperty2.default)(_ref,"margin","25px"),(0,_defineProperty2.default)(_ref,"display","flex"),(0,_defineProperty2.default)(_ref,"justifyContent","center"),(0,_defineProperty2.default)(_ref,"alignItems","center"),(0,_defineProperty2.default)(_ref,"transition","background-color 1s ease"),(0,_defineProperty2.default)(_ref,"backgroundColor",isVisible?"magenta":"transparent"),_ref},FunctionalComponent=function(_ref2){var isVisible=_ref2.isVisible,children=_ref2.children,props=(0,_objectWithoutProperties2.default)(_ref2,["isVisible","children"]);return _react.default.createElement("h1",(0,_extends2.default)({style:boxStyling(isVisible)},props),children)},HookComponent=function(props){var nodeRef=(0,_react.useRef)(),isVisible=(0,_src.useIsVisible)(nodeRef);return _react.default.createElement("h1",(0,_extends2.default)({ref:nodeRef,style:boxStyling(isVisible)},props),isVisible&&"I'm visible!")},FunctionalComponentWithIsVisible=(0,_src.withIsVisible)(FunctionalComponent);(0,_react2.storiesOf)("React Is Visible",module).add("as HOC",function(){return _react.default.createElement("div",{style:wrapperStyling({height:"200vh"})},_react.default.createElement("h2",{style:{color:"black",marginBottom:"auto"}},"Scroll down"),_react.default.createElement(FunctionalComponentWithIsVisible,null,"I'm visible!"))},{notes:{markdown:_asHOC.default}}).add("as Render Prop",function(){return _react.default.createElement("div",{style:wrapperStyling({height:"200vh"})},_react.default.createElement("h2",{style:{color:"black",marginBottom:"auto"}},"Scroll down"),_react.default.createElement(_src.default,null,function(isVisible){return _react.default.createElement(FunctionalComponent,{isVisible:isVisible},"I'm visible!")}))},{notes:{markdown:_asRenderProp.default}}).add("as Hook",function(){return _react.default.createElement("div",{style:wrapperStyling({height:"200vh"})},_react.default.createElement("h2",{style:{color:"black",marginBottom:"auto"}},"Scroll down"),_react.default.createElement(HookComponent,null))},{notes:{markdown:_asHook.default}})}).call(this,__webpack_require__(84)(module))},358:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(56);__webpack_require__(0),Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"withIsVisible",{enumerable:!0,get:function(){return _withIsVisible.withIsVisible}}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _IsVisible.default}}),Object.defineProperty(exports,"useIsVisible",{enumerable:!0,get:function(){return _useIsVisible.default}}),Object.defineProperty(exports,"VisibilityObserver",{enumerable:!0,get:function(){return _VisibilityObserver.default}});var _withIsVisible=__webpack_require__(359),_IsVisible=_interopRequireDefault(__webpack_require__(152)),_useIsVisible=_interopRequireDefault(__webpack_require__(372)),_VisibilityObserver=_interopRequireDefault(__webpack_require__(95))},359:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(56);__webpack_require__(0),Object.defineProperty(exports,"__esModule",{value:!0}),exports.withIsVisible=void 0;var _extends2=_interopRequireDefault(__webpack_require__(150)),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__(151));__webpack_require__(53);var _react=_interopRequireDefault(__webpack_require__(31)),_hoistNonReactStatics=_interopRequireDefault(__webpack_require__(360)),_IsVisible=_interopRequireDefault(__webpack_require__(152)),getDisplayName=function(WrappedComponent){return WrappedComponent.displayName||WrappedComponent.name||"Component"};exports.withIsVisible=function(WrappedComponent){function forwardRef(props,ref){return _react.default.createElement(WithIsVisible,(0,_extends2.default)({},props,{forwardedRef:ref}))}var WithIsVisible=function(_ref){var forwardedRef=_ref.forwardedRef,props=(0,_objectWithoutProperties2.default)(_ref,["forwardedRef"]);return _react.default.createElement(_IsVisible.default,{children:function(isVisible){return _react.default.createElement(WrappedComponent,(0,_extends2.default)({},props,{isVisible:isVisible,ref:forwardedRef}))}})};return WithIsVisible.displayName="WithIsVisible(".concat(getDisplayName(WrappedComponent),")"),(0,_hoistNonReactStatics.default)(WithIsVisible,WrappedComponent),forwardRef.displayName="withIsVisible(".concat(getDisplayName(WrappedComponent),")"),_react.default.forwardRef(forwardRef)}},372:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(56);__webpack_require__(0),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(373)),_react=__webpack_require__(31),_VisibilityObserver=_interopRequireDefault(__webpack_require__(95));var _default=function(nodeRef){function handleVisibilityChange(_ref){var isIntersecting=_ref.isIntersecting;setVisible(isIntersecting)}var _useState=(0,_react.useState)(!1),_useState2=(0,_slicedToArray2.default)(_useState,2),isVisible=_useState2[0],setVisible=_useState2[1];return(0,_react.useEffect)(function(){return _VisibilityObserver.default.watch(nodeRef.current,handleVisibilityChange)},[]),isVisible};exports.default=_default},377:function(module,exports){module.exports="## as HOC\n\n------------\n\n**Component definition:** \n\n```jsx\nimport React from 'react'\nimport { withIsVisible } from 'react-is-visible'\n\nconst SomeComponent = ({ isVisible }) => (\n  <h1>\n    {isVisible && `I'm visible!`}\n  </h1>\n)\n\nexport default withIsVisible(SomeComponent)\n```\n\n------------\n\n**How to use:**\n\n```jsx\n<>\n  <SomeComponent />\n</>\n```"},378:function(module,exports){module.exports="## as Hook\n\n------------\n\n**Component definition:** \n\n```js\nimport React, { useRef } from 'react'\nimport { useIsVisible } from 'react-is-visible'\n\nconst SomeComponent = () => {\n  const nodeRef = useRef()\n  const isVisible = useIsVisible(nodeRef)\n\n  return (\n    <h1 ref={nodeRef}>\n      {isVisible && `I'm visible!`}\n    </h1>\n  )\n}\n```\n\n------------\n\n**How to use:** \n\n```js\n<>\n  <SomeComponent />\n</>\n```"},379:function(module,exports){module.exports="## as HOC\n\n------------\n\n**How to use:**\n\n```jsx\nimport React from 'react'\nimport IsVisible from 'react-is-visible'\n\nconst SomeComponent = () => (\n  <IsVisible>\n    {isVisible => (\n      <h1>\n        {isVisible && `I'm visible!`}\n      </h1>\n    )}\n  </IsVisible>\n)\n```"},95:function(module,exports,__webpack_require__){"use strict";__webpack_require__(0),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__(16),__webpack_require__(12),__webpack_require__(15),__webpack_require__(63),__webpack_require__(370);var intersectionObserver,intersectionObserverOptions={},subscribers=new WeakMap,handleIntersections=function(entries){return entries.forEach(function(entry){return subscribers.get(entry.target).call(null,entry)})},unwatch=function(domNode){intersectionObserver.unobserve(domNode),subscribers.delete(domNode)},_default={getSubscribers:function(){return subscribers},setIntersectionObserverOptions:function(options){intersectionObserver||(intersectionObserverOptions=options)},unwatch:unwatch,watch:function(domNode,callback){if(domNode&&!subscribers.has(domNode))return subscribers.set(domNode,callback),(intersectionObserver||(intersectionObserver=new IntersectionObserver(handleIntersections,intersectionObserverOptions)),intersectionObserver).observe(domNode),function(){return unwatch(domNode)}}};exports.default=_default}},[[154,1,2]]]);
//# sourceMappingURL=main.f3d7a3d9ca60e5f03b5f.bundle.js.map