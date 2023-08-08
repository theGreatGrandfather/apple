import axios from "axios";

const TOKEN = '6279094717:AAEINNI-WB8PTYW-nQglKgNdX6lALH6T6A0';
const CHAT_ID = '-1001887598395';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let autocomplete;
function loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDW-p4nZpSUbbOWr0MdEUruheMS1uooSQw&libraries=places&callback=initAutocomplete`;
    script.async = true;
    script.defer = true;

    window.initAutocomplete = function () {
        autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('pac-input'),
        {
            types: ['address'],
            componentRestrictions: { country: ["us"] },
        });
    autocomplete.addListener('place_changed', onPlaceChange);
    };
    const scriptTag = document.getElementById('google-maps-script');
    scriptTag.parentNode.insertBefore(script, scriptTag);
}

loadGoogleMapsScript();

const bigForm = document.querySelector('.modal__form');
bigForm.addEventListener('submit', modalFormSubmit);

    function ban(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
    }
    if(event.keyCode == 37) {
        event.preventDefault();
    }
    if(event.keyCode == 38) {
        event.preventDefault();
    }
    if(event.keyCode == 39) {
        event.preventDefault();
    }
    if(event.keyCode == 40) {
        event.preventDefault();
    }
};
async function modalFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(bigForm);
    formData.append('object', address.formatted_address);
    let error = formValidate(bigForm);
    if (error === 0) {
        let messageToTg = `<b>New order</b>\n`;
        function sendMessage() {
            for (let entry of formData.entries()) {
                if (entry[1] != '') {
                    messageToTg += ` ${entry.join(" : ")}\n`;
                }
            }
            return messageToTg;
        };
        sendMessage();
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: messageToTg,
        }).then(
            console.log('then')
        );
    }
    function formValidate(bigForm) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-big');
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if (input.classList.contains('_req-big-tel')) {
                if (telTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.classList.remove('_error');
        input.classList.remove('_error');
    }
    function telTest(input) {
        return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(input.value);
    }
};


const address = {};
 

let place;

function onPlaceChange() {
    place = autocomplete.getPlace();
    parseAddress(place);

}

const parseAddress = (place) => {
    if (!Array.isArray(place.address_components)) {
        throw Error('Address Components is not an array')
    }
    if (!place.address_components.length) {
        throw Error('Address Components is empty')
    }
    const isStreetNumber = (component) => {
        return component.types.includes('street_number')
    }
    const isStreetName = (component) => {
        return component.types.includes('route')
    }
    const isCity = (component) => {
        if (component.types.includes('locality') || component.types.includes('sublocality') ||
            component.types.includes('administrative_area_level_3')) {
            return !0
        } else if (component.types.includes('neighborhood') && component.types.includes('political')) {
            address.prev_city_component = 'neighborhood'; return !0
        } else { return !1 }
    }
    const isState = (component) => {
        return component.types.includes('administrative_area_level_1')
    }
    const isCountry = (component) => {
        return component.types.includes('country')
    }
    const isCounty = (component) => {
        return component.types.includes('administrative_area_level_2')
    }
    const isPostalCode = (component) => {
        return component.types.includes('postal_code')
    }
    const isStreetAddress = (component) => {
        return component.types.includes('street_address')
    }
        

    for (const addressComponent of place.address_components) {
        const component = addressComponent;
        if (isStreetNumber(component)) {
            address.street_number = component.long_name
        }
        if (isStreetName(component)) {
            address.street_name = component.long_name
        }
        if (isCity(component) && (!address.city || address.prev_city_component === 'neighborhood')) {
            address.city = component.long_name
        }
        if (isCountry(component)) {
            address.country = component.long_name
        }
        if (isCounty(component)) {
            address.county = component.long_name
        }
        if (isState(component)) {
            address.state = component.long_name
        }
        if (isPostalCode(component)) {
            address.postal_code = component.long_name
        }
    }
    if (place.types.includes('locality')) {
        address.type = 'city'
    } else if (place.types.includes('administrative_area_level_1')) {
        address.type = 'state'
    } else if (place.types.includes('street_address') || place.types.includes('route') || place.types.includes('premise')) {
        address.type = 'street_address'
    } else if (place.types.includes('lcountry')) {
        address.type = 'country'
    } else {
        address.type = null
    }
    address.formatted_address = place.formatted_address;

    return address
}
