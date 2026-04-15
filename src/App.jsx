import React, { useState, useEffect } from 'react';
import StatItem from './components/StatItem';
import MenuCard from './components/MenuCard';
import GalleryItem from './components/GalleryItem';
import ReviewCard from './components/ReviewCard';
import ContactInfoItem from './components/ContactInfoItem';
import Chatbot from './components/Chatbot';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReservation = (e) => {
    e.preventDefault();
    alert('Thank you! Your table has been reserved. We will confirm via email shortly. ☕');
    e.target.reset();
  };

  const menuItems = [
    {
      img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80',
      tag: 'Coffee',
      name: 'Signature Espresso',
      desc: 'Double shot, Araku estate beans, deep chocolate notes with a velvety finish.',
      price: '₹180',
      cat: 'coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80',
      tag: 'Coffee',
      name: 'Cold Brew Float',
      desc: '18-hour cold brew topped with house vanilla ice cream. A summer classic.',
      price: '₹280',
      cat: 'coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&q=80',
      tag: 'Food',
      name: 'Brioche French Toast',
      desc: 'Thick-cut brioche, cinnamon custard, maple syrup, fresh berries.',
      price: '₹320',
      cat: 'food',
    },
    {
      img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80',
      tag: 'Dessert',
      name: 'Classic Tiramisu',
      desc: 'Espresso-soaked savoiardi, mascarpone cream, dusted with Valrhona cocoa.',
      price: '₹290',
      cat: 'dessert',
    },
    {
      img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80',
      tag: 'Coffee',
      name: 'Dalgona Latte',
      desc: 'Whipped coffee cloud over chilled oat milk. Instagram-worthy and delicious.',
      price: '₹240',
      cat: 'coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500&q=80',
      tag: 'Food',
      name: 'Smashed Avocado Toast',
      desc: 'Sourdough, smashed avo, cherry tomatoes, feta, chilli flakes, poached egg.',
      price: '₹350',
      cat: 'food',
    },
  ];

  const filteredMenuItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.cat === activeCategory);

  const reviews = [
    {
      text: "Honestly the best cold brew I've had in Hyderabad. The vibe is incredible — came for an hour, stayed for three. This is my new second home.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      name: "Priya Sharma",
      role: "UX Designer"
    },
    {
      text: "The Brioche French Toast is absolutely divine. Paired with their single origin pour-over — it's the kind of breakfast that makes you slow down and actually enjoy life.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      name: "Rohan Mehta",
      role: "Startup Founder"
    },
    {
      text: "I've been to cafes across the country and Noir & Roast has something special. The team genuinely cares about every single cup. You feel it from the first sip.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      name: "Ananya Rao",
      role: "Food Blogger"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Guests" },
    { number: "12", label: "Coffee Origins" },
    { number: "4.9★", label: "Avg Rating" }
  ];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=80", alt: "Cafe interior", extraClasses: "lg:col-span-2 md:col-span-2 sm:col-span-1" },
    { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80", alt: "Coffee art" },
    { src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=500&q=80", alt: "Cozy corner" },
    { src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80", alt: "Friends at cafe" },
    { src: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=500&q=80", alt: "Pastry display" }
  ];

  const contactInfos = [
    { icon: "📍", title: "Address", details: "12, Cafe Lane, Jubilee Hills, Hyderabad — 500033" },
    { icon: "🕐", title: "Hours", details: "Mon–Fri: 7:30 AM – 10 PM · Sat–Sun: 8 AM – 11 PM" },
    { icon: "📞", title: "Phone", details: "+91 98765 43210" },
    { icon: "✉️", title: "Email", details: "hello@noirandroast.in" }
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="font-['DM_Sans',sans-serif] bg-[#FDF6EC] text-[#1a0f0a] overflow-x-hidden">

      {/* NAV */}
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-[5%] lg:px-[8%] py-[1rem] sm:py-[1.2rem] flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-[#2C1810]/95 shadow-[0_2px_20px_rgba(0,0,0,0.3)]' : 'bg-transparent'
          }`}
      >
        <a href="#" className="font-['Cormorant_Garamond',serif] text-[1.4rem] sm:text-[1.6rem] font-semibold text-white tracking-[0.05em] no-underline">
          Noir <span className="text-[#C9944A]">&</span> Roast
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex lg:gap-[2.5rem] md:gap-[1.5rem] list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-white/85 no-underline text-[0.85rem] lg:text-[0.88rem] font-normal tracking-[0.06em] uppercase hover:text-[#C9944A] transition-colors duration-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="hidden md:block bg-[#C9944A] text-white border-none py-[0.55rem] lg:py-[0.65rem] px-[1.2rem] lg:px-[1.5rem] font-['DM_Sans',sans-serif] text-[0.8rem] lg:text-[0.85rem] font-medium tracking-[0.08em] uppercase cursor-pointer hover:bg-[#E8B96A] transition-colors duration-300"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Reserve a Table
        </button>

        {/* Mobile Hamburger block md:hidden */}
        <div className="flex md:hidden flex-col gap-[5px] cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="w-[24px] h-[1.5px] bg-white transition-all duration-300"></span>
          <span className="w-[24px] h-[1.5px] bg-white transition-all duration-300"></span>
          <span className="w-[24px] h-[1.5px] bg-white transition-all duration-300"></span>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <ul className="absolute top-[65px] sm:top-[70px] left-0 right-0 bg-[#2C1810]/95 px-[5%] py-6 flex flex-col gap-5 md:hidden list-none m-0 shadow-lg border-t border-white/10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white/85 no-underline text-[0.9rem] uppercase tracking-wider block">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                className="w-full mt-2 bg-[#C9944A] text-white border-none py-3 px-6 font-['DM_Sans',sans-serif] text-[0.85rem] font-medium tracking-[0.08em] uppercase cursor-pointer hover:bg-[#E8B96A] transition-colors duration-300"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Reserve a Table
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="h-screen relative flex items-center justify-center text-center overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80')] bg-center bg-cover bg-no-repeat scale-105 transition-transform duration-[8s] ease-in-out group-hover:scale-100"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#140a05]/55 to-[#140a05]/70"></div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-[5%] lg:px-[10%] py-0 pt-[4rem]">
          <p className="text-[0.7rem] sm:text-[0.8rem] lg:text-[0.85rem] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#C9944A] mb-[1rem] sm:mb-[1.5rem]">Est. 2018 · Hyderabad, India</p>
          <h1 className="font-['Cormorant_Garamond',serif] text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-light text-white leading-[1.1] mb-[1.2rem] sm:mb-[1.5rem]">
            Where Every Sip<br className="hidden sm:block" />
            <em className="italic text-[#E8B96A]"> Tells a Story</em>
          </h1>
          <p className="text-white/75 text-[0.9rem] sm:text-[1rem] lg:text-[1.1rem] font-light leading-[1.8] mb-[2rem] sm:mb-[2.5rem] max-w-[90%] sm:max-w-[500px] lg:max-w-[600px] mx-auto">
            Handcrafted coffee, artisan food, and a space that feels like home. Come as you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-[1rem] justify-center items-center">
            <a href="#menu" className="w-full sm:w-auto bg-[#C9944A] text-white py-[0.9rem] px-[2rem] lg:px-[2.5rem] text-[0.8rem] lg:text-[0.85rem] font-medium tracking-[0.1em] uppercase border-none cursor-pointer no-underline transition-all duration-300 hover:bg-[#E8B96A] hover:-translate-y-1">Explore Our Menu</a>
            <a href="#contact" className="w-full sm:w-auto bg-transparent text-white py-[0.9rem] px-[2rem] lg:px-[2.5rem] text-[0.8rem] lg:text-[0.85rem] font-medium tracking-[0.1em] uppercase border border-white/50 cursor-pointer no-underline transition-all duration-300 hover:border-white hover:bg-white/10">Reserve a Table</a>
          </div>
        </div>

        <div className="absolute bottom-[1.5rem] sm:bottom-[2rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[0.5rem] text-white/50 text-[0.65rem] sm:text-[0.75rem] tracking-[0.1em] uppercase">
          <span>Scroll</span>
          <div className="w-[1px] h-[30px] sm:h-[40px] bg-gradient-to-b from-white/50 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-[4rem] sm:py-[5rem] md:py-[7rem] lg:py-[9rem] px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] md:gap-[5rem] lg:gap-[6rem] items-center max-w-[1200px] mx-auto">
          <div className="relative w-[90%] sm:w-full mx-auto">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" alt="Inside Noir & Roast Cafe" className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover" />
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-[#2C1810] text-white w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[130px] lg:h-[130px] flex flex-col items-center justify-center text-center">
              <span className="font-['Cormorant_Garamond',serif] text-[1.8rem] sm:text-[2rem] lg:text-[2.5rem] font-light text-[#C9944A] leading-[1]">6+</span>
              <span className="text-[0.55rem] sm:text-[0.6rem] lg:text-[0.7rem] tracking-[0.1em] uppercase text-white/70 mt-[0.2rem] sm:mt-[0.3rem]">Years of Craft</span>
            </div>
          </div>
          <div className="text-center lg:text-left mt-4 lg:mt-0">
            <p className="text-[0.7rem] lg:text-[0.75rem] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#C9944A] mb-[0.8rem] sm:mb-[1rem]">Our Story</p>
            <h2 className="font-['Cormorant_Garamond',serif] text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] font-light text-[#2C1810] leading-[1.2] mb-[1.2rem] sm:mb-[1.5rem]">
              Born from a <em className="italic">Passion</em><br className="hidden sm:block" />for the Perfect Cup
            </h2>
            <div className="w-[40px] sm:w-[60px] h-[1px] bg-[#C9944A] my-[1.2rem] sm:my-[1.5rem] mx-auto lg:mx-0"></div>
            <p className="text-[#7a5c4a] leading-[1.8] sm:leading-[1.9] mb-[1rem] sm:mb-[1.2rem] text-[0.9rem] sm:text-[0.97rem]">
              Noir & Roast started as a small corner dream in 2018 — a place where the city's hustle quiets down and every cup is made with intention. We source our beans directly from estates in Coorg and Araku, roasted in small batches to bring out their truest character.
            </p>
            <p className="text-[#7a5c4a] leading-[1.8] sm:leading-[1.9] mb-[1.5rem] lg:mb-[1.2rem] text-[0.9rem] sm:text-[0.97rem]">
              Whether you're here for your morning ritual, a working afternoon, or a slow evening with friends — this is your space. Our team of trained baristas treat every order like a craft.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-[0.8rem] sm:gap-[1rem] md:gap-[1.5rem] mt-[2rem] lg:mt-[2.5rem]">
              {stats.map((stat, i) => (
                <StatItem key={i} number={stat.number} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-[#FDF6EC] py-[4rem] sm:py-[5rem] md:py-[7rem] lg:py-[9rem] px-[5%]">
        <div className="text-center mb-[2.5rem] sm:mb-[3.5rem]">
          <p className="text-[0.7rem] lg:text-[0.75rem] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#C9944A] mb-[0.8rem] sm:mb-[1rem]">Crafted With Care</p>
          <h2 className="font-['Cormorant_Garamond',serif] text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] font-light text-[#2C1810] leading-[1.2] mb-[1.2rem] sm:mb-[1.5rem]">
            Our <em className="italic">Specialties</em>
          </h2>
          <div className="w-[40px] sm:w-[60px] h-[1px] bg-[#C9944A] my-[1.2rem] sm:my-[1.5rem] mx-auto"></div>
        </div>

        <div className="flex gap-[0.5rem] justify-center flex-wrap mb-[2.5rem] sm:mb-[3rem]">
          {['all', 'coffee', 'food', 'dessert'].map((cat) => (
            <button
              key={cat}
              className={`py-[0.45rem] sm:py-[0.5rem] px-[1.2rem] sm:px-[1.5rem] border font-['DM_Sans',sans-serif] text-[0.75rem] sm:text-[0.8rem] tracking-[0.08em] uppercase cursor-pointer transition-all duration-300 ${activeCategory === cat
                  ? 'bg-[#2C1810] text-white border-[#2C1810]'
                  : 'bg-transparent text-[#7a5c4a] border-[#4A2C1A]/25 hover:bg-[#2C1810] hover:text-white hover:border-[#2C1810]'
                }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.2rem] sm:gap-[1.5rem] lg:gap-[2rem] max-w-[1200px] mx-auto">
          {filteredMenuItems.map((item, i) => (
            <MenuCard key={i} item={item} />
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-[#2C1810] py-[4rem] sm:py-[5rem] lg:py-[7rem] px-[5%]">
        <div className="text-center mb-[2.5rem] sm:mb-[3rem]">
          <p className="text-[0.7rem] lg:text-[0.75rem] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#C9944A] mb-[0.8rem] sm:mb-[1rem]">Our Vibe</p>
          <h2 className="font-['Cormorant_Garamond',serif] text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] font-light text-white leading-[1.2] mb-[1.2rem] sm:mb-[1.5rem]">
            A Glimpse <em className="italic">Inside</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-rows-[250px_250px] lg:grid-rows-[300px_300px] gap-[0.8rem] sm:gap-[1rem] max-w-[1200px] mx-auto">
          {galleryImages.map((img, i) => (
            <GalleryItem key={i} src={img.src} alt={img.alt} extraClasses={img.extraClasses} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-white py-[4rem] sm:py-[5rem] md:py-[7rem] lg:py-[9rem] px-[5%]">
        <div className="text-center mb-[2.5rem] sm:mb-[3.5rem]">
          <p className="text-[0.7rem] lg:text-[0.75rem] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#C9944A] mb-[0.8rem] sm:mb-[1rem]">Guest Reviews</p>
          <h2 className="font-['Cormorant_Garamond',serif] text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] font-light text-[#2C1810] leading-[1.2] mb-[1.2rem] sm:mb-[1.5rem]">
            What Our <em className="italic">Guests</em> Say
          </h2>
          <div className="w-[40px] sm:w-[60px] h-[1px] bg-[#C9944A] my-[1.2rem] sm:my-[1.5rem] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] lg:gap-[2rem] max-w-[1100px] mx-auto">
          {reviews.map((review, i) => (
            <ReviewCard key={i} text={review.text} avatar={review.avatar} name={review.name} role={review.role} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#FDF6EC] py-[4rem] sm:py-[5rem] md:py-[7rem] lg:py-[9rem] px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] lg:gap-[5rem] max-w-[1100px] mx-auto items-start">
          <div className="text-center lg:text-left">
            <p className="text-[0.7rem] lg:text-[0.75rem] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#C9944A] mb-[0.8rem] sm:mb-[1rem]">Find Us</p>
            <h2 className="font-['Cormorant_Garamond',serif] text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] font-light text-[#2C1810] leading-[1.2] mb-[1.2rem] sm:mb-[1.5rem]">
              Come <em className="italic">Visit</em> Us
            </h2>
            <div className="w-[40px] sm:w-[60px] h-[1px] bg-[#C9944A] my-[1.2rem] sm:my-[1.5rem] mx-auto lg:mx-0"></div>
            <p className="text-[#7a5c4a] leading-[1.8] sm:leading-[1.9] mb-[2rem] text-[0.9rem] sm:text-[0.97rem]">
              We'd love to have you. Walk in anytime or book a table for a special occasion. We're open every day — morning chai to evening wind-down.
            </p>
            <div className="flex flex-col gap-[1.5rem] text-left">
              {contactInfos.map((info, i) => (
                <ContactInfoItem key={i} icon={info.icon} title={info.title} details={info.details} />
              ))}
            </div>
          </div>

          <div className="bg-white p-[2rem] sm:p-[2.5rem] rounded-md shadow-sm border border-[#4A2C1A]/10">
            <p className="text-[0.7rem] lg:text-[0.75rem] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#C9944A] mb-[0.8rem] sm:mb-[1rem]">Reservations</p>
            <h2 className="font-['Cormorant_Garamond',serif] text-[1.8rem] sm:text-[2rem] font-light text-[#2C1810] leading-[1.2] mb-[1.2rem] sm:mb-[1.5rem]">
              Book a <em className="italic">Table</em>
            </h2>
            <div className="w-[40px] sm:w-[60px] h-[1px] bg-[#C9944A] my-[1.2rem] sm:my-[1.5rem]"></div>
            <form className="flex flex-col gap-[1rem] sm:gap-[1.2rem]" onSubmit={handleReservation}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] sm:gap-[1.2rem]">
                <input type="text" placeholder="Your Name" required className="w-full p-[0.75rem_1rem] sm:p-[0.85rem_1rem] border border-[#4A2C1A]/20 bg-transparent font-['DM_Sans',sans-serif] text-[0.85rem] sm:text-[0.88rem] text-[#1a0f0a] outline-none transition-colors duration-300 focus:border-[#C9944A] placeholder:text-[#7a5c4a]" />
                <input type="email" placeholder="Email Address" required className="w-full p-[0.75rem_1rem] sm:p-[0.85rem_1rem] border border-[#4A2C1A]/20 bg-transparent font-['DM_Sans',sans-serif] text-[0.85rem] sm:text-[0.88rem] text-[#1a0f0a] outline-none transition-colors duration-300 focus:border-[#C9944A] placeholder:text-[#7a5c4a]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] sm:gap-[1.2rem]">
                <input type="date" required className="w-full p-[0.75rem_1rem] sm:p-[0.85rem_1rem] border border-[#4A2C1A]/20 bg-transparent font-['DM_Sans',sans-serif] text-[0.85rem] sm:text-[0.88rem] text-[#1a0f0a] outline-none transition-colors duration-300 focus:border-[#C9944A]" />
                <select defaultValue="" className="w-full p-[0.75rem_1rem] sm:p-[0.85rem_1rem] border border-[#4A2C1A]/20 bg-transparent font-['DM_Sans',sans-serif] text-[0.85rem] sm:text-[0.88rem] text-[#1a0f0a] outline-none transition-colors duration-300 focus:border-[#C9944A] appearance-none">
                  <option value="" disabled>No. of Guests</option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3–4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>
              <textarea placeholder="Any special requests or occasion? Let us know..." className="w-full p-[0.75rem_1rem] sm:p-[0.85rem_1rem] border border-[#4A2C1A]/20 bg-transparent font-['DM_Sans',sans-serif] text-[0.85rem] sm:text-[0.88rem] text-[#1a0f0a] outline-none transition-colors duration-300 focus:border-[#C9944A] placeholder:text-[#7a5c4a] resize-y min-h-[100px] sm:min-h-[110px]"></textarea>
              <button type="submit" className="w-full text-center bg-[#C9944A] text-white py-[0.85rem] sm:py-[0.9rem] px-[2.5rem] text-[0.8rem] sm:text-[0.85rem] font-medium tracking-[0.1em] uppercase border-none cursor-pointer transition-all duration-300 hover:bg-[#E8B96A] hover:-translate-y-1">Confirm Reservation</button>
            </form>
          </div>
        </div>
      </section>

      <Chatbot />

      {/* FOOTER */}
      <footer className="bg-[#2C1810] text-[#D8CFC4] pt-[3rem] sm:pt-[4rem] px-[5%] pb-[1.5rem] sm:pb-[2rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-[2.5rem] sm:gap-[3rem] max-w-[1200px] mx-auto pb-[2.5rem] border-b border-white/10">
          <div className="text-center sm:text-left">
            <div className="font-['Cormorant_Garamond',serif] text-[1.6rem] font-semibold text-white mb-[1rem]">Noir <span className="text-[#C9944A]">&</span> Roast</div>
            <p className="text-[0.85rem] leading-[1.8] mb-[1.5rem] max-w-[300px] mx-auto sm:mx-0">A cafe born from love of craft coffee and warm community. Every cup, every plate, every corner — made with intention.</p>
            <div className="flex gap-[0.75rem] justify-center sm:justify-start">
              {['in', 'fb', 'ig', 'tw'].map(social => (
                <a key={social} href="#" className="w-[36px] h-[36px] border border-white/20 flex items-center justify-center text-white/50 text-[0.8rem] no-underline transition-all duration-300 hover:border-[#C9944A] hover:text-[#C9944A]">{social}</a>
              ))}
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-[0.75rem] tracking-[0.15em] uppercase text-white mb-[1.2rem]">Quick Links</h4>
            <ul className="list-none flex flex-col gap-[0.6rem] p-0 m-0">
              {navLinks.map(link => (
                <li key={link.label}><a href={link.href} className="text-white/60 no-underline text-[0.85rem] transition-colors duration-300 hover:text-[#C9944A]">{link.label === "Reviews" ? "Reviews" : link.label === "Menu" ? "Our Menu" : link.label === "About" ? "About Us" : link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-[0.75rem] tracking-[0.15em] uppercase text-white mb-[1.2rem]">Opening Hours</h4>
            <ul className="list-none flex flex-col gap-[0.6rem] p-0 m-0">
              <li><span className="text-white/60 text-[0.85rem]">Mon – Fri: 7:30 AM – 10 PM</span></li>
              <li><span className="text-white/60 text-[0.85rem]">Saturday: 8 AM – 11 PM</span></li>
              <li><span className="text-white/60 text-[0.85rem]">Sunday: 8 AM – 11 PM</span></li>
              <li><span className="text-white/60 text-[0.85rem]">Public Holidays: 9 AM – 9 PM</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-[1.5rem] text-center text-[0.75rem] text-white/30">
          © 2024 Noir & Roast. All rights reserved. Crafted with ♥ in Hyderabad.
        </div>
      </footer>
    </div>
  );
}
