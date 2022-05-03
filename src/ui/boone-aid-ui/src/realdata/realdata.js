import { any } from "async"

// types of support
const healthcare = "Healthcare"
const pregnancySupport = "Pregnancy Support"
const peripartumSupport = "Peripartum Support"
const supportGroups = "Support Groups"
const awareness = "Awareness"
const crisisIntervention = "Crisis Intervention"
const legalSupport = "Legal Support"
const housing = "Housing"
const crisis24hourLine = "24 Hour Crisis Line"
const caseManagement = "Case Management"
const foodPantry = "Food Pantry"
const mealDelivery = "Meal Delivery"
const financialSupport = "Financial Support"
const pharmacy = "Pharmacy"
const homeRepair = "Home Repair"
const firewood = "Firewood"
const thriftItems = "Thrift Items"
const affordableFood = "Affordable Food"
const communityGarden = "Community Garden"
const soupKitchen = "Soup Kitchen"
const affordableHousing = "Affordable Housing"
const freeTransportation = "Free Transportation"
const employmentAssistance = "Employment Assistance"
const educationAssistance = "Education Assistance"
const counseling = "Counseling"
const mentorship = "Mentorship"
const prenatalYoga = "Prenatal Yoga"
const freeDiapers = "Free Diapers"
const consulting = "Consulting"
const parentEducation = "Parent Education"
const foodDelivery = "Food Delivery"
const gardeningEducation = "Gardening Education"

// for
const domesticViolenceVictims = "Domestic Violence Victims";
const infants = "Infants";
const wccStudents = "Wilkes Community College Students";
const anyoneInNeed = "Anyone in Need";
const impovershed = "Impovershed Families and Individuals";
const women = "Women";
const homeless = "Homeless Families and Individuals";
const elderly = "Elderly"
const mothers = "Mothers"
const transBirthParents = "Trans Birth Parents"
const genderNonConformingBirthParents = "Gender-Nonconforming Birth Parents"
const expectantMothers = "Expectant Mothers";
const expectantTransBirthParents = "Expectant Trans Birth Parents";
const teenageMothers = "Teenage Mothers";
const expectantTeenageMothers = "Expectant Teenage Mothers";
const parents = "Parents"
const interpersonalViolenceVictims = "Interpersonal Violence Victims"
const sexualAssaultVictims = "Sexual Assault Victims"
const children = "Children";

