# Four-Match Prediction Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the old two-match prediction page with a four-match summary-and-details dashboard and retain the completed matches as review cards.

**Architecture:** Keep the existing dependency-free single-page approach. Store all prediction and evidence data in an in-page JavaScript array, render one selected match into reusable detail sections, and use a small Node verification script to validate static contracts and probability totals.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node.js verification script, GitHub Pages.

---

### Task 1: Add a failing page contract check

**Files:**
- Create: `scripts/verify-page.mjs`

- [ ] Check that `index.html` contains all four upcoming matches, both completed reviews, evidence filters, probability view controls, scenario controls, and no garbled replacement text.
- [ ] Run `node scripts/verify-page.mjs` and confirm it fails against the old page.

### Task 2: Build the four-match summary and details page

**Files:**
- Modify: `index.html`

- [ ] Replace the old two-match navigation with four summary cards.
- [ ] Add reusable detail rendering for conclusion, evidence, five dimensions, fusion models, live factors, probability views, score distribution, and scenario simulation.
- [ ] Add the completed-match review section.
- [ ] Keep the page dependency-free and responsive.
- [ ] Run `node scripts/verify-page.mjs` and confirm it passes.

### Task 3: Verify browser behavior

**Files:**
- Verify: `index.html`

- [ ] Open the local page and verify all four summary cards switch the detail view.
- [ ] Verify evidence filters, probability views, dimension tabs, scenario sliders, and completed review expansion.
- [ ] Verify desktop and mobile layouts and inspect browser console errors.

### Task 4: Publish and verify

**Files:**
- Commit: `index.html`, `scripts/verify-page.mjs`, implementation plan

- [ ] Commit the intended public page and verification artifacts.
- [ ] Push `main`.
- [ ] Open the GitHub Pages URL and verify the four-match page is live.
