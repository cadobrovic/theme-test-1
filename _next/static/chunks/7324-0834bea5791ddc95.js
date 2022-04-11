"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7324],{58363:function(e,n){n.Z=function(e,n){if(e&&n){var r=Array.isArray(n)?n:n.split(","),t=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?t.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},53439:function(e,n,r){r.d(n,{UI:function(){return o},XW:function(){return i}});var t=r(67294);function o(e,n){let r=0;return t.Children.map(e,(e=>t.isValidElement(e)?n(e,r++):e))}function i(e,n){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===n))}},12529:function(e,n,r){r.d(n,{Z:function(){return K}});var t=r(94184),o=r.n(t),i=r(45697),a=r.n(i),l=r(67294),c=r(85893);const u={type:a().string,tooltip:a().bool,as:a().elementType},s=l.forwardRef((({as:e="div",className:n,type:r="valid",tooltip:t=!1,...i},a)=>(0,c.jsx)(e,{...i,ref:a,className:o()(n,`${r}-${t?"tooltip":"feedback"}`)})));s.displayName="Feedback",s.propTypes=u;var f=s,d=r(6558),p=r(91377),v=r(76792);const m=l.forwardRef((({bsPrefix:e,className:n,htmlFor:r,...t},i)=>{const{controlId:a}=(0,l.useContext)(p.Z);return e=(0,v.vE)(e,"form-check-label"),(0,c.jsx)("label",{...t,ref:i,htmlFor:r||a,className:o()(n,e)})}));m.displayName="FormCheckLabel";var y=m,g=r(53439);const b=l.forwardRef((({id:e,bsPrefix:n,bsSwitchPrefix:r,inline:t=!1,disabled:i=!1,isValid:a=!1,isInvalid:u=!1,feedbackTooltip:s=!1,feedback:m,feedbackType:b,className:h,style:x,title:w="",type:D="checkbox",label:F,children:j,as:O="input",...k},C)=>{n=(0,v.vE)(n,"form-check"),r=(0,v.vE)(r,"form-switch");const{controlId:E}=(0,l.useContext)(p.Z),A=(0,l.useMemo)((()=>({controlId:e||E})),[E,e]),P=!j&&null!=F&&!1!==F||(0,g.XW)(j,y),S=(0,c.jsx)(d.Z,{...k,type:"switch"===D?"checkbox":D,ref:C,isValid:a,isInvalid:u,disabled:i,as:O});return(0,c.jsx)(p.Z.Provider,{value:A,children:(0,c.jsx)("div",{style:x,className:o()(h,P&&n,t&&`${n}-inline`,"switch"===D&&r),children:j||(0,c.jsxs)(c.Fragment,{children:[S,P&&(0,c.jsx)(y,{title:w,children:F}),m&&(0,c.jsx)(f,{type:b,tooltip:s,children:m})]})})})}));b.displayName="FormCheck";var h=Object.assign(b,{Input:d.Z,Label:y});r(42473);const x=l.forwardRef((({bsPrefix:e,type:n,size:r,htmlSize:t,id:i,className:a,isValid:u=!1,isInvalid:s=!1,plaintext:f,readOnly:d,as:m="input",...y},g)=>{const{controlId:b}=(0,l.useContext)(p.Z);let h;return e=(0,v.vE)(e,"form-control"),h=f?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${r}`]:r},(0,c.jsx)(m,{...y,type:n,size:t,ref:g,readOnly:d,id:i||b,className:o()(a,h,u&&"is-valid",s&&"is-invalid","color"===n&&`${e}-color`)})}));x.displayName="FormControl";var w=Object.assign(x,{Feedback:f}),D=(0,r(66611).Z)("form-floating");const F=l.forwardRef((({controlId:e,as:n="div",...r},t)=>{const o=(0,l.useMemo)((()=>({controlId:e})),[e]);return(0,c.jsx)(p.Z.Provider,{value:o,children:(0,c.jsx)(n,{...r,ref:t})})}));F.displayName="FormGroup";var j=F,O=r(31555);const k=l.forwardRef((({as:e="label",bsPrefix:n,column:r,visuallyHidden:t,className:i,htmlFor:a,...u},s)=>{const{controlId:f}=(0,l.useContext)(p.Z);n=(0,v.vE)(n,"form-label");let d="col-form-label";"string"===typeof r&&(d=`${d} ${d}-${r}`);const m=o()(i,n,t&&"visually-hidden",r&&d);return a=a||f,r?(0,c.jsx)(O.Z,{ref:s,as:"label",className:m,htmlFor:a,...u}):(0,c.jsx)(e,{ref:s,className:m,htmlFor:a,...u})}));k.displayName="FormLabel",k.defaultProps={column:!1,visuallyHidden:!1};var C=k;const E=l.forwardRef((({bsPrefix:e,className:n,id:r,...t},i)=>{const{controlId:a}=(0,l.useContext)(p.Z);return e=(0,v.vE)(e,"form-range"),(0,c.jsx)("input",{...t,type:"range",ref:i,className:o()(n,e),id:r||a})}));E.displayName="FormRange";var A=E;const P=l.forwardRef((({bsPrefix:e,size:n,htmlSize:r,className:t,isValid:i=!1,isInvalid:a=!1,id:u,...s},f)=>{const{controlId:d}=(0,l.useContext)(p.Z);return e=(0,v.vE)(e,"form-select"),(0,c.jsx)("select",{...s,size:r,ref:f,className:o()(t,e,n&&`${e}-${n}`,i&&"is-valid",a&&"is-invalid"),id:u||d})}));P.displayName="FormSelect";var S=P;const N=l.forwardRef((({bsPrefix:e,className:n,as:r="small",muted:t,...i},a)=>(e=(0,v.vE)(e,"form-text"),(0,c.jsx)(r,{...i,ref:a,className:o()(n,e,t&&"text-muted")}))));N.displayName="FormText";var I=N;const R=l.forwardRef(((e,n)=>(0,c.jsx)(h,{...e,ref:n,type:"switch"})));R.displayName="Switch";var z=Object.assign(R,{Input:h.Input,Label:h.Label});const T=l.forwardRef((({bsPrefix:e,className:n,children:r,controlId:t,label:i,...a},l)=>(e=(0,v.vE)(e,"form-floating"),(0,c.jsxs)(j,{ref:l,className:o()(n,e),controlId:t,...a,children:[r,(0,c.jsx)("label",{htmlFor:t,children:i})]}))));T.displayName="FloatingLabel";var L=T;const Z={_ref:a().any,validated:a().bool,as:a().elementType},$=l.forwardRef((({className:e,validated:n,as:r="form",...t},i)=>(0,c.jsx)(r,{...t,ref:i,className:o()(e,n&&"was-validated")})));$.displayName="Form",$.propTypes=Z;var K=Object.assign($,{Group:j,Control:w,Floating:D,Check:h,Switch:z,Label:C,Text:I,Range:A,Select:S,FloatingLabel:L})},6558:function(e,n,r){var t=r(94184),o=r.n(t),i=r(67294),a=r(91377),l=r(76792),c=r(85893);const u=i.forwardRef((({id:e,bsPrefix:n,className:r,type:t="checkbox",isValid:u=!1,isInvalid:s=!1,as:f="input",...d},p)=>{const{controlId:v}=(0,i.useContext)(a.Z);return n=(0,l.vE)(n,"form-check-input"),(0,c.jsx)(f,{...d,ref:p,type:t,id:e||v,className:o()(r,n,u&&"is-valid",s&&"is-invalid")})}));u.displayName="FormCheckInput",n.Z=u},91377:function(e,n,r){const t=r(67294).createContext({});n.Z=t},8523:function(e,n,r){r.d(n,{uI:function(){return ie}});var t=r(67294),o=r(45697),i=r.n(o);function a(e,n,r,t){return new(r||(r=Promise))((function(o,i){function a(e){try{c(t.next(e))}catch(n){i(n)}}function l(e){try{c(t.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,l)}c((t=t.apply(e,n||[])).next())}))}function l(e,n){var r,t,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(l){i=[6,l],t=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}Object.create;function c(e,n){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,o,i=r.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(t=i.next()).done;)a.push(t.value)}catch(l){o={error:l}}finally{try{t&&!t.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}Object.create;var u=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function s(e,n){var r=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var r=n.split(".").pop().toLowerCase(),t=u.get(r);t&&Object.defineProperty(e,"type",{value:t,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof r.path){var t=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"===typeof n?n:"string"===typeof t&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var f=[".DS_Store","Thumbs.db"];function d(e){return(null!==e.target&&e.target.files?m(e.target.files):[]).map((function(e){return s(e)}))}function p(e,n){return a(this,void 0,void 0,(function(){var r;return l(this,(function(t){switch(t.label){case 0:return e.items?(r=m(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,r]:[4,Promise.all(r.map(y))]):[3,2];case 1:return[2,v(g(t.sent()))];case 2:return[2,v(m(e.files).map((function(e){return s(e)})))]}}))}))}function v(e){return e.filter((function(e){return-1===f.indexOf(e.name)}))}function m(e){for(var n=[],r=0;r<e.length;r++){var t=e[r];n.push(t)}return n}function y(e){if("function"!==typeof e.webkitGetAsEntry)return b(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?x(n):b(e)}function g(e){return e.reduce((function(e,n){return function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(c(arguments[n]));return e}(e,Array.isArray(n)?g(n):[n])}),[])}function b(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var r=s(n);return Promise.resolve(r)}function h(e){return a(this,void 0,void 0,(function(){return l(this,(function(n){return[2,e.isDirectory?x(e):w(e)]}))}))}function x(e){var n=e.createReader();return new Promise((function(e,r){var t=[];!function o(){var i=this;n.readEntries((function(n){return a(i,void 0,void 0,(function(){var i,a,c;return l(this,(function(l){switch(l.label){case 0:if(n.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(t)];case 2:return i=l.sent(),e(i),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(h)),t.push(c),o(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function w(e){return a(this,void 0,void 0,(function(){return l(this,(function(n){return[2,new Promise((function(n,r){e.file((function(r){var t=s(r,e.fullPath);n(t)}),(function(e){r(e)}))}))]}))}))}var D=r(58363);function F(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return j(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var O="file-invalid-type",k="file-too-large",C="file-too-small",E="too-many-files",A=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:O,message:"File type must be ".concat(n)}},P=function(e){return{code:k,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},S=function(e){return{code:C,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},N={code:E,message:"Too many files"};function I(e,n){var r="application/x-moz-file"===e.type||(0,D.Z)(e,n);return[r,r?null:A(n)]}function R(e,n,r){if(z(e.size))if(z(n)&&z(r)){if(e.size>r)return[!1,P(r)];if(e.size<n)return[!1,S(n)]}else{if(z(n)&&e.size<n)return[!1,S(n)];if(z(r)&&e.size>r)return[!1,P(r)]}return[!0,null]}function z(e){return void 0!==e&&null!==e}function T(e){var n=e.files,r=e.accept,t=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=F(I(e,r),1)[0],i=F(R(e,t,o),1)[0];return n&&i}))}function L(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function Z(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function $(e){e.preventDefault()}function K(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function B(e){return-1!==e.indexOf("Edge/")}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return K(e)||B(e)}function V(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n.some((function(n){return!L(e)&&n&&n.apply(void 0,[e].concat(t)),L(e)}))}}var _=["children"],G=["open"],W=["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],H=["refKey","onChange","onClick"];function U(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||X(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,n)||X(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,n){if(e){if("string"===typeof e)return J(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,n):void 0}}function J(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function Q(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function Y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(r),!0).forEach((function(n){ee(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function ee(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function ne(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var re=(0,t.forwardRef)((function(e,n){var r=e.children,o=ie(ne(e,_)),i=o.open,a=ne(o,G);return(0,t.useImperativeHandle)(n,(function(){return{open:i}}),[i]),t.createElement(t.Fragment,null,r(Y(Y({},a),{},{open:i})))}));re.displayName="Dropzone";var te={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return l(this,(function(n){return[2,(r=e,r.dataTransfer&&e.dataTransfer?p(e.dataTransfer,e.type):d(e))];var r}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};re.defaultProps=te,re.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var oe={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Y(Y({},te),e),r=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,l=n.minSize,c=n.multiple,u=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,d=n.onDragOver,p=n.onDrop,v=n.onDropAccepted,m=n.onDropRejected,y=n.onFileDialogCancel,g=n.onFileDialogOpen,b=n.preventDropOnDocument,h=n.noClick,x=n.noKeyboard,w=n.noDrag,D=n.noDragEventsBubbling,F=n.validator,j=(0,t.useRef)(null),O=(0,t.useRef)(null),k=(0,t.useReducer)(ae,oe),C=q(k,2),E=C[0],A=C[1],P=E.isFocused,S=E.isFileDialogActive,z=E.draggedFiles,K=(0,t.useCallback)((function(){O.current&&(A({type:"openDialog"}),"function"===typeof g&&g(),O.current.value=null,O.current.click())}),[A,g]),B=function(){S&&setTimeout((function(){O.current&&(O.current.files.length||(A({type:"closeDialog"}),"function"===typeof y&&y()))}),300)};(0,t.useEffect)((function(){return window.addEventListener("focus",B,!1),function(){window.removeEventListener("focus",B,!1)}}),[O,S,y]);var _=(0,t.useCallback)((function(e){j.current&&j.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),K()))}),[j,O,K]),G=(0,t.useCallback)((function(){A({type:"focus"})}),[]),X=(0,t.useCallback)((function(){A({type:"blur"})}),[]),J=(0,t.useCallback)((function(){h||(M()?setTimeout(K,0):K())}),[O,h,K]),Q=(0,t.useRef)([]),re=function(e){j.current&&j.current.contains(e.target)||(e.preventDefault(),Q.current=[])};(0,t.useEffect)((function(){return b&&(document.addEventListener("dragover",$,!1),document.addEventListener("drop",re,!1)),function(){b&&(document.removeEventListener("dragover",$),document.removeEventListener("drop",re))}}),[j,b]);var ie=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e),Q.current=[].concat(U(Q.current),[e.target]),Z(e)&&Promise.resolve(i(e)).then((function(n){L(e)&&!D||(A({draggedFiles:n,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,D]),le=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e);var n=Z(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(r){}return n&&d&&d(e),!1}),[d,D]),ce=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e);var n=Q.current.filter((function(e){return j.current&&j.current.contains(e)})),r=n.indexOf(e.target);-1!==r&&n.splice(r,1),Q.current=n,n.length>0||(A({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),Z(e)&&f&&f(e))}),[j,f,D]),ue=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e),Q.current=[],Z(e)&&Promise.resolve(i(e)).then((function(n){if(!L(e)||D){var t=[],o=[];n.forEach((function(e){var n=q(I(e,r),2),i=n[0],c=n[1],u=q(R(e,l,a),2),s=u[0],f=u[1],d=F?F(e):null;if(i&&s&&!d)t.push(e);else{var p=[c,f];d&&(p=p.concat(d)),o.push({file:e,errors:p.filter((function(e){return e}))})}})),(!c&&t.length>1||c&&u>=1&&t.length>u)&&(t.forEach((function(e){o.push({file:e,errors:[N]})})),t.splice(0)),A({acceptedFiles:t,fileRejections:o,type:"setFiles"}),p&&p(t,o,e),o.length>0&&m&&m(o,e),t.length>0&&v&&v(t,e)}})),A({type:"reset"})}),[c,r,l,a,u,i,p,v,m,D,F]),se=function(e){return o?null:e},fe=function(e){return x?null:se(e)},de=function(e){return w?null:se(e)},pe=function(e){D&&e.stopPropagation()},ve=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,t=e.onKeyDown,i=e.onFocus,a=e.onBlur,l=e.onClick,c=e.onDragEnter,u=e.onDragOver,s=e.onDragLeave,f=e.onDrop,d=ne(e,W);return Y(Y(ee({onKeyDown:fe(V(t,_)),onFocus:fe(V(i,G)),onBlur:fe(V(a,X)),onClick:se(V(l,J)),onDragEnter:de(V(c,ie)),onDragOver:de(V(u,le)),onDragLeave:de(V(s,ce)),onDrop:de(V(f,ue))},r,j),o||x?{}:{tabIndex:0}),d)}}),[j,_,G,X,J,ie,le,ce,ue,x,w,o]),me=(0,t.useCallback)((function(e){e.stopPropagation()}),[]),ye=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,o=e.onChange,i=e.onClick,a=ne(e,H),l=ee({accept:r,multiple:c,type:"file",style:{display:"none"},onChange:se(V(o,ue)),onClick:se(V(i,me)),autoComplete:"off",tabIndex:-1},t,O);return Y(Y({},l),a)}}),[O,r,c,ue,o]),ge=z.length,be=ge>0&&T({files:z,accept:r,minSize:l,maxSize:a,multiple:c,maxFiles:u}),he=ge>0&&!be;return Y(Y({},E),{},{isDragAccept:be,isDragReject:he,isFocused:P&&!o,getRootProps:ve,getInputProps:ye,rootRef:j,inputRef:O,open:se(K)})}function ae(e,n){switch(n.type){case"focus":return Y(Y({},e),{},{isFocused:!0});case"blur":return Y(Y({},e),{},{isFocused:!1});case"openDialog":return Y(Y({},e),{},{isFileDialogActive:!0});case"closeDialog":return Y(Y({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var r=n.isDragActive,t=n.draggedFiles;return Y(Y({},e),{},{draggedFiles:t,isDragActive:r});case"setFiles":return Y(Y({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return Y({},oe);default:return e}}},42473:function(e){var n=function(){};e.exports=n}}]);