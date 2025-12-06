import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  GraduationCap,
  Scroll,
  Stethoscope,
  ArrowRight,
  Menu,
  Phone,
  MessageCircle,
  Clock,
  Gift,
  ShieldCheck,
  Heart,
  CalendarCheck,
  User,
  X,
  MapPin,
  Quote,
  Cookie,
  FileText,
  HelpCircle,
  Bot,
  Sparkles,
  Send,
  Youtube,
  Instagram
} from 'lucide-react';

// --- Feature Flags ---
const FEATURE_FLAGS = {
  SHOW_THREE_STEPS_SECTION: false, // "Три шага от вечных болезней к стабильному здоровью"
};

// --- Shared Components ---

const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  fullWidth = false,
  icon: Icon
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fullWidth?: boolean;
  icon?: React.ElementType;
}) => {
  const baseStyle = "font-sans font-semibold py-3.5 px-8 rounded-full transition-all duration-300 active:scale-95 shadow-lg flex items-center justify-center gap-2 text-center text-sm md:text-base";

  const variants = {
    primary: "bg-nature-600 text-white hover:bg-nature-700 shadow-nature-200/50 hover:shadow-nature-300/50",
    secondary: "bg-amber-100 text-stone-800 hover:bg-amber-200",
    outline: "border-2 border-nature-600 text-nature-700 hover:bg-nature-50"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : 'w-auto'} ${className}`}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

const Section = ({
  children,
  className = "",
  containerClass = "",
  id = ""
}: {
  children?: React.ReactNode;
  className?: string;
  containerClass?: string;
  id?: string;
}) => (
  <section id={id} className={`py-12 md:py-24 px-6 md:px-0 ${className}`}>
    <div className={`max-w-7xl mx-auto md:px-8 ${containerClass}`}>
      {children}
    </div>
  </section>
);

const AccordionItem = ({
  title,
  children,
  isOpen,
  onClick,
  icon: Icon
}: {
  title: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  icon?: React.ElementType;
  key?: React.Key;
}) => {
  return (
    <div className="border border-stone-200 rounded-2xl bg-white overflow-hidden mb-3 shadow-sm hover:border-nature-300 transition-colors">
      <button
        className="w-full p-5 flex items-center justify-between text-left font-medium text-stone-800"
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="w-10 h-10 rounded-full bg-nature-50 flex items-center justify-center text-nature-600 shrink-0">
              <Icon className="w-5 h-5" />
            </div>
          )}
          <span className="text-base sm:text-lg leading-tight font-serif">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-stone-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0 text-stone-600 leading-relaxed border-t border-stone-100 mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

const Card = ({ children, className = "" }: { children?: React.ReactNode; className?: string; key?: React.Key }) => (
  <div className={`bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

const Badge = ({ children }: { children?: React.ReactNode }) => (
  <span className="inline-block py-1.5 px-4 rounded-full bg-nature-100 border border-nature-200 text-xs font-bold tracking-widest text-nature-800 uppercase shadow-sm">
    {children}
  </span>
);

// --- Content Data ---

const credentials = [
  {
    title: "Высшее образование",
    icon: GraduationCap,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Новосибирский государственный медицинский университет</strong>, специальность “Педиатрия”</li>
        <li><strong>Ординатура</strong> по патологической анатомии (для глубокого понимания процессов болезни на клеточном уровне)</li>
      </ul>
    )
  },
  {
    title: "Сертификаты и доп. квалификация",
    icon: Scroll,
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>🌿 <strong>PreventAge.</strong> Институт интегральной превентивной и антивозрастной медицины.</li>
        <li>🌿 <strong>МИИН.</strong> Специалист по системной диетологии и натуропатии.</li>
        <li>🥘 <strong>Myfoodie.</strong> Эксперт по детскому питанию и здоровью</li>
        <li>🧠 <strong>5PRISM, АНОВО.</strong> Health-коуч, психология питания и модификация образа жизни</li>
        <li>🌱 <strong>Международный университет восстановительной медицины.</strong> Доктор-гомеопат</li>
      </ul>
    )
  },
  {
    title: "Специализация",
    icon: Stethoscope,
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-nature-700 mb-2">Детские болезни и особенности развития</h4>
          <p className="pl-3 border-l-2 border-nature-200">РАС, СДВГ, задержка речи и развития, агрессия. Проблемы со сном, избирательный аппетит.</p>
        </div>
        <div>
          <h4 className="font-bold text-nature-700 mb-2">Хронические состояния и дефициты</h4>
          <p className="pl-3 border-l-2 border-nature-200">Анемия и выведение из дефицитов. Склонность к частым инфекциям, ложные крупы, аденоиды. Аллергические заболевания, крапивницы.</p>
        </div>
        <div>
          <h4 className="font-bold text-nature-700 mb-2">Проблемы у взрослых и подростков</h4>
          <p className="pl-3 border-l-2 border-nature-200">Нарушение работы ЖКТ. Проблемы в работе щитовидной железы (АИТ, гипотиреоз). Хроническая усталость, апатия. Проблемы с циклом, циститы и другие проблемы репродуктивной системы.</p>
        </div>
        <div>
          <h4 className="font-bold text-nature-700 mb-2">Острые случаи и восстановление</h4>
          <p className="pl-3 border-l-2 border-nature-200">Лечение ОРВИ, грипп, ротавирус и энтеровирусТравмы и отравления, термические ожоги, ушибы, вывихи, растяжения, укусы животных и насекомых. Восстановление после операций и наркозов</p>
        </div>
        <div>
          <h4 className="font-bold text-nature-700 mb-2">Общий подход</h4>
          <p className="pl-3 border-l-2 border-nature-200">Расшифровка анализов, ДНК тестов, подготовка к повышенным нагрузкам. Коучинг здорового образа жизни и улучшение питания.</p>
        </div>
      </div>
    )
  }
];

