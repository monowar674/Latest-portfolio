

const mockPosts = [
    {
        slug: 'new-ai-trends',
        title: 'কৃত্রিম বুদ্ধিমত্তার নতুন দিগন্ত: জেনারেটিভ এআই',
        date: '2024-10-14',
        image: 'https://placehold.co/1200x600/1e293b/a5b4fc?text=AI+Trends', // চিত্রের জন্য প্লেসহোল্ডার
    },
    {
        slug: 'web-performance-tips',
        title: 'ওয়েব পারফরম্যান্স উন্নত করার সহজ টিপস',
        date: '2024-09-20',
        image: 'https://placehold.co/1200x600/1e293b/a5b4fc?text=Web+Performance',
    },
    {
        slug: 'dark-mode-in-nextjs',
        title: 'Next.js এ ডার্ক মোড প্রয়োগ',
        date: '2024-08-01',
        image: 'https://placehold.co/1200x600/1e293b/a5b4fc?text=Dark+Mode',
    },
    {
        slug: 'why-tailwind-is-best',
        title: 'Tailwind CSS কেন আধুনিক ওয়েব ডিজাইনের জন্য সেরা?',
        date: '2024-07-15',
        image: 'https://placehold.co/1200x600/1e293b/a5b4fc?text=Tailwind+CSS',
    },
    {
        slug: 'new-portfolio-design',
        title: 'আমার নতুন পোর্টফোলিও ডিজাইন: মিনিমালিজম ও পারফরম্যান্স',
        date: '2024-06-10',
        image: 'https://placehold.co/1200x600/1e293b/a5b4fc?text=Portfolio+Design',
    },
    {
        slug: 'new-portfolio-design-2',
        title: 'পোর্টফোলিও ডিজাইন পার্ট ২: উন্নত ইউজার এক্সপেরিয়েন্স',
        date: '2024-06-15',
        image: 'https://placehold.co/1200x600/1e293b/a5b4fc?text=Portfolio+Design+2',
    },
];


const getAllPosts = () => mockPosts;
const getPostBySlug = (slug) => {
    return getAllPosts().find(post => post.slug === slug);
};

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

