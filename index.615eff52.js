function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a);const r=e=>e.map((({book_image:e,title:t,author:n,_id:i,list_name:a,description:r,buy_links:o})=>`\n      <li class="book-item" class="_list"\n        data-title="${t}"\n        data-image="${e}"\n        data-author="${n}"\n        data-listName="${a}"\n        data-description="${r}"\n        data-linkNameAmazon="${o[0].name}"\n        data-linkUrlAmazon="${o[0].url}"\n        data-linkNameApple="${o[1].name}"\n        data-linkUrlApple="${o[1].url}"\n        data-linkNameBarnes="${o[2].name}"\n        data-linkUrlBarnes="${o[2].url}"\n      >\n        <a href="#" class="_link" class="book-item" data-id="${i}">\n          <div class="thumb">\n            <img class="lazyload" src="../images/testBook.png" data-src="${e}" alt="${t}" loading="lazy"/>\n            <div class="overlay">\n              <p class="overlay-text">quick view </p>\n            </div>\n          </div>\n          <h3 class="book-title">${t}</h3>\n          <p class="book-author">${n}</p>\n        </a>\n      </li>\n    `)).join("");a("du6kM");var o=a("du6kM");o=a("du6kM");const l=document.querySelector(".categories__list");(async()=>(await(0,o.getCategoryList)()).map((({list_name:e})=>`\n                <li class='categories__item _list'>\n                    <a data-categories__item rel='noopener no-referrel nofollow' class='categories__link _link' href='#'>${e}</a>\n                </li>`)).sort().join(""))().then((e=>{l.insertAdjacentHTML("beforeend",e)})).catch((e=>{console.log("err",e)}));o=a("du6kM");const s=document.querySelector(".title_best-sellers");document.querySelector(".title_book");l.addEventListener("click",(e=>{if(e.target.hasAttribute("data-categories__item")){const t=e.target.innerText.split(" ");t.pop();const n=e.target.innerText.split(" ")[e.target.innerText.split(" ").length-1];(async e=>await(0,o.getBooksByCategory)(e))(e.target.innerText).then((e=>{s.classList.add("no-change"),s.innerHTML=`${t.join(" ")}&nbsp\n                <span class="title_book">${n}</span>`,c.innerHTML=r(e),console.log("resp",e)}))}}));const c=document.querySelector(".best_list");let u=5,d=null;const p=()=>!s.classList.contains("no-change"),m=async()=>{if(p())try{const e=await(0,o.getTopBooks)();if(0===e.length)return;const t=e.map((({books:e,list_name:t})=>{const n=e.slice(0,u);return`<li class='best-item _list'>\n                <h4 class='min-title'>${t}</h4>\n                <ul class='books-list'>\n                    ${r(n)}\n                </ul>\n                <button class='see_more' data-name="${t}">See More</button>\n              </li>`}));c.innerHTML=t.join("")}catch(e){console.error(e)}},g=((e,t)=>{let n;return(...i)=>{clearTimeout(n),n=setTimeout((()=>e(...i)),t)}})((()=>{u=p()?window.matchMedia("(max-width: 767px)").matches?1:window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches?3:5:u,m()}),250);window.addEventListener("resize",g),p()?m():d=c.innerHTML;window.addEventListener("resize",(()=>{!p()&&d&&(c.innerHTML=d)})),a("bTcpz"),a("bMZn5"),a("74Aiq"),a("4Z4PC");var h;h=JSON.parse('[{"title":"Save the Children","img":"","url":"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"},{"title":"Project HOPE","img":"","url":"https://www.projecthope.org/country/ukraine/"},{"title":"UNITED24","img":"","url":"https://u24.gov.ua/uk"},{"title":"International Medical Corps","img":"","url":"https://internationalmedicalcorps.org/country/ukraine/"},{"title":"Medicins Sans Frontieres","img":"","url":"https://www.msf.org/ukraine"},{"title":"RAZOM","img":"","url":"https://www.razomforukraine.org/"},{"title":"Action against hunger","img":"","url":"https://www.actionagainsthunger.org/location/europe/ukraine/"},{"title":"World vision","img":"","url":"https://www.wvi.org/emergencies/ukraine"},{"title":"Serhiy Prytula Charity Foundation","img":"","url":"https://prytulafoundation.org/en"}]');document.querySelector(".support-ukraine__list").innerHTML=e(h).map((({title:e,url:t})=>`\n        <li class='support-ukraine__item'>\n            <a target="_blank" rel='noopener no-referrel nofollow' class='support-ukraine__link _link' href='${t}'>${e}</a>\n        </li>`)).join("");
//# sourceMappingURL=index.615eff52.js.map
