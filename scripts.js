document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const forgotPasswordMessage = document.getElementById('forgotPasswordMessage');
    const dashboardContainer = document.querySelector('.dashboard-container');
    const overviewLink = document.getElementById('overviewLink');
    const trackingLink = document.getElementById('trackingLink');
    const userAccountsLink = document.getElementById('userAccountsLink');
    const overviewSection = document.getElementById('overviewSection');
    const trackingSection = document.getElementById('trackingSection');
    const userAccountsSection = document.getElementById('userAccountsSection');
    const trackingForm = document.getElementById('trackingForm');
    const trackingRecordsTable = document.getElementById('trackingRecordsTable');
    const trackingSuccessMessage = document.getElementById('trackingSuccessMessage');
    const userAccountsForm = document.getElementById('userAccountsForm');
    const userAccountsRecordsTable = document.getElementById('userAccountsRecordsTable');
    const userAccountsSuccessMessage = document.getElementById('userAccountsSuccessMessage');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        dashboardContainer.classList.remove('d-none');
        loginForm.parentElement.classList.add('d-none');
    });

    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.classList.add('d-none');
        forgotPasswordForm.classList.remove('d-none');
    });

    forgotPasswordForm.addEventListener('submit', function (e) {
        e.preventDefault();
        forgotPasswordForm.classList.add('d-none');
        forgotPasswordMessage.classList.remove('d-none');
    });

    overviewLink.addEventListener('click', function () {
        overviewSection.classList.remove('d-none');
        trackingSection.classList.add('d-none');
        userAccountsSection.classList.add('d-none');
    });

    trackingLink.addEventListener('click', function () {
        trackingSection.classList.remove('d-none');
        overviewSection.classList.add('d-none');
        userAccountsSection.classList.add('d-none');
    });

    userAccountsLink.addEventListener('click', function () {
        userAccountsSection.classList.remove('d-none');
        overviewSection.classList.add('d-none');
        trackingSection.classList.add('d-none');
    });

    trackingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const ownerName = document.getElementById('ownerName').value;
        const carType = document.getElementById('carType').value;
        const carModel = document.getElementById('carModel').value;
        const serviceType = document.getElementById('serviceType').value;
        const partsOrdered = document.getElementById('partsOrdered').value;
        const quantity = document.getElementById('quantity').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ownerName}</td>
            <td>${carType}</td>
            <td>${carModel}</td>
            <td>${partsOrdered}</td>
            <td>${serviceType}</td>
            <td>${quantity}</td>
        `;
        trackingRecordsTable.appendChild(row);
        trackingSuccessMessage.classList.remove('d-none');
        setTimeout(() => trackingSuccessMessage.classList.add('d-none'), 3000);
        trackingForm.reset();
    });

    userAccountsForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const category = document.getElementById('categories').value;
        const subsystem = document.getElementById('subsystem').value;
        const owner = document.getElementById('owner').value;
        const date = document.getElementById('date').value;
        const completed = document.getElementById('completed').checked;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${category}</td>
            <td>${subsystem}</td>
            <td>${owner}</td>
            <td>${date}</td>
            <td>${completed ? '<span class="text-success">&#10003;</span>' : '<span class="text-muted">&#10007;</span>'}</td>
        `;
        userAccountsRecordsTable.appendChild(row);
        userAccountsSuccessMessage.classList.remove('d-none');
        setTimeout(() => userAccountsSuccessMessage.classList.add('d-none'), 3000);
        userAccountsForm.reset();
    });

    // Chart.js code for Overview section
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Total Cars', 'In-Process Cars', 'Completed Cars'],
            datasets: [{
                label: 'Cars Status',
                data: [50, 20, 30],
                backgroundColor: ['red', 'blue', 'green']
            }]
        }
    });

    // Progress bars for Tracking Summary
    const partsOrderedProgress = document.getElementById('partsOrderedProgress');
    partsOrderedProgress.style.width = '70%';
    partsOrderedProgress.innerText = 'Parts Ordered';

    const usersProgress = document.getElementById('usersProgress');
    usersProgress.style.width = '40%';
    usersProgress.innerText = 'Users';

    // Pie chart for Auto Repair
    const pieCtx = document.getElementById('autoRepairPieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Auto Repair A', 'Auto Repair B', 'Auto Repair C'],
            datasets: [{
                data: [30, 40, 30],
                backgroundColor: ['#6699ff', '#3366cc', '#003399']
            }]
        }
    });
});
