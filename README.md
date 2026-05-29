# Swarnabha Ghosh - AI/ML Engineer Portfolio

A modern, professional portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Features a dark futuristic AI theme with subtle animations, glassmorphism effects, and professional design optimized for recruiters and internship applications.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## ✨ Features

- **Hero Section**: Professional introduction with CGPA highlight and call-to-action buttons
- **About Me**: Personal background and research interests
- **Education**: B.Tech Computer Science at MCKV Institute of Engineering (CGPA: 9.74)
- **Skills**: Categorized skill display (Programming Languages, AI/ML Frameworks, Tools & APIs)
- **Projects**: Three key AI/ML projects with technical details:
  - Movie Recommender System (Collaborative Filtering, SVD, 85% accuracy)
  - PlantIQ (YOLO-based plant disease detection, 92% accuracy)
  - CivicLens (NLP-powered civic issue management with OpenAI APIs)
- **Experience**: IEEE CS SBC IIT Kharagpur Internship (Integer Linear Programming, Optimization, Smart Infrastructure)
- **Certifications**: Professional certifications showcase
- **Contact**: Social media links and email
- **Responsive Design**: Fully responsive across all devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Dark Theme**: Professional AI-themed dark mode design
- **Subtle Animations**: Professional animations optimized for recruiter viewing

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and custom CSS
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   └── components/
│       ├── Navbar.tsx           # Navigation bar with smooth scrolling
│       ├── Hero.tsx             # Hero section with CGPA highlight
│       ├── About.tsx            # About me section
│       ├── Education.tsx        # Education section with academic details
│       ├── Skills.tsx           # Skills section with categories
│       ├── Projects.tsx         # Projects showcase with technical details
│       ├── Experience.tsx       # Professional experience
│       ├── Certifications.tsx   # Certifications display
│       ├── Contact.tsx          # Contact section with social links
│       └── Footer.tsx           # Footer component
├── public/                      # Static assets
├── contents/                    # Resume and other documents
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
└── postcss.config.js           # PostCSS configuration
```

## 🎨 Customization

### Update Personal Information

Edit the following components to personalize your portfolio:

- **Hero.tsx**: Update name, title, and CGPA
- **Education.tsx**: Modify education details and CGPA
- **Experience.tsx**: Add your work experience
- **Skills.tsx**: Add or remove skills in each category
- **Projects.tsx**: Update project information and links
- **Certifications.tsx**: Add your certifications
- **Contact.tsx**: Update social media links and email

### Theme Customization

Modify the theme in `tailwind.config.ts` and `src/app/globals.css`:
- Change color schemes
- Adjust animation speeds
- Customize glassmorphism effects
- Modify gradient colors

## 🎯 Key Features for Recruiters

- **Academic Excellence**: CGPA 9.74 prominently displayed
- **Research Experience**: IEEE CS SBC IIT Kharagpur internship highlighted
- **Technical Skills**: Organized by category for easy scanning
- **Project Impact**: Projects include accuracy metrics and technical details
- **Professional Design**: Clean, minimal design optimized for recruiter viewing
- **Easy Contact**: Direct links to GitHub, LinkedIn, Kaggle, LeetCode, and email
- **Resume Download**: One-click resume download from Hero section

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build
5. Click Deploy

### Manual Deployment

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## � Academic Background

- **Degree**: B.Tech in Computer Science
- **Institution**: MCKV Institute of Engineering
- **CGPA**: 9.74
- **Specialization**: AI/ML, Computer Vision, Optimization Algorithms

## 💼 Experience

- **IEEE CS SBC IIT Kharagpur Intern** (2023 - Present)
  - Integer Linear Programming
  - Optimization Algorithms
  - Scheduling Systems
  - Revenue Optimization
  - Smart Infrastructure

## 🔧 Technical Skills

**Programming Languages**: Python, Java, C, C++, SQL

**AI/ML Frameworks**: TensorFlow, Scikit-learn, Deep Learning, NLP, YOLO, OpenCV

**Tools & APIs**: FastAPI, Flask, Git, Linux, Hugging Face, Ollama, OpenAI APIs

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Swarnabha Ghosh**
- AI/ML Engineer
- B.Tech Computer Science (CGPA: 9.74)
- IEEE CS SBC IIT Kharagpur Intern
- Research Focus: Integer Linear Programming, Optimization, Smart Infrastructure

---

Built with ❤️ using Next.js and Tailwind CSS
