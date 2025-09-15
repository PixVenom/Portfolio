# Modern Portfolio Website

A responsive, modern portfolio website built with HTML, Tailwind CSS, and JavaScript. Features smooth animations, dark theme with neon green accents, and a professional design.

## 🚀 Features

### Design & UI
- **Modern Dark Theme**: Black background with neon green (#00ff88) and electric blue accents
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: GSAP-powered animations with ScrollTrigger for scroll-based effects
- **Professional Typography**: Inter font family for clean, modern text
- **Rounded Corners**: Consistent border-radius throughout the design
- **Subtle Shadows**: Depth and elevation with carefully crafted shadows

### Sections
1. **Hero Section**: Full-screen intro with animated particles, gradient background, and call-to-action buttons
2. **About Section**: Bio with photo and interactive skill badges with icons
3. **Projects Section**: Grid layout with hover effects and project cards
4. **Experience Section**: Timeline layout for work/education history
5. **Contact Section**: Contact form with validation and social media links
6. **Footer**: Minimal footer with copyright and social links

### Interactive Features
- **Sticky Navigation**: Smooth scroll navigation with active section highlighting
- **Mobile Menu**: Hamburger menu for mobile devices
- **Form Validation**: Contact form with email validation and success/error notifications
- **Hover Effects**: Interactive hover states for cards and buttons
- **Particle Animation**: Animated background particles in hero section
- **Scroll Progress**: Visual progress indicator at the top of the page
- **Keyboard Navigation**: ESC key to close mobile menu
- **Touch Gestures**: Swipe detection for mobile devices

### Performance
- **Optimized Animations**: Throttled scroll events for smooth performance
- **Intersection Observer**: Efficient element observation for animations
- **CDN Resources**: Fast loading with CDN-hosted libraries
- **Minimal Dependencies**: Only essential external libraries

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with proper SEO meta tags
- **Tailwind CSS**: Utility-first CSS framework for styling
- **JavaScript (ES6+)**: Modern JavaScript with async/await
- **GSAP**: Professional animation library with ScrollTrigger
- **Font Awesome**: Icon library for skill badges and social links
- **Google Fonts**: Inter font family

## 📦 Installation & Setup

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript

### Quick Start
1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content to match your information
4. **Deploy** to your preferred hosting service

### Local Development
```bash
# If you have a local server (optional)
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000` in your browser.

## 🎨 Customization Guide

### Personal Information
Update the following in `index.html`:

1. **Meta Tags** (lines 4-10):
   ```html
   <meta name="description" content="Your description">
   <meta name="keywords" content="your, keywords">
   <meta name="author" content="Your Name">
   <meta property="og:title" content="Your Name - Web Developer Portfolio">
   ```

2. **Page Title** (line 11):
   ```html
   <title>Your Name - Web Developer Portfolio</title>
   ```

3. **Hero Section** (around line 150):
   ```html
   <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Your Name</span>
   <h2 class="text-2xl md:text-3xl text-gray-300 mb-8">Your Title</h2>
   <p class="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Your tagline</p>
   ```

4. **About Section** (around line 200):
   - Update the placeholder image URL
   - Modify the bio text
   - Add/remove skill badges as needed

5. **Projects Section** (around line 250):
   - Replace placeholder images with your project screenshots
   - Update project titles, descriptions, and tech stacks
   - Add your actual project links

6. **Experience Section** (around line 320):
   - Update job titles, companies, dates, and descriptions

7. **Contact Section** (around line 380):
   - Update email address
   - Add your actual social media links
   - Customize the contact message

### Styling Customization

#### Color Scheme
The main colors are defined in the CSS variables and Tailwind classes:
- **Primary Accent**: `#00ff88` (neon green)
- **Secondary Accent**: `#3b82f6` (electric blue)
- **Background**: `#000000` (black)
- **Surface**: `#1f2937` (gray-800)

#### Font
The website uses Inter font family. To change it:
1. Update the Google Fonts import in the `<style>` section
2. Modify the `font-family` property in the CSS

#### Animations
Animation settings can be adjusted in `script.js`:
- **Duration**: Modify `duration` values in GSAP animations
- **Easing**: Change `ease` values for different animation curves
- **Stagger**: Adjust `stagger` values for sequential animations

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Add corresponding navigation link
3. Create animations in `script.js` using GSAP
4. Add responsive styles with Tailwind classes

### Adding New Projects
1. Copy the project card structure in the projects section
2. Update the image, title, description, and tech stack
3. Add your project and GitHub links
4. The hover animations will work automatically

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Mobile hamburger menu
- Responsive grid layouts
- Flexible typography scaling
- Touch-friendly interactions

## 🚀 Deployment

### Static Hosting
The website can be deployed to any static hosting service:

1. **Netlify**:
   - Drag and drop the folder to Netlify
   - Or connect your GitHub repository

2. **Vercel**:
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel`

3. **GitHub Pages**:
   - Push to GitHub repository
   - Enable GitHub Pages in repository settings

4. **Firebase Hosting**:
   - Install Firebase CLI
   - Run: `firebase init hosting`
   - Deploy: `firebase deploy`

### Custom Domain
1. Purchase a domain name
2. Configure DNS settings with your hosting provider
3. Update the meta tags in `index.html` with your domain

## 🔧 Advanced Customization

### Adding a Blog Section
1. Create a new section in `index.html`
2. Add blog post cards with images and excerpts
3. Link to individual blog post pages
4. Add animations for the new section

### Adding a Portfolio Filter
1. Add filter buttons above the projects grid
2. Implement JavaScript filtering logic
3. Add smooth transitions between filtered states

### Adding Dark/Light Theme Toggle
1. Create a theme toggle button
2. Add CSS variables for both themes
3. Implement JavaScript to switch themes
4. Store preference in localStorage

### Adding a Resume Download
1. Add a download button in the about section
2. Host your resume PDF file
3. Link to the file with proper download attribute

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working**:
   - Check if GSAP is loaded properly
   - Verify ScrollTrigger plugin is registered
   - Check browser console for errors

2. **Mobile menu not working**:
   - Ensure JavaScript is enabled
   - Check for conflicting CSS
   - Verify element IDs match

3. **Images not loading**:
   - Check image file paths
   - Ensure images are in the correct directory
   - Verify image file names match exactly

4. **Form not submitting**:
   - Check browser console for JavaScript errors
   - Verify form validation is working
   - Ensure all required fields are filled

### Performance Optimization

1. **Image Optimization**:
   - Compress images using tools like TinyPNG
   - Use WebP format when possible
   - Implement lazy loading for images

2. **Code Optimization**:
   - Minify CSS and JavaScript for production
   - Remove unused CSS classes
   - Optimize animation performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub or contact me directly.

---

**Happy coding! 🚀**
