# 3D Custom T-Shirt Configurator

Create your own stunning custom t-shirts in 3D with an interactive, real-time preview.

**Live Demo:** [teevision.netlify.app](https://teevision.netlify.app)

## Overview

This project is a 3D product configurator built to learn Three.js and React Three Fiber. It allows users to design custom t-shirts by adjusting colors, uploading logos, and applying AI-generated textures—all with instant 3D visualization.

Built following the [JS Mastery 3D Product Configurator course](https://www.jsmastery.pro/).

## Features

- 🎨 **Real-time 3D Rendering** – Interactive t-shirt model with Three.js
- 🎯 **Customization Options** – Change shirt color and add custom designs
- 🤖 **AI-Powered Textures** – Generate patterns and designs using DALLE AI
- 📱 **Responsive Design** – Optimized for desktop and mobile viewing
- ⚡ **Fast & Smooth** – Built with React and React Three Fiber for performance

## Tech Stack

- **Frontend Framework:** React
- **3D Graphics:** Three.js & React Three Fiber
- **Styling:** TailwindCSS
- **AI Integration:** DALLE API
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aidenkopec/project-3d-clothing-website.git
   cd project-3d-clothing-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Add your DALLE API key and other required credentials.

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/       # React components
├── pages/           # Page components
├── models/          # 3D models and assets
├── utils/           # Utility functions
└── styles/          # TailwindCSS styles
```

## Usage

1. Open the application
2. Customize your t-shirt:
   - Click to change the shirt color
   - Upload a logo or design
   - Generate AI patterns with DALLE
3. View the 3D preview in real-time
4. Download or share your design

## Learning Journey

This project was built as a hands-on learning experience for:
- Three.js fundamentals and 3D rendering
- React Three Fiber for React-based 3D graphics
- State management for complex UI interactions
- AI integration with DALLE API
- Responsive design with TailwindCSS

## API Integration

The project integrates with the DALLE API for generating custom textures. Ensure you have:
- Valid DALLE API credentials
- Proper rate limiting in place
- Environment variables configured

## Deployment

This project is deployed on Netlify. To deploy your own version:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set environment variables in Netlify dashboard
4. Deploy

## Future Improvements

- [ ] Additional 3D model variations (hoodies, jackets, etc.)
- [ ] Save and share design collections
- [ ] User authentication and design history
- [ ] Mobile app version
- [ ] Print on-demand integration

## Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [TailwindCSS](https://tailwindcss.com/)
- [DALLE API](https://platform.openai.com/docs/guides/images)

## License

This project is open source and available under the MIT License.

## Author

- [Aidenkopec](https://github.com/Aidenkopec)

---

**Note:** This is an educational project built while learning Three.js and React Three Fiber. It showcases the fundamentals of 3D web development and AI integration.
