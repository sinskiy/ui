import{j as e}from"./jsx-runtime-DEdD30eg.js";import{B as o}from"./Button-xkEtoqT-.js";import{I as a}from"./InputField-CeMqR1e-.js";import"./index-RYns6xqu.js";const F=({formTitle:r,formDescription:T,children:C,loading:W=!1,...L})=>e.jsxs("form",{className:"form",...L,children:[e.jsxs("section",{children:[r&&e.jsx(b,{children:r}),e.jsx(A,{children:T})]}),e.jsx(q,{children:C}),e.jsx(N,{loading:W})]}),b=({children:r})=>typeof r=="string"?e.jsx("h2",{children:r}):e.jsx(e.Fragment,{children:r}),A=({children:r})=>e.jsx("p",{className:"text",children:r}),q=({children:r})=>e.jsx("section",{className:"form__main",children:r}),N=({loading:r})=>e.jsxs("section",{className:"form__nav",children:[e.jsx(o,{type:"submit",loading:r,themeColor:"primary",children:"submit"}),e.jsx(o,{type:"reset",loading:r,themeColor:"error-container",children:"reset"})]});F.__docgenInfo={description:"",methods:[],displayName:"Form",props:{formTitle:{required:!1,tsType:{name:"ReactNode"},description:""},formDescription:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["FormHTMLAttributes"]};const I={title:"Form",component:F,parameters:{layout:"centered"}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"username",type:"text",required:!0,minLength:1,maxLength:30}),e.jsx(a,{label:"password",type:"password",required:!0,minLength:1,maxLength:30})]})}},n={args:{formTitle:"Form title",children:e.jsx(e.Fragment,{children:t.args.children})}},s={args:{formTitle:"Form title",formDescription:"Very long form description for a user. With a description that long they will definitelly understand everything about your form.",children:e.jsx(e.Fragment,{children:t.args.children})}},i={args:{children:e.jsx(e.Fragment,{children:t.args.children}),loading:!0}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <>
        <InputField label="username" type="text" required minLength={1} maxLength={30} />
        <InputField label="password" type="password" required minLength={1} maxLength={30} />
      </>
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,h,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    formTitle: "Form title",
    children: <>{WithChildren.args.children}</>
  }
}`,...(p=(h=n.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    formTitle: "Form title",
    formDescription: "Very long form description for a user. With a description that long they will definitelly understand everything about your form.",
    children: <>{WithChildren.args.children}</>
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,y,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <>{WithChildren.args.children}</>,
    loading: true
  }
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const S=["WithChildren","WithChildrenAndTitle","WithChildrenAndTitleAndDescription","WithChildrenAndLoading"];export{t as WithChildren,i as WithChildrenAndLoading,n as WithChildrenAndTitle,s as WithChildrenAndTitleAndDescription,S as __namedExportsOrder,I as default};
