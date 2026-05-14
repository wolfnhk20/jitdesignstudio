// Curated photography from Unsplash - interior design / contemporary Indian luxury feel.
// Using direct CDN URLs (not AI-generated). Dimensions tuned for cinematic crops.
const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero:        u("photo-1618219944342-824e40a13285", 2200),
  living:      u("photo-1616486338812-3dadae4b4ace"),
  bedroom:     u("photo-1505693416388-ac5ce068fe85"),
  dining:      u("photo-1567016432779-094069958ea5"),
  kitchen:     u("photo-1556909114-f6e7ad7d3136"),
  nook:        u("photo-1493663284031-b7e3aefcae8e"),
  foyer:       u("photo-1560448204-e02f11c3d0e2"),
  bath:        u("photo-1552321554-5fefe8c9ef14"),
  workspace:   u("photo-1497366216548-37526070297c"),
  detail1:     u("photo-1513694203232-719a280e022f"),
  detail2:     u("photo-1600210492486-724fe5c67fb0"),
  detail3:     u("photo-1615874959474-d609969a20ed"),
};

// Extra Unsplash photos to flesh out per-project galleries.
export const GALLERY = {
  arched: [
    IMG.hero,
    u("photo-1616486338812-3dadae4b4ace"),
    u("photo-1616137422495-1e9e46e2aa77"),
    u("photo-1615529182904-14819c35db37"),
    u("photo-1600585154340-be6161a56a0c"),
    u("photo-1618221195710-dd6b41faaea6"),
  ],
  indigo: [
    IMG.bedroom,
    u("photo-1591088398332-8a7791972843"),
    u("photo-1616594039964-ae9021a400a0"),
    u("photo-1540518614846-7eded433c457"),
    u("photo-1616594266756-13a07d3e6d7a"),
  ],
  brass: [
    IMG.kitchen,
    u("photo-1556910103-1c02745aae4d"),
    u("photo-1565538810643-b5bdb714032a"),
    u("photo-1556909212-d5b604d0c90d"),
    u("photo-1600585154526-990dced4db0d"),
  ],
  foyer: [
    IMG.foyer,
    u("photo-1616137422495-1e9e46e2aa77"),
    u("photo-1615873968403-89e068629265"),
    u("photo-1600121848594-d8644e57abab"),
  ],
  suppers: [
    IMG.dining,
    u("photo-1554995207-c18c203602cb"),
    u("photo-1604578762246-41134e37f9cc"),
    u("photo-1615873968403-89e068629265"),
    u("photo-1615875605825-6a59e8b1a14b"),
  ],
  alcove: [
    IMG.nook,
    u("photo-1567016526105-22da7c13161a"),
    u("photo-1519710164239-da123dc03ef4"),
    u("photo-1513519245088-0e12902e5a38"),
  ],
  zellige: [
    IMG.bath,
    u("photo-1552321554-5fefe8c9ef14"),
    u("photo-1600488999180-f53e7a04a9d8"),
    u("photo-1600566753376-12c8ab7fb75b"),
    u("photo-1604014237800-1c9102c219da"),
  ],
  atelier: [
    IMG.workspace,
    u("photo-1524758631624-e2822e304c36"),
    u("photo-1593476550610-87baa860004a"),
    u("photo-1600494603989-9650cf6dad51"),
    u("photo-1593696140826-c58b021acf8b"),
  ],
  veranda: [
    IMG.living,
    u("photo-1600210491892-03d54c0aaf87"),
    u("photo-1616627781231-f70a52a7f70d"),
    u("photo-1615800098779-1be32e60cca3"),
    u("photo-1615529182904-14819c35db37"),
  ],
};
