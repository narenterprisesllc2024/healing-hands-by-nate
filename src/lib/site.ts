export const site = {
  name: "Healing Hands By Nate",
  tagline: "Therapeutic Massage & Energy Work in Union, Missouri",
  shortName: "Healing Hands",
  practitioner: {
    firstName: "Nate",
    fullTitle: "Licensed Massage Therapist, Reiki Master, Certified Life Coach",
    yearsExperience: 12,
    credentials: ["Licensed Massage Therapist", "Reiki Master", "Certified Life Coach"]
  },
  contact: {
    phone: "636-744-1770",
    phoneRaw: "+16367441770",
    email: "hello@healinghandsbynate.com",
    address: {
      street: "15 S Oak St",
      city: "Union",
      state: "MO",
      zip: "63084",
      country: "US"
    },
    geo: { lat: 38.4503, lng: -91.0085 },
    locatedAt: "Essence Salon and Spa LLC"
  },
  hours: [
    { day: "Monday", open: "09:00", close: "17:00" },
    { day: "Tuesday", open: null, close: null, note: "Closed" },
    { day: "Wednesday", open: "09:00", close: "17:00" },
    { day: "Thursday", open: null, close: null, note: "Closed" },
    { day: "Friday", open: "09:00", close: "17:00" },
    { day: "Saturday", open: null, close: null, note: "By appointment" },
    { day: "Sunday", open: null, close: null, note: "Closed" }
  ],
  hoursDisplay: "Mon · Wed · Fri  9am – 5pm   |   Sat by appointment",
  bookingUrl: "https://www.vagaro.com/essencesalonandspallc",
  socials: {
    google: "",
    facebook: "",
    instagram: ""
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://healinghandsbynate.com",
  serviceArea: ["Union", "Washington", "Pacific", "St. Clair", "Sullivan", "Franklin County"]
};

export type Site = typeof site;
