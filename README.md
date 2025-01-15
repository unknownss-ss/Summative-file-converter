# File Size Converter

## Technical documentation 

Files used for the app: 
- index.html
- index.js
- style.css

Files used for testing: 
- index.test.js
- logic.js
- package.json

Languages/tools used: 
- HTML
- CSS
- JavaScript 
- Jest

To run project locally: 

With SSH: 
``` bash
git@github.com:unknownss-ss/Summative-file-converter.git
```

Without SSH: 

```bash
git clone https://github.com/unknownss-ss/Summative-file-converter.git
```
To install Jest: 
```bash
npm install
```

To run tests: 

```bash
npm test
```


## Introduction 
This file size converter is an app which allows users to convert any of their files in a quick and simple way with units such as bytes, kilobytes and more. This app will consist of features such as: 
- Having a dropdown of the files types 
- Instant, real-time results 
- User input 

This app is benefical in a large tech firm as it prevents errors from occurring ensuring accuracy and time efficiency. Being able to convert file sizes impacts all types of employees such as data analysts with their large datasets being converted to other platforms, to developers optimising assets like images. Initally this app improves communication with employees not needing to worry about different file sizes.

## User documentation

This app contains different features and enhancements, being able to convert the code, switch the data from the boxes and reset/clear all the boxes and data 

### How to use the app 

In the app there are 4 boxes, the first box which says 'Enter file size value' is where the user enters their current file size value. The user also selects from the drop down box the current size, the app only works with sizes bytes to gigabytes. In the boxes below the user selects from the drop down box what they want their file to be converted to. The user clicks the convert button and the results are displayed in the 'results' box. 

For example the user wants has a 1543 byte file and wants to convert it to kilobytes. Here is how it would look like: 

<br>
<p align="center">
  <img src="images/Figure 1.png"/><br>
  <em>Figure 1 - example of how to use the app </em>
</p>
<br>




### Flowchart 

Before starting on the development and planning of this app, a flowchart has been created. This provides a basic understanding and clarity of the process, which will help in the development and testing stage. 

In figure 1 the process starts with creating the prototype, project management and tickets which is initally the development stage. The process consists of working on the ticket, testing and depending on the success it moves to a pull request and is pushed to the main code. If the ticket fails at any point it goes back to the developing stage to solve the bug. Once all the tickets are completed and the main code is tested the app is successfuly completed. 


## Design 
Before developing the code i used figma to create a prototype for the app. By refining the design before implementation it provides visualisation of the layout and functionality which reduces the time needed to make changes. 

When designing it is important to take into account the users needs, while focusing on simplicity and efficiency. This design ensures functionality with the simple layout for users to enter their data via dropdown boxes which prevent human error/mistakes (see figure 2). The use of neutral tones also enhances user experience through the consistency and clarity as the interface is approachable and easy to understand/use.
 
figure 2 


## Project planning 
When starting a project there are multiple techniques, tools, methodologies and tasks that need to be completed which will be discussed. 

### Agile methodology 

This project will follow the agile methodology, with there being 2 sprints involved although there is a short amount of time given for this project. The first sprint consists of the core functions and testing to ensuring the basic features such as converting the file work. The second sprint is where the enhancements and unit testing will occur. Each sprint will last around 3 weeks due to the lack of developers (only me), however if given more time and a team this could consist of more sprints, adding more personal touches/aesthetics/enhancements to meet the business needs while enable collaboration and communication. 

This project uses agile due to the visibility with the customer/user being able to give their feedback and make changes through each sprint, as this app is user centric it is important to make the adjustments for the interface and features early on. As the project is small the development is flexibile and iterative, resulting in a quicker time for the app to be developed, as each feature would be an iteration which results in a MVP being created/released quicker. In addition agile allows there to be continous improvements and reduces risks as all challenges are addressed early on and if needed the issues can be escalated during the daily scrum meetings.

For task management each task/feature or enhancement will be an issue that is created on github which helps to maintain the development ensuring all tasks are completed throughout each sprint. As the developer i will branch out each issue from the main code which prevents any error during the iterations. To track the progress of the issues i will use a kanban board which helps visualise and maintain the workflow ensuring the project meet the deadline, while making sure each issue is completed.
 
### Creating tickets
As there are mutliple features being used, i created issues, these will be linked to the kanban board. With each issue they will be branched where the iteration will take place, then a pull request is needed for the changes to be made to the main code. See figure 3 which is an example of an issue, containing the description and objectives of how it will be completed. and figure 4 shows my ticketing system where each are labelled.

