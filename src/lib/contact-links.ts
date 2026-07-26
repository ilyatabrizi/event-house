/** WhatsApp business number, digits only (no + or spaces). Set when live. */
export const WHATSAPP_NUMBER = "";

export function foundingHostWhatsAppUrl() {
  const text = "Hi, I'd like to apply to become a Founding Host.";
  if (WHATSAPP_NUMBER) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }
  return `mailto:partners@eventhouse.app?subject=${encodeURIComponent("Founding Host application")}&body=${encodeURIComponent(text)}`;
}
