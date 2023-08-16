// Left Right Indication of a songs lists
let pop_left = document.getElementById("pop_left");
let pop_right = document.getElementById("pop_right");
let popart_left = document.getElementById("popart_left");
let popart_right = document.getElementById("popart_right");
let pop_songs = document.getElementsByClassName("pop_songs")[0];
let items = document.getElementsByClassName("items")[0];
pop_right.addEventListener('click', () => {
	pop_songs.scrollLeft += 230;
})
pop_left.addEventListener('click', () => {
	pop_songs.scrollLeft -= 230;
})

popart_right.addEventListener('click', () => {
	items.scrollLeft += 230;
})
popart_left.addEventListener('click', () => {
	items.scrollLeft -= 230;
})

// creating an array of songs and posters
const songs = [
	{
		id: 1,
		songName: `Chikni Chammeli<br>
		<div class="subtitle"> Shreya Ghoshal</div>`,
		poster: "1.jpg",
	},

	{
		id: 2,
		songName: `Dreamum Wakeuppam<br>
		<div class="subtitle">Sowmya Raoh</div>`,
		poster: "2.jpg",
	},
	{
		id: 3,
		songName: `Satakli<br>
		<div class="subtitle">Sukhwinder Singh</div>`,
		poster: "3.jpg",
	},
	{
		id: 4,
		songName: `What Jhumka<br>
		<div class="subtitle">Arijit Singh</div>`,
		poster: "4.jpg",
	},
	{
		id: 5,
		songName: `Aaila Re Aalia<br>
		<div class="subtitle">Daler Mehndi</div>`,
		poster: "5.jpg",
	},
	{
		id: 6,
		songName: `Kaavaalaa<br>
		<div class="subtitle">Anirudh Ravichandra</div>`,
		poster: "6.jpg",
	},
	{
		id: 7,
		songName: `Kambakkht Ishq<br>
		<div class="subtitle">Asha Bhosle</div>`,
		poster: "7.jpg",
	},
	{
		id: 8,
		songName: `Pinky<br>
		<div class="subtitle">Mamta Sharma</div>`,
		poster: "8.jpg",
	},
	{
		id: 9,
		songName: `Badaami Rang<br>
		<div class="subtitle">Nikk</div>`,
		poster: "9.jpg",
	},
	{
		id: 10,
		songName: `Teri Bhabi<br>
		<div class="subtitle">Dev Negi</div>`,
		poster: "10.jpg",
	},
	{
		id: 11,
		songName: `EX Calling<br>
		<div class="subtitle">RohanPreet</div>`,
		poster: "11.jpg",
	},
	{
		id: 12,
		songName: `Nayan<br>
		<div class="subtitle">Dhvani Bhanusali</div>`,
		poster: "12.jpg",
	},
	{
		id: 13,
		songName: `Tera Suit<br>
		<div class="subtitle">Tony Kakkar</div>`,
		poster: "13.jpg",
	},
	{
		id: 14,
		songName: `Wah Wai Waah<br>
		<div class="subtitle">Sukhe</div>`,
		poster: "14.jpg",
	},
	{
		id: 15,
		songName: `Mummy Kasam<br>
		<div class="subtitle">Ikka Singh</div>`,
		poster: "15.jpg",
	},
	{
		id: 16,
		songName: `Basanti<br>
		<div class="subtitle">Javed</div>`,
		poster: "16.jpg",
	},
	{
		id: 17,
		songName: `Phulkari<br>
		<div class="subtitle">Karan Randhawa</div>`,
		poster: "17.jpg",
	},
	{
		id: 18,
		songName: `Oey Hoye<br>
		<div class="subtitle">Jassi Gill</div>`,
		poster: "18.jpg",
	},
	{
		id: 19,
		songName: `Goli Maar De<br>
		<div class="subtitle">Asees Kaur</div>`,
		poster: "19.jpg",
	},
	{
		id: 20,
		songName: `Booty Shake<br>
		<div class="subtitle">Tony Kakkar</div>`,
		poster: "20.jpg",
	},
	{
		id: 21,
		songName: `Diamond da challa<br>
		<div class="subtitle">Parmish Verma</div>`,
		poster: "21.jpg",
	},
	{
		id: 22,
		songName: `Kinne Saalan Baad<br>
		<div class="subtitle">Avneet Kaur</div>`,
		poster: "22.jpg",
	},

]


