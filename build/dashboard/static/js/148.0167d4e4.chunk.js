(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[148],{1040:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(53),c=a(1043),l=a(573),i=a(27),s=a.n(i),m=a(2),u=s()((function(){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,a=e.breadcrumbs,n=e.children,i=e.className,s=e.restProps,p=u();return r.a.createElement(l.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(o.a,Object.assign({className:Object(m.default)(p.pageFull,i)},s),(t||a)&&r.a.createElement(c.d,{heading:t,breadcrumbComponent:a&&r.a.createElement(c.c,{items:a})}),n))}},1043:function(e,t,a){"use strict";a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return k})),a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return C}));var n=a(17),r=a(8),o=a(0),c=a.n(o),l=a(119),i=a(53),s=a(106),m=a(2),u=["heading","breadcrumbComponent","children"],p=Object(l.a)((function(e){return{pageHeaderRoot:Object(r.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(r.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),d=function(e){var t=e.heading,a=e.breadcrumbComponent,r=e.children,o=Object(n.a)(e,u),l=p();return c.a.createElement(i.a,Object.assign({className:Object(m.default)(l.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},o),c.a.createElement(s.a,{component:"div",variant:"h1",className:Object(m.default)(l.titleRoot,"title")},t),c.a.createElement(i.a,{ml:{sm:"auto"}},a),r)},f=a(1083),b=a(60),h=["items"],g=Object(l.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),k=function(e){var t=e.items,a=(Object(n.a)(e,h),g());return c.a.createElement(f.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?c.a.createElement(s.a,{key:t,className:a.textSm,color:"textPrimary"},e.label):c.a.createElement(b.c,{key:t,className:Object(m.default)(a.textSm,a.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},E=a(899),x=a(35),y=a(180),v=a(1040),O=function(e){var t=e.SourceCodeComponent,a=e.SettingsComponent,n=e.children;return c.a.createElement(v.a,null,c.a.createElement(y.a,null,c.a.createElement(E.a,{item:!0,xs:12,md:7},c.a.createElement(d,{heading:"Preview"}),c.a.createElement(i.a,{mb:8},n),c.a.createElement(x.a,null,t)),c.a.createElement(E.a,{item:!0,xs:12,md:5},a)))},j=a(1045),C=function(e){var t=e.pageTitle,a=e.menus,n=e.children,r=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return c.a.createElement(j.a,{pageTitle:t,breadcrumbs:r,menus:a},n)}},1045:function(e,t,a){"use strict";var n=a(8),r=a(0),o=a.n(r),c=a(53),l=a(957),i=a(106),s=a(892),m=a(893),u=a(949),p=a(119),d=a(1040),f=Object(p.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(n.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(n.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.a=function(e){var t=e.pageTitle,a=e.menus,n=e.breadcrumbs,r=e.children,p=f();return o.a.createElement(d.a,{heading:t,breadcrumbs:n},o.a.createElement(c.a,{className:p.root},o.a.createElement(c.a,{className:p.contentArea},r),o.a.createElement(l.a,{xsDown:!0},o.a.createElement(c.a,{className:p.contentSidebar},o.a.createElement(i.a,{component:"h4",variant:"h4"},"Contents"),o.a.createElement(s.a,null,a.map((function(e,t){return o.a.createElement(m.a,{key:t,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},o.a.createElement(u.a,{primary:e.label}))})))))))}},1083:function(e,t,a){"use strict";var n=a(1),r=a(115),o=a(7),c=a(0),l=(a(113),a(2)),i=a(10),s=a(106),m=a(24),u=a(18),p=Object(u.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),d=a(327);var f=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.d)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(o.a)(e,["classes"]);return c.createElement(d.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(p,{className:t.icon}))}));var b=c.forwardRef((function(e,t){var a=e.children,i=e.classes,m=e.className,u=e.component,p=void 0===u?"nav":u,d=e.expandText,b=void 0===d?"Show path":d,h=e.itemsAfterCollapse,g=void 0===h?1:h,k=e.itemsBeforeCollapse,E=void 0===k?1:k,x=e.maxItems,y=void 0===x?8:x,v=e.separator,O=void 0===v?"/":v,j=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=c.useState(!1),S=C[0],B=C[1],N=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return c.createElement(s.a,Object(n.a)({ref:t,component:p,color:"textSecondary",className:Object(l.default)(i.root,m)},j),c.createElement("ol",{className:i.ol},function(e,t,a){return e.reduce((function(n,r,o){return o<e.length-1?n=n.concat(r,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},a)):n.push(r),n}),[])}(S||y&&N.length<=y?N:function(e){return E+g>=e.length?e:[].concat(Object(r.a)(e.slice(0,E)),[c.createElement(f,{"aria-label":b,key:"ellipsis",onClick:function(e){B(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-g,e.length)))}(N),i.separator,O)))}));t.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b)},2715:function(e,t,a){var n={"./SimpleBackdrop.txt":2716};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=2715},2716:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport Backdrop from '@material-ui/core/Backdrop';\r\nimport CircularProgress from '@material-ui/core/CircularProgress';\r\nimport Button from '@material-ui/core/Button';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  backdrop: {\r\n    zIndex: theme.zIndex.drawer + 1,\r\n    color: '#fff',\r\n  },\r\n}));\r\n\r\nexport default function SimpleBackdrop() {\r\n  const classes = useStyles();\r\n  const [open, setOpen] = React.useState(false);\r\n  const handleClose = () => {\r\n    setOpen(false);\r\n  };\r\n  const handleToggle = () => {\r\n    setOpen(!open);\r\n  };\r\n\r\n  return (\r\n    <Box>\r\n      <Button variant=\"outlined\" color=\"primary\" onClick={handleToggle}>\r\n        Show backdrop\r\n      </Button>\r\n      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>\r\n        <CircularProgress color=\"inherit\" />\r\n      </Backdrop>\r\n    </Box>\r\n  );\r\n}\r\n"},3643:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(0),r=a.n(n),o=a(1043),c=a(53),l=a(106),i=a(326),s=a(391),m=a(9),u=a(574),p=a(613),d=a(375),f=a(119),b=Object(f.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function h(){var e=b(),t=r.a.useState(!1),a=Object(m.a)(t,2),n=a[0],o=a[1];return r.a.createElement(c.a,null,r.a.createElement(d.a,{variant:"outlined",color:"primary",onClick:function(){o(!n)}},"Show backdrop"),r.a.createElement(u.a,{className:e.backdrop,open:n,onClick:function(){o(!1)}},r.a.createElement(p.a,{color:"inherit"})))}var g=Object(i.a)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),k=a(2715),E=[{label:"Backdrop",link:"backdrop",component:r.a.createElement(h,null),filename:"./SimpleBackdrop.txt"}];function x(){var e=g();return r.a.createElement(o.b,{pageTitle:"Backdrop",menus:E},E.map((function(t,a){return r.a.createElement(c.a,{key:a,id:t.link,className:e.section},r.a.createElement(l.a,{component:"h3",variant:"inherit",className:e.sectionHeading},t.label),r.a.createElement(s.a,{code:k(t.filename).default,language:"jsx"},t.component))})))}}}]);
//# sourceMappingURL=148.0167d4e4.chunk.js.map