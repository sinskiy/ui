import{j as e}from"./jsx-runtime-DEdD30eg.js";const n=({id:s,error:t,...r})=>e.jsxs(e.Fragment,{children:[e.jsx("input",{name:s,id:s,className:"input surface-container-high",...r}),t&&e.jsx("p",{className:"input__error",role:"alert",children:t})]});n.__docgenInfo={description:"",methods:[],displayName:"Input",props:{id:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},setError:{required:!1,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<string | null>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<string | null>",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}]}]},description:""}},composes:["InputHTMLAttributes"]};const a=({children:s,id:t,...r})=>e.jsx("label",{className:"label",htmlFor:t,...r,children:s});a.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:""}},composes:["LabelHTMLAttributes"]};const o=({label:s,error:t,id:r=s,required:i=!1,...l})=>e.jsxs("div",{className:"input-field",children:[e.jsxs(a,{id:r,children:[s,i?e.jsx(p,{}):""]}),e.jsx(n,{error:t,id:r,className:"input surface-container-high",...l})]}),p=()=>e.jsx("span",{"aria-label":"required",style:{color:"var(--error)"},children:"*"});o.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"label",computed:!1}},required:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["InputHTMLAttributes"]};export{o as I};