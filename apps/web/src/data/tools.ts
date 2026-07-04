export type ToolCategory = 'productivity' | 'developer' | 'business'
export type ToolStatus = 'building' | 'planned' | 'released'

export interface ToolMeta {
  slug: string
  name: string
  tagline: string
  description: string
  features: string[]
  category: ToolCategory
  week: number
  status: ToolStatus
  usesSupabaseLater: boolean
}

export const tools: ToolMeta[] = [
  {
    slug: 'taskflow',
    name: 'TaskFlow',
    tagline: 'بديل مجاني وخفيف لتنظيم المهام والمشاريع',
    description:
      'نظّم عملك ببساطة، وشارك مشروعك برابط واحد. مهام، حالات، حفظ محلي، واستيراد/تصدير.',
    features: ['مشاركة سهلة', 'مفتوح المصدر', 'مجاني 100%'],
    category: 'productivity',
    week: 1,
    status: 'building',
    usesSupabaseLater: true,
  },
  {
    slug: 'linkboard',
    name: 'LinkBoard',
    tagline: 'صفحة روابط ذكية لصنّاع المحتوى والمطورين',
    description:
      'بديل مفتوح المصدر وخفيف لـ Linktree. رابط واحد يجمع كل حضورك الرقمي بواجهة أنيقة وسريعة.',
    features: ['مفتوح المصدر', 'سهل التخصيص', 'روابط غير محدودة', 'تحليلات بسيطة'],
    category: 'developer',
    week: 2,
    status: 'planned',
    usesSupabaseLater: true,
  },
  {
    slug: 'briefly',
    name: 'Briefly',
    tagline: 'ملخّص ذكي للروابط والمقالات والنصوص',
    description:
      'أداة مجانية ومفتوحة المصدر لتحويل المحتوى الطويل إلى خلاصة سريعة وواضحة، بدون AI مدفوع.',
    features: ['تلخيص سريع', 'استخراج النقاط', 'دعم عربي', 'مفتوح المصدر'],
    category: 'developer',
    week: 3,
    status: 'planned',
    usesSupabaseLater: false,
  },
  {
    slug: 'formpilot',
    name: 'FormPilot',
    tagline: 'مولّد نماذج ذكي',
    description:
      'أنشئ نماذج واستبيانات وطلبات تسجيل خلال دقائق وبسرعة وأناقة، وتابع الردود بتحليلات بسيطة.',
    features: ['توليد بالذكاء الاصطناعي (BYO Key لاحقًا)', 'دعم عربي', 'مفتوح المصدر', 'مشاركة سريعة', 'تحليلات الردود'],
    category: 'business',
    week: 4,
    status: 'planned',
    usesSupabaseLater: true,
  },
  {
    slug: 'eventflow',
    name: 'EventFlow',
    tagline: 'أنشئ صفحة فعالية، اجمع التسجيلات، ونظم الحضور من رابط واحد',
    description:
      'بديل عن Excel وGoogle Forms والروابط المتفرقة — كل شيء في مكان واحد: صفحة فعالية، نموذج تسجيل، ولوحة إدارة.',
    features: ['صفحة فعالية', 'نموذج تسجيل', 'لوحة حضور', 'تصدير CSV', 'مفتوح المصدر'],
    category: 'productivity',
    week: 5,
    status: 'planned',
    usesSupabaseLater: false,
  },
  {
    slug: 'kanbanflow',
    name: 'KanbanFlow Lite',
    tagline: 'نسخة أقوى من TaskFlow',
    description: 'نظّم المهام والمشاريع بطريقة Kanban أسرع، أوضح، وأذكى.',
    features: ['سحب وإفلات', 'لوحات مرنة', 'مهام وأولويات', 'تحليلات بسيطة', 'مفتوح المصدر'],
    category: 'productivity',
    week: 6,
    status: 'planned',
    usesSupabaseLater: true,
  },
  {
    slug: 'studyplanner',
    name: 'StudyPlanner',
    tagline: 'مخطط دراسة ذكي للطلاب',
    description:
      'ابنِ خطة دراسية منظمة حسب المواد، مواعيد الامتحانات، وعدد الأيام المتبقية.',
    features: ['خطة تلقائية', 'تقويم الامتحانات', 'تتبع التقدم', 'دعم عربي', 'مفتوح المصدر'],
    category: 'productivity',
    week: 7,
    status: 'planned',
    usesSupabaseLater: false,
  },
  {
    slug: 'cvforge',
    name: 'CV Forge',
    tagline: 'منشئ سيرة ذاتية احترافي',
    description:
      'أنشئ سيرة ذاتية أنيقة واحترافية خلال دقائق، وصدّرها بصيغة PDF بسهولة.',
    features: ['قوالب جاهزة', 'دعم عربي', 'تصدير PDF', 'مشاركة سريعة', 'مفتوح المصدر'],
    category: 'business',
    week: 8,
    status: 'planned',
    usesSupabaseLater: false,
  },
  {
    slug: 'invoicemini',
    name: 'InvoiceMini',
    tagline: 'فواتير بسيطة للمستقلين',
    description: 'أنشئ فواتير احترافية بسرعة، شاركها، وصدّرها بصيغة PDF بسهولة.',
    features: ['حساب الضريبة', 'دعم عربي', 'تصدير PDF', 'مشاركة سريعة', 'مفتوح المصدر'],
    category: 'business',
    week: 9,
    status: 'planned',
    usesSupabaseLater: false,
  },
  {
    slug: 'promptvault',
    name: 'PromptVault',
    tagline: 'مكتبة برومبتات شخصية',
    description: 'احفظ برومبتاتك، نظّمها، وابحث فيها وشاركها بسهولة.',
    features: ['حفظ سريع', 'بحث ذكي', 'تصنيفات متعددة', 'نسخ بنقرة', 'مفتوح المصدر'],
    category: 'developer',
    week: 10,
    status: 'planned',
    usesSupabaseLater: true,
  },
  {
    slug: 'readmebuilder',
    name: 'ReadmeBuilder',
    tagline: 'مولد README لمشاريع GitHub',
    description:
      'أنشئ ملفات README واضحة واحترافية لمشاريعك خلال دقائق، وصدّرها بصيغة Markdown بسهولة.',
    features: ['قوالب جاهزة', 'معاينة مباشرة', 'Markdown', 'دعم عربي', 'مفتوح المصدر'],
    category: 'developer',
    week: 11,
    status: 'planned',
    usesSupabaseLater: false,
  },
  {
    slug: 'minicrm',
    name: 'MiniCRM',
    tagline: 'إدارة عملاء بسيطة',
    description: 'تابع العملاء، المشاريع، والعروض من مكان واحد بسهولة ووضوح.',
    features: ['إدارة العملاء', 'مراحل المبيعات', 'تذكير وملاحظات', 'مشاركة سريعة', 'مفتوح المصدر'],
    category: 'business',
    week: 12,
    status: 'planned',
    usesSupabaseLater: true,
  },
  {
    slug: 'launchkit',
    name: 'LaunchKit',
    tagline: 'صفحة إطلاق مشروع',
    description:
      'أنشئ Landing Page سريعة وأنيقة لمشروعك خلال دقائق، وشاركها مع جمهورك بسهولة.',
    features: ['قوالب جاهزة', 'تخصيص سهل', 'نشر سريع', 'متجاوب للجوال', 'مفتوح المصدر'],
    category: 'developer',
    week: 13,
    status: 'planned',
    usesSupabaseLater: false,
  },
]

export const getToolBySlug = (slug: string) => tools.find((t) => t.slug === slug)
