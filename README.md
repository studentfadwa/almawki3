# قصص الأنبياء للناشئة

تطبيق ويب تفاعلي موجّه للناشئة يقدّم قصص الأنبياء بأسلوب مبسّط وجذاب. التطبيق يعمل كتطبيق ويب تقدّمي (PWA) ويدعم العمل دون اتصال بشكل أساسي لصفحة البداية.

## المزايا
- واجهة عربية بالكامل مع اتجاه يمين-إلى-يسار.
- أداء سريع بفضل استخدام Vite وReact.
- يعمل كتطبيق ويب تقدّمي: `manifest.json` + `service worker` للتجربة الشبيهة بالتطبيق.
- دعم خطوط عربية (`Tajawal`) وتهيئة بسيطة عبر Tailwind CDN.
- إمكانية دمج الذكاء الاصطناعي عبر خدمة Gemini باستخدام المكتبة `@google/genai`.

## التقنيات المستخدمة
- React 19 + ReactDOM
- Vite 6
- TypeScript
- @google/genai
- PWA: ملف `manifest.json` وعامل خدمة `service-worker.js`

## متطلبات التشغيل
- Node.js
- مفتاح `GEMINI_API_KEY` يوضع في الملف `.env.local` في جذر المشروع.

## طريقة التشغيل محليًا
1. تثبيت الحزم:
   ```
   npm install
   ```
2. وضع مفتاح Gemini في `.env.local`:
   ```
   GEMINI_API_KEY=YOUR_KEY
   ```
3. تشغيل التطبيق:
   ```
   npm run dev
   ```

## البناء للإنتاج
```
npm run build
```
ينتج المجلد `dist/` الذي يحتوي ملفات الإنتاج الجاهزة للنشر.

## النشر على GitHub Pages
1. ادفع محتوى `dist` إلى فرع `gh-pages`:
   ```
   git add -f dist
   git commit -m "Build for GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```
2. من إعدادات المستودع في GitHub > Pages: اختر المصدر `gh-pages` والمسار `/`.
3. سيتوفر التطبيق على رابط مثل:
   ```
   https://<username>.github.io/almawki3/
   ```
ملاحظة: تمت تهيئة `vite.config.ts` ليستخدم `base: '/almawki3/'` لضمان تحميل الأصول بشكل صحيح من المسار الفرعي.

## التغليف إلى Android عبر PWABuilder
1. افتح: `https://www.pwabuilder.com/`
2. أدخل رابط التطبيق العام على GitHub Pages.
3. اتبع التعليمات لتوليد `APK` أو `AAB`.
4. يمكنك توقيع الحزمة أو استخدام مفتاح توقيع جديد عبر PWABuilder.

## البنية العامة للمشروع
```
almawki3/
├── components/            # مكوّنات الواجهة (بطاقات، عارض القصص، إلخ)
├── services/              # خدمات المحتوى ودمج Gemini
├── public/                # ملفات ثابتة تُنشر داخل dist (manifest, service-worker, icons)
├── index.html             # قالب HTML أساسي للتطوير
├── index.tsx              # نقطة دخول التطبيق
├── App.tsx                # المكوّن الجذري
├── vite.config.ts         # إعدادات Vite (base للنشر على Pages)
├── tsconfig.json          # إعداد TypeScript
└── README.md              # هذا الملف
```

## إعدادات الـPWA
- `public/manifest.json`: يحتوي معلومات التطبيق (الاسم، الألوان، العرض).
- الأيقونات: أنشئ مجلد `public/icons` وأضف:
  - `icon-192x192.png`
  - `icon-512x512.png`
  ثم أضفها داخل `manifest.json` تحت الحقل `icons`.
- `public/service-worker.js`: عامل خدمة بسيط للتخزين المؤقت الأساسي لصفحة البداية.

## ملاحظات أمنية
- لا ترفع `.env.local` إلى GitHub؛ الملف محجوب بالفعل عبر `.gitignore`.
- تجنّب نشر المفاتيح السرية ضمن البناء العام.

## تحسينات مستقبلية مقترحة
- إضافة صفحة إعدادات مع تبديل الثيم.
- تحسين التخزين المؤقت للعناصر والقصص بشكل ذكي.
- إضافة اختبارات وحدات وتكامل.

- ## موقع التطبيق الافضل لعرض قصص الانبياء
- https://rawafeedaleman.com/prophets-stories-for-kids روافد الايمان 