### Project kanban board 
To manage the issues/tickets as mentioned before the project management tool kanban board is used, in figure 5 we can see how there are different sections to help understand what process each issue is at, with all being in the backlog right now. 

Figure 5 

### Development of code

To start working on the project i first need to cloned it into VS code. For this project the first ticket was to create the files which consist of the HTML,CSS and JavaScript. Once this was completed i started working on the other tickets such as: 

#### Adding a title - branch
With this ticket, i first created a branch which was called 'adding-a-title' this helps with future iterations if there needs to be any updates made. This branch was transferred into VS code so i can start coding. The ticket contains the description and specifications needed seen in figure 6. By working on the branch it prevents bugs and risks from impacting the main code while being developed.  


Once the title was created, meeting all the requirements in VS code, i needed to commit the change to the main file. Once the commit was done a notification would show (see figure 7) that there has been changes and the pull request is ready to occur. In addition a way to see if the commit has occurred is an notification (see figure 8) would tell you how many commits the branch is ahead. Once the pull request is created, it needs to be merged, which must be approved (see figure 9). Once approved it moved it now in the main. Seen in figure 10 for the updated version of the app.


#### Solving bugs - Input containing letters

As this app contains conversions, there can be errors when manually testing the result. For example when testing the convert button ticket and a letter is included in the input, as this app focuses on the conversion of numbers this causes an error in the code. As a result another ticket would have to be made (see figure 10) where the javascript would need to be updated and instead an error message is provided so the user is aware of what happened (see figure 11).
 

FIgure 10 - bug ticket 
figure 11 - error message when letter is entered 


### Updated kanban 
By working on each ticket and developing the app, the kanban board is updated automatically. From being in progress, in review to completed. In figure 12 we can see the progression linking to the sprints, where all the core features have been completed, while the enhancements are currently being worked on. 


## Final product 
Now that all the tickets/issues and sprints have been completed. This is the final result of the file converter app. (see figure 13). This final product ensures functionality with the features from converting to reseting the boxes. Although this sprint is finished, there is always continous integration and deployments from best practices and new software releases being made to meet customer needs, while ensuring tests are automated, the code is accurate and having a larger development team which results in more contributions and ideas for enhancements. 


## Unit testing 

Throughout this project it is important to constantly be testing the code not just the user interface. This way errors can be identified quickly and solved. For this project unit testing with jest will be used. Unit testing is when specific parts of the code is tested individually to check if the correct outcome is produced. Jest is used in this situation due to the use of javascript. 

For unit testing with jest there will be 4 components that are tested. The first is a smoke test, this checks whether jest testing is actually working to ensure accuracy. The second test was to see whether the results would be rounded to 2 decimal points, which was a bug issue before. As the app is a converter, i had to add 3 inputs, the file size and then the file type and the file type i want it to be converted. To check this test i tested it with the correct input with 1024,435 going from bytes to kilobytes and the answer should be 1.00 (see figure 14). However i entered an incorrect input of 2024.435 which should result to 2.00 but the unit jest testing is expecting 1.00 so we can see it failed the testing.(see figure 15)

The third and fourth test was to see what would happen if a negative number and letter would be entered, initially from the javascript coded it should provide an error message as it cannot convert that data, which from figure 14 we can see it passed, which is how the app can function correctly. 




## Evaluation 

Overall this project allowed me as the developer to gain knowledge on the programming languages used; HTML, CSS and JavaScript. I was able to manage the project and fullfill all the requirements with the help of the flow chart and kanban board i created. Being able to see all the tickets/issues placed on one board allowed me to see what needed to be done, reviewed or editted within the timeframe given.

In this project i did have a difficult beginning with setting up the github clone repository via VS code, due to all the different packages that needed to be downloaded, and using a windows laptop meant there were more steps to be completed, however i was able to sort it out by problem solving and asking for help. 

This project allowed me use features such as using branches and pull requests which were for all of the tickets/issues created. With branches i was able to add code while testing the outcome without the main code being impacted. Whereas the pull requests where used to push to the main code and being approved by myself as the only developer, however in a wider team the head of development would approve these requests to ensure the code is accurate and does not provide any bugs. During this project i also used jest testing due to the use of javascript which ensured all the functions in the app provide the right outcome. 

In conclusion i was able to complete a fully functioning file size converter app. This project was completed in 2 sprints, providing core features and enhancements to improve user interface. I was able to use different tools for testing and managing the project, which helped with the project running smoothly and meeting all the targets and tickets without issues. 


