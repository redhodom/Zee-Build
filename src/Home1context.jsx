import { createContext, useState } from "react";

// ✅ IMPORT ALL ASSETS
import mb1 from  './assets/mother-boards/mb1.jpeg'
import mb2 from  './assets/mother-boards/mb2.jpg'
import mb3 from  './assets/mother-boards/mb3.jpeg'
import mb4 from  './assets/mother-boards/mb4.jpeg'
import mb5 from  './assets/mother-boards/mb5.jpeg'
import mb6 from  './assets/mother-boards/mb6.jpeg'
import mb7 from  './assets/mother-boards/mb7.jpeg'
import mb8 from  './assets/mother-boards/mb8.jpeg'
import mb9 from  './assets/mother-boards/mb9.jpeg'
import mb10 from './assets/mother-boards/mb10.jpeg'
import mb11 from './assets/mother-boards/mb11.jpeg'
import mb12 from './assets/mother-boards/mb12.jpeg'

import gs1 from  './assets/grapics-cards/br.jpeg'
import gs2 from  './assets/grapics-cards/gddr6.jpeg'
import gs3 from  './assets/grapics-cards/GeForceRTX_5060.jpeg'
import gs4 from  './assets/grapics-cards/gt730.jpeg'
import gs5 from  './assets/grapics-cards/gtx1050.jpeg'
import gs6 from  './assets/grapics-cards/gtx3060.jpeg'
import gs7 from  './assets/grapics-cards/inelarc.jpeg'
import gs8 from  './assets/grapics-cards/intel-spaarkal.jpeg'
import gs9 from  './assets/grapics-cards/raden.jpeg'
import gs10 from './assets/grapics-cards/rtx4070.jpeg'
import gs11 from './assets/grapics-cards/rtx4090.jpeg'
import gs12 from './assets/grapics-cards/rtx5080.jpg'

import pr1 from './assets/processors/pr1.jpg'
import pr2 from './assets/processors/pr2.jpg'
import pr3 from './assets/processors/pr3.jpg'
import pr4 from './assets/processors/pr4.jpg'
import pr5 from './assets/processors/pr5.jpg'
import pr6 from './assets/processors/pr6.jpg'
import pr7 from './assets/processors/pr7.jpg'
import pr8 from './assets/processors/pr8.jpg'
import pr9 from './assets/processors/pr9.jpg'
import pr10 from './assets/processors/pr10.jpg'
import pr11 from './assets/processors/pr11.jpg'
import pr12 from './assets/processors/pr12.jpg'

import sd1 from './assets/ssd/sd1.jpeg'
import sd2 from './assets/ssd/sd2.jpg'
import sd3 from './assets/ssd/sd3.jpg'
import sd4 from './assets/ssd/sd4.jpg'
import sd5 from './assets/ssd/sd5.jpg'
import sd6 from './assets/ssd/sd6.jpg'
import sd7 from './assets/ssd/sd7.jpg'
import sd8 from './assets/ssd/sd8.jpg'
import sd9 from './assets/ssd/sd9.jpg'
import sd10 from './assets/ssd/sd10.jpg'
import sd11 from './assets/ssd/sd11.jpg'
import sd12 from './assets/ssd/sd12.jpg'

import ram1 from './assets/ram/images.jpg'
import ram2 from './assets/ram/ram2.jpg'
import ram3 from './assets/ram/ram3.jpeg'
import ram4 from './assets/ram/ram4.jpg'
import ram5 from './assets/ram/ram5.jpg'
import ram6 from './assets/ram/ram6.jpeg'
import ram7 from './assets/ram/ram7.jpg'
import ram8 from './assets/ram/ram8.jpg'
import ram9 from './assets/ram/ram9.jpg'
import ram10 from './assets/ram/ram10.jpg'
import ram11 from './assets/ram/ram11.jpg'
import ram12 from './assets/ram/ram12.jpeg'

import pw1 from './assets/powersuplly/pw1.jpg'
import pw2 from './assets/powersuplly/pw2.jpg'
import pw3 from './assets/powersuplly/pw3.jpg'
import pw4 from './assets/powersuplly/pw4.jpg'
import pw5 from './assets/powersuplly/pw5.jpg'
import pw6 from './assets/powersuplly/pw6.jpg'
import pw7 from './assets/powersuplly/pw7.jpg'
import pw8 from './assets/powersuplly/pw8.jpg'
import pw9 from './assets/powersuplly/pw9.jpg'
import pw10 from './assets/powersuplly/pw10.jpg'
import pw11 from './assets/powersuplly/pw11.jpg'
import pw12 from './assets/powersuplly/pw12.jpg'

