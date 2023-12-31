import { mainBookList } from './get-top-books';
import { makeMarkupForBooks } from './markup-books';
import { createCategoryMarcup, categoryTitle } from './createCategoryMarcup';
import { loaderOn, loaderOff } from './loader';

const onSeeMoreClick = (e) => {
    if (e.target.classList.contains('see_more')) {
        e.preventDefault();
        loaderOn();
        const list = document.querySelector('.categories__list');
        const category = list.getElementsByClassName('categories__link');

        const arr = Array.from(category);
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            element.classList.remove('active__link');

            if (e.target.dataset.name === element.innerText) {
                element.classList.add('active__link');

            }
        }

        const titleTExt =  e.target.dataset.name.split(' ');
        titleTExt.pop();
        const accentText =  e.target.dataset.name.split(' ')[ e.target.dataset.name.split(' ').length - 1];
        createCategoryMarcup( e.target.dataset.name)
            .then((resp) => {
                categoryTitle.classList.add('no-change');
                categoryTitle.innerHTML = `${titleTExt.join(' ')}&nbsp
                <span class="title_book">${accentText}</span>`;
                mainBookList.innerHTML = makeMarkupForBooks(resp);
                loaderOff();
                // if ( document.documentElement.scrollWidth >= 1440) {
                //     return;
                // }
                document.querySelector('#best-sellers-container').scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            })
    }
};

mainBookList.addEventListener('click', onSeeMoreClick);