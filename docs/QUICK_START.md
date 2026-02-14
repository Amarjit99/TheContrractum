# Quick Start Guide - Contrractum Project

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Code editor (VS Code recommended)

### Installation

```bash
# Navigate to project directory
cd d:\THE-internship\contrractum

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at: **http://localhost:5173**

---

## 📂 Project Structure at a Glance

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Main navigation
│   └── Footer.jsx      # Footer component
├── pages/              # All page components
│   ├── Home.jsx        # Homepage
│   ├── company/        # Company pages (4 files)
│   ├── team/           # Team pages (5 files)
│   ├── solutions/      # Solutions pages (3 files)
│   ├── industries/     # Industries pages (8 files)
│   ├── careers/        # Careers pages (7 files)
│   ├── projects/       # Projects pages (5 files)
│   ├── resources/      # Resources pages (7 files)
│   ├── join/           # Join Us pages (4 files)
│   └── contact/        # Contact pages (5 files)
└── App.jsx             # Main app with routing
```

**Total:** 45 page files ready for development

---

## 🎯 How Navigation Works

### Current Setup

All navigation is **already working**! Here's how:

1. **Navbar** has menu items with paths
2. **Wildcard routes** in `App.jsx` handle all pages
3. **GenericPage** shows placeholder content
4. Click any menu → Navigate to that page ✅

### Navigation Flow

```
User clicks "About Us" 
  ↓
Navbar Link: /company/about-us
  ↓
App.jsx Route: /company/* matches
  ↓
Renders: GenericPage component
  ↓
Shows: "About Us" with placeholder
```

---

## ✏️ How to Add Content to a Page

### Method: Create Custom Page (Recommended)

**Example:** Building the "Job Openings" page

**Step 1:** Open the file
```
src/pages/careers/JobOpenings.jsx
```

**Step 2:** Replace content
```jsx
export default function JobOpenings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl font-black mb-4 text-center drop-shadow-lg">
            Job Openings
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto text-center">
            Join our team and build the future
          </p>
        </div>
      </div>
      
      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Job Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Software Engineer
            </h3>
            <p className="text-gray-600 mb-4">Full-time • Remote</p>
            <p className="text-gray-700 mb-4">
              We're looking for a talented software engineer...
            </p>
            <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-2 rounded-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Step 3:** Update App.jsx (if needed)
```jsx
import JobOpenings from './pages/careers/JobOpenings';

<Routes>
  <Route path="/careers/jobs" element={<JobOpenings />} />
  <Route path="/careers/*" element={<GenericPage />} />
</Routes>
```

**Step 4:** Test in browser
- Navigate to http://localhost:5173/careers/jobs
- See your custom content! 🎉

---

## 🎨 Styling Tips

### Using TailwindCSS

**Container:**
```jsx
<div className="max-w-7xl mx-auto px-6 lg:px-8">
  {/* Centered, responsive container */}
</div>
```

**Gradient Background:**
```jsx
<div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600">
  {/* Beautiful gradient */}
</div>
```

**Card:**
```jsx
<div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-100">
  {/* Card content */}
</div>
```

**Button:**
```jsx
<button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transition">
  Click Me
</button>
```

**Grid Layout:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid */}
</div>
```

---

## 📋 Page Development Checklist

For each page you develop:

- [ ] Open the page file
- [ ] Design the layout (hero, content sections, CTAs)
- [ ] Add actual content (text, images, data)
- [ ] Style with TailwindCSS
- [ ] Make it responsive (test mobile, tablet, desktop)
- [ ] Add interactive features (forms, buttons, etc.)
- [ ] Test navigation to/from the page
- [ ] Verify it looks good on all screen sizes

---

## 🔄 Development Workflow

### Daily Development

```bash
# 1. Start dev server
npm run dev

# 2. Open browser
http://localhost:5173

# 3. Edit files
# Changes auto-reload in browser!

# 4. Test navigation
# Click through all menu items

# 5. Build for production (when ready)
npm run build
```

---

## 🎯 Priority Pages to Develop

Suggested order based on importance:

### High Priority (Core Pages)
1. ✅ Home (already exists)
2. 📝 Company → About Us
3. 📝 Company → Why Choose Us
4. 📝 Contact → Get in Touch
5. 📝 Careers → Job Openings

### Medium Priority (Marketing)
6. 📝 Solutions → Digital Solutions
7. 📝 Solutions → Business Solutions
8. 📝 Projects → Case Studies
9. 📝 Resources → Blogs
10. 📝 Team → Core Team

---

## 🐛 Common Issues & Solutions

### Issue: Changes not showing

**Solution:**
```bash
# Stop server (Ctrl+C)
# Clear cache and restart
npm run dev
```

### Issue: Page shows 404

**Solution:**
- Check route exists in `App.jsx`
- Verify path spelling (case-sensitive)
- Ensure wildcard route is present

### Issue: Navbar link not working

**Solution:**
- Use `<Link to="/path">` not `<a href="/path">`
- Import: `import { Link } from 'react-router-dom'`

---

## 📚 Helpful Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## ✅ Next Steps

1. **Start the dev server:** `npm run dev`
2. **Pick a page** to work on (start with About Us)
3. **Open the file** and add content
4. **Test in browser** - see your changes live
5. **Repeat** for all 45 pages

**You're all set!** 🚀
