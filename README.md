# Website (v2)

sern's clean, modern, and user-friendly web interface. (now built with [Starlight](https://starlight.astro.build/))


To build and develop the **sern-handler-website** locally, follow these steps:

### **Prerequisites**
1. **Install Bun**: Bun is used as the package manager and runtime for this project. Install it from the official website: [https://bun.sh/](https://bun.sh/).
2. **Node Version Manager (Optional)**: The `.nvmrc` file specifies the Node.js version. Use a version manager like `nvm` to ensure compatibility:
   ```bash
   nvm install
   nvm use
   ```
3. **Git**: Make sure you have Git installed to clone the repository.

---

### **Steps to Build and Develop**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sern-handler/website.git
   cd sern-handler-website
   ```

2. **Install Dependencies**:
   Bun uses the `bun.lockb` file to manage dependencies. Run:
   ```bash
   bun install
   ```

3. **Development Server**:
   To start a local development server:
   ```bash
   bun dev
   ```

4. **Build the Project**:
   To generate a production-ready build:
   ```bash
   bun build
   ```

5. **Run Locally**:
   After building, you can preview the built site locally:
   ```bash
   bun preview
   ```

