function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
 
    // SVG for Minus icon
    const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;
 
    // SVG for Plus icon
    const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;
 
    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      icon.innerHTML = plusSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.innerHTML = minusSVG;
    }
  }



const canvases = document.querySelectorAll('.canv');

// 2. Loop through each canvas in the list
canvases.forEach((canv) => {
  // 3. Get the drawing tool (getContext)
var $ = canv.getContext('2d');
document.body.clientWidth;
var wh = 128;
var w2h = wh * wh;
canv.width = canv.height =  wh;
var img = $.createImageData(wh, wh);
var id = img.data;
var t = 0;
var inc = 1 / wh;
var arr = [];

for(var k = 0; k < w2h; ++k)
   arr[k] = Math.random() * 3 - 0.7;

function draw(){
  window.requestAnimationFrame(draw);
   t += inc;
   for(var x = 1; x >= 0; x -= inc) {
      for(var y = 1; y >= 0; y -= inc) {
        var idx = (y * wh + x) * wh * 4;
	         var dx = x;
	         var dy = y;
	         var dist = Math.sqrt(dx * dx + dy * dy);
	         var ax = oct(x, y);
	         var ay = oct(x + 6, y + t / 3);
	         var bx = oct(x + dist * .3 + ax / 22 + 0.7, y + ay / 5 + 2);
	         var by = oct(x + ax / 3 + 4 * t, y + ay / 3 + 5);
	         var n = oct(x + bx / 5, y + by / 2) * 0.7 + .15;
         var d = ax * by / 2;
         var e = ay * bx / 2;
        
         id[idx + 0] = hue(n + d / 10);
         id[idx + 1] = hue(n / 50 + e / 25 + d);
         id[idx + 2] = hue(d + e);
         id[idx + 3] = hue(1 - ease(dist) * (e + d) * 0.5)
      }
   }
   $.putImageData(img, 0, 0);
}
function hue($) {
   return 255 * Math.min(Math.max($, 0), 1);
}
function ease(x) {
   return (x > 10) ? 0 : i(1, 0, x * 0.2);
}
var db = document.body;
function i($, db, t) {
   t = t * t * t * (6 * t * t - 15 * t + 10);
   return $ + (db - $) * t;
}
function n(x, y) {
   var i = Math.abs(x * wh + y) % w2h;
   return arr[i];
}
function oct(x, y) {
   var o1 = p(x * 0.5, y * 1.0);
   var o2 = p(x * 1.0, y * 3.0);
   return o1 + o2 * 1;
}
function p(x, y) {
   var nx = Math.floor(x);
   var ny = Math.floor(y);   
   return i(i(n(nx, ny), n(nx + 1, ny), x - nx), i(n(nx, ny + 1), n(nx + 1, ny + 1), x - nx), y - ny);
}
draw()});



function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}


    function projects() {
      return {
        dark: false,
        scrolled: false,
        mobileMenu: false,
        filter: 'all',

        filterOptions: [
          { value: 'all',       label: 'All (9)' },
          { value: 'saas',      label: 'SaaS' },
          { value: 'landing',   label: 'Landing page' },
          { value: 'agency',    label: 'Agency' },
          { value: 'ecommerce', label: 'E-commerce' },
        ],

        allProjects: [
          { id:1,  title:'Novu — SaaS Dashboard',  category:'saas',      categoryLabel:'SaaS',         tags:['SaaS','Figma','Tailwind'],           year:'2025', desc:'Complete redesign of a B2B notification platform. Reduced cognitive load by 40% and improved trial-to-paid conversion.',    img:'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80',  url:'case-study.html' },
          { id:2,  title:'Finlo — Fintech App',    category:'landing',   categoryLabel:'Landing page', tags:['Landing page','Fintech','Alpine.js'], year:'2024', desc:'Marketing site and onboarding flow for a personal finance app targeting young professionals.',                              img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80', url:'case-study.html' },
          { id:3,  title:'Orea — Creative Agency', category:'agency',    categoryLabel:'Agency',       tags:['Agency','Animation'],                year:'2024', desc:'Bold editorial site for a Paris-based branding studio. Scroll-driven animations and custom cursor.',                      img:'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&q=80', url:'case-study.html' },
          { id:4,  title:'Vesta — Real Estate',    category:'landing',   categoryLabel:'Landing page', tags:['Landing page','Real Estate'],         year:'2024', desc:'Conversion-focused landing page for a proptech startup entering the French market.',                                      img:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80',  url:'case-study.html' },
          { id:5,  title:'Arkio — SaaS Analytics', category:'saas',      categoryLabel:'SaaS',         tags:['SaaS','Dashboard','Figma'],           year:'2024', desc:'Data visualisation dashboard for a B2B analytics platform. Designed for clarity at high data density.',                img:'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=700&q=80', url:'case-study.html' },
          { id:6,  title:'Bloom — E-commerce',     category:'ecommerce', categoryLabel:'E-commerce',   tags:['E-commerce','Shopify'],               year:'2023', desc:'Custom Shopify theme for a sustainable cosmetics brand. Mobile-first with high emphasis on product imagery.',           img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=700&q=80',  url:'case-study.html' },
          { id:7,  title:'Mira — Health App',      category:'landing',   categoryLabel:'Landing page', tags:['Landing page','Health','Tailwind'],   year:'2023', desc:'App landing page for a mental wellness startup. Warm, accessible design with strong social proof.',                    img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80', url:'case-study.html' },
          { id:8,  title:'Noto — Agency Rebrand',  category:'agency',    categoryLabel:'Agency',       tags:['Agency','Rebrand'],                  year:'2023', desc:'Full rebrand and website for a digital communications agency in Lyon.',                                                img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80', url:'case-study.html' },
          { id:9,  title:'Kova — E-commerce',      category:'ecommerce', categoryLabel:'E-commerce',   tags:['E-commerce','Figma'],                year:'2023', desc:'Product page redesign and checkout optimisation for a DTC furniture brand. Reduced cart abandonment by 18%.',         img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80',  url:'case-study.html' },
        ],

        get visibleCount() {
          if (this.filter === 'all') return this.allProjects.length;
          return this.allProjects.filter(p => p.category === this.filter).length;
        },

        init() {
          this.dark = localStorage.getItem('theme') === 'dark'
            || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

          window.addEventListener('scroll', () => {
            this.scrolled = window.scrollY > 20;
          }, { passive: true });

          this.$nextTick(() => initScrollReveal());
        }
      }
    }

document.addEventListener('DOMContentLoaded', () => initScrollReveal());

