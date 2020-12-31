let text = [
    'пусть оливье не успеет пропасть, а холодец не успеет скиснуть. Пусть Дед Мороз доберётся до тебя и подарит подарки строго по списку. Поздравляю с Новым годом и от всей души желаю здоровья, веселья и счастья. И помни: никаких неврозов, склерозов и выносов мозга в новом году! Только положительные эмоции, только крутые идеи, только удачные дни! На старт, к новому успеху.',
    'Новый год стучится в двери, а это значит, что пора пинком под зад отправить все проблемы, запастись охапками продуктов и с широкою, довольною улыбкой набираться позитива. Улыбайтесь же и веселитесь, гоните в шею все дурные мысли! Как шампанское, бурлите от радости и мечтайте о великих перспективах!',
    'с Новым годом! Пусть к чёрту катятся все проблемы! Пусть трезвый Дед Мороз подарит опьяняющее счастье трезвой реальности! Желаю крутых подъёмов в новом году, максимальных доходов, желаемых результатов в делах и невероятно страстных чувств в отношениях!',
    'пусть в новом году будет счастья немерено. Пусть не будет ни одной минуты зря потеряно. Пусть любовь доводит до сладкого головокружения, пусть не будет чувства усталости и изнеможения. Поздравляю с Новым годом! Пусть он избавит от всех «оленей» на пути и подарит вечное состояние радости.',
    'Хэппи нью йиа! Ну, если непонятно — с Новым годом! Желаю больших бабосов и лёгких путей к успеху, будто ты идёшь по гладкому асфальту в кроссах. Пусть новый год будет бомбически прекрасным и эпически счастливым. Желаю провести его без кашля и соплей, желаю двигаться к мечтам энергичней и быстрей',
         
]

const getRandom = () =>{
    let rand = Math.floor((Math.random()*10));
    return rand;
}

let injElem = document.querySelector('.content');
console.log(getRandom())

class Postcard {
    constructor(options){
        this.$post = document.createElement('div');
        this.$post.classList.add('widnow-2');
        this.$post.innerHTML=` <div class="title">
        <h2 style="text-align: center;">С НОВЫМ ГОДОМ!</h2>
        <span class="close"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg></i></span>
        </div> 
        <div class="postcard_text">
           <strong>${options.name}, </strong>${options.text}
        </div>
        <div style=" background: url('images/gifts/${options.img}.gif') no-repeat center;" class="postcard_img">
           
        </div>
        <input type="submit" class="btn btn-back" value="ИЗМЕНИТЬ ИМЯ">
        `;
        

    }
    generate(){
        injElem.appendChild(this.$post)
    }
    hide(){
        this.$post.classList.add('hide');
    }
    
}
function initClick(){
    let hide = document.querySelector('.window-1');
    let name = document.querySelector('.inp').value;
    hide.classList.add('hide');
    let happy = new Postcard({
        text:text[getRandom()],
        img:getRandom(),
        name
    })
    
    happy.generate();

}
let send = document.getElementById('send');

send.addEventListener('click',event=>{
    event.preventDefault();
    initClick();

})
let close = document.querySelector('.close');

send.addEventListener('click',event=>{
    event.preventDefault();
   

})

