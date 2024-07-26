const details = document.querySelectorAll('.questions details');

details.forEach((detail) => {
    detail.addEventListener('click', () => {

        details.forEach((otherDetail) => {
            const summary = otherDetail.querySelector('summary');
            if (summary) {
                summary.style.fontWeight = 'normal';
            }
        })

        const clickedSummary = detail.querySelector('summary');
        if (clickedSummary) {
            clickedSummary.style.fontWeight = 'bold';
        }

        details.forEach((otherDetail) => {
            if (otherDetail !== detail && otherDetail.open) {
                otherDetail.removeAttribute('open');
            }
        })

        const content = detail.querySelector('p');
        if (content) {
            content.classList.remove('fade');
            void content.offsetWidth;
            content.classList.add('fade');
        }
    });
});
