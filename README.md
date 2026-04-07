# Time Game

A small React game where you try to stop a timer as close as possible to a target time.

## About

This project is built with Vite and React. It includes multiple challenge levels (`Easy`, `Not so easy`, `Getting tough`, and `Pros only`) with different target durations.

You can:
- Start a challenge timer
- Stop it when you think the target time is reached
- See your result in a modal
- Reset and try again

## Tech Stack

- React
- Vite
- JavaScript (JSX)

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the development server

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - build for production
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Project Structure

- `src/App.jsx` - renders the player section and challenge cards
- `src/components/TimerChallange.jsx` - core timer challenge logic
- `src/components/ResultModal.jsx` - result dialog/modal UI
- `src/components/Player.jsx` - player-related UI

## Notes

The component name `TimerChallange` follows the current file naming in the project.
