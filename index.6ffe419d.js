!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("eVdBp");const o=e=>e.map((({book_image:e,title:t,author:n,_id:a,list_name:o,description:s,buy_links:l})=>`\n      <li class="book-item" class="_list"\n        data-title="${t}"\n        data-image="${e}"\n        data-author="${n}"\n        data-listName="${o}"\n        data-description="${s}"\n        data-linkNameAmazon="${l[0].name}"\n        data-linkUrlAmazon="${l[0].url}"\n        data-linkNameApple="${l[1].name}"\n        data-linkUrlApple="${l[1].url}"\n        data-linkNameBarnes="${l[2].name}"\n        data-linkUrlBarnes="${l[2].url}"\n      >\n        <a href="#" class="_link" class="book-item" data-id="${a}">\n          <div class="thumb">\n            <img class="lazyload" src="https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/testBook.png" data-src="${e||"https://raw.githubusercontent.com/theGreatGrandfather/apple/main/src/images/testBook.png"}" alt="${t}" loading="lazy"/>\n            <div class="overlay">\n              <p class="overlay-text">quick view </p>\n            </div>\n          </div>\n          <h4 class="book-title">${t}</h4>\n          <p class="book-author">${n}</p>\n        </a>\n      </li>\n    `)).join("");var s=a("dIxxU");const l="https://books-backend.p.goit.global",i=async()=>{try{return(await s.default.get(`${l}/books/category-list`)).data}catch(e){console.log(e)}},r=async()=>{try{return(await s.default.get(`${l}/books/top-books`)).data}catch(e){console.log(e)}throw new Error(error)},d=async e=>{try{return(await s.default.get(`${l}/books/category`,{params:{category:e}})).data}catch(e){console.log(e)}},c=document.querySelector(".categories__list");(async()=>(await i()).map((({list_name:e})=>`\n                <li class='categories__item _list'>\n                    <a data-categories__item data-listName='${e}' rel='noopener no-referrel nofollow' class='categories__link _link' href='#'>${e}</a>\n                </li>`)).sort().join(""))().then((e=>{c.insertAdjacentHTML("beforeend",e)})).catch((e=>{console.log("err",e)})),a("kvC6y");const m=document.querySelector(".title_best-sellers"),u=async e=>await d(e);c.addEventListener("click",(e=>{if(e.target.hasAttribute("data-categories__item")){e.preventDefault();const t=document.querySelector(".categories__list").getElementsByClassName("categories__link"),n=Array.from(t);for(let e=0;e<n.length;e++){n[e].classList.remove("active__link")}e.target.classList.add("active__link");const a=e.target.dataset.listname.split(" ");a.pop();const s=e.target.dataset.listname.split(" ")[e.target.dataset.listname.split(" ").length-1];u(e.target.dataset.listname).then((e=>{m.classList.add("no-change"),m.innerHTML=`${a.join(" ")}&nbsp\n                <span class="title_book">${s}</span>`,g.innerHTML=o(e),document.documentElement.scrollWidth>=1440||document.querySelector("#best-sellers-container").scrollIntoView({behavior:"smooth",block:"start"})}))}})),a("kvC6y");const g=document.querySelector(".best_list");let p=5;const k=()=>!m.classList.contains("no-change"),h=async()=>{if(k())try{const e=await r();if(0===e.length)return;const t=e.map((({books:e,list_name:t})=>{const n=e.slice(0,p);return`<li class='best-item _list'>\n                <h3 class='min-title'>${t}</h3>\n                <ul class='books-list'>\n                    ${o(n)}\n                </ul>\n                <button class='see_more' data-name="${t}">See More</button>\n              </li>`}));g.innerHTML=t.join("")}catch(e){console.error(e)}},L=()=>{p=window.matchMedia("(max-width: 767px)").matches?1:window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches?3:5,h()},y=((e,t)=>{let n;return(...a)=>{clearTimeout(n),n=setTimeout((()=>e(...a)),t)}})(L,300);window.addEventListener("resize",y);window.addEventListener("resize",(()=>{k(),0})),window.addEventListener("load",(()=>{L()}));var v=a("6uLmu"),b=a("gQOBw"),w=a("iNWLi"),_=(b=a("gQOBw"),a("6m2hf"));const f=(0,b.getAuth)(w.app),E=(0,_.getFirestore)(w.app),x={body:document.querySelector("body"),modal:document.getElementById("modal"),modalInner:document.getElementById("modal-inner"),modalTitle:document.getElementById("modal-title"),modalAuthor:document.getElementById("modal-author"),modalDescr:document.getElementById("modal-description"),modalImg:document.getElementById("modal-image"),modalClose:document.getElementById("modal-close-btn"),amazonLink:document.getElementById("amazon-link"),appleLink:document.getElementById("apple-link"),barnesLink:document.getElementById("barnes-link"),addToList:document.getElementById("modal-add-to-list"),modalGreetings:document.getElementById("modal-greetings-text"),books:document.getElementById("best-sellers-container")},T="Add to shopping list",$="Remove from the shopping list";let B={},C=!1;const I=e=>{x.modal.classList.add("modal-js"),x.body.classList.remove("no-scroll-js"),x.modalClose.removeEventListener("click",I),document.removeEventListener("keydown",q),x.addToList.removeEventListener("click",S),x.modal.removeEventListener("click",j)},j=e=>{e.target===e.currentTarget&&(I(),x.modalClose.removeEventListener("click",I),document.removeEventListener("keydown",q),x.addToList.removeEventListener("click",S),x.modal.removeEventListener("click",j))},q=e=>{"Escape"===e.key&&(I(),x.modalClose.removeEventListener("click",I),document.removeEventListener("keydown",q),x.addToList.removeEventListener("click",S),x.modal.removeEventListener("click",j))},S=()=>{C?((0,v.delBook)(B.id),x.addToList.textContent=T,x.modalGreetings.classList.add("modal-greetings-text-js"),C=!1):((0,v.pullBookData)(B),x.addToList.textContent=$,x.modalGreetings.classList.remove("modal-greetings-text-js"),C=!0)};x.books.addEventListener("click",(e=>{if(e.preventDefault(),(0,b.onAuthStateChanged)(f,(async e=>{if(e){const t=e.email,n=await(0,_.getDocs)((0,_.collection)(E,t)),a=[];n.forEach((e=>a.push(e.data().id))),a.some((e=>e===B.id))?(C=!0,console.log(C),x.addToList.textContent=$,x.modalGreetings.classList.remove("modal-greetings-text-js")):(C=!1,console.log(C),x.addToList.textContent=T,x.modalGreetings.classList.add("modal-greetings-text-js"))}else x.addToList.disabled=!0,x.addToList.style.cursor="not-allowed"})),!e.target.closest(".book-item"))return;x.modalClose.addEventListener("click",I),document.addEventListener("keydown",q),x.addToList.addEventListener("click",S),x.modal.addEventListener("click",j);const t=e.target.closest(".book-item");B={id:t.querySelector("._link").dataset.id,title:t.dataset.title,img:t.dataset.image,author:t.dataset.author,description:t.dataset.description,amazonLink:t.dataset.linkurlamazon,appleLink:t.dataset.linkurlapple,barnesLink:t.dataset.linkurlbarnes,listname:t.dataset.listname},x.modalTitle.textContent=B.title,x.modalAuthor.textContent=B.author,x.modalDescr.textContent=B.description,x.modalImg.src=B.img,x.amazonLink.href=B.amazonLink,x.appleLink.href=B.appleLink,x.barnesLink.href=B.barnesLink,currentBookId=B.id,C?(x.addToList.textContent=$,x.modalGreetings.classList.remove("modal-greetings-text-js")):(x.addToList.textContent=T,x.modalGreetings.classList.add("modal-greetings-text-js")),x.body.classList.add("no-scroll-js"),x.modal.classList.toggle("modal-js")})),a("4jEcb"),a("7hKzD");const z=document.querySelector(".go-top");z.hidden=!0;const A=()=>{window.scrollY>0&&(window.scrollBy(0,-82),setTimeout(A,0))};window.addEventListener("scroll",(()=>{const e=window.scrollY,t=document.documentElement.clientHeight;z.hidden=!(5*e>=t)})),z.addEventListener("click",A),a("50Y4H"),a("f5DzK"),a("kvC6y");g.addEventListener("click",(e=>{if(e.target.classList.contains("see_more")){e.preventDefault();const t=document.querySelector(".categories__list").getElementsByClassName("categories__link"),n=Array.from(t);for(let t=0;t<n.length;t++){const a=n[t];a.classList.remove("active__link"),e.target.dataset.name===a.innerText&&a.classList.add("active__link")}const a=e.target.dataset.name.split(" ");a.pop();const s=e.target.dataset.name.split(" ")[e.target.dataset.name.split(" ").length-1];u(e.target.dataset.name).then((e=>{m.classList.add("no-change"),m.innerHTML=`${a.join(" ")}&nbsp\n                <span class="title_book">${s}</span>`,g.innerHTML=o(e),document.querySelector("#best-sellers-container").scrollIntoView({behavior:"smooth",block:"start"})}))}}));let M=0;document.querySelector(".slider-container");const D=document.querySelector(".support-ukraine__list"),G=document.querySelector(".support-ukraine__btn"),N=document.querySelectorAll(".support-ukraine__item");let H=N.length;N.forEach((e=>{e.style.minHeight="32px"})),G.addEventListener("click",(()=>{(function(){const e=window.innerWidth;return e>=1440?H-(Math.abs(M)+192)/39:e>=768?H-(Math.abs(M)+192)/40:H-(Math.abs(M)+192)/55})()>=1.5?M-=48:M=0,D.style.transition="transform 0.3s ease-out",U(),setTimeout((()=>{D.style.transition=""}),300)})),window.addEventListener("resize",(()=>{H=N.length,U()}));const U=()=>{D.style.transform=`translateY(${M}px)`}}();
//# sourceMappingURL=index.6ffe419d.js.map
