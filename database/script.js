// Sample data for criminals and PDFs
const pdfData = [
// Greg Marohn   
 {
        title: "Criminal Record - Greg Marohn",
        tags: "Greg Marohn michigan drugs racist Drug Possession Official Misconduct Falsification of Records Obstruction of Justice Public Corruption",
        file: "pdfs/Greg-Marohn.pdf",
        details: {
            name: "Greg Marohn",
            crime: "Drug Possession, Official Misconduct, Falsification of Records, Obstruction of Justice, Public Corruption",
            badgeNumber: "Unknown",
            rank: "SGT",
            photo: "images/Greg-Marohn.jpg"
        }
    },
    {
        title: "Criminal Record - Jane Smith",
        tags: "crime fraud jane-smith",
        file: "pdfs/fraud.pdf",
        details: {
            name: "Jane Smith",
            crime: "Fraud",
            badgeNumber: "654321",
            rank: "Detective",
            photo: "images/jane-smith.jpg"
        }
    },
	
	//Brian Williams 0001
	 {
        title: "Criminal Record - Brian Williams",
        tags: "crime brian williams negligence animal cruelty gun dog ",
        file: "pdfs/Brian-Williams.pdf",
        details: {
            name: "Brian Williams",
            crime: "Sec-5 8th Amend-Animal, Unreasonable Use of a Firearm, Criminal Mistief",
            badgeNumber: "Unknown",
            rank: "Deputy",
            photo: "images/Brian-Williams.JPG"
        }
    },
	//Derek Chauvin
	{
        title: "Criminal Record - Derek Chauvin",
        tags: "Derek-Chauvin Derek Chauvin murder racist Police Misconduct Excessive Force Murder Minneapolis George Floyd Civil Rights Violations Racism Use of Force",
        file: "pdfs/Derek-Chauvin.pdf",
        details: {
            name: "Derek Chauvin",
            crime: "Second-Degree Murder (Unintentional), Third-Degree Murder, Second-Degree, Manslaughter, Federal Civil Rights Violations, Excessive Use of Force, Police Misconduct, Negligence in Duty, Abuse of Power, Assault",
            badgeNumber: "Unknown",
            rank: "Police Officer",
            photo: "images/Derek-Chauvin.jpg"
        }
    },
	
    // Add more records as needed
];

// Function to populate PDF list
function populatePDFList() {
    const pdfContainer = document.getElementById('pdf-container');
    pdfContainer.innerHTML = '';
    pdfData.forEach((pdf, index) => {
        const pdfItem = document.createElement('div');
        pdfItem.className = 'pdf-item';
        pdfItem.dataset.tags = pdf.tags;
        pdfItem.dataset.index = index;
        pdfItem.textContent = pdf.title;
        pdfItem.addEventListener('click', () => loadDetails(index));
        pdfContainer.appendChild(pdfItem);
    });
}

// Search functionality
function searchPDFs() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const pdfItems = document.querySelectorAll('.pdf-item');

    pdfItems.forEach(item => {
        const tags = item.getAttribute('data-tags');
        if (tags.toLowerCase().includes(searchInput)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to load criminal details when a PDF item is clicked
function loadDetails(index) {
    const details = pdfData[index].details;
    document.getElementById('criminal-photo').src = details.photo;
    const detailsContainer = document.getElementById('criminal-details');
    detailsContainer.innerHTML = `
        <p><strong>Name:</strong> ${details.name}</p>
        <p><strong>Crime:</strong> ${details.crime}</p>
        <p><strong>Badge Number:</strong> ${details.badgeNumber}</p>
        <p><strong>Rank:</strong> ${details.rank}</p>
        <a href="${pdfData[index].file}" target="_blank">View PDF</a>
    `;
}

// Initialize the PDF list on page load
window.onload = function() {
    populatePDFList();
};
