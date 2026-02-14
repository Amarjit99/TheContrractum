# Contrractum

A modern web application built with React, Vite, and TailwindCSS featuring a complete navigation system and routing infrastructure.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` to view the application.

---

## 🎨 Tech Stack

- **React** 19.2.4 - UI framework
- **Vite** 7.3.1 - Build tool & dev server
- **React Router** 7.13.0 - Client-side routing
- **TailwindCSS** 4.1.18 - Utility-first CSS
- **Lucide React** 0.563.0 - Icon library
- **ESLint** 9.39.2 - Code linting

---

## 📁 Project Structure

```
contrractum/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Main navigation
│   │   └── Footer.jsx       # Footer component
│   ├── pages/
│   │   ├── Home.jsx         # Homepage
│   │   ├── Login.jsx        # Login page
│   │   ├── Register.jsx     # Registration
│   │   ├── GenericPage.jsx  # Page template
│   │   ├── company/
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Leadership.jsx
│   │   │   ├── OurJourney.jsx
│   │   │   └── WhyChooseUs.jsx
│   │   ├── team/
│   │   │   ├── CoreTeam.jsx
│   │   │   ├── Culture.jsx
│   │   │   ├── IndustryAdvisors.jsx
│   │   │   ├── StudentInterns.jsx
│   │   │   └── TechnicalExperts.jsx
│   │   ├── solutions/
│   │   │   ├── BusinessSolutions.jsx
│   │   │   ├── ConnectivitySolutions.jsx
│   │   │   └── DigitalSolutions.jsx
│   │   ├── industries/
│   │   │   ├── Agriculture.jsx
│   │   │   ├── Banking.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Government.jsx
│   │   │   ├── Healthcare.jsx
│   │   │   ├── Manufacturing.jsx
│   │   │   ├── Retail.jsx
│   │   │   └── Telecom.jsx
│   │   ├── careers/
│   │   │   ├── Benefits.jsx
│   │   │   ├── Campus.jsx
│   │   │   ├── Growth.jsx
│   │   │   ├── Internships.jsx
│   │   │   ├── JobOpenings.jsx
│   │   │   ├── Life.jsx
│   │   │   └── Projects.jsx
│   │   ├── projects/
│   │   │   ├── CaseStudies.jsx
│   │   │   ├── Completed.jsx
│   │   │   ├── Ongoing.jsx
│   │   │   ├── Research.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── resources/
│   │   │   ├── Blogs.jsx
│   │   │   ├── CSR.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Media.jsx
│   │   │   ├── News.jsx
│   │   │   ├── Reports.jsx
│   │   │   └── Whitepapers.jsx
│   │   ├── join/
│   │   │   ├── Collaborate.jsx
│   │   │   ├── Partner.jsx
│   │   │   ├── Startup.jsx
│   │   │   └── Volunteer.jsx
│   │   └── contact/
│   │       ├── Feedback.jsx
│   │       ├── Locations.jsx
│   │       ├── Quote.jsx
│   │       ├── Support.jsx
│   │       └── Touch.jsx
│   └── App.jsx              # Main app & routing
└── docs/                    # Documentation
```

**Total:** 48 pages across 9 categories

---

## ✨ Features

- ✅ Responsive navigation with dropdown menus
- ✅ Mobile-friendly sidebar
- ✅ Client-side routing (no page reloads)
- ✅ Clean URL structure
- ✅ Wildcard routing for efficiency
- ✅ TailwindCSS styling
- ✅ Modern React patterns

---

## 🔧 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📖 Documentation

- [Quick Start Guide](docs/QUICK_START.md) - Getting started
- [Project Documentation](docs/PROJECT_DOCUMENTATION.md) - Complete overview
- [API Reference](docs/API_REFERENCE.md) - Code examples & patterns

---

## 🛣️ Routes

### Core Routes
- `/` - Homepage
- `/login` - User login
- `/register` - User registration

### Category Routes
- `/company/*` - Company information
- `/team/*` - Team & culture
- `/solutions/*` - Business solutions
- `/industries/*` - Industry-specific pages
- `/careers/*` - Job opportunities
- `/projects/*` - Case studies & projects
- `/resources/*` - Blogs, news, events
- `/join/*` - Partnership opportunities
- `/contact/*` - Contact & support

---

## 📝 License

All rights reserved.

---

**Version:** 1.0.0  
**Last Updated:** February 14, 2026
