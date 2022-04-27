
// types of support
const healthcare = "Healthcare"
const pregnancySupport = "Pregnancy Support"
const peripartumSupport = "Peripartum Support"
const supportGroups = "Support Groups"
const awareness = "Awareness"
const crisisIntervention = "Crisis Intervention"
const legalSupport = "Legal Support"
const housing = "housing"
const crisis24hourLine = "24 Hour Crisis Line"
const caseManagement = "Case Management"
const foodPantry = "Food Pantry"
const mealDelivery = "Meal Delivery"
const financialSupport = "Financial Support"
const pharmacy = "Pharmacy"
const homeRepair = "Home Repair"
const firewood = "Firewood"

export function getSupportTypes() {
  return [
    healthcare,
    pregnancySupport,
    peripartumSupport,
    supportGroups,
    awareness,
    crisis24hourLine,
    crisisIntervention,
    legalSupport,
    housing,
    caseManagement,
    foodPantry,
    mealDelivery,
    financialSupport,
    pharmacy,
    homeRepair,
    firewood
  ]
}


// for
const domesticViolenceVictims = "Domestic Violence Victims";
const infants = "Infants";
const wccStudents = "Wilkes Community College Students";
const all = "Anyone in Need";
const impovershed = "Impovershed Families and Individuals";
const women = "Women";
const homeless = "Homeless Families and Individuals";

export function getServedTypes() {
  return [
    domesticViolenceVictims,
    infants,
    wccStudents,
    all,
    impovershed,
    women,
    homeless,
  ]
}

let resources = [
  {
    name: "Children's Council of Watauga County",
    url: "thechildrenscouncil.org",
    phone: "(828) 262-5425",
    address: "225 Birch Street, Suite 3, Boone NC 28607",
    description: "Pregnency/Peripartum support",
    services: [
      pregnancySupport,
      peripartumSupport
    ],
    for: [
      women, 
    ],
    additionalInfo: true
  },

  {
    name: "Family Connects",
    url: "familyconnectsnorthwest.org",
    phone: "(828) 761-0121",
    address: "",
    description: "Offers a free home visit by a registered nurse for families with newborn babies",
    services: [
      healthcare,
    ],
    for: [
      infants,
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
      housing,
      financialSupport
    ],
    for: [
      domesticViolenceVictims
    ]
  },

  {
    name: "A.S.H.E (A Safe Home for Everyone)",
    url: "ashechildren.org/a-s-h-e",
    phone: "(336) 982-8851",
    address: "",
    description: "",
    services: [
      housing,
      supportGroups,
      awareness,
      legalSupport,
      crisisIntervention,
      crisis24hourLine,
    ],
    for: [
      domesticViolenceVictims,
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
      housing,
      crisisIntervention,
      supportGroups,
      crisis24hourLine,
      caseManagement,
    ],
    for: [
      domesticViolenceVictims
    ],
    additionalInfo: true,
  },

  {
    name: "Ashe Food Pantry",
    url: "ashefoodpantry.org",
    phone: "(336) 846-7019",
    address: "115 Colvard Street Jefferson NC 28640",
    description: "Food pantry in Ashe County",
    services: [
      foodPantry
    ],
    for: [
      wccStudents,
      all
    ],
    additionalInfo: true,
  },

  {
    name: "Ashe Really Cares",
    url: "ashebaptist.org/about-ashe-really-cares",
    phone: "(336) 846-5234",
    address: "204 Beaver Creek School Rd, West Jefferson NC 28694",
    description: "",
    services: [
      foodPantry
    ],
    for: [
      all
    ],
    additionalInfo: false,
    id: "test"
  },

  {
    name: "Ashe Outreach",
    url: "facebook.com/asheoutreach",
    phone: "(336) 385-1314",
    address: "11719 Hwy 88 W, Creston, NC 28615",
    description: "Food pantry and meal delivery",
    services: [
      foodPantry,
      mealDelivery
    ],
    for: [
      all
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
      pharmacy
    ],
    for: [
      impovershed
    ],
    additionalInfo: true,
  },

  {
    name: "Hospitality House NW North Carolina",
    url: "hosphouse.org",
    phone: "(828) 264-1237",
    address: "338 Brook Hollow Road, Boone NC, 28607",
    email: "",
    description: "Short term and long term housing",
    services: [
      housing
    ],
    for: [
      homeless,
      domesticViolenceVictims
    ],
    additionalInfo: true,
  },

  {
    name: "Boone United Methodist Church",
    url: "booneumc.org",
    phone: "(828) 264-6090",
    address: "471 New Market Blvd, Boone NC, 28607",
    email: "",
    description: "Skilled home repair for those in need, by church members with with construction experience. Also provides free Firewood on volunteer work days",
    services: [
      homeRepair,
      firewood
    ],
    for: [
      all
    ],
    additionalInfo: true,
  },

  // {
  //   name: "",
  //   url: "",
  //   phone: "",
  //   address: "",
  //   email: "",
  //   description: "",
  //   services: [
  //   ],
  //   for: [

  //   ],
  //   additionalInfo: true,
  // },
]

export function getResources() {
  for (let i = 0; i < resources.length; i++)
    resources[i].id = i.toString();
  
  return resources;
}