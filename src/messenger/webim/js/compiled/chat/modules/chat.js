/*
 Copyright 2005-2013 the original author or authors.

 Licensed under the Apache License, Version 2.0 (the "License").
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
*/
(function(a){a.Objects.Models.Controls={};a.Objects.Models.Status={};var j=[],l=a.Application,k=l.module("Chat",{startWithParent:!1});k.addInitializer(function(b){var f=a.Objects,d=a.Objects.Models,c=a.Objects.Models.Controls,h=a.Objects.Models.Status;b.page&&d.page.set(b.page);d.thread=new a.Models.Thread(b.thread);d.user=new a.Models.ChatUser(b.user);var g=new a.Layouts.Chat;f.chatLayout=g;l.mainRegion.show(g);var e=new a.Collections.Controls;d.user.get("isAgent")||(c.userName=new a.Models.UserNameControl({weight:220}),
e.add(c.userName),c.sendMail=new a.Models.SendMailControl({weight:200,link:b.links.mail,windowParams:b.windowsParams.mail}),e.add(c.sendMail));d.user.get("isAgent")&&(c.redirect=new a.Models.RedirectControl({weight:200,link:b.links.redirect}),e.add(c.redirect),c.history=new a.Models.HistoryControl({weight:180,link:b.links.history,windowParams:b.windowsParams.history}),e.add(c.history));c.sound=new a.Models.SoundControl({weight:160});e.add(c.sound);c.refresh=new a.Models.RefreshControl({weight:140});
e.add(c.refresh);b.links.ssl&&(c.secureMode=new a.Models.SecureModeControl({weight:120,link:b.links.ssl}),e.add(c.secureMode));c.close=new a.Models.CloseControl({weight:100});e.add(c.close);f.Collections.controls=e;g.controlsRegion.show(new a.Views.ControlsCollection({collection:e}));h.message=new a.Models.StatusMessage({hideTimeout:5E3});h.typing=new a.Models.StatusTyping({hideTimeout:5E3});f.Collections.status=new a.Collections.Status([h.message,h.typing]);g.statusRegion.show(new a.Views.StatusCollection({collection:f.Collections.status}));
d.user.get("isAgent")||(d.avatar=new a.Models.Avatar,g.avatarRegion.show(new a.Views.Avatar({model:d.avatar})));f.Collections.messages=new a.Collections.Messages;d.messageForm=new a.Models.MessageForm(b.messageForm);g.messageFormRegion.show(new a.Views.MessageForm({model:d.messageForm}));g.messagesRegion.show(new a.Views.MessagesCollection({collection:f.Collections.messages}));d.soundManager=new a.Models.ChatSoundManager;j.push(f.server.callFunctionsPeriodically(function(){var b=a.Objects.Models.thread,
c=a.Objects.Models.user;return[{"function":"update",arguments:{"return":{typing:"typing",canPost:"canPost"},references:{},threadId:b.get("id"),token:b.get("token"),lastId:b.get("lastId"),typed:c.get("typing"),user:!c.get("isAgent")}}]},function(b){b.errorCode?a.Objects.Models.Status.message.setMessage(b.errorMessage||"refresh failed"):(b.typing&&a.Objects.Models.Status.typing.show(),a.Objects.Models.user.set({canPost:b.canPost||!1}))}))});k.on("start",function(){a.Objects.server.restartUpdater()});
k.addFinalizer(function(){a.Objects.chatLayout.close();for(var b=0;b<j.length;b++)a.Objects.server.stopCallFunctionsPeriodically(j[b]);"undefined"!=typeof a.Objects.Models.avatar&&a.Objects.Models.avatar.finalize();a.Objects.Collections.messages.finalize();delete a.Objects.chatLayout;delete a.Objects.Models.thread;delete a.Objects.Models.user;delete a.Objects.Models.page;delete a.Objects.Models.avatar;delete a.Objects.Models.messageForm;delete a.Objects.Models.Controls;delete a.Objects.Models.Status;
delete a.Objects.Collections.messages;delete a.Objects.Collections.controls;delete a.Objects.Collections.status})})(Mibew);
