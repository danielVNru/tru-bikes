export type Product = {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  tag?: string;
  specs: string[];
};

export type CartItem = Product & { qty: number };

export type Dealer = {
  city: string;
  name: string;
  address: string;
  phone: string;
};

export type GalleryImage = {
  url: string;
  caption: string;
};

export type GeometryRow = {
  size: string;
  reach: string;
  stack: string;
  tt: string;
  cs: string;
  bb: string;
  hta: string;
  sta: string;
};

export type FeedbackForm = {
  name: string;
  contact: string;
  message: string;
};

export const NAV_LINKS = [
  { href: "#collection", label: "Коллекция" },
  { href: "#brand", label: "О бренде" },
  { href: "#specs", label: "Геометрия" },
  { href: "#dealers", label: "Где купить" },
  { href: "#contacts", label: "Контакты" },
];

export const BRAND_STATS = [
  ["2018", "Год основания"],
  ["100%", "Ручная сборка"],
  ["3 года", "Гарантия"],
] as const;

export const SOCIAL_LINKS = [
  { label: "VK", href: "https://vk.com/trubikes" },
  { label: "TG", href: "https://t.me/trubikes" },
  { label: "YT", href: "https://www.youtube.com/@trubike" },
];

export const SPEC_HEADERS = [
  "Размер",
  "Reach",
  "Stack",
  "Top Tube",
  "Chain Stay",
  "BB Drop",
  "HTA",
  "STA",
] as const;

export const PRODUCTS: Product[] = [
    {
    id: 4,
    name: "TRU Батя 11",
    subtitle: 'Fat Bike 32" · 2026',
    price: 95000,
    image:
      "https://images.unsplash.com/photo-1754660661211-d71700b120df?w=640&h=480&fit=crop&auto=format",
    tag: "Инновация",
    specs: [
      'Колеса: 32" (огромные)',
      "Рама: алюминиевая бустовая (легкая)",
      "Трансмиссия: Shimano Cues 1x11",
      "Тормоза: гидравлические",
      "Быстрый, накатистый, проходимый",
    ],
  },
  {
    id: 1,
    name: "GRAIL PRO 10",
    subtitle: "Gravel · 2026",
    price: 89900,
    image:
      "https://images.unsplash.com/photo-1575734124434-aeabcbd508b3?w=640&h=480&fit=crop&auto=format",
    tag: "Топ модель",
    specs: [
      "Рама: алюминий UDH собственной разработки",
      "Вилка: карбоновая жесткая",
      "Трансмиссия: Shimano Cues 1x10",
      "Тормоза: Shimano дисковые механические",
      "Колеса: Tubeless Ready, покрышки 50мм",
      "Сквозные оси, конусный стакан",
    ],
  },
  {
    id: 2,
    name: "GRACIA 8 MD",
    subtitle: "Women's · 2026",
    price: 54900,
    image:
      "https://images.unsplash.com/photo-1602010453560-2c77603dfb87?w=640&h=480&fit=crop&auto=format",
    tag: "Женская геометрия",
    specs: [
      "Рама: алюминий (женская геометрия)",
      "Трансмиссия: Shimano Altus 1x8",
      "Тормоза: Tektro дисковые механические",
      "Подшипники: промышленные во втулках",
      "Адаптированное седло и руль",
      "Доступен в 2 цветах",
    ],
  },
  {
    id: 3,
    name: "EVO 10",
    subtitle: "MTB 120mm · 2026",
    price: 79900,
    image:
      "https://images.unsplash.com/photo-1768161680532-32d02decbcb4?w=640&h=480&fit=crop&auto=format",
    tag: "Готов к трейлам",
    specs: [
      "Рама: алюминий, dropper ready",
      "Вилка: Suntour X1 Boost воздушная 120мм",
      "Трансмиссия: Shimano Deore 1x10 (11-43)",
      "Тормоза: Shimano MT200 гидравлика",
      "Конусный рулевой стакан",
      "Объемные дропауты",
    ],
  },
  
];

