/* =====================================================================
   Domim - content.js
   >>> THE ONLY FILE YOU EDIT FOR CONTENT: links, texts, products, photos, SEO <<<
   app.js builds every page from this data (you never need to touch it).
   Persian texts are in TEXT.fa, English texts in TEXT.en (same keys in both).
   ===================================================================== */

/* ---------- 0. SITE SETTINGS (used for SEO: canonical links, structured data) ---------- */
const SITE = {
  // !! REPLACE with your real domain, keep the trailing slash. Also replace the same text in
  //    index.html, albums.html, newspapers.html, bags.html, sitemap.xml and robots.txt (Find & Replace).
  url: 'https://domim-memories.ir//',
  // Picture shown when the site is shared in messengers / social media (1200 x 630 px). Put your own file here.
  ogImage: 'hero/og-image.webp'
};

/* ---------- 1. LINKS (replace the sample ones) ---------- */
// Footer contact buttons. Icons are read from icons/<name>.svg (telegram.svg, whatsapp.svg ...)
const LINKS = {
  telegram:  'https://t.me/Domim_memories',
  whatsapp:  'https://wa.me/989929596546',
  instagram: 'https://instagram.com/Domim_memories',
  bale:      'https://ble.ir/989929596546'
};
// Order button (the box under the photos on each product page): when the visitor taps it, these messengers pop out to choose from.
// The addresses are the ones in LINKS above (the same as the footer). Keys: telegram, whatsapp, instagram, bale. Order = order on screen.
const ORDER_CHANNELS = ['whatsapp', 'telegram', 'bale'];
// Where the designer name (last line of the footer) goes when clicked
const CREDIT_LINK = 'https://t.me/milad_tahajody';

/* ---------- 2. PRODUCTS ---------- */
// One row = one product tag:  [ folder name, Persian name, English name, photos ]
//   photos = a number  -> files are named  <folder name>-1.webp, <folder name>-2.webp ...
//            (e.g. 4 for "girls" means album/girls/girls-1.webp ... girls-4.webp)
//   photos = a list    -> your own file names, e.g. ['a.webp', 'b.webp']
// A group can have  display: 'showcase'  : instead of tags it shows ONE big photo with a selector of its rows (clicking an option shows that
// row's photo; only the FIRST photo of each row is used). It sits above the tag rows (used for "Album Types").
// Groups without it are tags that open their photos below.
// To add a product: add a row. To remove one: delete its row. Rows show in the order written.
// Optional cover picture of each category card on Home: <folder>/<folder>-cover.webp (e.g. album/album-cover.webp)
const PRODUCTS = {
  albums: {
    folder: 'album',                 // image folder in the project root
    groups: [                        // each group = one row of tags (shown top to bottom)
      { title: { fa: 'انواع آلبوم', en: 'Album Types' }, display: 'showcase', items: [   // display:'showcase' = ONE big photo + a 4-option selector (ONE photo per option), not tags
        ['nostalgic',     'نوستالژیک (خودچسب)', 'Nostalgic (Self-adhesive)', 1],
        ['journal-style', 'ژورنالی (خودچسب)',   'Journal-style (Self-adhesive)', 1],
        ['shirt-style',   'پیراهنی',            'Shirt-style', 1],
        ['framed',        'قاب‌دار',            'Framed', 1]
      ]},
      { title: { fa: 'طرح‌های آلبوم', en: 'Album Designs' }, items: [
        ['girls',                'دخترانه',            'Girls', 4],
        ['boys',                 'پسرانه',             'Boys', 3],
        ['pregnancy',            'بارداری',            'Pregnancy', 12],
        ['girls-boys',           'دختر و پسر',         'Girls-Boys', 4],
        ['adult',                'بزرگسال',            'Adult', 3],
        ['family',               'خانواده',            'Family', 4],
        ['infant',               'نوزاد',              'Infant', 2],
        ['twins',                'دوقلو',              'Twins', 3],
        ['animals',              'حیوانات',            'Animals', 4],
        ['calligraphy',          'خوشنویسی',           'Calligraphy', 2],
        ['animation-characters', 'شخصیت‌های انیمیشنی', 'Animation Characters', 3],
        ['wedding',              'عروسی',              'Wedding', 4],
        ['events',               'مناسبت‌ها',          'Events', 2]
      ]}
    ]
  },
  cards: {                       // key = page name: cards.html (menu word: TEXT nav.cards); photos in card/<tag>/<tag>-1.webp ...
    folder: 'card',
    groups: [{ title: null, items: [
      ['teddy-girl', 'کارت ماه‌گرد تدی دخترانه',   'Girl Teddy Moon Card', 3],
      ['teddy-boy',  'کارت ماه‌گرد تدی پسرانه',    'Boy Teddy Moon Card', 3],
      ['baby',       'کارت ماه‌گرد نی‌نی کوچولو',  'Little Baby Moon Card', 3],
      ['animals',    'کارت ماه‌گرد حیوانات',       'Animals Moon Card', 3]
    ]}]
  },
  newspapers: {
    folder: 'newspaper',
    groups: [{ title: null, items: [   // title: null = no label above the tags
      ['pregnancy',  'بارداری',      'Pregnancy', 2],
      ['birthday',   'تولد',         'Birthday', 3],
      ['graduation', 'فارغ‌التحصیلی', 'Graduation', 4],
      ['wedding',    'عروسی',        'Wedding', 3],
      ['valentine',  'ولنتاین',      'Valentine', 2]
    ]}]
  },
  bags: {
    folder: 'bag',
    groups: [{ title: null, items: [
      ['tote-bag',     'توت‌بگ',   'Tote-bag', 4],
      ['shoulder-bag', 'کیف دوشی', 'Shoulder-bag', 3]
    ]}]
  }
};