const getPostContent = (slug) => {
    switch (slug) {
        case 'new-ai-trends':
            return `
        <p class="lead"><strong>কৃত্রিম বুদ্ধিমত্তার নতুন দিগন্ত: জেনারেটিভ এআই এবং মাল্টিমোডাল মডেলের যুগান্তকারী প্রভাব</strong></p>
        <p>বর্তমানে এআই (AI) প্রযুক্তিতে যে বিপ্লব ঘটছে, তার কেন্দ্রে রয়েছে বৃহৎ ভাষা মডেল (LLM) এবং মাল্টিমোডাল এআই। ২০২৩ সালের পর থেকে, এই প্রযুক্তিগুলি আমাদের ডিজিটাল ইন্টারঅ্যাকশন এবং কাজের পদ্ধতিকে সম্পূর্ণ নতুন মাত্রায় নিয়ে গেছে। জেনারেটিভ এআই মডেলগুলি, যেমন GPT-ভিত্তিক সিস্টেম, কেবল তথ্য বিশ্লেষণ নয়, বরং মানুষের মতো করে অত্যন্ত প্রাসঙ্গিক, সৃজনশীল এবং ধারাবাহিক টেক্সট তৈরি করতে সক্ষম।</p>

        <h2 class="mt-8 mb-4 text-2xl font-semibold">বৃহৎ ভাষা মডেল (LLM) কীভাবে কাজ করে?</h2>
        <p>LLM গুলি মূলত ট্রিলিয়ন সংখ্যক ডেটা পয়েন্টের উপর প্রশিক্ষণপ্রাপ্ত এক প্রকার নিউরাল নেটওয়ার্ক। এদের প্রধান কাজ হলো একটি টেক্সটের পরবর্তী শব্দটি কী হবে তা ভবিষ্যদ্বাণী করা। এই সাধারণ প্রক্রিয়াটিই যখন বিপুল সংখ্যক ডেটা এবং প্যারামিটার ব্যবহার করে সম্পন্ন করা হয়, তখন তা শিল্প, সাহিত্য, কোডিং এবং ডেটা বিশ্লেষণের মতো জটিল কাজগুলি সম্পন্ন করতে পারে। তবে, ডেভেলপারদের অবশ্যই মনে রাখতে হবে যে এই মডেলগুলি কখনো কখনো 'হ্যালুসিনেশন' (ভুল বা মিথ্যা তথ্য) তৈরি করতে পারে, তাই ফ্যক্ট-চেকিং অপরিহার্য।</p>

        <h2 class="mt-8 mb-4 text-2xl font-semibold">মাল্টিমোডাল এআই: টেক্সট পেরিয়ে</h2>
        <p>মাল্টিমোডাল এআই হলো এআই-এর পরবর্তী বড় ধাপ। এটি কেবল টেক্সট নয়, বরং ইমেজ, ভিডিও এবং অডিও ডেটা একসাথে বুঝতে এবং বিশ্লেষণ করতে পারে। উদাহরণস্বরূপ, একটি মাল্টিমোডাল মডেল একটি ছবি দেখে তার বর্ণনা লিখতে পারে বা একটি গান শুনে তার লিরিক্স তৈরি করতে পারে। এই প্রযুক্তি চিকিৎসা, নিরাপত্তা এবং কনটেন্ট জেনারেশন শিল্পে যুগান্তকারী পরিবর্তন আনছে। ভিশন ট্রান্সফরমার (ViT) এর মতো আধুনিক আর্কিটেকচারগুলি এই ক্ষেত্রে বিশেষভাবে গুরুত্বপূর্ণ ভূমিকা পালন করে।</p>
        
        <h2 class="mt-8 mb-4 text-2xl font-semibold">এজ এআই এবং দক্ষতার গুরুত্ব</h2>
        <p>AI মডেলগুলির আকার বাড়ার সাথে সাথে সেগুলিকে সার্ভার ছাড়াই ছোট ডিভাইসে (যেমন স্মার্টফোন বা IoT ডিভাইস) চালানোর গুরুত্ব বাড়ছে, যা **এজ এআই (Edge AI)** নামে পরিচিত। এজ এআই ব্যবহারকারীর ডেটা দ্রুত প্রসেস করে, ল্যাটেন্সি কমায় এবং গোপনীয়তা রক্ষা করে। এর জন্য ডেভেলপারদেরকে মডেলগুলোকে অপটিমাইজ করতে হয়, যাতে কম শক্তি ব্যবহার করেও তারা দ্রুত সিদ্ধান্ত নিতে পারে। এটি ব্যাটারি লাইফ এবং রিয়েল-টাইম অ্যাপ্লিকেশনের জন্য অত্যন্ত গুরুত্বপূর্ণ।</p>
        <p>কম্পিউটার ভিশন, স্পিচ রিকগনিশন, এবং ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিংয়ের মতো গুরুত্বপূর্ণ কাজগুলি এখন এজ ডিভাইসগুলিতে সহজেই করা সম্ভব হচ্ছে। এই অপটিমাইজেশন সাধারণত মডেল প্রুনিং, কোয়ান্টিজেশন এবং নলেজ ডিস্টিলেশনের মাধ্যমে করা হয়।</p>


        <h2 class="mt-8 mb-4 text-2xl font-semibold">নৈতিক এআই এবং পক্ষপাতিত্ব (Bias) মোকাবিলা</h2>
        <p>এআই-এর ব্যাপক ব্যবহারের সাথে সাথে এর নৈতিক দিক এবং পক্ষপাতিত্ব (Bias) সংক্রান্ত বিষয়গুলি আলোচনায় আসছে। যে ডেটার উপর ভিত্তি করে মডেলগুলি প্রশিক্ষণ পায়, তাতে যদি কোনো পক্ষপাতিত্ব থাকে, তবে মডেলের আউটপুটেও তা প্রতিফলিত হতে পারে। একটি নিরপেক্ষ এবং ন্যায্য এআই সিস্টেম নিশ্চিত করার জন্য ডেটা সেটের মান নিয়ন্ত্রণ, মডেলের স্বচ্ছতা বৃদ্ধি এবং নিয়মিত অডিট করা অত্যন্ত জরুরি। ডেভেলপার এবং নীতি নির্ধারক উভয়ের জন্যই এটি একটি প্রধান চ্যালেঞ্জ। এর মধ্যে রয়েছে: ডেটা সোর্সের স্বচ্ছতা, অ্যালগরিদমের জবাবদিহিতা এবং মডেলের সিদ্ধান্ত নেওয়ার প্রক্রিয়া মানুষের কাছে বোধগম্য করে তোলা।</p>

        <p class="mt-8 italic text-sm text-gray-500">এই বিস্তারিত আলোচনাটি শুধুমাত্র একটি মক-আপ কন্টেন্ট হিসেবে তৈরি করা হয়েছে, যা Next.js এ ডাইনামিক কন্টেন্ট রেন্ডারিংয়ের উদাহরণ দেখানোর জন্য ব্যবহৃত হয়েছে। একটি সম্পূর্ণ ১০০০ শব্দের পোস্টের কন্টেন্ট সাধারণত Markdown ফাইল থেকে লোড করা হয়, সরাসরি কম্পোনেন্টের মধ্যে এইভাবে লেখা হয় না।</p>
        `;

        case 'web-performance-tips':
            return `
        <p><strong>ওয়েব পারফরম্যান্স:</strong> আপনার সাইটকে দ্রুত করার জন্য কার্যকরী কৌশলগুলি এখানে আলোচনা করা হয়েছে। লোডিং স্পিড উন্নত হলে ব্যবহারকারীর অভিজ্ঞতা এবং SEO উভয়ই ভালো হয়।</p>
        <h2>গুরুত্বপূর্ণ কৌশল</h2>
        <ul>
            <li><strong>ইমেজ অপটিমাইজেশন:</strong> সাধারণ <code>&lt;img&gt;</code> ট্যাগ ব্যবহার করুন।</li>
            <li><strong>কোড স্প্লিটিং:</strong> শুধুমাত্র প্রয়োজনীয় জাভাস্ক্রিপ্ট লোড করুন।</li>
            <li><strong>ব্রাউজার ক্যাশিং:</strong> সঠিক ক্যাশিং হেডার ব্যবহার করুন।</li>
        </ul>
        <p>এই ধাপগুলো অনুসরণ করে আপনি আপনার ওয়েবসাইটের পারফরম্যান্স উল্লেখযোগ্যভাবে বাড়াতে পারেন।</p>
        `;

        case 'dark-mode-in-nextjs':
            return `
        <p><strong>ডার্ক মোড প্রয়োগ:</strong> Tailwind CSS ব্যবহার করে দ্রুত কিভাবে ডার্ক মোড যুক্ত করা যায়, তার বিস্তারিত কন্টেন্ট এখানে দেওয়া হলো। আধুনিক ডিজাইনের জন্য ডার্ক মোড এখন অপরিহার্য।</p>
        <h2>প্রয়োগের ধাপ</h2>
        <p>প্রথমে <code>tailwind.config.ts</code> এ <code>darkMode: 'class'</code> সেট করুন, তারপর একটি স্টেট ম্যানেজমেন্ট টুলের মাধ্যমে <code>html</code> ট্যাগে <code>dark</code> ক্লাস যুক্ত করে দিন। এতে ব্যবহারকারী তার পছন্দসই থিম বেছে নিতে পারবেন।</p>
        `;

        case 'why-tailwind-is-best':
            return `
        <p><strong>Tailwind CSS কেন সেরা?</strong> Tailwind CSS একটি ইউটিলিটি-ফার্স্ট CSS ফ্রেমওয়ার্ক যা আপনাকে সরাসরি আপনার HTML এ কাস্টম ডিজাইন তৈরি করতে সাহায্য করে।</p>
        <h2>সুবিধাসমূহ</h2>
        <ul>
            <li><strong>দ্রুত উন্নয়ন:</strong> কাস্টম CSS লিখতে হয় না।</li>
            <li><strong>স্বচ্ছতা:</strong> প্রতিটি ক্লাস কী করে তা সহজেই বোঝা যায়।</li>
            <li><strong>স্কেলেবিলিটি:</strong> বড় প্রজেক্টের জন্য CSS ফাইলগুলো ছোট রাখে।</li>
        </ul>
        `;

        case 'new-portfolio-design':
        case 'new-portfolio-design-2':
            return `
        <p>আমার নতুন পোর্টফোলিও ডিজাইনটি React এবং Tailwind CSS-এর উপর ভিত্তি করে তৈরি। এটি মিনিমালিস্ট ডিজাইন এবং সর্বোচ্চ পারফরম্যান্সের দিকে মনোযোগ দিয়েছে।</p>
        <h2>ডিজাইনের মূলনীতি</h2>
        <ol>
            <li>মিনিমালিজম এবং পরিষ্কার টাইপোগ্রাফি।</li>
            <li>মোবাইল-প্রথম এবং দ্রুত লোডিং।</li>
            <li>ডাইনামিক থিমিং (ডার্ক মোড) এর জন্য সাপোর্ট।</li>
        </ol>
        `;

        default:
            return null;
    }
};

