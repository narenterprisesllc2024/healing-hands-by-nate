// Condition / problem landing pages — content targeting search intent
// like "neck pain Union MO", "lower back pain after mowing", "tension headache relief"
// People search for symptoms BEFORE they search for modalities. Each page maps
// the condition to the modalities that help and ends with a booking CTA.

export type Condition = {
  slug: string;
  name: string;
  shortName: string;
  searchIntent: string; // the query this page targets
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whyItHappens: string[];
  whatHelps: { modality: string; slug: string; why: string }[];
  selfCareFirst: string[];
  whenToCallProfessional: string[];
  whenToReferOut: string; // scope-of-practice honest statement
  faqs: { q: string; a: string }[];
};

export const conditions: Condition[] = [
  {
    slug: "neck-pain-relief",
    name: "Neck Pain Relief",
    shortName: "Neck Pain",
    searchIntent: "massage for neck pain Union MO",
    tagline: "When your neck hurts and stretching isn't cutting it.",
    metaTitle:
      "Massage for Neck Pain in Union, MO — What Actually Helps | Healing Hands By Nate",
    metaDescription:
      "If your neck hurts after work, in the morning, or for no reason at all — here's what's actually causing it and which type of massage helps. 12+ years on the table in Union, Missouri.",
    intro:
      "Neck pain is the most common thing I work on. Not because necks are fragile — because the shape we hold them in is brutal. Phones, screens, driving, sleeping wrong. After 12+ years on the table I can usually predict where someone's neck is going to be tight before they even tell me. Here's what's going on, what helps, and what to actually book.",
    whyItHappens: [
      "Forward head posture from screens — every inch your head moves forward of your shoulders multiplies the load on your neck muscles by about ten pounds.",
      "Tight pec minor pulling your shoulders forward, which then pulls your neck along for the ride.",
      "Levator scapulae and upper traps locked in a shortened position from desk work or driving.",
      "Sleeping with a pillow that's too tall, too short, or stomach-sleeping with your head cranked sideways.",
      "Stress lives in the neck and shoulders for most people. When your nervous system is in fight-or-flight, your traps are working overtime."
    ],
    whatHelps: [
      {
        modality: "Deep Tissue Massage",
        slug: "deep-tissue-massage",
        why: "Targets the chronic restrictions in the levator scapulae, upper trap, and suboccipitals — the muscles most responsible for the pain pattern."
      },
      {
        modality: "Trigger Point Therapy",
        slug: "trigger-point-therapy",
        why: "Sustained pressure on specific knots that refer pain into the head, jaw, or shoulders. Especially good for tension headaches that start in the neck."
      },
      {
        modality: "Swedish Massage",
        slug: "swedish-massage",
        why: "If your neck pain is stress-driven (and a lot of it is), nervous system reset matters more than aggressive work. Calm the system, the neck releases."
      }
    ],
    selfCareFirst: [
      "Move your screen up so your eyes hit the top third of the monitor (not the middle).",
      "Set a 30-minute timer to do 5 slow neck rotations + chin tucks. Every cycle. No exceptions.",
      "Sleep on your back or side, not your stomach. Pillow height: your head should be roughly aligned with your spine.",
      "Heat — not ice — on the neck for chronic tightness. 15 minutes, 2x/day."
    ],
    whenToCallProfessional: [
      "Pain that won't quit after a week of self-care.",
      "Pain that wakes you up at night or gets worse in the morning.",
      "Tension headaches happening more than once a week.",
      "Restricted range of motion — can't turn your head to check your blind spot.",
      "Numbness, tingling, or weakness in your arms or hands."
    ],
    whenToReferOut:
      "If the pain is sharp, shooting into your arm, or paired with numbness or weakness, that's a referral to your doctor — soft tissue work alone isn't the right tool. I'd rather you get the right help than the help I can offer.",
    faqs: [
      {
        q: "How many sessions before my neck actually feels better?",
        a: "Most people feel meaningful change after one session. Lasting change usually takes 3–4 sessions over a month, paired with the self-care work between visits. Pattern was years in the making — patience helps."
      },
      {
        q: "Should I see a chiropractor or a massage therapist for neck pain?",
        a: "Honest answer: both, sometimes. If the joints are restricted, a chiropractor adjusts. If the tissue is locked up, that's my work. Often the joints feel stuck because the muscles pulling on them are locked — release the muscles first, the joints frequently free up on their own. If they don't, that's a referral."
      },
      {
        q: "Will deep tissue make my neck pain worse before it gets better?",
        a: "Not if it's done well. Light soreness for a day is normal — sharp pain or stiffness that's worse than what you came in with is not. We'll calibrate pressure to what your body can integrate, not what looks impressive on Instagram."
      }
    ]
  },
  {
    slug: "lower-back-pain-relief",
    name: "Lower Back Pain Relief",
    shortName: "Lower Back",
    searchIntent: "massage for lower back pain Union MO",
    tagline: "When your back hurts from sitting, lifting, or just being alive.",
    metaTitle:
      "Massage for Lower Back Pain in Union, MO — What Actually Works | Healing Hands By Nate",
    metaDescription:
      "Lower back pain from desk work, mowing, lifting, or sleeping wrong — here's what causes it and which type of massage actually helps. Union, MO + Franklin County.",
    intro:
      "Lower back pain is the second most common thing I see. The first thing most people don't realize: your back hurts because your hips lied to you. Tight hip flexors pull your pelvis forward and your low back arches to compensate. That's the pinch you feel when you stand up after sitting for hours. Here's what's actually going on and what to do about it.",
    whyItHappens: [
      "Tight hip flexors (psoas, iliacus) from sitting — they pull on your lumbar spine like a guy-wire.",
      "Weak glutes that have forgotten how to fire, so your low back muscles try to do the work instead.",
      "Locked-up QL (quadratus lumborum) from one-sided activities — mowing, carrying a kid on one hip, driving.",
      "Old injury patterns the body learned to compensate around, and never unlearned.",
      "Stress, again — the diaphragm and psoas are connected; when you're anxious, your low back holds it."
    ],
    whatHelps: [
      {
        modality: "Deep Tissue Massage",
        slug: "deep-tissue-massage",
        why: "Slow, focused work on the QL, glute med/min, and psoas attachments. The places no foam roller actually reaches."
      },
      {
        modality: "Trigger Point Therapy",
        slug: "trigger-point-therapy",
        why: "Specific knots in the glutes that refer pain into the low back and down the leg — common with sciatica-pattern complaints."
      },
      {
        modality: "Cupping Therapy",
        slug: "cupping-therapy",
        why: "Releases stuck fascia in the thoracolumbar fascia (the big sheet of connective tissue across your low back). Great paired with deep tissue."
      }
    ],
    selfCareFirst: [
      "Hip flexor stretch: kneeling lunge, 60 seconds per side, 2x/day. Not optional.",
      "Glute bridges, 15 reps, 2x/day. Wakes up the muscles that should be doing the work.",
      "If you sit for work: get up every 30 minutes. Walk for 2 minutes. Yes, every 30. Yes, every time.",
      "Heat before bed, ice if there's acute swelling or it's a fresh injury."
    ],
    whenToCallProfessional: [
      "Pain that limits your sleep or sex life.",
      "Pain that's getting worse over weeks, not better.",
      "Pain that radiates down one or both legs.",
      "Stiff mornings that take 30+ minutes to loosen up.",
      "Recurring back tweaks every time you bend, lift, or twist."
    ],
    whenToReferOut:
      "Sharp shooting pain into the leg, numbness, weakness, or any loss of bladder/bowel control is a medical issue — not a massage issue. Go to your doctor or urgent care. Soft tissue work supports recovery from disc and nerve issues, but it's not the first stop.",
    faqs: [
      {
        q: "Is massage safe if I have a herniated disc?",
        a: "Often yes, but it depends on the stage and severity. I work with your doctor's clearance and adjust accordingly — soft tissue around the area, not deep work directly on a fresh herniation. Tell me what your imaging showed."
      },
      {
        q: "Why does my back hurt more after mowing or yard work?",
        a: "Repetitive twist + push patterns lock up the QL and obliques on one side. The compensation creates a pull on the lumbar spine. Specific work on the QL and obliques same week as the activity prevents it from becoming chronic."
      },
      {
        q: "How often should I get worked on for chronic lower back pain?",
        a: "If it's been bothering you for months, plan on weekly for 3–4 weeks to break the pattern, then taper to once or twice a month for maintenance. Less than once a month usually isn't enough to outpace daily wear."
      }
    ]
  },
  {
    slug: "desk-job-shoulder-pain",
    name: "Desk Job Shoulder Pain",
    shortName: "Desk Shoulders",
    searchIntent: "massage for desk job shoulder pain Missouri",
    tagline: "Eight hours folded into a chair shape. Here's what to do about it.",
    metaTitle:
      "Desk Job Shoulder & Neck Pain Relief in Union, MO | Healing Hands By Nate",
    metaDescription:
      "If your shoulders and neck hurt from sitting at a desk all day, here's what's happening to your body and the massage work that actually fixes it. Union, MO + Franklin County.",
    intro:
      "If you sit at a desk for a living — and a lot of you do, between commuting to St. Louis and the work-from-home setups people built during the pandemic — your body has adapted to a shape that's making everything worse. Your hip flexors shortened. Your shoulders rolled forward. Your head went forward to see the screen. None of this is your fault. All of it is fixable. Here's how.",
    whyItHappens: [
      "Shoulders pull forward to support your hands on the keyboard. Pec minor and the front delt shorten; rhomboids and lower trap lengthen and weaken.",
      "Head juts forward to see the screen — multiplies the load on your neck.",
      "Hip flexors stuck in the shortened position all day. Stand up, pull on the low back.",
      "Glutes go to sleep. Hamstrings tighten. Adductors lock up. The whole posterior chain loses its job.",
      "Eyes locked at one focal distance for hours — eye strain feeds neck tension and headaches."
    ],
    whatHelps: [
      {
        modality: "Deep Tissue Massage",
        slug: "deep-tissue-massage",
        why: "Targeted release of pec minor, levator scapulae, upper trap, and the suboccipitals — the muscles that ARE the desk-worker pattern."
      },
      {
        modality: "Trigger Point Therapy",
        slug: "trigger-point-therapy",
        why: "Specific knots in the rhomboids and mid-back that refer pain through the shoulder blade. Common with desk workers."
      },
      {
        modality: "Sports Massage",
        slug: "sports-massage",
        why: "If you're also active outside of work, sports massage maintenance keeps the desk pattern from compounding with athletic load."
      }
    ],
    selfCareFirst: [
      "Open-book stretch: lie on your side, knees bent, top arm rotates open across your body, hold for 5 breaths. Do both sides, 2x/day. Costs you 4 minutes.",
      "Doorway pec stretch: 60 seconds per side, 2x/day. The pec minor is the chest muscle that's quietly running your bad posture.",
      "Set up your screen so the TOP of the monitor is at eye level. Not the middle. The top.",
      "Stand desk converter if you can. Alternate sit/stand every 30–45 minutes."
    ],
    whenToCallProfessional: [
      "Daily afternoon headaches that start in the neck and shoulders.",
      "Shoulder tightness that wakes you up at night.",
      "Stiffness so bad you can't fully turn your head while driving.",
      "Tingling or pins-and-needles in the hands or fingers.",
      "A persistent knot between your shoulder blades that nothing relieves."
    ],
    whenToReferOut:
      "Numbness or weakness in the arm or hand, especially if it follows a specific nerve pattern, is a referral. Could be thoracic outlet, cervical disc, or carpal tunnel — different than the soft-tissue tension I work with. Get it checked.",
    faqs: [
      {
        q: "Can a single massage really undo months of desk work?",
        a: "No. But it can give you a baseline to work from. Three or four sessions over a month, paired with the self-care work, breaks the pattern. After that, monthly maintenance keeps it from coming back."
      },
      {
        q: "I have a standing desk. Why does my back still hurt?",
        a: "Standing all day is a different bad posture than sitting all day. The right answer is movement — alternating standing, sitting, and walking. A standing desk by itself just trades one set of patterns for another."
      },
      {
        q: "Should I work from a couch or recliner instead?",
        a: "Almost always worse than a good desk setup. Reclined sitting puts you into a hip-flexor-shortened, rounded-shoulder shape that's tough to undo. A proper chair with monitor at eye level beats a couch every time."
      }
    ]
  },
  {
    slug: "tension-headaches",
    name: "Tension Headache Relief",
    shortName: "Headaches",
    searchIntent: "massage for tension headaches Union MO",
    tagline: "The afternoon headache that starts at the base of your skull.",
    metaTitle:
      "Massage for Tension Headaches in Union, MO | Healing Hands By Nate",
    metaDescription:
      "If you get headaches that start in the neck and shoulders, massage can stop them — and the right kind of work prevents them. Union, MO bodywork that targets the actual cause.",
    intro:
      "Most tension headaches don't start in the head. They start at the base of the skull, in the suboccipital muscles — the tiny ones connecting your skull to your top vertebrae. When those muscles get stuck (long days at a screen, jaw clenching, stress), they pull on the fascia that runs over the top of your head and across your forehead. That's the headache. You can take aspirin or you can release the muscles. The muscles take longer the first time, but they keep working.",
    whyItHappens: [
      "Suboccipital muscles locked in spasm from forward head posture or screen time.",
      "Jaw clenching — masseter and temporalis muscles refer tension directly into the temples and behind the eyes.",
      "Trigger points in the trapezius that refer pain UP into the back of the skull (classic referral pattern).",
      "Dehydration + caffeine cycles that throw off the nervous system.",
      "Eye strain from screens or uncorrected vision."
    ],
    whatHelps: [
      {
        modality: "Trigger Point Therapy",
        slug: "trigger-point-therapy",
        why: "Sustained pressure on the suboccipitals and upper trap trigger points that refer into the head. The most direct work for tension headaches."
      },
      {
        modality: "Deep Tissue Massage",
        slug: "deep-tissue-massage",
        why: "Releases the broader neck-shoulder-jaw pattern that the headaches sit on top of. Often the trigger points stay quiet longer after deep tissue work."
      },
      {
        modality: "Reiki",
        slug: "reiki-sessions",
        why: "If your headaches are stress-driven (and many are), nervous system regulation is the upstream fix. Reiki paired with bodywork is often the right move."
      }
    ],
    selfCareFirst: [
      "Drink water. Most chronic headache sufferers are mildly dehydrated all day. Aim for half your body weight in ounces.",
      "Jaw self-massage: with clean fingers, work the masseter (the muscle at the corner of your jaw) for 60 seconds, 2x/day.",
      "Tennis ball on the upper trap: lean against a wall, ball between your trap and the wall, find the tender spot, hold pressure for 90 seconds.",
      "Eye breaks every 20 minutes — 20 seconds looking at something 20 feet away. The 20-20-20 rule isn't optional if you live on a screen."
    ],
    whenToCallProfessional: [
      "Headaches more than once a week.",
      "Headaches that start in the neck and shoulders and creep up into the head.",
      "Headaches that get worse over the course of the workday.",
      "Headaches that respond to pressure on specific spots in the neck or shoulders.",
      "Jaw tightness or clicking paired with headache pattern."
    ],
    whenToReferOut:
      "Sudden severe headache, headache with vision changes or balance issues, headache after a head injury, or the worst headache of your life — that's an ER visit, not a massage. I treat tension headaches. Anything else needs a doctor first.",
    faqs: [
      {
        q: "Can massage cure my chronic headaches?",
        a: "Cure is the wrong frame. If they're tension-pattern headaches driven by neck/shoulder/jaw mechanics — yes, the right work makes them rare or gone. If they're migraines, hormone-driven, or something else, massage helps the nervous system but isn't the primary intervention."
      },
      {
        q: "How fast will I notice a difference?",
        a: "Most people get an immediate decrease in pressure after one session focused on the suboccipitals and upper trap. Lasting reduction in frequency usually takes 3–4 sessions over a month, paired with the self-care."
      },
      {
        q: "What's the difference between tension headaches and migraines?",
        a: "Tension headaches feel like a band around the head or pressure that builds up. Migraines are usually one-sided, throbbing, often with nausea or light sensitivity. Massage helps both but in different ways — and migraines need a doctor's diagnosis."
      }
    ]
  },
  {
    slug: "stress-and-anxiety-relief",
    name: "Stress & Anxiety Relief",
    shortName: "Stress & Anxiety",
    searchIntent: "massage for stress and anxiety Union MO",
    tagline: "When your nervous system has been running hot for months.",
    metaTitle:
      "Massage for Stress and Anxiety in Union, MO | Healing Hands By Nate",
    metaDescription:
      "If your shoulders never come down and your jaw is always clenched, that's your nervous system stuck in fight-or-flight. The right massage work resets it. Union, MO.",
    intro:
      "Most chronic tension isn't a muscle problem. It's a nervous system problem that lives in muscle. When your stress response stays on for weeks or months at a time, your body holds it — shoulders up around your ears, jaw clenched, breath shallow. The muscles never get the signal to stand down. Bodywork done well sends that signal. It's not about beating the tension out. It's about giving the nervous system permission to put the weapons down.",
    whyItHappens: [
      "Sympathetic nervous system (fight-or-flight) stuck in the 'on' position from chronic stress, financial pressure, family obligations, or grief.",
      "Shallow breathing — when you're anxious, you breathe high in the chest, which keeps the upper trap and scalenes working overtime.",
      "Vagal tone is low — the parasympathetic 'rest and digest' system isn't getting enough activation to reset baseline.",
      "Cortisol stuck high for too long. Eventually your tissue itself starts holding the pattern.",
      "Sleep is shallow or interrupted, which means the body never gets the deep repair window."
    ],
    whatHelps: [
      {
        modality: "Swedish Massage",
        slug: "swedish-massage",
        why: "Long, flowing strokes specifically downregulate the sympathetic nervous system. For stress and anxiety, gentle and slow beats deep and intense — every time."
      },
      {
        modality: "Reiki Sessions",
        slug: "reiki-sessions",
        why: "Energy work for nervous system reset. Works directly on the autonomic state without needing to think your way out of anxiety. Stand-alone or paired with massage."
      },
      {
        modality: "Hot Stone Massage",
        slug: "hot-stone-massage",
        why: "Heat penetrates deeper than pressure can. Excellent for full-body downregulation, especially in colder months when stress and tension stack."
      }
    ],
    selfCareFirst: [
      "Box breathing: in for 4, hold for 4, out for 4, hold for 4. Five rounds. Activates the vagus nerve directly.",
      "Cold water on the face for 60 seconds when anxiety spikes — also vagus nerve.",
      "Walk outside for 20 minutes daily. Not a workout. Just outside. Light + movement + open visual field tells your nervous system you're safe.",
      "Caffeine after 2pm is rarely helping anyone with anxiety. Try one week without and see."
    ],
    whenToCallProfessional: [
      "You've been holding tension in the same places for months.",
      "Sleep is disrupted — falling asleep, staying asleep, or both.",
      "Jaw clenching, teeth grinding, TMJ pain.",
      "Tension headaches paired with general anxiety.",
      "You can't remember what relaxed actually feels like."
    ],
    whenToReferOut:
      "If anxiety is severely impacting your daily life, work, or relationships — a therapist is the right tool, and I'd encourage that work alongside bodywork. The two are complementary. Soft tissue won't replace therapy or medication when those are what's actually needed.",
    faqs: [
      {
        q: "Is one massage enough to actually reduce anxiety?",
        a: "One session can shift your baseline for days. Lasting reduction in chronic anxiety usually needs a consistent rhythm — every two to four weeks paired with whatever else you're doing (therapy, breathwork, exercise, sleep work)."
      },
      {
        q: "Why does massage make me cry sometimes?",
        a: "Tissue holds emotion. When the body finally gets safety and slow attention, the nervous system releases what it's been holding. It's not a problem — it's the work. I won't make a thing of it. You don't have to explain."
      },
      {
        q: "Should I do Reiki or massage for anxiety?",
        a: "Both work. Massage is somatic — touch, pressure, breath. Reiki is energetic — quieter, no pressure, often more directly nervous-system-focused. Try one, see how it lands. Many people end up doing both."
      }
    ]
  }
];

export function getCondition(slug: string) {
  return conditions.find((c) => c.slug === slug);
}
