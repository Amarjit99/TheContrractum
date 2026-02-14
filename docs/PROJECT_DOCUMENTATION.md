# Contrractum Project Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Navigation System](#navigation-system)
3. [File Structure](#file-structure)
4. [Routing Configuration](#routing-configuration)
5. [Component Architecture](#component-architecture)
6. [Development Workflow](#development-workflow)
7. [Adding New Pages](#adding-new-pages)
8. [Styling Guide](#styling-guide)
9. [Best Practices](#best-practices)

---

## 🎯 Project Overview

**Project Name:** Contrractum  
**Framework:** React 19.2.4  
**Build Tool:** Vite 7.3.1  
**Routing:** React Router DOM 7.13.0  
**Styling:** TailwindCSS 4.1.18  
**Icons:** Lucide React 0.563.0

### Tech Stack

- **Frontend:** React with JSX
- **Routing:** React Router v7 (client-side routing)
- **Styling:** TailwindCSS (utility-first CSS)
- **Icons:** Lucide React (modern icon library)
- **Build:** Vite (fast development server & build tool)
- **Linting:** ESLint 9.39.2

---

## 🧭 Navigation System

### Overview

The navigation system consists of:
1. **Navbar Component** - Main navigation with dropdowns
2. **Menu Structure** - Hierarchical menu items with paths
3. **Routing System** - React Router configuration
4. **Page Components** - Individual page files

### Navbar Component

**Location:** `src/components/Navbar.jsx`

**Features:**
- Desktop navigation with hover dropdowns
- Mobile responsive sidebar menu
- Delayed dropdown close (300ms) for better UX
- Active state management
- Link-based navigation (no page reloads)

**Menu Structure:**

```javascript
const menuItems = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Company',
    submenu: [
      { title: 'About Us', path: '/company/about-us' },
      { title: 'Leadership', path: '/company/leadership' },
      // ... more items
    ]
  },
  // ... more categories
];
```

### Navigation Categories

| Category | Submenu Items | Total Pages |
|----------|--------------|-------------|
| Company | About Us, Leadership, Our Journey, Why Choose Us | 4 |
| Team | Core Team, Technical Experts, Industry Advisors, Student Interns, Culture | 5 |
| Solutions | Digital, Business, Connectivity | 3 |
| Industries | Government, Healthcare, Education, Retail, Telecom, Banking, Manufacturing, Agriculture | 8 |
| Careers | Life at Company, Job Openings, Internships, Projects, Campus, Growth, Benefits | 7 |
| Projects | Ongoing, Completed, Case Studies, Research, Testimonials | 5 |
| Resources | Blogs, News, Events, CSR, Whitepapers, Reports, Media | 7 |
| Join Us | Partner, Collaborate, Startup, Volunteer | 4 |
| Contact | Get in Touch, Quote, Support, Locations, Feedback | 5 |

**Total:** 45 pages across 9 categories

---

## 📁 File Structure

### Project Directory Structure

```
contrractum/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Main navigation component
│   │   ├── Footer.jsx          # Footer component
│   │   └── About.jsx           # About section component
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   ├── Login.jsx           # Login page
│   │   ├── Register.jsx        # Registration page
│   │   ├── GenericPage.jsx     # Reusable placeholder page
│   │   ├── company/            # Company pages (4 files)
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Leadership.jsx
│   │   │   ├── OurJourney.jsx
│   │   │   └── WhyChooseUs.jsx
│   │   ├── team/               # Team pages (5 files)
│   │   │   ├── CoreTeam.jsx
│   │   │   ├── TechnicalExperts.jsx
│   │   │   ├── IndustryAdvisors.jsx
│   │   │   ├── StudentInterns.jsx
│   │   │   └── Culture.jsx
│   │   ├── solutions/          # Solutions pages (3 files)
│   │   │   ├── DigitalSolutions.jsx
│   │   │   ├── BusinessSolutions.jsx
│   │   │   └── ConnectivitySolutions.jsx
│   │   ├── industries/         # Industries pages (8 files)
│   │   │   ├── Government.jsx
│   │   │   ├── Healthcare.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Retail.jsx
│   │   │   ├── Telecom.jsx
│   │   │   ├── Banking.jsx
│   │   │   ├── Manufacturing.jsx
│   │   │   └── Agriculture.jsx
│   │   ├── careers/            # Careers pages (7 files)
│   │   │   ├── Life.jsx
│   │   │   ├── JobOpenings.jsx
│   │   │   ├── Internships.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Campus.jsx
│   │   │   ├── Growth.jsx
│   │   │   └── Benefits.jsx
│   │   ├── projects/           # Projects pages (5 files)
│   │   │   ├── Ongoing.jsx
│   │   │   ├── Completed.jsx
│   │   │   ├── CaseStudies.jsx
│   │   │   ├── Research.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── resources/          # Resources pages (7 files)
│   │   │   ├── Blogs.jsx
│   │   │   ├── News.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── CSR.jsx
│   │   │   ├── Whitepapers.jsx
│   │   │   ├── Reports.jsx
│   │   │   └── Media.jsx
│   │   ├── join/               # Join Us pages (4 files)
│   │   │   ├── Partner.jsx
│   │   │   ├── Collaborate.jsx
│   │   │   ├── Startup.jsx
│   │   │   └── Volunteer.jsx
│   │   └── contact/            # Contact pages (5 files)
│   │       ├── Touch.jsx
│   │       ├── Quote.jsx
│   │       ├── Support.jsx
│   │       ├── Locations.jsx
│   │       └── Feedback.jsx
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # TailwindCSS configuration
└── eslint.config.js            # ESLint configuration
```

### File Count Summary

- **Total Page Files:** 52 files
  - Core pages: 4 (Home, Login, Register, GenericPage)
  - Category pages: 45 files
  - Components: 3 files (Navbar, Footer, About)

---

## 🛣️ Routing Configuration

### App.jsx Routes

**Location:** `src/App.jsx`

The routing system uses **wildcard routes** for efficiency:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenericPage from './pages/GenericPage';

<Routes>
  {/* Core Routes */}
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  
  {/* Dynamic Wildcard Routes */}
  <Route path="/company/*" element={<GenericPage />} />
  <Route path="/team/*" element={<GenericPage />} />
  <Route path="/solutions/*" element={<GenericPage />} />
  <Route path="/industries/*" element={<GenericPage />} />
  <Route path="/careers/*" element={<GenericPage />} />
  <Route path="/projects/*" element={<GenericPage />} />
  <Route path="/resources/*" element={<GenericPage />} />
  <Route path="/join/*" element={<GenericPage />} />
  <Route path="/contact/*" element={<GenericPage />} />
</Routes>
```

### How Wildcard Routes Work

- `<Route path="/company/*" />` matches **any** path starting with `/company/`
- Examples: `/company/about-us`, `/company/leadership`, etc.
- All matched routes render the same `GenericPage` component
- The component extracts the page title from the URL

### Route Priority

Routes are matched in order:
1. **Exact routes** (e.g., `/`, `/login`) - matched first
2. **Specific routes** (e.g., `/careers/jobs`) - matched before wildcards
3. **Wildcard routes** (e.g., `/careers/*`) - matched last

**Example:**
```jsx
<Route path="/careers/jobs" element={<JobOpenings />} />  {/* Specific */}
<Route path="/careers/*" element={<GenericPage />} />     {/* Wildcard */}
```
- `/careers/jobs` → Renders `JobOpenings` component
- `/careers/internships` → Renders `GenericPage` component

---

## 🏗️ Component Architecture

### GenericPage Component

**Location:** `src/pages/GenericPage.jsx`

**Purpose:** Reusable placeholder page for all submenu items

**Features:**
- Extracts page title from URL pathname
- Displays hero section with gradient background
- Shows "Content coming soon..." message
- Includes feature cards with icons
- Fully responsive design

**Code Structure:**

```jsx
export default function GenericPage() {
  const location = useLocation();
  
  // Extract page name from URL
  const pageName = location.pathname
    .split('/')
    .filter(Boolean)
    .join(' / ')
    .replace(/-/g, ' ');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600">
        <h1>{pageName}</h1>
      </div>
      
      {/* Content Section */}
      <div className="max-w-7xl mx-auto">
        {/* Placeholder content */}
      </div>
    </div>
  );
}
```

### Page Component Template

All category pages follow this structure:

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
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-100">
          <p className="text-gray-700 text-lg">Content coming soon...</p>
        </div>
      </div>
    </div>
  );
}
```

### Navbar Component

**Key Features:**

1. **Desktop Menu:**
   - Hover to show dropdown
   - 300ms delay before closing
   - Smooth transitions
   - Link-based navigation

2. **Mobile Menu:**
   - Hamburger icon toggle
   - Slide-in sidebar
   - Expandable submenus
   - Auto-close on navigation

3. **State Management:**
   ```jsx
   const [activeDropdown, setActiveDropdown] = useState(null);
   const [isOpen, setIsOpen] = useState(false);
   const [closeTimeout, setCloseTimeout] = useState(null);
   ```

---

## 💻 Development Workflow

### Running the Development Server

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Server runs at: http://localhost:5173
```

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Project Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## ➕ Adding New Pages

### Option 1: Using GenericPage (Current Setup)

**No changes needed!** All routes already work with wildcard routing.

1. Add menu item to `Navbar.jsx`:
   ```jsx
   {
     title: 'New Page',
     path: '/category/new-page'
   }
   ```

2. Navigate to `/category/new-page` → Shows `GenericPage`

### Option 2: Creating Custom Page

**Step 1:** Create the page file

```bash
# Create new file
src/pages/category/NewPage.jsx
```

**Step 2:** Write the component

```jsx
export default function NewPage() {
  return (
    <div className="min-h-screen">
      {/* Your custom content */}
    </div>
  );
}
```

**Step 3:** Update App.jsx

```jsx
import NewPage from './pages/category/NewPage';

<Routes>
  {/* Add BEFORE wildcard route */}
  <Route path="/category/new-page" element={<NewPage />} />
  
  {/* Wildcard route */}
  <Route path="/category/*" element={<GenericPage />} />
</Routes>
```

**Step 4:** Add to Navbar.jsx

```jsx
{
  title: 'New Page',
  path: '/category/new-page'
}
```

### Adding a New Category

**Step 1:** Create category folder

```bash
mkdir src/pages/newcategory
```

**Step 2:** Create page files

```bash
src/pages/newcategory/PageOne.jsx
src/pages/newcategory/PageTwo.jsx
```

**Step 3:** Add wildcard route in App.jsx

```jsx
<Route path="/newcategory/*" element={<GenericPage />} />
```

**Step 4:** Add to Navbar menu

```jsx
{
  name: 'New Category',
  submenu: [
    { title: 'Page One', path: '/newcategory/page-one' },
    { title: 'Page Two', path: '/newcategory/page-two' }
  ]
}
```

---

## 🎨 Styling Guide

### TailwindCSS Utility Classes

The project uses TailwindCSS for all styling. Common patterns:

**Layout:**
```jsx
<div className="max-w-7xl mx-auto px-6 lg:px-8">
  {/* Centered container with responsive padding */}
</div>
```

**Gradients:**
```jsx
<div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600">
  {/* Red to pink to purple gradient */}
</div>
```

**Responsive Design:**
```jsx
<div className="text-base md:text-lg lg:text-xl">
  {/* Responsive text sizes */}
</div>
```

**Cards:**
```jsx
<div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-100">
  {/* White card with shadow and border */}
</div>
```

### Color Palette

| Color | Usage | TailwindCSS Class |
|-------|-------|-------------------|
| Red | Primary, Hero backgrounds | `red-600` |
| Pink | Gradients, Accents | `pink-600` |
| Purple | Gradients, Highlights | `purple-600` |
| Gray | Text, Backgrounds | `gray-50`, `gray-700`, `gray-900` |
| White | Cards, Content areas | `white` |

### Typography

```jsx
{/* Page Title */}
<h1 className="text-5xl font-black mb-4 text-center drop-shadow-lg">

{/* Section Title */}
<h2 className="text-3xl font-bold text-gray-900 mb-6">

{/* Body Text */}
<p className="text-gray-700 text-lg leading-relaxed">
```

---

## ✅ Best Practices

### Component Organization

1. **One component per file**
2. **Use descriptive names** (e.g., `JobOpenings.jsx`, not `Jobs.jsx`)
3. **Group related pages** in category folders
4. **Export default** for page components

### Routing Best Practices

1. **Use wildcard routes** for categories with multiple pages
2. **Place specific routes before wildcards**
3. **Keep route paths lowercase with hyphens** (e.g., `/job-openings`)
4. **Match route paths to menu item paths**

### Navigation Best Practices

1. **Always use `<Link>` component** from react-router-dom
2. **Never use `<a href>`** for internal navigation
3. **Close dropdowns/menus** after navigation
4. **Provide visual feedback** for active states

### Code Style

1. **Use functional components** with hooks
2. **Destructure props** at component top
3. **Keep components focused** (single responsibility)
4. **Use meaningful variable names**

### Performance

1. **Lazy load routes** for large applications:
   ```jsx
   const JobOpenings = lazy(() => import('./pages/careers/JobOpenings'));
   ```

2. **Optimize images** before adding to public folder
3. **Use TailwindCSS purge** in production (already configured)

### Accessibility

1. **Use semantic HTML** (`<nav>`, `<main>`, `<footer>`)
2. **Add alt text** to images
3. **Ensure keyboard navigation** works
4. **Maintain color contrast** ratios

---

## 🔧 Troubleshooting

### Common Issues

**Issue:** Page not found (404)

**Solution:** Check that:
- Route exists in `App.jsx`
- Path matches exactly (case-sensitive)
- Wildcard route is present for the category

**Issue:** Navigation doesn't work

**Solution:** Verify:
- Using `<Link>` component, not `<a>` tags
- `to` prop matches route path
- React Router is properly imported

**Issue:** Dropdown doesn't close

**Solution:** Check:
- `onClick` handler sets `activeDropdown` to `null`
- Mobile menu has `setIsOpen(false)` on link click

**Issue:** Styles not applying

**Solution:** Ensure:
- TailwindCSS classes are spelled correctly
- `index.css` imports Tailwind directives
- Development server is running

---

## 📚 Additional Resources

### Documentation Links

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)

### Project Files

- **Navigation Setup:** `src/components/Navbar.jsx`
- **Routing Config:** `src/App.jsx`
- **Page Template:** `src/pages/GenericPage.jsx`
- **Styles:** `src/index.css`

---

## 📝 Summary

This project implements a complete navigation and routing system with:

- ✅ 45 page files across 9 categories
- ✅ Wildcard routing for efficiency
- ✅ Responsive navbar with dropdowns
- ✅ Consistent page structure
- ✅ TailwindCSS styling
- ✅ Ready for content development

**Next Steps:**
1. Pick a page to develop
2. Replace placeholder content with real content
3. Test navigation and responsiveness
4. Deploy when ready

---

**Last Updated:** February 14, 2026  
**Version:** 1.0.0  
**Maintained by:** Development Team
