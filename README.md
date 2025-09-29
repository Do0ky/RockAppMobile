# ⛰️ Rock App Mobile

An interactive React Native educational app that helps users explore and identify common rock types— optimized for mobile devices. 
Designed for amateur geologists, hikers, students, and curious minds, RockApp Mobile makes geology accessible, engaging, and tactile.

---

## 🌍 Project Vision

**RockApp Mobile** empowers users to explore and identify rocks through a visually immersive, touch-friendly interface. Built with accessibility and scientific clarity in mind, it blends intuitive navigation, interactive filtering, and personalized collection tools to foster curiosity about geology and natural history—anytime, anywhere.

---

## 🚀 Features

- 🔍 **Search & Filter**  
  Browse rocks by name, type (igneous, sedimentary, metamorphic), texture, color, and origin using a mobile-optimized interface.
- 🪨 **Rock Gallery**  
  Explore a scrollable collection of rock cards with detailed info and fun facts. Tap any card to view deeper insights.
- 📘 **Rock Detail Modal**  
  View high-resolution images, geological context, and identification tips in a dedicated screen—designed for clarity and offline usability.
- ➕ **Collection Manager**  
  Save, tag, and annotate rocks in your personal collection. Perfect for field notes, study references, or hiking logs.
- 🧠 **Quiz Mode**  
  Test your knowledge with a “Rock Quiz” game. Great for learners and enthusiasts alike, now with touch-based interactions.
- 🧭 **Mobile Navigation**  
  Smooth routing between Home, Gallery, Collection, Quiz, and Settings—using Expo Router and React Navigation.
- 💾 **Offline Support** *(coming soon)*  
  Persist your collection across sessions for offline use and long-term tracking.

---

## 🧪 Technologies Used

- **React Native** (via Expo)
- **JavaScript/Typescript**
- **Expo Router** 
- **React Navigation** 
- **StyleSheet API** 
- **JSON** (rock and quiz data source)
- **AsyncStorage** (planned for local persistence)

---

## 📁 Project Structure
```bash
RockAppMobile/
├── assets/
│   └── images/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx
│   │   ├── gallery.tsx
│   │   └── quiz.tsx
│   └── modal.tsx
├── components/
│   ├── RockCard.tsx
│   ├── FilterPanel.tsx
│   ├── SearchBar.tsx
│   ├── RockDetail.tsx
│   └── CollectionManager.tsx
├── data/
│   ├── rocks.json
│   └── quiz.json
├── shared/
│   └── hooks, utils, types
└── README.md
```
---

## 📚 Data Sources

- [USGS Rock Identification Basics](https://www.usgs.gov/special-topic/education/rock-identification)
- [Geology.com Rock Gallery](https://geology.com/rocks/)
- [Mindat.org](https://www.mindat.org/)
- [Minerals Education Coalition](https://mineralseducationcoalition.org/minerals-database/)
- [Rock Scanner](https://www.rockscanner.com/rocks)

---

## 🛠️ Installation & Setup
```bash
git clone https://github.com/Do0ky/RockAppMobile.git
cd RockAppMobile
npm install
npx expo start
```
---

## 💡 Potential Future Enhancements
- 📚 Learn Page (glossary terms and visual guides)
- 📊 API integration for dynamic data
- 📸 Image upload for rock identification
- 🗺️ Map integration to show rock locations
- 🧭 AR or camera-based recognition
- 🧑‍🤝‍🧑 Community submissions and sharing

---

## 👨‍💻 Authors
Co-created by:
- **Claire Peyre**  
- **Aaron Escobar**  