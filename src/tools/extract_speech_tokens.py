#!/usr/bin/env python3
"""Extract the unique speech tokens from a permutations file.

Trick names are built from a small vocabulary, so text-to-speech only
needs one audio sample per token (e.g. "Fullcab", "to", "180"). Words
that always appear together (like "Sunny Day" — there is never another
word in between) are kept together as one token, detected from the
corpus itself: a word that is always followed by the same word, or
always preceded by the same word, is merged with it. "BS" and "FS" are
spoken as "Backside" and "Frontside".

Usage (from the app root):

    python3 tools/extract_speech_tokens.py [permutations.txt] [tokens_out.txt]

Defaults: tools/permutations.txt -> tools/speech_tokens.txt
"""

import sys
from collections import defaultdict
from pathlib import Path

TOOLS_DIR = Path(__file__).parent

SPOKEN = {"BS": "Backside", "FS": "Frontside"}


def read_sequences(src):
    sequences = []
    for line in src.read_text(encoding="utf-8").splitlines():
        if not line.strip() or line.startswith("PERMUTATIONS"):
            continue
        sequences.append([SPOKEN.get(word, word) for word in line.split()])
    return sequences


def merge_fixed_pairs(sequences):
    """One merge pass; returns (new_sequences, changed)."""
    followers = defaultdict(set)
    preceders = defaultdict(set)
    for seq in sequences:
        for i, token in enumerate(seq):
            followers[token].add(seq[i + 1] if i + 1 < len(seq) else None)
            preceders[token].add(seq[i - 1] if i > 0 else None)

    pairs = set()
    for token, nexts in followers.items():
        if len(nexts) == 1 and None not in nexts:
            pairs.add((token, next(iter(nexts))))
    for token, prevs in preceders.items():
        if len(prevs) == 1 and None not in prevs:
            pairs.add((next(iter(prevs)), token))
    if not pairs:
        return sequences, False

    merged = []
    for seq in sequences:
        out, i = [], 0
        while i < len(seq):
            if i + 1 < len(seq) and (seq[i], seq[i + 1]) in pairs:
                out.append(f"{seq[i]} {seq[i + 1]}")
                i += 2
            else:
                out.append(seq[i])
                i += 1
        merged.append(out)
    return merged, True


def main():
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else TOOLS_DIR / "permutations.txt"
    out = (
        Path(sys.argv[2])
        if len(sys.argv) > 2
        else src.parent / "speech_tokens.txt"
    )

    sequences = read_sequences(src)
    changed = True
    while changed:
        sequences, changed = merge_fixed_pairs(sequences)

    tokens = sorted({token for seq in sequences for token in seq})
    out.write_text("\n".join(tokens) + "\n", encoding="utf-8")

    phrases = [t for t in tokens if " " in t]
    print(f"{len(tokens)} unique speech tokens -> {out}")
    print(f"\n{len(phrases)} multi-word tokens kept together:")
    for phrase in phrases:
        print(f"  {phrase}")


if __name__ == "__main__":
    main()
