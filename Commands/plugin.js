(function(e,n){"use strict";var I=()=>{let _,a,r,i;return{onLoad(){_=n.addCommand({name:"Channel Type",description:"Change the channel type",args:[{name:"channel",description:"Chanenl",type:"channel",required:!0},{name:"channelType",description:"Channel Type",type:"string",required:!0}],handler:E=>{e.findByProps("hasChannel").getChannel(E.args.channel).type=parseInt(E.args.channelType)}}),r=n.addCommand({name:"features",description:"adds 'all' features to a guild",args:[{name:"addremove",description:"add or remove deletes every feature from the guild",type:"bool",required:!0},{name:"guildId",description:"Guild ID",type:"string",required:!0}],handler:E=>{if(E.args.addremove===!0){var A=["ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE","WELCOME_SCREEN_ENABLED","NEWS","COMMUNITY","MEMBER_VERIFICATION_GATE_ENABLED","PRIVATE_THREADS","PREVIEW_ENABLED","SEVEN_DAY_THREAD_ARCHIVE","THREADS_ENABLED","THREADS_ENABLED_TESTING","THREE_DAY_THREAD_ARCHIVE","VANITY_URL","PARTNERED","MONETIZATION_ENABLED","COMMERCE","ANIMATED_BANNER","BANNER","ROLE_ICONS","ANIMATED_ICON","MEMBER_PROFILES","VIP_REGIONS","ENABLED_DISCOVERABLE_BEFORE","MORE_EMOJI","VERIFIED","FEATURABLE","HAS_DIRECTORY_ENTRY","INVITE_SPLASH","DISCOVERABLE","NEW_THREAD_PERMISSIONS","CHANNEL_BANNER","TEXT_IN_VOICE_ENABLED","ROLE_SUBSCRIPTIONS_ENABLED_FOR_PURCHASE","ROLE_SUBSCRIPTIONS_ENABLED","PREMIUM_TIER_3_OVERRIDE","MORE_STICKERS","RELAY_ENABLED","INTERNAL_EMPLOYEE_ONLY","FORCE_RELAY","TICKETING_ENABLED","EXPOSED_TO_ACTIVITIES_WTP_EXPERIMENT","LINKED_TO_HUB","AUTO_MODERATION","BOOSTING_TIERS_EXPERIMENT_SMALL_GUILD","BOOSTING_TIERS_EXPERIMENT_MEDIUM_GUILD","HAD_EARLY_ACTIVITIES_ACCESS","TICKETED_EVENTS_ENABLED","BOT_DEVELOPER_EARLY_ACCESS"];const d=A.values();for(const t of d)e.findByProps("getGuild").getGuild(E.args.guildId).features.add(t)}else e.findByProps("getGuild").getGuild(E.args.guildId).features.clear()}}),a=n.addCommand({name:"staging",description:"Makes your client think you are on staging literally does nothing just visual",args:[{name:"staging",description:"pls do yes :)",type:"bool",required:!0}],handler:E=>{E.args.staging===!0?window.GLOBAL_ENV.RELEASE_CHANNEL="staging":window.GLOBAL_ENV.RELEASE_CHANNEL="canary"}}),i=n.addCommand({name:"transitionTo",description:"literally the name",args:[{name:"transitionTo",description:"Where",type:"string",required:!0}],handler:E=>{e.findByProps("transitionTo").transitionTo(E.args.transitionTo)}})},onUnload(){_(),a(),r(),i()}}};return I})(cumcord.modules.webpack,cumcord.commands);
