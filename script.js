const data = [
    {
      image: './img/drink.jpg',
      text: "I'm Thirsty"
    },
    {
      image: './img/food.jpg',
      text: "I'm Hungry"
    },
    {
      image: './img/tired.jpg',
      text: "I'm Tired"
    },
    {
      image: './img/hurt.jpg',
      text: "I'm Hurt"
    },
    {
      image: './img/happy.jpg',
      text: "I'm Happy"
    },
    {
      image: './img/angry.jpg',
      text: "I'm Angry"
    },
    {
      image: './img/sad.jpg',
      text: "I'm Sad"
    },
    {
      image: './img/scared.jpg',
      text: "I'm Scared"
    },
    {
      image: './img/outside.jpg',
      text: 'I Want To Go Outside'
    },
    {
      image: './img/home.jpg',
      text: 'I Want To Go Home'
    },
    {
      image: './img/school.jpg',
      text: 'I Want To Go To School'
    },
    {
      image: './img/grandma.jpg',
      text: 'I Want To Go To Grandmas'
    }
];

const message = new SpeechSynthesisUtterance();


const box_creation = ()=>{
    data.forEach(a=>{
        const box = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');

        p.textContent = a.text;
        img.src=a.image;

        box.setAttribute('class', 'individualBox');

        box.appendChild(img);
        box.appendChild(p);

        box.addEventListener('click',(e)=>{
          console.log(e.target.value)
          message.text = a.text;

          speechSynthesis.speak(message)
        })

        document.querySelector('.xoutput').appendChild(box);
    })
}


const voices = ()=>{
  return new Promise((resolve, reject)=>{
    let voices = speechSynthesis
    let x;
    x = setInterval(()=>{
      if(voices.getVoices().length>1){
        resolve(voices.getVoices());
        clearInterval(x)
      }
    },100)
  })
}

const x = voices();
x.then((a)=>{
  a.forEach(a=>{
    const option = document.createElement('option');
    option.textContent = a.voiceURI;
    document.getElementById('voices').appendChild(option)
  })
});





box_creation();

document.getElementById('togglebox').addEventListener('click',()=>{
  console.log('toggle box')
  document.getElementById('xtextbox').classList.toggle('showbox')
})

document.getElementById('close').addEventListener('click',()=>{
  console.log('toggle box')
  document.getElementById('xtextbox').classList.toggle('showbox')
})