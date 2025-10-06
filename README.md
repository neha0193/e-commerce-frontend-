# 🛍️ E-Commerce Website (React + Tailwind)

This is a sample **e-commerce site** built using React and Tailwind CSS.  
The project includes routing, global context, reusable components, and product sections.  

---

## ✅ What We Did
- Planned the site structure → sketched layout & decided required pages.  
- Installed dependencies: **Tailwind CSS**, **React Icons**, **React Toastify**, and **React Router**.  
- Organized `assets` data from the source.  
- Created a `pages` folder with different file nameed on different tabs in site with setup of boilerplate `rafce` components.  
- Set up **BrowserRouter** in `main.jsx` and defined all routes in `App.jsx`.  
- Built a **responsive Navbar component** inside `components/` and included it in `App.jsx`.  
- Created the **Hero Section** → added heading text, hero image, and Google Fonts.  
- Created a **context file** for accessing `assets.jsx` data and added global values (e.g., currency, delivery fee).  
- Built the **Latest Products Section**:  
  - Used `useContext` to pull in product data.  
  - Added a reusable **Title** component.  
  - Built a **ProductItem** component and mapped over product data.  
- Built the **Best Seller Products Section** → displayed products where `isBestSeller === true`.  
- build policies and newsletter box displayed a email input for newsletter 
- build footer section 

---

## 🚀 Deployment Setup  

### 1. Install `gh-pages`
```bash
npm i gh-pages --save-dev
```

### 2. Create a New Repository
```bash
git init
git add .
git status
git commit -m "first commit"
git branch -M main
git remote add origin <repo_url>
git push -u origin main
```
### 2. Update your code 
```bash
** save all files 
git add --all
git commit -m "message about update ?"
git push -u origin main 
// -u origin main above not really required 
```
### 3. Push an Existing Repository
```bash
git remote add origin <repo_url>
git branch -M main
git push -u origin main

```
