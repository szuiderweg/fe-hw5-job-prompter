// done: placed department dataset in separate file departments.js
console.log(departments);

// -------- PART 1 -------------
//assigment 1a: log the number of employees in Sales.
console.log('De afdeling Sales heeft',departments.sales.numberOfEmployees,'medewerkers');

//assignment 1b: log the department description of Marketing.
console.log('Marketing is een leuke afdeling om te werken.',departments.marketing.description );

//assigment 1c:log the number of employees of Customer services.
console.log('De afdeling Customer Service heeft',departments['customer-service'].numberOfEmployees,'medewerkers');

//assignment 1d: log the jobdescription of a sales manager in the Salesdepartment
console.log('Sales is een uitdagende afdeling om te werken als Verkoopmanager.',departments.sales.jobs[1].description);

//--------- PART 2-------------
const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
console.log('je koos',userInput);

switch (userInput)
{
    case 'marketing':
        console.log(departments.marketing.description);
        break;
    case 'sales':
        console.log(departments.sales.description);
        break;
    case 'customer-service':
        console.log(departments['customer-service'].description);
        break;
    default:
        console.error('Ongeldige input. Probeer het opnieuw door de pagina te verversen');
        break;
}
console.log(userInput,'is een leuke afdeling om te werken. Er werken op dit moment',departments[userInput].numberOfEmployees,'mensen.');

//----------PART 3 and 4-----------------------

//the prompt did not like this long combination below, so lets put it into a single string and use that for the prompt.
const promptMessage = 'Je koos afdeling'+userInput+'Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n 0:'+departments[userInput].jobs[0].title+'\n 1:'+departments[userInput].jobs[1].title+'\n'+'2:'+departments[userInput].jobs[2].title+'\n'+'3:'+departments[userInput].jobs[3].title;

const userInput2 = prompt(promptMessage);//user selects a jobtitle.

switch (userInput2)//log the selected jobtitle plus the job description
{
    case '0':
    case '1':
    case '2':
    case '3':
        console.log('Je koos',departments[userInput].jobs[userInput2].title,'.  Een uitdagende rol!',departments.marketing.jobs[userInput2].description,);
        break;
    default:
        console.error('Ongeldige input. Probeer het opnieuw door de pagina te verversen');
        break;
}






