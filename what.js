const attchedMaterial =document.getElementById('attchedMaterial');
const attachFileLink =document.getElementById('attachFileLink');
const emojiFile =document.getElementById('emojiFile');
const emojiFileshow =document.getElementById('watEmojiFile')
    


attachFileLink.addEventListener("click", function(){
    attchedMaterial.classList.toggle('attchedMaterialShow');
});

emojiFile.addEventListener("click", function(){
    emojiFileshow.classList.toggle('showEmojiFile');
})

document.addEventListener('DOMContentLoaded', function () {
    const place = document.querySelector('.attchedMaterialEmoji')
    console.log(place)
    
    let url = "https://unpkg.com/emoji.json@14.0.0/emoji.json";
    
    async function show(){
        let data = await fetch(url);
        let showData = await data.json(url);
        // console.log(showData)
        showData.length=100;
          let list="";
        for(let i = 0 ; i < showData.length;i++){
            console.log(showData[i])
           list+=`
           <li>${showData[i].char}</il>
           `
        }
        place.innerHTML = list;
        
    }
    show()
    });
         
  