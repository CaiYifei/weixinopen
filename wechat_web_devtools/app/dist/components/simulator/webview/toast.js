"use strict";function init(){var e=require("../../../lib/react.js"),t=(require("../../../lib/react-dom.js"),require("../../../stores/webviewStores.js")),s=require("../../../weapp/utils/tools"),i=e.createClass({displayName:"Toast",getInitialState:function(){return{title:"",icon:"success",hidden:!0}},componentDidMount:function(){t.on("SEND_AS_SDK",this.handleAssdkCommand)},componentWillUnmount:function(){t.removeListener("SEND_AS_SDK",this.handleAssdkCommand)},handleAssdkCommand:function(e,t,s){var i=t.args;"showToast"===e?(this.setState({title:i.title||"",image:i.image||"",icon:i.icon||"success",hidden:!1}),this.hiddenTimeId=setTimeout(this.hide,i.duration||1500),s({errMsg:"showToast:ok"})):"hideToast"===e&&(clearTimeout(this.hiddenTimeId),this.hide(),s({errMsg:"hideToast:ok"}))},getIconClass:function(){return this.state.image?"wx-toast-image-icon":"wx-toast-icon wx-icon-"+this.state.icon},hide:function(){this.setState({hidden:!0})},render:function(){var t={fontSize:"55px",color:"#ffffff",display:"block"};return this.state.image&&(t.backgroundImage="url("+s.getUrlFromFilePath(this.props.project,this.state.image)+")"),e.createElement("div",{style:{display:this.state.hidden?"none":"block"}},e.createElement("div",{className:"wx-toast-mask"}),e.createElement("div",{className:"wx-toast"},e.createElement("i",{className:this.getIconClass(),style:t}),e.createElement("p",{className:"wx-toast-content"},this.state.title)))}});_exports=i}var _exports;init(),module.exports=_exports;