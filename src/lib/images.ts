// Curated photography from Unsplash — interior design / contemporary Indian luxury feel.
// Using direct CDN URLs (not AI-generated). Dimensions tuned for cinematic crops.
const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero:        u("photo-1618219944342-824e40a13285", 2200), // warm arched living room
  living:      u("photo-1616486338812-3dadae4b4ace"),
  bedroom:     u("photo-1505693416388-ac5ce068fe85"),       // moody indigo bedroom
  dining:      u("photo-1567016432779-094069958ea5"),       // long suppers
  kitchen:     u("photo-1556909114-f6e7ad7d3136"),          // brass + dark kitchen
  nook:        u("photo-1493663284031-b7e3aefcae8e"),       // reading nook
  foyer:       u("photo-1560448204-e02f11c3d0e2"),          // foyer entryway
  bath:        u("photo-1552321554-5fefe8c9ef14"),          // stone bath
  workspace:   u("photo-1497366216548-37526070297c"),       // studio workspace
  detail1:     u("photo-1513694203232-719a280e022f"),       // material detail
  detail2:     u("photo-1600210492486-724fe5c67fb0"),       // arch + brass
  detail3:     u("photo-1615874959474-d609969a20ed"),       // textured wall
};