import antec from './assets/cabinet/antec.jpeg'
import arc from './assets/cabinet/arc.jpeg'
import armfit from './assets/cabinet/armfit.jpeg'
import atxx from './assets/cabinet/atxx.jpeg'
import btx from './assets/cabinet/btx.jpeg'
import crystal from './assets/cabinet/crystal.jpg'
import eaatx from './assets/cabinet/eaatx.jpeg'
import furious from './assets/cabinet/furious.jpeg'
import nova330 from './assets/cabinet/nova330.jpeg'
import primuim from './assets/cabinet/primuim.jpeg'
import sahara from './assets/cabinet/sahara.jpeg'
import zebronicsPantom from './assets/cabinet/zebronics-Pantom.jpeg'

import mt1 from './assets/monitors/mt1.jpg'
import mt2 from './assets/monitors/mt2.jpg'
import mt3 from './assets/monitors/mt3.jpg'
import mt4 from './assets/monitors/mt4.jpg'
import mt5 from './assets/monitors/mt5.jpg'
import mt6 from './assets/monitors/mt6.jpg'
import mt7 from './assets/monitors/mt7.jpg'
import mt8 from './assets/monitors/mt8.jpg'
import mt9 from './assets/monitors/mt9.jpg'
import mt10 from './assets/monitors/mt10jpg.jpg'
import mt11 from './assets/monitors/mt11.jpg'
import mt12 from './assets/monitors/mt12.jpg'

import kb1 from './assets/keyboardmouse/kb1.jpg'
import kb2 from './assets/keyboardmouse/kb2.jpg'
import kb3 from './assets/keyboardmouse/kb3.jpg'
import kb4 from './assets/keyboardmouse/kb4.jpg'
import kb5 from './assets/keyboardmouse/kb5.jpg'
import kb6 from './assets/keyboardmouse/kb6.jpg'
import kb7 from './assets/keyboardmouse/kb7.jpg'
import kb8 from './assets/keyboardmouse/kb8.jpg'
import kb9 from './assets/keyboardmouse/kb9.jpg'
import kb10 from './assets/keyboardmouse/kb10.jpg'
import kb11 from './assets/keyboardmouse/kb11.jpg'
import kb12 from './assets/keyboardmouse/kb12.jpg'

// ✅ CREATE CONTEXT
export const Mbcontex = createContext();

