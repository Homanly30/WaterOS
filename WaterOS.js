var today;
								var hour;
								var minute;
								var second;
								var batCharge, batLevFull;
                var run1_2 = 0;
								var clicks = 0;
								var daytime = "am";
								var batBar = document.getElementById("battery-bar");
								var dime = document.getElementById("time-display");
								var daydime = document.getElementById("daytime-display");
								var battery = document.getElementById("battery-display");
								var batLev;
								var altBody = document.getElementById("alt-body");
								altBody.setAttribute("style", "display: hidden;");
								
								var showBatLev = setInterval(function() {
								navigator.getBattery().then(function(battery) {
												batLev = Math. floor(battery.level * 100);
												batCharge = battery.charging;
												batLevFull = battery.level * 100;
								});
                if (localStorage.getItem("noPC") == null) {
                  localStorage.setItem("noPC", "false");
                }
                function noPC() {
                  if (run1_2 < 1 && localStorage.getItem("noPC") == "false") {
                    run1_2++;
                    if (confirm("This OS is made so that you can do all stuff you do on mobile, but by taking the least amount of space from your local storage. For now though, this, only supports devices, that have a touchscreen.(Press ok to never show this dialogue again.)") == true) {
                      localStorage.setItem("noPC", "true");
                    }
                  }
                }
                noPC();
								battery.innerHTML = batLev + "%";
								if (batLev <= 25) {
											if (batCharge == true) {
															batBar.setAttribute("src", "https://i.imgur.com/MuJtiyl.png");
											} else {	batBar.setAttribute("src", "https://i.imgur.com/8iFRDnj.png");
											} 
								}
								
								if (batLev < 50 && batLev >= 25) {
								if (batCharge == true) {
															batBar.setAttribute("src", "https://i.imgur.com/7XMcVOb.png");
											} else {
												batBar.setAttribute("src", "https://i.imgur.com/FHyC8Og.png");
								}
								} 
								if (batLev < 75 && batLev >= 50) {
											if (batCharge == true) {
															batBar.setAttribute("src", "https://i.imgur.com/ih1SeDn.png");
											} else {
												batBar.setAttribute("src", "https://i.imgur.com/Ng49RCb.png");
								}
								} 
								if (batLev >= 75) {
											if (batCharge == true) {
															batBar.setAttribute("src", "https://i.imgur.com/xGojZFq.png");
											} else {
												batBar.setAttribute("src", "https://i.imgur.com/aJipeM1.png");
								}
								}
												}, 1);
								var repdate = setInterval(
								function () {
								today = new Date();
								hour = today.getHours();
								minute = today.getMinutes();
								second = today.getSeconds();
								if (hour / 10 < 1) {
												hour = "0" + hour;
								}
								if (minute / 10 < 1) {
												minute = "0" + minute;
								}
								if (second / 10 < 1) {
												second = "0" + second;
								}
								if (hour >= 12 || hour == 00) {
												if (hour == 12) {
																hour = 12;
																daytime = "pm";
												}
												if (hour == 13) {
																hour = "0" + 1;
																daytime = "pm";
												}
												if (hour == 14) {
																hour = "0" + 2;
																daytime = "pm";
												}
												if (hour == 15) {
																hour = "0" + 3;
																daytime = "pm";
												}
												if (hour == 16) {
																hour = "0" + 4;
																daytime = "pm";
												}
												if (hour == 17) {
																hour = "0" + 5;
																daytime = "pm";
												}
												if (hour == 18) {
																hour = "0" + 6;
																daytime = "pm";
												}
												if (hour == 19) {
																hour = "0" + 7;
																daytime = "pm";
												}
												if (hour == 20) {
																hour = "0" + 8;
																daytime = "pm";
												}
												if (hour == 21) {
																hour = "0" + 9;
																daytime = "pm";
												}
												if (hour == 22) {
																hour = 10;
																daytime = "pm";
												}
												if (hour == 23) {
																hour = 11;
																daytime = "pm";
												}
												if (hour == 00) {
																hour = 12;
																daytime = "am";
												}
								}
								dime.innerHTML = hour + ":" + minute + ":" + second;
								daydime.innerHTML = daytime;
								}, 1);
											
								var run = run1 = run1_1 = 0;
								var timeTrue = false;
								var threshold;
                var doubleClick = false;
								var timeOut = 250;
                var timeOver = false;
                window.addEventListener("click", function() {
                  var setTimeOver = setTimeout(function() {
                    timeOver = true;
                  }, 550)
                  window.onclick = event => {
                    if (timeOver == false) {
                        clearTimeout(setTimeOver);
                      	doubleClick = true;
                    }
                  }
                })
        								var coord = {
												x: undefined,
												y: undefined
								}
								var prevcoord = {
												x: undefined,
												y: undefined
									 }
									 var swipeDirection = "None";
									 window.onload = event => {
									 				setTimeout(function() {
									 								threshold = window.innerHeight * 0.30;
									 				}, 500)
									 }
									 	window.addEventListener("touchstart", function(e) {
									 	 		coord.x = e.touches[0].clientX;
									 	 		coord.y = e.touches[0].clientY;
											coord.x = e.touches[0].clientX;
									 	 		coord.y = e.touches[0].clientY;	prevcoord.x = coord.x;
												prevcoord.y = coord.y;
												timeTrue = false;
												window.addEventListener("touchmove", function(e) {
									 	 		coord.x = e.touches[0].clientX;
									 	 		coord.y = e.touches[0].clientY;
									 	 		setTimeout(function() {
									 	 						timeTrue = true;
									 	 		}, timeOut)
									 	 		if (timeTrue != true) {
									 	 		timeTrue = false;
												if (prevcoord.x + threshold < coord.x) {
												swipeDirection = "right";
												} if (prevcoord.x - threshold > coord.x) {
												swipeDirection = "left";
												} if (prevcoord.y + threshold < coord.y) {
												swipeDirection = "down";
												} if (prevcoord.y - threshold > coord.y) {
												swipeDirection = "up";
												} if (prevcoord.y < 35 && prevcoord.y + threshold < coord.y) {
																swipeDirection = "stateUp"
												}
												}
												})
								})
									 	window.addEventListener("mousedown", function(e) {
									 	 		coord.x = e.clientX;
									 	 		coord.y = e.clientY;
											coord.x = e.clientX;
									 	 		coord.y = e.clientY;	prevcoord.x = coord.x;
												prevcoord.y = coord.y;
												timeTrue = false;
												window.addEventListener("mousemove", function(e) {
									 	 		coord.x = e.clientX;
									 	 		coord.y = e.clientY;
									 	 		setTimeout(function() {
									 	 						timeTrue = true;
									 	 		}, timeOut)
									 	 		if (timeTrue != true) {
									 	 		timeTrue = false;
												if (prevcoord.x + threshold < coord.x) {
												swipeDirection = "right";
												} if (prevcoord.x - threshold > coord.x) {
												swipeDirection = "left";
												} if (prevcoord.y + threshold < coord.y) {
												swipeDirection = "down";
												} if (prevcoord.y - threshold > coord.y) {
												swipeDirection = "up";
												} if (prevcoord.y < 35 && prevcoord.y + threshold < coord.y) {
																swipeDirection = "stateUp"
												}
												}
												})
								})
								var checkDirection = setInterval(function() {
												if (swipeDirection == "up" || doubleClick == true) {
															if (run1 < 1) {
															run1++;
																window.location.assign("/WaterOS/WaterOS_1.html");
												}
												}
												if (swipeDirection == "stateUp") {
																if (run1_1 < 1) {
																run1_1++;
																				window.location.assign("");
																}
												}
												222
								}, 100)
								setInterval(() => {
									console.clear();
								}, 5000)
