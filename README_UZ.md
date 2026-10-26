# SUHROB AI — boshlang‘ich loyiha

Bu telefon, planshet va kompyuter brauzerlariga mos internet-ilova uchun boshlang‘ich loyiha.

## Nimalar bor?
- Premium qora/binafsha rangli, moslashuvchan chat interfeysi.
- O‘zbek tilidagi boshlang‘ich salomlashuv va tezkor promptlar.
- Server orqali AI API bilan suhbatlashish.
- API kaliti brauzerga chiqarilmaydi; u serverning `.env` faylida turadi.

## Muhim
Bu ZIP hali internetga joylashtirilmagan. Barcha telefonlarda ishlashi uchun loyihani Node.js qo‘llaydigan hostingga joylashtirish kerak. Haqiqiy AI javoblari uchun API kaliti va tegishli API hisob sozlamalari kerak; API ishlatish pulli bo‘lishi mumkin. Kalitni hech qachon `index.html` ichiga yozmang yoki boshqalarga yubormang.

## Kompyuterda sinash
1. Node.js o‘rnating.
2. Ushbu papkada terminal ochib `npm install` buyrug‘ini bajaring.
3. `.env.example` faylidan nusxa olib `.env` deb nomlang.
4. `.env` ichiga API kalitini kiriting. Model nomi hisobingizda mavjud bo‘lgan modelga mos bo‘lishi kerak.
5. `npm start` buyrug‘ini bajaring.
6. Brauzerda `http://localhost:3000` manzilini oching.

## Internetga chiqarish
Node.js ilovalarini qo‘llaydigan hostingga ushbu fayllarni joylashtiring va hostingning Environment Variables bo‘limida `OPENAI_API_KEY` hamda `OPENAI_MODEL` ni sozlang. Shundan keyin hosting bergan HTTPS manzili telefonlarda ham ochiladi.

## Fayllar
- `index.html` — sayt interfeysi.
- `server.js` — AI API bilan xavfsizroq server tomondagi ulanish.
- `package.json` — kerakli Node.js paketlari.
- `.env.example` — muhit o‘zgaruvchilari namunasi.
