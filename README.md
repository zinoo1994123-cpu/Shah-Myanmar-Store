# 🇲🇲 SHAH Myanmar Store

Premium Myanmar Food & Grocery E-commerce Website for Malaysia

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Supabase account and project
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shah-myanmar-store.git
   cd shah-myanmar-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Then fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
shah-myanmar-store/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # Root layout with i18n
│   │   ├── page.tsx                # Homepage
│   │   ├── products/
│   │   │   └── page.tsx            # Products listing page
│   │   ├── cart/
│   │   │   └── page.tsx            # Shopping cart
│   │   └── checkout/
│   │       └── page.tsx            # Checkout page
│   └── api/
│       └── [routes]/               # API endpoints
├── components/
│   ├── Navbar.tsx                  # Navigation bar
│   ├── Footer.tsx                  # Footer
│   ├── HeroSection.tsx             # Hero banner
│   ├── LocaleSwitcher.tsx          # Language switcher
│   ├── CartIcon.tsx                # Shopping cart icon
│   └── product/
│       └── ProductCard.tsx         # Product card component
├── lib/
│   ├── supabase.ts                 # Supabase client
│   ├── supabase-queries.ts         # Database queries
│   ├── cart-context.tsx            # Cart state management
│   └── constants.ts                # App constants
├── types/
│   └── index.ts                    # TypeScript types
├── styles/
│   └── globals.css                 # Global styles
└── public/                         # Static assets
```

## 🛠 Technologies Used

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: Supabase (PostgreSQL)
- **State Management**: React Context API, Zustand
- **Authentication**: Supabase Auth
- **Forms**: React Hook Form, Zod
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Payment**: Stripe (optional)

## 🗄️ Supabase Setup

### 1. Create Tables

```sql
-- Products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  original_price DECIMAL(10, 2),
  image TEXT NOT NULL,
  images TEXT[],
  category TEXT NOT NULL,
  brand TEXT,
  rating FLOAT DEFAULT 0,
  reviews INT DEFAULT 0,
  stock INT NOT NULL DEFAULT 0,
  sku TEXT UNIQUE,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  image TEXT,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending',
  shipping_address TEXT NOT NULL,
  payment_method TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Order items table
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id),
  product_id UUID NOT NULL REFERENCES products(id),
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 2. Enable Row Level Security (RLS)

```sql
-- Enable RLS on products (public read)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON products
  FOR SELECT USING (true);

-- Enable RLS on orders (user-specific)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);
```

## 📍 Features

✅ **Multi-language Support** (English, Myanmar)
✅ **Product Catalog** with filtering and search
✅ **Shopping Cart** with state management
✅ **Responsive Design** (mobile, tablet, desktop)
✅ **Dark Mode** support
✅ **Real-time Updates** via Supabase subscriptions
✅ **Type-safe** with TypeScript
✅ **Performance Optimized** with Next.js 15

## 🔐 Security

- Environment variables for sensitive data
- Row Level Security (RLS) on Supabase
- Secure authentication with Supabase Auth
- Input validation with Zod
- CSRF protection

## 📱 Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change primary and accent colors.

### Translations
Add translations in `messages/en.json` and `messages/my.json`

### Products
Add products via Supabase dashboard or API

## 📦 Building for Production

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

```bash
# Vercel CLI
npm i -g vercel
vercel
```

## 📞 Support

For issues or questions:
- Email: contact@shahstore.com
- Phone: +60 12-3456-7890

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Myanmar heritage and authentic cuisine
- Supabase for backend services
- Vercel for hosting
- Tailwind CSS for styling

---

**Built with ❤️ for the Myanmar community in Malaysia**
