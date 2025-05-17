import crm1 from "../src/assets/crm1.png";
import crm2 from "../src/assets/crm2.png";
import hr1 from "../src/assets/hr1.webp";
import hr2 from "../src/assets/hr2.webp";
import LMS1 from "../src/assets/LMS1.webp";
import LMS2 from "../src/assets/LMS2.webp";
import JobPortal1 from './assets/JobPortal1.png'
import JobPortal2 from './assets/JobPortal2.png'
import StoreApp1 from './assets/Features/StoreApp1.png'
import StoreApp2 from './assets/Features/StoreApp2.png'
import Vendor1 from './assets/Features/Vendor1.jfif'
import RoadMapImg2 from './assets/RoadMapImg2.jpg'
export const mainData = [
  {
    category: "dataAnalyst",
    img: "https://assets.cioinsight.com/uploads/2022/06/Data-Analyst.jpeg",
    title: "Data Analyst",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    paragraph:
      "A data analyst is a professional who collects, processes, and analyzes data to help businesses make informed decisions. They use statistical techniques and tools to uncover trends and patterns. Data analysts focus on interpreting data, creating reports, and presenting insights. They work with databases, spreadsheets, and data visualization tools to transform raw data into actionable information.",
    roadMap: RoadMapImg2,
    longDesc: [
      "Basic to Advanced level training",
      "Industry Use Cases",
      "Live Projects",
      "Resume Build-up",
      "Mock Interviews ",
    ],
    Mode: "Online/Offline",
    Duration: "25 Days",
    RoadMapImg1: "/src/assets/RoadMapImg1.jpg",
    RoadMapImg2: "/src/assets/RoadMapImg2.jpg",
    FAQ: [
      {
        id: "1",
        question: "How is Data Analytics relevant to the industry?",
        answer:
          "Data Analytics is a vital function for extracting actionable insights from raw data. It is widely used across industries for:",
        answerPoints: [
          "Customer segmentation and targeting.",
          "Predictive analytics in finance, healthcare, and marketing.",
          "Risk management and fraud detection.",
        ],
      },
      {
        id: "2",
        question: "How do you propose Data Analytics as a service?",
        answer: "We help businesses by:",
        answerPoints: [
          "Conducting exploratory data analysis (EDA) to understand trends.",
          "Designing data-driven strategies for growth.",
          "Implementing predictive models for better decision-making.",
        ],
      },
      {
        id: "3",
        question: "What case studies are handled in Data Analytics?",
        answer: "We have addressed scenarios such as:",
        answerPoints: [
          "Sales and revenue trend analysis.",
          "Risk and credit analysis in banking.",
        ],
      },
      {
        id: "4",
        question: "Can non-IT professionals benefit from Data Analytics?",
        answer:
          "Yes! Professionals from finance, HR, or marketing can learn to analyze data and improve decision-making, even without programming experience.",
      },
      {
        id: "5",
        question: "What are the training modes for Data Analytics?",
        answer:
          "Training options include hybrid, live, and offline sessions, ensuring flexibility for all learners.",
      },
      {
        id: "6",
        question:
          "What is the initial salary for Data Analytics professionals?",
        answer:
          "Entry-level Data Analysts can expect salaries starting from ₹3.5–7 LPA, with roles like Business Analyst, Reporting Analyst, and Data Scientist.",
      },
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "Python Topics",
        tag: "Python Topics ",
        duration: "3.2 Weeks",
        topics: [
          "Variables", 
          "Data Types", 
          "Operators", 
          "Control Statements (if else)",
          "Loops", 
          "Functions", 
          "Oops",
          "Numpy",
          "Pandas",
          "Matplotlib", 
          "Seaborn" 
        ],
      },
      {
        title: "Business Statistics",
        tag: "Business Statistics ",
        duration: "3.2 Weeks",
        topics: [
          "Descriptive Statistics", 
          "Probability and Normal Distribution",
          "Inferential Statistics"

        ],
      },
      {
        title: "SQL Topics",
        tag: "SQL Topics ",
        duration: "3.2 Weeks",
        topics: [
          "What is DBMS Introduction and its Need",
          "Types of DBMS",
          "Introduction to SQL", 
          "Data Types of SQL",
          "Constraints",
          "Types of SQL Language",
          "Operator",
          "Functions", 
          "Group By and Having clause",
          "Order By :-ASEC/DESC",
          "Requirement of Joins", 
          "Introduction of Joins", 
          "Understanding different types of Joins",
          "What is view, Requirement of View", 
          "Wildcard Operators", 
          "Aliases and its usage",
          "What is Subquery",
          "Working with subqueries",
          "What is Dual, Requirement of Dual", 
          "Working with Dual", 
          "Creating an Index",
          "Working with Keywords",
          "Understanding Conditions", 
          "If Else",
          "When", 
          "Case",
          "What is Stored Procedure, Understanding its Requirement", 
          "Working With Procedures",
          "What is a Trigger, its requirement?",
          "Working with Triggers", 
          "Temporary Table", 
          "Understanding Indexes, its requirement", 
          "Understanding Sequences, its requirement"
        ],
      },
      {
        title: "Excel",
        tag: "Excel ",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to Microsoft Excel and Excel Basic Knowledge",
          "Excel Functions and Basics", 
          "Data Manipulation in Excel", 
          "Data Management in Excel", 
          "Advanced Data Handling in Excel", 
          "Working with Dates and Times in Excel", 
          "Advanced Excel Functions",
          "Advanced Data Import and Export",
          "Formatting and Design in Excel",
          "Data Analysis Functions",
          "Data Shorting and Filtering", 
          "What-If Analysis", 
          "Key Techniques in Excel", 
          "Excel Security",
          "Excel Calculations",
          "Printing and Page Layout in Excel", 
          "Key Functions in Excel", 
          "Data Analysis with Pivot Tables",
          "Time Series Analysis and Visualization", 
          "Advanced Data Transformation",
          "Data Analysis Using Toolpak in Excel",
          "Excel Templates",
          "Interview Round"

        ],
      },
      {
        title: "Tableau",
        tag: "Tableau ",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to Tableau",
          "Connecting to Data Sources",
          "Understanding Tableau Interface",
          "Building Basic Visualizations",
          "Working with Maps",
          "Introduction to Calculations", 
          "Introduction to Dashboards", 
          "Advanced Charts and Graphs",
          "Data Blending and Joins",
          "Level of Detail (LOD) Expressions",
          "Tableau Calculation in-depth",
          "Parameters and sets",
          "Advanced Dashboards and Storytelling",
          "Data Visualization and Best Practices",
          "Forecasting and Trend Analysis",
          "Advanced Data Analytics",
          "Advanced Mapping and spatial analysis", 
          "Tableau Server and online",
          "Real-time Data Integration",
          "Integrating Tableau with Other Tools"
        ],
      },
      {
        title: "Power Bi",
        tag: "Power Bi ",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to Power Bi",
          "Basic Charts In Power Bi",
          "Maps In Power Bi",
          "Tables And Matrix In Power Bi",
          "Other Charts In Power Bi",
          "Cards And Filters In Power Bi",
          "Slicers In Power Bi",
          "Advanced Charts In Power Bi",
          "Power Bi Objects, Bookmarks, And Actions", 
          "Power Bi Services",
          "Text Functions In Power Query",
          "Date Functions",
          "Number Functions In Power Query",
          "Appending Data In Power Bi",
          "Introduction to Merge Queries",
          "Introduction to Conditional Column and Column From Examples", 
          "Important Topics In Power Bi",
          "M Language",
          "Data Modelling", 
          "Project Work" 
        ],
      },
    ],
    id: 1,
  },
  {
    category: "dataAnalyst",
    img: "https://www.itfixed.com/wp-content/uploads/2020/03/ms-excel-logo.png",
    title: "Advance Excel",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    paragraph:
      "Advanced Excel is a powerful tool for data analysis and visualization, offering a range of features to manage complex data sets. It’s widely used for its flexibility and functionality. Advanced Excel includes formulas, pivot tables, and macros to automate tasks and analyze trends. It allows users to manipulate large data sets, creating detailed reports and visual dashboards for better decision-making.",
    longDesc: [
      "Basic to Advanced level training",
      "Industry Use Cases",
      "Live Projects",
      "Resume Build-up",
      "Mock Interviews ",
    ],
    Mode: "Online/Offline",
    Duration: "25 Days",
    RoadMapImg1: "/src/assets/RoadMapImg1.jpg",
    RoadMapImg2: "/src/assets/RoadMapImg2.jpg",
    FAQ: [
      {
        id: "1",
        question: "How is Excel relevant to the industry?",
        answer: "Excel is indispensable for:",
        answerPoints: [
          "Managing and analyzing structured data.",
          "Automating repetitive tasks through formulas and VBA.",
          "Preparing dashboards for financial reporting, HR, and supply chain management.",
        ],
      },
      {
        id: "2",
        question: "How do you propose Excel as a service?",
        answer: "We can create customized solutions like:",
        answerPoints: [
          "Automated dashboards for tracking KPIs.",
          "Automated dashboards for tracking KPIs.",
          "Automated dashboards for tracking KPIs.",
        ],
      },
      {
        id: "3",
        question: "What case studies are handled in Excel?",
        answer: "Example projects include:",
        answerPoints: [
          "Employee performance dashboards.",
          "Inventory and order management systems.",
          "Cost-benefit analysis for decision-making.",
        ],
      },
      {
        id: "4",
        question: "Is Excel useful for non-IT professionals?",
        answer:
          "Absolutely! Excel is a universal tool for professionals in finance, HR, and operations, helping them manage data effectively without coding.",
      },
      {
        id: "5",
        question: "What are the training modes for Excel?",
        answer:
          "We offer hybrid, live, and classroom training to accommodate diverse learning preferences.",
      },
      {
        id: "6",
        question: "What is the expected salary for Excel specialists?",
        answer:
          "Salaries for Excel-focused roles, such as Reporting Analyst or Data Coordinator, range from ₹2.5–5 LPA for freshers.",
      },
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress.",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "Excel Functions and Basics",
        tag: "Excel Functions and Basics",
        duration: "3.2 Weeks",
        topics: [
          "How To Change Lower Case To Upper Case In Excel?",
          "How To Add Rows In Excel?",
          "How To Add Columns In Excel?",
        ],
      },
      {
        title: "Data Manipulation in Excel",
        tag: "Data Manipulation in Excel",
        duration: "3.2 Weeks",
        topics: [
          "How To Select En re Column In Excel?",
          "How to Compare Two Columns In Excel?",
          "How To Convert Rows To Columns In Excel?",
        ],
      },
      {
        title: "Data Management in Excel",
        tag: "Data Manipulation in Excel",
        duration: "3.2 Weeks",
        topics: [
          "How to Group Rows in Excel?",
          "How To Remove Blank Rows In Excel?",
          "How To Freeze Row In Excel Tutorial",
        ],
      },
      {
        title: "Advanced Data Handling in Excel",
        tag: "Advanced Data Handling in Excel",
        duration: "3.2 Weeks",
        topics: [
          "How to Convert Numbers to Words in Excel?",
          "Combining Data From Muliple Cells In Excel",
          "How To Merge Cells In Excel",
        ],
      },
      {
        title: "Working with Dates and Times in Excel",
        tag: "Working with Dates and Times in Excel",
        duration: "3.2 Weeks",
        topics: [
          "How to Add Date in Excel?",
          "How To Change Date Format In Excel (dd/mm/yyyy) To (mm/dd/yyyy)",
          "How To Calculate Age In Excel From A Date Of Birth?",
          "How To Calculate Time Difference in Excel?",
        ],
      },
      {
        title: "Data Management in Excel",
        tag: "Data Manipulation in Excel",
        duration: "3.2 Weeks",
        topics: [
          "How to Group Rows in Excel?",
          "How To Remove Blank Rows In Excel?",
          "How To Freeze Row In Excel Tutorial",
        ],
      },
      {
        title: "Advanced Excel Functions",
        tag: "Advanced Excel Functions",
        duration: "3.2 Weeks",
        topics: [
          "DAX In Excel Explained",
          "Checkboxes In Excel",
          "How to Insert Excel in PPT?",
          "How To Insert Image In Excel?",
        ],
      },
      {
        title: "Advanced Data Import and Export",
        tag: "Advanced Data Import and Export",
        duration: "3.2 Weeks",
        topics: [
          "How To Insert PDF in Excel Sheet?",
          "How To Convert PDF To Excel",
          "How to Insert Tick Mark in Excel?",
          "How to add Watermark in Excel?",
        ],
      },
      {
        title: "Formatting and Design in Excel",
        tag: "Formatting and Design in Excel",
        duration: "3.2 Weeks",
        topics: [
          "How to Increase Cell Size in Excel?",
          "How to create Barcode In Excel",
          "Excel Flash Fill",
          "How to Add Hyperlink In Excel",
        ],
      },
      {
        title: "Data Analysis and Math Functions",
        tag: "Data Analysis and Math Functions",
        duration: "3.2 Weeks",
        topics: [
          "Excel Round-Off Formula",
          "How To Calculate Standard Devia on In Excel?",
          "Index Match In Excel",
        ],
      },
      {
        title: "Data Sorting and Filtering",
        tag: "Data Sorting and Filtering",
        duration: "3.2 Weeks",
        topics: [
          "How to Sort by Date in Excel?",
          "How to Use AutoSum In Excel",
          "How To Sort Data In Excel?",
          "Slicer and Filter in Excel",
          "How to Add Filters in Excel",
        ],
      },
      {
        title: "What-If Analysis",
        tag: "What-If Analysis",
        duration: "3.2 Weeks",
        topics: [
          "Goal Seek In Excel",
          "How to Create Drop-Down List In Excel?",
          "Data Valida on In Excel",
        ],
      },
      {
        title: "Excel Security and Calculations",
        tag: "Excel Security and Calculations",
        duration: "3.2 Weeks",
        topics: [
          "How To Lock(Protect) Cells In Excel",
          "How To Calculate Average In Excel?",
        ],
      },
      {
        title: "Printing and Page Layout in Excel",
        tag: "Printing and Page Layout in Excel",
        duration: "3.2 Weeks",
        topics: ["Excel Print Page Setup", "Page Break In Excel For Beginners"],
      },
      {
        title: "Data Visualization",
        tag: "Data Visualization",
        duration: "3.2 Weeks",
        topics: [
          "Conditional Forma ng In Excel",
          "How to Count Colored Cells in Excel?",
          "DateDif In Excel Explained",
        ],
      },
      {
        title: "Advanced Data Cleaning",
        tag: "Advanced Data Cleaning",
        duration: "3.2 Weeks",
        topics: ["Remove Duplicates In Excel", "SUMIFS Formula in Excel"],
      },
      {
        title: "Data Analysis with Pivot Tables",
        tag: "Data Analysis with Pivot Tables",
        duration: "3.2 Weeks",
        topics: ["How To Create Pivot Tables In Excel"],
      },
      {
        title: "Time Series Analysis and Visualization",
        tag: "Time Series Analysis and Visualization",
        duration: "3.2 Weeks",
        topics: ["Time Series Analysis in Excel", "Excel Dashboard Design"],
      },
      {
        title: "Advanced Data Transformation",
        tag: "Advanced Data Transformation",
        duration: "3.2 Weeks",
        topics: ["Excel Power Query Tutorial For Beginners"],
      },
      {
        title: "Financial Planning and Budgeting",
        tag: "Financial Planning and Budgeting",
        duration: "3.2 Weeks",
        topics: ["Excel Budget Template"],
      },
      {
        title: "Excel Interview Preparation",
        tag: "Excel Interview Preparation",
        duration: "3.2 Weeks",
        topics: ["Excel Interview Questions and Answers"],
      },
    ],
    id: 2,
  },
  {
    category: "dataAnalyst",
    img: "https://i.ytimg.com/vi/_Uq246CMiHc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC4dXuK0bB1HN2vGJDPua6Gw704g",
    title: "SQL Developer",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    paragraph:
      "SQL is a powerful and widely-used language for managing and querying relational databases, making it an essential tool for data-driven applications and analysis. SQL has a straightforward and declarative syntax, focusing on retrieving, inserting, updating, and deleting data. It uses commands like SELECT, INSERT, and UPDATE to interact with databases, ensuring efficient data manipulation.",
    longDesc: [
      "Basic to Advanced level training",
      "Industry Use Cases",
      "Live Projects",
      "Resume Build-up",
      "Mock Interviews ",
    ],
    Mode: "Online/Offline",
    Duration: "25 Days",
    RoadMapImg1: "/src/assets/RoadMapImg1.jpg",
    RoadMapImg2: "/src/assets/RoadMapImg2.jpg",
    FAQ: [
      {
        id: "",
        question: "What is SQL?",
        answer: "SQL stands for Structured Query Language, a standard programming language used to manage and manipulate relational databases. It allows users to query, insert, update, delete, and manage data in databases."
      },
      {
        id: "",
        question: "What are the different types of SQL commands?",
        answer: "SQL commands are grouped into five main categories:",
        answerPoints: [
          "DDL (Data Definition Language): CREATE, ALTER, DROP",
          "DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE",
          "DCL (Data Control Language): GRANT, REVOKE",
          "TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT",
          "DQL (Data Query Language): SELECT",
        ],
      },
      {
        id: "",
        question: "What is a primary key in SQL?",
        answer: "A primary key is a unique identifier for each record in a table. It ensures that no duplicate values exist and that every record can be uniquely identified."
      },
      {
        id: "",
        question: "What is a foreign key?",
        answer: "A foreign key is a field (or collection of fields) in one table that refers to the primary key in another table. It establishes a relationship between two tables."
      },
      {
        id: "",
        question: "What are joins in SQL?",
        answer: "Joins are used to retrieve data from multiple tables based on a related column. Common types of joins include:",
        answerPoints: [
          "INNER JOIN: Returns records with matching values in both tables.",
          "LEFT JOIN: Returns all records from the left table and matched records from the right table.",
          "RIGHT JOIN: Returns all records from the right table and matched records from the left table.",
          "TCL (Transaction Control Language): COMMIT, ROLLBACK, SAVEPOINT",
          "FULL JOIN: Returns all records when there is a match in either table.",
        ],
      },
      {
        id: "",
        question: "How can I optimize SQL queries for better performance?",
        answer: "",
        answerPoints: [
          "Use proper indexing.",
          "Avoid using SELECT * and specify columns explicitly.",
          "Use EXISTS instead of IN for subqueries when appropriate.",
          "Limit the number of joins and use proper filtering.",
          "Analyze and optimize database structure with normalization.",
        ],
      },
      {
        id: "",
        question: "What is indexing in SQL?",
        answer: "Indexing is a way to optimize database performance by creating a data structure (index) to speed up data retrieval operations. Common types of indexes include clustered and non-clustered indexes."
      },
      {
        id: "",
        question: "What is the difference between a clustered and a non-clustered index?",
        answer: "",
        answerPoints: [
          "Clustered Index: Physically sorts the table data based on the indexed column. Each table can have only one clustered index.",
          "Non-Clustered Index: Creates a separate structure from the table data that points to the actual data. A table can have multiple non-clustered indexes."
        ],
      },
      {
        id: "",
        question: "What is the difference between DELETE and TRUNCATE?",
        answer: "",
        answerPoints: [
          "DELETE: Removes specific rows based on a condition. It is slower and can be rolled back.",
          "TRUNCATE: Removes all rows from a table quickly but cannot be rolled back."
        ]
      },
      {
        id: "",
        question: "How is a WHERE clause different from a HAVING clause?",
        answer: "",
        answerpoints: [
          "WHERE: Filters records before grouping.",
          "HAVING: Filters groups of records after grouping with GROUP BY."
        ]
      },
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "Basic Topics",
        tag: "Basic Topics",
        duration: "3.2 Weeks",
        topics: [
          "What is DBMS Introduction and its Need",
          "Types of DBMS",
          "Introduction to SQL",
          "Data Types of SQL",
          "Constraints",
          "Types Of SQL Languages",
          "Operator",
          "Functions",
          "Group by and Having clause",
          "Order By  :- AESC/DESC",
        ],
      },
      {
        title: " Intermediate Topics",
        tag: " Intermediate Topics",
        duration: "3.2 Weeks",
        topics: [
          "Requirement of Joins",
          "Introduction to Joins",
          "Understanding different types of Joins",
          "What is View, Requirement of View",
          "Wildcard operators",
          "Aliases and its usage",
          "What is Subquery",
          "Working with Subqueries",
          "What is Dual, Requirement of Dual",
          "Working with Dual",
          "Creating an index",
          "Working with keywords",
        ],
      },
      {
        title: "Advance Topics",
        tag: "Advance Topics",
        duration: "3.2 Weeks",
        topics: [
          "Understanding Conditions",
          "IF Else",
          "When",
          "Case",
          "What is Stored Procedure, Understanding its Requirement",
          "Working with Procedures",
          "What is a Trigger, its requirement?",
          "Working with Triggers",
          "Temporary Table",
          "Understanding Indexes, its requirement",
          "Understanding Sequences, its requirement",
          "Using Sequence",
          "Understanding Transactions",
          "Taking Backup of Tables/Databases",
          "Understanding permissions",
          "Note: Syntax and some concepts may vary across the DB vendor,  but mostly above mentioned concepts are part of all DBs, be it MySQL, Oracle, MS SQL, MongoDB etc",
        ],
      },
    ],
    id: 3,
  },
  {
    category: "dataAnalyst",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxm4jlS9U8Kg0BUKJqMoKNTlUqVRHdEo-koQ&s",
    title: "Tableau Developer",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    paragraph:
      "Tableau is a powerful and widely-used data visualization tool known for its ability to transform raw data into interactive, easy-to-understand visual reports and dashboards. Tableau has a user-friendly interface, emphasizing drag-and-drop functionality. It connects to various data sources and enables users to create compelling visualizations that help in making data-driven decisions quickly.",
    longDesc: [
      "Basic to Advanced level training",
      "Industry Use Cases",
      "Live Projects",
      "Resume Build-up",
      "Mock Interviews ",
    ],
    Mode: "Online/Offline",
    Duration: "25 Days",
    RoadMapImg1: "/src/assets/RoadMapImg1.jpg",
    RoadMapImg2: "/src/assets/RoadMapImg2.jpg",
    FAQ: [
      {
        id: "",
        question: "What is Tableau?",
        answer: "Tableau is a powerful data visualization tool used for analyzing and presenting data in an easy-to-understand visual format, such as charts, graphs, and dashboards."
      },
      {
        id: "",
        question: "Who should take this course?",
        answer: "This course is ideal for data analysts, business intelligence professionals, students, and anyone interested in learning how to visualize and analyze data effectively using Tableau."
      },
      {
        id: "",
        question: "Are there any prerequisites for this course?",
        answer: "No prior experience with Tableau is required. However, a basic understanding of data and familiarity with Excel or databases will be helpful."
      },
      {
        id: "",
        question: "What will I learn in this course?",
        answer: "You will learn how to:",
        answerPoints: [
          "Connect Tableau to different data sources.",
          "Create and customize charts, graphs, and dashboards.",
          "Use advanced features like calculated fields, filters, and parameters.",
          "Share interactive visualizations and dashboards."
        ]
      },
      {
        id: "",
        question: "How long is the course?",
        answer: "The course duration is 20 days."
      },
      {
        id: "",
        question: "Will I get a certificate after completing the course?",
        answer: "Yes, a certificate of completion will be provided after successfully finishing the course."
      },
      {
        id: "",
        question: "What tools do I need to take this course?",
        answer: "You’ll need:",
        answerPoints: [
          "A computer (Windows or Mac).",
          "Tableau Desktop (free trial or licensed version).",
          "A stable internet connection."
        ]
      },
      {
        id: "",
        question: "Is this course self-paced or instructor-led?",
        answer: "Instructor-led"
      },
      {
        id: "",
        question: "Will I have access to course materials after the course ends?",
        answer: "Yes, you will have lifetime access to all course materials, including recorded sessions and resources."
      },
      {
        id: "",
        question: "Does the course include hands-on practice?",
        answer: "Absolutely! The course includes practical exercises, case studies, and real-world projects to enhance your learning experience."
      },
      {
        id: "",
        question: "Can I use Tableau Public instead of Tableau Desktop?",
        answer: "Yes, you can use Tableau Public, a free version of Tableau, to follow along with the course. However, some advanced features might not be available."
      },
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "Tableau Fundamentals",
        tag: "Tableau Fundamentals",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to Tableau",
          "Connecting to Data Sources",
          "Understanding Tableau Interface",
          "Building Basic Visualizations",
          "Working with Maps",
          "Introduction to Calculations",
          "Introduction to Dashboards",
        ],
      },
      {
        title: "Tableau Intermediate",
        tag: "Tableau Intermediate",
        duration: "3.2 Weeks",
        topics: [
          "Advanced Charts and Graphs",
          "Data Blending and Joins",
          "Level of Detail (LOD) Expressions",
          "Tableau Calculations In-depth",
          "Parameters and Sets",
          "Advanced Dashboards and Storytelling",
          "Data Visualization Best Practices",
        ],
      },
      {
        title: "Tableau Business Insights",
        tag: "Tableau Business Insights",
        duration: "3.2 Weeks",
        topics: [
          "Forecasting and Trend Analysis",
          "Advanced Data Analytics ",
          "Tableau Server and Online",
          "Advanced Mapping and Spatial Analysis",
          "Real-time Data Integration",
          "Integrating Tableau with Other Tools",
        ],
      },
    ],
    id: 4,
  },
  {
    category: "dataAnalyst",
    img: "https://contentstatic.techgig.com/photo/85003973/everything-that-you-need-to-know-before-becoming-a-power-bi-developer.jpg?221709",
    title: "Power BI Developer",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    paragraph:
      "Power BI is a powerful and widely-used business analytics tool designed to help users visualize and share insights from their data. It’s ideal for transforming raw data into interactive dashboards and reports. Power BI offers an intuitive interface, focusing on data modeling and visualization. It integrates seamlessly with various data sources, enabling users to make data-driven decisions with ease and efficiency.",
    longDesc: [
      "Basic to Advanced level training",
      "Industry Use Cases",
      "Live Projects",
      "Resume Build-up",
      "Mock Interviews ",
    ],
    Mode: "Online/Offline",
    Duration: "25 Days",
    RoadMapImg1: "/src/assets/RoadMapImg1.jpg",
    RoadMapImg2: "/src/assets/RoadMapImg2.jpg",
    FAQ: [
      {
        id: "1",
        question: "Why is Power BI important in the industry?",
        answer: "Power BI is a leading tool for:",
        answerPoints: [
          "Business intelligence and visualization.",
          "Interactive dashboards for executive decision-making.",
          "Real-time KPI tracking across industries.",
        ],
      },
      {
        id: "2",
        question: "How do you propose Power BI as a service?",
        answer: "We design:",
        answerPoints: [
          "Custom dashboards to visualize sales, operations, and financial data.",
          "Real-time reporting systems for dynamic decision-making.",
          "KPI-based monitoring tools tailored to business requirements.",
        ],
      },
      {
        id: "3",
        question: "What case studies are handled in Power BI?",
        answer: "Key projects include:",
        answerPoints: [
          "Zone-wise sales analysis and credit risk management.",
          "Executive dashboards for supply chain and logistics.",
          "	Monitoring customer behavior trends in real time.",
        ],
      },
      {
        id: "4",
        question: "Can non-IT professionals use Power BI?",
        answer:
          "Yes! Non-IT users can create dynamic visualizations without coding, enabling better data-driven decisions in marketing, HR, and finance.",
      },
      {
        id: "5",
        question: "What are the training modes for Power BI?",
        answer:
          "Flexible training modes include hybrid, live, and classroom sessions, ensuring convenience for all learners.",
      },
      {
        id: "6",
        question: "What salary can Power BI specialists expect?",
        answer:
          "Entry-level Power BI developers can earn ₹4–8 LPA, with roles like Business Intelligence Analyst or Power BI Developer.",
      },
      ,
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "Power Bi",
        tag: "Power Bi",
        duration: "3.2 Weeks",
        topics: [
          "INTRODUCTION TO POWER BI",
          "BASIC CHARTS IN POWER BI",
          "MAPS IN POWER BI",
          "TABLES AND MATRIX IN POWER BI",
          "OTHER CHARTS IN POWER BI",
          "CARDS AND FILTERS IN POWER BI",
          "SLICERS IN POWER BI",
          "ADVANCED CHARTS IN POWER BI",
          "POWER BI OBJECTS, BOOKMARKS, AND ACTIONS",
          "POWER BI SERVICES",
          "TEXT FUNCTIONS IN POWER QUERY",
          "DATE FUNCTIONS",
          "NUMBER FUNCTIONS IN POWER QUERY",
          "APPENDING DATA IN POWER BI",
          "INTRODUCTIONS TO MERGE QUERIES",
          "INTRODUCTIONS TO CONDITIONAL COLUMN AND COLUMN FROM EXAMPLES",
          "IMPORTANT TOPICS IN POWER BI",
          "M LANGUAGE",
          "Project Work",
        ],
      },
    ],
    id: 5,
  },
  // {
  //   category: "dataAnalyst",
  //   img: "https://www.avatarstudios.in/wp-content/uploads/2023/04/graphic-design.jpg",
  //   title: "Graphics Designer",
  //   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  //   id: 6,
  // },
  {
    img: "https://teresas.ac.in/wp-content/uploads/2021/07/20190820185239-GettyImages-985550942.jpeg",
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    id: 7,
  },
  {
    category: "rpaDeveloper",
    img: "https://www.damcogroup.com/wp-content/uploads/2024/06/uipath-rpa-opportunities.jpg",
    title: "UiPath",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    paragraph:
      "UiPath is a leading Robotic Process Automation (RPA) platform designed to automate repetitive tasks and business processes. It simplifies automation by providing an intuitive, visual interface. UiPath offers a user-friendly workflow builder, enabling both technical and non-technical users to design automation. It integrates easily with various applications and systems, enhancing productivity and operational efficiency.",
    longDesc: [
      "Basic to Advanced level training",
      "Industry Use Cases",
      "Live Projects",
      "Resume Build-up",
      "Mock Interviews ",
    ],
    FAQ: [
      {
        question: "What is RPA, and why is it transforming businesses?",
        answer:
          "RPA (Robotic Process Automation) uses software bots to automate repetitive, rule-based tasks. It enhances efficiency, reduces human error, and allows employees to focus on strategic and creative activities."
      },
      {
        question: "How does RPA differ from traditional automation?",
        answer:
          "Unlike traditional automation, which relies on custom software development, RPA uses bots to mimic human actions across applications without altering the underlying systems."
      },
      {
        question: "What types of processes are ideal for RPA?",
        answer:
          "RPA excels in tasks such as data entry, invoice processing, report generation, email handling, and integrating systems that lack direct API support."
      },
      {
        question: "How do RPA tools like UiPath and Power Automate simplify automation?",
        answer:
          "Both UiPath and Power Automate offer drag-and-drop interfaces, pre-built templates, and AI capabilities, enabling businesses to automate workflows quickly and efficiently."
      },
      {
        question: "What industries are benefiting most from RPA?",
        answer:
          "Industries such as banking, healthcare, retail, and manufacturing are leveraging RPA to streamline operations, ensure compliance, and enhance customer service."
      },
      {
        question: "What industries are benefiting most from RPA?",
        answer:
          "Industries such as banking, healthcare, retail, and manufacturing are leveraging RPA to streamline operations, ensure compliance, and enhance customer service."
      },
      {
        question: "How does RPA integrate with AI and machine learning?",
        answer:
          'Advanced RPA platforms integrate AI/ML to enable bots to handle unstructured data, make intelligent decisions, and improve over time, creating "smart automation" solutions.'
      },
      {
        question: "Can RPA scale with a growing business?",
        answer:
          'Absolutely! Modern RPA platforms are designed to scale horizontally, allowing organizations to deploy more bots or enhance existing ones to handle increasing workloads.?'
      },
      {
        question: "What are the biggest challenges in implementing RPA?",
        answer:
          'Key challenges include identifying suitable processes, ensuring change management, and addressing potential employee concerns. Proper planning and stakeholder engagement can overcome these hurdles effectively.'
      },
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "RPA Overview & Industry Use Cases",
        tag: "RPA Overview & Industry Use Cases",
        duration: "3.2 Weeks",
        topics: [
          "What, When, and Where RPA",
          "Industry coverage of RPA",
          "Why UiPathTools",
          "UiPath Installation",
          "Setting up the Browser",
          " RPA implementation life cycle"
        ],
      },
      {
        title: "UiPath Studio Overview",
        tag: "UiPath Studio Overview",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to UiPath components – Studio, orchestrator, and Robots",
          "Software and hardware configuration for UiPath",
          "How to configure UiPath Studio",
          "Different project types",
          "Sequence and flowchart",
          "Type of Panels in UiPath",
          "Manage Packages",
          "How to import packages",
          "Ribbon module Proper es",
          "Panels and its importance"
        ],
      },
      {
        title: "System Activities And Process Components",
        tag: "System Activities And Process Components",
        duration: "3.2 Weeks",
        topics: [
          "Variables and arguments",
          "Different Types of loops",
          "Decision Types and switch activities",
          "Variable Scope",
          "System Activities",
          "Variables and arguments", 
          "Different Types of loops", 
          "Decision Types and switch activities", 
          "Variable Scope",
          "System Activities"
        ],
      },
      {
        title: "Excel Automation",
        tag: "Excel Automation",
        duration: "3.2 Weeks",
        topics: [
          "Create, Read, Write Excel files",  
          "How to read, write in a cell",
          "Filter and Sorting", 
          "How to apply formula within a cell", 
          "Difference between Excel and Workbook activities"
        ],
      },
      {
        title: "App Integration, Data And Image Scrapping",
        tag: "App Integration, Data And Image Scrapping",
        duration: "3.2 Weeks",
        topics: [
          "What are the selectors?", 
          "How to make selectors dynamic",   
          "Ui Explorer",    
          "Data Scrapping from different types of sources",  
          "Image Scrapping"
        ],
      },
      {
        title: "Type Of Recording",
        tag: "Type Of Recording",
        duration: "3.2 Weeks",
        topics: [
          "Basic Recording",   
          "Desktop Recording",   
          "Web Recording",  
          "Image Recording",   
          "Citrix Recording",  
          "Computer Vision"
        ],
      },
      {
        title: " Email Automation",
        tag: " Email Automation",
        duration: "3.2 Weeks",
        topics: [
          "Different Types of email automation activities",  
          "Send and Read Email",  
          "Email attachment download",    
          "SMTP and IMAP email"
        ],
      },
      {
        title: "Work Queues",
        tag: "Work Queues",
        duration: "3.2 Weeks",
        topics: [
          "Load data into Queue",   
          "Get data from Queue",   
          "Delete Queue Items",  
          "How to set Queue item status", 
          "Bulk add queue items"
        ],
      },
      {
        title: "Process Debugging, Logging, And Exception Handling",
        tag: "Process Debugging, Logging, And Exception Handling",
        duration: "3.2 Weeks",
        topics: [
          "What is debugging process",  
          "Debugging techniques",   
          "Breakpoints",    
          "What are exceptions/errors",   
          "Types of errors/exceptions",   
          "How to handle exceptions",   
          "Try Catch",  
          "Throw and Rethrow"
        ],
      },
      {
        title: "OCR And PDF Automation",
        tag: "OCR And PDF Automation",
        duration: "3.2 Weeks",
        topics: [
          "What is OCR   Types of OCR engines – Tesseract, Microsoft , Omni Page",   
          "How to read data from text and OCR PDF",   
          "How to read data from the image from OCR",  
          "PDF Invoice automation"
        ],
      },
      {
        title: "Invoke Code Stage",
        tag: "Invoke Code Stage",
        duration: "3.2 Weeks",
        topics: [
          "Overview of Invoke code stage",
          "How to build code to execute from code stage"
        ],
      },
      {
        title: "Orchestrator, Robot, And Studio Configuration",
        tag: "Orchestrator, Robot, And Studio Configuration",
        duration: "3.2 Weeks",
        topics: [
          "What is Orchestrator",   
          "Assets Types",  
          "Logs verification",  
          "Environment creation",   
          "How to configure Machine  How to configure Robots",   
          "A ended and Unattained Robots",   
          "How to schedule the process on A ended and Unattained Robots",  
          "How to publish the process", 
          "Version control"
        ],
      },
      {
        title: "RE Framework",
        tag: "RE Framework",
        duration: "3.2 Weeks",
        topics: [
          "Introdution to RE Framework",   
          "State Machine",    
          "Advantages of RE Framework",   
          "RE Framework structure",   
          "Configuration file creation",   
          "Build an end to end projects using RE Framework"
        ],
      },
      {
        title: "Document Understanding With UiPath",
        tag: "Document Understanding With UiPath",
        duration: "3.2 Weeks",
        topics: [
          "Install Packages and crea ng a taxonomy", 
          "Digitize and classify the documents",
          "Data Extraction and Human Validation", 
          "Export and write the result in Excel", 
          "Train the same Bot for license data extract", 
          "Assignments"
        ],
      },
      {
        title: "UiPath Test Suite",
        tag: "UiPath Test Suite",
        duration: "3.2 Weeks",
        topics: [
          "What is UiPath Test Suite?",   
          "How to perform testing  Date Driven Testing",
          "How to generate the test HTML report",  
          "Email test HTML report"
        ],
      },
      {
        title: "UiPath Licensing",
        tag: "UiPath Licensing",
        duration: "3.2 Weeks",
        topics: [
          "Type of License of UiPath components?",     
          "The license cost of different components"
        ],
      },
      {
        title: "Type Of Bots",
        tag: "Type Of Bots",
        duration: "3.2 Weeks",
        topics: [
          "Attended",     
          "Unattended",   
          "Testing",   
          "Non-Production"
        ],
      },
    ],
    id: 8,
  },
  {
    category: "rpaDeveloper",
    img: "https://digitalworkforce.com/wp-content/uploads/2021/06/PA-top-image.jpg",
    title: "Power Automate",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    paragraph:
      "Power Automate is a user-friendly RPA tool by Microsoft designed to automate workflows and business processes. It allows users to create automated tasks with minimal coding, improving efficiency and accuracy. Power Automate offers a simple drag-and-drop interface, enabling users to integrate various apps and services. It automates repetitive tasks, saving time and boosting productivity across industries.",
    longDesc: [
      "Basic to Advanced level training",
      "Industry Use Cases",
      "Live Projects",
      "Resume Build-up",
      "Mock Interviews ",
    ],
    FAQ: [
      {
        question: "What is RPA, and why is it transforming businesses?",
        answer:
          "RPA (Robotic Process Automation) uses software bots to automate repetitive, rule-based tasks. It enhances efficiency, reduces human error, and allows employees to focus on strategic and creative activities."
      },
      {
        question: "How does RPA differ from traditional automation?",
        answer:
          "Unlike traditional automation, which relies on custom software development, RPA uses bots to mimic human actions across applications without altering the underlying systems."
      },
      {
        question: "What types of processes are ideal for RPA?",
        answer:
          "RPA excels in tasks such as data entry, invoice processing, report generation, email handling, and integrating systems that lack direct API support."
      },
      {
        question: "How do RPA tools like UiPath and Power Automate simplify automation?",
        answer:
          "Both UiPath and Power Automate offer drag-and-drop interfaces, pre-built templates, and AI capabilities, enabling businesses to automate workflows quickly and efficiently."
      },
      {
        question: "What industries are benefiting most from RPA?",
        answer:
          "Industries such as banking, healthcare, retail, and manufacturing are leveraging RPA to streamline operations, ensure compliance, and enhance customer service."
      },
      {
        question: "What industries are benefiting most from RPA?",
        answer:
          "Industries such as banking, healthcare, retail, and manufacturing are leveraging RPA to streamline operations, ensure compliance, and enhance customer service."
      },
      {
        question: "How does RPA integrate with AI and machine learning?",
        answer:
          'Advanced RPA platforms integrate AI/ML to enable bots to handle unstructured data, make intelligent decisions, and improve over time, creating "smart automation" solutions.'
      },
      {
        question: "Can RPA scale with a growing business?",
        answer:
          'Absolutely! Modern RPA platforms are designed to scale horizontally, allowing organizations to deploy more bots or enhance existing ones to handle increasing workloads.?'
      },
      {
        question: "What are the biggest challenges in implementing RPA?",
        answer:
          'Key challenges include identifying suitable processes, ensuring change management, and addressing potential employee concerns. Proper planning and stakeholder engagement can overcome these hurdles effectively.'
      },
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "Introduction – Power Automate Desktop",
        tag: "Power Automate Desktop",
        duration: "3.2 Weeks",
        topics: [
          "What is RPA",
          "Why Power Automate",
          "Power Automate Installation",
        ],
      },
      {
        title: "System Activities And Process Components",
        tag: "System Activities And Process Components",
        duration: "3.2 Weeks",
        topics: [
          "Variables and arguments",
          "Different Types of loops",
          "Decision Types and switch activities",
          "Variable Scope",
          "System Activities",
        ],
      },
      {
        title: "Excel Automation",
        tag: "Excel Automation",
        duration: "3.2 Weeks",
        topics: [
          "Read, Write and Manupulate into Excel files",
          "How to read, write in a cell",
          "Filter and Sorting",
          "How to apply formula within a cell",
        ],
      },
      {
        title: "UI Automation/Selecter",
        tag: "UI Automation/Selecter",
        duration: "3.2 Weeks",
        topics: [
          " Introduction to Selectors",
          "Importance of Selectors",
          "How to Edit the Selectors",
          "How to make Selectors Dynamic",
        ],
      },
      {
        title: "Email Automation",
        tag: "Email Automation",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to Email Automation",
          "Different Types of email automation activities",
          "Send and Read Email",
          "Email a attachment Download",
          "SMTP and IMAP Email",
        ],
      },
      {
        title: "Database Automation",
        tag: "Database Automation",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to database Automation",
          "Excel as DB with Power Automate",
        ],
      },
      {
        title: "API Automation",
        tag: "API Automation",
        duration: "3.2 Weeks",
        topics: ["Introduction to API Automation", "Invoke web services"],
      },
      {
        title: "Scripting",
        tag: "Scripting",
        duration: "3.2 Weeks",
        topics: ["How to use Python, VBA, JAVASCRIPT"],
      },
      {
        title: "Excel Automation",
        tag: "Excel Automation",
        duration: "3.2 Weeks",
        topics: [
          "Read, Write and Manupulate into Excel files",
          "How to read, write in a cell",
          "Filter and Sorting",
          "How to apply formula within a cell",
        ],
      },
      {
        title: "Exception/Error Handling",
        tag: "Exception/Error Handling",
        duration: "3.2 Weeks",
        topics: ["What are exceptions/Errors", "How to handle exceptions"],
      },
      {
        title: "AI Builder",
        tag: "AI Builder",
        duration: "3.2 Weeks",
        topics: [
          "Learn How to use Different AI Builder to Enhance your Processes",
          "Create your first model",
          "How to train the AI Builder model",
          " Exercise – How to extract the data from the PDF documents using AI builder",
        ],
      },
      {
        title: "Other Actions Packages",
        tag: "Other Actions Packages",
        duration: "3.2 Weeks",
        topics: [
          "Browser Actions",
          "Date Time",
          "Conditional Actions",
          "Folder Actions",
          "File Actions",
          "Message Boxes",
          "Mouse And Ocr Ac ons",
          "Pdf Actions",
          "Text Actions",
          "Xml Actions",
        ],
      },
    ],
    id: 9,
  },
  // {
  //   category: "rpaDeveloper",
  //   img: "https://www.corporateconnection.ae/media/hw_6@2x.jpg",
  //   title: "Automation Anywhere",
  //   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  //   longDesc: [
  //     "Basic to Advanced level training",
  //     "Industry Use Cases",
  //     "Live Projects",
  //     "Resume Build-up",
  //     "Mock Interviews ",
  //   ],
  //   FAQ: [
  //     {
  //       id: "1",
  //       question: "How can the Actify CRM Portal benefit my business?",
  //       answer:
  //         "With Actify CRM, your business can improve sales tracking, enhance customer service, and optimize marketing efforts. It helps you stay organized by managing customer interactions, sales opportunities, and support tickets in one place, leading to better decision-making and stronger customer relationships.",
  //     },
  //     {
  //       id: "2",
  //       question: "How can the Actify CRM Portal benefit my business?",
  //       answer:
  //         "With Actify CRM, your business can improve sales tracking, enhance customer service, and optimize marketing efforts. It helps you stay organized by managing customer interactions, sales opportunities, and support tickets in one place, leading to better decision-making and stronger customer relationships.",
  //     },
  //   ],
  //   id: 10,
  // },
  {
    category: "appDeveloper",
    img: "https://d1zhyf4obee6da.cloudfront.net/s3fs-public/2021-03/Mobile%20App_0.jpg",
    title: "React Native Developer",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    longDesc: ["React Native", "Tailwind CSS", "Material UI", "GSAP"],
    paragraph:
      "React Native is a popular framework for building mobile applications using JavaScript and React. It enables developers to create cross-platform apps for iOS and Android with a single codebase. React Native focuses on a component-based architecture, allowing for reusable UI elements. It uses native components for high performance, making it a powerful choice for mobile app development.",
    Mode: "Online/Offline",
    Duration: "25 Days",
    FAQ: [
      {
        id: "1",
        question: "What is the primary goal of this course?",
        answer:
          "The course aims to teach participants how to build cross-platform mobile applications using React Native and Expo CLI, covering everything from setup to deployment on app stores.",
      },
      {
        id: "2",
        question: "Who is this course suitable for?",
        answer:
          "This course is ideal for individuals with prior experience in JavaScript or web development who want to transition into mobile app development.",
      },
      {
        id: "3",
        question: "Do I need prior coding knowledge?",
        answer:
          "Yes, basic knowledge of JavaScript and ReactJS concepts is essential to make the most of this course.",
      },
      {
        id: "4",
        question: "What tools and software will I need?",
        answer:
          "You’ll need a computer with Node.js, npm, and Expo CLI installed. A smartphone for testing apps in real-time is also recommended.",
      },
      {
        id: "5",
        question: "How is this course structured?",
        answer:
          "The course is divided into weekly modules, starting with the basics of React Native and gradually moving to advanced topics like animations, state management, and app deployment.",
      },
      {
        id: "6",
        question: "Will I learn how to publish an app?",
        answer:
          "Yes, the course includes a step-by-step guide to preparing and publishing apps to the Google Play Store.",
      },
      {
        id: "7",
        question: "Is state management covered?",
        answer:
          "Yes, the course covers state management techniques using Context API, Redux, and custom hooks.",
      },
      {
        id: "8",
        question: "Can I learn this course part-time?",
        answer:
          "Absolutely. The course is designed to be flexible, with recorded sessions and resources available for review at your convenience.",
      },
      {
        id: "9",
        question: "What can I expect in terms of job prospects?",
        answer:
          "React Native developers are in high demand. With skills from this course, you can expect roles in app development with competitive salaries.",
      },
      {
        id: "10",
        question: "Are animations included in the syllabus?",
        answer:
          "Yes, we’ll cover animations using tools like the Reanimated library to create visually engaging apps.",
      },
      {
        id: "11",
        question: "What are the key topics covered in this course?",
        answer:
          "The course includes topics such as navigation, API integration, form handling, animations, background processes, performance optimization, and deployment.",
      },
      {
        id: "12",
        question: "How practical is this course?",
        answer:
          "The course is highly practical, with hands-on projects and tasks designed to give you real-world app development experience.",
      },
      {
        id: "13",
        question: "Can I build apps for both Android and iOS?",
        answer:
          "Yes, React Native enables you to create apps for both platforms using a single codebase, which is a core focus of this course.",
      },
      {
        id: "14",
        question: "What is the duration of the course?",
        answer:
          "The course spans 4 weeks, with daily sessions and practical assignments.",
      },
      {
        id: "15",
        question: "How much time will I need to dedicate daily?",
        answer:
          "You’ll need to spend around 2–3 hours daily on lectures, practice, and assignments to keep up with the course.",
      },
      {
        id: "16",
        question: "Will I get a certificate?",
        answer:
          "Yes, you’ll receive a certificate upon successfully completing the course and projects.",
      },
      {
        id: "17",
        question: "What makes this course different from others?",
        answer:
          "This course emphasizes practical learning through real-world projects, industry-relevant topics, and step-by-step guidance on creating and deploying mobile apps.",
      },
      ,
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "Introduction of React Native",
        tag: "Introduction of React Native",
        duration: "3.2 Weeks",
        topics: [
          "What is React Native?",
          "Expo framework",
          "Environment set-up",
          "Creating the first app",
        ],
      },
      {
        title: "Components and structure of a React Native app",
        tag: "Components and structure of a React Native app",
        duration: "3.2 Weeks",
        topics: ["Core Components"],
      },
      {
        title: "Navigation in a React Native app",
        tag: "Navigation in a React Native app",
        duration: "3.2 Weeks",
        topics: [
          "Expo Router",
          "Built-in layouts",
          "Nested navigators",
          "Passing parameters",
        ],
      },
      {
        title: "Handling user inputs and events",
        tag: "Handling user inputs and events",
        duration: "3.2 Weeks",
        topics: [
          "Input Component",
          "Using Touchable components",
          "Handling gestures",
          "Buttons",
        ],
      },
      {
        title: "Displaying and managing lists of data",
        tag: "Displaying and managing lists of data",
        duration: "3.2 Weeks",
        topics: [
          "FlatList Component",
          "SectionList Component",
          "Optimizing list Performance",
        ],
      },
      {
        title: "Reviewing and applying concepts",
        tag: "Reviewing and applying concepts",
        duration: "3.2 Weeks",
        topics: [
          "Building a small project that incorporates navigation, user inputs, and lists",
        ],
      },
      {
        title: "State management in React Native",
        tag: "State management in React Native",
        duration: "3.2 Weeks",
        topics: [
          "useState and useEffect hooks",
          "Context API",
          "Introduction to Redux",
        ],
      },
      {
        title: "Forms in React Native",
        tag: "Forms in React Native",
        duration: "3.2 Weeks",
        topics: ["Form integration using react-form-hook"],
      },
      {
        title: " Expo SDK and its Modules",
        tag: " Expo SDK and its Modules",
        duration: "3.2 Weeks",
        topics: ["Working with Camera", "Using Pickers"],
      },
      {
        title: "Animations in React Native",
        tag: "Animations in React Native",
        duration: "3.2 Weeks",
        topics: [
          "Animated API",
          "LayoutAnimation",
          "Introduction to Reanimated Library",
        ],
      },
      {
        title: "Background Processes",
        tag: "Background Processes",
        duration: "3.2 Weeks",
        topics: [
          "Defining and registering background tasks.",
          "Expo TaskManager",
        ],
      },
      {
        title: "Implementing Offline Storage",
        tag: "Implementing Offline Storage",
        duration: "3.2 Weeks",
        topics: ["AsyncStorage", "SecureStore", "Caching"],
      },
      {
        title: "Final project",
        tag: "Final project",
        duration: "3.2 Weeks",
        topics: [
          "Developing, debugging, testing and deploying a complete Application",
        ],
      },
    ],
    id: 11,
  },
  {
    category: "appDeveloper",
    img: "https://www.fullstackgurupune.com/storage/blog_icons/f5f1c4a66c4f6f831f2f66ca42d24841.png",
    title: "Full Stack Java",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    paragraph:
      "Java is a widely-used, object-oriented programming language known for its portability, scalability, and security. It is an ideal choice for building large-scale applications across various platforms. Java features a clear, class-based structure and emphasizes code readability. It uses braces to define code blocks, making it easy for developers to manage complex projects and maintain code over time.",
    longDesc: [
      "HTML",
      " CSS",
      "Bootstrap",
      "JavaScript",
      "Foundation of Java",
      "Fundamental of Java",
      "Object-oriented programming (OOP)",
      "SQL",
      "JDBC",
      "Servlet",
      "JSP",
      "Framework - Springboot , Hibernate",
      "Project",
    ],
    Mode: "Online/Offline",
    Duration: "25 Days",
    FAQ: [
      {
        id: "",
        question: "What is Core Java?",
        answer: "Core Java refers to the basic features of the Java programming language, including object-oriented programming principles, core libraries, and essential APIs like collections, threads, and input-output."
      },
      {
        id: "",
        question: "What are the main principles of Object-Oriented Programming (OOP)?",
        answer: "The four main principles are:",
        answerPoints: [
          "Encapsulation",
          "Inheritance",
          "Polymorphism",
          "Abstraction"
        ],
      },
      {
        id: "",
        question: "What is the difference between JDK, JRE, and JVM?",
        answer: "",
        answerPoints: [
          "JDK (Java Development Kit): A development environment for building applications.",
          "JRE (Java Runtime Environment): A runtime environment for executing Java applications.",
          "JVM (Java Virtual Machine): Runs Java bytecode on any platform."
        ],
      },
      {
        id: "",
        question: "What is the Java Collections Framework?",
        answer: "The Java Collections Framework provides classes and interfaces (like List, Set, Map, etc.) to store and manipulate groups of objects efficiently."
      },
      {
        id: "",
        question: "What is a Java thread?",
        answer: "A thread is a lightweight sub-process that allows concurrent execution of tasks within a program."
      },
      {
        id: "",
        question: "How is memory managed in Java?",
        answer: "Java uses Garbage Collection, which automatically removes unused objects from memory to free up space."
      },
      {
        id: "",
        question: "What is the purpose of the final keyword?",
        answer: "",
        answerPoints: [
          "final variable: Its value cannot be changed.",
          "final method: Cannot be overridden.",
          "final class: Cannot be subclassed.",
        ],
      },
      {
        id: "",
        question: "What is Advanced Java?",
        answer: "Advanced Java focuses on web-based, network-centric, and enterprise-level application development using technologies like JDBC, Servlets, JSP, and JEE."
      },
      {
        id: "",
        question: "What is JDBC, and why is it used?",
        answer: "JDBC (Java Database Connectivity) is an API that allows Java applications to interact with databases."
      },
      {
        id: "",
        question: "What is the difference between Servlets and JSP?",
        answer: "",
        answerPoints: [
          "Servlets are Java classes that handle HTTP requests and responses.",
          "JSP (JavaServer Pages) allows developers to write dynamic web content using HTML and embedded Java code."
        ]
      },
      {
        id: "",
        question: "What is an Enterprise Java Bean (EJB)?",
        answer: "EJB is a server-side software component used to encapsulate business logic in enterprise applications."
      },
      {
        id: "",
        question: "What is the purpose of the Hibernate framework?",
        answer: "What is the purpose of the Hibernate framework?"
      },
      {
        id: "",
        question: "How does a web application work in Java?",
        answer: "A web application typically follows the MVC (Model-View-Controller) architecture:",
        answerPoints: [
          "Model: Represents data and business logic.",
          "View: Displays data to the user.",
          "Controller: Handles user requests and interacts with the model."
        ]
      },
      {
        id: "",
        question: "What is Spring Boot?",
        answer: "Spring Boot is a framework designed to simplify the development of Spring-based applications by reducing boilerplate code and configuration."
      },
      {
        id: "",
        question: "What are the main features of Spring Boot?",
        answer: "",
        answerPoints: [
          "Auto-configuration",
          "Embedded servers (like Tomcat or Jetty)",
          "Opinionated defaults",
          "Production-ready features (e.g., monitoring, health checks)"
        ]
      },
      {
        id: "",
        question: "How does Spring Boot differ from the Spring Framework?",
        answer: "Spring Boot is a pre-configured version of the Spring Framework, enabling developers to build applications faster with minimal configuration."
      },
      {
        id: "",
        question: "What is a Spring Boot Starter?",
        answer: "Spring Boot Starters are dependency descriptors that simplify dependency management. Examples include spring-boot-starter-web and spring-boot-starter-data-jpa."
      },
      {
        id: "",
        question: "What is the purpose of the application.properties file?",
        answer: "It is used to define configurations like database connections, server port, logging, etc."
      },
      {
        id: "",
        question: "What is a RESTful Web Service in Spring Boot?",
        answer: "A RESTful web service provides HTTP-based endpoints that enable CRUD operations. These are implemented using annotations like @RestController and @RequestMapping."
      },
      {
        id: "",
        question: "What are the advantages of using Spring Boot for microservices?",
        answer: "",
        answerPoints: [
          "Lightweight",
          "Easy integration with other technologies",
          "Built-in support for distributed systems (e.g., Eureka, Zuul, and Spring Cloud)",
        ],
      },
      {
        id: "",
        question: "How do you handle exceptions in Spring Boot?",
        answer: "You can use:",
        answerPoints: [
          "@ExceptionHandler annotation to handle specific exceptions.",
          "•	Global Exception Handling with @ControllerAdvice."
        ]
      },
      {
        id: "",
        question: "How does Spring Boot implement security?",
        answer: "Spring Boot integrates with Spring Security, allowing developers to implement authentication and authorization."
      },
      {
        id: "",
        question: "What is the difference between @Component, @Service, @Repository, and @Controller in Spring Boot?",
        answer: "",
        answerPoints: [
          "@Component: Generic stereotype for a Spring-managed bean.",
          "@Service: Specializes in business logic.",
          "@Repository: Specializes in database interaction",
          "@Controller: Handles web requests in MVC-based applications."
        ]
      },
      {
        id: "",
        question: "What is Java?",
        answer: 'Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). It is platform-independent, meaning "write once, run anywhere" (WORA).'
      },
      {
        id: "",
        question: "What are the main features of Java?",
        answer: '',
        answerPoints: [
          "Object-Oriented",
          "Platform-Independent",
          "Secure",
          "Robust",
          "Multithreaded",
          "High Performance (with JIT Compiler)"
        ]
      },
      {
        id: "",
        question: "What is the difference between JDK, JRE, and JVM?",
        answer: '',
        answerPoints: [
          "JDK: Java Development Kit; includes tools for developing and running Java applications.",
          "JRE: Java Runtime Environment; provides libraries and JVM for running Java programs.",
          "JVM: Java Virtual Machine; executes Java bytecode."
        ]
      },
      {
        id: "",
        question: "What are Java's data types?",
        answer: 'Java has two types of data types:',
        answerPoints: [
          "Primitive (int, double, char, boolean, etc.)",
          "Non-Primitive (String, Arrays, Classes, etc.)"
        ]
      },
      {
        id: "",
        question: "What is a Class and an Object in Java?",
        answer: '',
        answerPoints: [
          "Class: A blueprint for creating objects.",
          "Object: An instance of a class."
        ]
      },
      {
        id: "",
        question: "What is Advanced Java?",
        answer: 'Advanced Java refers to APIs like JDBC, Servlets, JSPs, and frameworks used for building web-based or enterprise-level applications.'
      },
      {
        id: "",
        question: "What is the difference between Core Java and Advanced Java?",
        answer: '',
        answerPoints: [
          "Core Java: Covers basics like OOP, threads, collections, etc.",
          "Advanced Java: Focuses on web and enterprise application development (JSP, Servlets, JDBC)."
        ]
      },
      {
        id: "",
        question: "What is JDBC, and why is it used?",
        answer: 'JDBC (Java Database Connectivity) is an API that allows Java applications to interact with databases using SQL.'
      },
      {
        id: "",
        question: "What is a Servlet?",
        answer: 'A Servlet is a Java program that runs on a server and processes client requests (like form submissions) and generates dynamic responses.'
      },
      {
        id: "",
        question: "What is JSP?",
        answer: 'JSP (Java Server Pages) is a technology for building dynamic web pages with HTML and embedded Java code.'
      },
      {
        id: "",
        question: "What is Spring Boot?",
        answer: 'Spring Boot is an open-source Java-based framework used to create stand-alone, production-grade Spring applications with minimal configuration.'
      },
      {
        id: "",
        question: "How is Spring Boot different from Spring Framework?",
        answer: "",
        answerPoints: [
          "Spring Framework: Requires a lot of configuration.",
          "Spring Boot: Provides default configurations, making development easier and faster."
        ],
      },
      {
        id: "",
        question: "What are the key features of Spring Boot?",
        answer: "",
        answerPoints: [
          "Auto-configuration",
          "Embedded servers (like Tomcat, Jetty)",
          "Starter dependencies",
          "Actuator for monitoring"
        ],
      },
      {
        id: "",
        question: "What are Spring Boot Starters?",
        answer: "Starters are pre-defined dependencies in Spring Boot that reduce the need to manually add libraries. Examples:",
        answerPoints: [
          "spring-boot-starter-web: For building REST APIs.",
          "spring-boot-starter-data-jpa: For working with JPA and Hibernate."
        ],
      },
      {
        id: "",
        question: "What is the purpose of the application.properties file?",
        answer: "The application.properties (or application.yml) file is used to configure application settings like database connections, server ports, etc."
      },
      {
        id: "",
        question: "How do you create a Spring Boot application?",
        answer: "",
        answerPoints: [
          "Use Spring Initializr (online tool).",
          "Add dependencies like Web, JPA, MySQL, etc.",
          "Import the project into an IDE.",
        	"Write code for controllers, services, and repositories."

        ],
      },
      {
        id: "",
        question: "What is Spring Boot Actuator?",
        answer: "Spring Boot Actuator provides endpoints for monitoring and managing your application, such as /health, /metrics, etc."
      },
      {
        id: "",
        question: "How does Spring Boot handle dependency injection?",
        answer: "Spring Boot uses the @Autowired annotation to inject dependencies into beans automatically."
      },
      {
        id: "",
        question: "What is the difference between @RestController and @Controller?",
        answer: "",
        answerPoints: [
          "@Controller: Used to return views (like HTML or JSP).",
          "@RestController: Used to return JSON or XML responses directly (combines @Controller and @ResponseBody)."
        ],
      },
      {
        id: "",
        question: "How can you connect Spring Boot to a database?",
        answer: "",
        answerPoints: [
          "Add database dependency (e.g., MySQL, PostgreSQL).",
          "Configure database details in application.properties: properties Copy code spring.datasource.url=jdbc:mysql://localhost:3306/db_name spring.datasource.username=root spring.datasource.password=password",
          "Use Spring Data JPA for data operations."
        ],
      },
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "HTML",
        tag: "HTML",
        duration: "3.2 Weeks",
        topics: [
          "Overview of Full Stack Web Application and basics of HTML",
          "Using Tables and Lists in HTML",
          "Creating HTML Forms"
        ],
      },
      {
        title: "CSS",
        tag: "CSS",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to CSS & CSS Selectors",
          "The Box Model and Layouts",
        ],
      },
      {
        title: "Bootstrap",
        tag: "Bootstrap",
        duration: "3.2 Weeks",
        topics: [
          "Understanding Bootstrap",
          "Bootstrap Elements and Forms",
          "Bootstrap Components",
        ],
      },
      {
        title: "JavaScript",
        tag: "JavaScript",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to JavaScript",
          "Javascript Conditions Statements & Loops",
          "Arrays & Objects",
          "Javascript Events & Functions",
        ],
      },
      {
        title: "Java Pre Programming",
        tag: "Java Pre Programming",
        duration: "3.2 Weeks",
        topics: [
          "Introduction To Programming",
          "Types of Printing Statements In Java",
          "Stages Of Java Program",
          "Tokens",
          "Data Types",
          "Variables",
          "Operators",
          "DMS ( Decision Making Statement )",
          "Loops",
          "Type Casting",
        ],
      },
      {
        title: "Core Java",
        tag: "Core Java",
        duration: "3.2 Weeks",
        topics: [
          "Introduction To Core Java",
          "Types Of Language",
          "Types Of Platform",
          "Difference Between JVM , JRE , JDK",
          "Features Of Java",
          "Types Of Variable",
          "Methods",
          "Fundamentals Of OOP'S",
          "Construct",
          "Object Oriented Programming",
          "Types Of OOPS Concepts",
          "Collection (List ,Array List, Lined List , Set , Map ……….)",
          "Scanner Class",
          "Garbage Collection",
          "Access Specifier",
          "Exception",
          "Wrapper Class",
          "Basic Program ( According To Interview )",
          "Programs On String ( According To Interview )",
          "Methods In String",
          "Programs On Array ( According To Interview )",
          "Programs On Pa ern ( According To Interview )",
          "Multi Threading",
          "Generic Collection",
          "JAVA SE 8 Features",
        ],
      },
      {
        title: "J2EE",
        tag: "J2EE",
        duration: "3.2 Weeks",
        topics: [
          "Introduction To J2EE (Advance Java)",
          "Coupling",
          "JAR File",
          "API",
          "JDBC API",
          "JDBC Driver",
          "Types Of Statements",
          "Place Holder",
        ],
      },
      {
        title: "Servlet",
        tag: "Servlet",
        duration: "3.2 Weeks",
        topics: [
          "Introduction To Server",
          "Types Of Server",
          "Introduction To Servlet",
          "Generic Servlet",
          "Http Servlet",
          "Introduc on To UI And Form Data",
          "Servlet Chaining",
          "Servlet Life Cycle",
        ],
      },
      {
        title: "JSP ( Java Servlet Page )",
        tag: "JSP ( Java Servlet Page )",
        duration: "3.2 Weeks",
        topics: [
          "Introduction To JSP",
          "Content Of JSP",
          "Implicit Object In JSP",
          "Criteria Of JSP",
          "Perform Java Code On JSP",
          "Advantages Of JSP Over Servlet",
        ],
      },
      {
        title: "Framework",
        tag: "Framework",
        duration: "3.2 Weeks",
        topics: [
          "Introduction To Spring",
          "Working With Rest APIs",
          "Spring Data",
          "Working With Hibernate , And Advance DB Concepts",
          "Working With Relational Database Mapping",
          "Spring MVC With Thymeleaf",
          "Spring Security",
          "Introduction To Spring Cloud And WebApp Deployment",
          "Revision Of Springboot And Hibernat",
          "Project",
        ],
      },
      {
        title: "Database",
        tag: "Database",
        duration: "3.2 Weeks",
        topics: [
          "Introduction To SQL",
          "Types Of DBMS",
          "EF Codd Rules",
          "Data Type",
          "Constraints",
          "Operator",
          "Types of SQL Languages",
          "Multi Row Function",
          "Subquery",
          "Joins",
          "DML (Data Manipulation Language)",
          "DDL (Data Definition Language)",
        ],
      },
    ],
    id: 12,
  },
  {
    category: "appDeveloper",
    img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
    title: "React Developer",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    paragraph:
      "React.js is a popular JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components, making development more efficient and scalable. React.js uses a declarative syntax, focusing on the state of components to manage UI updates. It efficiently re-renders only the necessary parts of a page, optimizing performance and enhancing user experience.",
    longDesc: [
      "Introduction of ReactJS",
      "Javascript",
      "Bootstrap",
      "Props & PropsTypes",
      "State and Handling Events",
      "React hooks",
      "Redux & Thunk middleware",
    ],
    Mode: "Online/Offline",
    Duration: "25 Days",
    FAQ: [
      {
        id: "",
        question: " What is the duration of the course?",
        answer: "The Duration is 25 sessions, It will last for around a month.",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "How will I learn in this course?",
        answer: "This course combines live or in-person classroom training with practical exercises, coding assignments, and project-based learning. You’ll have hands-on opportunities to write code and develop real-world projects, ensuring both theoretical understanding and practical expertise."
      },
      {
        id: "",
        question: "Are offline classrooms the only option available?",
        answer: "We provide sessions in live, offline, and hybrid formats to suit your schedule."
      },
      {
        id: "",
        question: "May I pay in instalments?",
        answer: "Yes, you can pay in instalments. The counsellors at the centre will assist you in setting up a suitable payment plan."
      },
      {
        id: "",
        question: "Will I receive a certificate upon completion?",
        answer: "Yes, upon successfully completing the course, you will receive a certificate of completion that you can showcase on your resume or LinkedIn."
      },
      {
        id: "",
        question: "Does this course offer job assistance or career support?",
        answer: "We guarantee internships for all our students. Initially, these are unpaid, but based on performance, there is potential to transition into paid internships. Additionally, we offer job assistance."
      },
      {
        id: "",
        question: "Are there any recommended resources or reading materials?",
        answer: "Yes, the course will likely provide supplementary resources such as documentation, video tutorials to help you deepen your knowledge."
      },
      {
        id: "",
        question: "Can I access the course materials after completing the course?",
        answer: "Definitely, you will have lifetime access to the course materials all our courses are hosted on a learning portal Actify Learning Management Portal, including updates and new content."
      },
      {
        id: "",
        question: "What is the industry relevance of React?",
        answer: "React is highly relevant in the industry due to its efficiency in building dynamic, user-friendly interfaces and its widespread adoption by top companies for web and mobile application development."
      },
      {
        id: "",
        question: "Some Industry use cases for React",
        answer: "React is used for building dynamic web applications (e.g., Facebook, Instagram), single-page applications (SPAs), e-commerce platforms, dashboards, mobile apps (with React Native), and real-time data visualization tools."
      },
      {
        id: "",
        question: "Do I need to know JavaScript before learning React?",
        answer: "Yes, React is built on JavaScript, so a strong understanding of JavaScript (including ES6 features like arrow functions, classes, destructuring, and modules) is essential before diving into React."
      },
      {
        id: "",
        question: "What are the prerequisites for learning React?",
        answer: "Basic knowledge of HTML and CSSUnderstanding of JavaScript (ES6 features like functions, classes, promises, and arrays)Familiarity with the DOM (Document Object Model) Optional: Some experience with JavaScript libraries like jQuery or frameworks like Angular might be helpful but not necessary."
      },
      {
        id: "",
        question: "Is React only for building web applications?",
        answer: "No, React is not limited to just web apps. React Native allows you to build mobile applications for iOS and Android using the same React concepts. We provide training on React Native as well."
      },
      {
        id: "",
        question: "What are the key features of React.js?",
        answer: 'Component-based architecture: Build reusable UI components. Virtual DOM: Optimizes updates to the real DOM for better performance. State management: Allows you to manage the app’s data flow. React Hooks: Functions that let you "hook into" React state and lifecycle features from function components.'
      },
      {
        id: "",
        question: "What is the difference between React and other frameworks like Angular or Vue.js?",
        answer: "React is a  library focused on the UI layer. It's flexible and gives you more control over how you structure your app, allowing you to choose other tools for state management, routing, etc. Angular: A full-fledged framework with more built-in features like routing, state management, and form validation. Vue.js: A progressive framework similar to React, but it's more opinionated in how you should structure your app, offering tools like state management and routing out of the box."
      },
      {
        id: "",
        question: "Is React difficult to learn?",
        answer: 'React is beginner-friendly, especially for developers with a background in JavaScript. However, it does come with a learning curve, especially when you dive into concepts like hooks, context, and state management.?'
      },
      {
        id: "",
        question: "Do I need to learn Redux for React?",
        answer: "Redux is a state management library that is often used in large React applications to handle complex state management. You don't need to learn Redux right away, but if your app grows in complexity, learning Redux might be beneficial. ***Our curriculum will train you in Redux as well."
      },
      {
        id: "",
        question: "Can I use React without Redux?",
        answer: "Yes, you can use React without Redux. React's built-in state management and context API are sufficient for many applications. Redux is useful for managing global or shared state in larger applications."
      },
      {
        id: "",
        question: "Should I learn React or Vue.js first?",
        answer: "If you're already comfortable with JavaScript, React is a great choice due to its large ecosystem, popularity, and flexibility. Vue.js is also a good option if you want something simpler and more opinionated, but React is more widely used in the industry."
      },
      {
        id: "",
        question: "What are the key features of React.js?",
        answer: 'Component-based architecture: Build reusable UI components. Virtual DOM: Optimizes updates to the real DOM for better performance. State management: Allows you to manage the app’s data flow. React Hooks: Functions that let you "hook into" React state and lifecycle features from function components.'
      },
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "Introduction of React.JS",
        tag: "Introduction of React.JS",
        duration: "3.2 Weeks",
        topics: [
          "Overview of React and its ecosystem",
          "Installing Node.js and npm",
          "Create React App (CRA)",
          "Project Structure & package.json explanation",
        ],
      },
      {
        title: "Introduction to HTML",
        tag: "Introduction to HTML",
        duration: "3.2 Weeks",
        topics: ["Important HTML elements", "Semantic tags & its importance"],
      },
      {
        title: "Introduction CSS",
        tag: "Introduction CSS",
        duration: "3.2 Weeks",
        topics: [
          "Vanilla CSS",
          "Introduction to Bootstrap",
          "Introduction to Tailwind",
        ],
      },
      {
        title: "Javascript Refresher",
        tag: "Javascript Refresher",
        duration: "3.2 Weeks",
        topics: ["Function & Events", "Objects", "Array", "Es6"],
      },
      {
        title: "JSX and Components",
        tag: "JSX and Components",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to JSX",
          "Creating functional and class components",
          "Introduction to Vite",
          "Comparison between Vite and React",
        ],
      },
      {
        title: "Props & PropTypes",
        tag: "Props & PropTypes",
        duration: "3.2 Weeks",
        topics: [
          "Props & Props types (Default Props types)",
          "Default & named export file",
        ],
      },
      {
        title: "State and Handling events",
        tag: "State and Handling events",
        duration: "3.2 Weeks",
        topics: [
          "Understanding Component State and its role",
          "Difference between state and props",
          "Event Handling in React",
          "Event Binding",
        ],
      },
      {
        title: "Conditional Rendering",
        tag: "Conditional Rendering",
        duration: "3.2 Weeks",
        topics: ["Using conditional statements in React", "Ternary operators"],
      },
      {
        title: "React Forms",
        tag: "React Forms",
        duration: "3.2 Weeks",
        topics: ["Implementing React forms"],
      },
      {
        title: "Managing State in React",
        tag: "Managing State in React",
        duration: "3.2 Weeks",
        topics: [
          "Managing state between parent and child component",
          "Prop-drilling",
          "Context API",
        ],
      },
      {
        title: "Class-Based Components",
        tag: "Class-Based Components",
        duration: "3.2 Weeks",
        topics: [
          "Creating class components",
          "Component lifecycle methods",
          "Handling state-in-class components",
        ],
      },
      {
        title: "Introduction to Routers, Nested Routes and Navigation",
        tag: "Introduction to Routers, Nested Routes and Navigation",
        duration: "3.2 Weeks",
        topics: [
          "Setting up React Router",
          "Basic Navigation",
          "Nested Router",
          "Programmatic Navigation",
          "Handling route Parameters",
        ],
      },
      {
        title: "React Hooks",
        tag: "React Hooks",
        duration: "3.2 Weeks",
        topics: [
          "Navigation in React applications",
          "UseState",
          "UseEffect",
          "Advanced hooks",
        ],
      },
      {
        title: "React Redux and Redux toolkit",
        tag: "React Redux and Redux toolkit",
        duration: "3.2 Weeks",
        topics: [
          "State Management in React",
          "Actions, reducers and store",
          "Connecting Redux to React",
          "AsyncThunk usage",
        ],
      },
      {
        title: "Project 2",
        tag: "Project 2",
        duration: "3.2 Weeks",
        topics: ["Project 2"],
      },
    ],
    id: 13,
  },
  {
    category: "appDeveloper",
    img: "https://thopstech.com/wp-content/uploads/2022/07/python.jpg",
    title: "Full Stack Python",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    paragraph:
      "Python is a versatile and widely-used high-level programming language known for its simplicity and readability, making it an excellent choice for both beginners and experienced developers. Python has a clean and readable syntax, emphasizing code readability. It uses indentation to define code blocks.",
    longDesc: [
      "Fundamentals of python",
      "Functions and loops",
      "Data structures(arrays, binary, stack, etc.)",
      "Advanced python",
      "Object-oriented programming (OOP)",
      "Projects - 3",
      "Django basics",
      "Creating Models and Databases",
      "Views and URLs",
      "Queries in Django",
      "Projects - 7",
    ],
    Mode: "Online/Offline",
    Duration: "25 Days",
    FAQ: [
      {
        id: "1",
        question: "How is Python used in the industry?",
        answer: "Python is crucial for:",
        answerPoints: [
          "Data manipulation and automation.",
          "Building machine learning models.",
          "Developing scalable solutions for analytics and reporting.",
        ],
      },
      {
        id: "2",
        question: "How do you propose Python as a service?",
        answer: "We can offer:",
        answerPoints: [
          "Automation of data workflows to reduce manual effort.",
          "Development of machine learning models for predictive analytics.",
          "Scripting solutions to integrate multiple systems efficiently.",
        ],
      },
      {
        id: "3",
        question: "What case studies are handled in Python?",
        answer: "Examples include:",
        answerPoints: [
          "Predicting customer churn for a retail client.",
          "Automating large-scale data cleaning and transformation.",
          "Building recommendation systems for e-commerce platforms.",
        ],
      },
      {
        id: "4",
        question: "Is Python suitable for non-IT professionals?",
        answer:
          "Yes! With a focus on beginner-friendly modules, non-IT professionals can use Python for tasks like automation and basic analytics without deep programming knowledge.",
      },
      {
        id: "5",
        question: "What are the training modes for Python?",
        answer:
          "Training is available in hybrid, live, and offline formats to suit different learning needs.",
      },
      {
        id: "6",
        question: "What salary can Python professionals expect?",
        answer:
          "Python roles such as Data Engineer or Junior Developer start at ₹4.5–9 LPA, depending on the domain.",
      },
      ,
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "HTML",
        tag: "HTML",
        duration: "3.2 Weeks",
        topics: [
          "Overview of Full Stack Web Application and basics of HTML",
          "Using Tables and Lists in HTML",
          "Creating HTML Forms",
        ],
      },
      {
        title: "CSS",
        tag: "CSS",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to CSS & CSS Selectors",
          "The Box Model and Layouts",
        ],
      },
      {
        title: "Bootstrap",
        tag: "Bootstrap",
        duration: "3.2 Weeks",
        topics: [
          "Understanding Bootstrap",
          "Bootstrap Elements and Forms",
          "Bootstrap Components",
        ],
      },
      {
        title: "JavaScript",
        tag: "JavaScript",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to JavaScript",
          "Javascript Conditions Statements & Loops",
          "Arrays & Objects",
          "Javascript Events & Functions",
        ],
      },
      {
        title: "Python Basics Topics",
        tag: "Python Basics Topics",
        duration: "3.2 Weeks",
        topics: [
          "What is Python",
          "Installing Python",
          "Modules & Pip",
          "Data Types.",
          "Variables.",
          "Operators.",
          "Conditional Statements.",
          "Control Flow",
          "Loops.",
          "Functions.",
          "Quiz/Assignment",
        ],
      },
      {
        title: "Python Intermediate Topics",
        tag: "Python Intermediate Topics",
        duration: "3.2 Weeks",
        topics: [
          "Data Structures",
          "Exception Handling",
          "Working with Files",
          "Object Oriented Programming",
          "Inheritance",
          "Other OOP concepts",
          "Environments",
          "Mini Project 1",
          "Quiz/Assignment",
        ],
      },
      {
        title: "Python Advance Topics",
        tag: "Python Advance Topics",
        duration: "3.2 Weeks",
        topics: [
          "Lambda Functions.",
          "Generators & Decorators.",
          "Regular Expression.",
          "Multi threading & Multi processing.",
          "Working with CSV Files.",
          "Working with APIs.",
          "Working with JSON Files",
          "Mini project 2",
        ],
      },
      {
        title: "Django Topics",
        tag: "Django Topics",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to Django",
          "Django project Structure",
          "Models and Databases",
          "Views and URLs",
          "Templates and Static Files",
          "Building a Mobile Shop page.",
          "Building Book Management System",
          "Django forms",
          "Middleware and Signals in Django",
          "User authentication and authorization",
          "Messages in Django",
          "Django Rest Framework",
          "Projects: 1.Building a CRUD project. 2.Building an Online Market place"
        ],
      }
    ],
    id: 14,
  },
  {
    category: "appDeveloper",
    img: "https://quickops.pt/wp-content/uploads/2023/08/MicrosoftTeams-image-125.png",
    title: "Front End Developer",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    paragraph:
      "A frontend developer is a skilled professional focused on building the user-facing components of web applications. They use HTML, CSS, and JavaScript to create interactive and visually appealing websites. Frontend developers prioritize user experience (UX) and user interface (UI) design, ensuring seamless navigation and responsive layouts across devices. They work closely with backend developers to integrate APIs and services.",
    longDesc: [
      "Fundamentals of python",
      "Functions and loops",
      "Data structures(arrays, binary, stack, etc.)",
      "Advanced python",
      "Object-oriented programming (OOP)",
      "Projects - 3",
      "Django basics",
      "Creating Models and Databases",
      "Views and URLs",
      "Queries in Django",
      "Projects - 7",
    ],
    Mode: "Online/Offline",
    Duration: "25 Days",
    FAQ: [
      {
        id: "",
        question: "What is the duration of the course?",
        answer: "The Duration is 25 sessions, It will last for around a month.",
      },
      {
        id: "",
        question: "Is this course suitable for beginners?",
        answer: "Yes! This course is designed to take beginners through the basics of HTML, CSS, Tailwind, and Bootstrap. No prior knowledge of frontend development is required.",
      },
      {
        id: "",
        question: "Do I need any prior experience to take this course?",
        answer: "No prior experience is necessary. This course starts with the basics and gradually advances to more complex topics, making it accessible for complete beginners.",
      },
      {
        id: "",
        question: "How will I learn in this course?",
        answer: "This course combines live or in-person classroom training with practical exercises, coding assignments, and project-based learning. You’ll have hands-on opportunities to write code and develop real-world projects, ensuring both theoretical understanding and practical expertise.",
      },
      {
        id: "",
        question: "Are offline classrooms the only option available?",
        answer: "We provide sessions in live, offline, and hybrid formats to suit your busy schedule.",
      },
      {
        id: "",
        question: "May I pay in instalments?",
        answer: "Yes, you can pay in instalments. The counsellors at the centre will assist you in setting up a suitable payment plan.",
      },
      {
        id: "",
        question: "Will I receive a certificate upon completion?",
        answer: "Yes, upon successfully completing the course, you will receive a certificate of completion that you can showcase on your resume or LinkedIn.",
      },
      {
        id: "",
        question: "Does this course offer job assistance or career support?",
        answer: "We guarantee internships for all our students. Initially, these are unpaid, but based on performance, there is potential to transition into paid internships. Additionally, we offer job assistance.",
      },
      {
        id: "",
        question: "Are there any recommended resources or reading materials?",
        answer: "Yes, the course will likely provide supplementary resources such as documentation, blog posts, and video tutorials to help you deepen your knowledge.",
      },
      {
        id: "",
        question: "Can I access the course materials after completing the course?",
        answer: "Definitely, you will have lifetime access to the course materials all our courses are hosted on a learning portal Actify Learning Management Portal, including updates and new content.",
      },
      {
        id: "",
        question: "What topics will I learn in HTML?",
        answer: "You will learn about the structure of HTML documents, elements, tags, attributes, forms, tables, semantic HTML, and how to create accessible websites.",
      },
      {
        id: "",
        question: "Will I learn HTML5 in this course?",
        answer: "Yes of course , HTML5 is covered in detail.",
      },
      {
        id: "",
        question: "What will I learn in CSS?",
        answer: "You'll cover topics such as CSS selectors, box model, layout techniques (flexbox, grid), positioning, responsive design, and animations.",
      },
      {
        id: "",
        question: "Does this course cover CSS3 features?",
        answer: "Yes, the course includes CSS3 features like transitions, transformations, animations, and advanced layout techniques like Flexbox and CSS Grid.",
      },
      {
        id: "",
        question: "What is Tailwind CSS, and why is it included in this course?",
        answer: "Tailwind CSS is a utility-first CSS framework that allows you to style HTML elements using predefined classes. This course teaches you how to use Tailwind to rapidly create layouts without writing custom CSS.",
      },
      {
        id: "",
        question: "Will I learn how to customize Tailwind CSS in this course?",
        answer: "Tailwind CSS is a utility-first CSS framework that allows you to style HTML elements using predefined classes. This course teaches you how to use Tailwind to rapidly create layouts without writing custom CSS.",
      },
      {
        id: "",
        question: "What is Tailwind CSS, and why is it included in this course?",
        answer: "Yes, the course will guide you through configuring and customizing Tailwind, managing styles, and using the Tailwind configuration file.",
      },
      {
        id: "",
        question: "What is Bootstrap, and what will I learn about it?",
        answer: "Bootstrap is a popular front-end framework that helps you quickly design responsive and mobile-first websites. You will learn how to use its grid system, components (like buttons, forms, navbars), and utilities to build modern web pages.",
      },
      {
        id: "",
        question: "How does Bootstrap compare to Tailwind CSS?",
        answer: "While both frameworks help in designing websites, Bootstrap comes with pre-designed components and a responsive grid system. Tailwind, on the other hand, is utility-first, giving you more flexibility but requiring you to design elements yourself using its classes.",
      },
      {
        id: "",
        question: "Will I learn responsive web design in this course?",
        answer: "Yes, responsive design is a key part of this course. You'll learn how to create websites that work on all devices, from mobile phones to desktops, using techniques like media queries, the grid system in Bootstrap, and Flexbox and CSS Grid in plain CSS.",
      },
      {
        id: "",
        question: "Can I build my own project as part of the course?",
        answer: "Absolutely! You'll have the option to work on a personal project towards the end of the course where you can apply what you've learned and showcase your skills or build your portfolio.",
      },
      {
        id: "",
        question: "What tools or software will I need for the course?",
        answer: "You will need a code editor (e.g., VSCode or Sublime Text), a modern web browser (Chrome, Firefox), and basic knowledge of how to use the terminal (for setting up and running projects locally).",
      },
      {
        id: "",
        question: "Do I need to install any frameworks or libraries?",
        answer: "Yes, you will learn how to set up Tailwind CSS, Bootstrap, and possibly npm (Node Package Manager) to manage packages. All the detailed instructions will be provided during the course.",
      },
      {
        id: "",
        question: "What kind of support will I receive during the course?",
        answer: "You will get access to:",
        answerPoints: [
          "Experienced trainers and mentors.",
          "Practical assignments and real-world projects.",
          "Regular assessments to track your progress",
        ],
      },
      {
        id: "",
        question: "What happens after completing the course?",
        answer: "",
        answerPoints: [
          "Assistance with job placements.",
          "Resume and LinkedIn profile-building support.",
          "Continued access to course materials for reference.",
        ],
      },
      {
        id: "",
        question: "Do you provide certifications for these courses?",
        answer:
          "Yes, a course completion certificate is provided, which is recognized in the industry.",
      },
      {
        id: "",
        question: "Are your courses suitable for working professionals?",
        answer:
          "Absolutely! Our flexible schedules, including weekend and evening classes, cater to the needs of working professionals.",
      },
      {
        id: "",
        question: "How do these courses help me transition into a new career?",
        answer:
          "Our courses are project-focused and designed to teach industry-relevant skills. This ensures that you are job-ready by the end of the course.",
      },
    ],
    courseModule: [
      {
        title: "HTML",
        tag: "HTML",
        duration: "3.2 Weeks",
        topics: [
          "Overview of Full Stack Web Application and basics of HTML",
          "Using Tables and Lists in HTML",
          "Creating HTML Forms",
          "HTML Graphics",
          "HTML 5 Layouts and Input Validation Attributes",
          "IFrames, Geolocation API and Drag and Drop features",
          "Interview Questions And Comprehensive DIY"
        ],
      },
      {
        title: "CSS",
        tag: "CSS",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to CSS",
          "CSS Selectors and Properties",
          "The Box Model and Layouts",
          "Responsive Design with CSS",
          "Typography and Text Styling",
          "Working with Colors and Backgrounds",
          "CSS Transitions and Animations",
          "Exploring CSS Frameworks",
          "Miniproject And Interview Question"
        ],
      },
      {
        title: "BootStrap",
        tag: "BootStrap",
        duration: "3.2 Weeks",
        topics: [
          "Understanding Bootstrap",
          "Bootstrap Elements and Forms",
          "Bootstrap Components",
          "Interview Questions and Comprehensive DIY"
        ],
      },
      {
        title: "JavaScript",
        tag: "JavaScript",
        duration: "3.2 Weeks",
        topics: [
          "Introduction to JavaScript",
          "Javascript Conditions Statements & Loops",
          "Arrays & Objects",
          "Javascript Events & Functions" 
        ],
      }
    ],
    id: 15,
  },
];
export const carouselItems = [
  {
    id: 1,
    primaryImage: crm1,
    secondaryImage: crm2,
    title: "Actify CRM Portal",
    description:
      "Manage deals, track leads, and nurture customer relationships all in one place. Enhance customer satisfaction and drive business growth efficiently.",
    bgColor: "to-[#FF8343]",
  },
  {
    id: 2,
    primaryImage: hr2,
    secondaryImage: hr1,
    title: "Actify HR Portal",
    description:
      "Actify's HR portal is a comprehensive digital platform designed to streamline and centralize all human resources - Related Tasks, Information and Processes with in an organization.",
    bgColor: "to-gray-500",
  },
  {
    id: 3,
    primaryImage: LMS1,
    secondaryImage: LMS2,
    title: "Actify LMS Portal",
    description:
      "A digital platform for managing and delivering educational content, creating an interactive learning environment",
    bgColor: "to-[#4F75FF]",
  },
  {
    id: 4,
    primaryImage: JobPortal2,
    secondaryImage: JobPortal1,
    title: "Actify Job Portal",
    description:
      "A versatile job portal where companies can list jobs and filter candidates, placement officers can track student applications, and candidates can view job descriptions, apply, and take relevant tests.",
    bgColor: "to-[#87aca4]",
  },
  {
    id: 5,
    primaryImage: StoreApp1,
    secondaryImage: StoreApp2,
    title: "Actify Store App",
    description:
      "Starting your online store has never been easier, thanks to innovative eCommerce platforms that allow anyone to build a store in minutes—no coding or design skills required. This apps offer user-friendly interfaces, customizable placements of UI components, and a suite of tools to get your business online quickly.",
    bgColor: "to-[#87aca4]",
  },
  {
    id: 6,
    primaryImage: Vendor1,
    secondaryImage: StoreApp2,
    title: "Actify Vendor Portal",
    description:
      "Integrate seamlessly with your ERP system, transferring RFQ items, managing vendor and item records, and collecting quotations for efficient order processing.",
    bgColor: "to-[#87aca4]",
  },
];
export const infoArray = [
  {
    id: "1",
    title: "User-Friendly",
    description: "A Simple and Intuitive User Interface",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="blue"
        className="size-8 fill-white stroke-blue-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
        />
      </svg>
    ),
    bgColor: "bg-green-300",
  },
  {
    id: "2",
    title: "Economical",
    description: "Cost-effective pricing without compromising on quality",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="size-8 fill-blue-600"
        stroke="blue"
      >
        <path d="M312 24l0 10.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3s0 0 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8l0 10.6c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-11.4c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2L264 24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" />
      </svg>
    ),
    bgColor: "bg-yellow-300",
  },
  {
    id: "3",
    title: "Customizable",
    description: "Flexible enough to fit perfectly into your workflow",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke="blue"
        viewBox="0 0 576 512"
        className="size-8 fill-blue-600"
      >
        <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z" />
      </svg>
    ),
    bgColor: "bg-blue-300",
  },
  {
    id: "4",
    title: "Support",
    description: "Customer service with clear guidance and fast responses",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        stroke="blue"
        className="size-8 fill-blue-600"
      >
        <path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" />
      </svg>
    ),
    bgColor: "bg-red-400",
  },
];
