# Create-project-cli-scaffold
A CLI tool to scaffold new projects quickly.


## 🚀 Features
Automatically generates a project structure based on a predefined template.
Simple and easy-to-use command.
Supports custom templates.
## 📦 Installation
You can use npx to run the CLI without installation:

sh
Copy
Edit
npx create-project-cli-scaffold my-project
Or install it globally:

sh
Copy
Edit
npm install -g create-project-cli-scaffold
## 🛠 Usage
Create a new project:
sh
Copy
Edit
create-project-cli-scaffold my-project
This will generate a new project in my-project/ using the default template.

## 🏗 Custom Templates (Optional)
By default, the CLI uses the templates/default folder inside the package.
If you want to customize your own templates:

Clone this repository.
Modify the templates/default folder.
Install dependencies and test locally:
sh
Copy
Edit
npm link
create-project-cli-scaffold my-custom-project
## 🔄 Updating
If you installed the CLI globally, you can update it using:

sh
Copy
Edit
npm update -g create-project-cli-scaffold
## ⚡ Contributing
Feel free to submit issues or contribute to the project by opening a pull request.
