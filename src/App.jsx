import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useInView, useMotionValueEvent, useScroll } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  AtSign,
  Camera,
  ChefHat,
  Clapperboard,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Play,
  Quote,
  Sparkles,
  Star,
  Utensils,
} from 'lucide-react';
import { useRef } from 'react';
import heroPhoto from '../paginainicialjueleo.jpg';
import aboutPhoto from '../sobremimjueleo.JPG';
import contactPhoto from '../djoy-87.jpg';
import foodBasketPhoto from './assets/cestacomida-horizontal.png';
import barcelonaPhoto from './assets/barcelona.jpg';
import friesPhoto from './assets/foods/batatafrita.png';
import cakePhoto from './assets/foods/bolodechocolate.png';
import burritoPhoto from './assets/foods/burrito.png';
import burgerPhoto from './assets/foods/hamburguer.png';
import pizzaPhoto from './assets/foods/pizza.png';
import pokePhoto from './assets/foods/poke.png';
import iceCreamPhoto from './assets/foods/sorvete.png';
import portfolioVideo1 from './assets/videos/video1.mp4';
import portfolioVideo2 from './assets/videos/video2.mp4';
import portfolioVideo3 from './assets/videos/video3.mp4';
import portfolioVideo4 from './assets/videos/video4.mp4';
import videoCover1 from './assets/video-covers/video1.MOV.png';
import videoCover2 from './assets/video-covers/video2.MOV.png';
import videoCover3 from './assets/video-covers/video3.MOV.png';
import videoCover4 from './assets/video-covers/video4.MOV.png';

const portfolioPhotoModules = import.meta.glob('./assets/portfolio/*.{jpg,jpeg,JPG,JPEG,png,webp}', { eager: true, query: '?url', import: 'default' });
const portfolioOrder = [
  'IMG_1449.jpg',
  'foto1.jpg',
  'IMG_2086.jpg',
  'IMG_8725.jpg',
  'foto2.jpg',
  'IMG_3641.jpg',
  'IMG_1491.jpg',
  'foto3.jpg',
  'IMG_4256.jpg',
  'IMG_6459.jpg',
  'IMG_5319.jpg',
  'IMG_7988.jpg',
  'IMG_2384.jpg',
  'IMG_6037.jpg',
  'IMG_3653.jpg',
  'IMG_8733.jpg',
  'IMG_4726.jpg',
  'IMG_6159.jpg',
  'IMG_3656.jpg',
  'IMG_8741.jpg',
  'IMG_5380.jpg',
  'IMG_9445.jpg',
];
const portfolioPhotos = portfolioOrder.map((fileName) => portfolioPhotoModules[`./assets/portfolio/${fileName}`]).filter(Boolean);

const img = (id, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Portfólio', id: 'portfolio' },
  { label: 'Comidas favoritas', id: 'restaurantes' },
  { label: 'Destinos favoritos', id: 'viagens' },
  { label: 'Serviços', id: 'serviços' },
  { label: 'Métricas', id: 'metricas' },
  { label: 'Contato', id: 'contato' },
];

const metrics = [
  { value: 20, suffix: ' mil', label: 'visualizações mensais' },
  { value: 18, suffix: ' mil', label: 'contas alcançadas' },
  { value: 6, suffix: '', label: 'países visitados' },
];

const videos = [
  { title: 'Fôrno', tag: 'Vale o Hype', src: portfolioVideo1, cover: videoCover1 },
  { title: 'Liberdade', tag: 'Tudo que comemos na', src: portfolioVideo2, cover: videoCover2 },
  { title: 'Holy Burguer', tag: 'Vale o Hype', src: portfolioVideo3, cover: videoCover3 },
  { title: 'Krispy Kreme', tag: 'Vale o Hype', src: portfolioVideo4, cover: videoCover4 },
];

const photos = [
  ...portfolioPhotos,
];

const restaurants = [
  { name: 'Mesa do Jardim', city: 'Florianópolis', text: 'Menu sazonal, ambiente acolhedor e pratos que rendem boas histórias.', image: img('photo-1555396273-367ea4eb4db5', 900) },
  { name: 'Casa Aurora', city: 'Curitiba', text: 'Cozinha contemporânea com clima de encontro entre amigos.', image: img('photo-1552566626-52f8b828add9', 900) },
  { name: 'Bistrô da Serra', city: 'Gramado', text: 'Experiência intimista para casais, viagens e conteúdo editorial.', image: img('photo-1559339352-11d035aa65de', 900) },
];

