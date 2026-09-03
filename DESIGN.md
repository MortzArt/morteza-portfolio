---
name: Mori Ebrahimi Portfolio
description: Apple marketing-page canon executed straight for a senior product designer's portfolio
colors:
  apple-blue: "#0071E3"
  apple-blue-hover: "#0077ED"
  status-green: "#30D158"
  ground-white: "#FFFFFF"
  fog-gray: "#F5F5F7"
  mist-gray: "#E8E8ED"
  ink: "#1D1D1F"
  muted-gray: "#6E6E73"
  hairline: "#D2D2D7"
  silver-gray: "#86868B"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(44px, 6.6vw, 76px)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "clamp(40px, 5.4vw, 64px)"
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: "-0.015em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  subhead:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.47
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  code:
    fontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  lg: "28px"
  md: "18px"
  sm: "12px"
  pill: "980px"
spacing:
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "56px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.apple-blue}"
    textColor: "{colors.ground-white}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.apple-blue-hover}"
  button-secondary:
    textColor: "{colors.apple-blue}"
    rounded: "{rounded.pill}"
    padding: "11px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.apple-blue}"
    textColor: "{colors.ground-white}"
  text-link:
    textColor: "{colors.apple-blue}"
  card-bento:
    backgroundColor: "{colors.fog-gray}"
    rounded: "{rounded.lg}"
    padding: "44px 48px"
  card-nested:
    backgroundColor: "{colors.ground-white}"
    rounded: "{rounded.sm}"
    padding: "18px 22px"
  chip-skill:
    backgroundColor: "{colors.fog-gray}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  chip-skill-hover:
    backgroundColor: "{colors.mist-gray}"
  badge-chapter:
    backgroundColor: "{colors.apple-blue}"
    textColor: "{colors.ground-white}"
    rounded: "{rounded.pill}"
    padding: "5px 14px"
  stat-card:
    backgroundColor: "{colors.fog-gray}"
    textColor: "{colors.apple-blue}"
    rounded: "{rounded.md}"
    padding: "28px 20px"
---

# Design System: Mori Ebrahimi Portfolio

## Overview

**Creative North Star: "The Cupertino Canon, Executed Straight"**

This site borrows the Apple marketing-page grammar without irony or remix and applies it to one designer's portfolio: an airy white ground, ink-dark system type, soft fog-gray bento cards with generously rounded corners, centered heroes with balanced semibold headlines, and exactly one chromatic voice, Apple blue, reserved for action and emphasis. The read a recruiter gets is premium, familiar, and calm; the personality lives entirely in copy and the ".ME" wordplay, never in visual quirk. This world is a user-pinned standing preference (see PRODUCT.md Brand Commitments); it deliberately replaced an earlier Swiss/grid rendition.

Density is low and rhythm is generous: sections breathe at 110 to 120px, heroes center themselves in the viewport, and prose sits in muted gray at comfortable measures. Hierarchy is built almost entirely from size and gray value at two font weights (400 and 600), never from decorative devices. The one licensed dose of wit is the yellow dot in the ".ME" wordmark and its typewriter reveal; everything else stays inside the canon.

Confirmed rejections: the Swiss/International specimen-sheet rendition (retired), drop shadows, gradients, dark mode, uppercase letterspaced labels, and mono type used as costume.

**Key Characteristics:**
- White ground with fog-gray bento cards at large radii; depth is tonal, never cast.
- System SF type only; semibold negative-tracked display, gray 21px subheads.
- One accent: Apple blue for buttons, links, hover states, stats, and the single highlighted word.
- Pill geometry everywhere interactive: buttons, tags, badges, chart tracks.
- Green #30D158 exists only as the "Available for work" status dot in the collapsed nav pill.
- Quiet motion: a swapping headline verb, a delayed intro video, a collapsing nav pill, and soft scroll-reveals, all gated on reduced-motion.

## Colors

An almost-grayscale Apple palette where a single blue does all the chromatic work and one green dot marks availability in the nav.

