/**
 * data.js
 * ملف بيانات الصور — يربط كود كل مواصفة بمسار صورتها
 * 
 * طريقة الاستخدام:
 *   ضع صور المواصفات داخل مجلد images/
 *   اسم الصورة يطابق الكود بدون مسافات
 *   مثال: images/ASTM-C39.jpg
 *
 * ثم في index.html أضف قبل الكود الرئيسي:
 *   <script src="./data.js"></script>
 */

const INFOGRAPHICS = {
  "ASTM C31": "./images/ASTM-C31.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C172": "./images/ASTM-C172.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D1140": "./images/ASTM-D1140.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D3282": "./images/ASTM-D3282.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C29": "./images/ASTM-C29.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "BS EN 12390-8": "./images/BS-EN-12390-8.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C511": "./images/ASTM-C511.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C117": "./images/ASTM-C117.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D2419": "./images/ASTM-D2419.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C494": "./images/ASTM-C494.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C150": "./images/ASTM-C150.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D1883": "./images/ASTM-D1883.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C913": "./images/ASTM-C913.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C142": "./images/ASTM-C142.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ACI 211.1-22": "./images/ACI-211.1-22.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D1195": "./images/ASTM-D1195.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D1196": "./images/ASTM-D1196.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D854": "./images/ASTM-D854.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D4318": "./images/ASTM-D4318.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C94": "./images/ASTM-C94.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "DIN 18134": "./images/DIN-18134.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ACI 211": "./images/ACI-211.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D6913": "./images/ASTM-D6913.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C42": "./images/ASTM-C42.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ACI 214R-11": "./images/ACI-214R-11.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C39": "./images/ASTM-C39.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C131": "./images/ASTM-C131.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C136": "./images/ASTM-C136.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C127": "./images/ASTM-C127.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C702": "./images/ASTM-C702.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D75": "./images/ASTM-D75.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C1231": "./images/ASTM-C1231.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D1557": "./images/ASTM-D1557.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D2216": "./images/ASTM-D2216.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D2041": "./images/ASTM-D2041.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D6926": "./images/ASTM-D6926.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D2172": "./images/ASTM-D2172.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D2726": "./images/ASTM-D2726.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM D5444": "./images/ASTM-D5444.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C76": "./images/ASTM-C76.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C478": "./images/ASTM-C478.jpg",  // ← ضع مسار صورة هذه المواصفة هنا
  "ASTM C1433": "./images/ASTM-C1433.jpg"  // ← ضع مسار صورة هذه المواصفة هنا
};

/**
 * TOPICS_IMAGES — صور الموضوعات (تُستخدم في رأس الفئة)
 * اختياري: يمكنك إضافة صورة لكل موضوع
 */
const TOPICS_IMAGES = {
  "خرسانة":  "./images/topics/concrete.jpg",
  "تربة":    "./images/topics/soil.jpg",
  "ركام":    "./images/topics/aggregate.jpg",
  "أسفلت":  "./images/topics/asphalt.jpg",
  "أسمنت":  "./images/topics/cement.jpg",
  "إضافات": "./images/topics/additives.jpg",
  "مواسير": "./images/topics/pipes.jpg"
};
