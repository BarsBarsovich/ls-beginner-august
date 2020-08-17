const tabs = document.querySelectorAll('.sizes__item-title');

tabs.forEach((tab) => {
    tab.addEventListener('click', function ($event) {
        const parentLi = $event.target.parentElement;
        const isActive = parentLi.querySelector('.sizes__item-description').classList.contains('sizes__item-description_active');

        isActive ? parentLi.querySelector('.sizes__item-description').classList.remove('sizes__item-description_active') :
            parentLi.querySelector('.sizes__item-description').classList.add('sizes__item-description_active');

        document.querySelectorAll('.sizes__item').forEach(item => {
            if (item.textContent !== parentLi.textContent) {
                item.querySelector('.sizes__item-description').classList.remove('sizes__item-description_active');
            }
        });
    });
});
