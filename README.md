# 🐾 Pet Rasoi — Fresh, Ready-to-Serve Pet Meals

Welcome to **Pet Rasoi**! 🥣

We make healthy, wholesome pet food simple. Instead of spending time prepping, cooking, or defrosting frozen blocks, Pet Rasoi meals are **ready to serve in 10 seconds**—just tear the pouch, pour it into the bowl, and watch your pet enjoy real, gently cooked food.

---

## ✨ What Makes This Project Special

- **Instant & Effortless**: Real food without the kitchen mess. Open, pour, done.
- **Warm & Elegant Design**: Soft cream backgrounds, calming sage green accents, and clear typography. Looks and feels like a boutique pet kitchen.
- **Fast Modern Tech**: Built with **Next.js 14** on the front, and uses **WooCommerce** on the backend for checkout, orders, and inventory.
- **Easy Photo Swapping**: Drop your product photos into `public/img/` and hook them up in one simple file (`src/lib/images.ts`). If a photo isn't ready yet, a clean placeholder shows up automatically.

---

## 🚀 Running the Project Locally

Getting started takes just two commands:

```bash
# 1. Install packages
npm install

# 2. Start the dev site
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your shop live!

### Other Handy Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts your local website for development |
| `npm run build` | Builds an optimized production version |
| `npm run test` | Runs quick tests to make sure prices & filters work |
| `npm run typecheck` | Checks that TypeScript types match up |
| `npm run lint` | Cleans up code formatting |

---

## 📂 Project Walkthrough (Short & Clean)

```text
├── public/img/          👉 Put your logos, banners, and product photos here
├── src/
│   ├── app/             👉 Next.js pages, layouts, and styles
│   ├── components/      👉 Reusable UI pieces (Header, Hero, ProductCards)
│   ├── data/demo/       👉 Sample recipes and nutrition info
│   ├── lib/images.ts    👉 One central place to map and change images
│   └── types/           👉 Clean TypeScript definitions for products and cart
└── docs/                👉 All project planning, design, and WooCommerce guides
```

---

## 📸 Adding Your Own Images

1. Save your photos in `public/img/` (like `chicken_bowl.jpg` or `mutton_feast.jpg`).
2. Open [`src/lib/images.ts`](file:///c:/Users/SkyFish/OneDrive/project/pro-ecom/src/lib/images.ts).
3. Add the image file name to the product list.
4. That's it! The site updates right away. If an image is missing, the site shows a neat placeholder without breaking anything.

---

## 📖 Need the Deep Details?

All the architectural notes, WooCommerce setup steps, and testing plans live in the [**docs/ folder**](file:///c:/Users/SkyFish/OneDrive/project/pro-ecom/docs/README.md).