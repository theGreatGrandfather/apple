!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,s.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=s);var o=s("gQOBw"),r=s("6m2hf"),l=s("6uLmu"),i=s("iNWLi"),a=s("6JpON");s("kvC6y");const c=document.querySelector(".confirm__btn"),d={defaultMarkup:document.getElementById("js-shl-default-container"),bookListEl:document.getElementById("js-shl-booklist")},p=()=>{d.defaultMarkup.style.display="flex",c.classList.add("is-hiden"),a.Notify.info("There are no books in your list yet...")},u=e=>{if(!e.target.classList.contains("js-shl-del-btn"))return;const t=e.target.closest(".js-shl-card"),n=t.dataset.id;t.remove(),(0,l.delBook)(n),d.bookListEl.children.length||p()},m=e=>{d.defaultMarkup.style.display="none";const t=(e=>e.map((({id:e,data:{img:t,title:n,listname:s,description:o,author:r,amazonLink:l,appleLink:i,barnesLink:a}})=>`<li class="shopping-list__item shopping-list-card js-shl-card" data-id='${e}'>\n          <img\n            class="shopping-list-card__image"\n            src="${t}"\n            alt="${n}"\n          />\n          <div class="shopping-list-card__info">\n            <h2 class="shopping-list-card__title">${n}</h2>\n            <p class="shopping-list-card__category">${s}</p>\n            <p class="shopping-list-card__descr">\n            ${o}\n            </p>\n            <div class="shopping-list-card__wrapper">\n              <p class="shopping-list-card__author">${r}</p>\n              <div class="shopping-list-card__links">\n                <a\n                  href="${l}"\n                  target="_blank"\n                  class="shopping-list-card__link shop-amazon _link amazon-link"\n                  \n                ></a>\n                <a\n                  href="${i}"\n                  target="_blank"\n                  class="shopping-list-card__link shop-apple _link apple-link"\n                  \n                ></a>\n                <a\n                  href="${a}"\n                  target="_blank"\n                  class="shopping-list-card__link shop-barnes _link"\n                ></a>\n              </div>\n            </div>\n            <button class="shopping-list-card__button js-shl-del-btn" type="button">\n              <svg\n                class="shopping-list-card__button--icon"\n                xmlns="http://www.w3.org/2000/svg"\n                width="16"\n                height="16"\n                viewBox="0 0 16 16"\n                fill="none"\n              >\n                <path\n                  d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333"\n                  stroke="white"\n                  stroke-linecap="round"\n                  stroke-linejoin="round"\n                />\n              </svg>\n            </button>\n          </div>\n        </li>`)).join(""))(e);d.bookListEl.insertAdjacentHTML("beforeend",t),d.bookListEl.addEventListener("click",u)},_=(0,o.getAuth)(i.app),g=(0,r.getFirestore)(i.app);(0,o.onAuthStateChanged)(_,(async e=>{if(e){const t=e.email,n=await(0,r.getDocs)((0,r.collection)(g,t)),s=[];if(n.forEach((e=>{const t={id:e.id,data:e.data()};s.push(t)})),!s.length)return p();c.classList.remove("is-hiden"),m(s)}else a.Notify.info("Please Sign-In/Sign-Up")})),s("eVdBp"),s("50Y4H"),s("f5DzK");const y=document.querySelector("body"),h=document.querySelector(".modal__form__backdrop"),f=document.querySelector(".form__button_submit"),b=document.querySelector(".modal__form__close__bt"),v=document.querySelector(".modal__form__backdrop"),k=e=>{e.target===e.currentTarget&&S()},L=e=>{S()},E=e=>{"Escape"===e.key&&S()},S=()=>{y.classList.toggle("no-scroll-js"),h.classList.toggle("is-hiden"),document.removeEventListener("keydown",E),v.removeEventListener("click",k),b.removeEventListener("click",L)};f.addEventListener("click",(e=>{e.preventDefault(),y.classList.toggle("no-scroll-js"),h.classList.toggle("is-hiden"),document.addEventListener("keydown",E),b.addEventListener("click",L),v.addEventListener("click",k)})),s("4jEcb");var w=s("dIxxU");l=s("6uLmu");const q=document.querySelector(".modal__form__thanks"),A=document.querySelector(".modal__form__backdrop"),j=document.querySelector("body");document.querySelectorAll(".js-shl-card");let $;!function(){const e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW-p4nZpSUbbOWr0MdEUruheMS1uooSQw&libraries=places&callback=initAutocomplete",e.async=!0,e.defer=!0,window.initAutocomplete=function(){$=new google.maps.places.Autocomplete(document.getElementById("pac-input"),{types:["address"],componentRestrictions:{country:["us"]}}),$.addListener("place_changed",B)};const t=document.getElementById("google-maps-script");t.parentNode.insertBefore(e,t)}();const x=document.querySelector(".modal__form");x.addEventListener("submit",(async function(e){e.preventDefault();const t=new FormData(x);if(t.append("object",M.formatted_address),0===function(e){let t=0,r=document.querySelectorAll("._req-big");for(let e=0;e<r.length;e++){const l=r[e];s(l),l.classList.contains("_req-big-tel")?o(l)&&(n(l),t++):""===l.value&&(n(l),t++)}return t}()){const e=document.querySelector(".js-profile").dataset.email;C+=`email: ${e} \n`;const n=document.querySelector(".user-name").innerText;C+=`name:${n} \n`;const s=document.querySelectorAll(".shopping-list-card__title"),o=Array.from(s);for(let e=0;e<o.length;e++){const t=o[e].textContent;C+=`book:  ${t} \n`}!function(){for(let e of t.entries())if(""!=e[1]){C+=` ${e.join(" : ")}\n`;document.querySelector(".user-name").innerText,document.querySelector(".thanks-page-name")}}(),w.default.post("https://api.telegram.org/bot6279094717:AAEINNI-WB8PTYW-nQglKgNdX6lALH6T6A0/sendMessage",{chat_id:"-1001887598395",parse_mode:"html",text:C}).then(q.classList.toggle("is-hiden"),A.classList.toggle("is-hiden"),setTimeout((()=>{const e=document.querySelectorAll(".js-shl-card"),t=Array.from(e);for(let e=0;e<t.length;e++){const n=t[e];n.remove(),(0,l.delBook)(n.dataset.id)}p(),q.classList.toggle("is-hiden"),j.classList.toggle("no-scroll-js")}),7e3))}function n(e){e.classList.add("_error"),e.classList.add("_error")}function s(e){e.classList.remove("_error"),e.classList.remove("_error")}function o(e){return!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(e.value)}}));let C="<b>New order</b>\n";const M={};let N;function B(){N=$.getPlace(),T(N)}const T=e=>{if(!Array.isArray(e.address_components))throw Error("Address Components is not an array");if(!e.address_components.length)throw Error("Address Components is empty");const t=e=>e.types.includes("street_number"),n=e=>e.types.includes("route"),s=e=>!!(e.types.includes("locality")||e.types.includes("sublocality")||e.types.includes("administrative_area_level_3"))||!(!e.types.includes("neighborhood")||!e.types.includes("political"))&&(M.prev_city_component="neighborhood",!0),o=e=>e.types.includes("administrative_area_level_1"),r=e=>e.types.includes("country"),l=e=>e.types.includes("administrative_area_level_2"),i=e=>e.types.includes("postal_code");for(const a of e.address_components){const e=a;t(e)&&(M.street_number=e.long_name),n(e)&&(M.street_name=e.long_name),!s(e)||M.city&&"neighborhood"!==M.prev_city_component||(M.city=e.long_name),r(e)&&(M.country=e.long_name),l(e)&&(M.county=e.long_name),o(e)&&(M.state=e.long_name),i(e)&&(M.postal_code=e.long_name)}return e.types.includes("locality")?M.type="city":e.types.includes("administrative_area_level_1")?M.type="state":e.types.includes("street_address")||e.types.includes("route")||e.types.includes("premise")?M.type="street_address":e.types.includes("lcountry")?M.type="country":M.type=null,M.formatted_address=e.formatted_address,M};s("7hKzD"),s("4jEcb"),s("k0tN7"),s("kvC6y"),s("6m2hf");const D=document.querySelector(".shopping-list"),I=document.querySelector(".menu-shopping-list");D.classList.add("active"),I.classList.add("active")}();
//# sourceMappingURL=shopping-list.7dbf37eb.js.map