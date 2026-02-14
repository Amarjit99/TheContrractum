# API Reference - Contrractum Project

## React Router Hooks & Components

### `<Link>` Component

Navigate between pages without reloading.

```jsx
import { Link } from 'react-router-dom';

<Link to="/company/about-us">About Us</Link>
<Link to="/careers/jobs" className="text-blue-600">Jobs</Link>
```

**Props:**
- `to` (string): Destination path
- `className` (string): CSS classes
- `state` (object): Pass data to destination page

### `useLocation()` Hook

Get current location information.

```jsx
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  
  console.log(location.pathname);  // "/company/about-us"
  console.log(location.state);     // Passed state data
}
```

### `useNavigate()` Hook

Programmatically navigate.

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/careers/jobs');
  };
}
```

---

## TailwindCSS Utilities

### Layout

```jsx
{/* Container */}
<div className="container mx-auto">
<div className="max-w-7xl mx-auto">
<div className="max-w-4xl mx-auto">

{/* Flexbox */}
<div className="flex items-center justify-between">
<div className="flex flex-col gap-4">

{/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Spacing

```jsx
{/* Padding */}
<div className="p-4">        {/* All sides */}
<div className="px-6 py-4">  {/* Horizontal & Vertical */}
<div className="pt-8 pb-4">  {/* Top & Bottom */}

{/* Margin */}
<div className="m-4">        {/* All sides */}
<div className="mx-auto">    {/* Center horizontally */}
<div className="mb-6">       {/* Bottom only */}

{/* Gap (for flex/grid) */}
<div className="gap-4">
<div className="gap-x-6 gap-y-4">
```

### Typography

```jsx
{/* Font Size */}
<h1 className="text-5xl">    {/* 48px */}
<h2 className="text-3xl">    {/* 30px */}
<p className="text-lg">      {/* 18px */}
<p className="text-base">    {/* 16px */}

{/* Font Weight */}
<h1 className="font-black">  {/* 900 */}
<h2 className="font-bold">   {/* 700 */}
<p className="font-semibold"> {/* 600 */}

{/* Text Alignment */}
<p className="text-center">
<p className="text-left">
<p className="text-right">

{/* Line Height */}
<p className="leading-relaxed">
<p className="leading-loose">
```

### Colors

```jsx
{/* Background */}
<div className="bg-white">
<div className="bg-gray-50">
<div className="bg-red-600">

{/* Text */}
<p className="text-gray-900">
<p className="text-red-600">
<p className="text-white">

{/* Border */}
<div className="border-2 border-red-100">
<div className="border-gray-200">
```

### Gradients

```jsx
{/* Background Gradients */}
<div className="bg-gradient-to-r from-red-600 to-pink-600">
<div className="bg-gradient-to-br from-gray-50 via-white to-red-50">
<div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600">
```

### Borders & Shadows

```jsx
{/* Borders */}
<div className="border">
<div className="border-2">
<div className="rounded-lg">      {/* 8px */}
<div className="rounded-xl">      {/* 12px */}
<div className="rounded-2xl">     {/* 16px */}

{/* Shadows */}
<div className="shadow-lg">
<div className="shadow-xl">
<div className="drop-shadow-lg">
```

### Responsive Design

```jsx
{/* Mobile-first approach */}
<div className="text-base md:text-lg lg:text-xl">
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div className="px-4 md:px-6 lg:px-8">

{/* Breakpoints */}
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

### Hover & Transitions

```jsx
{/* Hover Effects */}
<button className="hover:bg-red-700">
<div className="hover:shadow-xl">
<a className="hover:text-red-600">

{/* Transitions */}
<button className="transition duration-300">
<div className="transition-all hover:scale-105">
```

---

## Component Patterns

### Page Component Template

```jsx
export default function PageName() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl font-black mb-4 text-center drop-shadow-lg">
            Page Title
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto text-center">
            Subtitle or description
          </p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Your content here */}
      </div>
    </div>
  );
}
```

### Card Component

```jsx
<div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-100 hover:shadow-xl transition">
  <h3 className="text-2xl font-bold text-gray-900 mb-2">
    Card Title
  </h3>
  <p className="text-gray-600 mb-4">
    Card description
  </p>
  <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-2 rounded-lg">
    Action
  </button>
