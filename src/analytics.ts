type EventParameters = Record<string, string | number | boolean>;

export function trackEvent(name: string, parameters?: EventParameters) {
  window.gtag?.('event', name, parameters);
}
