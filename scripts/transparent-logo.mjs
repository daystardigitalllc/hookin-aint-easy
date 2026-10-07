import sharp from 'sharp';
const { data, info } = await sharp('logo.PNG').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const m = Math.max(data[i], data[i+1], data[i+2]);
  const a = Math.max(0, Math.min(1, (m - 22) / 50));
  data[i+3] = Math.round(a * 255);
}
await sharp(data, { raw: info }).trim().png().toFile('public/logo.png');
await sharp('public/logo.png').resize(64,64,{fit:'contain',background:'#0000'}).png().toFile('public/favicon.png');
console.log('ok');
