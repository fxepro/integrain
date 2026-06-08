// Unsplash images — free to use, no download needed
// Format: https://images.unsplash.com/photo-{id}?w=1200&q=80&fit=crop

const U = 'https://images.unsplash.com'

export const IMAGES = {
  // Hero / Home
  homeHero:     `${U}/photo-1531206715517-5c0ba140b2b8?w=1200&q=80&fit=crop`,  // community gathering
  heroBanner:   `${U}/photo-1488521787991-ed7bbaae773c?w=1400&q=80&fit=crop`,  // helping hands

  // About
  aboutMission: `${U}/photo-1559027615-cd4628902d4a?w=800&q=80&fit=crop`,   // community empowerment
  aboutVision:  `${U}/photo-1521791136064-7986c2920216?w=800&q=80&fit=crop`, // handshake partnership
  aboutValues:  `${U}/photo-1582213782179-e0d53f98f2ca?w=800&q=80&fit=crop`, // diverse group

  // Services
  advocacy1:    `${U}/photo-1589994965851-a8f479c573a9?w=800&q=80&fit=crop`, // justice/law
  advocacy2:    `${U}/photo-1573496359142-b8d87734a5a2?w=800&q=80&fit=crop`, // speaking up
  community1:   `${U}/photo-1469571486292-0ba58a3f068b?w=800&q=80&fit=crop`, // community building
  community2:   `${U}/photo-1517486808906-6ca8b3f04846?w=800&q=80&fit=crop`, // people working together
  economic1:    `${U}/photo-1554224155-6726b3ff858f?w=800&q=80&fit=crop`,    // financial literacy
  education1:   `${U}/photo-1503676260728-1c00da094a0b?w=800&q=80&fit=crop`, // kids learning
  volunteer1:   `${U}/photo-1593113598332-cd288d649433?w=800&q=80&fit=crop`, // volunteers
  volunteer2:   `${U}/photo-1532629345422-7515f3d16bb6?w=800&q=80&fit=crop`, // community service

  // Research
  research1:    `${U}/photo-1434030216411-0b793f4b4173?w=800&q=80&fit=crop`, // research/study
  research2:    `${U}/photo-1551836022-deb4988cc6c0?w=800&q=80&fit=crop`,    // data analysis
  research3:    `${U}/photo-1507537297725-24a1c029d3ca?w=800&q=80&fit=crop`, // collaboration
  research4:    `${U}/photo-1521737711867-e3b97375f902?w=800&q=80&fit=crop`, // teamwork

  // Partner
  partner1:     `${U}/photo-1600880292203-757bb62b4baf?w=800&q=80&fit=crop`, // corporate meeting
  partner2:     `${U}/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop`, // team partnership
  partner3:     `${U}/photo-1573497019940-1c28c88b4f3e?w=800&q=80&fit=crop`, // individual giving
  partner4:     `${U}/photo-1560472354-b33ff0c44a43?w=800&q=80&fit=crop`,    // nonprofit collab

  // World / Crises
  world1:       `${U}/photo-1451187580459-43490279c0fa?w=1200&q=80&fit=crop`, // global
  world2:       `${U}/photo-1504711434969-e33886168f5c?w=800&q=80&fit=crop`,  // humanitarian
  world3:       `${U}/photo-1523365280197-f1783db9fe62?w=800&q=80&fit=crop`,  // crisis
  world4:       `${U}/photo-1488521787991-ed7bbaae773c?w=800&q=80&fit=crop`,  // aid

  // Donate / Give
  donate1:      `${U}/photo-1532629345422-7515f3d16bb6?w=800&q=80&fit=crop`, // giving
  africaChild:  `${U}/photo-1488521787991-ed7bbaae773c?w=800&q=80&fit=crop`, // children

  // Contact
  contact1:     `${U}/photo-1423666639041-f56000c27a9a?w=800&q=80&fit=crop`, // contact/office

  // Logo fallback (text-based, no image needed)
  logoFull:     '',
  logoCompact:  '',
  logoWhite:    '',
  logoLotus:    '',
  logoLotusWhite: '',
  fireCA:       `${U}/photo-1602197236679-5a8d27490c7a?w=1200&q=80&fit=crop`,
  politicianHero: `${U}/photo-1529107386315-e1a2ed48a620?w=1200&q=80&fit=crop`,
  qrCode:       '',
  smile:        '',
  heroBannerAlt: `${U}/photo-1488521787991-ed7bbaae773c?w=1400&q=80&fit=crop`,
} as const

export type ImageKey = keyof typeof IMAGES
