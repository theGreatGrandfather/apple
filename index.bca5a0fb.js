!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);const r=e=>e.map((({book_image:e,title:t,author:n,_id:a,list_name:i,description:r,buy_links:s})=>`\n      <li class="book-item" class="_list"\n        data-title="${t}"\n        data-image="${e}"\n        data-author="${n}"\n        data-listName="${i}"\n        data-description="${r}"\n        data-linkNameAmazon="${s[0].name}"\n        data-linkUrlAmazon="${s[0].url}"\n        data-linkNameApple="${s[1].name}"\n        data-linkUrlApple="${s[1].url}"\n        data-linkNameBarnes="${s[2].name}"\n        data-linkUrlBarnes="${s[2].url}"\n      >\n        <a href="#" class="_link" class="book-item" data-id="${a}">\n          <div class="thumb">\n            <img class="lazyload" src="../images/testBook.png" data-src="${e}" alt="${t}" loading="lazy"/>\n            <div class="overlay">\n              <p class="overlay-text">quick view </p>\n            </div>\n          </div>\n          <h3 class="book-title">${t}</h3>\n          <p class="book-author">${n}</p>\n        </a>\n      </li>\n    `)).join("");i("jmRvf");var s=i("jmRvf");s=i("jmRvf");const o=document.querySelector(".categories__list");(async()=>(await(0,s.getCategoryList)()).map((({list_name:e})=>`\n                <li class='categories__item _list'>\n                    <a data-categories__item rel='noopener no-referrel nofollow' class='categories__link _link' href='#'>${e}</a>\n                </li>`)).sort().join(""))().then((e=>{o.insertAdjacentHTML("beforeend",e)})).catch((e=>{console.log("err",e)}));s=i("jmRvf");const l=document.querySelector(".title_best-sellers"),c=(document.querySelector(".title_book"),async e=>await(0,s.getBooksByCategory)(e));o.addEventListener("click",(e=>{if(e.target.hasAttribute("data-categories__item")){e.preventDefault();const t=e.target.innerText.split(" ");t.pop();const n=e.target.innerText.split(" ")[e.target.innerText.split(" ").length-1];c(e.target.innerText).then((e=>{l.classList.add("no-change"),l.innerHTML=`${t.join(" ")}&nbsp\n                <span class="title_book">${n}</span>`,d.innerHTML=r(e),console.log("resp",e)}))}}));const d=document.querySelector(".best_list");let u=5,p=null;const m=()=>!l.classList.contains("no-change"),g=async()=>{if(m())try{const e=await(0,s.getTopBooks)();if(0===e.length)return;const t=e.map((({books:e,list_name:t})=>{const n=e.slice(0,u);return`<li class='best-item _list'>\n                <h4 class='min-title'>${t}</h4>\n                <ul class='books-list'>\n                    ${r(n)}\n                </ul>\n                <button class='see_more' data-name="${t}">See More</button>\n              </li>`}));d.innerHTML=t.join("")}catch(e){console.error(e)}},h=((e,t)=>{let n;return(...a)=>{clearTimeout(n),n=setTimeout((()=>e(...a)),t)}})((()=>{u=m()?window.matchMedia("(max-width: 767px)").matches?1:window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches?3:5:u,g()}),250);window.addEventListener("resize",h),m()?g():p=d.innerHTML;window.addEventListener("resize",(()=>{!m()&&p&&(d.innerHTML=p)})),i("5xtVg"),i("euqRf"),i("23Ajj"),i("50Y4H");var w;w=JSON.parse('[{"title":"Save the Children","img":"","url":"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"},{"title":"Project HOPE","img":"","url":"https://www.projecthope.org/country/ukraine/"},{"title":"UNITED24","img":"","url":"https://u24.gov.ua/uk"},{"title":"International Medical Corps","img":"","url":"https://internationalmedicalcorps.org/country/ukraine/"},{"title":"Medicins Sans Frontieres","img":"","url":"https://www.msf.org/ukraine"},{"title":"RAZOM","img":"","url":"https://www.razomforukraine.org/"},{"title":"Action against hunger","img":"","url":"https://www.actionagainsthunger.org/location/europe/ukraine/"},{"title":"World vision","img":"","url":"https://www.wvi.org/emergencies/ukraine"},{"title":"Serhiy Prytula Charity Foundation","img":"","url":"https://prytulafoundation.org/en"}]');document.querySelector(".support-ukraine__list").innerHTML=e(w).map((({title:e,url:t})=>`\n        <li class='support-ukraine__item'>\n            <a target="_blank" rel='noopener no-referrel nofollow' class='support-ukraine__link _link' href='${t}'>${e}</a>\n        </li>`)).join("");d.addEventListener("click",(e=>{if(e.target.classList.contains("see_more")){console.log("e",e.target.dataset.name);const t=e.target.dataset.name.split(" ");t.pop();const n=e.target.dataset.name.split(" ")[e.target.dataset.name.split(" ").length-1];c(e.target.dataset.name).then((e=>{l.classList.add("no-change"),l.innerHTML=`${t.join(" ")}&nbsp\n                <span class="title_book">${n}</span>`,d.innerHTML=r(e),console.log("resp",e)}))}}))}();
//# sourceMappingURL=index.bca5a0fb.js.map
