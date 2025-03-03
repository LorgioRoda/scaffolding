#!/usr/bin/env node
import { program } from "commander";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to copy files and directories recursively
function copyRecursiveSync(src, dest) {
  if (fs.statSync(src).isDirectory()) {

    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((file) => {
      const srcFile = path.join(src, file);
      const destFile = path.join(dest, file);
      copyRecursiveSync(srcFile, destFile);
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

program
  .version("1.0.0")
  .description("CLI to create projects with a predefined scaffold")
  .argument("<name>", "Project name")
  .action((name) => {
    const destination = path.join(process.cwd(), name);
    const template = path.join(__dirname, "templates", "default");

    if (fs.existsSync(destination)) {
      console.error("❌ Error: The folder already exists.");
      process.exit(1);
    }

    if (!fs.existsSync(template)) {
      console.error("❌ Error: Template folder does not exist.");
      process.exit(1);
    }

    fs.mkdirSync(destination, { recursive: true });

    fs.readdirSync(template).forEach((file) => {
      const srcPath = path.join(template, file);
      const destPath = path.join(destination, file);

      copyRecursiveSync(srcPath, destPath);
    });

    console.log(`✅ Project "${name}" created in ${destination}`);

    console.log("📦 Installing dependencies...");
    execSync(`cd ${destination} && npm install`, { stdio: "inherit" });

    console.log("🚀 Project is ready to use!");
  });

program.parse(process.argv);
