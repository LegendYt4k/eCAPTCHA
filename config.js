module.exports = {
    server: {
        domain: "localhost",
        https: false,
        httpPort: 8080,
    },

    Discord: {
        // —— Things that are required for the whole project to work.
        token: "MTE0MDMzOTQ1MTkwMjU3NDcxNA.Gpw8tO.NhE-72E0slyymLOJ29nbkpp_wk_9jNliboOl1c", // —— Your bot's token.
        botId: "1140339451902574714", // —— The bot's ID.
        guildId: "1112357987592450158", // —— The server ID on where the commands will be deployed.
        verifiedRole: "1140339956125028432", // —— Role that will be added to the user when they verify their account.

        // —— For users that want to have a role removed upon verification, if you want this, set remove-role to true, and set your remove role ID.
        removeRole: false,
        removeRoleId: "",

        // —— Set the bot's presence, for statusType see: https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType
        statusType: 3, // 1 (STREAMING), 2 (LISTENING), 3 (WATCHING), 5 (COMPETING). Default is 0 (PLAYING). 
        statusMsg: "unverified users!",

        // —— By default, rules are set to disabled, this means rules will be hidden. If you want to use the rules function, change disabled to your rules. Please ensure you use \n for each line break and do not use any symbols that could interfear with JSON.
        rulesEnabled: true,
        rules: "Type your rules here if rulesEnabled is enabled, ensure to use \n for new lines"
    },

    reCAPTCHA: {
        secretKey: "6Le-SqMnAAAAAA9pTW__FoZoX7SzzzBQYAyEDFlZ",
        publicKey: "6Le-SqMnAAAAANwFn13ZsjN3AYstMvrmn5UkHEvO"
    }
}
