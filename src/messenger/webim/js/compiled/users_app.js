/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.agent=a(function(a,b,c,d,e){function m(a,b){return"away"}function n(a,b){return"online"}function o(a,b){var d,e;return e=c.L10n,d=e?e.call(a,"pending.status.away",{hash:{}}):i.call(a,"L10n","pending.status.away",{hash:{}}),j(d)}function p(a,b){var d,e;return e=c.L10n,d=e?e.call(a,"pending.status.online",{hash:{}}):i.call(a,"L10n","pending.status.online",{hash:{}}),j(d)}function q(a,b){return","}c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression,k=this,l="function";f+='<span class="agent-status-',g=b.away,g=c["if"].call(b,g,{hash:{},inverse:k.program(3,n,e),fn:k.program(1,m,e)});if(g||g===0)f+=g;f+=' inline-block" title="',g=b.away,g=c["if"].call(b,g,{hash:{},inverse:k.program(7,p,e),fn:k.program(5,o,e)});if(g||g===0)f+=g;f+='"></span>',h=c.name,h?g=h.call(b,{hash:{}}):(g=b.name,g=typeof g===l?g():g),f+=j(g),g=b.isLast,g=c.unless.call(b,g,{hash:{},inverse:k.noop,fn:k.program(9,q,e)});if(g||g===0)f+=g;return f}),b.no_threads=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression;return f+='<td class="no-threads" colspan="8">',h=c.L10n,g=h?h.call(b,"clients.no_clients",{hash:{}}):i.call(b,"L10n","clients.no_clients",{hash:{}}),f+=j(g)+"</td>",f}),b.no_visitors=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression;return f+='<td class="no-visitors" colspan="9">',h=c.L10n,g=h?h.call(b,"visitors.no_visitors",{hash:{}}):i.call(b,"L10n","visitors.no_visitors",{hash:{}}),f+=j(g)+"</td>",f}),b.queued_thread=a(function(a,b,c,d,e){function m(a,b){var d,e;return e=c.L10n,d=e?e.call(a,"pending.table.speak",{hash:{}}):i.call(a,"L10n","pending.table.speak",{hash:{}}),j(d)}function n(a,b){var d,e;return e=c.L10n,d=e?e.call(a,"pending.table.view",{hash:{}}):i.call(a,"L10n","pending.table.view",{hash:{}}),j(d)}function o(a,b){var d="",e,f;return f=c.L10n,e=f?f.call(a,"chat.client.spam.prefix",{hash:{}}):i.call(a,"L10n","chat.client.spam.prefix",{hash:{}}),d+=j(e)+"&nbsp;",d}function p(a,b){var d="",e,f;return d+='<div class="first-message"><a href="javascript:void(0);" title="',f=c.firstMessage,f?e=f.call(a,{hash:{}}):(e=a.firstMessage,e=typeof e===k?e():e),d+=j(e)+'">',f=c.firstMessagePreview,f?e=f.call(a,{hash:{}}):(e=a.firstMessagePreview,e=typeof e===k?e():e),d+=j(e)+"</a></div>",d}function q(a,b){var d="",e,f;return d+='\n            <div class="control open-dialog open-control inline-block" title="',f=c.L10n,e=f?f.call(a,"pending.table.speak",{hash:{}}):i.call(a,"L10n","pending.table.speak",{hash:{}}),d+=j(e)+'"></div>\n        ',d}function r(a,b){var d="",e,f;return d+='\n            <div class="control view-control inline-block" title="',f=c.L10n,e=f?f.call(a,"pending.table.view",{hash:{}}):i.call(a,"L10n","pending.table.view",{hash:{}}),d+=j(e)+'"></div>\n        ',d}function s(a,b){var d="",e,f;return d+='\n            <div class="control track-control inline-block" title="',f=c.L10n,e=f?f.call(a,"pending.table.tracked",{hash:{}}):i.call(a,"L10n","pending.table.tracked",{hash:{}}),d+=j(e)+'"></div>\n        ',d}function t(a,b){var d="",e,f;return d+='\n            <div class="control ban-control inline-block" title="',f=c.L10n,e=f?f.call(a,"pending.table.ban",{hash:{}}):i.call(a,"L10n","pending.table.ban",{hash:{}}),d+=j(e)+'"></div>\n        ',d}function u(a,b){var d="",e,f;return d+='<a href="javascript:void(0);" class="geo-link" title="GeoLocation">',f=c.remote,f?e=f.call(a,{hash:{}}):(e=a.remote,e=typeof e===k?e():e),d+=j(e)+"</a>",d}function v(a,b){var d,e;return e=c.remote,e?d=e.call(a,{hash:{}}):(d=a.remote,d=typeof d===k?d():d),j(d)}function w(a,b){var d,e;return d=a.waitingTime,e=c.formatTimeSince,d=e?e.call(a,d,{hash:{}}):i.call(a,"formatTimeSince",d,{hash:{}}),j(d)}function x(a,b){return"-"}function y(a,b){var c;return c=a.ban,c=c==null||c===!1?c:c.reason,c=typeof c===k?c():c,j(c)}function z(a,b){var d,e;return e=c.userAgent,e?d=e.call(a,{hash:{}}):(d=a.userAgent,d=typeof d===k?d():d),j(d)}c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression,k="function",l=this;f+='<td class="visitor">\n    <div><a href="javascript:void(0);" class="user-name open-dialog" title="',g=b.canOpen,g=c["if"].call(b,g,{hash:{},inverse:l.program(3,n,e),fn:l.program(1,m,e)});if(g||g===0)f+=g;f+='">',g=b.ban,g=c["if"].call(b,g,{hash:{},inverse:l.noop,fn:l.program(5,o,e)});if(g||g===0)f+=g;h=c.userName,h?g=h.call(b,{hash:{}}):(g=b.userName,g=typeof g===k?g():g),f+=j(g)+"</a></div>\n    ",g=b.firstMessage,g=c["if"].call(b,g,{hash:{},inverse:l.noop,fn:l.program(7,p,e)});if(g||g===0)f+=g;f+='\n</td>\n<td class="visitor">\n    <div class="default-thread-controls inline-block">\n        ',g=b.canOpen,g=c["if"].call(b,g,{hash:{},inverse:l.noop,fn:l.program(9,q,e)});if(g||g===0)f+=g;f+="\n        ",g=b.canView,g=c["if"].call(b,g,{hash:{},inverse:l.noop,fn:l.program(11,r,e)});if(g||g===0)f+=g;f+="\n        ",g=b.tracked,g=c["if"].call(b,g,{hash:{},inverse:l.noop,fn:l.program(13,s,e)});if(g||g===0)f+=g;f+="\n        ",g=b.canBan,g=c["if"].call(b,g,{hash:{},inverse:l.noop,fn:l.program(15,t,e)});if(g||g===0)f+=g;f+='\n    </div>\n    <div class="thread-controls inline-block"></div>\n</td>\n<td class="visitor">',g=b.userIp,g=c["if"].call(b,g,{hash:{},inverse:l.program(19,v,e),fn:l.program(17,u,e)});if(g||g===0)f+=g;f+='</td>\n<td class="visitor">',h=c.stateDesc,h?g=h.call(b,{hash:{}}):(g=b.stateDesc,g=typeof g===k?g():g),f+=j(g)+'</td>\n<td class="visitor">',h=c.agentName,h?g=h.call(b,{hash:{}}):(g=b.agentName,g=typeof g===k?g():g),f+=j(g)+'</td>\n<td class="visitor">',g=b.totalTime,h=c.formatTimeSince,g=h?h.call(b,g,{hash:{}}):i.call(b,"formatTimeSince",g,{hash:{}}),f+=j(g)+'</td>\n<td class="visitor">',g=b.chatting,g=c.unless.call(b,g,{hash:{},inverse:l.program(23,x,e),fn:l.program(21,w,e)});if(g||g===0)f+=g;f+='</td>\n<td class="visitor">',g=b.ban,g=c["if"].call(b,g,{hash:{},inverse:l.program(27,z,e),fn:l.program(25,y,e)});if(g||g===0)f+=g;return f+="</td>",f}),b.status_panel=a(function(a,b,c,d,e){function m(a,b){var d,e;return e=c.L10n,d=e?e.call(a,"pending.status.away",{hash:{}}):i.call(a,"L10n","pending.status.away",{hash:{}}),j(d)}function n(a,b){var d,e;return e=c.L10n,d=e?e.call(a,"pending.status.online",{hash:{}}):i.call(a,"L10n","pending.status.online",{hash:{}}),j(d)}function o(a,b){var d,e;return e=c.L10n,d=e?e.call(a,"pending.status.setonline",{hash:{}}):i.call(a,"L10n","pending.status.setonline",{hash:{}}),j(d)}function p(a,b){var d,e;return e=c.L10n,d=e?e.call(a,"pending.status.setaway",{hash:{}}):i.call(a,"L10n","pending.status.setaway",{hash:{}}),j(d)}c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression,k="function",l=this;f+='<div id="connstatus">',h=c.message,h?g=h.call(b,{hash:{}}):(g=b.message,g=typeof g===k?g():g),f+=j(g),g=b.agent,g=g==null||g===!1?g:g.away,g=c["if"].call(b,g,{hash:{},inverse:l.program(3,n,e),fn:l.program(1,m,e)});if(g||g===0)f+=g;f+='</div><div id="connlinks"><a href="javascript:void(0);" id="change-status">',g=b.agent,g=g==null||g===!1?g:g.away,g=c["if"].call(b,g,{hash:{},inverse:l.program(7,p,e),fn:l.program(5,o,e)});if(g||g===0)f+=g;return f+="</a></div>",f}),b.threads_collection=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression;return f+='<table class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">',h=c.L10n,g=h?h.call(b,"pending.table.head.name",{hash:{}}):i.call(b,"L10n","pending.table.head.name",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"pending.table.head.actions",{hash:{}}):i.call(b,"L10n","pending.table.head.actions",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"pending.table.head.contactid",{hash:{}}):i.call(b,"L10n","pending.table.head.contactid",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"pending.table.head.state",{hash:{}}):i.call(b,"L10n","pending.table.head.state",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"pending.table.head.operator",{hash:{}}):i.call(b,"L10n","pending.table.head.operator",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"pending.table.head.total",{hash:{}}):i.call(b,"L10n","pending.table.head.total",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"pending.table.head.waittime",{hash:{}}):i.call(b,"L10n","pending.table.head.waittime",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"pending.table.head.etc",{hash:{}}):i.call(b,"L10n","pending.table.head.etc",{hash:{}}),f+=j(g)+'</th>\n</tr>\n</thead>\n<tbody id="threads-container">\n\n</tbody>\n</table>',f}),b.visitor=a(function(a,b,c,d,e){function m(a,b){var d="",e,f;return d+='<a href="javascript:void(0);" class="invite-link" title="',f=c.L10n,e=f?f.call(a,"pending.table.invite",{hash:{}}):i.call(a,"L10n","pending.table.invite",{hash:{}}),d+=j(e)+'">',f=c.userName,f?e=f.call(a,{hash:{}}):(e=a.userName,e=typeof e===k?e():e),d+=j(e)+"</a>",d}function n(a,b){var d,e;return e=c.userName,e?d=e.call(a,{hash:{}}):(d=a.userName,d=typeof d===k?d():d),j(d)}function o(a,b){var d="",e,f;return d+='<a href="javascript:void(0);" class="geo-link" title="GeoLocation">',f=c.remote,f?e=f.call(a,{hash:{}}):(e=a.remote,e=typeof e===k?e():e),d+=j(e)+"</a>",d}function p(a,b){var d,e;return e=c.remote,e?d=e.call(a,{hash:{}}):(d=a.remote,d=typeof d===k?d():d),j(d)}function q(a,b){var c;return c=a.invitationInfo,c=c==null||c===!1?c:c.agentName,c=typeof c===k?c():c,j(c)}function r(a,b){return"-"}function s(a,b){var d,e;return d=a.invitationInfo,d=d==null||d===!1?d:d.time,e=c.formatTimeSince,d=e?e.call(a,d,{hash:{}}):i.call(a,"formatTimeSince",d,{hash:{}}),j(d)}function t(a,b){return"-"}c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression,k="function",l=this;f+='<td class="visitor">\n    ',g=b.invitationInfo,g=c.unless.call(b,g,{hash:{},inverse:l.program(3,n,e),fn:l.program(1,m,e)});if(g||g===0)f+=g;f+='\n</td>\n<td class="visitor">\n    <div class="default-visitor-controls inline-block">\n        <div class="control track-control inline-block" title="',h=c.L10n,g=h?h.call(b,"pending.table.tracked",{hash:{}}):i.call(b,"L10n","pending.table.tracked",{hash:{}}),f+=j(g)+'"></div>\n    </div>\n    <div class="visitor-controls inline-block"></div>\n</td>\n<td class="visitor">',g=b.userIp,g=c["if"].call(b,g,{hash:{},inverse:l.program(7,p,e),fn:l.program(5,o,e)});if(g||g===0)f+=g;f+='</td>\n<td class="visitor">',g=b.firstTime,h=c.formatTimeSince,g=h?h.call(b,g,{hash:{}}):i.call(b,"formatTimeSince",g,{hash:{}}),f+=j(g)+'</td>\n<td class="visitor">',g=b.lastTime,h=c.formatTimeSince,g=h?h.call(b,g,{hash:{}}):i.call(b,"formatTimeSince",g,{hash:{}}),f+=j(g)+'</td>\n<td class="visitor">',g=b.invitationInfo,g=c["if"].call(b,g,{hash:{},inverse:l.program(11,r,e),fn:l.program(9,q,e)});if(g||g===0)f+=g;f+='</td>\n<td class="visitor">',g=b.invitationInfo,g=c["if"].call(b,g,{hash:{},inverse:l.program(15,t,e),fn:l.program(13,s,e)});if(g||g===0)f+=g;return f+='</td>\n<td class="visitor">',h=c.invitations,h?g=h.call(b,{hash:{}}):(g=b.invitations,g=typeof g===k?g():g),f+=j(g)+" / ",h=c.chats,h?g=h.call(b,{hash:{}}):(g=b.chats,g=typeof g===k?g():g),f+=j(g)+'</td>\n<td class="visitor">',h=c.userAgent,h?g=h.call(b,{hash:{}}):(g=b.userAgent,g=typeof g===k?g():g),f+=j(g)+"</td>",f}),b.visitors_collection=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i=c.helperMissing,j=this.escapeExpression;return f+='<table id="visitorslist" class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">',h=c.L10n,g=h?h.call(b,"visitors.table.head.name",{hash:{}}):i.call(b,"L10n","visitors.table.head.name",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"visitors.table.head.actions",{hash:{}}):i.call(b,"L10n","visitors.table.head.actions",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"visitors.table.head.contactid",{hash:{}}):i.call(b,"L10n","visitors.table.head.contactid",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"visitors.table.head.firsttimeonsite",{hash:{}}):i.call(b,"L10n","visitors.table.head.firsttimeonsite",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"visitors.table.head.lasttimeonsite",{hash:{}}):i.call(b,"L10n","visitors.table.head.lasttimeonsite",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"visitors.table.head.invited.by",{hash:{}}):i.call(b,"L10n","visitors.table.head.invited.by",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"visitors.table.head.invitationtime",{hash:{}}):i.call(b,"L10n","visitors.table.head.invitationtime",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"visitors.table.head.invitations",{hash:{}}):i.call(b,"L10n","visitors.table.head.invitations",{hash:{}}),f+=j(g)+"</th>\n    <th>",h=c.L10n,g=h?h.call(b,"visitors.table.head.etc",{hash:{}}):i.call(b,"L10n","visitors.table.head.etc",{hash:{}}),f+=j(g)+'</th>\n</tr>\n</thead>\n<tbody id="visitors-container">\n</tbody>\n</table>',f})})();/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Regions={};a.Popup={};a.Popup.open=function(b,a,c){b=window.open(b,a,c);b.focus();b.opener=window}})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(e){e.registerHelper("formatTimeSince",function(b){var a=Math.round((new Date).getTime()/1E3)-b;b=a%60;var d=Math.floor(a/60)%60,a=Math.floor(a/3600),c=[];0<a&&c.push(a);c.push(10>d?"0"+d:d);c.push(10>b?"0"+b:b);return c.join(":")})})(Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
MibewAPIUsersInteraction=function(){this.obligatoryArguments={"*":{agentId:null,"return":{},references:{}},result:{errorCode:0}};this.reservedFunctionNames=["result"]};MibewAPIUsersInteraction.prototype=new MibewAPIInteraction;
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.Agent=a.Models.User.extend({defaults:b.extend({},a.Models.User.prototype.defaults,{id:null,isAgent:!0,away:!1}),away:function(){this.setAvailability(!1)},available:function(){this.setAvailability(!0)},setAvailability:function(c){var b=this;a.Objects.server.callFunctions([{"function":c?"available":"away",arguments:{agentId:this.id,references:{},"return":{}}}],function(a){0==a.errorCode&&b.set({away:!c})},!0)}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,c){var b=[],f=a.Models.QueuedThread=a.Models.Thread.extend({defaults:c.extend({},a.Models.Thread.prototype.defaults,{controls:null,userName:"",userIp:"",remote:"",userAgent:"",agentName:"",canOpen:!1,canView:!1,canBan:!1,ban:!1,totalTime:0,waitingTime:0,firstMessage:null}),initialize:function(){for(var e=[],b=f.getControls(),d=0,c=b.length;d<c;d++)e.push(new b[d]({thread:this}));this.set({controls:new a.Collections.Controls(e)})}},{addControl:function(a){b.push(a)},getControls:function(){return b}})})(Mibew,
_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b){b.Models.StatusPanel=b.Models.Base.extend({defaults:{message:""},setStatus:function(a){this.set({message:a})},changeAgentStatus:function(){var a=b.Objects.Models.agent;a.get("away")?a.available():a.away()}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,c){var b=[],f=a.Models.Visitor=a.Models.User.extend({defaults:c.extend({},a.Models.User.prototype.defaults,{controls:null,userName:"",userIp:"",remote:"",userAgent:"",firstTime:0,lastTime:0,invitations:0,chats:0,invitationInfo:!1}),initialize:function(){for(var e=[],b=f.getControls(),d=0,c=b.length;d<c;d++)e.push(new b[d]({visitor:this}));this.set({controls:new a.Collections.Controls(e)})}},{addControl:function(a){b.push(a)},getControls:function(){return b}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,c,d){b.Collections.Agents=c.Collection.extend({model:b.Models.Agent,comparator:function(a){return a.get("name")},initialize:function(){var a=b.Objects.Models.agent;b.Objects.server.callFunctionsPeriodically(function(){return[{"function":"updateOperators",arguments:{agentId:a.id,"return":{operators:"operators"},references:{}}}]},d.bind(this.updateOperators,this))},updateOperators:function(a){this.update(a.operators)}})})(Mibew,Backbone,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(c,e,f){c.Collections.Threads=e.Collection.extend({model:c.Models.QueuedThread,initialize:function(){this.revision=0;var a=this,b=c.Objects.Models.agent;c.Objects.server.callFunctionsPeriodically(function(){return[{"function":"currentTime",arguments:{agentId:b.id,"return":{time:"currentTime"},references:{}}},{"function":"updateThreads",arguments:{agentId:b.id,revision:a.revision,"return":{threads:"threads",lastRevision:"lastRevision"},references:{}}}]},f.bind(this.updateThreads,this))},comparator:function(a){var b=
{field:a.get("waitingTime").toString()};this.trigger("sort:field",a,b);return b.field},updateThreads:function(a){if(0==a.errorCode){if(0<a.threads.length){var b;b=a.currentTime?Math.round((new Date).getTime()/1E3)-a.currentTime:0;for(var d=0,e=a.threads.length;d<e;d++)a.threads[d].totalTime=parseInt(a.threads[d].totalTime)+b,a.threads[d].waitingTime=parseInt(a.threads[d].waitingTime)+b;this.trigger("before:update:threads",a.threads);var f=c.Models.Thread.prototype.STATE_CLOSED,g=c.Models.Thread.prototype.STATE_LEFT;
b=[];this.update(a.threads,{remove:!1,sort:!1});b=this.filter(function(a){return a.get("state")==f||a.get("state")==g});0<b.length&&this.remove(b);this.sort();this.trigger("after:update:threads")}this.revision=a.lastRevision}}})})(Mibew,Backbone,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,e,f){b.Collections.Visitors=e.Collection.extend({model:b.Models.Visitor,initialize:function(){var a=b.Objects.Models.agent;b.Objects.server.callFunctionsPeriodically(function(){return[{"function":"currentTime",arguments:{agentId:a.id,"return":{time:"currentTime"},references:{}}},{"function":"updateVisitors",arguments:{agentId:a.id,"return":{visitors:"visitors"},references:{}}}]},f.bind(this.updateVisitors,this))},comparator:function(a){var c={field:a.get("firstTime").toString()};this.trigger("sort:field",
a,c);return c.field},updateVisitors:function(a){if(0==a.errorCode){var c;c=a.currentTime?Math.round((new Date).getTime()/1E3)-a.currentTime:0;for(var d=0,b=a.visitors.length;d<b;d++)a.visitors[d].lastTime=parseInt(a.visitors[d].lastTime)+c,a.visitors[d].firstTime=parseInt(a.visitors[d].firstTime)+c;this.trigger("before:update:visitors",a.visitors);this.update(a.visitors);this.trigger("after:update:visitors")}}})})(Mibew,Backbone,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,c,d){b.Views.Agent=c.Marionette.ItemView.extend({template:d.templates.agent,tagName:"span",className:"agent",modelEvents:{change:"render"},initialize:function(){this.isModelLast=this.isModelFirst=!1},serializeData:function(){var a=this.model.toJSON();a.isFirst=this.isModelFirst;a.isLast=this.isModelLast;return a}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c){a.Views.NoThreads=b.Marionette.ItemView.extend({template:c.templates.no_threads,initialize:function(a){this.tagName=a.tagName}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c){a.Views.NoVisitors=b.Marionette.ItemView.extend({template:c.templates.no_visitors,initialize:function(a){this.tagName=a.tagName}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(d,e){d.Views.QueuedThread=d.Views.CompositeBase.extend({template:e.templates.queued_thread,itemView:d.Views.Control,itemViewContainer:".thread-controls",className:"thread",modelEvents:{change:"render"},events:{"click .open-dialog":"openDialog","click .view-control":"viewDialog","click .track-control":"showTrack","click .ban-control":"showBan","click .geo-link":"showGeoInfo","click .first-message a":"showFirstMessage"},initialize:function(){this.lastStyles=[]},serializeData:function(){var a=
this.model,b=d.Objects.Models.page,c=a.toJSON();c.stateDesc=this.stateToDesc(a.get("state"));c.chatting=a.get("state")==a.STATE_CHATTING;c.tracked=b.get("showVisitors");c.firstMessage&&(c.firstMessagePreview=30<c.firstMessage.length?c.firstMessage.substring(0,30)+"...":c.firstMessage);return c},stateToDesc:function(a){var b=d.Localization;return a==this.model.STATE_QUEUE?b.get("chat.thread.state_wait"):a==this.model.STATE_WAITING?b.get("chat.thread.state_wait_for_another_agent"):a==this.model.STATE_CHATTING?
b.get("chat.thread.state_chatting_with_agent"):a==this.model.STATE_CLOSED?b.get("chat.thread.state_closed"):a==this.model.STATE_LOADING?b.get("chat.thread.state_loading"):""},showGeoInfo:function(){var a=this.model.get("userIp");if(a){var b=d.Objects.Models.page,c=b.get("geoLink").replace("{ip}",a);d.Popup.open(c,"ip"+a,b.get("geoWindowParams"))}},openDialog:function(){var a=this.model,a=a.get("state")==a.STATE_CHATTING&&a.get("canView");this.showDialogWindow(a)},viewDialog:function(){this.showDialogWindow(!0)},
showDialogWindow:function(a){var b=this.model.id,c=d.Objects.Models.page;d.Popup.open(c.get("agentLink")+"?thread="+b+(a?"&viewonly=true":""),"ImCenter"+b,c.get("chatWindowParams"))},showTrack:function(){var a=this.model.id,b=d.Objects.Models.page;d.Popup.open(b.get("trackedLink")+"?thread="+a,"ImTracked"+a,b.get("trackedUserWindowParams"))},showBan:function(){var a=this.model,b=a.get("ban"),c=d.Objects.Models.page;d.Popup.open(c.get("banLink")+"?"+(!1!==b?"id="+b.id:"thread="+a.id),"ImBan"+b.id,
c.get("banWindowParams"))},showFirstMessage:function(){var a=this.model.get("firstMessage");a&&alert(a)}})})(Mibew,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,c,d){a.Views.StatusPanel=c.Marionette.ItemView.extend({template:d.templates.status_panel,modelEvents:{change:"render"},ui:{changeStatus:"#change-status"},events:{"click #change-status":"changeAgentStatus"},initialize:function(){a.Objects.Models.agent.on("change",this.render,this)},changeAgentStatus:function(){this.model.changeAgentStatus()},serializeData:function(){var b=this.model.toJSON();b.agent=a.Objects.Models.agent.toJSON();return b}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,d){a.Views.Visitor=a.Views.CompositeBase.extend({template:d.templates.visitor,itemView:a.Views.Control,itemViewContainer:".visitor-controls",className:"visitor",modelEvents:{change:"render"},events:{"click .invite-link":"inviteUser","click .geo-link":"showGeoInfo","click .track-control":"showTrack"},inviteUser:function(){if(!this.model.get("invitationInfo")){var b=this.model.id,c=a.Objects.Models.page;a.Popup.open(c.get("inviteLink")+"?visitor="+b,"ImCenter"+b,c.get("inviteWindowParams"))}},
showTrack:function(){var b=this.model.id,c=a.Objects.Models.page;a.Popup.open(c.get("trackedLink")+"?visitor="+b,"ImTracked"+b,c.get("trackedVisitorWindowParams"))},showGeoInfo:function(){var b=this.model.get("userIp");if(b){var c=a.Objects.Models.page,d=c.get("geoLink").replace("{ip}",b);a.Popup.open(d,"ip"+b,c.get("geoWindowParams"))}}})})(Mibew,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Views.AgentsCollection=a.Views.CollectionBase.extend({itemView:a.Views.Agent,className:"agents-collection",collectionEvents:{"sort add remove reset":"render"},initialize:function(){this.on("itemview:before:render",this.updateIndexes,this)},updateIndexes:function(a){var b=this.collection,c=a.model;c&&(a.isModelFirst=0==b.indexOf(c),a.isModelLast=b.indexOf(c)==b.length-1)}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(d,h,j,k){d.Views.ThreadsCollection=h.Marionette.CompositeView.extend({template:j.templates.threads_collection,itemView:d.Views.QueuedThread,itemViewContainer:"#threads-container",emptyView:d.Views.NoThreads,className:"threads-collection",collectionEvents:{sort:"renderCollection","sort:field":"createSortField",add:"threadAdded"},itemViewOptions:function(a){return{tagName:d.Objects.Models.page.get("threadTag"),collection:a.get("controls")}},initialize:function(){window.setInterval(k.bind(this.renderCollection,
this),2E3);this.on("itemview:before:render",this.updateStyles,this)},updateStyles:function(a){var b=this.collection,c=a.model,d=this;if(c.id){var e=this.getQueueCode(c),f=!1,g=!1,b=b.filter(function(a){return d.getQueueCode(a)==e});0<b.length&&(g=b[0].id==c.id,f=b[b.length-1].id==c.id);if(0<a.lastStyles.length){c=0;for(b=a.lastStyles.length;c<b;c++)a.$el.removeClass(a.lastStyles[c]);a.lastStyles=[]}c=(e!=this.QUEUE_BAN?"in":"")+this.queueCodeToString(e);a.lastStyles.push(c);g&&a.lastStyles.push(c+
"-first");f&&a.lastStyles.push(c+"-last");c=0;for(b=a.lastStyles.length;c<b;c++)a.$el.addClass(a.lastStyles[c])}},createSortField:function(a,b){var c=this.getQueueCode(a)||"Z";b.field=c.toString()+"_"+a.get("waitingTime").toString()},threadAdded:function(){var a=d.Objects.Models.page.get("webimRoot");a&&d.Objects.Models.sound.play(a+"/sounds/new_user.wav");if(d.Objects.Models.page.get("showPopup"))this.once("render",function(){alert(d.Localization.get("pending.popup_notification"))})},getQueueCode:function(a){var b=
a.get("state");return!1!=a.get("ban")&&b!=a.STATE_CHATTING?this.QUEUE_BAN:b==a.STATE_QUEUE||b==a.STATE_LOADING?this.QUEUE_WAITING:b==a.STATE_CLOSED||b==a.STATE_LEFT?this.QUEUE_CLOSED:b==a.STATE_WAITING?this.QUEUE_PRIO:b==a.STATE_CHATTING?this.QUEUE_CHATTING:!1},queueCodeToString:function(a){return a==this.QUEUE_PRIO?"prio":a==this.QUEUE_WAITING?"wait":a==this.QUEUE_CHATTING?"chat":a==this.QUEUE_BAN?"ban":a==this.QUEUE_CLOSED?"closed":""},QUEUE_PRIO:1,QUEUE_WAITING:2,QUEUE_CHATTING:3,QUEUE_BAN:4,QUEUE_CLOSED:5})})(Mibew,
Backbone,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c,d){a.Views.VisitorsCollection=b.Marionette.CompositeView.extend({template:c.templates.visitors_collection,itemView:a.Views.Visitor,itemViewContainer:"#visitors-container",emptyView:a.Views.NoVisitors,className:"visitors-collection",collectionEvents:{sort:"renderCollection"},itemViewOptions:function(b){return{tagName:a.Objects.Models.page.get("visitorTag"),collection:b.get("controls")}},initialize:function(){window.setInterval(d.bind(this.renderCollection,this),2E3);this.on("itemview:before:render",
this.updateStyles,this)}})})(Mibew,Backbone,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,g,h){var b=new g.Marionette.Application;b.addRegions({agentsRegion:"#agents-region",statusPanelRegion:"#status-panel-region",threadsRegion:"#threads-region",visitorsRegion:"#visitors-region",soundRegion:"#sound-region"});b.addInitializer(function(e){var f=a.Objects,c=a.Objects.Models,d=a.Objects.Collections;f.server=new a.Server(h.extend({interactionType:MibewAPIUsersInteraction},e.server));c.page=new a.Models.Page(e.page);c.agent=new a.Models.Agent(e.agent);d.threads=new a.Collections.Threads;
b.threadsRegion.show(new a.Views.ThreadsCollection({collection:d.threads}));e.page.showOnlineOperators&&(d.visitors=new a.Collections.Visitors,b.visitorsRegion.show(new a.Views.VisitorsCollection({collection:d.visitors})));c.statusPanel=new a.Models.StatusPanel;b.statusPanelRegion.show(new a.Views.StatusPanel({model:c.statusPanel}));e.page.showOnlineOperators&&(d.agents=new a.Collections.Agents,b.agentsRegion.show(new a.Views.AgentsCollection({collection:d.agents})));c.sound=new a.Models.Sound;b.soundRegion.show(new a.Views.Sound({model:c.sound}));
f.server.callFunctionsPeriodically(function(){return[{"function":"update",arguments:{"return":{},references:{},agentId:c.agent.id}}]},function(){})});b.on("start",function(){a.Objects.server.runUpdater()});a.Application=b})(Mibew,Backbone,_);
