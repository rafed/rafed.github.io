---
# An instance of the Portfolio widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: portfolio

# This file represents a page section.
headless: true

title: Achievements
subtitle: ''

content:
  # Page type to display. E.g. project.
  page_type: achievement

  # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  # filter_default: 0

  filter_button:
  - name: All
    tag: '*'
  - name: Certifications
    tag: Certifications
  - name: Awards
    tag: Awards

design:
  # Choose how many columns the section has. Valid values: '1' or '2'.
  columns: '1'

  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   5 = Showcase
  view: 3

  # For Showcase view, flip alternate rows?
  flip_alt_rows: false
---
