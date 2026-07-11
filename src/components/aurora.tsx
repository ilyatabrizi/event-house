/* Motion background (§7.2): two blurred radial gradients — Ember and its
 * peach tonal variant — drifting in slow figure-eight paths over the top 60%
 * of the viewport. All motion is CSS-driven; see globals.css. Purely
 * decorative. The full-page grain layer is rendered separately in page.tsx. */
export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora-blob aurora-a" />
      <div className="aurora-blob aurora-b" />
    </div>
  );
}
