/**
 * Adnan Al Ramadani Trading - Bilingual Translation Dictionary
 * Languages: Arabic (ar) [Default, RTL] & English (en) [LTR]
 * Category: Pest Control Services Only - Muscat, Oman
 */

const translations = {
  ar: {
    // Brand & Global
    company_name: "عدنان الرمضاني للتجارة",
    company_tagline: "خدمات مكافحة الحشرات والآفات",
    company_full_title: "عدنان الرمضاني للتجارة - خدمات مكافحة الحشرات والآفات في مسقط",
    location_label: "مسقط، سلطنة عمان",
    phone_display: "+968 9704 5409",
    phone_clean: "+96897045409",
    whatsapp_number: "96897045409",
    whatsapp_default_msg: "مرحباً، أود الاستفسار عن خدمات مكافحة الحشرات لديكم.",

    // Navigation
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "خدماتنا",
    nav_projects: "أعمالنا",
    nav_contact: "اتصل بنا",
    nav_get_quote: "طلب عرض سعر",
    nav_call: "اتصل الآن",
    nav_whatsapp: "واتساب",
    lang_switch_label: "English",

    // Top Bar
    topbar_city: "مسقط، سلطنة عمان",
    topbar_hours: "خدمة العملاء والاستفسارات: السبت - الخميس",
    topbar_call_us: "اتصل بنا:",

    // Hero Section
    hero_title: "خدمات مكافحة الحشرات والآفات باحترافية في مسقط، سلطنة عمان",
    hero_desc: "نقدم حلولاً موثوقة لمكافحة الحشرات والآفات للمنازل والمنشآت التجارية في سلطنة عمان.",
    hero_cta_services: "استكشف خدماتنا",
    hero_cta_whatsapp: "تواصل عبر واتساب",
    hero_feature_1: "مبيدات آمنة وبدون روائح",
    hero_feature_2: "خدمات سكنية وتجارية",
    hero_feature_3: "تغطية شاملة لمحافظة مسقط",
    hero_feature_4: "معالجة دون مغادرة المنزل",
    hero_emergency_call: "اتصال مباشر واستفسارات فورية:",

    // Trust / Introduction Section
    intro_tag: "نبذة عن الشركة",
    intro_title: "خدمات مكافحة حشرات متخصصة تعتمد عليها",
    intro_p1: "تعد شركة عدنان الرمضاني للتجارة خيارك الموثوق في مسقط لتقديم خدمات مكافحة الآفات والحشرات المتكاملة. نلتزم بأعلى معايير الدقة والمسؤولية في معالجة مسببات الآفات، سواء في المنازل السكنية أو المنشآت التجارية والمكاتب.",
    intro_p2: "نركز حصرياً على خدمات مكافحة الآفات باستخدام أساليب فحص منهجية وحلول معالجة تتناسب مع طبيعة المبنى ونوع الحشرات، مع الاهتمام بسلامة البيئة المحيطة وراحة القاطنين دون الحاجة لمغادرة المكان في معظم المعالجات.",
    intro_badge_title: "تخصص حصري في مكافحة الآفات",
    intro_badge_desc: "نركز طاقتنا وخبراتنا حصرياً في تقنيات مكافحة الحشرات والقوارض.",
    intro_service_scope: "نطاق خدماتنا يشمل جميع مناطق مسقط (السيب، بوشر، مطرح، الخوير، العذيبة، الموالح، وغيرها).",

    // Services Overview Section
    services_section_tag: "خدماتنا المتخصصة",
    services_section_title: "حلول شاملة لمكافحة كافة أنواع الآفات",
    services_section_desc: "برامج متخصصة تستهدف الآفات الشائعة في سلطنة عمان بأساليب دقيقة وفعالة.",
    btn_learn_more: "تفاصيل الخدمة",
    btn_request_service: "اطلب الخدمة الآن",

    // 7 Core Services
    service_cockroach_title: "مكافحة الصراصير",
    service_cockroach_short: "معالجة شاملة للصراصير الألمانية والأمريكية في المطابخ وشبكات الصرف باستخدام جل خاص ومبيدات بدون رائحة.",
    service_cockroach_tag: "المطابخ والمصارف",

    service_termite_title: "مكافحة النمل الأبيض (الرمة)",
    service_termite_short: "حماية إنشائية متقدمة ضد النمل الأبيض قبل البناء ومعالجة بالحقن الموضعي للمباني القائمة والأبواب الخشبية.",
    service_termite_tag: "قبل وبعد البناء",

    service_bedbug_title: "مكافحة بق الفراش",
    service_bedbug_short: "بروتوكول علاجي مكثف للقضاء على بق الفراش وبيوضه في المراتب والأثاث لضمان بيئة نوم مريحة وصحية.",
    service_bedbug_tag: "غرف النوم والأثاث",

    service_ant_title: "مكافحة النمل",
    service_ant_short: "تتبع مسارات النمل واستئصال المستعمرات والملكات بالكامل باستخدام طعوم متخصصة وحواجز محيطية للمنازل.",
    service_ant_tag: "المنازل والحدائق",

    service_rodent_title: "مكافحة القوارض",
    service_rodent_short: "محطات طعوم آمنة ومصائد متطورة لمكافحة الفئران والجرذان في المنازل والمخازن مع إرشادات سد منافذ الدخول.",
    service_rodent_tag: "المخازن والمستودعات",

    service_mosquito_title: "مكافحة البعوض",
    service_mosquito_short: "تقنيات التضبيب الحراري والرذاذ فائق النعومة (ULV) للحدائق والأفنية الخارجية مع معالجة بؤر التكاثر.",
    service_mosquito_tag: "الحدائق والأفنية",

    service_general_title: "مكافحة الحشرات العامة",
    service_general_short: "حزام وقائي شامل ضد الحشرات الزاحفة والعناكب والآفات الموسمية لحماية عقارك على مدار العام.",
    service_general_tag: "حماية دورية شاملة",

    // Why Choose Us Section
    why_section_tag: "لماذا تختارنا",
    why_section_title: "التزام بالمهنية والدقة في كل زيارة",
    why_section_desc: "نحرص على بناء علاقة قائمة على الثقة والشفافية مع عملائنا في مسقط.",

    why_point1_title: "خدمة احترافية",
    why_point1_desc: "نهج منظم في تشخيص الإصابة وتحديد أنسب الحلول المتوافقة مع طبيعة العقار.",
    why_point2_title: "حلول تركز على العميل",
    why_point2_desc: "الاستماع لاحتياجاتك وجدولة المواعيد بما يتلاءم مع أوقاتك دون إرباك ليومك.",
    why_point3_title: "خدمات سكنية وتجارية",
    why_point3_desc: "حلول تناسب الفلل والشقق السكنية، وكذلك المكاتب والمحلات والمستودعات في مسقط.",
    why_point4_title: "تواصل سهل ومباشر",
    why_point4_desc: "تواصل فوري عبر الاتصال الهاتفي أو واتساب على الرقم المباشر 97045409 968+.",
    why_point5_title: "معالجات نوعية محددة",
    why_point5_desc: "استخدام مستحضرات متخصصة لكل آفة بشكل منفصل لضمان أعلى فاعلية ممكنة.",

    // How It Works Section
    process_section_tag: "خطوات الخدمة",
    process_section_title: "كيف تتم خدماتنا",
    process_section_desc: "أربع خطوات بسيطة وواضحة للحصول على المعالجة المناسبة لممتلكاتك.",
    step1_num: "01",
    step1_title: "تواصل معنا",
    step1_desc: "اتصل بنا هاتفياً أو عبر واتساب على الرقم 97045409 968+ واطرح استفسارك.",
    step2_num: "02",
    step2_title: "حدد مشكلة الآفات",
    step2_desc: "شاركنا تفاصيل نوع الآفة المشاهدة وموقع العقار داخل محافظة مسقط.",
    step3_num: "03",
    step3_title: "تنسيق المعاينة والمعالجة",
    step3_desc: "نحدد موعداً مناسباً لزيارة الموقع، فحص مستوى الإصابة، وتطبيق المعالجة.",
    step4_num: "04",
    step4_title: "المتابعة وفق الاتفاق",
    step4_desc: "متابعة أداء المعالجة وتقديم إرشادات وقائية للحد من عودة الآفات مستقبلاً.",

    // Projects Preview Section
    projects_section_tag: "نماذج الأعمال",
    projects_section_title: "معاينة لمشاريع ومعالجات مكافحة الآفات",
    projects_section_desc: "نماذج لبيئات العمل والمعالجات المطبقة في القطاعين السكني والتجاري.",
    filter_all: "الكل",
    filter_residential: "سكني",
    filter_commercial: "تجاري",
    filter_treatment: "معالجات متخصصة",
    btn_view_all_projects: "عرض كافة النماذج",

    // Testimonials Section
    testimonials_section_tag: "تجارب العملاء",
    testimonials_section_title: "ماذا يقول عملاؤنا",
    testimonials_section_desc: "نحرص على تحقيق أعلى درجات الرضا والراحة لكل عميل نتعامل معه.",
    testi_review_label: "مراجعة عميل",
    testi1_quote: "تمت معالجة مشكلة الصراصير في المطبخ بسرعة وبدون أي روائح مزعجة. تعامل راقٍ والتزام بالموعد المحدد.",
    testi1_author: "عميل في السيب",
    testi1_service: "مكافحة الصراصير - سكني",
    testi2_quote: "تواصل سريع ومباشر عبر واتساب، تم فحص ومعالجة الرمة في إطارات الأبواب باحترافية وهدوء تام.",
    testi2_author: "عميل في الخوير",
    testi2_service: "مكافحة النمل الأبيض - فيلا سكنية",
    testi3_quote: "خدمة منظمة لمكتبنا التجاري، محطات طعوم آمنة ومتابعة دقيقة ساعدتنا في الحفاظ على بيئة عمل خالية من الحشرات.",
    testi3_author: "منشأة تجارية في غلا",
    testi3_service: "مكافحة دورية - قطاع تجاري",

    // FAQ Section
    faq_section_tag: "الأسئلة الشائعة",
    faq_section_title: "إجابات على أكثر الاستفسارات تكراراً",
    faq_section_desc: "كل ما تود معرفته حول خدمات مكافحة الآفات في مسقط.",
    faq_q1: "ما هي خدمات مكافحة الحشرات التي تقدمونها؟",
    faq_a1: "نقدم حلولاً متخصصة لمكافحة الصراصير، النمل الأبيض (الرمة)، بق الفراش، النمل، القوارض والفئران، البعوض، والحشرات العامة الزاحفة والطائرة، مع تحديد خطة علاجية مخصصة لكل نوع.",
    faq_q2: "هل تقدمون خدمات مكافحة الآفات للمنازل السكنية؟",
    faq_a2: "نعم بكل تأكيد، نغطي الفلل والمنازل والشقق السكنية في مسقط، مع التركيز على مواد آمنة وغير مزعجة لأفراد الأسرة ومراعاة المطابخ وأماكن المعيشة.",
    faq_q3: "هل تقدمون خدمات مكافحة الآفات للمنشآت التجارية؟",
    faq_a3: "نعم، نقدم خدمات متخصصة للمكاتب والشركات، المستودعات، المحلات التجارية، والمطاعم بما يضمن بيئة عمل نظيفة ومطابقة للاشتراطات الصحية.",
    faq_q4: "كيف يمكنني طلب عرض سعر لخدمتكم؟",
    faq_a4: "يمكنكم طلب عرض سعر بسهولة عبر الاتصال مباشرة أو إرسال رسالة واتساب على الرقم 97045409 968+، أو ملء استمارة التواصل في الموقع وسنرد عليكم سريعاً.",
    faq_q5: "كيف يمكنني التواصل مع شركتكم وحجز موعد؟",
    faq_a5: "فريقنا متاح للتواصل عبر الهاتف وواتساب من السبت إلى الخميس. بمجرد تواصلكم، نحدد معكم الموعد الأنسب لزيارة موقعكم في مسقط وإجراء الفحص والمعالجة.",

    // Final CTA
    cta_headline: "هل تحتاج إلى خدمات مكافحة الحشرات في مسقط؟",
    cta_desc: "تواصل مع شركة عدنان الرمضاني للتجارة اليوم للحصول على استشارة سريعة وحلول موثوقة لحماية عقارك من الآفات.",
    cta_btn_call: "اتصل الآن: 97045409 968+",
    cta_btn_whatsapp: "تواصل معنا عبر واتساب",

    // Footer
    footer_about_p: "شركة عدنان الرمضاني للتجارة - خدمات متخصصة في مكافحة الحشرات والآفات للمنازل والمنشآت التجارية في محافظة مسقط، سلطنة عمان.",
    footer_quick_links: "روابط سريعة",
    footer_services_list: "قائمة الخدمات",
    footer_contact_info: "معلومات التواصل",
    footer_address_val: "محافظة مسقط، سلطنة عمان",
    footer_rights: "جميع الحقوق محفوظة © {year} شركة عدنان الرمضاني للتجارة.",
    footer_category_note: "خدمات متخصصة حصرياً في مكافحة الحشرات والآفات.",

    // About Page Specific
    about_hero_tag: "عن شركة عدنان الرمضاني للتجارة",
    about_hero_title: "التزام بالجودة والاحترافية في مكافحة الآفات في عمان",
    about_hero_desc: "نقدم حلولاً مدروسة لحماية المنازل والمنشآت من الآفات والحشرات في مسقط بأسلوب احترافي ومسؤول.",
    about_mission_title: "رسالتنا",
    about_mission_desc: "توفير بيئات معيشية وعملية صحية وخالية من الآفات في سلطنة عمان عبر تقديم خدمات مكافحة حشرات متخصصة تعتمد الدقة والسلامة ورضا العميل أساساً لعملنا.",
    about_approach_title: "نهجنا في العمل",
    about_approach_desc: "نؤمن بأن مكافحة الآفات الناجحة تبدأ بالتشخيص الدقيق لأسباب ظهور الحشرة ومصادر دخولها، ومن ثم تطبيق معالجة مستهدفة تحد من تكاثرها مع تقديم إرشادات وقائية مستدامة للمالك.",
    about_commitment_title: "التزامنا تجاه عملائنا",
    about_commitment_desc: "نلتزم بالشفافية الكاملة في عروض الأسعار، واحترام المواعيد المتفق عليها، والمحافظة على خصوصية ونظافة الممتلكات أثناء تنفيذ المعالجة.",
    about_res_com_title: "تغطية شاملة للقطاعين السكني والتجاري",
    about_res_com_desc: "سواء كنت صاحب فيلا تبحث عن راحة عائلتك من الحشرات، أو مدير منشأة بحاجة لبيئة عمل خالية من القوارض، فإن خدماتنا مصممة لتلبي احتياجات كل قطاع بدقة.",

    // Services Page Detailed
    services_page_hero_tag: "خدمات مكافحة الآفات",
    services_page_hero_title: "حلول علاجية ووقائية لكافة الآفات في مسقط",
    services_page_hero_desc: "استكشف خدماتنا التفصيلية المصممة للتعامل مع تحديات المناخ والبيئة المحلية في سلطنة عمان.",
    services_treatment_overview: "نظرة عامة على المعالجة:",
    services_common_problems: "علامات ومشاكل شائعة:",
    services_methods: "أساليب التدخل:",

    // Projects Page Detailed
    projects_page_hero_tag: "أعمالنا ومشاريعنا",
    projects_page_hero_title: "نماذج تطبيقية لخدمات مكافحة الآفات",
    projects_page_hero_desc: "استعرض بيئات المعالجة ونماذج التدخل السكني والتجاري في محافظة مسقط.",
    lightbox_close: "إغلاق",
    lightbox_prev: "السابق",
    lightbox_next: "التالي",

    // Contact Page Detailed
    contact_page_hero_tag: "تواصل معنا",
    contact_page_hero_title: "يسعدنا الرد على استفساراتكم وحجز المواعيد",
    contact_page_hero_desc: "تواصل معنا هاتفياً أو عبر واتساب أو من خلال النموذج أدناه لمناقشة احتياجات مكافحة الحشرات في عقارك.",
    contact_card_phone_title: "الاتصال الهاتفي",
    contact_card_phone_desc: "اتصال مباشر مع فريق الخدمة للاستفسار وحجز المواعيد.",
    contact_card_whatsapp_title: "المراسلة الفورية عبر واتساب",
    contact_card_whatsapp_desc: "أرسل تفاصيل المشكلة أو صور الإصابة للاستشارة السريعة.",
    contact_card_loc_title: "الموقع الجغرافي",
    contact_card_loc_desc: "مسقط، سلطنة عمان (خدمات متنقلة تغطي كافة ولايات مسقط).",
    contact_form_title: "طلب عرض سعر أو حجز موعد",
    contact_form_desc: "املأ البيانات التالية وسنتواصل معكم في أقرب وقت لتأكيد التفاصيل.",
    form_label_name: "الاسم الكامل",
    form_placeholder_name: "أدخل اسمك الكريم",
    form_label_phone: "رقم الهاتف / الواتساب",
    form_placeholder_phone: "مثال: 97045409 أو +968 9704 5409",
    form_label_service: "الخدمة المطلوبة",
    form_select_service_default: "-- اختر نوع الخدمة --",
    form_label_property: "نوع العقار",
    form_prop_residential: "سكني (فيلا / شقة / منزل)",
    form_prop_commercial: "تجاري (مكتب / محل / مخزن)",
    form_label_area: "المنطقة في مسقط",
    form_placeholder_area: "مثال: السيب، الخوير، بوشر، الموالح، العذيبة...",
    form_label_message: "وصف المشكلة / ملاحظات إضافية",
    form_placeholder_message: "اشرح باختصار نوع الحشرات المشاهدة أو متطلبات الموقع...",
    form_btn_submit: "إرسال طلب الاستفسار",
    form_btn_whatsapp_direct: "إرسال الطلب مباشرة عبر واتساب",
    form_sending: "جاري الإرسال...",
    form_success_title: "تم استلام طلبكم بنجاح!",
    form_success_msg: "شكراً لتواصلكم مع شركة عدنان الرمضاني للتجارة. سنقوم بمراجعة بياناتكم والتواصل معكم عبر الهاتف أو واتساب قريباً.",
    form_err_name: "يرجى إدخال الاسم الكريم.",
    form_err_phone: "يرجى إدخال رقم هاتف صحيح للتواصل.",
    form_err_service: "يرجى اختيار الخدمة المطلوبة.",
    form_err_area: "يرجى كتابة المنطقة داخل مسقط.",

    // Floating Button Tooltip
    whatsapp_floating_tooltip: "محادثة فورية عبر واتساب"
  },

  en: {
    // Brand & Global
    company_name: "Adnan Al Ramadani Trading",
    company_tagline: "Pest Control Services",
    company_full_title: "Adnan Al Ramadani Trading - Pest Control Services in Muscat",
    location_label: "Muscat, Sultanate of Oman",
    phone_display: "+968 9704 5409",
    phone_clean: "+96897045409",
    whatsapp_number: "96897045409",
    whatsapp_default_msg: "Hello, I would like to know more about your pest control services.",

    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_contact: "Contact Us",
    nav_get_quote: "Get a Quote",
    nav_call: "Call Now",
    nav_whatsapp: "WhatsApp",
    lang_switch_label: "العربية",

    // Top Bar
    topbar_city: "Muscat, Sultanate of Oman",
    topbar_hours: "Customer Inquiries: Saturday – Thursday",
    topbar_call_us: "Call Us:",

    // Hero Section
    hero_title: "Professional Pest Control Services in Muscat, Oman",
    hero_desc: "Reliable pest control solutions for residential and commercial properties in Oman.",
    hero_cta_services: "Explore Our Services",
    hero_cta_whatsapp: "WhatsApp Us Directly",
    hero_feature_1: "Safe & Odorless Treatments",
    hero_feature_2: "Residential & Commercial",
    hero_feature_3: "Full Muscat Coverage",
    hero_feature_4: "No Need to Vacate Property",
    hero_emergency_call: "Direct Hotline & Inquiries:",

    // Trust / Introduction Section
    intro_tag: "Company Introduction",
    intro_title: "Dedicated Pest Control Solutions You Can Rely On",
    intro_p1: "Adnan Al Ramadani Trading is your trusted partner for comprehensive pest and insect control services across Muscat and the Sultanate of Oman. We maintain strict standards of accuracy, care, and responsibility when resolving pest issues for residential homeowners and commercial establishments alike.",
    intro_p2: "We specialize solely in pest control services, applying methodical inspection protocols and customized treatments suited to property structures and specific infestations. Our priority is hygiene, environmental awareness, and minimal disruption to occupants, with no need to vacate in most situations.",
    intro_badge_title: "Dedicated Pest Control Focus",
    intro_badge_desc: "100% focused on modern pest management and targeted extermination techniques.",
    intro_service_scope: "Service coverage spans all areas of Muscat (Seeb, Bawshar, Muttrah, Al Khuwair, Al Azaiba, Al Mawaleh, etc.).",

    // Services Overview Section
    services_section_tag: "Our Services",
    services_section_title: "Targeted Treatments for Every Type of Pest",
    services_section_desc: "Specialized control programs engineered for common pests found in Oman's climate.",
    btn_learn_more: "Service Details",
    btn_request_service: "Request Service",

    // 7 Core Services
    service_cockroach_title: "Cockroach Control",
    service_cockroach_short: "Complete elimination of German and American cockroaches in kitchens, drains, and crevices using odorless bait gels and barrier sprays.",
    service_cockroach_tag: "Kitchens & Drains",

    service_termite_title: "Termite Control",
    service_termite_short: "Advanced structural protection against subterranean termites, including pre-construction soil treatment and sub-slab injection for existing villas.",
    service_termite_tag: "Pre & Post-Construction",

    service_bedbug_title: "Bed Bug Control",
    service_bedbug_short: "Intensive multi-stage eradication targeting bed bugs and their egg clusters in mattresses and furniture to restore hygienic sleep.",
    service_bedbug_tag: "Bedrooms & Mattresses",

    service_ant_title: "Ant Control",
    service_ant_short: "Targeted baiting systems that trace foraging trails back to eradicate the queen and colony indoors and across garden perimeters.",
    service_ant_tag: "Homes & Gardens",

    service_rodent_title: "Rodent Control",
    service_rodent_short: "Tamper-resistant bait stations and mechanical exclusion techniques for rats and mice in villas, offices, and commercial warehouses.",
    service_rodent_tag: "Warehouses & Storage",

    service_mosquito_title: "Mosquito Control",
    service_mosquito_short: "Thermal fogging, ultra-low volume (ULV) misting, and standing water larvicide treatments to protect gardens and open-air patios.",
    service_mosquito_tag: "Gardens & Patios",

    service_general_title: "General Pest Control",
    service_general_short: "Broad-spectrum seasonal defense protecting properties against spiders, silverfish, centipedes, and seasonal crawling invaders.",
    service_general_tag: "Periodic Full Protection",

    // Why Choose Us Section
    why_section_tag: "Why Choose Us",
    why_section_title: "Committed to Professionalism & Precision",
    why_section_desc: "Building lasting trust through honest, dependable pest control throughout Muscat.",

    why_point1_title: "Professional Service",
    why_point1_desc: "A systematic approach to diagnosing infestations and applying calibrated treatment methods.",
    why_point2_title: "Customer-Focused Solutions",
    why_point2_desc: "Attentive listening to your specific concerns with appointments scheduled at your convenience.",
    why_point3_title: "Residential & Commercial Services",
    why_point3_desc: "Customized solutions for villas, apartments, corporate offices, shops, and storage facilities.",
    why_point4_title: "Convenient Contact Options",
    why_point4_desc: "Direct communication by phone or WhatsApp on our dedicated line +968 9704 5409.",
    why_point5_title: "Service-Specific Treatment Solutions",
    why_point5_desc: "Pest-specific formulations ensuring optimum eradication results with household safety.",

    // How It Works Section
    process_section_tag: "Our Process",
    process_section_title: "How Our Service Works",
    process_section_desc: "Four clear, straightforward steps to a pest-free home or workspace.",
    step1_num: "01",
    step1_title: "Contact Us",
    step1_desc: "Reach out via phone or WhatsApp at +968 9704 5409 with your inquiry.",
    step2_num: "02",
    step2_title: "Discuss Your Pest Problem",
    step2_desc: "Describe the pest activity you've noticed and your property location in Muscat.",
    step3_num: "03",
    step3_title: "Arrange Inspection & Treatment",
    step3_desc: "Set a convenient appointment for on-site assessment and targeted application.",
    step4_num: "04",
    step4_title: "Follow-Up as Agreed",
    step4_desc: "Treatment evaluation and preventive recommendations to ensure lasting peace of mind.",

    // Projects Preview Section
    projects_section_tag: "Project Showcase",
    projects_section_title: "Pest Control Applications & Environments",
    projects_section_desc: "Residential and commercial treatment project examples in Muscat.",
    filter_all: "All",
    filter_residential: "Residential",
    filter_commercial: "Commercial",
    filter_treatment: "Pest Treatment",
    btn_view_all_projects: "View All Showcase Items",

    // Testimonials Section
    testimonials_section_tag: "Testimonials",
    testimonials_section_title: "What Our Clients Say",
    testimonials_section_desc: "Dedicated to the peace of mind and satisfaction of every property owner we serve.",
    testi_review_label: "Customer review",
    testi1_quote: "The kitchen cockroach issue was solved swiftly with no foul odors whatsoever. Courteous team and on-time arrival.",
    testi1_author: "Seeb Resident",
    testi1_service: "Cockroach Control - Residential",
    testi2_quote: "Prompt WhatsApp response, inspected and treated termite activity in door frames with calm professionalism.",
    testi2_author: "Al Khuwair Resident",
    testi2_service: "Termite Control - Private Villa",
    testi3_quote: "Clean, systematic work in our commercial facility. Safe bait stations and reliable advice that kept our workplace clear.",
    testi3_author: "Commercial Facility, Ghala",
    testi3_service: "Periodic Pest Control - Commercial",

    // FAQ Section
    faq_section_tag: "FAQ",
    faq_section_title: "Frequently Asked Questions",
    faq_section_desc: "Answers to common inquiries regarding pest control services in Muscat.",
    faq_q1: "What pest control services do you offer?",
    faq_a1: "We provide specialized services for cockroaches, termites, bed bugs, ants, rodents, mosquitoes, and general crawling pests, with customized treatment plans for each.",
    faq_q2: "Do you provide residential pest control?",
    faq_a2: "Yes, we comprehensively cover villas, apartments, and private homes in Muscat, utilizing safe, targeted products that protect your living spaces and family.",
    faq_q3: "Do you provide commercial pest control?",
    faq_a3: "Yes, we support offices, corporate facilities, warehouses, and retail spaces to maintain clean, hygienic, and compliant operational environments.",
    faq_q4: "How can I request a quotation?",
    faq_a4: "You can easily request a quote by calling or messaging +968 9704 5409 on WhatsApp, or by filling out the online form. We will provide pricing details promptly.",
    faq_q5: "How can I contact your company and book an appointment?",
    faq_a5: "Our team is available Saturday to Thursday via direct call or WhatsApp (+968 9704 5409). Once you reach out, we will coordinate a convenient visit to your location.",

    // Final CTA
    cta_headline: "Need Professional Pest Control in Muscat?",
    cta_desc: "Contact Adnan Al Ramadani Trading today for rapid consultation and dependable solutions to safeguard your property.",
    cta_btn_call: "Call Now: +968 9704 5409",
    cta_btn_whatsapp: "WhatsApp Us Directly",

    // Footer
    footer_about_p: "Adnan Al Ramadani Trading - Specialized pest and insect control services for residential and commercial properties across Muscat, Sultanate of Oman.",
    footer_quick_links: "Quick Links",
    footer_services_list: "Pest Services",
    footer_contact_info: "Contact Details",
    footer_address_val: "Muscat, Sultanate of Oman",
    footer_rights: "All rights reserved © {year} Adnan Al Ramadani Trading.",
    footer_category_note: "Exclusively specialized in pest and insect control services.",

    // About Page Specific
    about_hero_tag: "About Adnan Al Ramadani Trading",
    about_hero_title: "Commitment to Quality & Professional Pest Control in Oman",
    about_hero_desc: "Providing well-engineered solutions to defend properties in Muscat from pest disruptions with responsibility and precision.",
    about_mission_title: "Our Mission",
    about_mission_desc: "To deliver clean, pest-free living and working environments across the Sultanate of Oman through specialized pest control based on safety, precision, and client trust.",
    about_approach_title: "Our Approach",
    about_approach_desc: "We believe successful pest control starts with identifying entry points and infestation triggers, followed by targeted treatments and preventive recommendations for the owner.",
    about_commitment_title: "Our Commitment",
    about_commitment_desc: "We stand for transparent quotes, punctual visits, and utmost respect for the privacy and cleanliness of your property during every treatment.",
    about_res_com_title: "Comprehensive Residential & Commercial Coverage",
    about_res_com_desc: "Whether you are a villa owner seeking family peace of mind or a business manager safeguarding inventory, our solutions are engineered for your sector.",

    // Services Page Detailed
    services_page_hero_tag: "Pest Control Services",
    services_page_hero_title: "Curative & Preventive Solutions in Muscat",
    services_page_hero_desc: "Explore our specialized treatments tailored to the climate and pest pressures of the Sultanate of Oman.",
    services_treatment_overview: "Treatment Overview:",
    services_common_problems: "Common Infestation Signs:",
    services_methods: "Applied Methods:",

    // Projects Page Detailed
    projects_page_hero_tag: "Showcase & Portfolio",
    projects_page_hero_title: "Pest Management Environments in Muscat",
    projects_page_hero_desc: "Explore representative residential and commercial treatment scenarios across Muscat.",
    lightbox_close: "Close",
    lightbox_prev: "Previous",
    lightbox_next: "Next",

    // Contact Page Detailed
    contact_page_hero_tag: "Contact Us",
    contact_page_hero_title: "We Welcome Your Inquiries & Bookings",
    contact_page_hero_desc: "Reach out by phone, WhatsApp, or the form below to discuss your pest control needs with our team.",
    contact_card_phone_title: "Direct Phone Call",
    contact_card_phone_desc: "Speak with our team directly for immediate advice and appointment scheduling.",
    contact_card_whatsapp_title: "Instant WhatsApp Chat",
    contact_card_whatsapp_desc: "Send photos of pest issues or site details for quick review.",
    contact_card_loc_title: "Service Location",
    contact_card_loc_desc: "Muscat, Sultanate of Oman (Mobile service covering all wilayats of Muscat).",
    contact_form_title: "Request a Free Quote / Appointment",
    contact_form_desc: "Fill in the details below and our team will get back to you promptly.",
    form_label_name: "Full Name",
    form_placeholder_name: "Enter your full name",
    form_label_phone: "Phone / WhatsApp Number",
    form_placeholder_phone: "e.g. 97045409 or +968 9704 5409",
    form_label_service: "Required Service",
    form_select_service_default: "-- Select a Service --",
    form_label_property: "Property Type",
    form_prop_residential: "Residential (Villa / Flat / House)",
    form_prop_commercial: "Commercial (Office / Shop / Warehouse)",
    form_label_area: "Area in Muscat",
    form_placeholder_area: "e.g. Seeb, Al Khuwair, Bawshar, Al Mawaleh...",
    form_label_message: "Problem Description / Additional Notes",
    form_placeholder_message: "Briefly describe the pests noticed or site requirements...",
    form_btn_submit: "Submit Request",
    form_btn_whatsapp_direct: "Send Request via WhatsApp",
    form_sending: "Sending...",
    form_success_title: "Inquiry Received Successfully!",
    form_success_msg: "Thank you for contacting Adnan Al Ramadani Trading. We will review your inquiry and reach out via phone or WhatsApp shortly.",
    form_err_name: "Please enter your full name.",
    form_err_phone: "Please enter a valid phone number.",
    form_err_service: "Please select the required service.",
    form_err_area: "Please specify your area in Muscat.",

    // Floating Button Tooltip
    whatsapp_floating_tooltip: "Chat with us on WhatsApp"
  }
};
