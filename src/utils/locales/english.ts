import { englishdistrictData  } from "./Districts/englishdistrictData";

export const English = {
  translation: {
    maintitle: "GAME CHANGER OF TELANGANA",
    districtData:englishdistrictData ,
    HNO:'House/No',
    SelectDistrict: "Select District*",
    SelectConstituency: "Select Constituency*",
    SelectDivision: "Select Division*",
    SelectVillageArea: "Select Village/Area*",
    Pincode: "Pincode",
    hplaceholder: "Enter house number",
    invalidMobile: "Please enter a valid 10-digit mobile number",
    sections: [
      {
        heading: "Janasena’s Vision",
        description:
          "Janasena envisions a self-reliant and progressive society, where every citizen has the opportunity to lead a dignified life. The party believes in fostering sustainable growth through natural farming, empowering villages, promoting religious harmony, ensuring quality education, supporting self-employment, and nurturing youth leadership. With a commitment to transparency and ethical governance, Janasena strives to create a resilient nation that stands against corruption and works towards inclusive development.",
        readmore: "Read More",
        readless: "Read Less",
      },
      {
        heading: "Janasena’s Mission",
        description: [
          {
            subheading: "Promoting Natural Farming:",
            content:
              "Encouraging farmers to adopt chemical-free, environmentally friendly farming practices. Providing organic farming resources, modern technologies, and water management methods.",
          },
          {
            subheading: "Promoting Religious Harmony:",
            content:
              "Respecting all religions and fostering unity by celebrating cultural diversity.",
          },
          {
            subheading: "Revitalizing Villages:",
            content:
              "Improving basic infrastructure in rural areas, providing clean drinking water, sanitation, roads, and healthcare services. Promoting digital literacy and creating employment opportunities in villages.",
          },
          {
            subheading: "Ensuring Quality Education:",
            content:
              "Making education accessible to all, focusing on skill-based education, digital learning, and career-oriented training.",
          },
          {
            subheading: "Encouraging Self-Employment:",
            content:
              "Supporting small businesses and startups with financial aid, mentorship, and market access. Promoting innovation and local industries.",
          },
          {
            subheading: "Preventing Corruption:",
            content:
              "Implementing strict transparency measures, ensuring public accountability, and eliminating corruption at all levels.",
          },
          {
            subheading: "Empowering Youth:",
            content:
              "Providing youth with industry-relevant skills, leadership training, and opportunities for personal development. Encouraging active participation in social development and decision-making processes.",
          },
        ],
        readmore: "Read More",
        readless: "Read Less",
      },
    ],
    chooselanguage: {
      formlabel: "Choose your language",
      options: [
        { language: "English", code: "en" },
        { language: "Telugu", code: "te" },
        { language: "Hindi", code: "hi" },
      ],
    },
    name: "Name",
    phone: "Phone Number",
    placeholder:'Enter Your Name',
    voter: {
      voterlabel: "Do You have Voter ID in Telangana",
      status: [{ value: "Yes" }, { value: "No" }],
    },
    
    janasenamember:{

      memberlabel:"Are You a Member of Janasena",
      option:[{ value:"Yes"},
                {value:"No"}]
    },
    houseno:"House Number",
    district:"Select District",
    constituency:"Select Constituency",
    divison:"Select Division",
    village:"Select Village/ Area",
    pincode:"Pincode",
    employment:{
      employmentlabel:"Employement Status",
      employmentstatus:[
        {sector:"Private Sector"},
        {sector:"Public Sector"},
        {sector:"Self Employeed"},
        {sector:"Unemployeed"}
     ]
  },
  education:{
    educationlabel:"Education",
    educationstatus:[
       {class:"10th Class"},
       {class:"Intermediate"},
       {class:"Graduation"},
       {class:"Postgraduation&Above"}
      ]
   },
   familymembers:{
       familymemberlabel:"Total Members in Family",
       withyou:"including you"
    },
    adultsmembers:{
      adultslabel:"How Many Adults Above(18+ Years)",
      genders:[{gendername:"Male"},
               {gendername:"Female"}]
     },
     futurevoters:{
      futurelabel:"How Many future Voters (7-17 Years)",
      genders:[{gendername:"Boys"},
                {gendername:"Girls"}  
            ]
      },
      totalvoters:{
        voterslabel:"No of Voters in the Family",
        withyou:"Including You"
      },

      govtschemes:{

      schemeslabel:"What Government Schemes Are You Currently Receiving?",
      choose:"(Choose The Applicable One)",
      schemeoptions:[
          {option:"Education Benefits"},
          {option:"Pension","type":"( For Widows And Old Age )"},
          {option:"Pension For Disabled"},
          {option:"Medical Benefits"},
          {option:"Rythu Bandhu"},
          {option:"Ration"},
          {option:"TIDCO Houses"}
      ]
     },
     suggestions:{
 
     heading:"Additional Suggestions / Comments",
     description:
 "(Please mention the issues you are facing with the government and what you expect from the JanaSena government)",
 placedtext:"Share your concerns regarding government policies, challenges you are facing, and your expectations from the JanaSena government..."
  }
 },
};