/* ---------- 2b. REVIEW SCREENSHOTS (Home, "Customer reviews") ---------- */
// How many screenshots the horizontal review gallery has. Files: review/review-1.webp ... review/review-N.webp
// (webp, 16:9 desktop screenshot). Change this number when you add or remove files.
const REVIEW_COUNT = 5;

/* ---------- 3. TEXTS (all sample copy: replace with real content) ---------- */
const TEXT = {
  fa: {
    brand: 'دومیم',
    // ----- header + footer -----
    skip: 'پرش به محتوا',                      // keyboard "skip to content" link
    navLabel: 'منوی اصلی',                     // screen-reader name of the header menu
    nav: { home: 'خانه', albums: 'آلبوم‌ها', newspapers: 'روزنامه‌ها', bags: 'کیف‌ها', cards: 'کارت‌ها' },
    contact: 'تماس با ما',
    contactShort: 'تماس',                      // short label, used only on tiny phones
    contactTitle: 'ارتباط با ما',               // title above the footer buttons
    contactText: 'عکس‌هایتان را بفرستید، بقیه‌اش با ما.',   // line under the footer title
    social: { telegram: 'تلگرام', whatsapp: 'واتساپ', instagram: 'اینستاگرام', bale: 'بله' },   // footer button labels
    footProducts: 'محصولات',                   // footer column titles
    footPopular: 'پرطرفدار',
    popular: [                                 // footer "popular" links: [label, page#tag]
      ['آلبوم نوزاد',     'albums.html#infant'],
      ['آلبوم بارداری',   'albums.html#pregnancy'],
      ['روزنامه بارداری', 'newspapers.html#pregnancy'],
      ['توت‌بگ سفارشی',   'bags.html#tote-bag']
    ],
    toTop: 'بازگشت به بالا',
    rights: 'تمامی حقوق محفوظ است.',
    credit: ['طراحی توسط', 'میلاد تهجدی'],       // [text before, clickable name]
    // ----- browser tab titles + search-engine description + keywords (one per page) -----
    titles: {
      home: 'دومیم | آلبوم نوزاد، روزنامه بارداری و توت‌بگ سفارشی',
      albums: 'دومیم | آلبوم نوزاد، بارداری و کودک سفارشی',
      newspapers: 'دومیم | روزنامه بارداری و روزنامه خاطره سفارشی',
      bags: 'دومیم | توت‌بگ و کیف دوشی سفارشی',
      cards: 'دومیم | کارت ماه‌گرد نوزاد؛ تدی، نی‌نی کوچولو و حیوانات'
    },
    descriptions: {
      home: 'دومیم؛ ساخت آلبوم نوزاد، آلبوم بارداری، روزنامه بارداری و توت‌بگ سفارشی با عکس‌ها و خاطرات شما. هدیه‌ای ماندگار برای نوزاد، مادر و خانواده.',
      albums: 'آلبوم نوزاد، آلبوم بارداری و آلبوم کودک سفارشی در طرح‌های نوستالژیک، ژورنالی، پیراهنی و قاب‌دار؛ ساخته‌شده با عکس‌های شما.',
      newspapers: 'روزنامه بارداری، روزنامه تولد و روزنامه خاطره سفارشی؛ اعلام خبر خوب بارداری و ثبت لحظه‌های ماندگار با عکس و متن شما.',
      bags: 'توت‌بگ و کیف دوشی سفارشی با چاپ عکس و طرح دلخواه؛ هدیه‌ای کاربردی و خاطره‌ساز برای مادر و نوزاد.',
      cards: 'کارت ماه‌گرد نوزاد با طرح تدی دخترانه و پسرانه، نی‌نی کوچولو و حیوانات؛ برای ثبت عکس ماهانه و خاطرات ماه‌به‌ماه نوزاد.'
    },
    keywords: {
      home: 'آلبوم نوزاد, آلبوم بارداری, روزنامه بارداری, توت بگ سفارشی, آلبوم کودک, هدیه نوزاد, هدیه بارداری, آلبوم عکس سفارشی, روزنامه سفارشی, کیف سفارشی, دومیم',
      albums: 'آلبوم نوزاد, آلبوم بارداری, آلبوم کودک, آلبوم دخترانه, آلبوم پسرانه, آلبوم دوقلو, آلبوم خودچسب, آلبوم نوستالژیک, آلبوم قاب‌دار, آلبوم عکس سفارشی, آلبوم خانوادگی',
      newspapers: 'روزنامه بارداری, روزنامه سفارشی, روزنامه تولد, روزنامه خاطره, روزنامه عروسی, روزنامه ولنتاین, روزنامه فارغ‌التحصیلی, هدیه بارداری, اعلام خبر بارداری',
      bags: 'توت بگ, توت‌بگ سفارشی, کیف دوشی سفارشی, کیف چاپ عکس, کیف مادر و نوزاد, کیف پارچه‌ای, هدیه نوزاد, کیف سفارشی',
      cards: 'کارت ماه گرد, کارت ماه‌گرد نوزاد, کارت ماه گرد تدی, کارت ماه گرد دخترانه, کارت ماه گرد پسرانه, کارت ماه گرد حیوانات, عکس ماهانه نوزاد, کارت ماهگرد نی نی'
    },
    // ----- home page -----
    heroAlt: 'آلبوم نوزاد، روزنامه بارداری و توت‌بگ دومیم',   // alt text of hero/hero.webp
    hero: ['هر خاطره، یک اثر ماندگار', 'آلبوم نوزاد و بارداری، روزنامه بارداری و توت‌بگ اختصاصی؛ ساخته‌شده با عکس‌ها و داستان شما.'],   // [title, text]
    heroCta: ['مشاهده محصولات', 'سفارش در پیام‌رسان'],     // [button 1, button 2]
    productsTitle: 'محصولات ما',
    productsSub: 'یکی را انتخاب کنید و طرح‌ها را ببینید.',
    view: 'مشاهده طرح‌ها',                                   // small button on each category card
    categoryText: { albums: 'طرح اختصاصی با عکس‌های شما', newspapers: 'روزنامه خاطره برای مناسبت شما', bags: 'کیف سفارشی با طرح دلخواه', cards: 'کارت ماه‌گرد برای ثبت ماه‌به‌ماه نوزاد' },  // under each category card and page title
    stepsTitle: 'مراحل سفارش',
    steps: [   // each row: [title, text]  (icons are fixed by position: pick, photos, approve, receive)
      ['انتخاب محصول', 'محصول و طرح مورد علاقه‌تان را انتخاب کنید.'],
      ['ارسال عکس و متن', 'عکس‌ها و متن دلخواه را در پیام‌رسان بفرستید.'],
      ['تأیید طرح', 'پیش‌نمایش طرح را بررسی و تأیید کنید.'],
      ['دریافت سفارش', 'سفارش آماده و بسته‌بندی‌شده به دستتان می‌رسد.']
    ],
    whyTitle: 'چرا دومیم؟',
    why: [     // each row: [icon key, title, text]. Icon keys: handmade | designs | quality | support (do not rename)
      ['handmade', 'دست‌ساز', 'هر سفارش با دقت و اختصاصی ساخته می‌شود.'],
      ['designs', 'طرح‌های متنوع', 'ده‌ها طرح برای هر سلیقه و مناسبت.'],
      ['quality', 'کیفیت بالا', 'مواد باکیفیت و ماندگار.'],
      ['support', 'پشتیبانی سریع', 'پاسخگویی در تلگرام، واتساپ و اینستاگرام.']
    ],
    reviewsTitle: 'نظر مشتریان',
    reviewsCount: '{n} نظر مشتری',                         // always-visible total ({n} = REVIEW_COUNT)
    reviewsRange: 'نمایش {a} تا {b} از {n} نظر',            // shown while the row can scroll ({a}-{b} = visible shots)
    reviewsOne: 'نمایش نظر {a} از {n}',                    // shown instead when only one screenshot is visible (phones)
    reviewsHint: 'برای دیدن بقیه به کنار بکشید',          // sideways-scroll hint (drag with the mouse, swipe on touch screens)
    orderVia: 'ارسال سفارش از طریق',                       // small title above the messengers that pop out of the order button
    showCount: '{a} از {n}',                              // counter next to a showcase title (Album Types) while its options scroll sideways: chosen option of total
    faqTitle: 'سؤالات متداول',
    faq: [     // each row: [question, answer]
      ['زمان تحویل چقدر است؟', 'معمولاً بین ۵ تا ۱۰ روز کاری، بسته به نوع سفارش.'],
      ['چطور سفارش بدهم؟', 'با دکمه تماس، در پیام‌رسان‌ها با ما در ارتباط باشید.'],
      ['به شهرستان ارسال دارید؟', 'بله، به سراسر کشور ارسال می‌کنیم.'],
      ['امکان تغییر طرح هست؟', 'قبل از چاپ، تا دو بار ویرایش رایگان است.']
    ],
    // ----- product pages: call-to-action box under the photos -----
    orderCta: {                                           // order box under the photos: [title, text, button text] for each page
      albums:     ['آلبوم رویایی‌تان را بسازیم؟', 'عکس‌ها و نوع آلبوم دلخواهتان را برایمان بفرستید تا همان را برایتان طراحی و چاپ کنیم.', 'سفارش آلبوم'],
      newspapers: ['خبر خوبتان را به روزنامه تبدیل کنیم؟', 'مناسبت و عکس‌هایتان را بگویید تا یک روزنامه‌ی اختصاصی برایتان آماده کنیم.', 'سفارش روزنامه'],
      bags:       ['توت‌بگ مخصوص خودتان؟', 'طرح یا عکس دلخواهتان را بفرستید تا روی کیف چاپ کنیم.', 'سفارش کیف'],
      cards:      ['کارت ماه‌گرد نی‌نی شما؟', 'طرح دلخواه و نام نوزادتان را بگویید تا کارت ماه‌گردش را برایتان بسازیم.', 'سفارش کارت']
    },
    close: 'بستن'                                // lightbox close button
  },
  en: {
    brand: 'Domim',
    skip: 'Skip to content',
    navLabel: 'Main menu',
    nav: { home: 'Home', albums: 'Albums', newspapers: 'Newspapers', bags: 'Bags', cards: 'Cards' },
    contact: 'Contact Us',
    contactShort: 'Contact',
    contactTitle: 'Get in touch',
    contactText: 'Send us your photos, we take it from there.',
    social: { telegram: 'Telegram', whatsapp: 'WhatsApp', instagram: 'Instagram', bale: 'Bale' },
    footProducts: 'Products',
    footPopular: 'Popular',
    popular: [
      ['Newborn album',        'albums.html#infant'],
      ['Pregnancy album',      'albums.html#pregnancy'],
      ['Pregnancy newspaper',  'newspapers.html#pregnancy'],
      ['Custom tote bag',      'bags.html#tote-bag']
    ],
    toTop: 'Back to top',
    rights: 'All rights reserved.',
    credit: ['Designed by', 'Milad Tahajody'],
    titles: {
      home: 'Domim | Newborn albums, pregnancy newspapers & custom tote bags',
      albums: 'Domim | Custom newborn, pregnancy & baby albums',
      newspapers: 'Domim | Custom pregnancy & keepsake newspapers',
      bags: 'Domim | Custom tote bags & shoulder bags',
      cards: 'Domim | Baby milestone cards: teddy, little baby & animal moon cards'
    },
    descriptions: {
      home: 'Domim makes custom newborn albums, pregnancy albums, pregnancy newspapers and tote bags from your photos and memories. A lasting gift for babies, mothers and families.',
      albums: 'Custom newborn, pregnancy and baby photo albums in nostalgic, journal, shirt and framed styles, made from your photos.',
      newspapers: 'Custom pregnancy newspapers, birthday newspapers and keepsake newspapers: announce good news and keep special moments with your photos and words.',
      bags: 'Custom tote bags and shoulder bags printed with your photos and designs: a useful, memorable gift for mothers and babies.',
      cards: 'Round moon milestone cards for babies with girl and boy teddy, little baby and animal designs: a lovely way to photograph and keep every month of the first year.'
    },
    keywords: {
      home: 'newborn album, pregnancy album, pregnancy newspaper, custom tote bag, baby photo album, baby gift, maternity gift, personalized photo album, custom newspaper, custom bag, Domim',
      albums: 'newborn album, pregnancy album, baby album, girl album, boy album, twins album, self-adhesive album, nostalgic album, framed album, custom photo album, family album',
      newspapers: 'pregnancy newspaper, custom newspaper, birthday newspaper, keepsake newspaper, wedding newspaper, valentine newspaper, graduation newspaper, pregnancy announcement',
      bags: 'tote bag, custom tote bag, custom shoulder bag, photo print bag, mom and baby bag, canvas bag, baby gift, custom bag',
      cards: 'baby milestone cards, moon milestone card, monthly baby photo card, teddy milestone card, girl milestone card, boy milestone card, animal milestone card, newborn photo props'
    },
    heroAlt: 'Domim newborn album, pregnancy newspaper and tote bag',
    hero: ['Every memory, made to last', 'Custom newborn and pregnancy albums, pregnancy newspapers and tote bags, built from your photos and your story.'],
    heroCta: ['See our products', 'Order by message'],
    productsTitle: 'Our products',
    productsSub: 'Pick one and browse the designs.',
    view: 'See designs',
    categoryText: { albums: 'A custom design with your photos', newspapers: 'A keepsake newspaper for your occasion', bags: 'A custom bag with your own design', cards: 'Moon cards to keep every month of your baby' },
    stepsTitle: 'How to order',
    steps: [
      ['Pick a product', 'Choose the product and design you like.'],
      ['Send photos and text', 'Send your photos and wording by message.'],
      ['Approve the design', 'Review the preview and approve it.'],
      ['Receive your order', 'Your order arrives ready and packaged.']
    ],
    whyTitle: 'Why Domim?',
    why: [
      ['handmade', 'Handmade', 'Every order is made with care, just for you.'],
      ['designs', 'Many designs', 'Dozens of designs for every taste and occasion.'],
      ['quality', 'High quality', 'Durable, quality materials.'],
      ['support', 'Fast support', 'We reply on Telegram, WhatsApp and Instagram.']
    ],
    reviewsTitle: 'Customer reviews',
    reviewsCount: '{n} customer reviews',
    reviewsRange: 'Showing {a} to {b} of {n} reviews',
    reviewsOne: 'Showing review {a} of {n}',
    reviewsHint: 'Drag or swipe sideways to see more',
    orderVia: 'Send your order via',
    showCount: '{a} of {n}',
    faqTitle: 'FAQ',
    faq: [
      ['How long does delivery take?', 'Usually 5 to 10 working days, depending on the order.'],
      ['How do I order?', 'Tap Contact Us and message us on any messenger.'],
      ['Do you ship nationwide?', 'Yes, we ship across the country.'],
      ['Can I change the design?', 'You get up to two free edits before printing.']
    ],
    orderCta: {
      albums:     ['Ready to create your dream album?', 'Send us your photos and the album type you like, and we will design and print it for you.', 'Order an album'],
      newspapers: ['Turn your good news into a newspaper?', 'Tell us the occasion and send your photos, and we will prepare a personal newspaper for you.', 'Order a newspaper'],
      bags:       ['A tote bag made just for you?', 'Send us the design or photo you love and we will print it on your bag.', 'Order a bag'],
      cards:      ['A moon card for your little one?', 'Tell us the design you like and your baby\'s name, and we will make the milestone card for you.', 'Order a card']
    },
    close: 'Close'
  }
};
