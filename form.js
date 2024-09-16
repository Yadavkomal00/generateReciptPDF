function createPDF() {
    const { jsPDF } = window.jspdf;

    //  let var const = identifier
    const doc = new jsPDF();// this create new blank js pdf object

    // Use FormData to collect form values
    const form = document.querySelector('form'); // can also be done with below code
    const form2 = document.getElementById('form');

     // this create FormData object jisme pehle se value rahengi
     // hum form ko as a parammeter pass kar rahe in FormData() -- () is constructor
// Constructor is a type of method in class that is used to instantiate objects
// instantiate objects -  object ke propertoes ko values assign krna at time of object creation
    const formData = new FormData(form);
    const formData2 = new FormData(form2);

    //test values of form 2
    const receiptNo2 = formData2.get('receipt-no');
    const fromName2 = formData2.get('from-name');

    // Get values from formData
    const receiptNo = formData.get('receipt-no');
    const fromName = formData.get('from-name');
    const fromEmail = formData.get('from-email');
    const fromAddress = formData.get('from-address');
    const fromPhone = formData.get('from-phone');
    const fromDate = formData.get('from-date');

    const billName = formData.get('bill-name');
    const billEmail = formData.get('bill-email');
    const billAddress = formData.get('bill-address');
    const billPhone = formData.get('bill-phone');

    // Add title
    doc.setFontSize(16);
    doc.text(20, 20, 'Receipt Details');
    
    // Add receipt no
    doc.setFontSize(12);
    doc.text(20, 30, `Receipt No: `+receiptNo);  // same as jo niche likha hai 
    // doc.text(20, 30, `Receipt No: ${receiptNo}`);

    // Draw table for the 'From' and 'Bill to' sections
    doc.autoTable({
        startY: 40,
        head: [['Field', 'From', 'Bill To']],
        body: [
            ['Name', fromName, billName],
            ['Email', fromEmail, billEmail],
            ['Address', fromAddress, billAddress],
            ['Phone', fromPhone, billPhone],
            ['Date', fromDate, '']
        ],
        theme: 'grid',
        styles: {
            halign: 'center',
            valign: 'middle'
        },
        headStyles: {
            fillColor: [0, 128, 0],  // Header color: green
            textColor: [255, 255, 255]
        },
        columnStyles: {
            0: { halign: 'left' },  // Align first column (Field) to the left
            1: { halign: 'center' }, // Center 'From' column
            2: { halign: 'center' }  // Center 'Bill To' column
        }
    });

    // Save the PDF
    doc.save("form-data.pdf");
} 