const destinations = [
  { name: 'Espanha', text: 'Arquitetura, cultura e sabores que viram memória de viagem.', image: barcelonaPhoto },
  { name: 'Costa Verde', text: 'Destinos de descanso, mar e gastronomia local com estética natural.', image: img('photo-1507525428034-b723cf961d3e', 1000) },
  { name: 'Buenos Aires', text: 'Cafés clássicos, hotéis boutique e roteiros para compartilhar.', image: img('photo-1589909202802-8f4aadce1849', 1000) },
];

const services = [
  { icon: Clapperboard, title: 'Reels', text: 'Vídeos curtos com roteiro, captação e edição pensados para descoberta.' },
  { icon: Play, title: 'TikTok', text: 'Conteúdo nativo, leve e dinâmico para marcas que querem conversa real.' },
  { icon: MessageCircle, title: 'Stories', text: 'Cobertura espontânea da experiência com CTA claro e linguagem próxima.' },
  { icon: Star, title: 'Feed', text: 'Posts editoriais para reforçar desejo, posicionamento e lembrança de marca.' },
  { icon: Heart, title: 'UGC', text: 'Conteúdos autênticos para uso em anúncios, redes sociais e landing pages.' },
  { icon: Camera, title: 'Fotografia Orgânica', text: 'Imagens naturais de ambientes, pratos, detalhes e momentos de consumo.' },
  { icon: Sparkles, title: 'Produção de Conteúdo', text: 'Pacotes personalizados para restaurantes, hotéis, pousadas e marcas.' },
];

const testimonials = [
  { name: 'Marina Costa', role: 'Casa Catarina', text: 'A entrega ficou elegante, verdadeira e trouxe uma percepção muito mais humana para a marca.' },
  { name: 'Rafael Nunes', role: 'Sushi Conceito', text: 'Eles conseguiram traduzir a experiência do restaurante com leveza e muita qualidade visual.' },
  { name: 'Clara Martins', role: 'Hotel boutique', text: 'O conteúdo parece indicação de amigos, mas com acabamento profissional de campanha.' },
];

const favoriteFoods = [
  { image: pizzaPhoto, label: 'Pizza', className: 'food-pizza' },
  { image: burgerPhoto, label: 'Hambúrguer', className: 'food-burger' },
  { image: pokePhoto, label: 'Poke', className: 'food-poke' },
  { image: friesPhoto, label: 'Batata frita', className: 'food-fries' },
  { image: cakePhoto, label: 'Bolo de chocolate', className: 'food-cake' },
  { image: burritoPhoto, label: 'Burrito', className: 'food-burrito' },
  { image: iceCreamPhoto, label: 'Sorvete', className: 'food-icecream' },
];

function Button({ children, variant = 'primary', href = '#contato' }) {
  return (
    <motion.a className={`button ${variant}`} href={href} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
      {children}
      <ArrowRight size={17} />
    </motion.a>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div className="section-title" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 24));

  return (
    <header className={`navbar ${scrolled ? 'scrolled visible' : ''}`}>
      <a href="#home" className="logo" aria-label="Cereja & Rosa home">
        Cereja <span>&</span> Rosa
      </a>
      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen((open) => !open)} aria-label="Abrir menu" aria-expanded={menuOpen}>
        <span />
        <span />
        <span />
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="menu-panel" aria-label="Menu principal" initial={{ opacity: 0, y: -12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.98 }} transition={{ duration: 0.22 }}>
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function MetricCard({ metric }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = performance.now();
    const duration = 1300;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(metric.value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, metric.value]);

  return (
    <motion.article ref={ref} className="metric-card" initial={{ scaleX: 0.82, opacity: 0.65 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} whileHover={{ y: -8 }}>
      <strong>+{count}{metric.suffix}</strong>
      <span>{metric.label}</span>
    </motion.article>
  );
}