// Adding poster to songitems from a array we have created by fisrt converting all the elements of a songitems into a array and then itertating using a foreach loop;

Array.from(document.getElementsByClassName('songItems')).forEach((e, i) => {
	// adding images 
	e.getElementsByTagName('img')[0].src = songs[i].poster;
	// adidng a song name and artist
	e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});




// Function to toggle play/pause of the song

const music = new Audio();
// Player Play and paused is used here.
let master_play = document.getElementById('master_play');
let master_pause = document.getElementById('master_pause');
let wave = document.getElementById('wave');
master_play.addEventListener('click', () => {
	if (music.paused || music.currentTime <= 0) {
		music.play();
		wave.classList.add('active1')
		master_pause.style.display = "block"
		master_play.style.display = "none"
		Array.from(document.getElementsByClassName('playListPause'))[index - 1].style.display = "block"
		Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.display = "none"

	}
})

master_pause.addEventListener('click', () => {
	music.pause();
	wave.classList.remove('active1');
	master_pause.style.display = "none"
	master_play.style.display = "block"
	Array.from(document.getElementsByClassName('playListPause'))[index - 1].style.display = "none"
	Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.display = "block"

})
function togglePlayPause() {// This function is to controlthings with a space button pause and play
	if (music.paused || music.currentTime <= 0) {
		music.play();
		wave.classList.add('active1')
		master_pause.style.display = "block"
		master_play.style.display = "none"
		Array.from(document.getElementsByClassName('playListPause'))[index - 1].style.display = "block"
		Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.display = "none"
	}

	else {
		music.pause();
		wave.classList.remove('active1');
		master_pause.style.display = "none"
		master_play.style.display = "block"
		Array.from(document.getElementsByClassName('playListPause'))[index - 1].style.display = "none"
		Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.display = "block"

	}
}
document.addEventListener('keydown', (event) => {
	if (event.keyCode === 32) {
		togglePlayPause();
	}
})




// This function actully make all the background to opocaity 0;
const makeAllBackground = () => {
	Array.from(document.getElementsByClassName('songItems')).forEach((elem) => {
		elem.style.background = "rgb(53, 54, 58 , 0)"
	})
}


// This makeAllPause function makes all the button to pause ;

const makeAllPause = () => {
	Array.from(document.getElementsByClassName("playListPlay")).forEach((ele) => {
		ele.style.display = "block"
	})

	Array.from(document.getElementsByClassName("playListPause")).forEach((el) => {
		el.style.display = "none"
	})
}


let index = 0;
let posterplayer = document.getElementById("poster-player");
let title = document.getElementById("title");
//   here we have a classs name called playListPlay in html there wehave a play button with their respetive ids so we are conveting alll the elemets of  playListPlay into an array aand once we click on that elemnet of playListPlay we get theie respective ids  using a elemnt.target.
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
	e.addEventListener('click', (element) => {
		index = element.target.id;
		music.src = `${index}.mp3`;
		music.play();
		posterplayer.src = `${index}.jpg` //Changing a poster according to a song,

		wave.classList.add('active1')
		master_pause.style.display = "block"
		master_play.style.display = "none"


		// here we are filtering a song array and getting only those element whose id matches a songs id.
		let songTitles = songs.filter((ind) => {
			return ind.id == index; // here we are filtering out.
		})
		songTitles.forEach(detail => {
			let { songName, poster } = detail;
			title.innerHTML = songName;
			// posterplayer.src = poster;
		});
		makeAllBackground();  //all the background will change to to the given color 
		Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgb(53, 54, 58 )"  // This make a active song backgrond to given color and rest will be as usual 
		makeAllPause(); //Thuis line make all the button pause 
		Array.from(document.getElementsByClassName('playListPause'))[index - 1].style.display = "block" //this makes al currrnt song  pause button active
		Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.display = "none"  //this makes al currrnt song  pause button inactive or display none;



	})

});

