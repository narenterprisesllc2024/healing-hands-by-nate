// Geographic landing pages for towns near the practice.
// Captures searches like "massage in Washington MO" without GMB.

export type ServingArea = {
  slug: string;
  town: string;
  state: string;
  distanceMinutes: number; // drive time from the practice in Union
  searchIntent: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whoComesFromHere: string[];
  drivingNotes: string;
  faqs: { q: string; a: string }[];
};

export const servingAreas: ServingArea[] = [
  {
    slug: "washington-missouri",
    town: "Washington",
    state: "Missouri",
    distanceMinutes: 15,
    searchIntent: "massage therapist Washington MO",
    metaTitle:
      "Massage Therapist Serving Washington, MO | Healing Hands By Nate",
    metaDescription:
      "Licensed Massage Therapist 15 minutes from Washington, Missouri. Therapeutic massage, Reiki, and life coaching with 12+ years of experience. Easy drive down Highway 100.",
    intro:
      "I see a lot of clients driving in from Washington — it's a quick 15-minute trip down Highway 100 to the practice in Union. If you're tired of driving to St. Louis for bodywork or going through whoever happens to be open at the chain spas, this is closer, more personal, and the work goes deeper than a 60-minute Swedish at a franchise.",
    whoComesFromHere: [
      "Folks working at the Washington Industrial Park or driving I-44 daily.",
      "Healthcare workers from Mercy Hospital — long days on your feet, chronic low back, tight shoulders.",
      "Anyone who's tired of the chain-spa experience and wants someone who actually remembers their body's pattern.",
      "Athletes from Washington High School / Borgia and the local lifting community."
    ],
    drivingNotes:
      "From downtown Washington, take Highway 100 west toward Union. The practice is at 15 S Oak St in downtown Union, inside Essence Salon and Spa LLC. Free street parking. ~15 minutes door-to-door without traffic.",
    faqs: [
      {
        q: "Why drive to Union if I'm in Washington?",
        a: "Because you'll get someone who tracks your body's pattern over months, not whoever happens to have a slot today. And because the work I do is targeted to what your body's actually asking for, not a 60-minute routine on autopilot. 15 minutes of drive time for an hour of better outcome is a fair trade."
      },
      {
        q: "Do you ever come to Washington for sessions?",
        a: "Not currently. All sessions are out of Essence Salon and Spa LLC in downtown Union. The space is set up for the work — heated table, oils, music, the right environment. Worth the short drive."
      }
    ]
  },
  {
    slug: "pacific-missouri",
    town: "Pacific",
    state: "Missouri",
    distanceMinutes: 22,
    searchIntent: "massage therapist Pacific MO",
    metaTitle:
      "Massage Therapist Serving Pacific, MO | Healing Hands By Nate",
    metaDescription:
      "Licensed Massage Therapist serving Pacific, Missouri — 20-25 minute drive to the practice in Union. Therapeutic massage, Reiki, and life coaching. 12+ years experience.",
    intro:
      "Pacific is right on I-44 and Highway 30 — 20 to 25 minutes from the practice. I see clients from Pacific regularly: a lot of folks who commute through to St. Louis or work locally and don't want to lose half their evening driving into the city for bodywork. The practice is in downtown Union, an easy run up Highway N or Highway 100.",
    whoComesFromHere: [
      "Daily commuters between Pacific and St. Louis — chronic neck and low-back from drive time.",
      "Pacific business owners and tradespeople — heavy physical work patterns that need maintenance.",
      "Parents who don't want to lose an evening crossing the metro for an appointment.",
      "Folks tired of the corporate-chain massage experience and wanting personal continuity."
    ],
    drivingNotes:
      "From Pacific, the most direct route is up Highway N to Union, or take I-44 to the Union exit. Both put you in downtown Union near the practice in 20-25 minutes. 15 S Oak St, inside Essence Salon and Spa LLC. Free street parking.",
    faqs: [
      {
        q: "Is the drive worth it from Pacific?",
        a: "If you've been chasing chronic pain or stress for months, yes. The work I do over a few sessions is different from a one-off chain massage. If you just want a relaxation massage occasionally, anywhere closer probably makes more sense — I'd rather you get the right work than the work I sell."
      },
      {
        q: "Do you have evening or weekend hours for people coming from Pacific after work?",
        a: "I see clients Monday, Wednesday, and Friday 9am to 5pm. Saturdays by appointment. If your work schedule doesn't fit those hours, text me — I'm sometimes able to flex for clients who've been coming in regularly."
      }
    ]
  },
  {
    slug: "sullivan-missouri",
    town: "Sullivan",
    state: "Missouri",
    distanceMinutes: 25,
    searchIntent: "massage therapist Sullivan MO",
    metaTitle:
      "Massage Therapist Serving Sullivan, MO | Healing Hands By Nate",
    metaDescription:
      "Licensed Massage Therapist serving Sullivan and the Meramec River corridor. 25-minute drive to the practice in Union. Therapeutic massage, Reiki, life coaching.",
    intro:
      "Sullivan and the Meramec River corridor are quiet country — and people out here often work hard with their hands. Farmers, tradespeople, construction, healthcare workers driving up to Sullivan Hospital. Bodies that need real bodywork, not a candlelight 60-minute Swedish. The practice is in downtown Union, 25 minutes north on Highway 185.",
    whoComesFromHere: [
      "Farmers and tradesfolk — chronic low back from mowing, lifting, twisting.",
      "Healthcare workers at Sullivan Hospital and the area clinics.",
      "Hunters who beat themselves up during deer season and need shoulders, hips, and lower back unwound.",
      "Anyone in Crawford County who's been driving into St. Louis for massage and is over it."
    ],
    drivingNotes:
      "From Sullivan, take Highway 185 north to Union — about 25 minutes through some pretty country. The practice is at 15 S Oak St in downtown Union, inside Essence Salon and Spa LLC. Free street parking.",
    faqs: [
      {
        q: "Do you specialize in working with people who do hard physical work?",
        a: "Yes — deep tissue and trigger point therapy are the right tools for chronic load patterns. I've spent a lot of time with farmers, mechanics, healthcare workers, and tradesmen. The work isn't punishment — it's targeted release of the patterns the job creates over years."
      },
      {
        q: "Hunting season is brutal on my body. Can you help?",
        a: "Especially yes. Field-dressing a deer, days in a stand, climbing in and out of trees, dragging meat out — it's a specific load on the shoulders, low back, and hips. Late November through January is when I see a lot of hunters. Booking early in the season as maintenance helps you stay in the field longer."
      }
    ]
  }
];

export function getServingArea(slug: string) {
  return servingAreas.find((s) => s.slug === slug);
}
