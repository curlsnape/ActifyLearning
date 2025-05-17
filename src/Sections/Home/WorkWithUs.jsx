import React from "react";

import { Link } from "react-router-dom";

const WorkWithUs = () => {
  const JobsData = [
    {
      id: 1,
      jd_url: null,
      salary: "0",
      currentdate: "15/05/2024",
      response: 13,
      postedDate: "15/05/2024",
      ageing: null,
      company_id: 1,
      third_party: "",
      employmentType: [
        {
          id: 1,
          etype: "Full Time / Part Time",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      industry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      functionalArea: [
        {
          id: 1,
          company_id: 1,
          currentdate: null,
          currenttime: null,
          farea: "-",
        },
      ],
      educationalQualification: [
        {
          id: 1,
          qualification:
            "Minimum qualification – Graduation in streams like IT, Computer science  or another associated field",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      workMode: [
        {
          id: 1,
          workmode: "In office",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      employer_id: [
        {
          id: 1,
          first_name: "Sanjay",
          last_name: "Shetty",
          email_id: "sanjay.shetty@dextero.in",
          phoneNumber: "9987408100",
          company_id: 1,
          authority_id: 3,
          status: true,
          currentdate: null,
          currenttime: null,
          password: "admin",
        },
      ],
      designation: [
        {
          id: 1,
          post: "Intern / Front end developer",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      keySkills:
        "- Familiarity with server-side CSS pre-processing platforms (e.g., SASS, LESS)\r\n- Experience with testing frameworks.\r\n- Experience with responsive and mobile design.",
      numberofVacancies: "2",
      companyName: "Actify",
      companyDetails:
        "3rd Floor, Guruprerana, Opp. Jagdish Book Depot, Above Choice Interiors, Naik Wadi, Near Thane Station, Thane (W) 400602.\r\n",
      responsibilities:
        "- Develop and maintain responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.\r\n- Proficient in front-end frameworks and libraries such as React, Angular, or Vue.js.\r\n- Stay updated on industry trends and incorporate best practices into development processes.\r\n- Participate in code reviews and provide constructive feedback. \r\n- Conduct thorough testing of web applications to ensure functionality and troubleshoot issues.\r\n- Create and maintain technical documentation for code, APIs, and processes.\r\n- Ensure that the web applications are responsive and provide a consistent experience across various devices and screen sizes.",
      desiredCandidateProfile:
        "- Experience - Fresher to 6 months\r\n- Strong proficiency in HTML, CSS, JavaScript, and front-end frameworks.\r\n- Understanding of UX principles\r\n- Strong problem-solving skills and attention to detail.\r\n- Excellent communication and collaboration skills.\r\n\r\nPreferred skills:-\r\n- Familiarity with server-side CSS pre-processing platforms (e.g., SASS, LESS)\r\n- Experience with testing frameworks.\r\n- Experience with responsive and mobile design.",
      jobDescription: "FrontEnd Developer.pdf",
      minWorkExperience: "0",
      maxWorkExperience: "6",
      preferredIndustry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      referenceCode: "-",
      location: [
        {
          id: 4,
          location: "Thane",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      role: [
        {
          id: 14,
          roles: "Marketing",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
    },
    {
      id: 2,
      jd_url: null,
      salary: "0",
      currentdate: "15/05/2024",
      response: 5,
      postedDate: "15/05/2024",
      ageing: null,
      company_id: 1,
      third_party: "",
      employmentType: [
        {
          id: 1,
          etype: "Full Time / Part Time",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      industry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      functionalArea: [
        {
          id: 1,
          company_id: 1,
          currentdate: null,
          currenttime: null,
          farea: "-",
        },
      ],
      educationalQualification: [
        {
          id: 1,
          qualification:
            "Minimum qualification – Graduation in streams like IT, Computer science  or another associated field",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      workMode: [
        {
          id: 1,
          workmode: "In office",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      employer_id: [
        {
          id: 1,
          first_name: "Sanjay",
          last_name: "Shetty",
          email_id: "sanjay.shetty@dextero.in",
          phoneNumber: "9987408100",
          company_id: 1,
          authority_id: 3,
          status: true,
          currentdate: null,
          currenttime: null,
          password: "admin",
        },
      ],
      designation: [
        {
          id: 2,
          post: "Intern / DevOps Engineer",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      keySkills:
        "Strong experience with CI/CD tools such as Jenkins, GitLab CI, or Travis CI.\r\nProficient in scripting and coding for automation (e.g., Python, Bash).\r\nStrong experience with Deployment tools such as Nginx, Tomcat & Apache.\r\nProficient in scripting and coding for automation (e.g., Python, Bash).",
      numberofVacancies: "2",
      companyName: "Actify",
      companyDetails:
        "3rd Floor, Guruprerana, Opp. Jagdish Book Depot, Above Choice Interiors, Naik Wadi, Near Thane Station, Thane (W) 400602.\r\n",
      responsibilities:
        "- Design, implement, and maintain CI/CD pipelines to automate the build, test, and deployment processes.\r\n- Implement and manage infrastructure as code using tools like Terraform, Ansible, or CloudFormation.\r\n- Automate repetitive tasks and processes to improve efficiency and reduce manual intervention.\r\n- Manage and optimize cloud infrastructure on platforms such as AWS, Azure, or Google Cloud.\r\n- Implement and manage security controls and compliance measures.\r\n- Ensure the performance, scalability, and security of the cloud-based production system\r\n- Automate, deploy, handle, and maintain cloud-based production systems\r\n- Basic navigation and operations in Linux (Ubuntu)\r\n- Manage the deployments of the release of production systems\r\n- Troubleshoot systems and provide problem resolution for different applications and platforms (Such as Nginx, Tomcat & Apache)\r\n- Define and deploy systems for metrics and monitoring on the AWS/Azure platform\r\n- Configure and install different software like Jenkins, Git, Terraform, Ansible, Docker, Kubernetes.\r\n- Maintain the existing architecture & server setup.",
      desiredCandidateProfile:
        "- Experience - Fresher to 6 months\r\n- Excellent communication and collaboration skills.\r\n- Strong problem-solving skills and the ability to troubleshoot complex issues.\r\n- Awareness of DevOps principles.\r\n- Quick Adaptation to new tools and technology.\r\n- Emphasising collaboration and communication between development and operations teams.\r\n\r\n\r\nPreferred skills:-\r\n- Strong experience with CI/CD tools such as Jenkins, GitLab CI, or Travis CI.\r\n- Proficient in scripting and coding for automation (e.g., Python, Bash).\r\n- Familiarity with cloud platforms (AWS, Azure, Google Cloud) and containerization technologies (Docker, Kubernetes).\r\n- Relevant certifications (e.g., AWS Certified DevOps Engineer, Kubernetes Certified Administrator) are a plus.\r\n- Strong experience with Deployment tools such as Nginx, Tomcat & Apache.\r\n- Proficient in scripting and coding for automation (e.g., Python, Bash)\r\n- Familiarity with cloud platforms (AWS & Azure) and containerization technologies (Docker, Kubernetes)\r\n- Familiarity with CI/CD tools like Jenkins\r\n- Relevant certifications (e.g., AWS Certified DevOps Engineer, Kubernetes Certified Administrator) are a plus.",
      jobDescription: "Intern DevOps Engineer.pdf",
      minWorkExperience: "0",
      maxWorkExperience: "6",
      preferredIndustry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      referenceCode: "-",
      location: [
        {
          id: 4,
          location: "Thane",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      role: [
        {
          id: 2,
          roles: "DevOps",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
    },
    {
      id: 3,
      jd_url: null,
      salary: "0",
      currentdate: "15/05/2024",
      response: 29,
      postedDate: "15/05/2024",
      ageing: null,
      company_id: 1,
      third_party: "",
      employmentType: [
        {
          id: 1,
          etype: "Full Time / Part Time",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      industry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      functionalArea: [
        {
          id: 1,
          company_id: 1,
          currentdate: null,
          currenttime: null,
          farea: "-",
        },
      ],
      educationalQualification: [
        {
          id: 1,
          qualification:
            "Minimum qualification – Graduation in streams like IT, Computer science  or another associated field",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      workMode: [
        {
          id: 1,
          workmode: "In office",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      employer_id: [
        {
          id: 1,
          first_name: "Sanjay",
          last_name: "Shetty",
          email_id: "sanjay.shetty@dextero.in",
          phoneNumber: "9987408100",
          company_id: 1,
          authority_id: 3,
          status: true,
          currentdate: null,
          currenttime: null,
          password: "admin",
        },
      ],
      designation: [
        {
          id: 3,
          post: "Intern / Data Analyst ",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      keySkills:
        "- Proficiency in programming languages such as Python, R\r\n- Solid understanding of machine learning concepts and algorithms.",
      numberofVacancies: "2",
      companyName: "Actify",
      companyDetails:
        "3rd Floor, Guruprerana, Opp. Jagdish Book Depot, Above Choice Interiors, Naik Wadi, Near Thane Station, Thane (W) 400602.",
      responsibilities:
        "- Explore and analyse large datasets to extract valuable insights and patterns.\r\n- Develop statistical models to understand and interpret complex data.\r\n- Design and implement machine learning algorithms for predictive modelling and classification tasks.\r\n- Work with diverse data sources and formats to extract meaningful information.\r\n- Extracting and processing data in specific format as per requirements.",
      desiredCandidateProfile:
        "- Experience - Fresher to 6 months\r\n- Proficiency in programming languages such as Python, R\r\n- Solid understanding of machine learning concepts and algorithms.\r\n- Knowledge of relational databases (e.g., MySQL, PostgreSQL) and SQL.\r\n- Ability to create clear and compelling data visualisations.\r\n- Strong analytical and problem-solving skills.\r\n- Ability to approach challenges with a creative mindset.",
      jobDescription: "Intern Data Analyst.pdf",
      minWorkExperience: "0",
      maxWorkExperience: "6",
      preferredIndustry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      referenceCode: "-",
      location: [
        {
          id: 4,
          location: "Thane",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      role: [
        {
          id: 3,
          roles: "Data Science",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
    },
    {
      id: 4,
      jd_url: null,
      salary: "0",
      currentdate: "15/05/2024",
      response: 39,
      postedDate: "15/05/2024",
      ageing: null,
      company_id: 1,
      third_party: "",
      employmentType: [
        {
          id: 1,
          etype: "Full Time / Part Time",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      industry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      functionalArea: [
        {
          id: 1,
          company_id: 1,
          currentdate: null,
          currenttime: null,
          farea: "-",
        },
      ],
      educationalQualification: [
        {
          id: 1,
          qualification:
            "Minimum qualification – Graduation in streams like IT, Computer science  or another associated field",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      workMode: [
        {
          id: 1,
          workmode: "In office",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      employer_id: [
        {
          id: 1,
          first_name: "Sanjay",
          last_name: "Shetty",
          email_id: "sanjay.shetty@dextero.in",
          phoneNumber: "9987408100",
          company_id: 1,
          authority_id: 3,
          status: true,
          currentdate: null,
          currenttime: null,
          password: "admin",
        },
      ],
      designation: [
        {
          id: 4,
          post: "Intern / Python Django Developer",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      keySkills:
        "- Proficiency in Python and Django.\r\n- Familiarity with other languages such as JavaScript, Java, or C++ is a plus.\r\n- Experience with Python web frameworks, such as Django or Flask.",
      numberofVacancies: "2",
      companyName: "Actify",
      companyDetails:
        "3rd Floor, Guruprerana, Opp. Jagdish Book Depot, Above Choice Interiors, Naik Wadi, Near Thane Station, Thane (W) 400602.",
      responsibilities:
        "- Design, develop, test, and maintain Python applications.\r\n- Write efficient, reusable, and modular code.\r\n- Build web applications using Python web frameworks (e.g., Django, Flask)\r\n- Integrate Python applications with relational databases. \r\n- Participate in code reviews and provide constructive feedback.\r\n- Create and maintain technical documentation for software components and systems.\r\n- Stay updated on emerging trends and best practices in Python development.",
      desiredCandidateProfile:
        "- Experience - Fresher to 6 months\r\n- Proficiency in Python and Django.\r\n- Familiarity with other languages such as JavaScript, Java, or C++ is a plus.\r\n- Experience with Python web frameworks, such as Django or Flask.\r\n- Ability to design and optimize database schemas.\r\n- Understanding of front-end technologies (HTML, CSS, JavaScript).\r\n- Strong problem-solving skills and attention to detail.\r\n- Excellent verbal and written communication skills.",
      jobDescription: "Intern Python Django Developer.pdf",
      minWorkExperience: "0",
      maxWorkExperience: "6",
      preferredIndustry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      referenceCode: "-",
      location: [
        {
          id: 4,
          location: "Thane",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      role: [
        {
          id: 4,
          roles: "Python Django Developer ",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
    },
    {
      id: 5,
      jd_url: null,
      salary: "0",
      currentdate: "15/05/2024",
      response: 7,
      postedDate: "15/05/2024",
      ageing: null,
      company_id: 1,
      third_party: "",
      employmentType: [
        {
          id: 1,
          etype: "Full Time / Part Time",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      industry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      functionalArea: [
        {
          id: 1,
          company_id: 1,
          currentdate: null,
          currenttime: null,
          farea: "-",
        },
      ],
      educationalQualification: [
        {
          id: 1,
          qualification:
            "Minimum qualification – Graduation in streams like IT, Computer science  or another associated field",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      workMode: [
        {
          id: 1,
          workmode: "In office",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      employer_id: [
        {
          id: 1,
          first_name: "Sanjay",
          last_name: "Shetty",
          email_id: "sanjay.shetty@dextero.in",
          phoneNumber: "9987408100",
          company_id: 1,
          authority_id: 3,
          status: true,
          currentdate: null,
          currenttime: null,
          password: "admin",
        },
      ],
      designation: [
        {
          id: 5,
          post: "Intern / Mern Stack Developer ",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      keySkills:
        "- Proficiency in MongoDB, Express.js, React.js, and Node.js.\r\n- Strong experience with HTML, CSS, JavaScript, and front-end frameworks (React.js).\r\n- In-depth knowledge of server-side scripting and development using Node.js and Express.js.",
      numberofVacancies: "2",
      companyName: "Actify",
      companyDetails:
        "3rd Floor, Guruprerana, Opp. Jagdish Book Depot, Above Choice Interiors, Naik Wadi, Near Thane Station, Thane (W) 400602.",
      responsibilities:
        "- Design, develop, and maintain web applications using the MERN stack.\r\n- Work on both front-end and back-end components of the applications.\r\n- Integrate MongoDB into the back-end for data storage and retrieval.\r\n- Develop user interfaces using React.js.\r\n- Deploy applications to cloud platforms (e.g., AWS)\r\n- Stay updated on emerging trends and best practices in MERN stack development.\r\n- Continuously improve skills and share knowledge with the team.",
      desiredCandidateProfile:
        "- Experience - Fresher to 6 months\r\n- Proficiency in MongoDB, Express.js, React.js, and Node.js.\r\n- Strong experience with HTML, CSS, JavaScript, and front-end frameworks (React.js).\r\n- In-depth knowledge of server-side scripting and development using Node.js and Express.js.\r\n- Experience using Git for version control.\r\n- Experience deploying applications to cloud platforms.",
      jobDescription: "Intern Mern Stack Developer.pdf",
      minWorkExperience: "0",
      maxWorkExperience: "6",
      preferredIndustry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      referenceCode: "-",
      location: [
        {
          id: 4,
          location: "Thane",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      role: [
        {
          id: 5,
          roles: "Mern Stack Developer",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
    },
    {
      id: 6,
      jd_url: null,
      salary: "0",
      currentdate: "15/05/2024",
      response: 49,
      postedDate: "15/05/2024",
      ageing: null,
      company_id: 1,
      third_party: "",
      employmentType: [
        {
          id: 1,
          etype: "Full Time / Part Time",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      industry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      functionalArea: [
        {
          id: 1,
          company_id: 1,
          currentdate: null,
          currenttime: null,
          farea: "-",
        },
      ],
      educationalQualification: [
        {
          id: 1,
          qualification:
            "Minimum qualification – Graduation in streams like IT, Computer science  or another associated field",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      workMode: [
        {
          id: 1,
          workmode: "In office",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      employer_id: [
        {
          id: 1,
          first_name: "Sanjay",
          last_name: "Shetty",
          email_id: "sanjay.shetty@dextero.in",
          phoneNumber: "9987408100",
          company_id: 1,
          authority_id: 3,
          status: true,
          currentdate: null,
          currenttime: null,
          password: "admin",
        },
      ],
      designation: [
        {
          id: 6,
          post: "Intern / Java Developer ",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      keySkills:
        "- Experience with front-end technologies (HTML, CSS, JavaScript).\r\n- Knowledge of (Java, J2EE, Spring Boot,Servlet,JDBC,Mysql).",
      numberofVacancies: "2",
      companyName: "Actify",
      companyDetails:
        "3rd Floor, Guruprerana, Opp. Jagdish Book Depot, Above Choice Interiors, Naik Wadi, Near Thane Station, Thane (W) 400602.\r\n",
      responsibilities:
        "- Design, code, test, and debug Java applications.\r\n- Develop and maintain server-side components of web applications.\r\n- Design and implement database structures and interactions using SQL\r\n- Follow best practices for code quality, code reviews, and coding standards.",
      desiredCandidateProfile:
        "Experience - Fresher to 6 months\r\nProven experience as a Java Developer.\r\nStrong understanding of Java, its ecosystem, and object-oriented programming principles.\r\nExperience with the Spring Framework (Spring Boot, Spring MVC, etc.).",
      jobDescription: "Intern Java Developer.pdf",
      minWorkExperience: "0",
      maxWorkExperience: "6",
      preferredIndustry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      referenceCode: "-",
      location: [
        {
          id: 4,
          location: "Thane",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      role: [
        {
          id: 6,
          roles: "Java Developer",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
    },
    {
      id: 7,
      jd_url: null,
      salary: "0",
      currentdate: "15/05/2024",
      response: 3,
      postedDate: "15/05/2024",
      ageing: null,
      company_id: 1,
      third_party: "",
      employmentType: [
        {
          id: 1,
          etype: "Full Time / Part Time",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      industry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      functionalArea: [
        {
          id: 1,
          company_id: 1,
          currentdate: null,
          currenttime: null,
          farea: "-",
        },
      ],
      educationalQualification: [
        {
          id: 1,
          qualification:
            "Minimum qualification – Graduation in streams like IT, Computer science  or another associated field",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      workMode: [
        {
          id: 1,
          workmode: "In office",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      employer_id: [
        {
          id: 1,
          first_name: "Sanjay",
          last_name: "Shetty",
          email_id: "sanjay.shetty@dextero.in",
          phoneNumber: "9987408100",
          company_id: 1,
          authority_id: 3,
          status: true,
          currentdate: null,
          currenttime: null,
          password: "admin",
        },
      ],
      designation: [
        {
          id: 7,
          post: "Intern / Server Admin (Linux) ",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      keySkills:
        "Preferred skills:- 1) Familiarity with cloud platforms (AWS, Azure, Google Cloud).  2) Knowledge of containerization technologies (Docker).",
      numberofVacancies: "2",
      companyName: "Actify",
      companyDetails:
        "3rd Floor, Guruprerana, Opp. Jagdish Book Depot, Above Choice Interiors, Naik Wadi, Near Thane Station, Thane (W) 400602.\r\n",
      responsibilities:
        "- Monitor server performance and ensure system availability and reliability.\r\n- Perform regular security audits and implement security best practices.\r\n- Monitor user activity and ensure compliance with security policies.\r\n- Implement and manage backup and recovery strategies.\r\n- Create and maintain comprehensive documentation for server configurations, processes, and procedures.",
      desiredCandidateProfile:
        "- Experience - Fresher to 6 months\r\n- Proven experience as a Linux Server Administrator.\r\n- Strong proficiency in Linux server administration (installation, configuration, troubleshooting).\r\n- Knowledge of backup and recovery strategies.",
      jobDescription: "Server Admin(Linux).pdf",
      minWorkExperience: "0",
      maxWorkExperience: "6",
      preferredIndustry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      referenceCode: "-",
      location: [
        {
          id: 4,
          location: "Thane",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      role: [
        {
          id: 7,
          roles: "Server Admin (Linux)",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
    },
    {
      id: 8,
      jd_url: null,
      salary: "0",
      currentdate: "15/05/2024",
      response: 4,
      postedDate: "15/05/2024",
      ageing: null,
      company_id: 1,
      third_party: "",
      employmentType: [
        {
          id: 1,
          etype: "Full Time / Part Time",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      industry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      functionalArea: [
        {
          id: 1,
          company_id: 1,
          currentdate: null,
          currenttime: null,
          farea: "-",
        },
      ],
      educationalQualification: [
        {
          id: 1,
          qualification:
            "Minimum qualification – Graduation in streams like IT, Computer science  or another associated field",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      workMode: [
        {
          id: 1,
          workmode: "In office",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      employer_id: [
        {
          id: 1,
          first_name: "Sanjay",
          last_name: "Shetty",
          email_id: "sanjay.shetty@dextero.in",
          phoneNumber: "9987408100",
          company_id: 1,
          authority_id: 3,
          status: true,
          currentdate: null,
          currenttime: null,
          password: "admin",
        },
      ],
      designation: [
        {
          id: 1,
          post: "Intern / Front end developer",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      keySkills: "-",
      numberofVacancies: "0",
      companyName: "Actify",
      companyDetails:
        "3rd Floor, Guruprerana,\r\nOpp. Jagdish Book Depot,\r\nAbove Choice Interiors, Naik Wadi, Near Thane Station,\r\nThane (W) 400602",
      responsibilities: "-",
      desiredCandidateProfile: "-",
      jobDescription: "FrontEnd Developer.pdf",
      minWorkExperience: "0",
      maxWorkExperience: "6",
      preferredIndustry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      referenceCode: "-",
      location: [
        {
          id: 4,
          location: "Thane",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      role: [
        {
          id: 1,
          roles: "Front end",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
    },
    {
      id: 9,
      jd_url: null,
      salary: null,
      currentdate: "21-12-2023",
      response: 2,
      postedDate: "21-12-2023",
      ageing: null,
      company_id: 3,
      third_party: "Yes",
      employmentType: [
        {
          id: 13,
          etype: "Internship / Job ",
          company_id: 3,
          currentdate: null,
          currenttime: null,
        },
      ],
      industry: [
        {
          id: 5,
          industryname: "IT",
          company_id: 3,
          currentdate: null,
          currenttime: null,
        },
      ],
      functionalArea: [
        {
          id: 5,
          company_id: 3,
          currentdate: null,
          currenttime: null,
          farea: "-",
        },
      ],
      educationalQualification: [
        {
          id: 4,
          qualification: "Bsc IT, Msc, Bsc computer science ",
          company_id: 3,
          currentdate: null,
          currenttime: null,
        },
      ],
      workMode: [
        {
          id: 6,
          workmode: "Remote",
          company_id: 3,
          currentdate: null,
          currenttime: null,
        },
      ],
      employer_id: [
        {
          id: 1,
          first_name: "Sanjay",
          last_name: "Shetty",
          email_id: "sanjay.shetty@dextero.in",
          phoneNumber: "9987408100",
          company_id: 1,
          authority_id: 3,
          status: true,
          currentdate: null,
          currenttime: null,
          password: "admin",
        },
      ],
      designation: [
        {
          id: 9,
          post: "3D Developer ",
          company_id: 3,
          currentdate: null,
          currenttime: null,
        },
      ],
      keySkills:
        "Advanced knowledge in HTML, CSS, and JavaScript\r\nQuick learner\r\nProficient in Trigonometry",
      numberofVacancies: "10",
      companyName: "OrderStack",
      companyDetails:
        "We are a technology solutions startup founded in 2017. We started out as a chatbot service provider. Later we branched into bespoke software solutions. Today after two years of being in the business we have worked with over 50 clients. Our clients include top Indian pharmaceuticals and many small and large organizations just like us.",
      responsibilities:
        "Role:\r\nThe position entails developing interactive 3D web applications utilizing JavaScript and a range of web technologies. Responsibilities include integrating 3D graphics seamlessly with conventional web technologies, guaranteeing compatibility across various platforms, and enhancing performance. The role also requires effective collaboration with designers and back-end developers to produce engaging, user-centric web experiences. \r\n \r\nResponsibilities\r\n•\tCrafting engaging 3D web applications using JavaScript and related frameworks like Three.js.\r\n•\tSeamlessly integrating 3D models, animations, and textures with standard web technologies such as HTML, CSS, and JavaScript.\r\n•\tEnsuring that 3D applications function smoothly across different devices and browsers.\r\n•\tTweaking 3D graphics for optimal performance and speed, reducing load times, and improving the user experience.\r\n•\tWorking closely with UI/UX designers and back-end developers to align 3D elements with overall web design and server-side functionalities.",
      desiredCandidateProfile:
        "Advanced knowledge in HTML, CSS, and JavaScript\r\nQuick learner\r\nProficient in Trigonometry",
      jobDescription: "3D_developer_job_post_for_Actify_website.docx",
      minWorkExperience: "0",
      maxWorkExperience: "1",
      preferredIndustry: [
        {
          id: 5,
          industryname: "IT",
          company_id: 3,
          currentdate: null,
          currenttime: null,
        },
      ],
      referenceCode: "-",
      location: [
        {
          id: 4,
          location: "Thane",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      role: [
        {
          id: 8,
          roles: "3D Developer ",
          company_id: 3,
          currentdate: null,
          currenttime: null,
        },
      ],
    },
    {
      id: 10,
      jd_url: null,
      salary: "",
      currentdate: null,
      response: 4,
      postedDate: "06-03-2024",
      ageing: null,
      company_id: 1,
      third_party: "Yes",
      employmentType: [
        {
          id: 14,
          etype: "Full Time",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      industry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      functionalArea: [
        {
          id: 1,
          company_id: 1,
          currentdate: null,
          currenttime: null,
          farea: "-",
        },
      ],
      educationalQualification: [
        {
          id: 5,
          qualification:
            "Minimum qualification – Graduation (in streams like BCom, BSC IT, BSC CS, Commerce, BA etc) ",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      workMode: [
        {
          id: 1,
          workmode: "In office",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      employer_id: [],
      designation: [
        {
          id: 16,
          post: "Office Admin Intern",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      keySkills: "-",
      numberofVacancies: "2",
      companyName: "Actify",
      companyDetails:
        "Actify aims to guide individuals and businesses in taking control of their progress leveraging \r\nthe latest in Information Technology. \r\nThe company focuses on upgrading the skill sets of individuals with the right mix of concepts \r\nand practice on projects required by the industry and assist enterprises embrace digital \r\ntransformation.",
      responsibilities:
        " Must be able to establish and maintain relationship with collages and Training and \r\nPlacement Officers. \r\n• Reporting and filing organizational activities like meetings, client requirements etc.\r\n• Calling and interacting with student community\r\n• Handle incoming calls, emails and inquiries and directing them to the appropriate \r\npersonnel.\r\n• Coordinate and schedule meetings, interviews.\r\n• Assist in the onboarding process of new employees\r\n• Manage and organize documents and records\r\n• Maintain employee records and ensure it is in line with HR policies.",
      desiredCandidateProfile:
        "• Proven experience as an Office administrator or any related role.\r\n• Strong organizational knowledge\r\n• Average communication skills\r\n• Must be able to main organizational details and records.\r\n• Good knowledge and experience with MS Office (Word, Excel, Gmail, Outlook)",
      jobDescription: "JD - Office Admin_.pdf",
      minWorkExperience: "0",
      maxWorkExperience: "6",
      preferredIndustry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      referenceCode: "-",
      location: [
        {
          id: 4,
          location: "Thane",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      role: [
        {
          id: 10,
          roles: "Office Admin",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
    },
    {
      id: 11,
      jd_url: null,
      salary: "0",
      currentdate: "15/05/2024",
      response: 5,
      postedDate: "15/05/2024",
      ageing: null,
      company_id: 1,
      third_party: "",
      employmentType: [
        {
          id: 14,
          etype: "Full Time",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      industry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      functionalArea: [
        {
          id: 1,
          company_id: 1,
          currentdate: null,
          currenttime: null,
          farea: "-",
        },
      ],
      educationalQualification: [
        {
          id: 1,
          qualification:
            "Minimum qualification – Graduation in streams like IT, Computer science  or another associated field",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      workMode: [
        {
          id: 1,
          workmode: "In office",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      employer_id: [
        {
          id: 1,
          first_name: "Sanjay",
          last_name: "Shetty",
          email_id: "sanjay.shetty@dextero.in",
          phoneNumber: "9987408100",
          company_id: 1,
          authority_id: 3,
          status: true,
          currentdate: null,
          currenttime: null,
          password: "admin",
        },
      ],
      designation: [
        {
          id: 10,
          post: "HR Intern",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      keySkills: "-",
      numberofVacancies: "2",
      companyName: "Actify",
      companyDetails:
        "Actify aims to guide individuals and businesses in taking control of their progress leveraging \r\nthe latest in Information Technology. \r\nThe company focuses on upgrading the skill sets of individuals with the right mix of concepts \r\nand practice on projects required by the industry and assist enterprises embrace digital \r\ntransformation.",
      responsibilities:
        "• Must be able to handle end to end recruitment processes\r\n• Handle a team and as and when required provide training.\r\n• Needs to make job descriptions and do job postings\r\n• Screen, source candidates, schedule and conduct interviews \r\n• Get in touch with Hr heads to identify staffing and service requirements.\r\n• Facilitate smooth onboarding process of new employees\r\n• Carry out orientation to brief new employees about the company policies, processes, \r\ndecorum and job responsibilities.\r\n• Maintain a record of employee performance and assist in the performance appraisal \r\nprocesses and provide guidance for employees growth \r\n• Identify areas where training is required.\r\n• Ensure that the policies and procedures of the company align with the legal \r\nrequirements.\r\n• Stay up to date with the current HR laws and regulations and implement necessary \r\nand regular updates.\r\n• Conduct employee engagement programs.",
      desiredCandidateProfile:
        "• Proven experience as a HR or in any similar role.\r\n• Must have good knowledge of HR Policies, practices, employment law and \r\nregulations. \r\n• Excellent communication skills \r\n• Must have a keen eye in recognizing candidates suitable for the organization. \r\n• Must have experience in recruitment and talent acquisition \r\n• Must be able to build and maintain good employee relations and resolve conflicts \r\n• Must ensure smooth onboarding\r\n• Needs to provide detailed orientation to new employees.",
      jobDescription: "HR.pdf",
      minWorkExperience: "0",
      maxWorkExperience: "6",
      preferredIndustry: [
        {
          id: 1,
          industryname: "-",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      referenceCode: "-",
      location: [
        {
          id: 4,
          location: "Thane",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
      role: [
        {
          id: 9,
          roles: "HR Intern",
          company_id: 1,
          currentdate: null,
          currenttime: null,
        },
      ],
    },
  ];

  const JobCard = ({ job }) => {
    return (
      <article className="rounded-xl lg:w-[100%] w-[100%]  shadow-xl bg-white cursor-pointer relative text-black ">
        <div className="flex justify-end absolute right-0">
          <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-es-xl rounded-se-xl bg-blue-400 px-3 py-1.5 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>

            <span className="text-[10px] font-medium sm:text-xs">New</span>
          </strong>
        </div>
        <div className="flex items-start gap-4 p-3 sm:p-4 lg:p-5">
          {/* <a href="#" className="block shrink-0">
                <img
                  alt=""
                  src="https://static.wixstatic.com/media/babd9b_ba57d40fd60d4d3bbc5a606f6fea1666~mv2.png/v1/fill/w_209,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ac.png"
                  className="size-14 rounded-lg object-contain"
                />
              </a> */}

          <div>
            <h3 className="font-medium sm:text-xl mb-2">
              <a>{job.designation[0].post}</a>
            </h3>

            <p className="line-clamp-2 text-md text-gray-700">
              {job.responsibilities.substring(1)}
            </p>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <p className="sm:text-sm text-xs">{job.location[0].location}</p>
              </div>

              <span className=" block" aria-hidden="true">
                &middot;
              </span>

              <p className=" block lg:text-sm sm:text-sm text-xs  text-gray-500">
                Posted -{" "}
                <a className="font-medium hover:text-gray-700">
                  {job.postedDate}
                </a>
              </p>
            </div>
          <div className="flex justify-end opacity-0 pointer-events-none touch-none">
          <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-es-xl rounded-se-xl bg-blue-400 px-3 py-1.5 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>

            <span className="text-[10px] font-medium sm:text-xs">New</span>
          </strong>
        </div>
          </div>
        </div>

        
      </article>
    );
  };

  const JobCard2 = ({ job }) => {
    return (
      <article className="lg:w-[100%] w-[90vw] rounded-md sm:p-3 p-2 flex max-md:flex-col justify-between items-center shadow-xl bg-white cursor-pointer text-black ">
        <div className="w-full max-md:py-4">
          <p className="sm:text-2xl text-lg">{job.designation[0].post}</p>
          {/* <p className="line-clamp-2">

          {job.responsibilities.substring(1)}{" "}
          </p> */}
          <p className="max-sm:text-sm mt-2">{job.location[0].location}</p>
        </div>
        <div>
          <button
            data-theme="light"
            className="btn md:px-8 w-max max-md:btn-wide border-1 hover:bg-purple-300 border-purple-300"
          >
            View Job
          </button>
        </div>
      </article>
    );
  };

  return (
    <div>
      {JobsData.length > 0 && (
        <div className="lg:w-[90%] w-[100%] mx-auto flex  flex-col syne-font items-center justify-center pb-28 text-black">
          <p className="text-center text-black lg:text-7xl text-3xl  resize font-bold max-w-[80%]">
            Work With Us
          </p>
          <p id="learning" className="text-center mt-10 text-2xl">
            Hey! We're hiring!
            <br />
            The following positions are currently <b>available</b>
            <br />
          </p>
          <div className="mt-8">
            <div className="sm:hidden flex items-center justify-between w-[90vw]">
              <p className="text-xl">
                {" "}
                Vacancies{" "}
                <span className="bg-stone-600 text-white text-sm rounded-full py-1 px-2">
                  {JobsData.length}
                </span>
              </p>

              {/* <select
              id="Tab"
              className="rounded-md flex items-center justify-center bg-white p-2 border-gray-200"
            >
              <option>Technical</option>
              <option>Non Technical</option>
            </select> */}
            </div>

            <div className="hidden">
              <nav className="flex gap-6" aria-label="Tabs">
                <a className="cursor-pointer px-6 shrink-0 rounded-lg p-2 bg-[#e4e4e493] text-md font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-700">
                  Technical
                </a>

                <a className="cursor-pointer px-6 shrink-0 rounded-lg p-2 bg-[#e4e4e493] text-md font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-700">
                  Non Technical
                </a>
              </nav>
            </div>
          </div>
          <div className="sm:w-[50%] flex flex-col sm:grid sm:grid-cols-1 p-4 gap-4 items-center justify-center">
            {JobsData.slice(0, 4).map((job, index) => {
              return <JobCard2 key={index} job={job} index={index} />;
            })}
          </div>
          <Link
            to={""}
            className="text-blue-700 text-lg gap-1 mt flex items-center"
          >
            View more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      )}
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
    </div>
  );
};

export default WorkWithUs;
