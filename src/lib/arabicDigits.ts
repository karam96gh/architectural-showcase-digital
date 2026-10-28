// The brand font (Firjar) has no Latin digit glyphs, so render all displayed digits as Arabic-Indic.
const toArabic = (s: string) => s.replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[+d]);

const convert = (node: Node) => {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.nodeValue ?? '';
    if (/[0-9]/.test(text)) node.nodeValue = toArabic(text);
    return;
  }
  if (node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE') return;
  node.childNodes.forEach(convert);
};

export const startArabicDigits = (root: HTMLElement) => {
  convert(root);
  new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'characterData') convert(m.target);
      else m.addedNodes.forEach(convert);
    }
  }).observe(root, { childList: true, subtree: true, characterData: true });
};