let resources = [
  {
    name: "Children's Council of Watauga County",
    url: "thechildrenscouncil.org",
    phone: "(828) 262-5425",
    address: "225 Birch Street, Suite 3, Boone NC 28607",
    description: "Pregnency/Peripartum support",
    services: [
      {
        name: "Circle of Parents Postpartum Distress Support",
        description: [
          "Support group for new mothers and birth parents experiencing any symptoms on the spectrum of postpartum distress",
          "Nonjudgemental, supportive group sessions for sharing experiences",
          "Wednesday from 11AM-12PM via zoom",
          "Free, but registration is requested",
          "Contact Sophie Rudisill at Sophierudisill@thechildrenscouncil.org or call (828) 262-5425"
        ],
        serviceTypes: [
          supportGroups,
        ],
        for: [
          mothers,
          transBirthParents,
          genderNonConformingBirthParents
        ],
      },
      {
        name: "Circle of Parents Pregnancy Support",
        description: [
          "Weekly pregnancy support circle for expectant mothers to share feelings, questions, concerns, thoughts",
          "Prenatal yoga incorperated",
          "Meets Thursday 12-1PM via Zoom",
          "Contact Allison@thechildrenscouncil.org"
        ],
        serviceTypes: [
          supportGroups,
          prenatalYoga
        ],
        for: [
          expectantMothers, 
          expectantTransBirthParents,
        ]
      },
      {
        name: "Adolescent Parenting Program",
        description: [
          "Free program for pregnant and first-time parenting teens between the ages of 13 and 19",
          "Emphasizes goals of staying in school while delivering and raising healthy children"
        ],
        serviceTypes: [
          educationAssistance,
          counseling,
          supportGroups,
          mentorship
        ],
        for: [
          expectantTeenageMothers,
          teenageMothers
        ]
      },
      {
        name: "Diaper Bank",
        description: [
          "Diaper supply and distribution to Watauga County parents in need",
          "Partnership with the Hunger and Health Coalition for pickup",
          "Watauga County Parents in need eligible to receive two free packs of diapers per child per month, one pack of wipes per family per month, and one can of infant formula per family per month for free",
          "Occasional out of stock periods due to low donation volume",
          "Tuesdays and Thursdays from 10AM to 3PM at the HHC",
          "Contact Matt at Matt@thechildrenscouncil.org"
        ],
        serviceTypes: [
          freeDiapers
        ],
        for: [
          parents
        ]
      }, 
      {
        name: "Positive Parenting Program (Triple P)",
        description: [
          "Strategy session to develop techniques to support children’s needs",
          "Offered to parents of children 0-12",
          "Individual sessions with a practitioner regarding a behavioral concern",
          "Topics include bedtime issues, temper tantrums, chores, sharing, etc",
          "4 or 10-week sessions offered",
          "Sliding scale payment system",
          "Contact Jeannie at jeannie@thechildrenscouncil.org for signup",
        ],
        serviceTypes: [
          mentorship,
          consulting
        ],
        for: [
          parents
        ]
      },
      {
        name: "Parents as Teachers",
        description: [
          "Parent education and family support program serving families from pregnancy through age three",
          "PAT certified educators present scientific information regarding early brain development with advice to optimize language, intellectual development, social development, and motor skills",
          "Contact Robin Triplett at robin@thechildrenscouncil.org",
        ],
        serviceTypes: [
          parentEducation
        ],
        for: [
          parents
        ]
      },
      {
        name: "Circle of Parents",
        description: [
          "Parenting support",
          "Open to all parents and caregivers wanting to connect with other parents, learn about new resources, make crafts with your child, make toys, join a book club, discuss topics, etc",
          "Wednesday mornings 10-11 AM via Zoom",
          "Contact Renee Milligan @ Renee@thechildrenscouncil.org",
        ],
        serviceTypes: [
          supportGroups
        ],
        for: [
          parents
        ]
      }
    ],
  },

  {
    name: "Family Connects",
    url: "familyconnectsnorthwest.org",
    phone: "(828) 761-0121",
    address: "",
    description: "Offers a free home visit by a registered nurse for families with newborn babies",
    services: [
      {
        name: "Free nurse visit for newborn babies",
        description: [
          "A free home visit from a nurse for your newborn baby",
        ],
        serviceTypes: [
          healthcare
        ],
        for: [
          parents
        ],
      }
    ],
    additionalInfo: true,
  },

  {
    name: "NCDHHS Social Services",
    url: "ncdhhs.gov",
    phone: "1-800-662-7030",
    address: "2001 Main Service Center, Raleigh NC 27699",
    description: "Financial assistance to families who have suffered from domestic violence",
    services: [
      {
        name: "Financial Support for Domestic Violence Victims",
        description:[
          "Temporary Assistance for Needy Families (TANF)",
          "Assistance for housing and utility deposits, education costs, transportation, shelter services, legal fees, clothing, medical needs, daycare",
        ],
        serviceTypes: [
          financialSupport
        ],
        for: [
          domesticViolenceVictims,
          interpersonalViolenceVictims
        ],
      }
    ],
  },

  {
    name: "A.S.H.E (A Safe Home for Everyone)",
    url: "ashechildren.org/a-s-h-e",
    phone: "(336) 982-8851",
    address: "",
    description: "Domestic/Interpersonal Violence Support",
    services: [
      {
        name: "Emergency Housing for Survivors",
        description: [
          "Confidential and Safe emergency/transitional housing for IPV/Domestic Violence survivors"
        ],
        serviceTypes: [
          housing
        ],
        for: [
          domesticViolenceVictims
        ],
      },

      {
        name: "Mentorship and Case Management",
        description: [
          "Case Management, information, referrals",
          "Short-term crisis intervention and support",
        ],
        serviceTypes: [
          mentorship,
          caseManagement
        ],
        for: [
          domesticViolenceVictims
        ]
      },

      {
        name: "Confidential IPV and Sexual Assault Support Groups",
        description: [
          "Support groups for victims of sexual assault, domestic violence and interpersonal violence",
        ],
        serviceTypes: [
          supportGroups
        ],
        for: [
          interpersonalViolenceVictims,
          domesticViolenceVictims,
          sexualAssaultVictims
        ]
      }, 

      {
        name: "24 Hour Crisis Line for Survivors",
        description: [
          "24 hour crisis line for survivors of domestic violence, sexual assault, and interpersonal violence",
          "(336) 246-5430"
        ],
        serviceTypes: [
          crisis24hourLine,
        ],
        for: [
          domesticViolenceVictims,
          sexualAssaultVictims,
          interpersonalViolenceVictims
        ]
      }
    ],
    additionalInfo: true,
  },

  {
    name: "OASIS",
    url: "oasisinc.org",
    phone: "(828) 264-1532",
    address: "",
    email: "outreach@oasisinc.org",
    description: "OASIS - Opposing Abuse with Service, Information, and Shelter",
    services: [
      {
        name: "Emergency housing for Domestic Violence/IPV victims",
        description: [
          "Confidential emergency shelter for individuals and children fleeing DomesticViolence/IPV"
        ],
        serviceTypes: [
          housing
        ],
        for: [
          domesticViolenceVictims,
          interpersonalViolenceVictims
        ],
      },
      {
        name: "Short term crisis intervention counseling",
        description: [
          "Short term crisis intervention counseling for victims of Domestic Violence/IPV"
        ],
        serviceTypes: [
          counseling,
        ],
        for: [
          domesticViolenceVictims,
          interpersonalViolenceVictims,
          sexualAssaultVictims
        ]
      },

      {
        name: "Confidential domestic violence and sexual assault support groups",
        description: [
          "Support groups for survivors of sexual assault and/or domestic violence"
        ],
        serviceTypes: [
          supportGroups
        ],
        for: [
          domesticViolenceVictims,
          sexualAssaultVictims,
          interpersonalViolenceVictims
        ]
      },

      {
        name: "24 hour domestic violence/sexual assault crisis line",
        description: [
          "24 hour crisis line for victims of domestic violence/sexual assault/interpersonal violence",
          "Watauga: (828) 262-5035",
          "Avery: (828) 504-0911",
          "Spanish: (828) 504-0800"
        ],
        serviceTypes: [
          crisis24hourLine,
        ],
        for: [
          domesticViolenceVictims,
          sexualAssaultVictims,
          interpersonalViolenceVictims
        ]
      }
    ],
  },

  {
    name: "Ashe Food Pantry",
    url: "ashefoodpantry.org",
    phone: "(336) 846-7019",
    address: "115 Colvard Street Jefferson NC 28640",
    description: "Food pantry in Ashe County",
    services: [
      {
        name: "Ashe Food Pantry",
        description: [
          "Healthy food distribution, including monthly boxes of nonperishables",
          "Typical Hours: Monday, Tuesday, Thursday, Friday from 10AM - 2PM",
          "MyPlate food proportions handout provided",
          "Healthy recipes utilizing pantry items provided"
        ],
        serviceTypes: [
          foodPantry
        ],
        for: [
          anyoneInNeed
        ],
      },
      {
        name: "Operation Backpack",
        description: [
          "Food packs discreetly distributed on Fridays to children in food insecure homes",
          "Contact child's teacher or guidance counseler for details",
        ],
        serviceTypes: [
          foodDelivery
        ],
        for: [
          children
        ]
      },

      {
        name: "WCC Prowler Pantry",
        description: [
          "Free, individually wrapped grab-and-go snacks and meal items",
          "Open to all enrolled students of Wilkes Community College",
          "Must present a current student ID"
        ], 
        serviceTypes: [
          foodPantry
        ],
        for: [
          wccStudents
        ]
      }, 

      {
        name: "Mountaineer Pantry",
        description: [
          "Monthly food Box distribution targeting those in outlying regions of Ashe County",
          "Pickup locations include Creston VFD and Phoenix Baptist Church",
          "Potential Client Contact: ashefoodpantry@skybest.com"
        ],
        serviceTypes: [
          foodPantry
        ],
        for: [
          anyoneInNeed,
          // ashe county residents
        ]
      },

      {
        name: "Generations Ashe Pantry",
        description: [
          "Food access program for home-bound seniors",
          "Weekly healthy, low prep meal delivery",
          "Weekend 'Adult-Friendly Backpack'",
          "Contact (336) 246-2461 and ask for Brenda or Glenda"
        ],
        serviceTypes: [
          foodDelivery
        ],
        for: [
          elderly
        ]
      }
    ],
  },

  {
    name: "Ashe Really Cares",
    url: "ashebaptist.org/about-ashe-really-cares",
    phone: "(336) 846-5234",
    address: "204 Beaver Creek School Rd, West Jefferson NC 28694",
    description: "",
    services: [
      {
        name: "ARC food pantry",
        description: [
          "Food pantry with shelf-stable items, dairy, meats, fresh produce from local farmers"
        ],
        serviceTypes: [
          foodPantry
        ],
        for: [
          anyoneInNeed
        ],
      }
    ],
  },

  {
    name: "Ashe Outreach",
    url: "facebook.com/asheoutreach",
    phone: "(336) 385-1314",
    address: "11719 Hwy 88 W, Creston, NC 28615",
    description: "Food pantry and meal delivery",
    services: [
      {
        name: "Food Pantry",
        description: [
          "Produce and nonperishables available",
          "Open Tuesday, Wednesday, Thursday from 9AM-2PM"
        ],
        serviceTypes: [
          foodPantry
        ],
        for: [
          anyoneInNeed
        ],
      },

      {
        name: "Prepared Meal Delivery",
        description: [
          "Call (336) 385-1314 for details",
        ],
        serviceTypes: [
          foodDelivery
        ],
        for: [
          anyoneInNeed
        ]
      },

      {
        name: "Outgrow Hunger",
        description: [
          "Teaches community members how to cultivate produce gardens in their own backyards"
        ],
        serviceTypes: [
          gardeningEducation
        ],
        for: [
          anyoneInNeed
        ]
      }
    ],
    additionalInfo: true,
  },

  {
    name: "Hunger and Health Coalition",
    url: "hungerandhealthcoalition.com",
    phone: "(828) 262-1628",
    address: "141 Health Center Drive, Suite C, Boone NC 28607",
    email: "",
    description: "Pharmacy for Watauga, Avery, and Ashe county residents at or below 200% of the federal poverty level",
    services: [
      {
        name: "Fresh Food Pantry Market",
        description: [
          "Eligable families can recieve a food box every 14 days",
          "Each box may contain canned fruits/veggies, tomato products, soups, canned proteins, frozen meats, dairy, pasta or rice, and breakfast items",
        ],
        serviceTypes: [
          foodPantry
        ], 
        for: [
          anyoneInNeed
        ]
      }, 

      {
        name: "Food Recovery Kitchen",
        description: [
          "Donation based kitchen",
          "With scheduled visits, a soup/sandwich to-go meal can be aquired for each member of the family",
        ],
        serviceTypes: [
          soupKitchen
        ],
        for: [
          anyoneInNeed
        ]
      }
    ],
    additionalInfo: true,
  },

  {
    name: "Hospitality House NW North Carolina",
    url: "hosphouse.org",
    phone: "(828) 264-1237",
    address: "338 Brook Hollow Road, Boone NC, 28607",
    email: "",
    description: "Short term and long term housing, food pantry",
    services: [
      {
        name: "Bread of Life Community Kitchen",
        description: [
          "Provides 3 meals a day, 365 days per year at Hospitality House location",
          "Provided to all residents and community members at no charge"
        ], 
        serviceTypes: [
          soupKitchen
        ],
        for: [
          anyoneInNeed
        ],
      },

      {
        name: "Hospitality House Food Pantry",
        description: [
          "Provides bags and boxes of food items donated from various grocers and food bank organizations",
        ],
        serviceTypes: [
          foodPantry
        ],
        for: [
          anyoneInNeed
        ]
      }

    ],
    additionalInfo: true,
  },

  // {
  //   name: "Boone United Methodist Church",
  //   url: "booneumc.org",
  //   phone: "(828) 264-6090",
  //   address: "471 New Market Blvd, Boone NC, 28607",
  //   email: "",
  //   description: "Skilled home repair for those in need, by church members with with construction experience. Also provides free Firewood on volunteer work days",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "Reaching Avery Ministry",
  //   url: "ramsrack.com",
  //   phone: "(828)-733-5127",
  //   address: "147 New Vale Rd, Po Box 234, Newland NC 28657",
  //   email: "",
  //   description: "Food Pantry, thrift store",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "FARM Cafe",
  //   url: "farmcafe.org",
  //   phone: "(828) 386-1000",
  //   address: "617 W King St, Boone, NC 28607",
  //   email: "",
  //   description: "Pay what you can cafe, operating primarily with volunteers",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "Jefferson United Methodist Church",
  //   url: "jumc.church",
  //   phone: "(336) 846-9512",
  //   address: "115 E Main St, PO Box 236, Jefferson NC 28640",
  //   email: "",
  //   description: "Food pantry, $5 meals for anyone",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "Blowing Rock Cares Food Pantry",
  //   url: "blowingrockcares.com",
  //   phone: "(828) 295-7675 ext 19",
  //   address: "1218 Main Street, Blowing Rock NC 28605",
  //   email: "",
  //   description: "Food Pantry at Rumple Memorial Presbyterian Church",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "W.A.M.Y. Community Action",
  //   url: "wamycommunityaction.org",
  //   phone: "(828) 264-2421",
  //   address: "225 Birch Street, Suite 2, Boone NC 28607",
  //   email: "",
  //   description: "Community Garden and Food Pantry, Employment Assistance",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "Hospitality House NW North Carolina",
  //   url: "hosphouse.org",
  //   phone: "(828) 264-1237",
  //   address: "338 Brook Hollow Road, Boone NC 28607",
  //   email: "",
  //   description: "Bread of Life Community Kitchen, and Food Pantry",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "Northwest Regional Housing Authority",
  //   url: "nwrha.com",
  //   phone: "(828) 264-6683",
  //   address: "869 Hwy 105 Ext, suites 11 and 12, Boone NC 28607",
  //   email: "info@nwrha.com",
  //   description: "Affordable housing, Public Housing, Counciling",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "AppalCART",
  //   url: "appalcart.com",
  //   phone: "(828) 297-1300",
  //   address: "305 NC Hwy 105 Bypass, Boone NC 28607",
  //   email: "",
  //   description: "Public bus and van transportation provided year-round",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "Quiet Givers",
  //   url: "quietgivers.org",
  //   phone: "",
  //   address: "",
  //   email: "",
  //   description: "Organization facilitating crowdfunding for dontation needs in the High Country",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "The Church of the Holy Cross, Valley Crucis",
  //   url: "holycrossvallecrucis.net",
  //   phone: "(828) 963-4609",
  //   address: "122 Skiles Way, Banner Elk, NC 28604",
  //   email: "holy_cross@skybest.com",
  //   description: "",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "Generations Ashe Pantry",
  //   url: "ashefoodpantry.org/programs/generation-ashe-pantry",
  //   phone: "(336) 246-2461",
  //   address: "",
  //   email: "",
  //   description: "Food assistance for the elderly",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },

  // {
  //   name: "",
  //   url: "",
  //   phone: "",
  //   address: "",
  //   email: "",
  //   description: "",
  //   services: [
  //     {
  //       name: "",
  //       for: [
    
  //       ],
  //     }
  //   ],
  //   additionalInfo: true,
  // },
]

export function getResources() {
  for (let i = 0; i < resources.length; i++)
    resources[i].id = i.toString();
  
  return resources;
}

export function getServices() {
  let services = [];
  let resources = getResources();
  let id = 0;

  for (let resource of resources) {
    for (let service of resource.services) {
      service.parent = resource.name;
      service.parentId = resource.id;
      service.id = id.toString();
      services.push(service);
      id++;
    }
  }

  return services;
}

export function getServedTypes() {
  let resources = getResources();
  let types = [];
  let i = 0;

  for (let resource of resources) {
    for (let service of resource.services) {
      for (let f of service.for) {
        let obj = {data: f, id: i++};
        if (types.filter(o => o.data === f).length === 0)
          types.push(obj);
      }
    }
  }

  return types;
}

export function getSupportTypes() {
  let resources = getResources();
  let types = [];
  let i = 0;

  for (let resource of resources) {
    for (let service of resource.services) {
      for (let t of service.serviceTypes) {
        let obj = {data: t, id: i++};
        if (types.filter(o => o.data === t).length === 0)
          types.push(obj);
      }
    }
  }

  return types;
}

export function getResourceByName(name) {
  const resources = getResources();
  return resources.find(r => r.name == name)
}
