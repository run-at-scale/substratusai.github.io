"use strict";(self.webpackChunksubstratus_website=self.webpackChunksubstratus_website||[]).push([[0],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=a,g=c["".concat(i,".").concat(p)]||c[p]||m[p]||r;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},l="Loading Models",s={unversionedId:"walkthrough/loading-models",id:"walkthrough/loading-models",title:"Loading Models",description:"Import your existing ML models into Substratus.",source:"@site/docs/walkthrough/loading-models.md",sourceDirName:"walkthrough",slug:"/walkthrough/loading-models",permalink:"/docs/walkthrough/loading-models",draft:!1,editUrl:"https://github.com/substratusai/substratusai.github.io/tree/main/docs/walkthrough/loading-models.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Walkthrough",permalink:"/docs/category/walkthrough"},next:{title:"Serving Models",permalink:"/docs/walkthrough/serving-models"}},i={},u=[{value:"Loading a Model from HuggingFace",id:"loading-a-model-from-huggingface",level:2},{value:"Loading models from other sources",id:"loading-models-from-other-sources",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loading-models"},"Loading Models"),(0,a.kt)("p",null,"Import your existing ML models into Substratus.\nYou can for example use the Substratus provided ",(0,a.kt)("inlineCode",{parentName:"p"},"substratusai/model-loader-huggingface"),"\ncontainer image to load models into Substratus."),(0,a.kt)("p",null,"The below Model resource shows an example on how to load the falcon-7b-instruct\nmodel into substratus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: substratus.ai/v1\nkind: Model\nmetadata:\n  name: falcon-7b-instruct\nspec:\n  image:\n    name: substratusai/model-loader-huggingface\n  params:\n    name: tiiuae/falcon-7b-instruct\n")),(0,a.kt)("p",null,"In the model spec, you provide the container image location and the name\nof the HuggingFace model. The model-loader-huggingface downloads the model\nand stores it in a predefined location such that the model gets stored\nin a cloud storage bucket (e.g. a GCS bucket)."),(0,a.kt)("p",null,"The Model ",(0,a.kt)("inlineCode",{parentName:"p"},"status.url")," will provide you with the cloud storage location\nwhere the model is stored."),(0,a.kt)("h2",{id:"loading-a-model-from-huggingface"},"Loading a Model from HuggingFace"),(0,a.kt)("p",null,"Run the following command to load the falcon-7b-instruct model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl apply -f https://raw.githubusercontent.com/substratusai/substratus/main/examples/falcon-7b-instruct/base-model.yaml\n")),(0,a.kt)("p",null,"Once you create the Model, it will create a K8s job to load the HuggingFace model\ninto Substratus. This job will use the container image defined in the Model resource."),(0,a.kt)("p",null,"You can take a look at the logs of the job by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl logs jobs/falcon-7b-instruct-modeller | tail -n 10\n")),(0,a.kt)("p",null,"After about 5 minutes the job should finish and the Model resource should report the status\nto be ready. Verify by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl describe model falcon-7b-instruct\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Name:         falcon-7b-instruct\nNamespace:    default\nLabels:       <none>\nAnnotations:  <none>\nAPI Version:  substratus.ai/v1\nKind:         Model\nMetadata:\n  Creation Timestamp:  2023-07-15T02:46:05Z\n  Generation:          1\n  Resource Version:    14266797\n  UID:                 077198a0-32ec-4f07-9bc3-ba3a1f1a3729\nSpec:\n  Image:\n    Name:  substratusai/model-loader-huggingface\n  Params:\n    Name:  tiiuae/falcon-7b-instruct\nStatus:\n  Conditions:\n    Last Transition Time:  2023-07-15T02:51:18Z\n    Message:               \n    Observed Generation:   1\n    Reason:                JobComplete\n    Status:                True\n    Type:                  Modelled\n  Ready:                   true\n  URL:                     gs://my-gcs-bucket-name/077198a0-32ec-4f07-9bc3-ba3a1f1a3729/\nEvents:                    <none>\n")),(0,a.kt)("p",null,"You can see the Model ",(0,a.kt)("inlineCode",{parentName:"p"},"status.url")," field reports the location of where the model is saved."),(0,a.kt)("p",null,"You have now successfully loaded a HuggingFace model in Substratus and can use that\nmodel in other Substratus resources such as the Server resource."),(0,a.kt)("h2",{id:"loading-models-from-other-sources"},"Loading models from other sources"),(0,a.kt)("p",null,"If needed you can provide your own container image as long as it meets\nthe container contract defined by Substratus. For\nnow please file an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/substratusai/substratus/issues"},"Issue on GitHub")," to request other images."),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"/docs/walkthrough/serving-models"},"Serving Models walkthrough")," to expose the falcon-7b-instruct model\nand sent it some prompts."),(0,a.kt)("li",{parentName:"ul"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"/docs/walkthrough/loading-datasets"},"Loading Datasets walkthrough")," so you can finetune\nmodel that you loaded with your own dataset"),(0,a.kt)("li",{parentName:"ul"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"/docs/walkthrough/finetuning-models"},"Finetuning walkthrough")," to finetune a model that you loaded from HuggingFace")))}m.isMDXComponent=!0}}]);