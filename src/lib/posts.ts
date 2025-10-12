// lib/posts.ts

// ১. image1 ইম্পোর্ট করুন। পাথ আপনার প্রজেক্টের রুট সাপেক্ষে ঠিক করে নিন।
import image1 from '../Photos/bg.jpg';
// Next.js Image-এর জন্য 'Url' ইম্পোর্টের প্রয়োজন নেই।

// image1 এখন একটি JavaScript Object, তাই এর টাইপ হবে any বা StaticImageData
// যদিও আমরা এটিকে একটি ভেরিয়েবলে রাখব।

export type Post = {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    // ইমেজ পাথ/ইউআরএল অথবা ইমেজ অবজেক্ট স্টোর করার জন্য টাইপ 'any' বা 'string' ব্যবহার করুন
    image: any;
};

export const posts: Post[] = [
    {
        id: 1,
        title: "Next.js এ ডার্ক মোড প্রয়োগ",
        slug: "dark-mode-in-nextjs",
        excerpt: "Tailwind CSS ব্যবহার করে দ্রুত কিভাবে ডার্ক মোড যুক্ত করা যায়, তার একটি গাইড।",
        date: "2025-10-12",
        image: ''
    },
    { id: 2, title: "Tailwind CSS: কেন এটি সেরা?", slug: "why-tailwind-is-best", excerpt: "ইউটিলিটি-ফার্স্ট CSS ফ্রেমওয়ার্ক হিসেবে Tailwind এর কিছু মূল সুবিধা আলোচনা করা হলো।", date: "2025-10-10", image: null }, // ইমেজ না থাকলে null রাখুন
    { id: 3, title: "আমার নতুন পোর্টফোলিও ডিজাইন", slug: "new-portfolio-design", excerpt: "পোর্টফোলিওটি ডিজাইন করার পেছনে কোন চিন্তাগুলো কাজ করেছে, তা দেখুন।", date: "2025-10-08", image: null },
    { id: 4, title: "আমার নতুন পোর্টফোলিও ডিজাইন 2", slug: "new-portfolio-design-2", excerpt: "পোর্টফোলিওটি ডিজাইন করার পেছনে কোন চিন্তাগুলো কাজ করেছে, তা দেখুন।", date: "2025-10-12", image: null },
    { 
    id: 6, // আইডি যেন ইউনিক হয়
    title: "কৃত্রিম বুদ্ধিমত্তার নতুন দিগন্ত", 
    slug: "new-ai-trends", // এটিই URL এ ব্যবহৃত হবে
    excerpt: "জেনারেটিভ AI এবং মাল্টিমোডাল এআই-এর সর্বশেষ অগ্রগতি নিয়ে আলোচনা।", 
    date: "2025-10-18", // সবচেয়ে নতুন তারিখ দিন
    image: null 
},
];

export const getAllPosts = (): Post[] => {
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};