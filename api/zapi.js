
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const body = await req.json();
    const { action, phone, message } = body;

    const instanceId = process.env.ZAPI_INSTANCE;
    const token = process.env.ZAPI_TOKEN;
    const clientToken = process.env.ZAPI_CLIENT_TOKEN;

    if (!instanceId || !token) {
      return new Response(JSON.stringify({ error: 'Z-API não configurado no servidor' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    let endpoint, payload, method = 'POST';

    if (action === 'send-text') {
      endpoint = `https://api.z-api.io/instances/${instanceId}/token/${token}/send-text`;
      payload = { phone, message };
    } else if (action === 'list-groups') {
      endpoint = `https://api.z-api.io/instances/${instanceId}/token/${token}/chats?pageSize=200`;
      method = 'GET';
    } else {
      return new Response(JSON.stringify({ error: 'Action inválida' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Client-Token': clientToken || ''
      },
      body: method === 'POST' ? JSON.stringify(payload) : undefined
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: corsHeaders
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
