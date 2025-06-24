// Cloudflare Worker for MDViewer Stripe Payment Processing
// Deploy this to Cloudflare Workers for production payment handling

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // CORS headers for browser requests
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Create Stripe checkout session
    if (url.pathname === '/api/create-checkout' && request.method === 'POST') {
      try {
        const { amount } = await request.json();
        
        // Validate amount (in cents)
        if (!amount || amount < 100 || amount > 10000) {
          return new Response(JSON.stringify({ error: 'Invalid amount' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        // Create Stripe checkout session
        const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            'mode': 'payment',
            'success_url': `${url.origin}/download-access?tier=paid&amount=${amount/100}`,
            'cancel_url': `${url.origin}/pricing`,
            'line_items[0][price_data][currency]': 'usd',
            'line_items[0][price_data][product_data][name]': 'MDViewer Support',
            'line_items[0][price_data][product_data][description]': 'Thank you for supporting indie software development!',
            'line_items[0][price_data][unit_amount]': amount.toString(),
            'line_items[0][quantity]': '1',
            'payment_intent_data[description]': `MDViewer support contribution - $${amount/100}`,
            'metadata[product]': 'mdviewer-support',
            'metadata[amount_dollars]': (amount/100).toString()
          })
        });

        if (!stripeResponse.ok) {
          const error = await stripeResponse.text();
          console.error('Stripe API error:', error);
          return new Response(JSON.stringify({ error: 'Payment service error' }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        const session = await stripeResponse.json();
        
        return new Response(JSON.stringify({ url: session.url }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

      } catch (error) {
        console.error('Checkout creation error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    // Handle webhook (for production logging/analytics)
    if (url.pathname === '/api/stripe-webhook' && request.method === 'POST') {
      try {
        const body = await request.text();
        const sig = request.headers.get('stripe-signature');
        
        // Verify webhook signature (implement proper verification in production)
        // const event = stripe.webhooks.constructEvent(body, sig, env.STRIPE_WEBHOOK_SECRET);
        
        // For now, just log the successful payment
        console.log('Payment completed:', body);
        
        return new Response('OK', { status: 200 });
      } catch (error) {
        console.error('Webhook error:', error);
        return new Response('Webhook error', { status: 400 });
      }
    }

    // Default response for other routes
    return new Response('Not Found', { status: 404 });
  }
};

// Example usage to replace the demo JavaScript in pricing.html:
/*
function supportWithStripe(amountCents) {
  fetch('/api/create-checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount: amountCents })
  })
  .then(response => response.json())
  .then(data => {
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Payment setup failed. Please try again.');
    }
  })
  .catch(error => {
    console.error('Payment error:', error);
    alert('Payment setup failed. Please try again.');
  });
}
*/

// Environment variables needed in Cloudflare Workers:
// STRIPE_SECRET_KEY - Your Stripe secret key
// STRIPE_WEBHOOK_SECRET - Your webhook signing secret (optional)

// Deployment instructions:
// 1. Create a new Cloudflare Worker
// 2. Copy this code to the worker
// 3. Set environment variables in the Worker settings
// 4. Deploy and update the domain in pricing.html
