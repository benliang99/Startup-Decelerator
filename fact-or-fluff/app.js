// Initialize global variables
let companies = [];
let currentCompany = null;
let score = 0;

// Function to read and parse the CSV file
function readCSVFile(file) {
    const reader = new FileReader();

    reader.onload = function(e) {
        const content = e.target.result;
        companies = parseCSV(content);
        nextCompany();
    };
    reader.readAsText(file);
}

// Function to parse the CSV data into an array of objects
function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');

    return lines.slice(1).map(line => {
        const values = line.split(',');

        return headers.reduce((obj, header, idx) => {
            obj[header.trim()] = values[idx].trim();
            return obj;
        }, {});
    });
}

// Function to display the next company
function nextCompany() {
    currentCompany = companies.shift();

    document.getElementById('description').innerText = currentCompany.description;
    document.getElementById('result').innerText = '';
    document.getElementById('real').disabled = false;
    document.getElementById('fake').disabled = false;
}

// Function to check the player's answer
// Function to check the player's answer
function checkAnswer(isReal) {
    const isCorrect = (isReal === (currentCompany.isReal === 'True'));

    if (isCorrect) {
        score++;
        document.getElementById('result').innerText = `Correct! ${currentCompany.name} ${currentCompany.isReal === 'True' ? `raised ${currentCompany.funding_amount} from investors.` : 'is a fake company.'}`;
    } else {
        document.getElementById('result').innerText = `Wrong! ${currentCompany.name} ${currentCompany.isReal === 'True' ? `raised ${currentCompany.funding_amount} from investors.` : 'is a fake company.'}`;
    }

    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('real').disabled = true;
    document.getElementById('fake').disabled = true;

    if (companies.length === 0) {
        alert("No more companies to show!");
    } else {
        nextCompany(); // Proceed to the next company
    }
}




// Event listeners for interactions
document.getElementById('csvUpload').addEventListener('change', event => {
    const file = event.target.files[0];
    if (file) {
        readCSVFile(file);
    }
});

document.getElementById('real').addEventListener('click', () => checkAnswer(true));
document.getElementById('fake').addEventListener('click', () => checkAnswer(false));