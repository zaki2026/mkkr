const _0x316fef=_0x6dd3;(function(_0x452e3e,_0x3eca03){const _0xfe9a3b=_0x6dd3,_0x28fbf1=_0x452e3e();while(!![]){try{const _0x3aaba8=-parseInt(_0xfe9a3b(0xf4))/0x1*(parseInt(_0xfe9a3b(0x122))/0x2)+parseInt(_0xfe9a3b(0x14b))/0x3+parseInt(_0xfe9a3b(0x129))/0x4+parseInt(_0xfe9a3b(0x14c))/0x5+-parseInt(_0xfe9a3b(0x140))/0x6+-parseInt(_0xfe9a3b(0x144))/0x7*(parseInt(_0xfe9a3b(0x125))/0x8)+parseInt(_0xfe9a3b(0x153))/0x9*(parseInt(_0xfe9a3b(0x12e))/0xa);if(_0x3aaba8===_0x3eca03)break;else _0x28fbf1['push'](_0x28fbf1['shift']());}catch(_0xd3e202){_0x28fbf1['push'](_0x28fbf1['shift']());}}}(_0x45e7,0x34ec4));const {Client,Collection,AuditLogEvent,discord,GatewayIntentBits,Partials,EmbedBuilder,ApplicationCommandOptionType,Events,ActionRowBuilder,ButtonBuilder,MessageAttachment,ButtonStyle,Message}=require(_0x316fef(0x152)),{Database}=require(_0x316fef(0x113)),blacklistDB=new Database(_0x316fef(0xfb)),tokens=new Database('/tokens/tokens'),tier1subscriptions=new Database('/database/makers/tier1/subscriptions');let blacklist=tokens['get'](_0x316fef(0xff));if(!blacklist)return;function _0x6dd3(_0x3c96a6,_0xa990e1){const _0x45e790=_0x45e7();return _0x6dd3=function(_0x6dd39c,_0x487c2d){_0x6dd39c=_0x6dd39c-0xf3;let _0x38c894=_0x45e790[_0x6dd39c];return _0x38c894;},_0x6dd3(_0x3c96a6,_0xa990e1);}const path=require(_0x316fef(0x109)),{readdirSync}=require('fs');let theowner;blacklist['forEach'](async _0x4b582f=>{const _0x45f696=_0x316fef,{REST:_0x1d76cb}=require(_0x45f696(0x132)),{Routes:_0x1e0a1d}=require(_0x45f696(0x11c)),{prefix:_0x13638e,token:_0x431901,clientId:_0x4e3339,owner:_0x5490af}=_0x4b582f;theowner=_0x5490af;const _0x226ce5=new Client({'intents':0x7fff,'shards':_0x45f696(0x120),'partials':[Partials['Message'],Partials['Channel'],Partials['GuildMember']]});_0x226ce5[_0x45f696(0x114)]=new Collection(),require('./handlers/events')(_0x226ce5),_0x226ce5[_0x45f696(0x145)]=new Collection(),require(_0x45f696(0x12c))(_0x226ce5);const _0x134bb3=new _0x1d76cb({'version':'10'})['setToken'](_0x431901);_0x226ce5['on'](_0x45f696(0x143),async()=>{const _0x3e1d99=_0x45f696;try{await _0x134bb3['put'](_0x1e0a1d[_0x3e1d99(0x124)](_0x226ce5[_0x3e1d99(0x123)]['id']),{'body':_0x231359});}catch(_0x3ef225){console[_0x3e1d99(0x13d)](_0x3ef225);}}),require(_0x45f696(0x103))(_0x226ce5);const _0x3c0331=path[_0x45f696(0xfc)](__dirname,_0x45f696(0x14a));_0x226ce5['blacklistSlashCommands']=new Collection();const _0x231359=[],_0x17933d=require('ascii-table'),_0x5f4cf8=new _0x17933d(_0x45f696(0x154))[_0x45f696(0x130)]();for(let _0x2b2204 of readdirSync(_0x3c0331)['filter'](_0x1d19c5=>!_0x1d19c5[_0x45f696(0x13b)]('.'))){for(let _0x245490 of readdirSync(_0x3c0331+'/'+_0x2b2204)[_0x45f696(0x112)](_0x2701e8=>_0x2701e8[_0x45f696(0x10a)](_0x45f696(0x101)))){let _0x442421=require(_0x3c0331+'/'+_0x2b2204+'/'+_0x245490);_0x442421&&(_0x231359[_0x45f696(0x142)](_0x442421[_0x45f696(0x10b)][_0x45f696(0x116)]()),_0x226ce5[_0x45f696(0x150)][_0x45f696(0x12a)](_0x442421[_0x45f696(0x10b)][_0x45f696(0x121)],_0x442421),_0x442421[_0x45f696(0x10b)]['name']?_0x5f4cf8[_0x45f696(0x117)]('/'+_0x442421['data'][_0x45f696(0x121)],_0x45f696(0x126)):_0x5f4cf8[_0x45f696(0x117)]('/'+_0x442421[_0x45f696(0x10b)][_0x45f696(0x121)],_0x45f696(0x118)));}}const _0x3db487=path[_0x45f696(0xfc)](__dirname,_0x45f696(0x104));for(let _0x55f281 of readdirSync(_0x3db487)['filter'](_0x4f0a1e=>!_0x4f0a1e[_0x45f696(0x13b)]('.'))){for(let _0x539f35 of readdirSync(_0x3db487+'/'+_0x55f281)['filter'](_0x26f2fe=>_0x26f2fe['endsWith'](_0x45f696(0x101)))){const _0x473d85=require(_0x3db487+'/'+_0x55f281+'/'+_0x539f35);}}require(_0x45f696(0x12c))(_0x226ce5),require(_0x45f696(0x103))(_0x226ce5);for(let _0x5741f9 of readdirSync('./events/')[_0x45f696(0x112)](_0x1882d3=>_0x1882d3[_0x45f696(0x10a)](_0x45f696(0x101)))){const _0x3d7f8f=require(_0x45f696(0x139)+_0x5741f9);_0x3d7f8f[_0x45f696(0x12b)]?_0x226ce5[_0x45f696(0x12b)](_0x3d7f8f[_0x45f696(0x121)],(..._0x567d81)=>_0x3d7f8f[_0x45f696(0x14e)](..._0x567d81)):_0x226ce5['on'](_0x3d7f8f[_0x45f696(0x121)],(..._0x109b05)=>_0x3d7f8f['execute'](..._0x109b05));}_0x226ce5['on']('ready',async()=>{setInterval(async()=>{const _0x12f886=_0x6dd3;let _0x573e6d=tokens[_0x12f886(0x10e)]('blacklist'),_0x22b6d4=_0x573e6d[_0x12f886(0xf9)](_0x5104c6=>_0x5104c6[_0x12f886(0xfd)]==_0x431901);_0x22b6d4&&(_0x22b6d4[_0x12f886(0x134)]<=0x0&&(await _0x226ce5[_0x12f886(0x12f)](),console[_0x12f886(0x11e)](_0x4e3339+'\x20Ended')));},0x3e8);}),_0x226ce5['on'](_0x45f696(0x13f),async _0x6cc4e1=>{const _0x4ad5b6=_0x45f696;if(_0x6cc4e1[_0x4ad5b6(0x141)]()){if(_0x6cc4e1['user']['bot'])return;const _0x4c008e=_0x226ce5[_0x4ad5b6(0x150)][_0x4ad5b6(0x10e)](_0x6cc4e1[_0x4ad5b6(0x115)]);if(!_0x4c008e){console[_0x4ad5b6(0x13d)]('No\x20command\x20matching\x20'+_0x6cc4e1[_0x4ad5b6(0x115)]+_0x4ad5b6(0x107));return;}if(_0x4c008e[_0x4ad5b6(0x131)]===!![]){if(_0x5490af!=_0x6cc4e1[_0x4ad5b6(0x123)]['id'])return _0x6cc4e1[_0x4ad5b6(0x106)]({'content':_0x4ad5b6(0x108),'ephemeral':!![]});}try{await _0x4c008e[_0x4ad5b6(0x14e)](_0x6cc4e1);}catch(_0x166921){console['error'](_0x4ad5b6(0x10d)+_0x6cc4e1['commandName']),console[_0x4ad5b6(0x13d)](_0x166921);}}}),_0x226ce5['on'](_0x45f696(0x151),async _0x1765c5=>{const _0x2fe1f4=_0x45f696;let _0x8df096=_0x1765c5[_0x2fe1f4(0x155)];if(_0x1765c5[_0x2fe1f4(0x128)]['bot'])return;if(_0x1765c5[_0x2fe1f4(0x13a)][_0x2fe1f4(0x11f)]==='dm')return;if(!_0x1765c5['content'][_0x2fe1f4(0x11d)](_0x13638e))return;const _0x291c6e=_0x1765c5[_0x2fe1f4(0x11a)][_0x2fe1f4(0x127)](_0x13638e[_0x2fe1f4(0x119)])['trim']()['split'](/ +/g),_0x1b223f=_0x291c6e[_0x2fe1f4(0x10c)]()[_0x2fe1f4(0x138)]();if(_0x1b223f['length']==0x0)return;let _0x5931e0=_0x8df096['commands'][_0x2fe1f4(0x10e)](_0x1b223f);if(!_0x5931e0)_0x5931e0=_0x226ce5[_0x2fe1f4(0x114)][_0x2fe1f4(0x10e)](_0x8df096[_0x2fe1f4(0xf3)][_0x2fe1f4(0x10e)](_0x1b223f));if(_0x5931e0){if(_0x5931e0[_0x2fe1f4(0x131)]){if(_0x5490af!=_0x1765c5[_0x2fe1f4(0x128)]['id'])return _0x1765c5['reply']({'content':_0x2fe1f4(0x108),'ephemeral':!![]});}if(_0x5931e0['cooldown']){if(cooldown[_0x2fe1f4(0x148)](''+_0x5931e0[_0x2fe1f4(0x121)]+_0x1765c5[_0x2fe1f4(0x128)]['id']))return _0x1765c5[_0x2fe1f4(0x106)]({'embeds':[{'description':_0x2fe1f4(0x11b)+ms(cooldown[_0x2fe1f4(0x10e)](''+_0x5931e0[_0x2fe1f4(0x121)]+_0x1765c5['author']['id'])-Date[_0x2fe1f4(0xfa)](),{'long':!![]})[_0x2fe1f4(0x111)]('minutes','دقيقة')['replace'](_0x2fe1f4(0x137),_0x2fe1f4(0x147))[_0x2fe1f4(0x111)](_0x2fe1f4(0x133),_0x2fe1f4(0x147))[_0x2fe1f4(0x111)]('ms',_0x2fe1f4(0x136))+_0x2fe1f4(0x110)}]})[_0x2fe1f4(0x12d)](_0x3894f7=>setTimeout(()=>_0x3894f7['delete'](),cooldown['get'](''+_0x5931e0[_0x2fe1f4(0x121)]+_0x1765c5[_0x2fe1f4(0x128)]['id'])-Date['now']()));_0x5931e0[_0x2fe1f4(0xf7)](_0x8df096,_0x1765c5,_0x291c6e),cooldown[_0x2fe1f4(0x12a)](''+_0x5931e0[_0x2fe1f4(0x121)]+_0x1765c5[_0x2fe1f4(0x128)]['id'],Date[_0x2fe1f4(0xfa)]()+_0x5931e0['cooldown']),setTimeout(()=>{const _0x3c4617=_0x2fe1f4;cooldown[_0x3c4617(0xfe)](''+_0x5931e0[_0x3c4617(0x121)]+_0x1765c5[_0x3c4617(0x128)]['id']);},_0x5931e0[_0x2fe1f4(0xf8)]);}else _0x5931e0[_0x2fe1f4(0xf7)](_0x8df096,_0x1765c5,_0x291c6e);}}),_0x226ce5['on'](_0x45f696(0x135),async _0x1f0032=>{const _0x48871c=_0x45f696,_0x4d4498=blacklistDB[_0x48871c(0x10e)]('blacklisted_'+_0x1f0032[_0x48871c(0x14f)]['id']);if(_0x4d4498){if(!_0x4d4498[_0x48871c(0x13b)](_0x1f0032[_0x48871c(0x123)]['id']))return;const _0x38f24f=blacklistDB['get']('blacklist_role_'+_0x1f0032[_0x48871c(0x14f)]['id']);if(_0x38f24f)try{_0x1f0032[_0x48871c(0x105)]['add'](_0x38f24f);}catch{return;}}}),_0x226ce5['on'](_0x45f696(0x135),async _0x36c890=>{const _0x10f1aa=_0x45f696,_0x88ae30=_0x36c890[_0x10f1aa(0x14f)];let _0x5de9b3=blacklistDB['get']('blacklisted_'+_0x88ae30['id']);!_0x5de9b3&&await blacklistDB[_0x10f1aa(0x12a)]('blacklisted_'+_0x88ae30['id'],[]);_0x5de9b3=blacklistDB['get'](_0x10f1aa(0x102)+_0x88ae30['id']);const _0x2c8f2f=blacklistDB[_0x10f1aa(0x10e)](_0x10f1aa(0x13c)+_0x88ae30['id']);if(!_0x2c8f2f)return;_0x5de9b3[_0x10f1aa(0x13b)](_0x36c890[_0x10f1aa(0x123)]['id'])&&await _0x36c890[_0x10f1aa(0x105)][_0x10f1aa(0xf6)](_0x2c8f2f);}),_0x226ce5['on'](_0x45f696(0xf5),async(_0x385359,_0x337e19)=>{const _0x5d59d4=_0x45f696,_0x2a16df=_0x385359[_0x5d59d4(0x14f)],_0x33c39f=_0x385359[_0x5d59d4(0x105)][_0x5d59d4(0x100)][_0x5d59d4(0x112)](_0x509f48=>!_0x337e19['roles'][_0x5d59d4(0x100)]['has'](_0x509f48['id']));if(_0x33c39f[_0x5d59d4(0x14d)]>0x0&&blacklistDB[_0x5d59d4(0x10e)](_0x5d59d4(0x13c)+_0x2a16df['id'])){let _0x581808=blacklistDB[_0x5d59d4(0x10e)]('blacklist_role_'+_0x2a16df['id']);const _0x744483=await _0x2a16df['fetchAuditLogs']({'limit':_0x33c39f[_0x5d59d4(0x14d)],'type':AuditLogEvent[_0x5d59d4(0x10f)]});_0x33c39f['forEach'](async _0x1cffdf=>{const _0x227f93=_0x5d59d4;let _0x2bb494=blacklistDB['get'](_0x227f93(0x102)+_0x2a16df['id']);!_0x2bb494&&await blacklistDB[_0x227f93(0x12a)](_0x227f93(0x102)+_0x2a16df['id'],[]);_0x2bb494=blacklistDB[_0x227f93(0x10e)](_0x227f93(0x102)+_0x2a16df['id']);const _0x44f77a=blacklistDB[_0x227f93(0x10e)](_0x227f93(0x13c)+_0x2a16df['id']);if(!_0x44f77a)return;_0x2bb494[_0x227f93(0x13b)](_0x337e19[_0x227f93(0x123)]['id'])&&await _0x337e19[_0x227f93(0x105)][_0x227f93(0xf6)](_0x44f77a);});}}),_0x226ce5[_0x45f696(0x149)](_0x431901)[_0x45f696(0x146)](async _0x887e19=>{const _0x5dfcb8=_0x45f696,_0x52b515=blacklist[_0x5dfcb8(0x112)](_0x4568eb=>_0x4568eb!=_0x4b582f);await tokens['set'](_0x5dfcb8(0xff),_0x52b515),console[_0x5dfcb8(0x11e)](_0x4e3339+_0x5dfcb8(0x13e));});});function _0x45e7(){const _0x553a1e=['ثانية','has','login','slashcommand8','596508Rzzehp','751335dXXUth','size','execute','guild','blacklistSlashCommands','messageCreate','discord.js','45BiMOXY','blacklist\x20commands','client','commandaliases','163164tpetUm','guildMemberUpdate','add','run','cooldown','find','now','/Json-db/Bots/blacklistDB.json','join','token','delete','blacklist','cache','.js','blacklisted_','./handlers/events','commands8','roles','reply','\x20was\x20found.','❗\x20***لا\x20تستطيع\x20استخدام\x20هذا\x20الامر***','path','endsWith','data','shift','Error\x20executing\x20','get','MemberRoleUpdate','`\x20لكي\x20تتمكن\x20من\x20استخدام\x20الامر\x20مجددا.**','replace','filter','st.db','commands','commandName','toJSON','addRow','🔴\x20Not\x20Working','length','content','**عليك\x20الانتظار`','discord-api-types/v10','startsWith','log','type','auto','name','2YOWSKK','user','applicationCommands','2111016VxSzRA','🟢\x20Working','slice','author','291528WpkhdW','set','once','../../events/requireBots/blacklist-commands','then','900100vkjfSW','destroy','setJustify','ownersOnly','@discordjs/rest','second','timeleft','guildMemberAdd','ملي\x20ثانية','seconds','toLowerCase','./events/','channel','includes','blacklist_role_','error','\x20Not\x20working\x20and\x20removed\x20','interactionCreate','1369332hnKBir','isChatInputCommand','push','ready','7pHAsaS','events','catch'];_0x45e7=function(){return _0x553a1e;};return _0x45e7();}