export const DEALERS: Dealer[] = [
  // Москва
  { 
    city: "Москва", 
    name: "Велопорт", 
    address: "Сколковское ш., 31, стр. 1, ТЦ «СпортХит»", 
    phone: "+7 (495) 255-08-67" 
  },
  { 
    city: "Москва", 
    name: "Barkovski", 
    address: "ул. Смольная, 63б, ТЦ «Экстрим»", 
    phone: "+7 (495) 924-50-50" 
  },
  { 
    city: "Москва", 
    name: "Velo4u", 
    address: "Сокольническая площадь, 4", 
    phone: "+7 (499) 220-02-10" 
  },
  
  // Санкт-Петербург
  { 
    city: "Санкт-Петербург", 
    name: "Велодрайв (франшиза)", 
    address: "Индустриальный пр., 27", 
    phone: "+7 (812) 642-48-11" 
  },
  { 
    city: "Санкт-Петербург", 
    name: "Велодрайв (франшиза)", 
    address: "Большой пр. ВО, 68Б", 
    phone: "+7 (812) 642-77-37" 
  },
  { 
    city: "Санкт-Петербург", 
    name: "Рубайк", 
    address: "ул. Маршала Говорова, 16", 
    phone: "+7 (812) 985-15-16" 
  },
  
  // Великий Новгород
  { 
    city: "Великий Новгород", 
    name: "Рубайк", 
    address: "Воскресенский бул., 9", 
    phone: "+7 (8162) 64-89-64" 
  },
  
  // Тамбов
  { 
    city: "Тамбов", 
    name: "Велодело", 
    address: "ул. Советская, 19А", 
    phone: "+7 (4752) 71-28-52" 
  },
  
  // Омск
  { 
    city: "Омск", 
    name: "Новая Атлетика", 
    address: "ул. Лермонтова, 4", 
    phone: "+7 (3812) 383-771" 
  },
  
  // Новосибирск
  { 
    city: "Новосибирск", 
    name: "Твоя Стихия", 
    address: "ул. Железнодорожная, 12", 
    phone: "+7 (383) 363-10-01" 
  },
  { 
    city: "Новосибирск", 
    name: "Тест-Центр", 
    address: "Академгородок, ул. Мусы Джалиля, 27", 
    phone: "+7 (383) 309-22-36" 
  },
  
  // Кемерово
  { 
    city: "Кемерово", 
    name: "Твоя Стихия", 
    address: "пр. Октябрьский, 9", 
    phone: "+7 (3842) 65-77-55" 
  },
  
  // Новокузнецк
  { 
    city: "Новокузнецк", 
    name: "Твоя Стихия", 
    address: "ул. Тольятти, 31", 
    phone: "+7 (3843) 45-15-85" 
  },
  
  // Красноярск
  { 
    city: "Красноярск", 
    name: "Sport-Ride", 
    address: "ул. Партизана Железняка, 40А", 
    phone: "+7 (391) 294-26-31" 
  }
];

export const CITIES = Array.from(new Set(DEALERS.map((dealer) => dealer.city)));

export const GALLERY: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1535369643553-a33e0d1ac81d?w=1400&h=800&fit=crop&auto=format",
    caption: "Хардтейл на лесном трейле",
  },
  {
    url: "https://images.unsplash.com/photo-1625057983766-71c6d131a01a?w=1400&h=800&fit=crop&auto=format",
    caption: "Летний выезд в лесу",
  },
  {
    url: "https://images.unsplash.com/photo-1575548393466-0df1618ba410?w=1400&h=800&fit=crop&auto=format",
    caption: "Технический спуск",
  },
  {
    url: "https://images.unsplash.com/photo-1594942939850-d8da299577f3?w=1400&h=800&fit=crop&auto=format",
    caption: "Через лес на полной скорости",
  },
  {
    url: "https://images.unsplash.com/photo-1629282438504-a3ad27dc406e?w=1400&h=800&fit=crop&auto=format",
    caption: "Речной брод",
  },
  {
    url: "https://images.unsplash.com/photo-1594942940158-af338884ac6f?w=1400&h=800&fit=crop&auto=format",
    caption: "Ранний выезд",
  },
];

export const GEO: GeometryRow[] = [
  { size: "S", reach: "430", stack: "596", tt: "565", cs: "430", bb: "-7", hta: "68°", sta: "74°" },
  { size: "M", reach: "450", stack: "610", tt: "585", cs: "430", bb: "-7", hta: "68°", sta: "74°" },
  { size: "L", reach: "470", stack: "623", tt: "605", cs: "430", bb: "-7", hta: "68°", sta: "74°" },
  { size: "XL", reach: "490", stack: "637", tt: "625", cs: "430", bb: "-7", hta: "68°", sta: "74°" },
];

export const INITIAL_FEEDBACK_FORM: FeedbackForm = {
  name: "",
  contact: "",
  message: "",
};

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ru-RU")} ₽`;
}
