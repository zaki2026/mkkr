const _0x1eb0c2=_0x1e02;(function(_0x17ab13,_0x42079b){const _0x524eee=_0x1e02,_0x3445a1=_0x17ab13();while(!![]){try{const _0x14e1cc=parseInt(_0x524eee(0x20e))/0x1*(parseInt(_0x524eee(0x209))/0x2)+-parseInt(_0x524eee(0x212))/0x3+-parseInt(_0x524eee(0x220))/0x4+parseInt(_0x524eee(0x1f7))/0x5+-parseInt(_0x524eee(0x1f8))/0x6*(parseInt(_0x524eee(0x23e))/0x7)+-parseInt(_0x524eee(0x236))/0x8+-parseInt(_0x524eee(0x211))/0x9*(-parseInt(_0x524eee(0x1f6))/0xa);if(_0x14e1cc===_0x42079b)break;else _0x3445a1['push'](_0x3445a1['shift']());}catch(_0x3b8478){_0x3445a1['push'](_0x3445a1['shift']());}}}(_0x4cd5,0xbda92));function _0x1e02(_0x28992d,_0x29a51e){const _0x4cd5dd=_0x4cd5();return _0x1e02=function(_0x1e0276,_0x25dca0){_0x1e0276=_0x1e0276-0x1e3;let _0x3ca941=_0x4cd5dd[_0x1e0276];return _0x3ca941;},_0x1e02(_0x28992d,_0x29a51e);}const {Client,Collection,discord,GatewayIntentBits,Partials,EmbedBuilder,ApplicationCommandOptionType,Events,ActionRowBuilder,ButtonBuilder,MessageAttachment,ButtonStyle,Message}=require(_0x1eb0c2(0x20d)),{Database}=require('st.db'),applyDB=new Database(_0x1eb0c2(0x204)),tokens=new Database(_0x1eb0c2(0x218)),tier1subscriptions=new Database(_0x1eb0c2(0x1ed));let apply=tokens[_0x1eb0c2(0x20a)](_0x1eb0c2(0x1ea));if(!apply)return;const path=require(_0x1eb0c2(0x233)),{readdirSync}=require('fs');let theowner;apply['forEach'](async _0x2bedf1=>{const _0x7d884d=_0x1eb0c2,{REST:_0x5d895c}=require(_0x7d884d(0x21e)),{Routes:_0x323b65}=require(_0x7d884d(0x205)),{prefix:_0x325cf7,token:_0x505a45,clientId:_0x33b3d0,owner:_0x2aa022}=_0x2bedf1;theowner=_0x2aa022;const _0x4f0264=new Client({'intents':[GatewayIntentBits[_0x7d884d(0x1e8)],GatewayIntentBits[_0x7d884d(0x22a)],GatewayIntentBits[_0x7d884d(0x1ef)],GatewayIntentBits['GuildMessageTyping'],GatewayIntentBits[_0x7d884d(0x1f2)]],'shards':_0x7d884d(0x23c),'partials':[Partials[_0x7d884d(0x20b)],Partials['Channel'],Partials['GuildMember']]});_0x4f0264[_0x7d884d(0x1f3)]=new Collection(),require('./handlers/events')(_0x4f0264),_0x4f0264['events']=new Collection(),require(_0x7d884d(0x230))(_0x4f0264);const _0x423e3b=new _0x5d895c({'version':'10'})['setToken'](_0x505a45);_0x4f0264['on']('ready',async()=>{const _0x53193f=_0x7d884d;try{await _0x423e3b[_0x53193f(0x1f5)](_0x323b65[_0x53193f(0x23f)](_0x4f0264['user']['id']),{'body':_0x3cfc16});}catch(_0x4d0721){console[_0x53193f(0x23a)](_0x4d0721);}}),require(_0x7d884d(0x23b))(_0x4f0264),require(_0x7d884d(0x208))(_0x4f0264),require(_0x7d884d(0x22e))(_0x4f0264),require(_0x7d884d(0x21c))(_0x4f0264);const _0x2ba173=path[_0x7d884d(0x202)](__dirname,_0x7d884d(0x1f0));_0x4f0264['applySlashCommands']=new Collection();const _0x3cfc16=[],_0xf363a6=require(_0x7d884d(0x1e6)),_0x5cedac=new _0xf363a6(_0x7d884d(0x213))[_0x7d884d(0x224)]();for(let _0x54d597 of readdirSync(_0x2ba173)[_0x7d884d(0x221)](_0x3713cf=>!_0x3713cf[_0x7d884d(0x226)]('.'))){for(let _0x202684 of readdirSync(_0x2ba173+'/'+_0x54d597)[_0x7d884d(0x221)](_0x4f4d91=>_0x4f4d91['endsWith'](_0x7d884d(0x216)))){let _0x58c18e=require(_0x2ba173+'/'+_0x54d597+'/'+_0x202684);_0x58c18e&&(_0x3cfc16[_0x7d884d(0x20f)](_0x58c18e[_0x7d884d(0x217)][_0x7d884d(0x1fd)]()),_0x4f0264[_0x7d884d(0x240)][_0x7d884d(0x239)](_0x58c18e[_0x7d884d(0x217)][_0x7d884d(0x238)],_0x58c18e),_0x58c18e[_0x7d884d(0x217)]['name']?_0x5cedac['addRow']('/'+_0x58c18e[_0x7d884d(0x217)]['name'],_0x7d884d(0x21d)):_0x5cedac[_0x7d884d(0x203)]('/'+_0x58c18e['data']['name'],'🔴\x20Not\x20Working'));}}const _0x37a6cb=path[_0x7d884d(0x202)](__dirname,_0x7d884d(0x1e7));for(let _0x3f84e8 of readdirSync(_0x37a6cb)[_0x7d884d(0x221)](_0xd3908c=>!_0xd3908c['includes']('.'))){for(let _0x181c66 of readdirSync(_0x37a6cb+'/'+_0x3f84e8)[_0x7d884d(0x221)](_0x16935b=>_0x16935b[_0x7d884d(0x1fa)]('.js'))){const _0x3d38e4=require(_0x37a6cb+'/'+_0x3f84e8+'/'+_0x181c66);}}require('../../events/requireBots/apply-commands')(_0x4f0264),require(_0x7d884d(0x22f))(_0x4f0264);for(let _0x4d22b2 of readdirSync(_0x7d884d(0x20c))[_0x7d884d(0x221)](_0x3a1a1d=>_0x3a1a1d[_0x7d884d(0x1fa)](_0x7d884d(0x216)))){const _0x490293=require(_0x7d884d(0x20c)+_0x4d22b2);_0x490293[_0x7d884d(0x22d)]?_0x4f0264[_0x7d884d(0x22d)](_0x490293[_0x7d884d(0x238)],(..._0xdb4687)=>_0x490293[_0x7d884d(0x1e5)](..._0xdb4687)):_0x4f0264['on'](_0x490293[_0x7d884d(0x238)],(..._0xe1ccbd)=>_0x490293[_0x7d884d(0x1e5)](..._0xe1ccbd));}_0x4f0264['on'](_0x7d884d(0x215),async()=>{setInterval(async()=>{const _0x2e4323=_0x1e02;let _0x3f8852=tokens[_0x2e4323(0x20a)](_0x2e4323(0x1ea)),_0x3724b8=_0x3f8852[_0x2e4323(0x210)](_0x3ff518=>_0x3ff518['token']==_0x505a45);_0x3724b8&&(_0x3724b8[_0x2e4323(0x237)]<=0x0&&(await _0x4f0264[_0x2e4323(0x228)](),console[_0x2e4323(0x229)](_0x33b3d0+_0x2e4323(0x1e4))));},0x3e8);}),_0x4f0264['on'](_0x7d884d(0x1ff),async _0x3823b9=>{const _0x41f109=_0x7d884d;if(_0x3823b9[_0x41f109(0x241)]()){if(_0x3823b9[_0x41f109(0x232)]['bot'])return;const _0x7c7ec=_0x4f0264['applySlashCommands'][_0x41f109(0x20a)](_0x3823b9[_0x41f109(0x1f1)]);if(!_0x7c7ec){console[_0x41f109(0x23a)](_0x41f109(0x23d)+_0x3823b9[_0x41f109(0x1f1)]+_0x41f109(0x22b));return;}if(_0x7c7ec[_0x41f109(0x1fe)]===!![]){if(_0x2aa022!=_0x3823b9[_0x41f109(0x232)]['id'])return _0x3823b9[_0x41f109(0x1eb)]({'content':'❗\x20***لا\x20تستطيع\x20استخدام\x20هذا\x20الامر***','ephemeral':!![]});}try{await _0x7c7ec[_0x41f109(0x1e5)](_0x3823b9);}catch(_0x749cf4){console[_0x41f109(0x23a)](_0x41f109(0x1e9)+_0x3823b9[_0x41f109(0x1f1)]),console[_0x41f109(0x23a)](_0x749cf4);}}}),_0x4f0264['on'](_0x7d884d(0x21a),async _0x7eb077=>{const _0x535532=_0x7d884d;let _0x83d72c=_0x7eb077['client'];if(_0x7eb077['author'][_0x535532(0x234)])return;if(_0x7eb077['channel'][_0x535532(0x206)]==='dm')return;if(!_0x7eb077[_0x535532(0x1ec)]['startsWith'](_0x325cf7))return;const _0x4b7eae=_0x7eb077['content']['slice'](_0x325cf7['length'])[_0x535532(0x231)]()[_0x535532(0x223)](/ +/g),_0x44d75d=_0x4b7eae['shift']()['toLowerCase']();if(_0x44d75d[_0x535532(0x222)]==0x0)return;let _0x227051=_0x83d72c[_0x535532(0x1f3)][_0x535532(0x20a)](_0x44d75d);if(!_0x227051)_0x227051=_0x4f0264['commands'][_0x535532(0x20a)](_0x83d72c[_0x535532(0x207)][_0x535532(0x20a)](_0x44d75d));if(_0x227051){if(_0x227051[_0x535532(0x1fe)]){if(_0x2aa022!=_0x7eb077[_0x535532(0x22c)]['id'])return _0x7eb077['reply']({'content':_0x535532(0x214),'ephemeral':!![]});}if(_0x227051[_0x535532(0x200)]){if(cooldown[_0x535532(0x201)](''+_0x227051[_0x535532(0x238)]+_0x7eb077[_0x535532(0x22c)]['id']))return _0x7eb077[_0x535532(0x1eb)]({'embeds':[{'description':'**عليك\x20الانتظار`'+ms(cooldown[_0x535532(0x20a)](''+_0x227051[_0x535532(0x238)]+_0x7eb077[_0x535532(0x22c)]['id'])-Date[_0x535532(0x235)](),{'long':!![]})[_0x535532(0x21f)](_0x535532(0x1ee),_0x535532(0x21b))[_0x535532(0x21f)](_0x535532(0x1fc),_0x535532(0x227))[_0x535532(0x21f)]('second',_0x535532(0x227))[_0x535532(0x21f)]('ms',_0x535532(0x219))+_0x535532(0x1fb)}]})[_0x535532(0x1e3)](_0x50c188=>setTimeout(()=>_0x50c188[_0x535532(0x225)](),cooldown[_0x535532(0x20a)](''+_0x227051[_0x535532(0x238)]+_0x7eb077[_0x535532(0x22c)]['id'])-Date[_0x535532(0x235)]()));_0x227051['run'](_0x83d72c,_0x7eb077,_0x4b7eae),cooldown[_0x535532(0x239)](''+_0x227051[_0x535532(0x238)]+_0x7eb077[_0x535532(0x22c)]['id'],Date[_0x535532(0x235)]()+_0x227051[_0x535532(0x200)]),setTimeout(()=>{const _0x5d7765=_0x535532;cooldown['delete'](''+_0x227051[_0x5d7765(0x238)]+_0x7eb077['author']['id']);},_0x227051['cooldown']);}else _0x227051[_0x535532(0x1f4)](_0x83d72c,_0x7eb077,_0x4b7eae);}}),_0x4f0264['login'](_0x505a45)[_0x7d884d(0x1f9)](async _0x40b0b3=>{const _0x2328cc=_0x7d884d,_0x1a549d=apply[_0x2328cc(0x221)](_0x2085e9=>_0x2085e9!=_0x2bedf1);await tokens[_0x2328cc(0x239)]('apply',_0x1a549d),console[_0x2328cc(0x229)](_0x33b3d0+'\x20Not\x20working\x20and\x20removed\x20');});});function _0x4cd5(){const _0x22c31b=['isChatInputCommand','then','\x20Ended','execute','ascii-table','commands13','Guilds','Error\x20executing\x20','apply','reply','content','/database/makers/tier1/subscriptions','minutes','GuildMessages','slashcommand13','commandName','MessageContent','commands','run','put','3410RQkiZz','4064745szWBCS','54qoOQFQ','catch','endsWith','`\x20لكي\x20تتمكن\x20من\x20استخدام\x20الامر\x20مجددا.**','seconds','toJSON','ownersOnly','interactionCreate','cooldown','has','join','addRow','/Json-db/Bots/applyDB.json','discord-api-types/v10','type','commandaliases','../apply/handlers/applyCreate','1369042uSsCQH','get','Message','./events/','discord.js','1iJuJvN','push','find','72126lmRyXf','688803yyHOpm','apply\x20commands','❗\x20***لا\x20تستطيع\x20استخدام\x20هذا\x20الامر***','ready','.js','data','/tokens/tokens','ملي\x20ثانية','messageCreate','دقيقة','../apply/handlers/applySubmit','🟢\x20Working','@discordjs/rest','replace','1476060MmVqvM','filter','length','split','setJustify','delete','includes','ثانية','destroy','log','GuildMessageReactions','\x20was\x20found.','author','once','../apply/handlers/applyResult','./handlers/events','../../events/requireBots/apply-commands','trim','user','path','bot','now','11053768ZEOdLi','timeleft','name','set','error','../apply/handlers/events','auto','No\x20command\x20matching\x20','1145711JWGgxe','applicationCommands','applySlashCommands'];_0x4cd5=function(){return _0x22c31b;};return _0x4cd5();}