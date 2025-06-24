# MDViewer Payment System Setup

This document explains how to implement the goodwill-based payment system for MDViewer.

## Overview

The payment system follows an indie, goodwill-driven philosophy:
- MDViewer is **completely free** with no feature restrictions
- Users can optionally show appreciation with support tiers: $0, $1, $2, $5, or $10
- No license keys, no DRM, no upselling
- Transparent, trust-based approach

## Current Implementation Status

### ✅ Completed
- `/pricing` page with clean tier selection
- `/download-access` page with warm, personalized messaging
- Navigation integration across the website
- Responsive design for all devices
- Demo payment flow (simulated)

### 🔧 To Implement (Production)
- Stripe integration via Cloudflare Worker
- Real payment processing
- Analytics/tracking (optional)

## Quick Start (Demo Mode)

The current implementation works in demo mode:

1. Visit `/pricing.html`
2. Select any support tier ($0-$10)
3. See personalized thank you message on `/download-access`
4. Download MDViewer with appropriate messaging

## Production Setup

### Step 1: Stripe Account Setup

1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Note your publishable key and secret key

### Step 2: Cloudflare Worker Deployment

1. Create a new Cloudflare Worker at [workers.cloudflare.com](https://workers.cloudflare.com)
2. Copy the code from `cloudflare-worker.js`
3. Set environment variables:
   - `STRIPE_SECRET_KEY`: Your Stripe secret key
   - `STRIPE_WEBHOOK_SECRET`: Your webhook signing secret (optional)
4. Deploy the worker
5. Note your worker URL (e.g., `https://mdviewer-payments.your-domain.workers.dev`)

### Step 3: Update Frontend Code

Replace the demo `supportWithStripe` function in `pricing.html`:

```javascript
function supportWithStripe(amountCents) {
    fetch('https://mdviewer-payments.your-domain.workers.dev/api/create-checkout', {
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
```

### Step 4: Testing

1. Use Stripe's test mode initially
2. Test each payment tier ($1, $2, $5, $10)
3. Verify success/cancel redirects work correctly
4. Test the $0 (free) tier flow

### Step 5: Go Live

1. Switch Stripe to live mode
2. Update API keys in Cloudflare Worker
3. Test once more with real (small) payment
4. Monitor for any issues

## Alternative Implementation Options

### Option 1: Direct Stripe Checkout Links
Create pre-configured Stripe Checkout links for each tier:

```html
<!-- Replace JavaScript with direct links -->
<a href="https://checkout.stripe.com/pay/cs_live_..." class="support-btn paid">
    Support with $2
</a>
```

### Option 2: Static Payment Buttons
Use Stripe's embed buttons for each tier (simpler but less flexible).

### Option 3: Third-Party Solutions
Consider services like:
- GitHub Sponsors
- Buy Me a Coffee
- Ko-fi
- PayPal Donate buttons

## Payment Flow

```
User visits /pricing
    ↓
Selects support tier ($0-$10)
    ↓
[If $0] → Direct to /download-access?tier=free
[If >$0] → Stripe Checkout → Success → /download-access?tier=paid&amount=X
    ↓
Personalized thank you message
    ↓
Download links with appropriate messaging
```

## Key Features

### Trust-Building Elements
- Clear "no strings attached" messaging
- Prominent $0 option
- No feature limitations
- Transparent about what payments support

### User Experience
- One-click tier selection
- Minimal form fields
- Fast checkout process
- Warm, personal thank you messages

### Technical Benefits
- Cloudflare Workers = fast, global edge computing
- Stripe = secure, reliable payment processing
- No server maintenance required
- Scales automatically

## Analytics & Insights (Optional)

Track (anonymously) via Cloudflare Workers:
- Payment tier preferences
- Geographic distribution
- Conversion rates
- User feedback

## Support Philosophy

This payment system embodies:
- **Gratitude over obligation** - Support is appreciated, not required
- **Transparency** - Clear about where money goes
- **Simplicity** - Easy to understand and use
- **Trust** - No hidden fees or surprise charges
- **Community** - Building a sustainable indie software ecosystem

## Maintenance

### Regular Tasks
- Monitor Stripe dashboard for payments
- Update download links when new versions release
- Review and respond to user feedback
- Keep Cloudflare Worker updated

### Periodic Reviews
- Analyze payment patterns to understand user preferences
- Consider adjusting messaging based on user feedback
- Update pricing tiers if needed (rare)
- Ensure security best practices

## Legal Considerations

- Payment processing handled by Stripe (PCI compliant)
- No personal data stored beyond what Stripe requires
- Consider adding privacy policy link
- Terms of service may need payment section

## Success Metrics

- User satisfaction (feedback, reviews)
- Sustainable funding for development
- Community growth
- Feature adoption rates
- Support ticket quality/quantity

---

*This payment system represents a different approach to software monetization - one based on trust, transparency, and community support rather than artificial scarcity or feature gates.*
