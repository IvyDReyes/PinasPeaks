# 🌄 PinasPeaks – Test Automation Project

This project focuses on **end-to-end testing and quality assurance** of the PinasPeaks web application, a platform that showcases mountaineering experiences and hiking trails.

It highlights my skills as a **Senior QA Engineer transitioning into Automation**, using modern testing tools and frameworks.

---

## 🎯 Project Goal

- Validate core user flows of the application  
- Ensure UI and functionality work as expected  
- Demonstrate automation testing using Playwright  
- Apply best practices in test structure and execution  

---

## 🛠️ Tech Stack

### 🖥️ Application
- Next.js  
- Supabase  
- HTML5  
- CSS  
- JavaScript  

### 🧪 Testing
- Playwright  
- (Optional: Page Object Model structure)

---

## 📂 Project Structure

```
PinasPeaks/
│── tests/              # Playwright test scripts
│── pages/              # Page Object Models (if implemented)
│── utils/              # Helper functions
│── playwright.config.js
│── package.json
│── README.md
```

---

## ⚙️ Prerequisites

Make sure you have installed:

- Node.js (v16 or higher)  
- npm or yarn  
- Git  

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/IvyDReyes/PinasPeaks.git
```

Navigate to the project folder:

```
cd PinasPeaks
```

Install dependencies:

```
npm install
```

---

## ▶️ How to Run Tests

### Run all tests

```
npx playwright test
```

### Run tests in headed mode (browser visible)

```
npx playwright test --headed
```

### Open Playwright UI mode

```
npx playwright test --ui
```

### Run a specific test file

```
npx playwright test tests/example.spec.js
```

---

## 📊 Test Reports

View Playwright HTML report:

```
npx playwright show-report
```

---

## 🧪 Test Coverage

This project includes automated tests for:

- User navigation  
- Page loading and UI validation  
- Functional flows (e.g. viewing mountaineer profiles)  
- Basic assertions for content and elements  

Sample test target:  
👉 https://pinaspeaks.com/mountaineer/@Ivey  

---

## 🚀 Future Improvements

- Add BDD using Cucumber  
- Integrate CI/CD using GitHub Actions  
- Expand test coverage (edge cases, API testing)  
- Add visual testing  

---

## 👩‍💻 Author

**Ivy Delos Reyes**  
Senior QA Engineer | Aspiring Automation Test Engineer  

---

## 📌 Notes

This project is part of my **automation testing portfolio**, demonstrating hands-on experience with Playwright and modern web applications.
