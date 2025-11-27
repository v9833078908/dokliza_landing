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
  MapPin
} from 'lucide-react';

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
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : 'w-full md:w-auto'} ${className}`}
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
    title: "Про щитовидную железу (Чудо результата)",
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
    a: "Интегративная медицина — это не 'травки'. Это синтез классической диагностики и глубокой биохимии. В поликлинике у врача просто нет ресурса (12 мин на пациента)."
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
          <span className="font-serif font-bold text-lg md:text-xl text-stone-900">Dr. Efimova</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-stone-600 hover:text-nature-600 font-medium transition">Обо мне</a>
          <a href="#problems" className="text-stone-600 hover:text-nature-600 font-medium transition">Симптомы</a>
          <a href="#method" className="text-stone-600 hover:text-nature-600 font-medium transition">Метод</a>
          <a href="#reviews" className="text-stone-600 hover:text-nature-600 font-medium transition">Отзывы</a>
          <Button onClick={onContactClick} className="!py-2 !px-6 !text-sm">Записаться</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-stone-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-stone-100 p-6 flex flex-col gap-4 shadow-xl md:hidden">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-stone-800 py-2 border-b border-stone-50">Обо мне</a>
          <a href="#problems" onClick={() => setMobileMenuOpen(false)} className="text-stone-800 py-2 border-b border-stone-50">Симптомы</a>
          <a href="#method" onClick={() => setMobileMenuOpen(false)} className="text-stone-800 py-2 border-b border-stone-50">Метод</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-stone-800 py-2 border-b border-stone-50">Отзывы</a>
          <Button onClick={() => { onContactClick(); setMobileMenuOpen(false); }}>Записаться</Button>
        </div>
      )}
    </nav>
  );
};

// --- Main Application ---

const App = () => {
  const [openCredential, setOpenCredential] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showDocs, setShowDocs] = useState(false);
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setShowStickyButton(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

            <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight font-serif text-stone-900 mb-4 md:mb-6 font-bold">
              Помогу найти <span className="text-nature-700 italic">истинную причину</span> болезней и восстановить здоровье
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed mb-8 md:text-xl">
              Елизавета Ефимова — семейный доктор, врач-педиатр с ординатурой по патологоанатомии. Объединяю опыт 6 лет клинической практики с методами превентивной медицины. Выстраиваю семьям систему здоровья
            </p>

            {/* Desktop CTA (Grid Layout) */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button onClick={scrollToContact} className="!text-lg !px-10 shadow-xl shadow-nature-200 hover:shadow-nature-300">
                Записаться на бесплатное знакомство
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
              За 6 лет практики я помогла более чем 600 семьям достичь значительных улучшений в здоровье. Дети меньше болеют, их рацион питания становится разнообразнее, они забывают про аденоиды и атопический дерматит. Помогаю устранить причины боли в животе, нормализовать аппетит и сон. Взрослые повышают уровень энергии, снижают вес и решают проблемы, которые длятся годами -- от исчезновения узлов в щитовидной железе до нормализации метаболизма. Эти результаты подтверждают эффективность моего подхода
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
      <Section id="problems" className="bg-stone-900 text-white md:rounded-[3rem] md:mx-6 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Left Column: Problems */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 md:mb-12 text-center lg:text-left text-nature-50">
              Вам это знакомо?
            </h2>

            <div className="space-y-6">
              <div className="bg-stone-800 p-6 md:p-8 rounded-2xl border-l-4 border-red-400 transform transition hover:translate-x-2">
                <h4 className="font-bold text-red-200 text-sm md:text-base uppercase mb-4 tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span> У ребенка
                </h4>
                <ul className="space-y-3">
                  {[
                    "Ребенок капризный, вялый, плохо учится или ничего не хочет",
                    "Устали от частых болезней, которые переходят в осложнения и хронику",
                    "Участковый педиатр снова выписал антибиотики, противовирусные, антигистаминные"
                  ].map((item, i) => (
                    <li key={i} className="text-stone-300 text-base md:text-lg flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400/50 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-800 p-6 md:p-8 rounded-2xl border-l-4 border-amber-400 transform transition hover:translate-x-2">
                <h4 className="font-bold text-amber-200 text-sm md:text-base uppercase mb-4 tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span> У мамы
                </h4>
                <ul className="space-y-3">
                  {[
                    "Ребенок заболел снова и нет времени на себя и на мужа",
                    "Вы переживаете насчет осложнений от фарм препаратов",
                    "Вы хотите разобраться в причине - почувствовать себя хорошей мамой"
                  ].map((item, i) => (
                    <li key={i} className="text-stone-300 text-base md:text-lg flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-amber-400/50 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Solution */}
          <div className="bg-nature-700 -mx-6 md:mx-0 p-8 md:p-12 md:rounded-3xl flex flex-col justify-center">
            <h3 className="font-bold text-2xl md:text-3xl mb-8 text-white">Как я могу помочь вам?</h3>
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: "⚡️", title: "Вернуть ресурс", subtitle: "Работа с хронической усталостью и выгоранием.", text: "Энергия для жизни" },
                { icon: "🥗", title: "Восполнить дефициты", subtitle: "Наладить здоровье без хождения по 10 разным специалистам.", text: "Комплексный подход" },
                { icon: "🧘‍♀️", title: "Энергия и радость", subtitle: "Чтобы хватало сил не только на быт, но и на себя.", text: "Гармония в семье" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-nature-800/40 p-5 rounded-2xl hover:bg-nature-800/60 transition">
                  <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <span className="font-bold block text-lg text-nature-50 mb-1">{item.title}</span>
                    <p className="text-nature-200 text-sm md:text-base leading-relaxed">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-nature-200 italic text-lg opacity-80">"Дети зеркалят ваше состояние"</p>
          </div>
        </div>
      </Section>

      {/* --- Block 4: Three Steps --- */}
      <Section className="bg-nature-50" id="method">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">Три шага от вечных болезней к стабильному здоровью</h2>
          <p className="text-stone-500 uppercase tracking-widest font-semibold text-sm">Моя система</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-nature-100 text-nature-700 px-4 py-1.5 text-xs font-bold rounded-bl-xl">Этап 1</div>
            <div className="w-14 h-14 bg-nature-50 rounded-2xl flex items-center justify-center text-nature-600 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-xl text-nature-800 mb-3">Найти корень</h3>
            <p className="text-stone-600 mb-6 text-base leading-relaxed">Глубокий разбор анализов + анкета на 40+ параметров (история родов, питание, стресс). Вы понимаете, ПОЧЕМУ организм дает сбой.</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-stone-400 mt-auto">
              <Clock className="w-4 h-4" /> 7 дней
            </div>
          </Card>

          <Card className="relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border-nature-200 shadow-lg">
            <div className="absolute top-0 right-0 bg-nature-600 text-white px-4 py-1.5 text-xs font-bold rounded-bl-xl">Этап 2</div>
            <div className="w-14 h-14 bg-nature-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-nature-200">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-3">Восстановление</h3>
            <p className="text-stone-600 mb-6 text-base leading-relaxed">Персональный протокол: питание + нутрицевтики + режим. Ребенок бодрее, меньше капризов, сон крепче, сопли проходят.</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-stone-400 mt-auto">
              <Clock className="w-4 h-4" /> 14–30 дней
            </div>
          </Card>

          <Card className="relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-nature-100 text-nature-700 px-4 py-1.5 text-xs font-bold rounded-bl-xl">Этап 3</div>
            <div className="w-14 h-14 bg-nature-50 rounded-2xl flex items-center justify-center text-nature-600 mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-xl text-nature-800 mb-3">Закрепить</h3>
            <p className="text-stone-600 mb-6 text-base leading-relaxed">Контрольные анализы + точечная корректировка. Вы знаете, как поддерживать здоровье без паники при каждом чихе.</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-stone-400 mt-auto">
              <Clock className="w-4 h-4" /> 60 дней
            </div>
          </Card>
        </div>
      </Section>

      {/* --- Block 5: Hero's Journey --- */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <div className="relative order-2 lg:order-1 h-full min-h-[400px] hidden lg:block rounded-[3rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1000&auto=format&fit=crop"
              alt="Doctor with patient"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
              <p className="text-white font-serif text-2xl italic">"Врач должен идти рядом с семьёй"</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 md:mb-10 text-stone-900 leading-tight">
              Почему я ушла из классической медицины?
            </h2>

            <div className="space-y-8 text-stone-700 leading-relaxed text-base md:text-lg">
              <div className="relative pl-6 border-l-4 border-stone-200">
                <span className="font-bold text-stone-900 block mb-2 text-xl">До</span>
                <p>Я работала в патанатомии и видела, как болезни развиваются изнутри. Я понимала: многое <strong>можно было предотвратить</strong>, если бы кто-то занялся причинами раньше.</p>
              </div>

              <div className="relative pl-6 border-l-4 border-red-200">
                <span className="font-bold text-red-700 block mb-2 text-xl">Кризис</span>
                <p>Система давала всего 6-8 минут на приём. Я ощущала себя белой вороной: ведь я хотела менять жизни людей, а не просто выписывать рецепты.</p>
              </div>

              <div className="relative pl-6 border-l-4 border-nature-300">
                <span className="font-bold text-nature-700 block mb-2 text-xl">Прозрение</span>
                <p>Всё изменила моя собственная беременность. Мой ТТГ скакал, врачи говорили «норма», но самочувствие было ужасное. Я нашла другой подход.</p>
              </div>

              <div className="bg-nature-50 p-6 rounded-2xl border border-nature-100">
                <span className="font-bold text-nature-800 block mb-2 text-xl">Сегодня</span>
                <p>Мои консультации длятся минимум 1 час. Это медицина, где <strong>врач идёт рядом с семьёй</strong>.</p>
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
              <XCircle className="w-5 h-5" /> Ошибки системы
            </h3>
            <div className="space-y-4">
              {[
                "Лечить орган отдельно от тела («ухо болит — капли в ухо»)",
                "Нутрициологи назначают БАДы «по схемам из интернета»",
                "Родители ждут, что «перерастет», пока дефициты растут"
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
                { title: "Целостный подход", desc: "Смотрю на организм как на систему. Стресс мамы влияет на животик ребенка." },
                { title: "Причина, а не маскировка", desc: "Если ребенок болеет каждые 2 недели — это сигнал. Мы чиним поломку." },
                { title: "Персонализация", desc: "Нет «волшебной таблетки». Каждый протокол строится под ваши анализы." }
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
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Как проходит диагностика?</h2>
          <p className="text-lg text-nature-600 font-medium bg-nature-50 inline-block px-4 py-2 rounded-full">
            Спойлер: даже эффективнее, чем очно
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "Знакомство (15 мин)", desc: "Бесплатный созвон. Обсуждаем ситуацию, намечаем план.", icon: Phone },
              { title: "Подготовка", desc: "Вы заполняете анкету. Я составляю список анализов (ничего лишнего).", icon: Scroll },
              { title: "Глубокий анализ", desc: "Изучаю ваши анализы, историю болезни, фото/видео.", icon: Stethoscope },
              { title: "Большая консультация", desc: "1 час. Разбираем причины и стратегию лечения.", icon: User },
              { title: "Результат на руки", desc: "Карта здоровья: план питания, нутрицевтики, режим.", icon: MapPin },
              { title: "Поддержка", desc: "Отвечаю на вопросы в течение 3 дней после консультации.", icon: MessageCircle }
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 sm:gap-6 bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                {/* Icon Bubble */}
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-nature-50 border border-nature-200 text-nature-600 flex items-center justify-center group-hover:bg-nature-600 group-hover:text-white transition-colors duration-300">
                  <step.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">{step.title}</h3>
                  <p className="text-stone-600 text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button onClick={scrollToContact} className="!px-12 !py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">Записаться на знакомство</Button>
          </div>
        </div>
      </Section>

      {/* --- Block 8: Social Proof (Carousel/Grid) --- */}
      <Section className="bg-[#F2F5F3]" id="reviews">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Результаты пациентов</h2>
          <div className="w-16 h-1 bg-nature-500 rounded mx-auto"></div>
        </div>

        {/* Mobile: Snap Scroll / Desktop: Grid */}
        <div className="
            flex overflow-x-auto gap-4 pb-8 snap-x mandatory no-scrollbar -mx-6 px-6 
            md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:mx-0 md:px-0 md:pb-0 md:overflow-visible
          ">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[85%] sm:min-w-[300px] snap-center bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col hover:shadow-md transition h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-nature-100 flex items-center justify-center text-nature-600 font-bold text-sm">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="h-px bg-stone-100 w-full mb-1"></div>
                  <div className="flex text-amber-400 gap-0.5">
                    {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-nature-800 mb-3 text-lg leading-tight">{review.title}</h3>
              <p className="text-sm md:text-base text-stone-600 leading-relaxed italic flex-1">"{review.text}"</p>
            </div>
          ))}
        </div>
      </Section>

      {/* --- Block 9: Bonuses --- */}
      <Section className="bg-stone-900 text-white relative overflow-hidden md:rounded-3xl md:mx-6 md:my-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-nature-600 rounded-full blur-3xl opacity-20 -mr-24 -mt-24 pointer-events-none"></div>

        <div className="text-center mb-10 relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">При записи на консультацию</h2>
          <p className="text-nature-300 text-base md:text-xl">Вы получаете ценность на 20 000 ₽</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            { text: "Доступ в закрытое сообщество (чат для вопросов)", icon: MessageCircle },
            { text: "План питания для детей (60 страниц меню)", icon: CalendarCheck },
            { text: "Дневник симптомов (удобный трекер)", icon: Scroll }
          ].map((bonus, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-300">
                <bonus.icon className="w-7 h-7" />
              </div>
              <span className="text-base md:text-lg font-medium">{bonus.text}</span>
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
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Перестаньте гадать и бороться с симптомами</h2>
          <p className="text-stone-600 mb-10 text-lg md:text-xl leading-relaxed">Давайте найдем настоящую причину и вернем здоровье вашей семье системным путем. Первый шаг ни к чему вас не обязывает.</p>
          <Button onClick={() => window.location.href = 'https://t.me/elizavetaefimova'} className="mx-auto !text-lg !px-10 !py-4 shadow-xl">Записаться на бесплатное знакомство (15 мин)</Button>
          <p className="mt-8 font-serif italic text-stone-500">Восстановите здоровье вместе с доктором Лизой.</p>
        </div>
      </Section>

      {/* --- Footer --- */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>Контакты (Telegram/WhatsApp)</span>
            <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition">Договор оферты</a>
          </div>
          <div className="text-center md:text-right">
            <p>ИНН 220360264960</p>
            <p>Ефимова Елизавета Эдуардовна, г. Москва</p>
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
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowDocs(false)} className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 transition">
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif font-bold text-2xl mb-6">Документы и сертификаты</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Placeholders for documents */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[3/4] bg-stone-100 rounded-xl flex items-center justify-center text-stone-400 border border-stone-200">
                  <Scroll className="w-8 h-8 opacity-50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;