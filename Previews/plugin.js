(function(e,t,a){"use strict";var p=()=>{let l,s,c,d;return{onLoad(){l=t.instead("sendVoiceChannelEffect",e.findByProps("sendVoiceChannelEffect"),i=>a.dirtyDispatch({type:"VOICE_CHANNEL_EFFECT_SEND",emoji:{id:i[1].id,name:i[1].surrogates||i[1].name},channelId:i[0].id,userId:e.findByProps("getCurrentUser").getCurrentUser().id})),s=t.instead("fetchAuthSessions",e.findByProps("fetchAuthSessions"),()=>a.dirtyDispatch({type:"AUTH_SESSIONS_UPDATE",sessions:[{client_info:{ip:"153.31.113.21",platform:"Discord Canary",os:"windows"},approx_last_used_time:0,current:!0},{client_info:{ip:"6.6.6.6",platform:"Discord iOS",os:"ios"},approx_last_used_time:0,current:!1},{client_info:{ip:"42.69.42.69",platform:"Discord Android",os:"android"},approx_last_used_time:1656525039492,current:!1},{client_info:{ip:"149.101.242.0",platform:"Discord Web",os:"windows"},approx_last_used_time:1056525039492,current:!1}]})),c=t.instead("default",e.modules[507825].exports,()=>!0);const u=[{connection_type:"reddit",operator:4,connection_metadata_field:"created_at",value:90,result:1},{connection_type:"reddit",operator:1,connection_metadata_field:"mod",value:!0,result:1},{connection_type:"reddit",operator:3,connection_metadata_field:"total_karma",value:100,result:1},{connection_type:"steam",operator:2,connection_metadata_field:"item_count_tf2",value:42,result:1},{connection_type:"steam",operator:4,connection_metadata_field:"item_count_dota2",value:20,result:1},{connection_type:"steam",operator:1,connection_metadata_field:"created_at",value:150,result:1},{connection_type:"twitter",operator:1,connection_metadata_field:"verified",value:!0,result:1},{connection_type:"twitter",operator:4,connection_metadata_field:"followers_count",value:15e4,result:1},{connection_type:"twitter",operator:4,connection_metadata_field:"statuses_count",value:1500,result:1},{connection_type:"twitter",operator:4,connection_metadata_field:"created_at",value:365,result:1}];e.findByProps("fetchGuildRoleConnectionsEligibility").fetchGuildRoleConnectionsEligibility=async function(i,o){return[u]};const m=[{id:"815369174096412693",position:0,type:1,title:"List",application_directory_collection_items:[{type:1,id:"959386160818290688",application:{id:"959386160818290688",name:"Ian Deploy Simulator",icon:"ab775dfe83d1a8057587a837eedde447",description:"The root cause of all your pain bottled up as a Discord bot!",summary:"",hook:!1,bot_public:!0,bot_require_code_grant:!1,verify_key:"5f6a9362203d39fa72ca2597b49052252b2ee37764a8347651afe6c50317c093",flags:0,secret:"K+Ltic6D54Z26SJPeCsAPNcbhNwnsVSP",redirect_uris:[],rpc_application_state:0,store_application_state:1,verification_state:1,developers:["959386160818290688"],publishers:["959386160818290688"],interactions_endpoint_url:null,integration_public:!0,integration_require_code_grant:!1,discoverable:!0,tags:[],custom_install_url:"https://ianmitchell.dev"}},{type:1,id:"959386160818290689",application:{id:"959386160818290689",name:"Discord Previews",icon:"ab775dfe83d1a8057587a837eedde447",description:"This screenshot is courtesy of @DiscordPreviews on Twitter",summary:"",hook:!1,bot_public:!0,bot_require_code_grant:!1,verify_key:"5f6a9362203d39fa72ca2597b49052252b2ee37764a8347651afe6c50317c093",flags:0,secret:"K+Ltic6D54Z26SJPeCsAPNcbhNwnsVSP",redirect_uris:[],rpc_application_state:0,store_application_state:1,verification_state:1,developers:["959386160818290689"],publishers:["959386160818290689"],interactions_endpoint_url:null,integration_public:!0,integration_require_code_grant:!1,discoverable:!0,tags:[],custom_install_url:"https://ianmitchell.dev"}}]},{id:"815369174096412694",position:1,type:2,title:"List With Image",application_directory_collection_items:[{id:"959386160818290670",type:2,title:"this was already here before",image_hash:"asdasd",description:"i totally didn't forget it in the old screenshot",call_to_action_label:"cool link button",call_to_action_url:"https://ianmitchell.dev"},{type:1,image_hash:"asdasd",id:"959386160818290688",application:{id:"959386160818290688",name:"Ian Deploy Simulator",icon:"ab775dfe83d1a8057587a837eedde447",description:"The root cause of all your pain bottled up as a Discord bot!",summary:"",hook:!1,bot_public:!0,bot_require_code_grant:!1,verify_key:"5f6a9362203d39fa72ca2597b49052252b2ee37764a8347651afe6c50317c093",flags:0,secret:"K+Ltic6D54Z26SJPeCsAPNcbhNwnsVSP",redirect_uris:[],rpc_application_state:0,store_application_state:1,verification_state:1,developers:["959386160818290688"],publishers:["959386160818290688"],interactions_endpoint_url:null,integration_public:!0,integration_require_code_grant:!1,discoverable:!0,tags:[],custom_install_url:"https://ianmitchell.dev"}},{type:1,image_hash:"asdasd",id:"959386160818290689",application:{id:"959386160818290689",name:"Discord Previews",icon:"ab775dfe83d1a8057587a837eedde447",description:"This screenshot is courtesy of @DiscordPreviews on Twitter",summary:"",hook:!1,bot_public:!0,bot_require_code_grant:!1,verify_key:"5f6a9362203d39fa72ca2597b49052252b2ee37764a8347651afe6c50317c093",flags:0,secret:"K+Ltic6D54Z26SJPeCsAPNcbhNwnsVSP",redirect_uris:[],rpc_application_state:0,store_application_state:1,verification_state:1,developers:["959386160818290689"],publishers:["959386160818290689"],interactions_endpoint_url:null,integration_public:!0,integration_require_code_grant:!1,discoverable:!0,tags:[],custom_install_url:"https://ianmitchell.dev"}}]},{id:"815369174096412695",position:2,type:3,title:"Gallery",application_directory_collection_items:[{type:1,image_hash:"asdasd",id:"959386160818290688",application:{id:"959386160818290688",name:"Ian Deploy Simulator",icon:"ab775dfe83d1a8057587a837eedde447",description:"The root cause of all your pain bottled up as a Discord bot!",summary:"",hook:!1,bot_public:!0,bot_require_code_grant:!1,verify_key:"5f6a9362203d39fa72ca2597b49052252b2ee37764a8347651afe6c50317c093",flags:0,secret:"K+Ltic6D54Z26SJPeCsAPNcbhNwnsVSP",redirect_uris:[],rpc_application_state:0,store_application_state:1,verification_state:1,developers:["959386160818290688"],publishers:["959386160818290688"],interactions_endpoint_url:null,integration_public:!0,integration_require_code_grant:!1,discoverable:!0,tags:[],custom_install_url:"https://ianmitchell.dev",categories:[{id:2,name:"Creative"},{id:3,name:"Social"},{id:4,name:"Education"},{id:5,name:"Science & Tech"},{id:6,name:"Entertainment"},{id:7,name:"Music"},{id:8,name:"Gaming"},{id:9,name:"Fun"},{id:10,name:"Admin"}],guild:{id:"815369174096412692",name:"Sol Sanctum",icon:"a_e0fbea0655f202c0a67370a37a4ecda9",splash:"f01f0b25d50e78d0864ca09e58f2a797",features:["BANNER","ANIMATED_BANNER","INVITE_SPLASH"],description:"LIKE BOTS? SLASH COMMANDS? WANT TO PRESS BUTTONS? WE'RE THE SERVER FOR YOU! SELECT SOL SANCTUM AS YOUR NEXT DESTINATION!",banner:"a_f1834d6c00cf98e246662597280eec88",premiumTier:3,premium_subscription_count:1337,preferred_locale:"en-US",public_updates_channel_id:null,afk_channel_id:null,afk_timeout:0,embed_enabled:!1,embed_channel_id:null,verification_level:0,default_message_notifications:0,explicit_content_filter:0,mfa_level:0,joined_at:"2020-01-01T00:00:00.000Z",large:!1,unavailable:!1,member_count:99999999999,voice_states:[],members:[],channels:[],presences:[],roles:[],application_id:null,widget_enabled:!1,discovery_splash:"f01f0b25d50e78d0864ca09e58f2a797",widget_channel_id:null,system_channel_id:null,rules_channel_id:null,system_channel_flags:0,emojis:[],nsfw_level:0,owner_id:"1",premium_progress_bar_enabled:!1,premium_tier:0,stickers:[],vanity_url_code:"ian",approximate_member_count:99999999999,approximate_presence_count:99999999999,region:"us-west"},directory_entry:{categories:[],carousel_items:[{type:1,width:2560,height:1440,url:"https://cdn.discordapp.com/attachments/848113378919841813/950934657749352498/ian_deploy.png"}],detailed_description:"Ever wanted to try to deploy Ian deploys yourself? This is your chance! With the Ian Deploy Simular Discord bot you can do your very own Ian Deploys! Simply run `/deploy` and the fun begins!",guild_count:133769,staff_description:"Approved by Discord",popular_application_commands:[{name:"deploy",description:"Simulate a Ian deploy"},{name:"deploys",description:"Get a list of actual Ian deploys to get inspired by"}],supported_locales:["en-US"],external_urls:[{name:"Website",url:"https://ian-deploy.xyz"},{name:"Twitter",url:"https://twitter.com/IanMitchel1/"},{name:"GitHub",url:"https://github.com/IanMitchell/"}]}}},{type:1,image_hash:"asdasd",id:"959386160818290689",application:{id:"959386160818290689",name:"Discord Previews",icon:"ab775dfe83d1a8057587a837eedde447",description:"This screenshot is courtesy of @DiscordPreviews on Twitter",summary:"",hook:!1,bot_public:!0,bot_require_code_grant:!1,verify_key:"5f6a9362203d39fa72ca2597b49052252b2ee37764a8347651afe6c50317c093",flags:0,secret:"K+Ltic6D54Z26SJPeCsAPNcbhNwnsVSP",redirect_uris:[],rpc_application_state:0,store_application_state:1,verification_state:1,developers:["959386160818290689"],publishers:["959386160818290689"],interactions_endpoint_url:null,integration_public:!0,integration_require_code_grant:!1,discoverable:!0,tags:[],custom_install_url:"https://ianmitchell.dev",categories:[{id:2,name:"Creative"},{id:3,name:"Social"},{id:4,name:"Education"},{id:5,name:"Science & Tech"},{id:6,name:"Entertainment"},{id:7,name:"Music"},{id:8,name:"Gaming"},{id:9,name:"Fun"},{id:10,name:"Admin"}],guild:{id:"815369174096412692",name:"Sol Sanctum",icon:"a_e0fbea0655f202c0a67370a37a4ecda9",splash:"f01f0b25d50e78d0864ca09e58f2a797",features:["BANNER","ANIMATED_BANNER","INVITE_SPLASH"],description:"LIKE BOTS? SLASH COMMANDS? WANT TO PRESS BUTTONS? WE'RE THE SERVER FOR YOU! SELECT SOL SANCTUM AS YOUR NEXT DESTINATION!",banner:"a_f1834d6c00cf98e246662597280eec88",premiumTier:3,premium_subscription_count:1337,preferred_locale:"en-US",public_updates_channel_id:null,afk_channel_id:null,afk_timeout:0,embed_enabled:!1,embed_channel_id:null,verification_level:0,default_message_notifications:0,explicit_content_filter:0,mfa_level:0,joined_at:"2020-01-01T00:00:00.000Z",large:!1,unavailable:!1,member_count:99999999999,voice_states:[],members:[],channels:[],presences:[],roles:[],application_id:null,widget_enabled:!1,discovery_splash:"f01f0b25d50e78d0864ca09e58f2a797",widget_channel_id:null,system_channel_id:null,rules_channel_id:null,system_channel_flags:0,emojis:[],nsfw_level:0,owner_id:"1",premium_progress_bar_enabled:!1,premium_tier:0,stickers:[],vanity_url_code:"ian",approximate_member_count:99999999999,approximate_presence_count:99999999999,region:"us-west"},directory_entry:{categories:[],carousel_items:[{type:1,width:2560,height:1440,url:"https://cdn.discordapp.com/attachments/848113378919841813/950934657749352498/ian_deploy.png"}],detailed_description:"Ever wanted to try to deploy Ian deploys yourself? This is your chance! With the Ian Deploy Simular Discord bot you can do your very own Ian Deploys! Simply run `/deploy` and the fun begins!",guild_count:133769,staff_description:"Approved by Discord",popular_application_commands:[{name:"deploy",description:"Simulate a Ian deploy"},{name:"deploys",description:"Get a list of actual Ian deploys to get inspired by"}],supported_locales:["en-US"],external_urls:[{name:"Website",url:"https://ian-deploy.xyz"},{name:"Twitter",url:"https://twitter.com/IanMitchel1/"},{name:"GitHub",url:"https://github.com/IanMitchell/"}]}}}]}],n={guild:{id:"964557033661669416",name:"Good University",icon:"0ee184430ecd63a38383f41ed5f27666",description:null,splash:null,discovery_splash:"a6e50ca6bf96ab6e3d29c3b21d97d452",features:["PREVIEW_ENABLED","COMMUNITY","NEWS","MEMBER_VERIFICATION_GATE_ENABLED"],approximate_member_count:11,approximate_presence_count:7,emojis:[],stickers:[]},directory_entry:{carousel_items:[{type:2,url:"https://www.youtube.com/watch?v=25jHkLvTRtA"},{type:1,url:"https://cdn.discordapp.com/app-assets/758738029027524650/944969762469974026.png?size=4096"},,{type:1,url:"https://cdn.discordapp.com/app-assets/758738029027524650/944965872051691530.png?size=4096"}],staff_description:"Staff Description",guild_count:88,detailed_description:"Detailed Description for Directory",popular_application_commands:[{id:"373",application_id:"941770102926352414",version:"965332736174858292",default_permission:!0,default_member_permissions:null,type:1,name:"eval",description:"deez nuts",dm_permission:null}],supported_locales:["en-GB","en-US"],external_urls:[{name:"Developer Site",url:"https://alyxia.dev"},{name:"Twitter",url:"https://twitter.com/discord"},{name:"YouTube",url:"https://youtube.com/c/discord"},{name:"GitHub",url:"https://github.com/discord"}]},id:"606395763404046349",name:"TravBot",icon:"65509566dac9e81317304b62c5da9785",description:"For help, use `.help`.\nAny errors? Contact `Cum University`.",summary:"Application Summary",terms_of_service_url:"https://cum.university",privacy_policy_url:"https://cum.university",install_params:{scopes:["bot","applications.commands"],permissions:"138046466128"},flags:40960,tags:["fun","music","utility"],categories:[{id:1,name:"Productivity"},{id:2,name:"Creative"},{id:3,name:"Social"},{id:4,name:"Education"},{id:5,name:"Science & Tech"},{id:6,name:"Entertainment"},{id:7,name:"Music"},{id:8,name:"Gaming"},{id:9,name:"Fun"},{id:10,name:"Admin"}]};e.findByProps("getRecommendedApplications").getApplication=function(i){return n},e.findByProps("getRecommendedApplications").getCategories=function(){return[{id:1,name:"Productivity"},{id:2,name:"Creative"},{id:3,name:"Social"},{id:4,name:"Education"},{id:5,name:"Science & Tech"},{id:6,name:"Entertainment"},{id:7,name:"Music"},{id:8,name:"Gaming"},{id:9,name:"Fun"},{id:10,name:"Admin"}]},e.findByProps("getRecommendedApplications").getRecommendedApplications=function(i,o){return{applications:[n]}},e.findByProps("getRecommendedApplications").getSimilarApplications=function(i,o,f){return{applications:[n]}},e.findByProps("getRecommendedApplications").searchApplications=function(i,o,f){let _={};for(let r=1;r<11;r++)_[r]=1;return{applications:[n],countsByCategory:_,totalCount:1,totalPages:1}},e.findByProps("getRecommendedApplications").getCollections=function(){return m},d=t.instead("fetchShelf",e.findByProps("fetchShelf"),()=>a.dirtyDispatch({type:"EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",guildId:e.findByProps("getLastSelectedGuildId").getLastSelectedGuildId(),items:[{application_id:"880218394199220334",expires_on:null,new_until:null,nitro_requirement:!1,premium_tier_level:0},{application_id:"945737671223947305",expires_on:null,new_until:null,nitro_requirement:!1,premium_tier_level:1},{application_id:"903769130790969345",expires_on:null,new_until:null,nitro_requirement:!1,premium_tier_level:0},{application_id:"832025144389533716",expires_on:null,new_until:null,nitro_requirement:!1,premium_tier_level:1},{application_id:"832013003968348200",expires_on:null,new_until:null,nitro_requirement:!1,premium_tier_level:1},{application_id:"852509694341283871",expires_on:null,new_until:null,nitro_requirement:!1,premium_tier_level:1},{application_id:"902271654783242291",expires_on:null,new_until:null,nitro_requirement:!1,premium_tier_level:1},{application_id:"879863686565621790",expires_on:null,new_until:null,nitro_requirement:!1,premium_tier_level:1},{application_id:"832012774040141894",expires_on:null,new_until:null,nitro_requirement:!1,premium_tier_level:1},{application_id:"755827207812677713",expires_on:null,new_until:null,nitro_requirement:!1,premium_tier_level:1},{application_id:"947957217959759964",expires_on:null,new_until:null,nitro_requirement:!1,premium_tier_level:1}],expires_at:new Date(null)}))},onUnload(){l(),s(),c(),d()}}};return p})(cumcord.modules.webpack,cumcord.patcher,cumcord.modules.common.FluxDispatcher);
