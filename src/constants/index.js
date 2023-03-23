import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI/ML Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Staging Coordinator",
      company_name: "CISSDM",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2019 - Jan 2021",
      points: [
        "Configure and prepare hardware for client use. Primary focus in network Firewalls, Switches, and Access Points",
        "Responsible for the remote deployment of networking hardware to client sites. Sites varied from retail stores, restaurants, banks, offices, and warehouses.",
        "Experienced with configuring and deploying networking equipment from the following vendors: Cisco, Cisco Meraki, Viptela, Fortinet, Aruba, Velocloud, Palo Alto, Juniper, Cradlepoint, Digi",
        "Utilized GUI/CLI for local configurations or web managed portal depending on the vendor/product.",
        "Implemented Change Management practices to ensure visibility and client authorization on all change requests.",
      ],
    },
    {
      title: "Tier 1 Network Support",
      company_name: "CISSDM",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "October 2018 - July 2019",
      points: [
        "Serve as escalation point for Technical Services to diagnose and resolve complex customer issues where no clear path to resolution is present; facilitate escalation to higher level if necessary",
        "Manage Enterprise Managed Security Services and Move, Add, Change, Delete requests.",
        "Configure, troubleshoot, and maintain host and remote network routers, implement changes in rules sets, configurations, maintain, and manage backups of router configurations.",
        "Outage response in real-time, assess and make recommendations for resolution and repair of remote or host site failures. Contribute to establishing disciplined, defined processes to deal with unplanned site outages.",
      ],

    },
    {
      title: "Associate Technician",
      company_name: "The Dream Junction",
      icon: shopify,
      iconBg: "#383E56",
      date: "November 2017 - September 2018",
      points: [
        "Diagnosis and repair of DTG Inkjet printers.",
        "Preventative maintenance of electronic wiring and mechanical systems.",
        "Responsible for daily upkeep of machinery and ensuring maximum uptime.",
        "Worked with prototype machinery from the alpha stage to full production. Many issues had no documentation and had to be troubleshot on the fly.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Stock Analysis AI/ML Project",
      description:
      "Developed a machine learning application using a LSTM (Long Short-Term Memory) model to analyze time-series stock data and predict future stock prices. Built a Flask web application that enables users to input stock choices and receive recommendations on whether to buy or sell. Hosted on Heroku for easy accessibility. Integrated Python libraries, including Matplotlib, Keras, Tensorflow and NumPy, for data visualization and insights.",
      tags: [
        {
          name: "AI/ML",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Appointment Scheduling Application",
      description:
        "Developed an application that streamlines the creation and updating of student appointment times with school counselors. The application features log-in forms, text and error control message translation based on computer language settings, and time conversions from local time, main office, and UTC. CRUD capabilities were enabled from the GUI interface to the MySql database, and input validation and logical error checks were implemented to prevent appointments outside of business hours, overlapping appointments, and incorrect log in credentials. The application was built using Java JDK and JavaFX with MySQL Workbench.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  
  ];
  
  export { services, technologies, experiences, testimonials, projects };