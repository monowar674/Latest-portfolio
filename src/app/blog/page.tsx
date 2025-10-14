import Link from 'next/link';
// Path adjusted for src/app/blog/page.js location
import { getAllPosts } from '../../lib/posts'; 

// পোস্ট কার্ড কম্পোনেন্ট (ডার্ক মোড স্টাইল)
// TypeScript টাইপিং অপসারণ করা হয়েছে
const PostCard = ({ post }) => {
  return (
    // Card Background: bg-gray-800, Hover effect: hover:ring-2 ring-indigo-500
    // জটিল 'hover:bg-[url()]' ক্লাসটি অপসারণ করে সহজ হোভার ইফেক্ট যোগ করা হয়েছে
    <article className={`p-6 rounded-xl shadow-xl bg-gray-800 hover:ring-2 hover:bg-gray-700 ring-indigo-500 transition duration-300`}>
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-bold text-white hover:text-indigo-400 transition duration-150 mb-2">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-400 text-sm mb-3">
        {/* তারিখের ফরম্যাট বাংলায় রাখা হয়েছে */}
        {new Date(post.date).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      <p className="text-gray-300 leading-relaxed mb-4">
        {post.excerpt}
      </p>
      <Link href={`/blog/${post.slug}`} className="text-indigo-400 font-semibold hover:text-indigo-300 transition duration-150 flex items-center">
        বিস্তারিত পড়ুন <span className="ml-1">→</span>
      </Link>
    </article>
  );
};

export default function BlogHomePage() {
  // সার্ভার কম্পোনেন্টে getAllPosts() ব্যবহার করা হয়েছে
  const posts = getAllPosts();

  return (
    // Main Background: Dark Gray
    <div className="min-h-screen bg-gray-900 pt-20 text-gray-100">

      {/* ব্লগ পোস্ট সেকশন */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* ব্লগের মূল শিরোনাম (বড় এবং কেন্দ্রAligned) */}
        <h1 className="text-4xl font-extrabold text-white text-center mb-4">
          Monowar's Blog 💡
        </h1>
        <p className="text-xl text-gray-400 text-center mb-12">
          কোডিং, ডিজাইন এবং প্রযুক্তির উপর আমার সর্বশেষ লেখা।
        </p>
        
        {/* গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      {/* ফুটার - ন্যূনতম ডার্ক স্টাইল */}
      <footer className="w-full py-8 border-t border-gray-700 mt-12">
        <p className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} Monowar. All rights reserved.</p>
      </footer>
      
    </div>
  ); 
}
