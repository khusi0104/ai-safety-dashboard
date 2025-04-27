#AI Safety Incident Dashboard
This is a web-based AI Safety Incident Dashboard designed to help monitor and manage AI safety incidents in real-time. The dashboard allows users to view, filter, sort, and report new incidents related to AI safety.

##Features
Display a list of AI safety incidents, including the title, severity, and reported date.

-Filter incidents by severity ("All", "Low", "Medium", "High").
-Sort incidents by reported date (Newest First, Oldest First).
-Toggle the visibility of a full description for each incident.Report new incidents -by filling out a form (Title, Description, Severity).
-Dark and Light Themes: Toggle between dark and light modes for better readability.
-Responsive layout for different screen sizes.

##Technologies Used
-React: JavaScript library for building user interfaces.
-TypeScript: Superset of JavaScript to add static typing.
-Tailwind CSS: Utility-first CSS framework.
-PostCSS: Tool to transform CSS with JavaScript plugins.
-React Toastify: For displaying toast notifications.

##Setup and Installation
Follow these steps to set up the project locally.

1. Clone the repository
git clone https://github.com/khusi0104/a-safety-dashboard.git
cd a-safety-dashboard

2. Install dependencies
Install the required dependencies by running:
npm install
This will install the necessary packages, including React, TypeScript, and other libraries.

3. Set up Tailwind CSS and PostCSS
To use Tailwind CSS and PostCSS, follow these steps:

3.1 Install Tailwind CSS, PostCSS, and Autoprefixer
In your project directory, run:
npm install -D tailwindcss postcss autoprefixer

3.2 Initialize Tailwind CSS
Next, initialize Tailwind CSS by running:
npx tailwindcss init
This will create a tailwind.config.js file in your project.

3.3 Configure PostCSS
Create a postcss.config.js file in the root of your project with the following content:
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

3.4 Create the Tailwind CSS file
In the src/styles directory, create a new file named index.css and add the following content:
/* src/styles/index.css */

/* Import Tailwind's base, components, and utilities */
@tailwind base;
@tailwind components;
@tailwind utilities;

3.5 Add Tailwind CSS to your build
In your src/index.tsx or src/App.tsx file (wherever you import your global styles), add the following:
import './styles/index.css'; // or the path to your Tailwind CSS file

4. Light/Dark Theme Implementation
To enable light and dark themes, add the following steps:

4.1 Enable Dark Mode in Tailwind CSS
In the tailwind.config.js file, configure the dark mode:
module.exports = {
  darkMode: 'class', // Enables dark mode via a class
  theme: {
    extend: {
      // Custom theme configurations (if needed)
    },
  },
  plugins: [],
};

4.2 Add Theme Toggle Functionality
In your App.tsx or wherever your main component is, implement the theme toggle functionality. For example:
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <div className="App">
      <button onClick={toggleTheme}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      {/* Rest of your app content */}
    </div>
  );
}

export default App;

4.3 Tailwind CSS Dark Mode Classes
To apply different styles for light and dark themes, use the dark class. For example:
<div className="bg-white dark:bg-gray-800 text-black dark:text-white">
  {/* Your component content */}
</div>
This ensures that the background and text color change based on the theme.

5. Run the Development Server
After the dependencies are installed and Tailwind CSS is set up, run the development server:
npm run dev
This will start the Vite development server, and you can view the dashboard in your browser at http://localhost:3000.

6. Build the Project (Optional)
To build the project for production, run:
npm run build
This will generate a production-ready version of your application in the dist directory.

##Folder Structure
Here's an overview of the project structure:
/project
  /node_modules                # Node.js dependencies
  /src
    /components                # React components
    /styles
      index.css                # Tailwind CSS entry file
  tailwind.config.js           # Tailwind CSS configuration
  postcss.config.js            # PostCSS configuration
  package.json                 # Project dependencies and scripts
  tsconfig.json                # TypeScript configuration

##Contributing:
Feel free to fork this project and submit pull requests with improvements or fixes. If you have any questions or encounter any issues, please open an issue on the GitHub repository.

##License
This project is open-source and available under the MIT License.

##Notes
If you're unfamiliar with any of the tools or technologies used, you can refer to their official documentation for further guidance:

-React Documentation
-Tailwind CSS Documentation
-PostCSS Documentation

Good luck, and feel free to make any changes or improvements to the project as you see fit!
