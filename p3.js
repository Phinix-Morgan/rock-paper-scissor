const choices=document.querySelectorAll(".choice");

let msg=  document.querySelector("#msg");
let reset=  document.querySelector("#reset");


let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let d_com_score =document.querySelector("#d_com_score");
let d_user_score =document.querySelector("#d_user_score");




var com_score =0;
var user_score =0;



//generating computer choise
const bot=()=>{
	const option=["rock","paper","scissor"]
	var x=Math.floor(Math.random()*3);
	return option[x];
	
};

//draw game
const draw_game=()=>{

	console.log("game was draw");
	msg.innerText="game draw";
};



//update score
const update_user_score = ()=>{
	user_score++;
};
const update_com_score = ()=>{
	com_score++;
};



//show winner
const showWinner = (user_win) =>{
	if (user_win) {
		console.log("user win ");
		d_user_score.innerText = user_score;
		msg.innerText="You Win";
	}
	else {
		console.log("comkputer win ");
		d_com_score.innerText = com_score;
		msg.innerText="Bot Win";
	}
};



const playgame =(user_choice)=>{
	//computer choice
	const com_choise =bot();
	var user_win =true;
		if(com_choise===user_choice){
			draw_game();
			console.log("user choice ",user_choice);
			console.log("computer choice ",com_choise);
			console.log("computer score ",com_score);
			console.log("user score ",user_score);
			
		}
		else if(com_choise==="rock" && user_choice==="scissor" ||
			com_choise==="paper" && user_choice==="rock" || 
		com_choise==="scissor" && user_choice==="paper"){
		console.log("user choice ",user_choice);
			console.log("computer choice ",com_choise);
			user_win=false;
			update_com_score();
			console.log("computer score ",com_score);
			console.log("user score ",user_score);
			showWinner(user_win);
		}
		else{
			user_win =true;
			console.log("user choice ",user_choice);
			console.log("computer choice ",com_choise);
			
			update_user_score();
			console.log("user score ",user_score);
			console.log("computer score ",com_score);
			showWinner(user_win);
		}
		
 };







//user choise 
choices.forEach((choice) => {
	//console.log(choice);
	choice.addEventListener("click",() => {
		const choiceId =choice.getAttribute("id");
		const user_choice =choiceId;
	
		//console.log("choice clicked",user_choice);
		playgame(user_choice);


})});

const resetGame=()=>{
	com_score=0;
	user_score=0;
	msg.innerText="Play Your Move:";
	d_com_score.innerText=0;
	d_user_score.innerText=0;
	console.log("reset game ");
};
reset.addEventListener("click",resetGame);
