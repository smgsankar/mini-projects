# Calendar App

A standalone React calendar component extracted from the todo app. This app provides a clean and interactive calendar interface for navigating through months and years.

## Features

- 📅 Month view with current date highlighting
- 🔄 Navigation between months using arrow buttons
- 📆 Month/Year picker modal for quick navigation
- 🎯 "Today" button to quickly return to current date
- 📱 Responsive design with mobile and desktop layouts
- 🎨 Dark theme with modern styling

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **date-fns** - Date manipulation utilities
- **PropTypes** - Runtime type checking

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the calendar directory:
   ```bash
   cd calendar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
calendar/
├── public/
│   └── icon.png
├── src/
│   ├── components/
│   │   ├── Calendar/
│   │   │   ├── components/
│   │   │   │   ├── DayHeaderCell.jsx
│   │   │   │   ├── DayHeaderRow.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── MonthDayCell.jsx
│   │   │   │   ├── MonthDays.jsx
│   │   │   │   └── MonthYearPickerModal.jsx
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   └── index.jsx
│   │   └── Modal.jsx
│   ├── icons/
│   │   ├── ChevronDown.jsx
│   │   ├── ChevronLeft.jsx
│   │   ├── ChevronRight.jsx
│   │   └── IconPropTypes.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Calendar Component Usage

The main Calendar component can be imported and used in other React applications:

```jsx
import { Calendar } from './components/Calendar';

function App() {
  return (
    <div>
      <Calendar />
    </div>
  );
}
```

## Customization

The calendar uses Tailwind CSS classes and can be easily customized by modifying the component styles or extending the Tailwind configuration.

## License

This project is part of the mini-projects collection by smgsankar.
