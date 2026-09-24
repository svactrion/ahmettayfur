// Helpers shared by the case study's SVG charts.

// The three widths every chart is drawn at; ChartFigure shows the one
// that matches its column (see the table there).
export const VARIANTS = [
  { name: 's', width: 360 },
  { name: 'm', width: 480 },
  { name: 'l', width: 620 },
];

// Smallest font size used inside any drawing, in viewBox units. The
// narrowest column each variant is shown in is at most ~10% narrower
// than the width it was drawn for, so this renders at 14px or more.
export const TEXT = 15.5;

// Inter's average advance is close to 0.52em for this copy; used to
// estimate how much room a label needs.
export const textWidth = (text, size = TEXT) => text.length * size * 0.52;
export const charsFor = (width, size = TEXT) => Math.max(8, Math.floor(width / (size * 0.52)));

function greedy(text, maxChars) {
  const lines = [];
  for (const word of text.split(' ')) {
    const current = lines.at(-1);
    if (current && current.length + 1 + word.length <= maxChars) {
      lines[lines.length - 1] = `${current} ${word}`;
    } else {
      lines.push(word);
    }
  }
  return lines;
}

// Word wrap by character count. Greedy wrapping at the limit sets the
// line count; the text is then re-wrapped at the narrowest width that
// keeps that count, so lines come out even instead of leaving one short
// word hanging.
export function wrap(text, maxChars) {
  const count = greedy(text, maxChars).length;
  const longestWord = Math.max(...text.split(' ').map((w) => w.length));
  for (let width = longestWord; width < maxChars; width++) {
    const lines = greedy(text, width);
    if (lines.length === count) return lines;
  }
  return greedy(text, maxChars);
}
