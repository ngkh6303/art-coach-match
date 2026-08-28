# Kids & Parents Art Coach Match — Design Direction

## Approach 1
- **Theme Name**: Studio Field Notes
- **Very Brief Intro**: A warm editorial intake experience that combines the calm of a children’s art studio with the clarity of a well-organised field notebook. It feels trustworthy to parents and creatively inviting to coaches.
- **Probability**: 0.07

## Approach 2
- **Theme Name**: Paper Parade
- **Very Brief Intro**: A playful, collage-led interface with torn-paper edges, hand-cut shapes and a brighter classroom mood. It prioritises childlike energy over institutional polish.
- **Probability**: 0.03

## Approach 3
- **Theme Name**: Quiet Gallery
- **Very Brief Intro**: A restrained gallery identity with generous white space, ink-like typography and a refined portfolio sensibility. It presents art coaching as a thoughtful, high-trust craft.
- **Probability**: 0.05

## Selected Approach: Studio Field Notes

### Design Movement
Contemporary editorial design blended with the material language of an independent children’s art studio: field journals, exhibition labels, studio walls and annotated sketchbooks.

### Core Principles
1. **Trust before novelty**: Parents should understand the matching process and next step within seconds.
2. **Creative but not childish**: Use colour and tactile details without cartoon clichés or loud gamification.
3. **Editorial asymmetry**: Build the page around a left-side narrative and right-side action card rather than a generic centred SaaS layout.
4. **Evidence of care**: Small labels, numbering, process notes and clear privacy language should make the service feel considered.

### Color Philosophy
The base is **ink green `#153D35`**, signalling calm, care and professional judgement. **Cream paper `#F3F0E8`** keeps long-form information and form guidance comfortable to read. **Clay orange `#E76F3C`** is reserved for action, progress and small moments of creative warmth. A pale sky blue and muted pencil yellow may appear as supporting annotation colours, never as gradients.

### Layout Paradigm
Use a briefing-flow structure: a compact masthead, a split hero with an editorial statement and an offset visual card, followed by a horizontal “what happens next” sequence and a form section that feels like a studio intake desk. On mobile, the split becomes a single-column briefing flow with short, intentional sections.

### Signature Elements
- Fine “field line” rules and numbered index markers around key sections.
- Dossier-style micro labels such as `STUDIO NOTE / 01` and `FOR PARENTS + COACHES`.
- A two-line open-C logo motif, echoing a brush stroke and a parenthesis at once.

### Interaction Philosophy
Every interaction should lower uncertainty. CTAs should scroll to the application section, accordion-like details should be easy to scan, and hover states should feel like a pencil mark or paper lift rather than a flashy effect. No essential content depends on hover.

### Animation
Use subtle opacity and 12–18px translate entrances on first load, staggered 40–60ms between editorial blocks. Buttons use a 150ms ease-out press response and a slight paper-lift shadow on hover. Avoid looping motion. Respect `prefers-reduced-motion` by disabling entrance transforms and decorative movement.

### Typography System
Headlines use **DM Serif Display** with generous line-height and occasional italic emphasis. Interface text uses **Manrope** at 400–700 weights. Chinese fallback uses **Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif**. Eyebrows use compact uppercase Manrope with letter spacing. Body copy stays between 16–18px for parent readability.

### Brand Essence
A thoughtful art-coach matching desk for families who want the right creative guide for a child’s next step — more personal than a directory, clearer than a generic enquiry form. **Personality**: attentive, curious, grounded.

### Brand Voice
Headlines are observant and encouraging, never overpromising. CTAs are specific and low-pressure. Microcopy explains what happens with submitted information and avoids guaranteed-outcome language.

Example lines:
- “The right art coach makes room for a child’s way of seeing.”
- “Tell us what they love making. We’ll help you find the next good fit.”

### Wordmark & Logo
The mark is an open capital C built from two offset studio lines: one ink-green line and one clay-orange line, suggesting a parenthesis, a brush path and an open invitation. The wordmark pairs a compact sans label with a serif name rather than using the brand name in a default font.

### Signature Brand Color
**Clay Orange `#E76F3C`** — a warm, ownable accent used only where the experience asks for a decision, a note or a moment of encouragement.

### Google Form Direction
The site will keep a single `GOOGLE_FORM_URL` constant. Until the user provides a live `/viewform` URL or authorises form creation in their Google account, the application section will show a clear setup card rather than pretending a form is live. The form schema will be documented in `google-form-schema.md` for direct implementation.

## Style Decisions
- Keep the Field Notes Club visual language, adapted from sports coaching to children’s art education.
- Do not use fake reviews, ratings or testimonials.
- Do not imply guaranteed student placement, income or coaching outcomes.
- Use Hong Kong as the default service context only where helpful; do not invent physical addresses.
- Ask before publishing or changing a live Google Form.

**Decision test:** Does this choice reinforce, rather than dilute, Studio Field Notes?
