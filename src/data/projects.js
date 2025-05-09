export const projects = [
  {
    id: 1,
    title: "Watt Wise Utility App",
    image:
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799447/wattwise01_sudcdv.png",
    images: [
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799448/wattwise05_cqojka.png",
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799448/wattwise04_oldbbh.png",
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799447/wattwise03_d5m01m.png",
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799447/wattwise02_gbmrfk.png",
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799448/wattwise06_snb5w6.png",
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799447/wattwise01_sudcdv.png",
    ],
    description:
      "Salesforce-native energy management platform with LWC dashboards, automated billing, and self-service customer tools.",
    tech: ["Salesforce", "Apex", "JavaScript", "LWC", "HTML", "CSS"],
    long_description:
      "Watt Wise is a comprehensive utility management platform built within the Salesforce ecosystem. Our project replicates the functionality of the Salesforce Energy and Utilities Cloud without incurring additional costs, providing essential tools to manage customer accounts, utility usage, billing, and service requests. As part of the Meter Data Management Services Team, I developed custom components using Apex, JavaScript, and CSS to display aggregated utility data in a client-side portal, enhancing account managers' ability to oversee customer utility usage. I implemented custom metadata types for accurate invoicing, configured Salesforce Org with custom objects, and integrated components for seamless functionality. The platform features a customer portal for self-service with real-time billing updates, seamless service transfers, and robust customer support. Internal users enjoy streamlined account management, detailed usage tracking, and efficient service scheduling. I participated in Agile sprints using DevOps Center and Jira for project management.",
    demoLink: "https://awcomputing-4e9.my.salesforce.com/",
    repoLink: "https://github.com/skillstorm-congo/20240422-Sf-AFS-Project3",
    footer: "SkillStorm Capstone Project, 2024",
  },
  {
    id: 2,
    title: "Open Peaks V2 (MERN)",
    image:
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799445/openpeaksv201_p8mqrr.png",
    images: [
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799448/openpeaksv2demo_xcqftf.gif",
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799446/openpeaksv202_qst2zo.png",
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799446/openpeaksv203_ug3ukw.png",
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799450/openpeaksv204_xbiojn.png",
    ],
    description:
      "Personalized ski trip planner with auth, CRUD, dynamic APIs, and responsive design.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JavaScript", "CSS"],
    long_description:
      "Open Peaks Version 2 was my capstone project during the Full Stack Software Engineering program at Per Scholas. It's a MERN stack application designed for ski and snowboard enthusiasts to discover, compare, and curate their dream destinations worldwide. The app features user authentication and complete CRUD functionality, allowing users to effortlessly manage their preferred ski resort lists. With MongoDB, Express, React, and Node.js in my toolbox, I facilitated seamless data flow between the back-end and front-end. I implemented Material UI and Pico.css for responsive design that works on any device. Working on user authentication was challenging but rewarding, ensuring data moved flawlessly between different parts while maintaining security. The project consists of two interconnected applications that seamlessly communicate with each other, with the backend deployed on Render and the frontend on both Render and Netlify. This project showcases my full-stack development skills, user authentication implementation, and responsive design capabilities.",
    demoLink: "https://openpeaks.onrender.com/",
    repoLink: "https://github.com/m-soro/Project_3",
    footer: "Per Scholas Capstone Project, 2023",
  },
  {
    id: 3,
    title: "Hotel Availability Scraper",
    image:
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799446/mostay01demo_fd3jds.gif",
    images: [
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799445/mostay02_eh4fdu.png",
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799446/mostay01demo_fd3jds.gif",
    ],
    description:
      "Python + Flask app that visualizes discount availability for Mandarin Oriental employees.",
    tech: ["Python", "Flask", "Web Scraping", "HTML", "CSS"],
    long_description:
      "During my time working at hotels, I created this tool to efficiently monitor and manage discounted hotel availabilities. One of the coolest perks was scoring fantastic discounts at various properties, but figuring out which hotels had available rooms was a real challenge. The Hotel Availability Scraper returns an insightful three-month availability status for each selected property, making vacation planning a breeze. Created in Python, this tool employs the Pillow library to capture and manipulate screenshots. I extended the project by creating a user-friendly front-end using Flask, enhancing accessibility and adding sophistication to the experience. The initial version was a terminal tool to help me plan potential hotel hops, while version 2 featured a sleek front-end deployed on Heroku. This project specifically catered to the Mandarin Oriental Website, though access to discount codes is no longer available as I'm not an employee anymore.",
    demoLink: "https://m-soro.github.io/mostay/",
    repoLink: "https://github.com/m-soro/mostay",
    footer: "Personal Project, 2022",
  },
  {
    id: 4,
    title: "Pong! Arcade Game",
    image:
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799446/pong01_llbtlf.png",
    images: [
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799446/pong02_zkme4o.gif",
      "https://res.cloudinary.com/dmozohlzf/image/upload/v1746799446/pong03_iyclvw.png",
    ],
    description:
      "Classic arcade-style game built with vanilla JavaScript, featuring multiple difficulty levels and interactive controls.",
    tech: ["JavaScript", "HTML", "CSS"],
    long_description:
      "Pong! was my very first project at Per Scholas, where I created an old school arcade style game using JavaScript, HTML, and CSS. This classic collision-based game allows players to control the paddle to hit the ball back and forth, featuring multiple levels of difficulty, dynamic elements, sound effects, and interactive controls. Players can use either keyboard or mouse to control the paddle. I kept the design minimal and clean to focus on gameplay rather than excessive visuals. To enhance user engagement, I included motivational messages like 'Keep it up!' when players hit every 20 points, and added a special chime that plays when the score reaches 100 points. Though I initially aimed to build the game following object-oriented principles, I adapted my approach when that proved challenging. This project demonstrates my ability to create interactive web applications and implement game mechanics using fundamental web technologies.",
    demoLink: "https://m-soro.github.io/Project_1/",
    repoLink: "https://github.com/m-soro/Project_1",
    footer: "Per Scholas Project, 2023",
  },
];
