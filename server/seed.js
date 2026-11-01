import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Post from './models/Post.js';

dotenv.config();

const posts = [
  {
    title: '7 Health Benefits of Beetroot Powder',
    slug: '7-health-benefits-of-beetroot-powder',
    category: 'Superfood',
    emoji: '🥬',
    excerpt: 'Beetroot powder ek concentrated superfood hai jo aapki daily diet ko aasani se behtar bana sakta hai.',
    content:
      'Beetroot powder fresh beetroot ko sukha kar aur pees kar banaya jata hai. Isme iron, folate, potassium aur natural nitrates hote hain.\n\nRoz ek chamach powder paani, smoothie ya dahi me milakar le sakte hain. Ye stamina badhane, digestion behtar karne aur skin ko healthy rakhne me madad karta hai.\n\nHamesha 100% natural, bina kisi additive wala powder chuniye.',
  },
  {
    title: 'Organic vs Regular: Fark Kya Hai?',
    slug: 'organic-vs-regular-fark-kya-hai',
    category: 'Lifestyle',
    emoji: '🌱',
    excerpt: 'Organic khaana kaise ugaya jata hai aur ye aapki sehat aur dharti dono ke liye kyun achha hai.',
    content:
      'Organic kheti me synthetic pesticides aur chemical fertilizers ka istemal nahi hota. Isse mitti ki sehat bani rehti hai aur paani pradushit nahi hota.\n\nOrganic products me aam taur par kam chemical residue hota hai aur ye eco-friendly practices ko support karte hain.',
  },
  {
    title: 'Beetroot Powder Ko Diet Me Kaise Shamil Karein',
    slug: 'beetroot-powder-diet-me-kaise-shamil-karein',
    category: 'Recipes',
    emoji: '🥣',
    excerpt: 'Smoothie, paratha, raita aur ladoo - roz ke khaane me beetroot powder use karne ke aasaan tarike.',
    content:
      '1. Smoothie: Ek glass smoothie me 1 tsp powder milaiye.\n2. Paratha: Aate me 1 tbsp powder milakar gulabi paratha banaiye.\n3. Raita: Dahi me thoda powder aur bhuna jeera.\n4. Ladoo: Dry fruits ke ladoo me natural colour aur poshan ke liye.',
  },
];

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Post.deleteMany();
    await Post.insertMany(posts);
    console.log(`Seeded ${posts.length} posts`);
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

run();