const reviews = [
  {
    id: 1,
    title: "Про иммунитет и детский сад",
    text: "Ребенок, который раньше жил на антибиотиках из-за постоянных инфекций и аденоидов, теперь ходит в детский сад регулярно и без пропусков. Мы восстановили микробиом, закрыли дефициты, и эпизоды с аденоидами полностью ушли — малыш здоров и активен."
  },
  {
    id: 2,
    title: "Про кожу и питание (Атопический дерматит)",
    text: "Мама девочки с тяжелым дерматитом была в панике: анализы в 'красной зоне', зуд и скудный рацион. После работы с питанием и уходом кожа ребенка стала мягкой и чистой даже в отопительный сезон. Девочка забыла про зуд и теперь ест разнообразную еду, а аллергия напоминает о себе, только если тайком от мамы съесть чипсы."
  },
  {
    id: 3,
    title: "Про щитовидную железу",
    text: "Женщина 13 лет наблюдала узел в щитовидной железе — все врачи твердили, что он есть. После нашей работы она впервые увидела чистое УЗИ: узла больше не было! Это огромная победа, которая теперь помогает ей запустить метаболизм и наконец начать снижать вес."
  },
  {
    id: 4,
    title: "Про лишний вес и самостоятельность ребенка",
    text: "Девочка с лишним весом и хаосом в питании не только похудела, но и начала сама готовить полезные блюда для всей семьи, разгрузив уставшую маму. Вместе с весом ушли комплексы: у ребенка выросла самооценка и улучшилась успеваемость в школе."
  },
  {
    id: 5,
    title: "Про «ленивого» подростка и энергию",
    text: "Мама думала, что дочь-старшеклассница просто ленится и не спит ночами, а у девочки выпадали волосы и совсем не было сил из-за скрытых дефицитов. Всего за пару встреч мы убрали анемию и болезненные месячные. Теперь она отлично себя чувствует, прекрасно учится и полна энергии для подготовки к ЕГЭ."
  }
];

const faq = [
  {
    q: "Как проходит первичная консультация?",
    a: "Первый шаг — это бесплатный созвон-знакомство (15 минут). Если мы решаем работать дальше, я прошу заполнить анкету. Только на её основании я даю список анализов. Затем мы встречаемся на часовой консультации, после которой я смогу ответить на вопросы в течение 3 дней."
  },
  {
    q: "Нужно сдавать анализы ДО консультации?",
    a: "До знакомства — нет. До основной консультации — да, но только те, которые я назначу после изучения вашей анкеты. Так вы не потратите деньги на ненужные исследования."
  },
  {
    q: "А если вы не сможете помочь онлайн?",
    a: "Если я пойму, что нужен осмотр лично, направлю вас к участковому педиатру за обследованиями. После этого у меня будет более полная картина о вашем состоянии."
  },
  {
    q: "Почему в поликлинике так не лечат?",
    a: "Мой подход основан на интегративной медицине - это не просто про витаминки, это глубокая индивидуальная диагностика на уровне биохимии. В поликлиниках, либо в частных клиниках у врача либо нет времени, либо он ограничен стандартными протоколами"
  }
];