</div>
```

### Grid Layout

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Card 1 */}
  <div className="bg-white rounded-xl shadow-lg p-6">
    Content
  </div>
  
  {/* Card 2 */}
  <div className="bg-white rounded-xl shadow-lg p-6">
    Content
  </div>
  
  {/* Card 3 */}
  <div className="bg-white rounded-xl shadow-lg p-6">
    Content
  </div>
</div>
```

### Button Styles

```jsx
{/* Primary Button */}
<button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transition">
  Primary Action
</button>

{/* Secondary Button */}
<button className="bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition">
  Secondary Action
</button>

{/* Outline Button */}
<button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-red-600 hover:text-red-600 transition">
  Outline Button
</button>
```

### Form Elements

```jsx
{/* Input Field */}
<input 
  type="text"
  placeholder="Enter your name"
  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
/>

{/* Textarea */}
<textarea 
  placeholder="Your message"
  rows="4"
  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
/>

{/* Select Dropdown */}
<select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

---

## Lucide React Icons

### Import & Usage

```jsx
import { Menu, X, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';

<Menu className="h-6 w-6" />
<X className="h-6 w-6 text-red-600" />
<ChevronDown className="h-4 w-4" />
<Mail className="h-5 w-5 text-gray-600" />
```

### Common Icons

```jsx
// Navigation
<Menu />
<X />
<ChevronDown />
<ChevronRight />
<ArrowRight />

// Contact
<Mail />
<Phone />
<MapPin />
<MessageCircle />

// Social
<Facebook />
<Twitter />
<Linkedin />
<Instagram />

// Actions
<Search />
<Download />
<Upload />
<Edit />
<Trash2 />
<Plus />

// Status
<Check />
<AlertCircle />
<Info />
<XCircle />
```

---

## React Hooks

### useState

```jsx
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### useEffect

```jsx
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Runs after component mounts
    console.log('Component mounted');
    
    return () => {
      // Cleanup function
      console.log('Component unmounting');
    };
  }, []); // Empty array = run once
  
  return <div>Content</div>;
}
```

---

## Common Code Snippets

### Loading State

```jsx
const [loading, setLoading] = useState(true);

{loading ? (
  <div className="flex items-center justify-center py-20">
    <div className="text-xl text-gray-600">Loading...</div>
  </div>
) : (
  <div>Content</div>
)}
```

### Error Handling

```jsx
const [error, setError] = useState(null);

{error && (
  <div className="bg-red-100 border-2 border-red-600 text-red-700 px-4 py-3 rounded-lg">
    {error}
  </div>
)}
```

### Modal/Popup

```jsx
const [isOpen, setIsOpen] = useState(false);

{isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
      <p className="text-gray-700 mb-6">Modal content</p>
      <button 
        onClick={() => setIsOpen(false)}
        className="bg-red-600 text-white px-6 py-2 rounded-lg"
      >
        Close
      </button>
    </div>
  </div>
)}
```

### Map Array to Components

```jsx
const items = ['Item 1', 'Item 2', 'Item 3'];

<div className="grid grid-cols-3 gap-4">
  {items.map((item, index) => (
    <div key={index} className="bg-white p-4 rounded-lg">
      {item}
    </div>
  ))}
</div>
```

---

## File Paths Reference

### Import Paths

```jsx
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/company/AboutUs';
import JobOpenings from './pages/careers/JobOpenings';

// React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Icons
import { Menu, X } from 'lucide-react';
```

### Asset Paths

```jsx
// Images in public folder
<img src="/logo.png" alt="Logo" />
<img src="/images/hero.jpg" alt="Hero" />

// CSS
import './index.css';
```

---

## Quick Reference

### Navbar Menu Item Format

```jsx
{
  name: 'Category',
  submenu: [
    { title: 'Page Name', path: '/category/page-name' }
  ]
}
```

### Route Format

```jsx
<Route path="/category/page-name" element={<PageComponent />} />
<Route path="/category/*" element={<GenericPage />} />
```

### Page File Naming

- **Component Name:** PascalCase (e.g., `JobOpenings`)
- **File Name:** PascalCase.jsx (e.g., `JobOpenings.jsx`)
- **URL Path:** kebab-case (e.g., `/job-openings`)

---

**Last Updated:** February 14, 2026
