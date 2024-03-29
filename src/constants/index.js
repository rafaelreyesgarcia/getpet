export const footerInfo = [
  {
    title: "get pet",
    links: [
      {
        name: "home",
        to: "",
      },
      {
        name: "about",
        to: "about",
      },
      {
        name: "reviews",
        to: "reviews",
      },
      {
        name: "FAQs",
        to: "faqs",
      },
    ],
  },
  {
    title: "services",
    links: [
      {
        name: "dog walks",
        to: "#walk",
      },
      {
        name: "waste removal",
        to: "#waste-removal",
      },
      {
        name: "pet sitting",
        to: "#pet-sitting",
      },
      {
        name: "let outs",
        to: "#let-out",
      },
    ],
  },
];

export const neighborhoods = [
  "montclare",
  "river grove",
  "dunning",
  "galewood",
  "franklin park",
  "belmont terrace",
];

export const services = [
  {
    id: 'walk',
    title: "dog walking",
    description: "A 30 min walk around the neighborhood.",
    img: "./walking.jpg",
  },
  {
    id: 'waste-removal',
    title: "waste removal",
    description: "On demand waste removal.",
    img: "./poop.jpg",
  },
  {
    id: 'pet-sitting',
    title: "pet sitting",
    description: "Vacation care at the comfort of home.",
    img: "./pet-sitting.jpg",
  },
  {
    id: 'let-out',
    title: "let out",
    description: "a stretch in the backyard and potty time.",
    img: "./letout.jpg",
  },

];

export const reviews = [
  {
    description:
      "Kelley is amazing and my pups love her! Highly recommend her if you need someone to care for your pups ❤️🐶❤️",
    name: "Samantha",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    description:
      "Kelley is awesome. We had her come while we were on vacation. My fur babies love her. She is trustworthy, she sent us very detailed updates at every visit. I would highly recommend her!",
    name: "Cassie",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    description:
      "I totally recommend GetPet for your fur babies! We have used Kelley to watch my two doxies and she takes such good care of them. I get text messages with updates and is always so friendly and courteous! I'll continue to use her service in the future!",
    name: "Patty",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    description:
      "We are so happy to have found Kelly! She is amazing with our Cooper (Pitt/Lab mix) who is a bit rambunctious but also scared of everything lol. It's like he knows when she is scheduled to come and sits by the window waiting for her in anticipation and gets so excited when he sees her!",
    name: "Sandy",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    description:
      "Kelley was wonderful with our two dogs.  She is trustworthy, and very reliable.   We hired her for a weekend, and she took care of the pups like they were her own. We won't hesitate to use her services again.",
    name: "Susan",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    description:
      "Kelley was very nice.  She followed directions that we left.  We really appreciated her great service!",
    name: "Laura",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    description:
      "Kelley took great care of my cats while we were on vacation.  She came on the scheduled days and sent me updates and pictures.  I will definitely be using Kelley's services in the future!",
    name: "Michelle",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    description:
      'Kelley continues to exceed our expectations! I just assumed that she would be a "run of the mill" dog walker. However, that is FAR from true. She has formed a wonderful bond with our golden retriever, Rocky (our Rockstar).',
    name: "Jeniffer",
    stars: "⭐⭐⭐⭐⭐",
  },
];

export const Faqs = [
  {
    question: "how long are the walks?",
    answer:
      "The standard walk is 30 minutes and a shorter walk lasts 20 minutes. I'm open to determine the optimal length of the walk that you are more comfortable with.",
  },
  {
    question: "what does a walk include?",
    answer:
      "The walk typically consist in exploring the surroundings, letting your pets sniff around to get mentally stimulated as well as bathroom breaks. I'm consistently monitoring your pet's behavior and surroundings to ensure their safety and wellbeing. I avoid busy or hazardous areas and take precautions to prevent your pet from becoming overheated or exhausted.",
  },
  {
    question: "do you need keys to my house?",
    answer:
      "Yes, I need a copy of your house key. Rest assured that I will keep it safe at all times. I'm ok with working with other access methods like security codes.",
  },
  {
    question: "how can i schedule a service?",
    answer: "You can schedule a service by phone, through my facebook page or by email. Simply let me know the type of service you need, dates and times you require the service and any other relevant details. I will work with your specific requirements and get in touch as soon as possible.",
  },
  {
    question: "what payments do you accept?",
    answer: "I accept cash and zelle transfers only. Cash is preferred. I don't accept checks or credit card payments at this time.",
  },
  {
    question: "what is your cancellation policy?",
    answer: "I understand that unexpected events can happen and will work with you to reschedule or cancel the service as needed. There's no cancellation fee with more than 24 hours notice. same day cancellations will have a fee of $10.",
  },
  {
    question: "do you work on the holidays?",
    answer: "My availability may be limited on holidays but I do offer services on holidays with prior arrangement.",
  },
  {
    question: "what about walking in bad weather?",
    answer: "I will walk your dogs in light rain or snow as long as the conditions are not hazardous and the pet is comfortable. I will always ask you if you're comfortable with rescheduling a service due to heavy rain, extreme heat or icy conditions.",
  },
];

export const servicesDetails = [
  {
    id: 'walk',
    type: "dog walk",
    img: "./dog-walking.jpg",
    duration: "30 minutes",
    price: "$20",
    features: [
      "🐶 one on one walk with your pet(s)",
      "🛰️ GPS Tracking",
      "🥘 feeding included (if needed)",
      "🔄 text and picture updates",
    ],
    cheaper: {
      duration: "20 minutes",
      price: "$15",
      features: [
        "🐶 one on one walk with your pet(s)",
        "🛰️ GPS Tracking",
        "🥘 feeding included (if needed)",
        "🔄 text and picture updates",
      ],
    },
  },
  {
    id: 'let-out',
    type: "let out",
    img: "./letout.jpg",
    duration: "30 minutes",
    price: "$15",
    features: [
      "🐶 playtime in the backyard",
      "🚰 refresh water bowl (if needed)",
      "🥘 feeding included (if needed)",
      "🔄 text and picture updates",
    ],
    cheaper: {
      duration: "10 minutes",
      price: "$10",
      features: [
        "🐶 quick potty break",
        "🚰 refresh water bowl (if needed)",
        "🥘 feeding not included",
        "🔄 text and picture updates",
      ],
    },
  },
  {
    id: 'waste-removal',
    type: "waste removal",
    img: "./waste-removal.jpg",
    duration: "weekly",
    price: "$15 per visit",
    features: [
      "💩 thorough yard cleanup",
      "😊 clean and smell free yard",
      "📅 flexible schedules",
      "🔄 text updates",
    ],
  },
  {
    id: 'pet-sitting',
    type: "pet sitting",
    img: "./pets.jpg",
    duration: "day/night",
    price: "$110",
    features: [
      "🐈 keep them company day and night",
      "✅ no more than 3 hours away from them",
      "🐕 3 walks a day",
      "🔄 text and picture updates",
    ],
    cheaper: {
      duration: "day",
      price: "$85",
      features: [
        "🐈 keep them company during the day",
        "✅ no more than 3 hours away from them",
        "🐕 3 walks a day",
        "🔄 text and picture updates",
      ],
    },
  },
];

export const navlinks = [
  {
    name: 'home',
    to: '/',
  },
  {
    name: 'services',
    to: '/services',
  },
  {
    name: 'contact',
    to: '/contact',
  },
];