### Primary
- **Apple Blue** (#0071E3): the only working accent. Fills primary pill buttons, colors text links and the "Say hello ›" chevron links, the highlighted word in the hero headline, hover color of nav links and project titles, result-stat numbers, chart bar fills, chapter badges, finding numbers, lesson dots, the selection ring on chosen options, `::selection`, caret, and the focus-visible outline.
- **Apple Blue Hover** (#0077ED): hover fill for the primary button only; a half-step brighter, nothing else changes.

### Tertiary
- **Status Green** (#30D158): used only for the pulsing "Available for work" status dot in the collapsed nav pill. The former yellow .ME wordmark motif was retired on 2026-09-03.

### Neutral
- **Ground White** (#FFFFFF): page background, nested card background inside gray chapters, primary-button text.
- **Fog Gray** (#F5F5F7): the bento-card surface: project cards, Behance section, case-study chapters, education blocks, skill tags, code blocks, stat cards.
- **Mist Gray** (#E8E8ED): the darker gray step: skill-tag hover, empty chart tracks, de-emphasized badges.
- **Ink** (#1D1D1F): all headings and primary text; also the fill of the rare "inverse" badge (black pill, white text).
- **Muted Gray** (#6E6E73): the voice of running prose: subheads, descriptions, tags, dates, captions, footer.
- **Hairline** (#D2D2D7): 1px rules only: scrolled-nav bottom border, experience-row dividers, footer top rule, tag separators.
- **Silver Gray** (#86868B): quietest text step, used for "no" cells and tertiary chart bars in the CF comparison table (legacy alias `--accent3`).

### Named Rules
**The One Blue Rule.** Apple blue #0071E3 is the only chromatic voice on any screen. If something needs emphasis and blue is already spent nearby, use size, weight 600, or ink; never a second hue.

**The Status Dot Rule.** Green #30D158 exists only as the pulsing "Available for work" dot in the collapsed nav pill. It never colors buttons, highlights, backgrounds, borders, or charts. This is a binding brand commitment.

## Typography

**Display Font:** System SF stack (-apple-system, BlinkMacSystemFont, with Helvetica Neue fallback)
**Body Font:** Same system SF stack
**Code Font:** ui-monospace / SF Mono (code blocks in case studies only)

**Character:** Quiet, premium, and native to the platform: the same face at every level, differentiated only by size, negative tracking at display sizes, and the 400/600 weight pair. Nothing is loud; the headline does the talking by being large, balanced, and semibold. (`--serif` exists in `:root` as a legacy alias but resolves to the same SF stack; there is no actual serif in the system.)

### Hierarchy
- **Display** (600, clamp(44px, 6.6vw, 76px), 1.06, -0.015em): home hero headline only; max-width 17ch with `text-wrap: balance`; carries the single blue highlighted word.
- **Headline** (600, clamp(40px, 5.4vw, 64px), 1.07, -0.015em): subpage heroes and case-study titles; centered, max 18 to 20ch, balanced.
- **Title** (600, 28px, 1.15, -0.01em): section labels ("Selected Work", "Work History") and project-card titles; smaller variants at 24px (chapter titles) and 21px (experience roles) share the weight and tracking.
- **Subhead** (400, 21px, 1.5, muted gray): hero bios, page-hero standfirsts, case-study subtitles; max-width 600 to 620px.
- **Body** (400, 17px, 1.47): base text; supporting prose steps down to 15px/14px at 1.55 to 1.65, almost always in muted gray, measures 46 to 68ch.
- **Label** (400, 13px): nav links, tags, dates, captions, footer; muted gray; 12px for the smallest metric labels and table headers. Never uppercase, never letterspaced.
- **Code** (400, 13px, 1.8, ui-monospace): `.cs-code` blocks inside case-study decision cards; the only mono surface in the system.

### Named Rules
**The Two-Weight Rule.** Type is set at weight 400 or 600, nothing else. Hierarchy comes from size and the ink-versus-muted gray split, not from weight extremes, italics (one quote style excepted), or caps.

**The Gray Subhead Rule.** Every heading's supporting line is 21px (or smaller) regular in Muted Gray #6E6E73. Headings are ink; support is gray; the pattern never inverts.

## Layout

A single centered column, `max-width: 1024px` with 24px gutters and 80px bottom padding (`.page`). Heroes are fully centered text stacks: greeting, balanced headline, gray subhead, then a pill CTA row; the home hero clears 140px below itself, subpage heroes 96px.

Sections stack vertically with 110 to 120px bottom margins and open with a `.sec-head` baseline row: a 28px semibold label on the left, an optional muted count ("02 projects") on the right. Project cards alternate image side via a two-column grid (the even card flips direction). The Behance feature is a flex bento with text beside a 360px image column. The experience page is a hairline-divided three-column grid (date / detail / type tag); skills are a two-column grid of pill-tag clusters.

The nav is sticky (fixed on mobile), translucent white at 80% with `backdrop-filter: saturate(180%) blur(20px)`, and earns a hairline bottom border only after scroll. On mobile it hides on scroll-down and returns on scroll-up.

One breakpoint governs everything: **768px**. Below it, all grids collapse to one column, card padding tightens (bento radius steps down from 28px to 18px), the nav links move into a hamburger-triggered translucent drawer, and the alternating project layout returns to normal flow.

Scroll rhythm is animated by a single reveal pattern: `.fade-in` elements (project cards, experience rows, case-study chapters) start 18px low and transparent, then ease up over 0.7s via `cubic-bezier(0.2, 0.6, 0.2, 1)` when an IntersectionObserver sees 10% of them. Disabled entirely under `prefers-reduced-motion`.

## Elevation & Depth

**No shadows.** The system is flat and conveys depth exclusively through tonal layering: white page, fog-gray #F5F5F7 bento card, white nested card inside the gray, mist-gray #E8E8ED as the deepest step (tracks, hover fills). Hairlines (#D2D2D7, 1px) mark structural edges: the scrolled nav, experience rows, footer. The nav's translucency-plus-blur is the only "material" effect, and it is native Apple grammar, not decoration.

The two `box-shadow` declarations in the codebase are both `inset 0 0 0 1px var(--accent)`: a 1px blue selection ring on highlighted option cards. That is a border in disguise, not elevation.

### Named Rules
**The Tonal Sandwich Rule.** Depth is white → fog gray → white → mist gray, plus hairlines. If a surface needs separation, change its gray, round its corners, or rule a hairline; never cast a shadow or paint a gradient.

## Shapes

Soft, large, and consistent. Three radius tokens carry every rectangle: **28px** (`--r-lg`) for top-level bento cards and hero images, **18px** (`--r-md`) for nested imagery, medium cards, tradeoff boxes, and stat cards, **12px** (`--r-sm`) for the smallest nested tiles, findings, code blocks, and screenshots. Everything interactive-and-small is a full **pill** (980px): buttons, skill tags, status and chapter badges, chart bar tracks and fills. Corners never go sharper than 12px except the pill's opposite extreme; there are no cut corners, no circles besides the 7px lesson dot, no borders except the 1px blue outline of the secondary button and the hairline rules.

**The Pill-or-Token Rule.** Any radius is 28, 18, or 12px from the token scale, or the full 980px pill. No in-between values, no sharp corners.

## Components

### Buttons
- **Shape:** full pill (border-radius 980px).
- **Primary** (`.btn-hello`, "Book a meeting"): Apple blue fill, white 17px regular text, 12px 24px padding; hover brightens to #0077ED over 0.2s. One per hero/CTA cluster.
- **Secondary** (`.btn-hello-sec`, "View Behance Profile ›"): transparent with a 1px Apple-blue border and blue text, 11px 24px padding; hover inverts to solid blue with white text.
- **Text link** (`.btn-link`, "Say hello ›"): bare 17px Apple-blue text, underline on hover. Secondary and text links end in the **"›" chevron**; the chevron is the site's entire icon vocabulary (also the project-card hover arrow and "‹ Back").

### Chips / Tags
- **Skill tag:** 14px ink text on fog gray, pill, 8px 16px padding; hover deepens to mist gray. Non-interactive labels (project/case-study tags) are plain 13px muted text separated by hairline-colored middots, no container.
- **Badges:** 11 to 12px semibold pills; blue/white for primary status ("SELECTED", chapter 1, "good"), ink/white for the inverse step, mist-gray/muted for de-emphasis.

### Cards / Containers
- **Bento card** (project, Behance, case-study chapter): fog gray #F5F5F7, 28px radius, 44 to 56px padding, no border, no shadow. Project cards are clickable wholes: hover turns the title blue, slides in the blue "›", and zooms the image 1.03 over 0.5s.
- **Nested card** (findings, decisions, options, fail-modes inside chapters): white on the gray, 12 to 18px radius, 18 to 30px padding.
- **Stat card** (`.cs-result`): fog gray, 18px radius, centered; a 32px semibold **Apple-blue number** over a 13px muted label. Blue numbers are how outcomes shout.
- **Education block:** fog gray, 18px radius, date/detail grid.

### Navigation
- Fixed, centered floating pill: `rgba(0,0,0,0.86)` black glass + `blur(20px) saturate(180%)`, 54px tall, 999px radius. Contents: 40px white circle holding the line-art favicon, 15px white links at 0.78 opacity (full white on hover or when active), and a solid white "Work with me" pill with an envelope icon. Scrolling down past 50px collapses the links and CTA (max-width to 0 over 0.45s, standard ease) and reveals "Available for work" with a pulsing green dot; any upward scroll re-expands it. No bounce. Mobile: 48px pill, icon-only CTA, no wordmark.

### Experience rows
- Hairline-divided grid rows (170px date / detail / type tag), 36px vertical padding, last row unruled. Role 21px semibold ink, company 15px ink, location/date/type muted.

### Charts (CF case study)
- Horizontal bars on 8px-high pill tracks: mist-gray track, fills in Apple blue (primary), ink (secondary), silver gray (tertiary). Labels 12px muted right-aligned, values 12px semibold ink. The competitor table uses blue semibold for "yes" and silver for "no", tabular numerals, hairline row rules, fog-gray hover.

### Signature: the Swapping Verb
The hero headline reads "Product Designer who [solves / builds / codes / ships]". The verb is Apple blue and cycles every 2.2s: the outgoing word slides up and fades while the next slides in from below (0.45s ease), and the slot's width animates to the incoming word so the line never jumps. Beside it, the intro video starts 2s after load, plays once, then replays after a 7s pause. Under `prefers-reduced-motion` the first verb stays static and the video shows its first frame. These are the theatrical moments in the system; do not add siblings.

## Do's and Don'ts

### Do:
- **Do** keep Apple blue #0071E3 as the sole accent: primary pills, links, hover color, stat numbers, chart fills, selection ring, `::selection`, caret, and focus outline.
- **Do** build hierarchy from the two weights (400/600), size steps, and the ink #1D1D1F vs. muted #6E6E73 split.
- **Do** put grouped content on fog-gray #F5F5F7 bento cards at 28px radius, nesting white 12 to 18px cards inside when a chapter needs inner structure.
- **Do** use the full pill (980px) for every button, tag, badge, and chart track, and end secondary/text links with the "›" chevron.
- **Do** left-align the home hero: 21px greeting, one-line semibold headline with the swapping blue verb, then a two-column grid of 16:9 video frame and 21px gray bio with the pill CTA. Subpage heroes stay centered.
- **Do** gate all motion (verb swap, video autoplay, nav collapse, fade-in reveals) behind `prefers-reduced-motion` and keep transitions in the 0.2 to 0.7s range with the house ease `cubic-bezier(0.2, 0.6, 0.2, 1)`.

### Don't:
- **Don't** cast drop shadows or paint gradients; depth is tonal grays and hairlines only (the sole permitted box-shadow is the `inset 0 0 0 1px` blue selection ring).
- **Don't** use green #30D158 anywhere except the "Available for work" status dot.
- **Don't** set uppercase or letterspaced labels, kickers, or eyebrows; labels are sentence-case 12 to 13px muted gray.
- **Don't** use monospace outside `.cs-code` blocks; mono is a material for code, not a costume.
- **Don't** introduce radii outside the 28/18/12px token scale (pill excepted), borders other than the secondary button's 1px blue and hairline rules, or a dark mode.
- **Don't** add a second accent hue, decorative icons beyond the "›"/"‹" chevrons and middot separators, or new theatrical animations beside the verb swap and video.
