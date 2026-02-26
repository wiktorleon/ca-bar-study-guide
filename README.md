# California Bar Exam Study Guide

A free, open-source, comprehensive study guide covering all 13 California Bar Exam essay subjects + exam strategy. 141,000+ words of black-letter law, California distinctions, issue-spotting checklists, mnemonics, and IRAC guidance — all in a clean, static HTML site you can open in any browser.

**[Live Demo](https://wiktorleon.github.io/ca-bar-study-guide/)**

## What's Inside

| Subject | Size | Key Topics |
|---------|------|------------|
| Torts | 96 KB | Intentional torts, negligence, strict liability, products liability, defamation, privacy |
| Remedies | 73 KB | Legal damages, equitable relief, restitution, rescission, reformation |
| Contracts | 88 KB | UCC Art. 2 vs. common law, formation, breach, third-party rights, discharge |
| Business Associations | 99 KB | Agency, partnership, corporations, LLCs, fiduciary duties, securities |
| Criminal Law | 97 KB | Homicide, inchoate crimes, theft, defenses, CA-specific rules |
| Criminal Procedure | 86 KB | 4th/5th/6th Amendments, Miranda, exclusionary rule, Crawford |
| Evidence | 115 KB | FRE vs. CEC comparison tables, hearsay, character, privileges |
| Constitutional Law | 93 KB | Judicial review, Commerce Clause, due process, equal protection, 1st Amendment |
| Civil Procedure | 75 KB | Jurisdiction, Erie, pleading, joinder, discovery, preclusion |
| Real Property | 94 KB | Estates, future interests, easements, covenants, recording acts, mortgages |
| Community Property | 58 KB | Characterization, tracing, transmutation, division at death/divorce |
| Wills & Succession | 64 KB | Intestacy, will formalities, revocation, contests, pretermitted heirs |
| Trusts | 68 KB | Creation, trustee duties, modification, spendthrift, charitable, cy pres |
| Professional Responsibility | 98 KB | ABA vs. CA RPC, confidentiality, conflicts, duties to tribunal |
| Exam Approach & Strategy | 71 KB | IRAC mastery, essay strategy, PT approach, 12-week study plan |

**Total: ~141,000 words / 1.3 MB** — roughly equivalent to a 560-page textbook.

## Features

- **Dark mode** toggle
- **Search** across all subjects
- **Progress tracking** — mark subjects complete (saved to localStorage)
- **Mobile responsive** sidebar navigation
- **Prev/next navigation** chain through all subjects
- **Styled content** — callout boxes for rules, tips, warnings, and CA distinctions; comparison tables; collapsible sections; mnemonics; issue-spotting checklists

## How to Use

```bash
git clone https://github.com/YOUR_USERNAME/ca-bar-study-guide.git
cd ca-bar-study-guide
open index.html  # or xdg-open on Linux
```

No build step, no dependencies. Just static HTML/CSS/JS.

## How It Was Built

This entire study guide was generated in a single session using [Claude Code](https://claude.ai/claude-code) with **parallel AI agents**:

1. Built the site shell (HTML/CSS/JS framework) manually
2. Launched **12 parallel agents** simultaneously, each generating a complete subject page
3. Each agent wrote 58-115 KB of comprehensive, bar-exam-level content with proper HTML structure
4. Verified all navigation links, progress tracking, and cross-references

Total generation time: ~20 minutes. Total content: 141K words.

The orchestration pattern — fanning out work to parallel specialized agents, each with a constrained template and detailed instructions — is a generalizable approach for large-scale content generation.

## Disclaimer

This study guide was generated using AI and is provided as a **free supplemental study aid**. It is not legal advice and may contain inaccuracies.

- Always cross-reference with official bar prep materials
- Laws change — verify current statutes before relying on any rule statement
- This is not a substitute for a full bar prep course
- Use at your own risk

## Contributing

Found an error in a rule statement? Know a CA distinction that's missing? PRs welcome.

- Fix inaccuracies in black-letter law
- Add recent case law or statutory changes
- Improve mnemonics or exam tips
- Add practice essay hypotheticals

## License

[MIT](LICENSE)