// So whenever this above functionis called makeAllPause()(line222)fisrtly makes all the dislay of play active and pause one to inactive and then makes a current clicked song play pause button active and ianctive repectively  line 225 and line 226 respectively

Array.from(document.getElementsByClassName('playListPause')).forEach((e) => {
	e.addEventListener('click', (element) => {
		index = element.target.id;
		music.src = `${index}.mp3`;
		music.pause();
		posterplayer.src = `${index}.jpg` //Changing a poster according to a song,

		wave.classList.remove('active1')
		master_pause.style.display = "none"
		master_play.style.display = "block"


		// here we are filtering a song array and getting only those element whose id matches a songs id.
		let songTitles = songs.filter((ind) => {
			return ind.id == index; // here we are filtering out.
		})
		songTitles.forEach(detail => {
			let { songName, poster } = detail;
			title.innerHTML = songName;
			// posterplayer.src = poster;
		});
		makeAllBackground();  //all the background will change to to the given color 

		// This make a active song backgrond to given color and rest will be as usual 
		Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgb(53, 54, 58 )"
		Array.from(document.getElementsByClassName('playListPause'))[index - 1].style.display = "none"
		Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.display = "block"

	})

});



let currentStart = document.getElementById('currentStart')
let endStart = document.getElementById('endStart')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
	let music_curr = music.currentTime;
	let music_dur = music.duration;
	let min1 = Math.floor(music_dur / 60)
	let sec1 = Math.floor(music_dur % 60)
	if (sec1 < 10) {
		sec1 = `0${sec1}`
	}
	endStart.innerText = `${min1}:${sec1}`

	let min2 = Math.floor(music_curr / 60)
	let sec2 = Math.floor(music_curr % 60)
	if (sec2 < 10) {
		sec2 = `0${sec2}`
	}
	currentStart.innerText = `${min2}:${sec2}`

	if (music_curr == music_dur) {
		Array.from(document.getElementsByClassName('playListPause'))[index - 1].style.display = "none"
		Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.display = "block";
		wave.classList.remove('active1');
		master_pause.style.display = "none"
		master_play.style.display = "block"
	}

	let progressBar = parseInt((music_curr / music_dur) * 100)
	seek.value = progressBar;
	let seekbar = seek.value;
	bar2.style.width = `${seekbar}%`
	dot.style.left = `${seekbar}%`
});

seek.addEventListener('change', () => {
	music.currentTime = seek.value * music.duration / 100
	bar2.style.transition = "none"
	dot.style.transition = "none"
})


let vol_icon = document.getElementById('vol_icon');
let mute = document.getElementById('mute');
let max = document.getElementById('max');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');



vol.addEventListener('change', () => {
	if (vol.value == 0) {
		mute.style.display = "block"
		vol_icon.style.display = "none"
		max.style.display = "none"
	}

	if (vol.value > 0) {
		vol_icon.style.display = "block"
		mute.style.display = "none"
		max.style.display = "none"

	}

	if (vol.value > 50) {
		max.style.display = "block"
		vol_icon.style.display = "none"
		mute.style.display = "none"
	}

	let vol_a = vol.value;
	vol_bar.style.width = `${vol_a}%`
	vol_dot.style.left = `${vol_a}%`
	music.volume = vol_a / 100;

});




vol_icon.addEventListener('click', () => {
	mute.style.display = "block"
	vol_icon.style.display = "none"
	vol_bar.style.width = 0;
	vol_dot.style.left = 0;
	music.volume = 0;
})

mute.addEventListener('click', () => {
	vol_icon.style.display = "block"
	mute.style.display = "none"
	vol_bar.style.width = "10px";
	vol_dot.style.left = "10px";
	music.volume = .4;
})

