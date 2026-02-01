        let score=20;
        let highscore=0;
    // console.log(document.querySelector("#pnlMessage").textContent);

    var sicret_number=Math.trunc(Math.random()*20)+1;
    console.log(sicret_number)

    document.querySelector("#pnlMessage").textContent="wich number";
        //document.querySelector('.number1').textContent=13;
    //console.log(document.querySelector('#txtGuess').value);
       // document.querySelector('#txtGuess').value=17;
        
        
        document.querySelector('.check').addEventListener('click',function () 
  {
        const guess2 = Number(document.querySelector('#txtGuess').value);
        console.log(guess2,typeof guess2);
        
        if (!guess2)
    {
        document.querySelector('#pnlMessage').textContent='NO NUMBER !'
    }
        else if (guess2===sicret_number)
    {
        document.querySelector('#pnlMessage').textContent='congratulate'
        document.querySelector("body").style.backgroundColor='green';
        document.querySelector(".number1").style.width='30rem';
        document.querySelector('.number1').textContent=sicret_number;
        
        if(score>highscore)
    {
        highscore=score;
    }
        document.querySelector('.highscore').textContent=highscore;
    }
        else if (guess2>sicret_number){
            document.querySelector('#pnlMessage').textContent='too high'
            score--
        }
        else if (guess2<sicret_number){
            document.querySelector('#pnlMessage').textContent='too Low'
            score--
        }
        if (score==0){

            document.querySelector('.score').textContent='You are lost'
        }
        else
             document.querySelector('.score').textContent=score;
    });


    document.querySelector('.again').addEventListener('click',function(){
        score=20;
        var sicret_number1=Math.trunc(Math.random()*20)+1;
    console.log(sicret_number1)
    document.querySelector('#pnlMessage').textContent='start messaging ...'
    //document.querySelector('.score').textContent=score;
    document.querySelector('.number1').textContent='?'
    document.querySelector('#txtGuess').value='';
    document.querySelector("body").style.backgroundColor='white'
        sicret_number=sicret_number1;
 })