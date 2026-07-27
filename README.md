# 🛍️ Next Commerce Architecture

Modern Frontend geliştirme prensiplerini, ölçeklenebilir mimariyi ve yazılım tasarım desenlerini uygulamak amacıyla geliştirilmiş Next.js tabanlı bir e-ticaret uygulamasıdır.

Bu proje yalnızca bir e-ticaret uygulaması değil; aynı zamanda gerçek projelerde kullanılan mimari yaklaşımları uygulamak için hazırlanmıştır.

---

# 🚀 Kullanılan Teknolojiler

- Next.js
- React.js
- JavaScript
- Tailwind CSS
- Zustand
- Axios
- Lucide React

---

# 📂 Proje Mimarisi

Projede **Feature-Based Architecture** yaklaşımı benimsenmiştir.

```
src

├── app
│
├── features
│   ├── products
│   ├── cart
│   ├── profile
│   └── settings
│
└── shared
    ├── api
    ├── components
    ├── layouts
    ├── hooks
    └── utils
```

---

# 🎨 Design System

Projede **Atomic Design** yaklaşımı kullanılmıştır.

```
shared/components

atoms
molecules
organisms
```

Bu sayede bileşenler tekrar kullanılabilir, sürdürülebilir ve ölçeklenebilir hale getirilmiştir.

---

# 🏗️ Uygulanan Design Pattern'ler

Bu projede modern Frontend geliştirmede sık kullanılan birçok tasarım deseni uygulanmıştır.

- ✅ Feature-Based Architecture
- ✅ Atomic Design
- ✅ Component Driven Development
- ✅ Composition Pattern
- ✅ Custom Hook Pattern
- ✅ Repository Pattern
- ✅ Provider Pattern
- ✅ Adapter Pattern
- ✅ Strategy Pattern
- ✅ Observer Pattern
- ✅ Singleton Pattern
- ✅ Factory Pattern
- ✅ Dependency Injection

---

# ✨ Özellikler

- Ürün Listeleme
- Ürün Arama
- Kategori Filtreleme
- Ürün Sıralama
- Grid / List Görünümü
- Sepet Yönetimi (Şuanlık Localstorage)
- Error UI

---

# 📁 Products Feature Yapısı

```
features/products

api
providers
repositories
adapters
containers
hooks
components
pages
strategies
```

---

# 🧠 Bu Projede Neleri ele aldım?

- Ölçeklenebilir Frontend mimarisi oluşturmayı
- Design Pattern kullanımını
- Feature-Based Architecture yaklaşımını
- Atomic Design prensiplerini
- Component odaklı geliştirmeyi
- Business Logic ile UI katmanını ayırmayı
- Repository ve Adapter Pattern kullanımını
- Zustand ile state yönetimini
- Tekrar kullanılabilir Design System oluşturmayı
- Temiz ve sürdürülebilir kod yazmak.

---

# ⚙️ Kurulum

Projeyi klonlayın.

```bash
git clone https://github.com/zeynepbass/commercely-patterns.git
```

Bağımlılıkları yükleyin.

```bash
npm install
```

Projeyi çalıştırın.

```bash
npm run dev
```

Tarayıcıdan aşağıdaki adresi açın.

```
http://localhost:3000
```

---

# 🎯 Gelecekte Eklenmesi Planlanan Özellikler

- Authentication
- Wishlist
- Checkout
- Payment Entegrasyonu
- TanStack Query
- Unit Test
- Integration Test
- CI/CD
- Docker
- i18n (Çoklu Dil Desteği)

---

# 📄 Lisans

Bu proje **MIT License** ile lisanslanmıştır.