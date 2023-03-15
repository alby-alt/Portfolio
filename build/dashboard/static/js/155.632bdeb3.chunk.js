(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[155],{1040:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(53),i=a(1043),c=a(573),l=a(27),m=a.n(l),d=a(2),s=m()((function(){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,a=e.breadcrumbs,n=e.children,l=e.className,m=e.restProps,u=s();return r.a.createElement(c.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(o.a,Object.assign({className:Object(d.default)(u.pageFull,l)},m),(t||a)&&r.a.createElement(i.d,{heading:t,breadcrumbComponent:a&&r.a.createElement(i.c,{items:a})}),n))}},1043:function(e,t,a){"use strict";a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return k}));var n=a(17),r=a(8),o=a(0),i=a.n(o),c=a(119),l=a(53),m=a(106),d=a(2),s=["heading","breadcrumbComponent","children"],u=Object(c.a)((function(e){return{pageHeaderRoot:Object(r.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(r.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),p=function(e){var t=e.heading,a=e.breadcrumbComponent,r=e.children,o=Object(n.a)(e,s),c=u();return i.a.createElement(l.a,Object.assign({className:Object(d.default)(c.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},o),i.a.createElement(m.a,{component:"div",variant:"h1",className:Object(d.default)(c.titleRoot,"title")},t),i.a.createElement(l.a,{ml:{sm:"auto"}},a),r)},b=a(1083),g=a(60),f=["items"],E=Object(c.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),h=function(e){var t=e.items,a=(Object(n.a)(e,f),E());return i.a.createElement(b.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?i.a.createElement(m.a,{key:t,className:a.textSm,color:"textPrimary"},e.label):i.a.createElement(g.c,{key:t,className:Object(d.default)(a.textSm,a.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},x=a(899),v=a(35),j=a(180),y=a(1040),O=function(e){var t=e.SourceCodeComponent,a=e.SettingsComponent,n=e.children;return i.a.createElement(y.a,null,i.a.createElement(j.a,null,i.a.createElement(x.a,{item:!0,xs:12,md:7},i.a.createElement(p,{heading:"Preview"}),i.a.createElement(l.a,{mb:8},n),i.a.createElement(v.a,null,t)),i.a.createElement(x.a,{item:!0,xs:12,md:5},a)))},C=a(1045),k=function(e){var t=e.pageTitle,a=e.menus,n=e.children,r=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return i.a.createElement(C.a,{pageTitle:t,breadcrumbs:r,menus:a},n)}},1045:function(e,t,a){"use strict";var n=a(8),r=a(0),o=a.n(r),i=a(53),c=a(957),l=a(106),m=a(892),d=a(893),s=a(949),u=a(119),p=a(1040),b=Object(u.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(n.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(n.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.a=function(e){var t=e.pageTitle,a=e.menus,n=e.breadcrumbs,r=e.children,u=b();return o.a.createElement(p.a,{heading:t,breadcrumbs:n},o.a.createElement(i.a,{className:u.root},o.a.createElement(i.a,{className:u.contentArea},r),o.a.createElement(c.a,{xsDown:!0},o.a.createElement(i.a,{className:u.contentSidebar},o.a.createElement(l.a,{component:"h4",variant:"h4"},"Contents"),o.a.createElement(m.a,null,a.map((function(e,t){return o.a.createElement(d.a,{key:t,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},o.a.createElement(s.a,{primary:e.label}))})))))))}},1083:function(e,t,a){"use strict";var n=a(1),r=a(115),o=a(7),i=a(0),c=(a(113),a(2)),l=a(10),m=a(106),d=a(24),s=a(18),u=Object(s.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=a(327);var b=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.d)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(o.a)(e,["classes"]);return i.createElement(p.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),i.createElement(u,{className:t.icon}))}));var g=i.forwardRef((function(e,t){var a=e.children,l=e.classes,d=e.className,s=e.component,u=void 0===s?"nav":s,p=e.expandText,g=void 0===p?"Show path":p,f=e.itemsAfterCollapse,E=void 0===f?1:f,h=e.itemsBeforeCollapse,x=void 0===h?1:h,v=e.maxItems,j=void 0===v?8:v,y=e.separator,O=void 0===y?"/":y,C=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=i.useState(!1),N=k[0],w=k[1],I=i.Children.toArray(a).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return i.createElement(m.a,Object(n.a)({ref:t,component:u,color:"textSecondary",className:Object(c.default)(l.root,d)},C),i.createElement("ol",{className:l.ol},function(e,t,a){return e.reduce((function(n,r,o){return o<e.length-1?n=n.concat(r,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},a)):n.push(r),n}),[])}(N||j&&I.length<=j?I:function(e){return x+E>=e.length?e:[].concat(Object(r.a)(e.slice(0,x)),[i.createElement(b,{"aria-label":g,key:"ellipsis",onClick:function(e){w(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-E,e.length)))}(I),l.separator,O)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},1681:function(e,t,a){"use strict";var n=a(9),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(8),m=a(2),d=a(260),s=a(385),u=a(267),p=a.n(u),b=a(119),g=a(24),f=a(84),E=a(85),h=Object(b.a)((function(e){return{collapseHeader:{display:"flex",alignItems:"center",backgroundColor:e.palette.background.paper,border:"1px solid ".concat(Object(g.a)(e.palette.common.black,.12)),borderRadius:4,padding:"8px 24px",marginTop:10,marginBottom:10},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),x=function(e){var t=e.isGrid,a=e.items,n=e.itemPadding,r=e.column,i=e.renderItem;return t?o.a.createElement(E.a,{data:a,itemPadding:n,column:r,renderRow:i}):o.a.createElement(f.a,{data:a,renderRow:i})},v=function(e){var t=e.isGrid,a=e.itemPadding,i=e.column,c=e.isExpandable,u=e.group,b=e.items,g=e.renderHeader,f=e.renderItem,E=h(),v=Object(r.useState)(!1),j=Object(n.a)(v,2),y=j[0],O=j[1],C=function(){O(!y)};return c?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:Object(m.default)(E.collapseHeader,"CmtGroupListItem-collapseHeader"),onClick:C},o.a.createElement("div",null,g(u)),o.a.createElement(d.a,{className:Object(m.default)(E.expand,Object(l.a)({},E.expandOpen,y)),edge:"end",onClick:C,"aria-expanded":y,"aria-label":"show more"},o.a.createElement(p.a,null))),o.a.createElement(s.a,{in:y,timeout:"auto",unmountOnExit:!0},o.a.createElement(x,{isGrid:t,items:b[u.id],itemPadding:a,column:i,renderItem:f}))):o.a.createElement(o.a.Fragment,null,g(u),o.a.createElement(x,{isGrid:t,items:b[u.id],itemPadding:a,column:i,renderItem:f}))},j=function(e){var t=e.isExpandable,a=e.isGrid,i=e.itemPadding,c=e.column,l=e.data,m=e.renderHeader,d=e.renderItem,s=e.groupIdentifier,u=Object(r.useState)([]),p=Object(n.a)(u,2),b=p[0],g=p[1],E=Object(r.useState)([]),h=Object(n.a)(E,2),x=h[0],j=h[1];Object(r.useEffect)((function(){var e=[],t=l.reduce((function(t,a){var n;return(n=s(a))&&n.id&&(e.some((function(e){return e.id===n.id}))||e.push(n),t[n.id]||(t[n.id]=[]),t[n.id].push(a)),t}),{});g(e),j(t)}),[l,s]);return o.a.createElement(o.a.Fragment,null,b.length>0&&o.a.createElement(f.a,{data:b,renderRow:function(e){return o.a.createElement(v,{key:e.id,isExpandable:t,isGrid:a,itemPadding:i,column:c,group:e,items:x,renderHeader:m,renderItem:d})}}))};t.a=j;j.defaultProps={isExpandable:!1,isGrid:!1,data:[]},j.prototype={isExpandable:c.a.bool,isGrid:c.a.bool,itemPadding:c.a.number,column:c.a.number,data:c.a.array,renderHeader:c.a.func,renderItem:c.a.func,groupIdentifier:c.a.func}},3610:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1043),i=a(262),c=a(394),l=a(86),m=function(){var e=Object(n.useContext)(i.a),t=e.isGrid,a=e.setGrid,o=e.isExpandable,m=e.setExpandable;return r.a.createElement(c.e,{title:"Cmt Group List"},r.a.createElement(c.d,{title:"Basic Settings"},r.a.createElement(l.a,{name:"expandable-view",label:"Show Expandable View",checked:o,onChange:function(e){return m(e.target.checked)}})),r.a.createElement(c.d,null,r.a.createElement(l.a,{name:"grid-view",label:"Show As Grid List",checked:t,onChange:function(e){return a(e.target.checked)}})))},d=a(397),s=a(181),u=a(1681),p=a(114),b=a.n(p),g=a(53),f=a(119),E=a(375),h=a(106),x=a(392),v=Object(f.a)((function(e){return{itemRoot:{padding:1,"& .Cmt-avatar":{height:56,width:56},"& .Cmt-media-header":{marginBottom:8},"& .Cmt-media-image":{marginRight:12,marginTop:0}},titleRoot:{fontSize:16},descText:{color:e.palette.text.secondary}}})),j=function(){var e=v(),t=Object(n.useContext)(i.a),a=t.isExpandable,o=t.isGrid,c=d.a.projects;return r.a.createElement(b.a,{style:{maxHeight:350}},r.a.createElement(u.a,{data:c,renderItem:function(t,a){return r.a.createElement(g.a,{mb:o?0:2,key:a,className:e.itemRoot},r.a.createElement(x.e,null,r.a.createElement(s.a,{avatar:t.profile_pic,title:t.title,titleProps:{className:e.titleRoot},content:t.description,contentProps:{variant:"body2",className:e.descText}},r.a.createElement(E.a,{variant:"contained",color:"primary"},"Buy Now"))))},renderHeader:function(e){return r.a.createElement(h.a,{component:"div",variant:"body1",style:{marginBottom:a?0:10,marginTop:a?0:10}},e.groupName)},groupIdentifier:function(e){return{id:e.projectName.toLowerCase(),groupName:e.projectName}},isExpandable:a,isGrid:o,itemPadding:10,column:2}))},y=a(9),O=function(e){var t=e.children,a=Object(n.useState)(!1),o=Object(y.a)(a,2),c=o[0],l=o[1],m=Object(n.useState)(!1),d=Object(y.a)(m,2),s=d[0],u=d[1];return r.a.createElement(i.a.Provider,{value:{isGrid:c,setGrid:l,isExpandable:s,setExpandable:u}},t)},C=function(){var e=Object(n.useContext)(i.a),t=e.isExpandable,a=e.isGrid;return r.a.createElement(c.f,{sourceCode:"\nconst theme = useTheme();\n\n<CmtGroupList\n  data={projects}\n  renderItem={renderItem}\n  renderHeader={renderHeader}\n  groupIdentifier={groupIdentifier}\n  isExpandable={".concat(t,"}\n  isGrid={").concat(a,"} ")+(a?"\n  itemPadding={10}\n  column={2}":"")+"\n/>\n\nconst groupIdentifier = dataItem => {\n  return { id: dataItem.projectName.toLowerCase(), groupName: dataItem.projectName };\n};\n\nconst renderItem = (item, index) => {\n  return (\n    <Box mb={".concat(a?0:2,'} key={index} className={classes.itemRoot}>\n      <JumboCard>\n        <CmtMediaObject\n          avatar={item.profile_pic}\n          title={item.title}\n          titleProps={{ className: classes.titleRoot }}\n          content={item.description}\n          contentProps={{ variant: \'body2\', className: classes.descText }}>\n          <Button variant="contained" color="primary">\n            Buy Now\n          </Button>\n        </CmtMediaObject>\n      </JumboCard>\n    </Box>\n  );\n};\n\nconst renderHeader = group => {\n  return (\n    <Typography\n        component="div"\n        variant="body1"\n        style={{ \n          marginBottom: ').concat(t?0:10,", \n          marginTop: ").concat(t?0:10," \n        }}>\n        {group.groupName}\n      </Typography>\n  );\n};\n")})};t.default=function(){return r.a.createElement(O,null,r.a.createElement(o.a,{SourceCodeComponent:r.a.createElement(C,null),SettingsComponent:r.a.createElement(m,null)},r.a.createElement(j,null)))}}}]);
//# sourceMappingURL=155.632bdeb3.chunk.js.map