# Localization Setup Guide

## 📋 Overview

This project uses `next-intl` for internationalization (i18n) support. The setup includes:

- **English (en)** - Default language
- **Myanmar (my)** - Myanmar language support

## 📁 File Structure

```
├── i18n.ts                 # i18n configuration
├── middleware.ts           # Route middleware for locale detection
├── messages/
│   ├── en.json            # English translations
│   └── my.json            # Myanmar translations
├── app/
│   └── [locale]/
│       ├── layout.tsx     # Root layout with locale support
│       └── page.tsx       # Home page with translations
└── components/
    └── common/
        ├── LanguageSwitcher.tsx  # Language switcher component
        └── Header.tsx            # Header with i18n
```

## 🔧 Configuration

### i18n.ts
Configures which locales are supported and loads the corresponding translation files.

### middleware.ts
Handles URL routing for different locales. Automatically redirects to the default locale if not specified.

### messages/
Contains JSON files with translations for each supported language.

## 🎯 Usage

### In Server Components
```typescript
import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations('home')
  
  return <h1>{t('title')}</h1>
}
```

### In Client Components
```typescript
'use client'

import { useTranslations } from 'next-intl'

export function MyComponent() {
  const t = useTranslations('nav')
  
  return <nav>{t('shop')}</nav>
}
```

### Language Switcher
The `LanguageSwitcher` component in `components/common/LanguageSwitcher.tsx` provides a UI to toggle between languages.

## 🌐 URL Structure

- `/en/` - English version
- `/my/` - Myanmar version
- `/` - Redirects to default locale (English)

## 📝 Adding New Translations

1. Add the key to both `messages/en.json` and `messages/my.json`
2. Use in components with `t('key')`
3. Organize translations by namespace (home, nav, products, etc.)

## ✨ Features

- ✅ URL-based locale detection
- ✅ Automatic locale switching
- ✅ Persistent locale selection
- ✅ Type-safe translations
- ✅ Responsive language switcher
- ✅ Dark mode support

## 🚀 Deployment Notes

- Static generation works with all locales
- Each locale gets its own set of pages
- Language switcher preserves current page path
- Middleware handles locale detection automatically
