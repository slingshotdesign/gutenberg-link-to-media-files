!function(){"use strict";var e=window.wp.element,t=(window.wp.i18n,window.wp.richText),i=window.wp.blockEditor,l=window.wp.components;(0,t.registerFormatType)("ss/link-to-media",{title:"Link to media",tagName:"a",className:"link-to-media",edit:n=>{let{isActive:o,onChange:a,value:r}=n;return(0,e.createElement)(i.BlockControls,null,(0,e.createElement)(l.ToolbarGroup,null,!o&&(0,e.createElement)(i.MediaUploadCheck,null,(0,e.createElement)(i.MediaUpload,{onSelect:e=>{const i=e.alt?e.alt:e.title;a((0,t.toggleFormat)(r,{type:"ss/link-to-media",attributes:{href:e.url,title:i}}))},render:t=>{let{open:i}=t;return(0,e.createElement)(l.ToolbarButton,{title:"Link to media file",icon:"admin-media",onClick:i,isActive:o})}})),o&&(0,e.createElement)(l.ToolbarButton,{icon:"admin-media",title:"Unlink media file",onClick:()=>{a((0,t.toggleFormat)(r,{type:"ss/link-to-media"}))},isActive:o})))}})}();