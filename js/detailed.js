    let singlePageTitle = document.querySelector('.card-detailed__ttile')
    let singleImg = document.querySelector('.card-detailed__img')
    let singleText = document.querySelector('.card-detailed__desc')

function renderCard(){
    let cardId = JSON.parse(localStorage.getItem('cardId'))
    let Cards = JSON.parse(localStorage.getItem('cardData'))

    Cards.map(element => {
    if(element.id === cardId)  {
        singleImg.setAttribute('src', `https://ayyubxon.pythonanywhere.com/${element.img}`)
        singleImg.setAttribute('alt', "Чистый дом")
        singlePageTitle.innerHTML = element.title
        singleText.innerHTML = element.description
    }
    });
}
renderCard()
