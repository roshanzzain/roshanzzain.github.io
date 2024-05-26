
        //javascript toggle for the Faqs
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                answer.classList.toggle('visible');
            });
        });

        //javascript search bar for the Faqs
        const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.trim().toLowerCase();
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        if (question.includes(searchText)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});