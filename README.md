2. The use of the keyof keyword in TypeScript with an example:
   keyof এর মানে হলো "এর চাবিগুলো" । keyof দিয়ে আমরা কোনো অবজেক্ট টাইপের সব key কে ধরতে পারি । এটা TypeScript-এ type safety বাড়াতে সাহায্য করে এবং ভুল key ব্যবহারের সম্ভাবনা কমায় ।
    যেমন একটি উদাহরন হলো:
   
    type Book = {
      title: string;
      author: string;
      pages: number;
    }
   
    এখানে যেমন key:value পেয়ার থেকে আমরা সহজেই key বাছাই করতে পারি এবং এই কাজ সহজভাবে করতেই  keyof ব্যবহার করা হয় ।
    type BookErKey = keyof Book;
    'keyof Book' এর key গুলো হবে: "title" | "author" | "pages"
   
    তাই আমরা বলতে পারি এটি দিয়ে আমরা এমন ফাংশন বানাতে পারি, যা একটা অবজেক্ট থেকে নিরাপদে ভ্যালু বের করতে পারে । যেখানে ফাংশনটাকে বলে দেওয়া যায় যে অবজেক্টের key এর নামগুলো শুধু এই লিস্টের মধ্যেই হতে হবে ।

   

4. The difference between any, unknown, and never types in TypeScript:
   এগুলো টাইপস্ক্রিপ্টের বিশেষ টাইপ হিসেবে ধরা হয় ।
   

   any (যেকোনো)
     (ক) এটা টাইপস্ক্রিপ্টের চেকিং বন্ধ করে দেয় ।
     (খ) আমরা একটা any ভেরিয়েবলে যা ইচ্ছা রাখতে পারি এবং সেটা দিয়ে যা ইচ্ছা করতে পারি ।
     (গ) এটা ব্যবহার করলে ভুল হওয়ার সম্ভবনা থাকে ।
   
     উদাহরনঃ
     let value: any;
   
     value = 5;
     value = "Hello";
     value = true;

     তবে any ব্যবহার করলে runtime error হওয়ার সম্ভাবনা বেশি থাকে ।

   unknown (অজানা)
     (ক) এটিকে any এর থেকে একটু নিরাপদ বলা যেতে পারে ।
     (খ) এর মানে হলো টাইপ কি সেটা না জানা ।
     (গ) unknown টাইপের ভেরিয়েবল দিয়ে সরাসরি কোনো অপারেশন করা যায় না; আগে type চেক করতে হবে ।
   
     উদাহরনঃ
     let value: unknown;

     value = 10;
     value = "Hello";

     console.log(value + 5);
     error, unknown টাইপের মান সরাসরি ব্যবহার করা যাবে না

     if (typeof value === "number") {
     console.log(value + 5);  এখন ঠিক আছে, কারণ আমরা টাইপ চেক করেছি
     }

   
  never (কখনোই না)
     (ক) never টাইপ কোনো মান গ্রহণ করে না ।
     (খ) সাধারণত সেই ফাংশনের জন্য ব্যবহৃত হয় যা সবসময় error দেয় ।
     (গ) এটা এমন ফাংশনের জন্য ব্যবহার হয় যা কখনোই কোনো কিছু return করে না ।

     উদাহরনঃ
     function infiniteLoop(): never {
        while (true) {
        console.log("Easy Peasy Lemon Squeezy never ends");
        }
     }
     infiniteLoop যেহেতু কখনো শেষ হবে না, তাই এটিও never। তাই বলতে পারি, never সাধারণ ফাংশনের জন্য নয়, শুধুমাত্র এমন ফাংশনের জন্য যা কখনো কোনো value return করে না ।

    
