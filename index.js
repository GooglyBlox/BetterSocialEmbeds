(function(l,d,b,n,r,u,i){"use strict";const{ScrollView:m,View:f}=i.General,{FormRow:w,FormSwitch:g,FormSection:p,FormDivider:E}=i.Forms,c=[{id:"instagramEnabled",default:!0,label:"Enable BetterInstagramEmbeds",subLabel:"Replace Instagram embeds with ddinstagram embeds"},{id:"twitterEnabled",default:!0,label:"Enable BetterTwitterEmbeds",subLabel:"Replace Twitter embeds with fxtwitter embeds"},{id:"xEnabled",default:!0,label:"Enable BetterXEmbeds",subLabel:"Replace X embeds with fixupx embeds"},{id:"tiktokEnabled",default:!0,label:"Enable BetterTikTokEmbeds",subLabel:"Replace TikTok embeds with tnktok embeds"}];function h(){u.useProxy(n.storage);for(const{id:e,default:a}of c)n.storage[e]??=a;return r.React.createElement(m,null,r.React.createElement(f,{style:{marginTop:20,marginBottom:20}},r.React.createElement(p,{title:"Plugin Settings"},c.map(function(e,a){return r.React.createElement(r.React.Fragment,{key:e.id},r.React.createElement(w,{label:e.label,subLabel:e.subLabel,trailing:r.React.createElement(g,{value:n.storage[e.id]??e.default,onValueChange:function(t){return n.storage[e.id]=t}})}),a!==c.length-1&&r.React.createElement(E,null))}))))}const k=d.findByProps("sendMessage","receiveMessage");let o;var R={onLoad:function(){o=b.before("sendMessage",k,function(e){const a=e[1].content;if(n.storage.instagramEnabled){const t=/https:\/\/www\.instagram\.com\/(p\/|reel\/)[^ ]+/g;t.test(a)&&(e[1].content=a.replace(t,function(s){return s.replace("https://www.instagram.com","https://www.ddinstagram.com")}))}if(n.storage.twitterEnabled){const t=/https:\/\/twitter\.com\/[^ ]+/g;t.test(a)&&(e[1].content=a.replace(t,function(s){return s.replace("https://twitter.com","https://fxtwitter.com")}))}if(n.storage.xEnabled){const t=/https:\/\/x\.com\/[^ ]+/g;t.test(a)&&(e[1].content=a.replace(t,function(s){return s.replace("https://x.com","https://fixupx.com")}))}if(n.storage.tiktokEnabled){const t=/https:\/\/(?:www\.)?tiktok\.com\/[^ ]+/g;t.test(a)&&(e[1].content=a.replace(t,function(s){return s.replace(/https:\/\/(?:www\.)?tiktok\.com/,"https://tnktok.com")}))}})},onUnload:function(){o()},settings:h};return l.default=R,Object.defineProperty(l,"__esModule",{value:!0}),l})({},vendetta.metro,vendetta.patcher,vendetta.plugin,vendetta.metro.common,vendetta.storage,vendetta.ui.components);