let next = document.getElementById('next')
let previous = document.getElementById('previous')


previous.addEventListener('click', () => {
	index -= 1;

	if (index < 1) {
		index = Array.from(document.getElementsByClassName("songItems")).length;
	}
	music.src = `${index}.mp3`;
	music.play();
	posterplayer.src = `${index}.jpg` //Changing a poster according to a song,

	wave.classList.add('active1')
	master_pause.style.display = "block"
	master_play.style.display = "none"
	let songTitles = songs.filter((ind) => {
		return ind.id == index; // here we are filtering out.
	})
	songTitles.forEach(detail => {
		let { songName, poster } = detail;
		title.innerHTML = songName;
		// posterplayer.src = poster;
	});
	makeAllBackground()
	makeAllPause()
	Array.from(document.getElementsByClassName('playListPause'))[index - 1].style.display = "block"
	Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.display = "none"
	Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgb(53, 54, 58 )"
	bar2.style.transition ="none"
		dot.style.transition ="none"
})

next.addEventListener('click', () => {
	index++;

	if (index > Array.from(document.getElementsByClassName("songItems")).length) {
		index = 1;
	}
	music.src = `${index}.mp3`;
	music.play();
	posterplayer.src = `${index}.jpg` //Changing a poster according to a song,

	wave.classList.add('active1')
	master_pause.style.display = "block"
	master_play.style.display = "none"
	let songTitles = songs.filter((ind) => {
		return ind.id == index; // here we are filtering out.
	})
	songTitles.forEach(detail => {
		let { songName, poster } = detail;
		title.innerHTML = songName;
		// posterplayer.src = poster;
	});
	makeAllBackground()
	makeAllPause()
	Array.from(document.getElementsByClassName('playListPause'))[index - 1].style.display = "block"
	Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.display = "none"
	Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgb(53, 54, 58 )"
	bar2.style.transition ="none"
		dot.style.transition ="none"

})



document.addEventListener('keydown', (e) => {
	if (e.keyCode == 39) {
		index++;

		if (index > Array.from(document.getElementsByClassName("songItems")).length) {
			index = 1;
		}
		music.src = `${index}.mp3`;
		music.play();
		posterplayer.src = `${index}.jpg` //Changing a poster according to a song,

		wave.classList.add('active1')
		master_pause.style.display = "block"
		master_play.style.display = "none"
		let songTitles = songs.filter((ind) => {
			return ind.id == index; // here we are filtering out.
		})
		songTitles.forEach(detail => {
			let { songName, poster } = detail;
			title.innerHTML = songName;
			// posterplayer.src = poster;
		});
		makeAllBackground()
		makeAllPause()
		Array.from(document.getElementsByClassName('playListPause'))[index - 1].style.display = "block"
		Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.display = "none"
		Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgb(53, 54, 58 )"

		bar2.style.transition ="none"
		dot.style.transition ="none"
	}

	else if (e.keyCode == 37) {
		index -= 1;
		if (index < 1) {
			index = Array.from(document.getElementsByClassName("songItems")).length;
		}
		music.src = `${index}.mp3`;
		music.play();
		posterplayer.src = `${index}.jpg` //Changing a poster according to a song,

		wave.classList.add('active1')
		master_pause.style.display = "block"
		master_play.style.display = "none"
		let songTitles = songs.filter((ind) => {
			return ind.id == index; // here we are filtering out.
		})
		songTitles.forEach(detail => {
			let { songName, poster } = detail;
			title.innerHTML = songName;
			// posterplayer.src = poster;
		});
		makeAllBackground()
		makeAllPause()
		Array.from(document.getElementsByClassName('playListPause'))[index - 1].style.display = "block"
		Array.from(document.getElementsByClassName('playListPlay'))[index - 1].style.display = "none"
		Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgb(53, 54, 58 )"
		bar2.style.transition ="none"
		dot.style.transition ="none"
	}
})