document.addEventListener('DOMContentLoaded', () => {
    const nextToStep2 = document.getElementById('nextToStep2');
    const backToStep1 = document.getElementById('backToStep1');
    const nextToStep3 = document.getElementById('nextToStep3');
    const backToStep2 = document.getElementById('backToStep2');
    const confirmBtn = document.getElementById('confirmBtn');
    const progress = document.getElementById('progress');
    const progressSteps = document.querySelectorAll('.progress-step');
    const formSteps = document.querySelectorAll('.form-step');

    let formStepIndex = 0;

    function updateProgressBar() {
        progress.style.width = (formStepIndex / (formSteps.length - 1)) * 100 + '%';
        progressSteps.forEach((step, index) => {
            if (index <= formStepIndex) {
                step.classList.add('progress-step-active');
            } else {
                step.classList.remove('progress-step-active');
            }
        });
    }

    function showFormStep(index) {
        formSteps.forEach((step, i) => {
            step.classList.toggle('form-step-active', i === index);
        });
        formStepIndex = index;
        updateProgressBar();
    }

    nextToStep2.addEventListener('click', () => {
        showFormStep(1);
    });

    backToStep1.addEventListener('click', () => {
        showFormStep(0);
    });

    nextToStep3.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;
        const message = document.getElementById('message').value;

        document.getElementById('previewEmail').innerText = `Email: ${email}`;
        document.getElementById('previewPhone').innerText = `Phone: ${phone}`;
        document.getElementById('previewName').innerText = `Name: ${name}`;
        document.getElementById('previewAmount').innerText = `Amount: ₹${amount}`;
        document.getElementById('previewMessage').innerText = `Message: ${message}`;

        showFormStep(2);
    });

    backToStep2.addEventListener('click', () => {
        showFormStep(1);
    });

    confirmBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you for your donation!');
        // Here you would typically submit the form data to a server
    });

    showFormStep(0); // Initialize to first step
});