const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40 border-b border-stone-100 h-16 md:h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-nature-600 rounded-full flex items-center justify-center text-white">
            <Stethoscope className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="font-serif font-bold text-lg md:text-xl text-stone-900">Лиза Ефимова</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#problems" className="text-stone-600 hover:text-nature-600 font-medium transition">Симптомы</a>
          <a href="#process" className="text-stone-600 hover:text-nature-600 font-medium transition">Этапы</a>
          <a href="#reviews" className="text-stone-600 hover:text-nature-600 font-medium transition">Отзывы</a>

          {/* Social Icons Container */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Telegram */}
            <a href="https://t.me/elizavetaefimova" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-nature-200">
              <Send className="w-4 h-4 md:w-5 md:h-5 -ml-0.5" />
            </a>

            {/* VK - Using Image Tag for Custom PNG */}
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-nature-200 group">
              <img
                src="/vk-logo.png"
                alt="VK"
                className="w-4 h-4 md:w-5 md:h-5 object-contain"
              />
            </a>

            {/* YouTube */}
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-nature-200">
              <Youtube className="w-4 h-4 md:w-5 md:h-5" />
            </a>

            {/* Instagram */}
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-nature-200">
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          <Button onClick={onContactClick} className="!py-2 !px-6 !text-sm">Записаться</Button>
        </div>

        {/* Mobile Social Icons - Visible only on screens < md (768px) */}
        <div className="flex md:hidden items-center gap-2">
          {/* Telegram */}
          <a href="https://t.me/elizavetaefimova" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm">
            <Send className="w-4 h-4 -ml-0.5" />
          </a>

          {/* VK */}
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 bg-nature-50 rounded-xl hover:bg-nature-600 transition-all duration-300 hover:scale-110 shadow-sm">
            <img
              src="/vk-logo.png"
              alt="VK"
              className="w-4 h-4 object-contain"
            />
          </a>

          {/* YouTube */}
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm">
            <Youtube className="w-4 h-4" />
          </a>

          {/* Instagram */}
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm">
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-stone-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-stone-100 p-6 flex flex-col gap-4 shadow-xl md:hidden">
          <a href="#problems" onClick={() => setMobileMenuOpen(false)} className="text-stone-800 py-2 border-b border-stone-50">Симптомы</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-stone-800 py-2 border-b border-stone-50">Этапы</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-stone-800 py-2 border-b border-stone-50">Отзывы</a>

          {/* Social Icons for Mobile */}
          <div className="flex items-center justify-center gap-3 py-4">
            {/* Telegram */}
            <a href="https://t.me/elizavetaefimova" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm">
              <Send className="w-5 h-5 -ml-0.5" />
            </a>

            {/* VK */}
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-nature-50 rounded-xl hover:bg-nature-600 transition-all duration-300 hover:scale-110 shadow-sm">
              <img
                src="/vk-logo.png"
                alt="VK"
                className="w-5 h-5 object-contain"
              />
            </a>

            {/* YouTube */}
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm">
              <Youtube className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <Button onClick={() => { onContactClick(); setMobileMenuOpen(false); }}>Записаться</Button>
        </div>
      )}
    </nav>
  );
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли запись в localStorage
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Если нет, показываем плашку через 2 секунды с анимацией
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    // Сохраняем согласие и скрываем плашку
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed z-[60] bottom-0 left-0 right-0 md:left-8 md:bottom-8 md:right-auto md:w-[380px] bg-white/95 backdrop-blur-md shadow-[0_-5px_20px_rgba(0,0,0,0.1)] md:shadow-2xl p-4 md:rounded-2xl border-t md:border border-nature-100 flex items-center justify-between gap-4 animate-in slide-in-from-bottom-10 fade-in duration-700">
      <div className="flex items-center gap-3 flex-1">
        {/* Иконка */}
        <div className="w-8 h-8 bg-nature-50 rounded-full flex items-center justify-center text-nature-600 shrink-0">
          <Cookie className="w-4 h-4" />
        </div>
        {/* Текст */}
        <div className="text-xs text-stone-600 leading-tight">
          <p className="font-bold text-stone-800 mb-0.5">Мы используем cookie</p>
          <p>Продолжая, вы соглашаетесь с использованием cookie.</p>
        </div>
      </div>
      {/* Кнопка */}
      <button
        onClick={accept}
        className="px-4 py-2 bg-nature-600 text-white text-xs font-bold rounded-lg hover:bg-nature-700 transition active:scale-95 shadow-md shadow-nature-200/50 whitespace-nowrap"
      >
        Хорошо
      </button>
    </div>
  );
};

// --- Main Application ---

