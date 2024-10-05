// Sample data for criminals and PDFs
const pdfData = [
    {
        title: "Criminal Record - John Doe",
        tags: "crime theft john-doe",
        file: "pdfs/theft.pdf",
        details: {
            name: "John Doe",
            crime: "Theft",
            badgeNumber: "123456",
            rank: "Officer",
            photo: "images/john-doe.jpg"
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
        tags: "crime brian williams negligence animal cruelty ",
        file: "pdfs/Brian-Williams.pdf",
        details: {
            name: "Brian Williams",
            crime: "Sec-5 8th Amend-Animal, Unreasonable Use of a Firearm, Criminal Mistief",
            badgeNumber: "Unknown",
            rank: "Deputy",
            photo: "images/Brian-Williams.JPG"
        }
    },
	//Michael Palazzo 0002
	{
        title: "Criminal Record - Michael Palazzo",
        tags: "crime michael palazzo 0002",
        file: "pdfs/sabastian-harris.pdf",
        details: {
            name: "Michael Palazzo",
            crime: "None",
            badgeNumber: "0002",
            rank: "Officer",
            photo: "images/michael-palazzo.jpg"
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
