export const projects = [
  {
    title: "Irish Robot — AWS Automation",
    summary:
      "Cloud automation to process work orders for tax documentation/software delivery using Python and AWS (S3/EC2/CloudWatch/Secrets Manager). Added logs/metrics/alarms for reliability; later engineered an on-prem file share to reduce storage spend at ~15 TB scale.",
    stack: ["Python", "AWS", "S3", "EC2", "CloudWatch", "Secrets Manager", "Github"],
    images: ["/images/AWS_logo.png", "/images/python3_logo.png"],
  },
  {
    title: "Roguelike Dungeon (C/C++)",
    summary:
      "Turn-based roguelike with dungeon generation, Dijkstra pathfinding (tunneling/non-tunneling), multi-round combat, equipment/loot, fog-of-war, targeting/teleport, and save/load. Implemented monsters/items parsing and unique/boss logic.",
    stack: ["C++", "C", "ncurses", "OOP", "Pathfinding", "Save/Load"],
    images: ["/images/C_logo.png", "/images/c++2_logo.png"],
  },
  {
    title: "E-commerce Store Development (Shop Fusion)",
    summary:
      "Single-page e-commerce application using React.js, Node.js, Express.js, and MongoDB. Responsive UI with Bootstrap/CSS. Features: product display pages, shopping cart, checkout, and an Admin panel for CRUD.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap", "CSS"],
    images: ["/images/GroceryView.png", "/images/CheckoutConfirmation.png"],
  },
  {
    title: "Cyclone Carpool - Mobile Application",
    summary:
      "Rideshare mobile app for university students using Java, Spring Boot, Android Studio, and MySQL. Designed with Figma. Features: trip management, ID verification, location tracking, payment requesting/processing, and real-time messaging with WebSockets. Built and tested RESTful APIs.",
    stack: ["Java", "Spring Boot", "Android Studio", "MySQL", "Figma", "WebSockets"],
    images: ["/images/homepage1.PNG", "/images/passengers.PNG", "/images/signUp.PNG"],
  },
  {
    title: "Multi-Store Retail Operations System",
    summary:
      "Engineered a multi-store retail operations system in Java with CSV file storage for lightweight persistence. Sales, returns, inventory tracking, rentals, warranties, and customer feedback. Used Facade & Observer patterns. Created UML (use case, class, sequence) diagrams.",
    stack: ["Java", "CSV", "Design Patterns", "UML"],
  },
  {
    title: "Archived Message Reconstruction",
    summary:
      "Java-based binary-tree decoder to reconstruct archived messages from compressed files using bitwise operations and recursive tree construction. Included statistics such as average bits/char and space savings.",
    stack: ["Java", "Binary Trees", "Bitwise Ops"],
    images: ["/images/BinarySearchTree.png"],
  },
  {
    title: "LEGv8 Disassembler for Machine-Level Programming",
    summary:
      "Java disassembler converting binary LEGv8 instructions to assembly. Managed endianness and used bitwise operations extensively. Added shell scripts to automate build and execution.",
    stack: ["Java", "LEGv8", "Shell", "Bitwise"],
  },
  {
    title: "2D Point Sorting and Median Calculation",
    summary:
      "Java program implementing selection, insertion, merge, and quicksort for 2D integer points. Computed median point and compared runtimes of each algorithm.",
    stack: ["Java", "Sorting", "Algorithms"],
    images: ["/images/Sorting.gif"],
  },
  {
    title: "Profit Utilization for Internet Service",
    summary:
      "Simulated customer behavior on an n×m grid; Java classes to calculate yearly profit utilization for an ISP.",
    stack: ["Java", "Simulation"],
  },
  {
    title: "Dijkstra’s Algorithm Implementation",
    summary:
      "Implemented Dijkstra’s algorithm in Java for single-source shortest paths on directed graphs without negative weights. Used priority queues for efficiency.",
    stack: ["Java", "Graphs", "Dijkstra"],
    images: ["/images/Djikstra.png"],
  },

];
