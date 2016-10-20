function shake8Ball() 
{
    //Replace Magic 8 Ball with another image
    document.getElementById("imageReplace").src = "Images/ball-back.png";
    
    //Generate random numbers between 1-20
    var num = Math.floor((Math.random() * 19) + 1);
    
    //Array of actual Magic 8 Ball responces
    var statement = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"]
   
    
    //display responces to Magic 8 Ball
    document.getElementById("text").innerHTML = statement[num - 1]
       
}
