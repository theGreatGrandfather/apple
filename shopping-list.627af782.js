var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,s.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=s);var o=s("eyjy7"),i=s("ftYLF"),r=s("a0qxx"),l=s("2ix2C"),a=s("7Y9D8"),c=s("gjiCh");const d=document.querySelector(".confirm__btn"),p={defaultMarkup:document.getElementById("js-shl-default-container"),bookListEl:document.getElementById("js-shl-booklist")},u=()=>{p.defaultMarkup.style.display="flex",d.classList.add("is-hiden"),a.Notify.info("There are no books in your list yet...")},_=e=>{if(!e.target.classList.contains("js-shl-del-btn"))return;const t=e.target.closest(".js-shl-card"),n=t.dataset.id;t.remove(),(0,r.delBook)(n),p.bookListEl.children.length||u()},m=e=>{p.defaultMarkup.style.display="none";const t=(e=>e.map((({id:e,data:{img:t,title:n,listname:s,description:o,author:i,amazonLink:r,appleLink:l,barnesLink:a}})=>`<li class="shopping-list__item shopping-list-card js-shl-card" data-id='${e}'>\n          <img\n            class="shopping-list-card__image"\n            src="${t}"\n            alt="${n}"\n          />\n          <div class="shopping-list-card__info">\n            <h2 class="shopping-list-card__title">${n}</h2>\n            <p class="shopping-list-card__category">${s}</p>\n            <p class="shopping-list-card__descr">\n            ${o}\n            </p>\n            <div class="shopping-list-card__wrapper">\n              <p class="shopping-list-card__author">${i}</p>\n              <div class="shopping-list-card__links">\n                <a\n                  href="${r}"\n                  target="_blank"\n                  class="shopping-list-card__link --amazon _link amazon-link"\n                  \n                ></a>\n                <a\n                  href="${l}"\n                  target="_blank"\n                  class="shopping-list-card__link --apple _link apple-link"\n                  \n                ></a>\n                <a\n                  href="${a}"\n                  target="_blank"\n                  class="shopping-list-card__link --barnes _link"\n                ></a>\n              </div>\n            </div>\n            <button class="shopping-list-card__button js-shl-del-btn" type="button">\n              <svg\n                class="shopping-list-card__button--icon"\n                xmlns="http://www.w3.org/2000/svg"\n                width="16"\n                height="16"\n                viewBox="0 0 16 16"\n                fill="none"\n              >\n                <path\n                  d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333"\n                  stroke="white"\n                  stroke-linecap="round"\n                  stroke-linejoin="round"\n                />\n              </svg>\n            </button>\n          </div>\n        </li>`)).join(""))(e);p.bookListEl.insertAdjacentHTML("beforeend",t),p.bookListEl.addEventListener("click",_)},g=(0,o.getAuth)(l.app),y=(0,i.getFirestore)(l.app);(0,o.onAuthStateChanged)(g,(async e=>{if((0,c.loaderOn)(),e){const t=e.email,n=await(0,i.getDocs)((0,i.collection)(y,t)),s=[];if(n.forEach((e=>{const t={id:e.id,data:e.data()};s.push(t)})),!s.length)return u();d.classList.remove("is-hiden"),m(s)}else a.Notify.info("Please Sign-In/Sign-Up");(0,c.loaderOff)()})),s("h0Nss"),s("4Z4PC"),s("e3Z2B");const h=document.querySelector("body"),f=document.querySelector(".modal__form__backdrop"),b=document.querySelector(".form__button_submit"),v=document.querySelector(".modal__form__close__bt"),k=document.querySelector(".modal__form__backdrop"),L=e=>{e.target===e.currentTarget&&S()},w=e=>{S()},E=e=>{"Escape"===e.key&&S()},S=()=>{h.classList.toggle("no-scroll-js"),f.classList.toggle("is-hiden"),document.removeEventListener("keydown",E),k.removeEventListener("click",L),v.removeEventListener("click",w)};b.addEventListener("click",(e=>{e.preventDefault(),h.classList.toggle("no-scroll-js"),f.classList.toggle("is-hiden"),document.addEventListener("keydown",E),v.addEventListener("click",w),k.addEventListener("click",L)})),s("6J4zK");var q=s("2shzp");s("ftYLF");const j=document.querySelector(".modal__form__thanks"),A=document.querySelector(".modal__form__backdrop"),x=document.querySelector("body");let C;!function(){const e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW-p4nZpSUbbOWr0MdEUruheMS1uooSQw&libraries=places&callback=initAutocomplete",e.async=!0,e.defer=!0,window.initAutocomplete=function(){C=new google.maps.places.Autocomplete(document.getElementById("pac-input"),{types:["address"],componentRestrictions:{country:["us"]}}),C.addListener("place_changed",B)};const t=document.getElementById("google-maps-script");t.parentNode.insertBefore(e,t)}();const $=document.querySelector(".modal__form");$.addEventListener("submit",(async function(e){e.preventDefault();const t=new FormData($);if(t.append("object",T.formatted_address),0===function(e){let t=0,i=document.querySelectorAll("._req-big");for(let e=0;e<i.length;e++){const r=i[e];s(r),r.classList.contains("_req-big-tel")?o(r)&&(n(r),t++):""===r.value&&(n(r),t++)}return t}()){const e=document.querySelector(".js-profile").dataset.email;M+=`email: ${e} \n`;const n=document.querySelector(".user-name").innerText;M+=`name:${n} \n`;const s=document.querySelectorAll(".shopping-list-card__title"),o=Array.from(s);for(let e=0;e<o.length;e++){const t=o[e].textContent;M+=`${t} \n`}!function(){for(let e of t.entries())if(""!=e[1]){M+=` ${e.join(" : ")}\n`;document.querySelector(".user-name").innerText;const t=document.querySelector(".thanks-page-name");console.log("thanksPageName",t)}}(),q.default.post("https://api.telegram.org/bot6279094717:AAEINNI-WB8PTYW-nQglKgNdX6lALH6T6A0/sendMessage",{chat_id:"-1001887598395",parse_mode:"html",text:M}).then(j.classList.toggle("is-hiden"),A.classList.toggle("is-hiden"),setTimeout((()=>{j.classList.toggle("is-hiden"),x.classList.toggle("no-scroll-js"),window.location.href="https://thegreatgrandfather.github.io/apple/index.html"}),8e3))}function n(e){e.classList.add("_error"),e.classList.add("_error")}function s(e){e.classList.remove("_error"),e.classList.remove("_error")}function o(e){return!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(e.value)}}));let M="<b>New order</b>\n";const T={};let N;function B(){N=C.getPlace(),D(N)}const D=e=>{if(!Array.isArray(e.address_components))throw Error("Address Components is not an array");if(!e.address_components.length)throw Error("Address Components is empty");const t=e=>e.types.includes("street_number"),n=e=>e.types.includes("route"),s=e=>!!(e.types.includes("locality")||e.types.includes("sublocality")||e.types.includes("administrative_area_level_3"))||!(!e.types.includes("neighborhood")||!e.types.includes("political"))&&(T.prev_city_component="neighborhood",!0),o=e=>e.types.includes("administrative_area_level_1"),i=e=>e.types.includes("country"),r=e=>e.types.includes("administrative_area_level_2"),l=e=>e.types.includes("postal_code");for(const a of e.address_components){const e=a;t(e)&&(T.street_number=e.long_name),n(e)&&(T.street_name=e.long_name),!s(e)||T.city&&"neighborhood"!==T.prev_city_component||(T.city=e.long_name),i(e)&&(T.country=e.long_name),r(e)&&(T.county=e.long_name),o(e)&&(T.state=e.long_name),l(e)&&(T.postal_code=e.long_name)}return e.types.includes("locality")?T.type="city":e.types.includes("administrative_area_level_1")?T.type="state":e.types.includes("street_address")||e.types.includes("route")||e.types.includes("premise")?T.type="street_address":e.types.includes("lcountry")?T.type="country":T.type=null,T.formatted_address=e.formatted_address,T};s("epHO8"),s("6J4zK"),s("5FnTc"),s("gjiCh");
//# sourceMappingURL=shopping-list.627af782.js.map
