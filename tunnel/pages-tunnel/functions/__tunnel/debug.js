export async function onRequestGet({ env }) {
  const k = env.TUNNEL_KEY || "";
  return Response.json({ hasKey: k.length > 0, keyLen: k.length });
}
