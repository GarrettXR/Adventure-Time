alert("Hello welcome to the world of pokemon!")

var name = prompt("What is your name?")

var starter = prompt(`Hello ${name}. It's time to start your adventure so choose your starter and get out there! Type Bulbasaur,Squirtle, or Charmander` )

if (starter === "Bulbasaur" || starter === "Squirtle") {
	alert("This pokemon is very friendly and seems to like you.")
} else if (starter === "Charmander") {
	alert("This pokemon is very aggresive and bites you!")
}

alert("You adventure off with your new partner.")

alert("You encounter a wild mankey!")

var action = prompt("Do you run, defeat it, or capture it? Type run, defeat it, or capture it.")

if (action === "run") {
	alert("The mankey alerts the rest of it's band. They chase you down and beat you to death! Game Over!")
} else if (action === "defeat it") {
	alert("You gain expierence and continue your journey.")

	alert("You continue your adventure and run into a bandit!!! He wants your money!!!")
	
	var conflict = prompt("Will you run away, have your pokemon attack, or steal his gun and shoot him? Type run away, attack, or steal gun.")

	if (conflict === "run away") {
	alert("He shoots you with his gun. It was an instant death. Game Over.")
	} else if (conflict === "attack") {
		alert(`He shoots your ${starter} and you. Game Over.`)
	} else {
		alert("Congrats you survived but are now a wanted fugitive for murder!")

		var criminal = prompt("Do you turn yourself in or stay on the run? Type stay on the run or turn yourself in.")

		if (criminal === "turn yourself in"){
			alert("You end up in prison, and die in a gang fight. Game Over.")
		} else if (criminal === "stay on the run") {
			alert("You end up joining the heinous organization called Team Rocket.")

			var project = prompt(`After surviving many months your ${starter} evolves, and you are recognized of higher skill by the organization. They invite you to work on a big project. Will you join? Type yes or no`)

			if (project === "yes") {
				alert("There was a horrible accident and you caused a nuclear detonation large enough to destroy the world. Game Over.")
			} else if(project === "no") {
				alert("You continue your work as a grunt and eventually get caught and arrested. Game Over")
			}
		}
	  }
} else {
	alert("Congrats on your new friend!")

	alert("You continue your adventure and run into a bandit!!! He wants your money!!!")

	var conflict = prompt("Will you run away, have your pokemon attack, or steal his gun and shoot him? Type run away, attack, or steal gun.")

	if (conflict === "run away") {
		alert("He shoots you with his gun. It was an instant death. Game Over.")
	} else if (conflict === "attack") {
		alert(`He shoots your ${starter} and you. Game Over.`)
	} else {
		alert("Congrats you survived but are now a wanted fugitive for murder!")
		var criminal = prompt("Do you turn yourself in or stay on the run? Type stay on the run or turn yourself in.")

		if (criminal === "turn yourself in"){
			alert("You end up in prison, and die in a gang fight. Game Over.")
		} else if (criminal === "stay on the run") {
			alert("You end up joining the heinous organization called Team Rocket.")

			var project = prompt(`After surviving many months your ${starter} evolves, and you are recognized of higher skill by the organization. They invite you to work on a big project. Will you join? Type yes or no`)

			if (project === "yes") {
				alert("There was a horrible accident and you caused a nuclear detonation large enough to destroy the world. Game Over.")
			} else if (project === "no") {
				alert("You continue your work as a grunt and eventually get caught and arrested. Game Over")
			}
	
		}
	}
}