export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  benefits: string[];
  goodFor: string[];
  whatToExpect: string[];
  duration: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "swedish-massage",
    name: "Swedish Massage",
    shortName: "Swedish",
    tagline: "The classic full-body relaxation massage",
    metaTitle: "Swedish Massage in Union, MO | Healing Hands By Nate",
    metaDescription:
      "Swedish massage in Union, Missouri with 12+ years experience. Long, flowing strokes to ease tension, improve circulation, and quiet the nervous system. Book online.",
    intro:
      "If you've never had a massage before — or you just want to slow your nervous system down — Swedish is where I always start people. Long, flowing strokes, light to medium pressure, and zero rush. The goal is the kind of rest that you carry with you for days, not just an hour on a table.",
    benefits: [
      "Calms the nervous system and lowers cortisol",
      "Improves circulation and lymph flow",
      "Eases everyday muscle tension",
      "Improves sleep quality",
      "Reduces stress and mental fatigue"
    ],
    goodFor: [
      "First-time massage clients",
      "Stress and burnout",
      "Trouble sleeping",
      "General body soreness",
      "Anyone who hasn't truly relaxed in a while"
    ],
    whatToExpect: [
      "We talk for a few minutes about how your body feels and what you're looking for.",
      "Pressure is light to medium — you'll feel worked on, not worked over.",
      "Long, gliding strokes head to toe with warm oil, on a heated table.",
      "You leave loose, calm, and noticeably less stressed."
    ],
    duration: "60 or 90 minutes",
    faqs: [
      {
        q: "Is Swedish massage too gentle to make a real difference?",
        a: "No — and that's the most common myth. Light pressure done well shifts your nervous system out of fight-or-flight, which is where most chronic tension actually lives. You don't have to hurt to heal."
      },
      {
        q: "Should I get Swedish or deep tissue?",
        a: "If you're stressed, exhausted, or new to massage — Swedish. If you've got a specific knot or stubborn pain pattern you've been chasing for weeks — deep tissue. Tell me at intake and I'll point you the right way."
      }
    ]
  },
  {
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    shortName: "Deep Tissue",
    tagline: "Targeted pressure for stubborn knots and chronic tension",
    metaTitle: "Deep Tissue Massage in Union, MO | Healing Hands By Nate",
    metaDescription:
      "Deep tissue massage in Union, MO. Slow, focused pressure to release chronic knots, lower-back pain, neck tension, and shoulder restriction. 12+ years experience.",
    intro:
      "Deep tissue is for the spots that don't loosen up no matter how much you stretch. Slow, focused pressure into the muscle bellies, the attachments, and the connective tissue that's been locked up for months — sometimes years. Done well, it should feel intense but not bracing. We work with your body, not against it.",
    benefits: [
      "Releases chronic muscle adhesions and knots",
      "Reduces lower-back, neck, and shoulder pain",
      "Improves range of motion and posture",
      "Breaks up patterns from desk work or repetitive labor",
      "Lasting relief, not just temporary"
    ],
    goodFor: [
      "Chronic neck and shoulder pain",
      "Lower back tightness",
      "Postural issues from desk work",
      "Heavy laborers and tradesmen",
      "Athletes between training cycles"
    ],
    whatToExpect: [
      "Detailed intake — where it hurts, what makes it worse, what you've already tried.",
      "Slow, sustained pressure into the problem areas. We breathe through the intensity.",
      "I check in often — pressure should feel productive, never punishing.",
      "Drink water after. You may feel like you had a workout for a day or two — that's normal."
    ],
    duration: "60 or 90 minutes",
    faqs: [
      {
        q: "Does deep tissue have to hurt to work?",
        a: "No. Pain makes muscles guard, which is the opposite of what we want. Productive pressure feels like 'good intensity' you can breathe into. If you're flinching, the pressure is too much and we back off."
      },
      {
        q: "Will I be sore the next day?",
        a: "Often, yes — similar to a workout. Drink water, move gently, and it usually passes within 24-48 hours. The relief on the other side is the point."
      }
    ]
  },
  {
    slug: "sports-massage",
    name: "Sports Massage",
    shortName: "Sports",
    tagline: "Performance, recovery, and injury prevention for active bodies",
    metaTitle: "Sports Massage in Union, MO | Healing Hands By Nate",
    metaDescription:
      "Sports massage in Union, Missouri for athletes, weekend warriors, and active lifestyles. Pre-event, post-event, and recovery work to keep you moving.",
    intro:
      "Whether you're training for a half marathon, lifting heavy three days a week, or just refusing to slow down — sports massage keeps you in the game. We blend deep tissue, stretching, and movement work to find what's restricted, release it, and get your body moving the way it's supposed to.",
    benefits: [
      "Faster recovery between training sessions",
      "Reduced injury risk",
      "Improved range of motion and flexibility",
      "Better mind-body awareness for movement patterns",
      "Targeted work on sport-specific tightness"
    ],
    goodFor: [
      "Runners and endurance athletes",
      "Strength training and CrossFit",
      "Weekend warriors and recreational athletes",
      "Pre-event prep and post-event recovery",
      "Lingering soft-tissue injuries"
    ],
    whatToExpect: [
      "Movement assessment — we look at how your body is actually moving.",
      "Targeted work on the muscle groups your sport beats up the most.",
      "Active stretching and mobilization integrated into the session.",
      "Aftercare suggestions you can do between sessions."
    ],
    duration: "60 or 90 minutes",
    faqs: [
      {
        q: "When's the best time to get sports massage relative to an event?",
        a: "Lighter, brisker work 2-3 days before — never deep work the day before competition. Recovery work is fine 24-48 hours after. For ongoing training, weekly or biweekly is the sweet spot."
      }
    ]
  },
  {
    slug: "reiki",
    name: "Reiki Sessions",
    shortName: "Reiki",
    tagline: "Energy work for nervous system calm and inner clarity",
    metaTitle: "Reiki in Union, MO | Reiki Master Sessions | Healing Hands By Nate",
    metaDescription:
      "Reiki sessions with a certified Reiki Master in Union, Missouri. Gentle energy work to calm the nervous system, ease anxiety, and support emotional healing.",
    intro:
      "Reiki is the work I do when the body is asking for something quieter than massage. It's hands-on or hands-just-above the body — fully clothed, no oil, no pressure. As a Reiki Master, I hold space for your system to drop out of fight-or-flight and let whatever is ready to move, move. Some people feel warmth. Some feel emotional release. Some just sleep. All of it is the work.",
    benefits: [
      "Profound nervous system reset",
      "Eases anxiety, grief, and emotional overwhelm",
      "Supports recovery from trauma or burnout",
      "Improves sleep and mental clarity",
      "Pairs beautifully with talk therapy or coaching"
    ],
    goodFor: [
      "High-stress professionals and caregivers",
      "Grief, transitions, and big life changes",
      "Anxiety and overstimulation",
      "Anyone who can't 'turn it off'",
      "Clients who want healing without physical touch intensity"
    ],
    whatToExpect: [
      "Fully clothed, lying on the table — comfortable and warm.",
      "Light hands-on or hands-above-the-body contact at a series of positions.",
      "The session is mostly silent. You may drift, feel sensations, or simply rest.",
      "We talk briefly afterward about what came up — or not, if you'd rather sit with it."
    ],
    duration: "60 minutes",
    faqs: [
      {
        q: "Do I need to believe in Reiki for it to work?",
        a: "No. You don't need a particular belief system. Plenty of skeptics walk out feeling lighter and calmer. Show up, lie down, see what happens."
      },
      {
        q: "Can I combine Reiki with massage?",
        a: "Yes — I often weave a few minutes of Reiki into the end of a massage when the body is asking for it. If you want a dedicated combo session, just mention it when you book."
      }
    ]
  },
  {
    slug: "lomi-lomi-massage",
    name: "Lomi Lomi Massage",
    shortName: "Lomi Lomi",
    tagline: "Hawaiian flowing bodywork with deep rhythm and intention",
    metaTitle: "Lomi Lomi Massage in Union, MO | Healing Hands By Nate",
    metaDescription:
      "Authentic Lomi Lomi massage in Union, Missouri — Hawaiian flowing bodywork using the forearms in long, rhythmic strokes. Deep relaxation and emotional release.",
    intro:
      "Lomi Lomi is sometimes called 'loving hands' massage — Hawaiian bodywork that uses the forearms in long, continuous, dance-like strokes. It moves like waves rather than the start-stop you might be used to. The rhythm itself is what makes it work — it bypasses the part of your brain that wants to track every sensation and lets the body finally settle.",
    benefits: [
      "Deep, full-body relaxation",
      "Emotional release and unwinding",
      "Improved energy flow and mood",
      "Releases tension that traditional massage misses",
      "Unique, deeply restorative experience"
    ],
    goodFor: [
      "People who feel 'stuck' in their bodies",
      "Emotional or creative blocks",
      "Anyone wanting something different from standard massage",
      "Burnout recovery",
      "Those who love long, continuous strokes"
    ],
    whatToExpect: [
      "Longer warming and grounding at the start.",
      "Forearms used as the primary tool — long, sweeping strokes.",
      "The work flows continuously rather than working area by area.",
      "Emotional release is common — and welcome. We move through it gently."
    ],
    duration: "75 or 90 minutes",
    faqs: [
      {
        q: "How is Lomi Lomi different from Swedish?",
        a: "Swedish is structured — it works one area at a time with hands. Lomi Lomi uses the forearms and flows continuously, almost like a dance. The intent is different too: Swedish is about relaxation, Lomi Lomi is about flow and release."
      }
    ]
  },
  {
    slug: "hot-stone-massage",
    name: "Hot Stone Massage",
    shortName: "Hot Stone",
    tagline: "Heated basalt stones for deep, melting muscle release",
    metaTitle: "Hot Stone Massage in Union, MO | Healing Hands By Nate",
    metaDescription:
      "Hot stone massage in Union, Missouri using heated basalt stones to melt deep tension. Pairs the warmth of stone therapy with skilled massage technique.",
    intro:
      "Heated basalt stones do something that hands alone can't — the heat penetrates muscle deeper and faster, so by the time I'm working manually, your body has already let go. Especially good in winter, after long weeks, or any time the cold has set up shop in your shoulders and won't leave.",
    benefits: [
      "Deep muscle warming and release",
      "Eases joint stiffness, especially in cold months",
      "Improves circulation",
      "Profound relaxation and sleep improvement",
      "Helps chronic tension that resists hands-only work"
    ],
    goodFor: [
      "Cold-weather muscle stiffness",
      "Chronic tension and 'frozen' areas",
      "Arthritic joints (with care)",
      "Stress and insomnia",
      "Anyone who runs cold"
    ],
    whatToExpect: [
      "Stones are heated to a safe, deeply warm temperature — not hot.",
      "I place stones along key muscle groups while I work other areas.",
      "Stones are also used as massage tools — gliding strokes with heat.",
      "Hydrate well after. You'll feel like you sat in the sun for an hour."
    ],
    duration: "60 or 90 minutes",
    faqs: [
      {
        q: "Are the stones safe? They look hot.",
        a: "I check temperature before every placement. They're warm enough to penetrate, never hot enough to burn. If anything ever feels too warm, you tell me and we adjust immediately."
      },
      {
        q: "Can I do hot stone if I have high blood pressure?",
        a: "Usually yes, but tell me at intake. We may modify duration or skip certain placements depending on your specifics. Pregnancy, certain heart conditions, and recent injuries are also worth discussing."
      }
    ]
  },
  {
    slug: "trigger-point-therapy",
    name: "Trigger Point Therapy",
    shortName: "Trigger Point",
    tagline: "Precise pressure to release the knots driving referred pain",
    metaTitle: "Trigger Point Therapy in Union, MO | Healing Hands By Nate",
    metaDescription:
      "Trigger point therapy in Union, MO. Targeted pressure on tight muscle bands to release referred pain patterns — headaches, sciatica, jaw pain, more.",
    intro:
      "Trigger points are the tight little knots that don't just hurt where they are — they refer pain somewhere else entirely. The headache that's actually coming from your neck. The shoulder pain that's actually a knot in your back. We find them, hold pressure precisely, breathe, and watch the referred pain pattern unwind.",
    benefits: [
      "Resolves headaches with muscular origin",
      "Releases referred pain patterns",
      "Reduces sciatica and nerve-like pain",
      "Eases jaw and TMJ tension",
      "Highly targeted — efficient when you know what's wrong"
    ],
    goodFor: [
      "Tension headaches and migraines",
      "Jaw and TMJ pain",
      "Sciatica-pattern leg pain",
      "Frozen shoulder and impingement",
      "Pain that doesn't match the obvious source"
    ],
    whatToExpect: [
      "We map out your pain pattern in detail at intake.",
      "Sustained pressure on specific points — usually 30-90 seconds each.",
      "Pressure is intense at first, then 'releases' as the knot lets go.",
      "Pain referral often eases dramatically by the end of the session."
    ],
    duration: "60 minutes",
    faqs: [
      {
        q: "Why does pressing on my back help my headache?",
        a: "Trigger points refer pain along predictable patterns. A knot in the upper trap or sub-occipitals can drive what feels like a headache behind the eye. Releasing the knot at the source ends the referred pain."
      }
    ]
  },
  {
    slug: "lymphatic-drainage-massage",
    name: "Lymphatic Drainage Massage",
    shortName: "Lymphatic",
    tagline: "Light, rhythmic strokes to support detox and reduce swelling",
    metaTitle: "Lymphatic Drainage Massage in Union, MO | Healing Hands By Nate",
    metaDescription:
      "Manual lymphatic drainage in Union, Missouri. Gentle, rhythmic technique to reduce swelling, support immunity, and aid post-surgical or post-illness recovery.",
    intro:
      "Lymphatic drainage looks deceptively gentle, but it's some of the most precise work I do. The lymph system sits just under the skin — using too much pressure actually shuts it down. The right featherlight rhythm activates lymph flow, helps your body clear inflammation, and supports immunity. It's a workhorse for post-surgery recovery, chronic inflammation, and stubborn puffiness.",
    benefits: [
      "Reduces swelling and water retention",
      "Supports post-surgical recovery (cosmetic and reconstructive)",
      "Aids recovery from illness and inflammation",
      "Boosts immune function",
      "Calming and deeply restorative"
    ],
    goodFor: [
      "Post-surgical recovery (with surgeon clearance)",
      "Chronic inflammation or autoimmune conditions",
      "Lymphedema management (mild cases)",
      "Recovery from illness",
      "Anyone with persistent puffiness or sluggish circulation"
    ],
    whatToExpect: [
      "Very light pressure — like a slow brushing of the skin.",
      "Rhythmic, repeated strokes following lymphatic pathways.",
      "Always toward the major lymph nodes — direction matters.",
      "Gentler than any other massage I offer, and surprisingly powerful."
    ],
    duration: "60 or 90 minutes",
    faqs: [
      {
        q: "I just had surgery — when can I get lymphatic drainage?",
        a: "Always check with your surgeon first. For most cosmetic surgeries, the cleared window is often around 72 hours post-op for very gentle work. Bring your surgeon's clearance and any post-op instructions."
      },
      {
        q: "Can lymphatic drainage really help with bloating?",
        a: "It can help with fluid-retention puffiness and sluggish circulation. It's not a weight-loss tool — anyone who tells you that is selling something. But for inflammation and water retention, it's genuinely effective."
      }
    ]
  },
  {
    slug: "cupping",
    name: "Cupping Therapy",
    shortName: "Cupping",
    tagline: "Suction cups to release deep fascia and chronic tension",
    metaTitle: "Cupping Therapy in Union, MO | Healing Hands By Nate",
    metaDescription:
      "Cupping therapy in Union, Missouri. Suction cup work to release stuck fascia, ease chronic muscle tension, and improve circulation. Often paired with massage.",
    intro:
      "Cupping is the inverse of massage — instead of pressing into the tissue, we lift it up and away from the body using suction. That decompression releases fascia and connective tissue that hands-only work struggles to reach. Yes, it can leave round marks for a few days. Those marks are doing the work — and they fade.",
    benefits: [
      "Releases stuck fascia that resists hands-only massage",
      "Improves circulation deep into tissue",
      "Reduces chronic muscle tightness",
      "Eases respiratory tension and tight chest",
      "Lasting effect — marks indicate real change"
    ],
    goodFor: [
      "Chronic upper-back and shoulder tightness",
      "Athletes with stubborn restrictions",
      "Tight chest from stress or posture",
      "Anyone whose tightness isn't responding to standard massage",
      "Adjunct to deep tissue or sports massage"
    ],
    whatToExpect: [
      "We discuss the marks beforehand — they look dramatic but are normal.",
      "Cups are placed and either left static or glided over oiled skin.",
      "Sensation is unusual — pulling, not pressing — but rarely painful.",
      "Marks usually fade in 3-7 days. Plan around any beach trips."
    ],
    duration: "30 minutes standalone, or add to any massage",
    faqs: [
      {
        q: "Do the marks hurt?",
        a: "The marks themselves don't hurt — the tissue may feel a bit tender for a day, similar to post-massage soreness. The marks are pulled stagnant blood and toxins coming to the surface; they fade naturally."
      },
      {
        q: "Should I do cupping standalone or add it to a massage?",
        a: "Honestly, most people benefit most when we add 15-20 minutes of cupping into a deep tissue or sports session. We get the suction work plus the manual work. Standalone cupping is great when you know exactly where you need it."
      }
    ]
  },
  {
    slug: "life-coaching",
    name: "Life Coaching",
    shortName: "Coaching",
    tagline: "Get clear on what's next — and actually move toward it",
    metaTitle: "Life Coaching in Union, MO | Certified Coach | Healing Hands By Nate",
    metaDescription:
      "Certified life coaching in Union, Missouri. Practical, direct coaching to clarify direction, break through stuck patterns, and take real action. In-person or virtual.",
    intro:
      "Coaching with me is not vibes-only. We meet, we get specific, we figure out what's actually in the way, and we leave with action you can take this week. I've worked with people in transitions — career pivots, relationship reckonings, health overhauls — and the through-line is always the same: clarity, then movement. As a Certified Life Coach with a body-based practice, I bring tools from both worlds.",
    benefits: [
      "Clarity on what you actually want next",
      "Concrete plan to get there — not just talk",
      "Accountability that actually feels supportive",
      "Body-based tools alongside mindset work",
      "Direct conversation, no fluff"
    ],
    goodFor: [
      "Career transitions and pivots",
      "Stuck patterns you keep repeating",
      "Big decisions you've been circling",
      "Burnout recovery and re-entry",
      "Anyone who's tired of overthinking and ready to move"
    ],
    whatToExpect: [
      "First session is longer — we map the full picture.",
      "Sessions are conversational but always end with a clear next move.",
      "Available in-person or virtually, whichever serves you better.",
      "Most clients work in 6 or 12 session blocks — change takes a minute."
    ],
    duration: "60 or 90 minute sessions",
    faqs: [
      {
        q: "What's the difference between coaching and therapy?",
        a: "Therapy looks backward to heal — coaching looks forward to act. Both have a place. If you need to process trauma or work with a clinical condition, see a licensed therapist. If you need clarity and forward movement, that's coaching."
      },
      {
        q: "Can I do coaching virtually?",
        a: "Yes — most coaching sessions work great over video. In-person is available too if you're local to Union or willing to travel. We'll pick what serves you best at intake."
      }
    ]
  }
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
