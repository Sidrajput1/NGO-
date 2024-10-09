const handleReport = () => {

    document.getElementById('interactionForm').addEventListener('submit',function(e){
        e.preventDefault();

        const empId = document.getElementById('empid').value;
        const date = document.getElementById('date').value;
        const organization_name = document.getElementById('organization_name').value;
        const organization_mobile_no = document.getElementById('organization_mobile_no').value;
        const personMet = document.getElementById('person_met').value;
        const purpose = document.getElementById('purpose').value;
        const personPersnalNo = document.getElementById('person_persnal_no').value;
        const remarks = document.getElementById('remarks').value;
        const address = document.getElementById('address').value;

        const data = {
            employee_id:empId,
            date:date,
            organization_name:organization_name,
            organization_mobile_no:organization_mobile_no,
            client_met : personMet,
            purpose:purpose,
            person_personal_number:personPersnalNo,
            remarks:remarks,
            address:address
        };

        fetch('https://prabisvg.com/phpbox/interactions.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            const messageDiv = document.getElementById('responseMessage');
            if (data.status === 'success') {
                messageDiv.innerHTML = `<p class="text-green-500">${data.message}</p>`;
                document.getElementById('interactionForm').reset();
            } else {
                messageDiv.innerHTML = `<p class="text-red-500">${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('responseMessage').innerHTML = `<p class="text-red-500">An error occurred while logging the interaction.</p>`;
        });

    });

}

export default handleReport;