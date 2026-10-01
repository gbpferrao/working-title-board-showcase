# WORKING TITLE — 3D Board Showcase

A full-screen tabletop card sandbox with a 10 × 10 board, sample character cards, and a draggable hand. Cards are not assigned to either player. Deployed cards all use the same board-card object and interactions.

## Interactions

- Drag cards from the hand onto the board, or move deployed cards to another open square.
- Deployed character cards share hover lift, board shadows, and the round defend control. Items cannot defend.
- Drag an item onto any deployed non-item card to equip it, or move a non-item card onto a deployed item to pick it up. Equipped items travel with their card, offset right and down with a slight turn.
- Drag an equipped item onto an adjacent open square to ungroup it. Other drops keep it equipped.
- Drag a deployed item to the bottom edge to return it to the hand.
- Scroll to zoom. Middle-drag pans. Ctrl or Shift + middle-drag orbits.

This repository contains the production build served by GitHub Pages.
