let handler = async (m, {conn, args, command}) => {
  await m.reply("_. ᩭ✎Adios a todos, NightcoreBot abandona el grupo_");
  await conn.groupLeave(m.chat);
};
handler.command = /^(out|leavegc|leave|salirdelgrupo)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