function Gallery() {
  const [tab, setTab] = useState('videos');
  const [activeVideo, setActiveVideo] = useState(null);
  const photoColumns = photos.reduce(
    (columns, photo, index) => {
      columns[index % 3].push(photo);
      return columns;
    },
    [[], [], []],
  );

  if (photoColumns[1].length > 1) {
    [photoColumns[1][0], photoColumns[1][1]] = [photoColumns[1][1], photoColumns[1][0]];
  }

  return (
    <section className="section portfolio page-blue" id="portfolio">
      <SectionTitle eyebrow="Portfólio" title="Nossos conteúdos" />
      <div className="tabs" role="tablist">
        {['videos', 'fotos'].map((item) => (
          <button key={item} className={tab === item ? 'active' : ''} onClick={() => setTab(item)}>{item === 'videos' ? 'Vídeos' : 'Fotos'}</button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {tab === 'videos' ? (
          <motion.div className="video-grid" key="videos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {videos.map((video, index) => (
              <motion.button className="video-card" key={video.title} onClick={() => setActiveVideo(video)} initial={{ clipPath: 'inset(0 0 100% 0)', rotate: index % 2 ? 1.5 : -1.5 }} whileInView={{ clipPath: 'inset(0 0 0% 0)', rotate: index % 2 ? -0.5 : 0.5 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}>
                <img src={video.cover} alt={`Capa de ${video.title}`} loading="lazy" />
                <span><Play size={18} /> Assistir</span>
                <div><small>{video.tag}</small><h3>{video.title}</h3></div>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.div className="photo-masonry" key="photos" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {photoColumns.map((column, columnIndex) => (
              <div className="photo-column" key={`coluna-${columnIndex}`}>
                {column.map((photo, index) => <motion.img key={photo} src={photo} alt={`Galeria Cereja & Rosa ${columnIndex + 1}-${index + 1}`} loading="lazy" initial={{ opacity: 0, clipPath: 'inset(18% 0 0 0)' }} whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: (index + columnIndex) * 0.05 }} />)}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeVideo && (
          <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveVideo(null)}>
            <motion.div className="modal-content" initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 20 }} onClick={(event) => event.stopPropagation()}>
              <button className="close" onClick={() => setActiveVideo(null)}>Fechar</button>
              <video className="modal-video" src={activeVideo.src} controls autoPlay playsInline />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return <motion.article className="service-card" initial={{ x: index % 2 ? 34 : -34, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: (index % 4) * 0.05 }} whileHover={{ y: -8 }}><Icon size={24} /><h3>{service.title}</h3><p>{service.text}</p></motion.article>;
}

function RestaurantCard({ item, index }) {
  return <motion.article className="image-card restaurant-card" initial={{ opacity: 0.35, rotate: index === 1 ? 0 : index === 0 ? -2 : 2, y: index === 1 ? 34 : 0 }} whileInView={{ opacity: 1, rotate: index === 1 ? 0 : index === 0 ? -0.8 : 0.8, y: index === 1 ? -16 : 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.9 }} whileHover={{ y: -8 }}><img src={item.image} alt={item.name} loading="lazy" /><div><span><MapPin size={14} /> {item.city}</span><h3>{item.name}</h3><p>{item.text}</p><a href="#contato">Ver conteúdo</a></div></motion.article>;
}

function DestinationCard({ item, index }) {
  return <motion.article className="destination-card" initial={{ clipPath: index === 0 ? 'inset(0 22% 0 0)' : 'inset(16% 0 0 0)' }} whileInView={{ clipPath: 'inset(0 0 0 0)' }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -10 }}><img src={item.image} alt={item.name} loading="lazy" /><div><h3>{item.name}</h3><p>{item.text}</p></div></motion.article>;
}

function TestimonialCard({ item }) {
  return <motion.article className="testimonial-card" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}><Quote size={28} /><p>{item.text}</p><div className="person"><span>{item.name.charAt(0)}</span><div><strong>{item.name}</strong><small>{item.role}</small></div></div></motion.article>;
}

function BrandCard({ name }) {
  return <motion.div className="brand-card" whileHover={{ y: -5 }}>{name}</motion.div>;
}

function Footer() {
  return <footer className="footer"><p>Vamos criar experiências que as pessoas vão lembrar.</p><div><a href="https://instagram.com/cerejaaroosa">Instagram</a><a href="https://www.tiktok.com/@cerejaaroosa">TikTok</a><a href="mailto:jucerejaleorosa@gmail.com">Email</a></div></footer>;
}

export default function App() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Contato pelo site - ${name || 'Cereja & Rosa'}`);
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);

    window.location.href = `mailto:jucerejaleorosa@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="hero" id="home">
          <img className="hero-bg" src={heroPhoto} alt="Júlia Cereja e Leonardo Rosa" />
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1>CEREJA <em>&</em> ROSA</h1>
          </motion.div>
          <motion.div className="hero-side hero-side-left" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.35 }}>
            <span>UGC</span>
            <span>CREATORS</span>
          </motion.div>
          <motion.div className="hero-side hero-side-right" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.45 }}>
            <span>COMIDAS</span>
            <span>VIAGENS</span>
          </motion.div>
        </section>

        <section className="section metrics chapter-strip page-red" id="metricas">
          <div className="metric-grid">{metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}</div>
        </section>

        <section className="section about chapter-light page-yellow" id="sobre">
          <motion.figure className="polaroid-photo" initial={{ rotate: -8, y: 42, filter: 'saturate(0.7)' }} whileInView={{ rotate: -3.5, y: 0, filter: 'saturate(1)' }} viewport={{ once: true, margin: '-120px' }} transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}>
            <img src={aboutPhoto} alt="Júlia Cereja e Leonardo Rosa" loading="lazy" />
          </motion.figure>
          <div>
            <SectionTitle eyebrow="Sobre nós" title={<><span className="title-line">Prazer, somos</span><span className="title-line">Júlia e Leonardo</span></>} />
            <p>Somos um casal apaixonado por experiências gastronômicas e culturais. O que começou como um hobby, descobrir restaurantes, cozinhar juntos e explorar novos destinos, se transformou em um desejo de inspirar outras pessoas a viverem isso também.</p>
            <p>Compartilhamos nossas receitas, restaurantes e lugares favoritos e será um prazer incluir a sua marca na nossa história!</p>
          </div>
        </section>

        <Gallery />

        <section className="section restaurants food-basket-section chapter-cards page-soil" id="restaurantes"><SectionTitle eyebrow="Comidas favoritas" title="O que a gente mais ama comer" /><div className="food-basket-wrap"><motion.div className="food-basket-stage" initial={{ scale: 0.96, rotate: -1.5 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}><img className="food-basket" src={foodBasketPhoto} alt="Cesta de mercado para comidas favoritas" loading="lazy" />{favoriteFoods.map((food) => <img key={food.label} className={`food-item ${food.className}`} src={food.image} alt={food.label} loading="lazy" />)}</motion.div></div></section>

        <section className="section destinations chapter-blue page-blue" id="viagens"><SectionTitle eyebrow="Destinos favoritos" title="Viajens que mais amamos" /><div className="destination-grid">{destinations.map((item, index) => <DestinationCard key={item.name} item={item} index={index} />)}</div></section>

        <section className="section services page-yellow" id="serviços"><SectionTitle eyebrow="Serviços" title="Conteúdo bonito, útil e pensado para conversão." /><div className="service-grid">{services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}</div></section>

        <section className="section process page-red"><SectionTitle eyebrow="Processo" title="Da primeira conversa aos resultados, tudo claro." /><div className="timeline">{['Contato', 'Planejamento', 'Produção', 'Entrega', 'Resultados'].map((step, index) => <motion.div className="timeline-step" key={step} initial={{ rotateY: -38, opacity: 0 }} whileInView={{ rotateY: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.08 }}><span>{index + 1}</span><strong>{step}</strong>{index < 4 && <ArrowDown size={18} />}</motion.div>)}</div></section>

        <section className="section contact page-blue" id="contato">
          <img src={contactPhoto} alt="Cereja & Rosa em experiência gastronômica" loading="lazy" />
          <div className="contact-panel">
            <SectionTitle eyebrow="Contato" title="Vamos desenhar uma parceria para sua marca?" text="Conte um pouco sobre o restaurante, hotel, destino ou produto. Respondemos com formatos e possibilidades." />
            <form onSubmit={handleContactSubmit}>
              <input aria-label="Nome" name="name" placeholder="Nome" required />
              <input aria-label="Email" name="email" placeholder="Email" type="email" required />
              <textarea aria-label="Mensagem" name="message" placeholder="Mensagem" rows="5" required />
              <button type="submit">Enviar mensagem</button>
            </form>
            <div className="contact-links"><a href="https://instagram.com/cerejaaroosa"><AtSign size={18} /> Instagram</a><a href="https://www.tiktok.com/@cerejaaroosa"><Play size={18} /> TikTok</a><a href="mailto:jucerejaleorosa@gmail.com"><Mail size={18} /> jucerejaleorosa@gmail.com</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
