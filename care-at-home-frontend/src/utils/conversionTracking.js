/**
 * Standardized conversion tracking for healthcare business metrics.
 */

export const handleConversion = (type, label) => {
  // 1. Log event (Internal)
  console.log([CONVERSION] : );

  // 2. Trigger External Tracking (Analytics placeholders)
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-CONVERSION_ID',
      'event_category': type,
      'event_label': label
    });
  }

  // 3. Action execution (specific to type)
  if (type === 'CALL') {
    window.location.href = 	el:\;
  } else if (type === 'WHATSAPP') {
    window.open(import.meta.env.VITE_WHATSAPP_LINK, '_blank');
  }
};