const App = () => {
  const [openCredential, setOpenCredential] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showDocs, setShowDocs] = useState(false);
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Documents array
  const documents = [
    { src: '/documents/диплом-педиатр.jpg', alt: 'Диплом врача-педиатра', type: 'landscape' },
    { src: '/documents/diploma1.jpg', alt: 'Диплом специалиста', type: 'landscape' },
    { src: '/documents/diploma2.png', alt: 'Диплом об окончании ординатуры', type: 'portrait' },
    { src: '/documents/cert1.png', alt: 'Сертификат интегративного нутрициолога', type: 'landscape' },
    { src: '/documents/Коучинг ELIZAVETA EFIMOVA.jpg', alt: 'Сертификат Коучинг', type: 'landscape' },
    { src: '/documents/Сертификат Юсипова.jpeg', alt: 'Сертификат Юсипова', type: 'landscape' },
    { src: '/documents/сертификат ковид_page-0001.jpg', alt: 'Сертификат COVID-19', type: 'landscape' },
    { src: '/documents/сертификат нутригенетика.jpg', alt: 'Сертификат Нутригенетика', type: 'landscape' },
    { src: '/documents/удостоверение гомеопат.jpeg', alt: 'Удостоверение Гомеопат', type: 'landscape' },
    { src: '/documents/участник Иммунитет создатели _page-0001.jpg', alt: 'Сертификат Иммунитет', type: 'landscape' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setShowStickyButton(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') setLightboxIndex(Math.max(0, lightboxIndex - 1));
      if (e.key === 'ArrowRight') setLightboxIndex(Math.min(documents.length - 1, lightboxIndex + 1));
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, documents.length]);

  const toggleCredential = (index: number) => {
    setOpenCredential(openCredential === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrice = () => {
    const el = document.getElementById('price');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-stone-800 bg-white pt-16 md:pt-20">
      <Navbar onContactClick={scrollToContact} />

      {/* --- Block 1: Hero Section --- */}
      <section className="px-5 pt-8 pb-12 md:pt-24 md:pb-24 max-w-7xl mx-auto md:px-8">

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="order-1">
            <span className="inline-block px-3 py-1 rounded-full bg-nature-100 text-nature-800 text-xs font-bold uppercase tracking-wider mb-4">
              семейный доктор | педиатр | онлайн
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-stone-900 mb-4 md:mb-6 font-bold">
              Когда обычные врачи разводят руками. Разбираюсь в сложных случаях, находя <span className="text-nature-700">реальные причины</span> частых болезней
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed mb-8 md:text-xl">
              Елизавета Ефимова — семейный доктор и врач-педиатр. Опыт 6 лет клинической практики с методами интегративной медицины. Выстраиваю семьям систему здоровья
            </p>

            {/* Desktop CTA (Grid Layout) */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:items-center sm:justify-start">
              <Button onClick={scrollToPrice} className="w-full md:w-auto !text-lg !px-10 shadow-xl shadow-nature-200 hover:shadow-nature-300">
                Записаться на консультацию
              </Button>
              <span className="text-stone-500 text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" /> 15 минут
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="order-2 w-full flex flex-col gap-4">
            <div className="w-full relative group cursor-pointer overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent z-10"></div>
              <picture>
                <source media="(min-width: 768px)" srcSet="/doctor-photo.jpg" />
                <img
                  src="/doctor-photo-mobile.jpg"
                  alt="Доктор Елизавета Ефимова"
                  loading="eager"
                  className="w-full h-[320px] md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </picture>
            </div>
          </div>
        </div>

      </section>

      {/* --- Block 2: Credentials --- */}
      <Section id="about">
        <div className="mb-12 md:mb-16 text-left grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Мне можно доверять</h2>
            <div className="w-20 h-1.5 bg-nature-500 rounded mb-6 mx-auto lg:mx-0"></div>
            <p className="text-stone-600 leading-relaxed text-base md:text-lg">
              За 6 лет практики я помогла более чем 600 семьям достичь значительных улучшений в здоровье. Дети меньше болеют, их рацион питания становится разнообразнее, они забывают про аденоиды и атопический дерматит. Помогаю устранить причины боли в животе, нормализовать аппетит и сон. Взрослые повышают уровень энергии, снижают вес и <strong>решают проблемы, которые длятся годами</strong> - от исчезновения узлов в щитовидной железе до нормализации метаболизма. Эти результаты подтверждают эффективность моего подхода
            </p>
          </div>

          {/* Accordion Layout for both Mobile and Desktop (per request) */}
          <div className="lg:col-span-2">
            <div className="space-y-2">
              {credentials.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  title={item.title}
                  icon={item.icon}
                  isOpen={openCredential === idx}
                  onClick={() => toggleCredential(idx)}
                >
                  {item.content}
                </AccordionItem>
              ))}
            </div>

            <button
              onClick={() => setShowDocs(true)}
              className="mt-4 w-full py-4 px-6 border border-nature-200 bg-nature-50/50 rounded-2xl text-nature-700 font-medium hover:bg-nature-100 hover:border-nature-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm active:scale-95"
            >
              <Scroll className="w-5 h-5" />
              <span>Посмотреть документы</span>
            </button>
          </div>
        </div>
      </Section>

      {/* --- Block 3: Opener / Problem --- */}
      <Section id="problems" className="bg-gradient-to-br from-nature-50 via-white to-nature-100/50 md:rounded-[3rem] md:mx-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 md:mb-16 text-center text-stone-900">
            Вам это знакомо?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card: Ребенок */}
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border-l-4 border-[#96CCAA] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#96CCAA]/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#96CCAA]" />
                </div>
                <h4 className="font-bold text-[#2F704D] text-base md:text-lg uppercase tracking-wide">
                  Ребенок
                </h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Ребенок вялый, плохо учится или ничего не хочет",
                  "Частые болезни, которые переходят в осложнения и хронику",
                  "Плохо спит, избирательный аппетит или частые капризы"
                ].map((item, i) => (
                  <li key={i} className="text-stone-700 text-sm md:text-base leading-relaxed flex items-start gap-3">
                    <span className="text-[#96CCAA] mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card: У мамы */}
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border-l-4 border-[#B8AD83] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#B8AD83]/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-[#B8AD83]" />
                </div>
                <h4 className="font-bold text-[#837A5E] text-base md:text-lg uppercase tracking-wide">
                  Вы
                </h4>
              </div>
              <ul className="space-y-4">
                {[
                  "У вас снова нет времени на себя и мужа, т.к ребенок болеет",
                  "Не понимаете почему врачи делают разные назначение и что действительно будет работать",
                  "Вы хотите чувствовать уверенность в здоровье ребенка и своей семьи, быть хорошей мамой и женой"
                ].map((item, i) => (
                  <li key={i} className="text-stone-700 text-sm md:text-base leading-relaxed flex items-start gap-3">
                    <span className="text-[#B8AD83] mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mt-12 md:mt-16 bg-nature-700 p-8 md:p-12 rounded-3xl">
            <h3 className="font-bold text-2xl md:text-3xl mb-8 text-white text-center">Как я могу помочь вам?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "⚡️", title: "Вернуть ресурс", subtitle: "Снять хроническую усталость, избежать выгорания и улучшить качество жизни" },
                { icon: "🥗", title: "Восполнить дефициты", subtitle: "Вернуть энергию и радость, наладить здоровье без хождения по разным специалистам" },
                { icon: "🧘‍♀️", title: "Стать спокойнее и уверенее", subtitle: "Чтобы хватало сил не только на быт, но и на себя" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-4 bg-nature-800/40 p-6 rounded-2xl hover:bg-nature-800/60 transition">
                  <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <span className="font-bold block text-lg text-nature-50 mb-2">{item.title}</span>
                    <p className="text-nature-200 text-sm leading-relaxed">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-nature-200 italic text-lg opacity-80">Заботьтесь о себе, ведь дети зеркалят ваше состояние</p>
          </div>
        </div>
      </Section>

      {/* --- Block 4: Three Steps --- */}
      {FEATURE_FLAGS.SHOW_THREE_STEPS_SECTION && (
        <Section className="bg-nature-50" id="method">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">Три шага от вечных болезней к стабильному здоровью</h2>
            <p className="text-stone-500 uppercase tracking-widest font-semibold text-sm"></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-nature-100 text-nature-700 px-4 py-1.5 text-xs font-bold rounded-bl-xl">Этап 1</div>
              <div className="w-14 h-14 bg-nature-50 rounded-2xl flex items-center justify-center text-nature-600 mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-xl text-nature-800 mb-3">Найти причину</h3>
              <p className="text-stone-600 mb-6 text-base leading-relaxed">Я анализирую 40+ параметров: от истории ваших родов до содержимого тарелки вчера на ужин. В результате, хаос превращается в ясность и вы понимаете, почему произошел сбой и где «тонкое место» в иммунитете ребенка.</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-stone-400 mt-auto">
                <Clock className="w-4 h-4" /> 7 дней
              </div>
            </Card>

            <Card className="relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border-nature-200 shadow-lg">
              <div className="absolute top-0 right-0 bg-nature-600 text-white px-4 py-1.5 text-xs font-bold rounded-bl-xl">Этап 2</div>
              <div className="w-14 h-14 bg-nature-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-nature-200">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">Запустить восстановление</h3>
              <p className="text-stone-600 mb-6 text-base leading-relaxed">Подбираю индивидуальный протокол, корректируем питание, образ жизни, добавляем нутрицевтики, если нужны. В результате ребенок меняется на глазах - сон становится крепче, капризы уходят, а затяжные сопли наконец-то проходят. Вы выдыхаете.</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-stone-400 mt-auto">
                <Clock className="w-4 h-4" /> 14–30 дней
              </div>
            </Card>

            <Card className="relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-nature-100 text-nature-700 px-4 py-1.5 text-xs font-bold rounded-bl-xl">Этап 3</div>
              <div className="w-14 h-14 bg-nature-50 rounded-2xl flex items-center justify-center text-nature-600 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-xl text-nature-800 mb-3">Закрепить результат</h3>
              <p className="text-stone-600 mb-6 text-base leading-relaxed">Контрольные анализы и закрепление успеха. Вы получаете алгоритмы действий на будущее. Вы чувствуете уверенность и спокойствие, знаете, как не дать ребенку разболеться, без паники и лишних лекарств</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-stone-400 mt-auto">
                <Clock className="w-4 h-4" /> 60 дней
              </div>
            </Card>
          </div>
        </Section>
      )}

      {/* --- Block 5: Hero's Journey --- */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <div className="relative order-2 lg:order-1 h-full min-h-[400px] hidden lg:block rounded-[3rem] overflow-hidden">
            <img
              src="/doctor-with-baby.jpg"
              alt="Doctor with patient"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
              <p className="text-white font-serif text-2xl italic"></p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 md:mb-10 text-stone-900 leading-tight">
              Почему я ушла из классической медицины?
            </h2>

            <div className="space-y-8 text-stone-700 leading-relaxed text-base md:text-lg">
              <div className="relative pl-6 border-l-4 border-stone-200">
                <span className="font-bold text-stone-900 block mb-2 text-xl">До</span>
                <p>Я была доктором-паталогоанатоном и была уверена, что педиатрия и живые пациенты это не моё. Я чувстовала, что не смогу работать в системе как доктор.</p>
              </div>

              <div className="relative pl-6 border-l-4 border-red-200">
                <span className="font-bold text-red-700 block mb-2 text-xl">Кризис</span>
                <p>Меня не устраивал подход, где врач видит только симптомы и выделяет максимум 15 минут на приём. Это были поверхностные рекомендации по протоколу, и я начала искать более эффективный подход</p>
              </div>

              <div className="relative pl-6 border-l-4 border-nature-300">
                <span className="font-bold text-nature-700 block mb-2 text-xl">Прозрение</span>
                <p>Всё изменилось, когда я забеременела. Меня гоняли по ненужным обследованиям. ТТГ скакал, а врачи говорили что всё в норме. В итоге я обратилась к доктору с другим подходом, который мне помог и переняла его опыт. Тогда я поняла, что хочу дать себе, своей семье и своему ребёнку лучшее качество здоровья. Не норму по анализам, а настоящее здоровье</p>
              </div>

              <div className="bg-nature-50 p-6 rounded-2xl border border-nature-100">
                <span className="font-bold text-nature-800 block mb-2 text-xl">Сегодня</span>
                <p>Я знаю, что беспокоит каждого моего пациента. Не потому что спрашиваю для галочки. А потому что погружаюсь в каждого индивидуально. Я знаю, что это работает, потому что прошла этот путь сама: со своим ребёнком, со своей семьёй, с сотнями пациентов.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- Block 6: Method (Mistakes vs Principles) --- */}
      <Section className="bg-stone-50">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Как появился мой метод</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="font-bold text-stone-400 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <XCircle className="w-5 h-5" /> Через ошибки в системе
            </h3>
            <div className="space-y-4">
              {[
                "Ошибка врачей в поликлиниках - лечить орган отдельно от тела, не видя целостной картины",
                "Нутрициологи читают анализы без клинического мышления и не учитывают взаимодействие разных систем организма. Это может вести к некорректному назначению нутрицевтиков",
                "Родители привыкли лечить, когда заболит, вместо того, чтобы профилактировать и предотвращать"
              ].map((err, i) => (
                <div key={i} className="flex gap-4 items-start bg-white p-5 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition">
                  <div className="bg-red-50 p-2 rounded-full text-red-400 mt-1 shrink-0">
                    <X className="w-4 h-4" />
                  </div>
                  <p className="text-base text-stone-600">{err}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-nature-600 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> 3 Принципа моего метода
            </h3>
            <div className="space-y-4">
              {[
                { title: "Целостный подход", desc: "Смотрю на организм как на единое целое и следую принципам холистической медицины и первым принципам. Анализирую анамнез, образ жизни, стрессоры, питание, экологию и психосоматику" },
                { title: "Работаю с первопричиной", desc: "Если ребенок болеет каждые 2 недели — это сигнал. Я стараюсь найти, почему это происходит и как это исправить, чтобы это не повторилось" },
                { title: "Персонализация", desc: "Нет единого протокола, который одинаково хорошо работает с каждым. Поэтому я совмещаю разные методы и подобный результат не может дать обычный профильный специалист" }
              ].map((principle, i) => (
                <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-md border-l-4 border-nature-500 hover:shadow-lg transition transform hover:-translate-x-1">
                  <div className="flex-1">
                    <h4 className="font-bold text-nature-800 text-lg mb-2">{principle.title}</h4>
                    <p className="text-base text-stone-600">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* --- Block 7: Process (Timeline) --- */}
      <Section id="process">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
            Этапы нашей работы онлайн
          </h2>
          <p className="text-nature-600 font-medium">Спойлер: даже эффективнее, чем очно.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Центральная линия (Vertical Line) */}
          {/* На мобильном смещена влево (left-[19px]), на десктопе по центру */}
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-nature-200 md:left-1/2 md:-ml-px"></div>

          <div className="space-y-12">
            {[
              {
                title: "Знакомство (15 мин)",
                desc: "Созваниваемся, обсуждаем вашу ситуацию, я говорю, смогу ли помочь, и мы намечаем план действий."
              },
              {
                title: "Подготовка",
                desc: "Вы заполняете анкету, присылаете исследования и анализы, которые у вас есть, я назначаю список того, что нужно досдать или дообследовать."
              },
              {
                title: "Анализ",
                desc: "Я изучаю ваши анализы, историю болезни, фото/видео до нашей встречи."
              },
              {
                title: "Консультация (1 час)",
                desc: "Мы подробно разбираем причины состояния и стратегию лечения."
              },
              {
                title: "Результат на руки",
                desc: "Вы получаете карту здоровья: питание, образ жизни, нутрицевтики"
              },
              {
                title: "Поддержка",
                desc: "Я отвечаю на вопросы в течение 3 дней после консультации и остаюсь с вами на связи в дальнейшем."
              }
            ].map((step, index) => (
              <div key={index} className={`relative flex items-start gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Маркер шага (Dot) */}
                {/* Кружок с номером на мобильном, маленький кружок на десктопе */}
                <div className="absolute left-0 md:left-1/2 md:-ml-2.5 w-10 h-10 md:w-5 md:h-5 bg-white border-4 border-nature-500 rounded-full z-10 flex items-center justify-center text-xs font-bold text-stone-900 md:text-[0px]">
                  <span className="md:hidden">{index + 1}</span>
                </div>

                {/* Контент (Content) */}
                {/* Чередование отступов и выравнивания текста для шахматного порядка на десктопе */}
                <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h3>
                  <p className="text-stone-700 leading-relaxed">{step.desc}</p>
                </div>

                {/* Пустой блок для выравнивания сетки (Spacer) */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 hidden md:flex md:justify-center">
          <Button onClick={scrollToContact} className="!px-12 !py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">Записаться на знакомство</Button>
        </div>
      </Section>

      {/* --- Block 7.5: Pricing / Next Steps --- */}
      <Section id="price" className="py-12 md:py-24 bg-nature-50/50">
        {/* Заголовок с увеличенным нижним отступом (mb-20) */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-stone-900">Следующие шаги</h2>
        </div>

        <div className="
          flex overflow-x-auto gap-6 pt-10 pb-8 snap-x mandatory no-scrollbar -mx-6 px-6 
          lg:grid lg:grid-cols-3 lg:gap-6 lg:mx-auto lg:px-0 lg:py-0 lg:overflow-visible items-start
        ">

          {/* 1. Карточка: Расшифровка анализов */}
          <div className="min-w-[85%] sm:min-w-[350px] snap-center bg-white rounded-[2rem] p-8 border border-nature-100 shadow-lg hover:shadow-xl transition-all duration-300 order-2 lg:order-1 h-full flex flex-col">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-stone-900 mb-2">Расшифровка анализов</h3>
            <div className="text-2xl font-bold text-nature-700 mb-6">1 900 ₽</div>

            <p className="text-stone-600 leading-relaxed mb-8 flex-grow">
              Текстовая интерпретация вашего анализа крови с векторами улучшений. Понятно и по делу.
            </p>

            <Button
              onClick={() => window.location.href = 'https://yookassa.ru/'}
              variant="outline"
              fullWidth
              className="!border-stone-200 text-stone-600 hover:border-nature-300 hover:text-nature-700 mt-auto"
            >
              Перейти к оплате
            </Button>
          </div>

          {/* 2. Карточка: Консультация (Центральная, акцентная) */}
          <div className="min-w-[85%] sm:min-w-[350px] snap-center bg-white rounded-[2rem] p-8 md:p-10 border-2 border-nature-500 shadow-2xl relative order-1 lg:order-2 lg:-mt-8 h-full flex flex-col">
            {/* Бейдж "Рекомендуемый выбор" */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nature-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-md whitespace-nowrap">
              Рекомендуемый выбор
            </div>

            <div className="w-14 h-14 bg-nature-50 rounded-2xl flex items-center justify-center text-nature-600 mb-6">
              <User className="w-7 h-7" />
            </div>

            <h3 className="font-serif font-bold text-3xl text-stone-900 mb-2">Консультация</h3>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-stone-400 text-xl line-through decoration-stone-300 decoration-1">9 000 ₽</span>
              <span className="text-nature-700 text-4xl font-bold">5 000 ₽</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3 text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-nature-500 mt-0.5 shrink-0" />
                <span>Длительность 1 час + вопросы в течение 3 дней</span>
              </li>
              <li className="flex items-start gap-3 text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-nature-500 mt-0.5 shrink-0" />
                <span>Сбор жалоб, анамнеза, анализов и обследований</span>
              </li>
              <li className="flex items-start gap-3 text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-nature-500 mt-0.5 shrink-0" />
                <span>Рекомендации и план восстановления на 2 месяца</span>
              </li>
            </ul>

            <div className="space-y-3 mt-auto w-full">
              <Button
                onClick={() => window.location.href = 'https://yookassa.ru/'}
                fullWidth
                className="!py-4 text-lg shadow-xl shadow-nature-200"
              >
                Перейти к оплате
              </Button>
              <Button
                onClick={() => window.location.href = 'https://t.me/elizavetaefimova'}
                variant="outline"
                fullWidth
                className="!border-stone-200 text-stone-500 hover:text-nature-700 hover:bg-nature-50"
                icon={HelpCircle}
              >
                Задать вопрос
              </Button>
            </div>
          </div>

          {/* 3. Карточка: AI Чат-бот */}
          <div className="min-w-[85%] sm:min-w-[350px] snap-center bg-white rounded-[2rem] p-8 border border-nature-100 shadow-lg hover:shadow-xl transition-all duration-300 order-3 lg:order-3 h-full flex flex-col">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500 mb-6">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-stone-900 mb-2">AI чат-бот</h3>
            <div className="text-lg font-bold text-purple-600 mb-6 bg-purple-50 inline-block px-3 py-1 rounded-lg">Бесплатно</div>

            <p className="text-stone-600 leading-relaxed mb-8 flex-grow">
              Сгенерируйте короткую персонализированную вовлекающую притчу для детей от 1 до 6 лет.
            </p>

            <Button
              onClick={() => window.open('https://t.me/your_bot_link', '_blank')}
              fullWidth
              className="bg-stone-900 hover:bg-stone-800 text-white shadow-stone-200 mt-auto"
              icon={Sparkles}
            >
              Перейти в бот
            </Button>
          </div>
        </div>
      </Section>

      {/* --- Cookie Consent --- */}
      <CookieConsent />

      {/* --- Block 8: Social Proof (Carousel/Grid) --- */}
      <Section className="bg-[#F2F9F4]" id="reviews">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-stone-900">Истории побед</h2>
          <p className="text-stone-500 text-lg italic font-serif">Реальные люди. Реальные результаты.</p>
        </div>

        {/* Mobile: Snap Scroll / Desktop: Grid */}
        <div className="
          flex overflow-x-auto gap-6 pb-12 snap-x mandatory no-scrollbar -mx-6 px-6 
          md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:mx-0 md:px-0 md:pb-0 md:overflow-visible
        ">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="
                min-w-[85%] sm:min-w-[350px] snap-center 
                bg-[#FDFBF7] p-8 md:p-10 rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl
                shadow-lg shadow-nature-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                flex flex-col relative h-full border border-[#F2EFE9]
              "
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 left-6 w-12 h-12 text-nature-200 opacity-50" />

              <div className="relative z-10 pt-8">
                <h3 className="font-serif font-bold text-nature-800 mb-4 text-2xl leading-tight">
                  {review.title}
                </h3>
                <div className="w-12 h-0.5 bg-nature-300 mb-6 opacity-60"></div>
                <p className="text-base md:text-lg text-stone-700 leading-relaxed font-sans">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- Block 9: Bonuses --- */}
      <Section className="bg-nature-700 text-white relative overflow-hidden md:rounded-3xl md:mx-6 md:my-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">При записи на консультацию я открою вам доступ в мое закрытое сообщество</h2>
          <p className="text-nature-200 text-base md:text-xl">Обычная стоимость такого формата от 3000 руб в мес, сейчас это бесплатно</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { text: "В закрытом чате я выделяю день, когда отвечаю на вопросы своих пациентов", icon: MessageCircle },
            { text: "Вас ждет подборки полезных материалов и постов на разные темы, от прикорма, до сна и помощи при острых случаях", icon: CalendarCheck },
            { text: "Для всех участниц - сниженная цена на повторные консультации", icon: Scroll }
          ].map((bonus, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4 bg-nature-800/40 p-6 md:p-8 rounded-2xl hover:bg-nature-800/60 transition">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white">
                <bonus.icon className="w-7 h-7" />
              </div>
              <span className="text-base md:text-lg font-medium text-nature-50">{bonus.text}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* --- Block 10: FAQ --- */}
      <Section className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 md:mb-12 text-center">Частые вопросы</h2>
        <div className="space-y-3">
          {faq.map((item, idx) => (
            <AccordionItem
              key={idx}
              title={item.q}
              isOpen={openFaq === idx}
              onClick={() => toggleFaq(idx)}
            >
              {item.a}
            </AccordionItem>
          ))}
        </div>
      </Section>

      {/* --- Block 11: Final CTA --- */}
      <Section id="contact" className="bg-nature-50 text-center pb-20 md:pb-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Устраняйте причины, а не симптомы</h2>
          <p className="text-stone-600 mb-10 text-lg md:text-xl leading-relaxed">Давайте найдем настоящую причину и вернем здоровье вашей семье системным путем. Первый шаг ни к чему вас не обязывает.</p>
          <Button onClick={() => window.location.href = 'https://t.me/dokliza'} className="mx-auto !text-lg !px-10 !py-4 shadow-xl">Записаться на бесплатное знакомство (15 мин)</Button>
        </div>
      </Section>

      {/* --- Footer --- */}
      <footer className="bg-nature-700 text-nature-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 items-start">

            {/* Контакты */}
            <div className="flex flex-col gap-3 w-full">
              <h3 className="text-white font-semibold mb-2 text-base">Контакты</h3>
              <a href="mailto:dr.efimovaelizaveta@ya.ru" className="flex items-center gap-2 hover:text-white transition text-sm">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>dr.efimovaelizaveta@ya.ru</span>
              </a>
              <a href="tel:+79265108908" className="flex items-center gap-2 hover:text-white transition text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+7 (926) 510-89-08</span>
              </a>
            </div>

            {/* Документы */}
            <div className="flex flex-col gap-3 w-full">
              <h3 className="text-white font-semibold mb-2 text-base">Документы</h3>
              <a href="https://disk.yandex.ru/i/VFygMl9dtikmkA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-sm">
                Политика конфиденциальности
              </a>
              <a href="https://disk.yandex.ru/i/eZOSaNSxp0hKLw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-sm">
                Договор оферты
              </a>
            </div>

            {/* Реквизиты */}
            <div className="flex flex-col gap-2 w-full md:text-right">
              <h3 className="text-white font-semibold mb-2 text-base">Реквизиты</h3>
              <p className="text-sm">ИНН 220360264960</p>
              <p className="text-sm">Ефимова Елизавета Эдуардовна</p>
              <p className="text-sm">г. Москва</p>
            </div>

          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-6 left-6 right-6 z-50 transition-all duration-500 transform md:hidden ${showStickyButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <Button onClick={scrollToContact} className="w-full shadow-2xl !bg-nature-700 !py-4 text-lg">
          Записаться
        </Button>
      </div>

      {/* Documents Modal */}
      {showDocs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm" onClick={() => setShowDocs(false)}>
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowDocs(false)} className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 transition z-10">
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif font-bold text-2xl mb-6">Документы и сертификаты</h3>

            {/* Mobile: Horizontal Carousel */}
            <div className="md:hidden">
              <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-6 px-6">
                <div className="flex gap-4 snap-x snap-mandatory">
                  {documents.map((doc, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxIndex(i)}
                      className="snap-center flex-shrink-0 w-[85vw] h-[60vh] bg-stone-50 rounded-xl border border-stone-200 hover:border-nature-300 transition shadow-sm hover:shadow-md cursor-pointer overflow-hidden"
                    >
                      <img
                        src={doc.src}
                        alt={doc.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-stone-500 text-sm mt-4">← Прокрутите для просмотра ({documents.length} документов) →</p>
            </div>

            {/* Desktop: Masonry Grid */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {documents.map((doc, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`bg-stone-50 rounded-xl border border-stone-200 hover:border-nature-400 transition shadow-sm hover:shadow-lg cursor-pointer overflow-hidden ${doc.type === 'portrait' ? 'row-span-2' : ''
                    }`}
                >
                  <img
                    src={doc.src}
                    alt={doc.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for Fullscreen */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition text-white z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
            >
              <ChevronDown className="w-6 h-6 rotate-90" />
            </button>
          )}

          {/* Next Button */}
          {lightboxIndex < documents.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
            >
              <ChevronDown className="w-6 h-6 -rotate-90" />
            </button>
          )}

          {/* Image */}
          <img
            src={documents[lightboxIndex].src}
            alt={documents[lightboxIndex].alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {lightboxIndex + 1} / {documents.length}
          </div>
        </div>
      )}

    </div>
  );
};

export default App;