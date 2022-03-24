var today;
								var hour;
								var minute;
								var second;
								var batCharge, batLevFull;
								var run2 = 0;
								var clicks = 0;
								var daytime = "am";
								var altBody = document.getElementById("alt-body");
								var homeApps = document.getElementById("h-apps");
								var batBar = document.getElementById("battery-bar");
								var dime = document.getElementById("time-display");
								var daydime = document.getElementById("daytime-display");
								var battery = document.getElementById("battery-display")
								var batLev;
								var showBatLev = setInterval(function() {
								navigator.getBattery(). then(function(battery) {
												batLev = Math. floor(battery.level * 100);
												batCharge = battery.charging;
												batLevFull = battery.level * 100;
								});
								battery.innerHTML = batLev + "%";
								var checkLowBattery = setInterval(event => {run2++; if (batLev <= 15) {if (run2 < 2) {alert("WARNING: Low Battery!");} }else {run2 = 0;}}, 250)
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
								function makeApp() {
									var appBody = document.createElement("div");
									var appLogo = new Image();
									appLogo.src = "gfgd";
									appBody.append(appLogo);
									appBody.innerHTML = "Hi";
									homeApps.append(appBody);
								}
								makeApp();
								makeApp();
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
								var googleBar = document.getElementById("search-bar");
								var barImg = document.getElementById("search-image");
								var barYt = document.getElementById("search-yt");
                var backBtn = document.getElementById("back-button");
                backBtn.addEventListener("click", function() {
                  window.location.assign("/WaterOS/index.html");
                })
								barYt.addEventListener("click", function() {
												window.location.assign("https://www.youtube.com ");
								})
								barImg.addEventListener("click", function() {
												window.location.assign("https://www.google.com");
								})
								var run = run1 = 0;
								var timeTrue = false;
								var thresholdX, thresholdY;
								var timeOut = 250;
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
									 				thresholdX = window.innerWidth * 0.30;
									 								thresholdY = window.innerHeight * 0.30;
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
												if (prevcoord.x + thresholdX < coord.x) {
												swipeDirection = "right";
												} if (prevcoord.x - thresholdX > coord.x) {
												swipeDirection = "left";
												} if (prevcoord.y + thresholdY < coord.y) {
												swipeDirection = "down";
												} if (prevcoord.y - thresholdY > coord.y) {
												swipeDirection = "up";
												} if (prevcoord.y < 35 && prevcoord.y + thresholdY < coord.y) {
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
												if (prevcoord.x + thresholdX < coord.x) {
												swipeDirection = "right";
												} if (prevcoord.x - thresholdX > coord.x) {
												swipeDirection = "left";
												} if (prevcoord.y + thresholdY < coord.y) {
												swipeDirection = "down";
												} if (prevcoord.y - thresholdY > coord.y) {
												swipeDirection = "up";
												} if (prevcoord.y < 35 && prevcoord.y + thresholdY < coord.y) {
																swipeDirection = "stateUp"
												}
												}
												})
								})
								var checkDirection = setInterval(function() {
								if (1 == 0) {
																if (run < 1) {
																run++;
																				window.location.assign("/index.html");
																}
												}
												if (swipeDirection == "stateDown") {
																if (run1 < 1) {
																run1++;
																				window.location.assign("");
																}
												}
								}, 100)
