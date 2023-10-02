//LANGUAGES

const ruLng = document.querySelector('.lng-ru');
const enLng = document.querySelector('.lng-en');
const allLang = ['en', 'ru'];
const roastedInfo = document.querySelector('.lng-roasted-info');

ruLng.addEventListener('click', changeURLLanguageRu);
enLng.addEventListener('click', changeURLLanguageEn);

function changeURLLanguageRu(){
    let lang = allLang[1];
    location.href = window.location.pathname + '#' + lang;
}

function changeURLLanguageEn(){
    let lang = allLang[0];
    location.href = window.location.pathname + '#' + lang;
}

function changeLanguage(){
    ruLng.onclick = () => {
        for (let key in langArr){
            document.querySelector('.lng-' + key).innerHTML = langArr[key]['ru'];
        }
        roastedInfo.style = 'font-size: 16px';
    };

    enLng.onclick = () => {
        for (let key in langArr){
            document.querySelector('.lng-' + key).innerHTML = langArr[key]['en'];
        }
    };
}

changeLanguage();