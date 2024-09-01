import{j as r}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const o=({logo:e,navItems:l})=>r.jsxs("header",{className:"header",children:[r.jsx(m,{children:e}),r.jsx("nav",{className:"header__nav",children:l.map(a=>r.jsx("a",{className:"header__nav__link",...a,children:a.itemLabel}))})]}),m=({children:e})=>typeof e=="string"?r.jsx("a",{href:"/",className:"header__logo",children:e}):e;o.__docgenInfo={description:"",methods:[],displayName:"Header",props:{logo:{required:!0,tsType:{name:"ReactNode"},description:""},navItems:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(LinkHTMLAttributes<HTMLAnchorElement> & { itemLabel: string })[]"},description:""}}};const p={title:"Header",component:o,parameters:{layout:"fullscreen"},decorators:e=>r.jsx("div",{style:{maxWidth:1280,margin:"auto",paddingTop:"2rem"},children:r.jsx(e,{})})},n={args:{logo:"coolWebsite",navItems:[{href:"/link2",itemLabel:"link 1"},{href:"/link2",itemLabel:"link 2"},{href:"/link2",itemLabel:"link 2"}]}};var s,t,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    logo: "coolWebsite",
    navItems: [{
      href: "/link2",
      itemLabel: "link 1"
    }, {
      href: "/link2",
      itemLabel: "link 2"
    }, {
      href: "/link2",
      itemLabel: "link 2"
    }]
  }
}`,...(i=(t=n.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const h=["Example"];export{n as Example,h as __namedExportsOrder,p as default};