export default function PostDetailPage({ params }) {
    const slug = params?.slug || 'new-ai-trends'; 

    const post = getPostBySlug(slug);

    if (!post) {
        return (
            <div className="min-h-screen pt-20 text-gray-100 bg-gray-900 flex justify-center items-center p-4">
                <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center ring-1 ring-red-500/30 max-w-sm w-full">
                    <h1 className="text-3xl font-bold text-red-400">পোস্ট পাওয়া যায়নি (404)</h1>
                    <p className="mt-4 text-gray-400">দুঃখিত, এই স্ল্যাগের (<code className="text-yellow-300">{slug}</code>) জন্য কোনো পোস্ট খুঁজে পাওয়া যায়নি।</p>
                    
                    <a href="/blog" className="mt-6 inline-block text-indigo-400 hover:text-indigo-300 font-medium transition underline">
                        ← সকল পোস্টে ফিরে যান
                    </a>
                </div>
            </div>
        );
    }
    const postContentHTML = getPostContent(slug);

    if (!postContentHTML) {
        return (
            <div className="min-h-screen pt-20 text-gray-100 bg-gray-900 flex justify-center items-center p-4">
                <div className="bg-gray-800 p-8 rounded-xl shadow-2xl text-center ring-1 ring-yellow-500/30 max-w-sm w-full">
                    <h1 className="text-3xl font-bold text-yellow-400">কন্টেন্ট অনুপস্থিত</h1>
                    <p className="mt-4 text-gray-400">এই পোস্টের জন্য কোনো লেখা তৈরি করা হয়নি।</p>
                    <a href="/blog" className="mt-6 inline-block text-indigo-400 hover:text-indigo-300 font-medium transition underline">
                        ← সকল পোস্টে ফিরে যান
                    </a>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen pt-20 text-gray-100 bg-gray-900">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                <div className="mb-8">
                    <a href="/blog" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center transition">
                        ← সকল পোস্টে ফিরে যান
                    </a>
                </div>

                <article className="bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl ring-1 ring-indigo-500/30">

                    {post.image && (
                        <div className="relative w-full h-80 mb-8 rounded-xl overflow-hidden ring-1 ring-gray-700">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover" 
                            />
                        </div>
                    )}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
                        {post.title}
                    </h1>
                    
                    <p className="text-gray-500 text-sm mb-8 border-b border-gray-700 pb-4">
                        {new Date(post.date).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="prose prose-lg prose-invert max-w-none text-gray-300">
                        <div dangerouslySetInnerHTML={{ __html: postContentHTML }} />
                    </div>

                </article>
            </main>
        </div>
    );
}