const Home1context = ({ children }) => {
  // 🧠 Product data
  const [mbdata] = useState([
    { img: mb1,  name: 'Motherboard', details: 'High-performance motherboard with advanced features', price: '$199.99' },
    { img: mb2,  name: 'Motherboard', details: 'Gaming motherboard with RGB lighting and overclocking support', price: '$249.99' },
    { img: mb3,  name:'MotherBoard', details: 'Compact motherboard for small form factor builds', price: '$149.99' },
    { img: mb4,  name:'MotherBoard', details: 'Budget-friendly motherboard with essential features', price: '$99.99' },
    { img: mb5,  name:'MotherBoard', details: 'Enthusiast-grade motherboard with premium components', price: '$299.99' },
    { img: mb6,  name:'MotherBoard', details: 'Workstation motherboard with multiple PCIe slots', price: '$349.99' },
    { img: mb7,  name:'MotherBoard', details: 'All-in-one motherboard with integrated Wi-Fi and Bluetooth', price: '$179.99' },
    { img: mb8,  name:'MotherBoard', details: 'Durable motherboard with enhanced cooling solutions', price: '$219.99' },
    { img: mb9,  name:'MotherBoard', details: 'Motherboard with extensive connectivity options', price: '$229.99' },
    { img: mb10, name:'MotherBoard',  details: 'High-end motherboard for gaming and content creation', price: '$399.99' },
    { img: mb11, name:'MotherBoard',  details: 'Energy-efficient motherboard with low power consumption', price: '$129.99' },
    { img: mb12, name:'MotherBoard',  details: 'Motherboard with advanced audio and networking features', price: '$259.99' },
  ]);

  const [gsdata] = useState([
    { img: gs1,  name: 'Grapics-Cards', details: 'Powerful graphics card for high-end gaming and content creation', price: '$499.99' },
    { img: gs2,  name: 'Grapics-Cards', details: 'Graphics card with fast GDDR6 memory for smooth performance', price: '$299.99' },
    { img: gs3,  name: 'Grapics-Cards', details: 'Mid-range graphics card for 1080p gaming and multimedia tasks', price: '$199.99' },
    { img: gs4,  name: 'Grapics-Cards', details: 'Entry-level graphics card for basic computing needs', price: '$89.99' },
    { img: gs5,  name: 'Grapics-Cards', details: 'Affordable graphics card for casual gaming and everyday use', price: '$149.99' },
    { img: gs6,  name: 'Grapics-Cards', details: 'High-performance graphics card for 4K gaming and VR experiences', price: '$599.99' },
    { img: gs7,  name: 'Grapics-Cards', details: 'Integrated graphics solution for budget-friendly builds', price: '$79.99' },
    { img: gs8,  name: 'Grapics-Cards', details: 'Graphics card with Intel Sparkal architecture for enhanced performance', price: '$249.99' },
    { img: gs9,  name: 'Grapics-Cards', details: 'AMD Radeon graphics card for immersive gaming experiences', price: '$399.99' },
    { img: gs10, name: 'Grapics-Cards', details: 'NVIDIA RTX 4070 graphics card for ray tracing and AI-powered features', price: '$699.99' },
    { img: gs11, name: 'Grapics-Cards', details: 'Top-of-the-line graphics card for extreme gaming and professional workloads', price: '$1499.99' },
    { img: gs12, name: 'Grapics-Cards', details: 'Next-generation graphics card with cutting-edge technology', price: '$1999.99' },
  ]);

  const [prdata] = useState([
  {img: pr1, name: 'Ryzen 9 7950X', details: 'AMD s flagship 16-core, 32-thread processor, Zen 4 architecture.', price: '$699.99'},
  
  {img: pr2,name: 'Ryzen 7 7800X3D',details: '8-core, 16-thread CPU with 3D V-Cache technology.',price: '$499.99' },
 
    {img: pr3,name: 'Ryzen 5 7600X',details: '6-core, 12-thread CPU offering great performance.',price: '$299.99'},
  
    {img: pr4,name: 'Intel Core i9-14900K',details: '24-core processor (8 Performance + 16 core.',price: '$679.99'},
  
    {img: pr5,name: 'Intel Core i7-14700K',details: '20-core processor (8 Performance + 12 core.',price: '$499.99'},
  
    {
    img: pr6,
    name: 'Intel Core i5-14600K',
    details: '14-core CPU that offers an exceptional balance.',
    price: '$359.99'
  },
  {
    img: pr7,
    name: 'Ryzen 3 5300G',
    details: 'Quad-core APU with integrated Radeon graphics.',
    price: '$179.99'
  },
  {
    img: pr8,
    name: 'Intel Core i7-13700KF Unlocked',
    details: 'Unlocked 16-core processor ideal for overclocking.',
    price: '$449.99'
  },
  {
    img: pr9,
    name: 'Intel Core i5-13500 Ultra',
    details: 'Balanced 14-core CPU offering strong single-core.',
    price: '$329.99'
  },
  {
    img: pr10,
    name: 'Intel Core i9-13900KS Ultra',
    details: 'Special edition 24-core chip with clock speeds up to 6.2GHz.',
    price: '$749.99'
  },
  {
    img: pr11,
    name: 'Intel Core i7-13700 Ultra',
    details: 'High-performance CPU optimized for gaming and creative workloads.',
    price: '$399.99'
  },
  {
    img: pr12,
    name: 'Intel Core i3-13100',
    details: '4-core processor that delivers for entry-level gaming',
    price: '$169.99'
  }
]);

  const [ssdData] = useState([
  {
    img: sd1,
    name: "Samsung 870 EVO 1TB SATA SSD",
    details: "Reliable 2.5'' SATA SSD with sequential read speeds up to 560MB/s and enhanced endurance for daily computing and gaming.",
    price: "$79.99"
  },
  {
    img: sd2,
    name: "Kingston A400 480GB SSD",
    details: "Affordable SATA 3.0 SSD offering up to 500MB/s read speeds for faster boot times and application loading.",
    price: "$49.99"
  },
  {
    img: sd3,
    name: "WD Green 480GB SATA SSD",
    details: "Energy-efficient SSD with low power consumption, ideal for everyday computing and storage upgrades.",
    price: "$44.99"
  },
  {
    img: sd4,
    name: "Intel 545s 512GB SSD",
    details: "Intel 3D NAND-based SATA SSD featuring improved reliability, durability, and consistent read performance.",
    price: "$69.99"
  },
  {
    img: sd5,
    name: "Crucial MX500 1TB SSD",
    details: "Well-balanced SATA SSD offering 560MB/s read speed, integrated power loss protection, and excellent reliability.",
    price: "$74.99"
  },
  {
    img: sd6,
    name: "Crucial BX500 480GB SSD",
    details: "Fast boot and load times with 3D NAND flash technology, delivering solid performance for budget systems.",
    price: "$45.99"
  },
  {
    img: sd7,
    name: "HP S700 1TB SSD",
    details: "Durable and efficient SATA 3 SSD built for speed, reliability, and long-term data protection.",
    price: "$72.99"
  },
  {
    img: sd8,
    name: "ADATA SU800 512GB SSD",
    details: "TLC 3D NAND drive with intelligent SLC caching and LDPC ECC for better stability and performance.",
    price: "$59.99"
  },
  {
    img: sd9,
    name: "Patriot P300 500GB NVMe SSD",
    details: "PCIe Gen 3x4 NVMe SSD offering 2,000MB/s read speeds for gamers and performance users on a budget.",
    price: "$54.99"
  },
  {
    img: sd10,
    name: "WD Blue SN570 500GB NVMe SSD",
    details: "Compact PCIe Gen3 NVMe SSD offering fast sequential read speeds up to 3,500MB/s and low power usage.",
    price: "$59.99"
  },
  {
    img: sd11,
    name: "WD Green 240GB SATA SSD",
    details: "Entry-level SATA SSD ideal for light users, providing faster boot and load times compared to HDDs.",
    price: "$29.99"
  },
  {
    img: sd12,
    name: "Corsair MP600 Pro LPX 1TB NVMe SSD",
    details: "PCIe Gen4 NVMe SSD delivering blazing speeds up to 7,000MB/s, optimized for next-gen gaming and workloads.",
    price: "$119.99"
  }
]);

  const [ramData] = useState([
  { img: ram1, name: "Corsair Vengeance RGB 16GB DDR5", details: "High-speed DDR5 RAM with customizable RGB and superior cooling.", price: "$119.99" },
  { img: ram2, name: "G.Skill Trident Z RGB 32GB DDR5", details: "Dual-channel kit with dynamic lighting and ultra-fast performance.", price: "$189.99" },
  { img: ram3, name: "Kingston Fury Beast 16GB DDR4", details: "Reliable DDR4 gaming RAM for enhanced multitasking and gaming.", price: "$79.99" },
  { img: ram4, name: "ADATA XPG D60G 16GB DDR4", details: "Stylish RGB RAM with a crystalline light design and great stability.", price: "$84.99" },
  { img: ram5, name: "TeamGroup T-Force Delta RGB 32GB", details: "Full-frame RGB lighting, low latency, and excellent heat spreader design.", price: "$169.99" },
  { img: ram6, name: "Crucial Ballistix 16GB DDR4", details: "Performance memory for gaming builds with low-profile design.", price: "$74.99" },
  { img: ram7, name: "Corsair Dominator Platinum 64GB", details: "Top-tier DDR5 kit with precision engineering and dual-tone RGB.", price: "$349.99" },
  { img: ram8, name: "Crucial 8GB DDR4", details: "Standard performance memory suitable for office and study PCs.", price: "$34.99" },
  { img: ram9, name: "Crucial RGB Pro 32GB DDR4", details: "Premium memory for content creators and streamers with vibrant RGB.", price: "$129.99" },
  { img: ram10, name: "Galaxy Gamer RGB 16GB DDR4", details: "Stylish RAM with smooth color transitions and gaming-grade reliability.", price: "$89.99" },
  { img: ram11, name: "XPG Spectrix D41 16GB", details: "RGB DDR4 with high compatibility and stable overclocking.", price: "$99.99" },
  { img: ram12, name: "TeamGroup T-Force Vulcan Z 8GB", details: "Durable, efficient memory ideal for mid-range builds.", price: "$49.99" }
]);

  const [psuData] = useState([
  { img: pw1, name: "Cooler Master 650W Bronze", details: "Reliable 80+ Bronze PSU for gaming PCs.", price: "$69.99" },
  { img: pw2, name: "Corsair CX750F RGB 750W", details: "Fully modular PSU with RGB lighting and quiet fan.", price: "$99.99" },
  { img: pw3, name: "Gigabyte P550B 550W", details: "80+ Bronze power supply ideal for budget builds.", price: "$49.99" },
  { img: pw4, name: "Antec VP500 500W", details: "Sturdy PSU for entry-level gaming rigs.", price: "$44.99" },
  { img: pw5, name: "Thermaltake Smart RGB 600W", details: "Efficient PSU with RGB fan and smart cable management.", price: "$64.99" },
  { img: pw6, name: "EVGA 600 BR 600W", details: "Reliable PSU with low noise and over-voltage protection.", price: "$59.99" },
  { img: pw7, name: "Cooler Master MWE 650 White", details: "80+ White certified power supply for stable performance.", price: "$69.99" },
  { img: pw8, name: "Ant Esports VS500L 500W", details: "Budget-friendly PSU for entry-level gaming PCs.", price: "$39.99" },
  { img: pw9, name: "Zebronics 450W Pro", details: "Basic non-modular PSU with solid performance.", price: "$34.99" },
  { img: pw10, name: "Corsair RM850x 850W Gold", details: "80+ Gold modular PSU with zero-RPM fan mode.", price: "$139.99" },
  { img: pw11, name: "Cooler Master XG Plus 850W", details: "ARGB modular PSU with smart power monitoring display.", price: "$179.99" },
  { img: pw12, name: "Seasonic Focus GX-750 750W", details: "Premium PSU with full modular cables and quiet operation.", price: "$129.99" }
]);

const [caseData] = useState([
  { img: antec, name: "Antec Torque Gaming Case", details: "Open-air aluminum frame mid-tower case with ARGB lighting.", price: "$249.99" },
  { img: arc, name: "Cooler Master MasterBox ARGB", details: "Spacious case with tempered glass and front mesh design.", price: "$139.99" },
  { img: armfit, name: "Lian Li O11 Dynamic XL", details: "Premium case supporting multiple radiators and RGB setups.", price: "$199.99" },
  { img: atxx, name: "Thermaltake Core P3", details: "Wall-mountable open-frame case with modular design.", price: "$179.99" },
  { img: btx, name: "Cougar Blazer Mid-Tower", details: "Stylish open-frame aluminum gaming case with bold orange lines.", price: "$169.99" },
  { img: crystal, name: "Corsair iCUE 4000X RGB", details: "Tempered glass mid-tower case with triple RGB fans.", price: "$149.99" },
  { img: eaatx, name: "Lian Li PC-O11 EVO", details: "E-ATX ready case with modern dual-chamber cooling support.", price: "$159.99" },
  { img: furious, name: "Ant Esports ICE-320TG", details: "Tempered glass case with front RGB strip and mesh intake.", price: "$89.99" },
  { img: nova330, name: "Zebronics Nova 330 RGB", details: "Affordable case with futuristic RGB lighting and side glass.", price: "$79.99" },
  { img: primuim, name: "MSI MAG Forge 100R", details: "Compact case with dual RGB fans and gaming aesthetic.", price: "$109.99" },
  { img: sahara, name: "Sahara P75 ARGB", details: "Mid-tower case with efficient cooling and transparent design.", price: "$129.99" },
  { img: zebronicsPantom, name: "Zebronics Phantom Gaming Case", details: "Unique angular frame with RGB and airflow optimization.", price: "$99.99" }
]);

const [monitorData] = useState([
  { img: mt1, name: "ASUS TUF VG27AQ", details: "27'' QHD 165Hz IPS gaming monitor with G-SYNC compatibility.", price: "$349.99" },
  { img: mt2, name: "Samsung Odyssey G5 32''", details: "Curved gaming monitor with 144Hz refresh rate and HDR10.", price: "$299.99" },
  { img: mt3, name: "LG Ultragear 27GN950", details: "4K Nano IPS display with 1ms response and HDR600 support.", price: "$699.99" },
  { img: mt4, name: "Dell S2721DGF", details: "1440p QHD 165Hz monitor ideal for esports and design.", price: "$379.99" },
  { img: mt5, name: "MSI Optix MAG274", details: "27'' FHD IPS panel with 165Hz refresh rate and adaptive sync.", price: "$269.99" },
  { img: mt6, name: "ASUS TUF VG259Q", details: "24.5'' FHD IPS display with 144Hz and ELMB Sync technology.", price: "$229.99" },
  { img: mt7, name: "ASUS ROG Swift PG259QN", details: "360Hz NVIDIA-certified esports gaming monitor.", price: "$799.99" },
  { img: mt8, name: "ASUS ROG Strix XG27UQ", details: "4K HDR monitor built for PC and console gaming.", price: "$649.99" },
  { img: mt9, name: "ASUS ProArt PA32UC", details: "Professional-grade 4K HDR display with color calibration.", price: "$999.99" },
  { img: mt10, name: "ASUS ROG XG27AQM", details: "270Hz QHD gaming monitor with ELMB Sync and HDR support.", price: "$579.99" },
  { img: mt11, name: "LG UltraFine 27''", details: "Mac-compatible 5K monitor with wide color gamut and USB-C.", price: "$699.99" },
  { img: mt12, name: "ASUS ROG Strix XG279Q", details: "27'' QHD 170Hz display with adaptive sync and vivid colors.", price: "$449.99" }
]);

const [kbData] = useState([
  { img: kb1, name: "Zebronics Transformer Gaming Combo", details: "RGB mechanical keyboard and gaming mouse set with braided cable.", price: "$39.99" },
  { img: kb2, name: "Cosmic Byte CB-GK-05 Neon Combo", details: "Compact RGB keyboard and mouse for beginner gamers.", price: "$34.99" },
  { img: kb3, name: "Redragon K552 Kumara Combo", details: "Mechanical keyboard and precision mouse for enhanced control.", price: "$59.99" },
  { img: kb4, name: "HP K500F Combo", details: "Durable wired keyboard and mouse for daily gaming and work.", price: "$29.99" },
  { img: kb5, name: "Ant Esports KM540 Combo", details: "Stylish RGB combo with fast response keys and ergonomic design.", price: "$44.99" },
  { img: kb6, name: "Zebronics Max Pro Combo", details: "Premium RGB lighting with anti-ghosting keyboard and gaming mouse.", price: "$49.99" },
  { img: kb7, name: "Cosmic Byte Blazar Combo", details: "RGB backlit combo for gaming enthusiasts and streamers.", price: "$45.99" },
  { img: kb8, name: "Logitech G213 Prodigy Combo", details: "High-performance keyboard and mouse set with media controls.", price: "$69.99" },
  { img: kb9, name: "Zebronics White Edition Combo", details: "White RGB keyboard and mouse for aesthetic builds.", price: "$42.99" },
  { img: kb10, name: "Zebronics Galaxy RGB Combo", details: "Vibrant RGB mechanical-feel keyboard with precise mouse.", price: "$38.99" },
  { img: kb11, name: "Ant Esports MK3400 Combo", details: "Hybrid keyboard with macro support and 7-color LED lighting.", price: "$54.99" },
  { img: kb12, name: "Razer Cynosa Lite Combo", details: "Sleek gaming keyboard and optical mouse for all-round performance.", price: "$79.99" }
]);

  

  // 🛒 CART SYSTEM
  const [cart, setCart] = useState([]);

const addToCart = (product, e) => {
  setCart((prev) => {
    const existingIndex = prev.findIndex((item) => item.name === product.name);

    if (existingIndex !== -1) {
      // Item already exists, increase quantity
      const updatedCart = [...prev];
      updatedCart[existingIndex].quantity += 1;
      return updatedCart;
    } else {
      // Add new item with initial quantity = 1
      return [...prev, { ...product, quantity: 1 }];
    }
  });

  if (e) {
    e.target.innerText = "Added";
    e.target.disabled = true;
  }
};


  const removeFromCart = (index) => setCart((prev) => prev.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace(/[^0-9.]/g, "")), 0);

  return (
      <Mbcontex.Provider
  value={{
    mbdata,
    gsdata,
    prdata,
    ssdData,
    ramData,
    psuData,
    caseData,
    monitorData,
    kbData,
    cart,
    setCart,   // ✅ Add this line
    addToCart,
    removeFromCart,
    clearCart,
    total,
  }}
>

      {children}
    </Mbcontex.Provider>
  );
};

export default Home1context;
