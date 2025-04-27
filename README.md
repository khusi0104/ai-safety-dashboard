
# AI Safety Incident Dashboard

Welcome to the **AI Safety Incident Dashboard**! 🚀 This web-based dashboard helps you monitor and manage AI safety incidents in real-time. Whether you're tracking incidents, reporting new ones, or managing the dashboard settings, this project provides all the necessary tools.

## Key Features 🌟
- **Incident Display**: View a list of AI safety incidents, including titles, severity, and reported dates.
- **Filter by Severity**: Filter incidents based on severity ("All", "Low", "Medium", "High").
- **Sort by Date**: Sort incidents by the reported date (Newest First, Oldest First).
- **Expand for Details**: Toggle between viewing or hiding a full description of each incident.
- **Report New Incidents**: Easily report new incidents by filling out a simple form with a Title, Description, and Severity.
- **Dark and Light Themes**: Toggle between dark and light mode for optimal readability.
- **Responsive Design**: The dashboard is designed to work smoothly on all screen sizes, ensuring accessibility for every user.

## Technologies Used 💻
This project is built using modern web technologies:
- **React**: JavaScript library for building dynamic user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better development experience.
- **Tailwind CSS**: Utility-first CSS framework for quick styling.
- **PostCSS**: Tool to transform CSS with JavaScript plugins.
- **React Toastify**: For displaying toast notifications.

## Installation & Setup 🚀
Follow these simple steps to get this project up and running locally on your machine:

### 1. Clone the Repository
First, clone the repository by running:
```
git clone https://github.com/khusi0104/a-safety-dashboard.git
cd a-safety-dashboard
```

### 2. Install Dependencies
To install all required dependencies, run:
```
npm install
```
This will install everything you need, including React, TypeScript, and other essential libraries.

### 3. Set up Tailwind CSS and PostCSS

#### 3.1 Install Tailwind CSS, PostCSS, and Autoprefixer
In your project directory, run:
```
npm install -D tailwindcss postcss autoprefixer
```

#### 3.2 Initialize Tailwind CSS
Initialize Tailwind by running:
```
npx tailwindcss init
```
This will generate the `tailwind.config.js` file in your project.

#### 3.3 Configure PostCSS
Create a `postcss.config.js` file in the root directory with the following content:
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### 3.4 Create Tailwind CSS File
Create a new file `src/styles/index.css` and add the following:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 3.5 Add Tailwind to Your Build
In your `src/index.tsx` or `src/App.tsx` file, import the Tailwind CSS:
```
import './styles/index.css';
```

### 4. Implement Light/Dark Mode 🌑🌞

#### 4.1 Enable Dark Mode in Tailwind CSS
In your `tailwind.config.js`, enable dark mode:
```
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      // Custom theme configurations if necessary
    },
  },
};
```

#### 4.2 Add Theme Toggle Functionality
In your `App.tsx` (or the main component), implement a toggle for switching themes:
```
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
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
```

#### 4.3 Tailwind CSS Dark Mode Classes
To apply different styles for light and dark themes, use the dark class. For example:
```
<div className="bg-white dark:bg-gray-800 text-black dark:text-white">
  {/* Your component content */}
</div>
```

### 5. Run the Development Server
After installing the dependencies and setting up Tailwind CSS, run the development server with:
```
npm run dev
```
This will start the Vite development server, and you can view the dashboard in your browser at [http://localhost:3000](http://localhost:3000).

### 6. Build the Project (Optional)
To build the project for production, run:
```
npm run build
```
This will generate a production-ready version of your application in the `dist` directory.

## Folder Structure 📁
Here’s an overview of the project structure:
```
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
```

## Contributing 🤝
Feel free to fork this project and submit pull requests with improvements or fixes. If you have any questions or encounter any issues, please open an issue on the GitHub repository.

## License 📜
This project is open-source and available under the MIT License.

## Notes 📝
If you're unfamiliar with any of the tools or technologies used, you can refer to their official documentation for further guidance:
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PostCSS Documentation](https://postcss.org/)

Good luck, and feel free to make any changes or improvements to the project as you see fit!

