# Note-App
This is a simple note taking application built using **NodeJS**. We can perform different types of operations by using different _**command line arguments**_. 
- - -
### Installing / Getting Started
Before getting started, you need to install the following dependencies using **npm** -
#### **yargs**
Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
> **npm i yargs**
#### **chalk**
Chalk comes with an easy to use composable API where you just chain and nest the styles you want.
> **npm i chalk**
- - -
### Commands
##### 1. Add a note
You can add a new note to your **JSON** file by using the below command. It takes two arguments as a parameter i.e **title** and **body**. It will only add a new note if the title doesn't already exists. 
> **node app.js add --title="Some title" --body="Some body"**
##### 2. Read a note
The read command takes in one argument as the parameter i.e **title**. This command displays the title along with its body if it exists.
> **node app.js read --title="Some title"**
##### 3. Remove a note
We can use this command to remove every information about the particular note whose title is being passed as an argument.
> **node app.js remove --title="Some title"**
##### 4. List notes
This command will display all the notes along with their title and body. It does not take any arguments.
> **node app.js list**

