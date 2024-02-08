const { zokou } = require('../framework/zokou');

zokou(
	{
		nomCom:'clear',
		categorie:'fun',
		desc:'delete whatsapp chat',
		reaction:'🗑'
	},
	async (message, match) => {
		await message.clearChat(message.jid)
		await message.send('_Cleared_')
	}
);
