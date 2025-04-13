export const projectData = [
  {
    id: 1,
    title: "Product Recommendation",
    category: "Natural Language Processing",
    img: "https://images.unsplash.com/photo-1641387811651-5ae558df6372?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    desc: {
      location: "SUTD",
      course: "60.002 AI Applications in Design",
      time: "(Jan 2022 - April 2022)",
      collaborator: "",
      description: `This project aimed to provide recommendations for the manufacturer to improve their product quality by user's feedback through Amazon, Reddit and websites.
      The product we studied is Apple Watch Series 7.`,
    },
    urls: ["https://github.com/ry2001/AI_Project"],
  },
  {
    id: 2,
    title: "Weightlift Buddy",
    category: "Web Development, Computer Vision",
    img: "weightliftbuddy.png",
    desc: {
      location: "SUTD",
      course: "60.005 HCI and AI",
      time: "(May 2022 - Aug 2022)",
      collaborator: "",
      description: `This is a prototype to detect weightlifting postures for users. 
      There will have some signals to tell the users that their current posture is wrong. 
      Hence, this prototype aimed to correct weightlifters to correct their postures to prevent injuries.`,
    },
    urls: [
      "https://github.com/ry2001/WeightliftBuddy1",
      "https://weightliftbuddy.netlify.app/",
    ],
  },
  {
    id: 3,
    title: "Peer2Peer",
    category: "Web Development, Google Cloud Platform",
    img: "peer2peer.png",
    desc: {
      location: "SUTD",
      course: "60.004 Service Design Studio",
      time: "(May 2022 - Aug 2022)",
      collaborator:
        "This is a project that collaborates with professors in SUTD as industry partners.",
      description: `SUTD is an university that focus on collaboration. 
      We will require to work with different peers and this prototype aimed to provide the students to have a platform for peer evaluation.`,
    },
    urls: ["https://sites.google.com/view/sds-team-4/"],
  },
  {
    id: 4,
    title: "Video Analysis",
    category: "Amazon Web Service",
    img: "https://images.unsplash.com/photo-1606770347238-77fcfd29906c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
    desc: {
      location: "SUTD",
      course: "",
      time: "(Sept 2022 - Oct 2022)",
      collaborator:
        "This is a project that collaborates with professor in SUTD.",
      description: `Instructors will need to go into individual breakout rooms to help the students for online classes.
      Hence, this prototype used AWS services such as Rekognition and Transcribe to help instructors analyze does the group of student needs help.`,
    },
    urls: [],
  },
  {
    id: 5,
    title: "GAN in Animal",
    category: "Web Development, Generative AI",
    img: "ganinanimal.png",
    desc: {
      location: "SUTD",
      course: "60.001 Applied Deep Learning",
      time: "(Jan 2023 - April 2023)",
      collaborator: "",
      description: `Pokémon had referenced some real animals and recreate it.
      Hence we came out with the idea of using Generative Adversarial Network (GAN) to transfer the Pokémon style onto real animals.
      `,
    },
    urls: [
      "https://github.com/ry2001/GANinAnimal",
      "https://ry2001-ganinanimal-main-224dd6.streamlit.app/",
    ],
  },
  {
    id: 6,
    title: "Grabies",
    category: "Web Development, Agent-Based Simulation",
    img: "grabies.png",
    desc: {
      location: "SUTD",
      course: "60.008 System Design Studio",
      time: "(Jan 2023 - April 2023)",
      collaborator:
        "This is a school project that collaborates with Grab as industry partner.",
      description: `The supply and demand for ride-hailing had been imbalanced.
      To help Grab recruit more drivers, we created a prototype to estimate earnings based on driver's lifestyle and driving behaviours using Agent-Based Simulation.`,
    },
    urls: ["https://github.com/HASSRaccoon/Systems-DS-Grab-Simulation"],
  },
  {
    id: 7,
    title: "Skytrain Survaillance - Unattended Baggage Detection",
    category: "Computer Vision, Amazon Web Service",
    img: "https://images.unsplash.com/photo-1495320520040-44186a20c601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    desc: {
      location: "CAG-DIVA",
      time: "(May 2023 - Aug 2023)",
      description: `Currently, the workers will need to manually look at multiple screens to check whether there is any unattended baggages in Skytrain.
      Hence, this project aims to use edge devices to detect the unattended baggages in Skytrain through the CCTV footage.
      A Jetson Xavier device with AWS IoT Greengrass installed was planted on the Skytrain, connecting it with the CCTV camera to capture the footage and perform object detection using YOLOv8.`,
    },
    urls: [],
  },
  {
    id: 8,
    title: "Forest Find",
    category: "Computer Vision, Web Development",
    img: "goodforai.png",
    desc: {
      location: "SUTD",
      course: "60.006 Spatial Design Studio",
      time: "(Sept 2023 - Dec 2023)",
      collaborator:
        "This is a school project that collaborates with Ai for Good as industry partner.",
      description: `This project is aimed to use AI model to detect the boundary of a given forest by providing the coordinates of the forest. 
      Users may crop the area of interest on the satellite image of the tile and will pass the cropped image to segment the boundary of the forest using Segment Anything Model (SAM).
      The segmentation will then be converted into a shapefile that can be used in different applications.
      `,
    },
    urls: ["https://github.com/stjianqing/aiforevil"],
  },
  {
    id: 9,
    title: "Sign Dojo",
    category: "Computer Vision",
    img: "signdojo.jpg",
    desc: {
      location: "SUTD",
      course: "50.035 Computer Vision",
      time: "(Sept 2023 - Dec 2023)",
      collaborator: "",
      description: `This project aims to use AI model to perform American Sign Language (ASL) recognition and provide immediate feedback to the users.`,
    },
    urls: [],
  },
  {
    id: 10,
    title: "Entity Resolution",
    category: "Natural Language Processing",
    img: "entity_resolution.jpg",
    desc: {
      location: "SUTD",
      course: "Capstone",
      time: "(Sept 2023 - April 2024)",
      collaborator:
        "This is a school final year capstone project that collaborates with Klass Engineering as industry partner.",
      description: `In the big data era, people are having multiple social media accounts. 
      This project aimed to use Entity Resolution to match a profile that might be pointing to the searched person.`,
    },
    urls: [],
  },
];

export default projectData;
