# **App Name**: PortfolioFlow

## Core Features:

- Home Section: Display a welcoming introduction with animated text and personal information, with smooth scrolling navigation.
- About Section: Showcase a brief bio, education details, and skills with visual representations such as progress bars or icons.
- Project Listings: Display a list of recent projects, including images, descriptions, GitHub links, and live demo links; data loaded from Firestore.
- Contact Form: Enable users to send messages, storing their information (name, email, message, timestamp) in Firestore and displaying a success message upon submission.
- Social Media Footer: Provide links to social media profiles (GitHub, LinkedIn, Email) in the footer for easy access.
- Data Fetching: Use a loading animation to provide user feedback when fetching data from Firestore.
- Dark Mode Toggle: A toggle to switch between light and dark themes, providing a better user experience based on preference.

## Style Guidelines:

- Primary color: Deep purple (#6246EA) to convey creativity and sophistication.
- Background color: Light gray (#F0F0F0), nearly the same hue as purple but desaturated to 20% for a clean backdrop.
- Accent color: Blue-violet (#8E69F7) for interactive elements and highlights, analogous to the primary but brighter and more saturated.
- Headline font: 'Space Grotesk' (sans-serif) for a modern, tech-forward feel. Body font: 'Inter' (sans-serif) for readability and a clean aesthetic.
- Note: currently only Google Fonts are supported.
- Use a set of consistent and professional icons to represent skills and project categories.
- Maintain a clean, well-spaced layout with clear sections to ensure easy navigation and readability.
- Incorporate smooth, subtle animations for scrolling and transitions to enhance the user experience without being distracting; use Framer Motion.