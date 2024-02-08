const { zokou } = require('../framework/zokou');

zokou(
	{
		pattern: 'clear ?(.*)',
		fromMe: true,
		desc: 'delete whatsapp chat',
		type: 'whatsapp',
	},
	async (message, match) => {
		await message.clearChat(message.jid)
		await message.send('_Cleared_')
	}
);