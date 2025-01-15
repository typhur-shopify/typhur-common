"use strict";(self.webpackChunktyphur=self.webpackChunktyphur||[]).push([[56],{74584:function(x,a,e){var d;e.r(a),e.d(a,{demos:function(){return C}});var f=e(90228),o=e.n(f),i=e(87999),I=e.n(i),p=e(75271),T=e(76945),g=e(83320),C={"packages-typhur-ui-src-components-alert-demo-demo":{component:p.memo(p.lazy(function(){return e.e(433).then(e.bind(e,23680))})),asset:{type:"BLOCK",id:"packages-typhur-ui-src-components-alert-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12189).Z},"@typhur-shopify/ui":{type:"NPM",value:"1.0.4"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{perfectD:g,react:d||(d=e.t(p,2))},renderOpts:{compile:function(){var y=I()(o()().mark(function r(){var u,D=arguments;return o()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(66).then(e.bind(e,3066));case 2:return c.abrupt("return",(u=c.sent).default.apply(u,D));case 3:case"end":return c.stop()}},r)}));function h(){return y.apply(this,arguments)}return h}()}}}},83320:function(x,a,e){e.r(a),e.d(a,{Alert:function(){return se},Button:function(){return fe}});var d=e(48305),f=e.n(d),o=e(75271),i=e(64677),I=e(14233),p=e(63122),T=e(71529),g=e(76618),C=e(53649),y=e.n(C),h=e(50292),r={prefectFontXs:"10px",prefectFontSm:"12px",prefectFontMd:"14px",prefectFontLg:"16px",prefectIconXs:"16px",prefectIconSm:"18px",prefectIconMd:"20px",prefectIconLg:"22px",prefectPrimaryColor:"#325dff",prefectDangerColor:"#f53f3f",prefectInfoColor:"#00b42a",prefectWarningColor:"#ff7d00",prefectDisabledColor:"#f2f3f5",prefectTextColor:"#ffffff",prefectDarkPrimaryColor:"#3C7EFF",prefectDarkDangerColor:"rgba(183, 63, 63, 0.6)",prefectDarkInfoColor:"rgba(39, 195, 70, 0.6)",prefectDarkWarningColor:"rgba(255, 150, 38, 0.6)",prefectDarkDisabledColor:"#f2f3f5",prefectDarkTextColor:"#ffffff",prefectDarkFontColor:"#ffffffe6",prefectRadiusXs:"5px",prefectRadiusSm:"10px",prefectRadiusMd:"20px",prefectRadiusLg:"50%",prefectTransformXs:"5px",prefectTransformSm:"10px",prefectTransformMd:"15px",prefectTransformLg:"20px"},u,D="#e8f3ff",A="#e8ffea",c="#fef7e8",U="#feece8",W="#253757",K="#22482c",Z="#573d25",X="#553332",k="#4e5969",G="#1d2129",$="#ffffffb3",z="#ffffff",H=r.prefectFontMd,V=r.prefectRadiusXs,J=r.prefectPrimaryColor,Q=r.prefectInfoColor,Y=r.prefectWarningColor,w=r.prefectDangerColor,q=r.prefectFontLg,ee=r.prefectFontXs,M=r.prefectTransformSm,ne=`
.prefect-alert,
.prefect-dark-alert {
  padding: 12px 15px;
  font-size: `.concat(H,`;
  text-align: left;
  display: flex;
  border-radius: `).concat(V,`;
  justify-content: space-between;

  .alert-content {
    display: flex;
    color: `).concat(k,`;

    .alert-icon {
      margin-right: `).concat(M,`;

      &-info {
        color: `).concat(J,`;
      }

      &-success {
        color: `).concat(Q,`;
      }

      &-warning {
        color: `).concat(Y,`;
      }

      &-error {
        color: `).concat(w,`;
      }
    }

    .alert-text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: `).concat(q,`;
        margin-bottom: `).concat(M,`;
        color: `).concat(G,`;
      }
    }
  }

  .close-icon {
    font-size: `).concat(ee,`;
    cursor: pointer;
  }
}

.prefect-dark-alert-info {
  background-color: `).concat(W,`;
}

.prefect-dark-alert-success {
  background-color: `).concat(K,`;
}

.prefect-dark-alert-warning {
  background-color: `).concat(Z,`;
}

.prefect-dark-alert-error {
  background-color: `).concat(X,`;
}

.prefect-alert-info {
  background-color: `).concat(D,`;
}

.prefect-alert-success {
  background-color: `).concat(A,`;
}

.prefect-alert-warning {
  background-color: `).concat(c,`;
}

.prefect-alert-error {
  background-color: `).concat(U,`;
}

.prefect-dark-alert {
  .alert-content {
    color: `).concat($,`;

    .alert-text .title {
      color: `).concat(z,`;
    }
  }
}
`),te=`
.fadeContent-enter,
.fadeContent-appear {
  opacity: 0;
}

.fadeContent-enter-active,
.fadeContent-appear-active {
  opacity: 1;
  transition: opacity 200ms;
}

.fadeContent-exit {
  opacity: 1;
}

.fadeContent-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}
`,re=h.ZP.div(u||(u=y()([`
	`,`
	`,`
`])),ne,te),n=e(52676),P=(0,o.createContext)({}),De=function(t){var l=t.children;return _jsx(P.Provider,{value:t,children:l})},Ee=null,ae=e(15558),oe=e.n(ae);function ce(){for(var m=[],t=arguments.length,l=new Array(t),s=0;s<t;s++)l[s]=arguments[s];return l.forEach(function(v){v!==void 0&&v!==""&&m.push(v)}),oe()(new Set(m)).join(" ")}var le=function(t,l){var s=t.style,v=t.className,L=t.type,E=L===void 0?"info":L,j=t.title,ie=t.content,O=t.showClear,pe=O===void 0?!1:O,b=t.showIcon,ue=b===void 0?!0:b,me=t.closeElement,B=t.onClose,ve=(0,o.useState)(!0),N=f()(ve,2),xe=N[0],Ie=N[1],R=(0,o.useContext)(P),ge=R.prefixCls,S=R.darkTheme,Ce=ce(ge,v,"prefect-".concat(S?"dark-":"","alert-").concat(E),S?"prefect-dark-alert":"prefect-alert"),ye=(0,o.useMemo)(function(){switch(E){case"info":return(0,n.jsx)(i.Z,{className:"alert-icon-info"});case"success":return(0,n.jsx)(I.Z,{className:"alert-icon-success"});case"warning":return(0,n.jsx)(i.Z,{className:"alert-icon-warning"});case"error":return(0,n.jsx)(p.Z,{className:"alert-icon-error"});default:return(0,n.jsx)(i.Z,{className:"alert-icon-info"})}},[E]),he=function(){Ie(!1),B&&B()};return(0,n.jsx)(re,{children:(0,n.jsx)(g.Z,{in:xe,timeout:200,appear:!0,mountOnEnter:!0,classNames:"fadeContent",unmountOnExit:!0,onEnter:function(_){_.style.display="flex"},onExited:function(_){_.style.display="none"},children:(0,n.jsxs)("div",{className:Ce,style:s,ref:l,children:[(0,n.jsxs)("div",{className:"alert-content",children:[ue&&(0,n.jsx)("div",{className:"alert-icon",children:ye}),(0,n.jsxs)("div",{className:"alert-text",children:[j&&(0,n.jsx)("div",{className:"title",children:j}),ie]})]}),pe&&(0,n.jsx)("div",{className:"close-icon",onClick:he,children:me||(0,n.jsx)(T.Z,{})})]})})})},se=(0,o.forwardRef)(le),de=function(){return(0,n.jsx)("div",{children:"button"})},fe=de},18034:function(x,a,e){e.r(a),e.d(a,{texts:function(){return f}});var d=e(76945);const f=[{value:"\u5411\u7528\u6237\u663E\u793A\u8B66\u544A\u7684\u4FE1\u606F\u65F6\uFF0C\u901A\u8FC7\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\uFF0C\u9002\u7528\u4E8E\u7B80\u77ED\u7684\u8B66\u544A\u63D0\u793A\u3002",paraId:1,tocIndex:1},{value:"Name",paraId:2,tocIndex:2},{value:"Description",paraId:2,tocIndex:2},{value:"Type",paraId:2,tocIndex:2},{value:"Default",paraId:2,tocIndex:2},{value:"style",paraId:2,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:2,tocIndex:2},{value:"CSSProperties",paraId:2,tocIndex:2},{value:"--",paraId:2,tocIndex:2},{value:"className",paraId:2,tocIndex:2},{value:"\u7C7B\u540D",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"--",paraId:2,tocIndex:2},{value:"type",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"info / success / warning / error",paraId:2,tocIndex:2},{value:"info",paraId:2,tocIndex:2},{value:"title",paraId:2,tocIndex:2},{value:"\u663E\u793A\u6807\u9898",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"''",paraId:2,tocIndex:2},{value:"content",paraId:2,tocIndex:2},{value:"\u8B66\u544A\u6587\u5B57",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"''",paraId:2,tocIndex:2},{value:"showClear",paraId:2,tocIndex:2},{value:"\u663E\u793A\u6E05\u9664\u6309\u94AE",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"false",paraId:2,tocIndex:2},{value:"showIcon",paraId:2,tocIndex:2},{value:"\u663E\u793A\u8B66\u544A\u63D0\u793A\u56FE\u6807",paraId:2,tocIndex:2},{value:"boolean",paraId:2,tocIndex:2},{value:"true",paraId:2,tocIndex:2},{value:"closeElement",paraId:2,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807",paraId:2,tocIndex:2},{value:"React.ReactNode / string",paraId:2,tocIndex:2},{value:"--",paraId:2,tocIndex:2},{value:"onClose",paraId:2,tocIndex:2},{value:"\u5173\u95ED\u56DE\u8C03\u51FD\u6570",paraId:2,tocIndex:2},{value:"Function",paraId:2,tocIndex:2},{value:"--",paraId:2,tocIndex:2}]},12189:function(x,a){a.Z=`import { Alert } from 'perfectD'
import React from 'react'
export default function index() {
	const margin = { margin: '15px 0' }
	return (
		<div>
			<Alert type="info" content="Here is an info text" style={margin} />
			<Alert type="success" content="Here is an success text" style={margin} />
			<Alert type="warning" content="Here is an warning text" style={margin} />
			<Alert type="error" content="Here is an error text" style={margin} />
		</div>
	)
}
`}}]);
