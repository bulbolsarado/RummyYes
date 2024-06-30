// // 复制的方法
// function copyText(text, callback) { // text: 要复制的内容， callback: 回调
// 	var tag = document.createElement('input');
// 	tag.setAttribute('id', 'cp_hgz_input');
// 	tag.value = text;
// 	document.getElementsByTagName('body')[0].appendChild(tag);
// 	document.getElementById('cp_hgz_input').select();
// 	document.execCommand('copy');
// 	document.getElementById('cp_hgz_input').remove();
// 	if (callback) { callback(text) }
// }
// //获取get参数的方法
// function getQueryVariable(variable) {
// 	var query = window.location.search.substring(1);
// 	var vars = query.split("&");
// 	for (var i = 0; i < vars.length; i++) {
// 		var pair = vars[i].split("=");
// 		if (pair[0] == variable) { return pair[1]; }
// 	}
// 	return ("");
// }

// function setUrl(){
// 				let codeid;
// 				if(location.search.indexOf('re=')<0){
// 					const host=location.host
// 					for(let i in urlData){
// 						if(host.indexOf(i)>=0){
// 							codeid=urlData[i].channel_id
// 						}
// 					}
// 				}
// 				return codeid||''
// }
// async function DownSoft() {
// 	var u = navigator.userAgent;
// 	//iOS
// 	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
// 	//Android
// 	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;

// 	//begin get channel code from clipboarad
// 	let gameId = getQueryVariable("from_gameid")
// 	let code = getQueryVariable("channelCode")
// 	let copyObj = {
// 		from_gameid:gameId,
// 		channelCode: code
// 	}
// 	let copyStr = JSON.stringify(copyObj)
// 	copyText(copyStr, function () { console.log('copy successful', copyStr) })

// 	//end get channel code from clipboarad

// 	if (isiOS) {
// 		window.location.href = "https://ogoea.cg243x8n.com/api/c/hijhdndh"		
// 	}
// 	else if (isAndroid) {
// 	 window.location.href = "https://appsvip.s3.ap-south-1.amazonaws.com/RummyVIP.apk"

// 	}
// 	else {
// 		window.location.href = "https://appsvip.s3.ap-south-1.amazonaws.com/RummyVIP.apk"
// 	}
// }

document.addEventListener('DOMContentLoaded', function() {
    // Function to detect device type
    function detectDevice() {
		const userAgent = navigator.userAgent || navigator.vendor || window.opera;
		if (/android/i.test(userAgent)) {
			return 'android';
		}
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			return 'ios';
		}
		return 'unknown';
	}

    // Function to copy text to clipboard
    function copyText(text, callback) {
		var tag = document.createElement("input");
		tag.setAttribute("id", "cp_hgz_input");
		tag.value = text;
		document.getElementsByTagName("body")[0].appendChild(tag);
		document.getElementById("cp_hgz_input").select();
		document.execCommand("copy");
		document.getElementById("cp_hgz_input").remove();
		if (callback) {
			callback(text);
		}
	}

    // Function to get query parameters from URL
    function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			if (pair[0] === variable) {
				return pair[1];
			}
		}
		return "";
	}

    // Function to handle software download based on device type
    async function DownSoft() {
		console.log("DownSoft function called");
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		var androidUrl = "https://path-to-android-download.com"; // Replace with actual URL
		var iosUrl = "https://path-to-ios-download.com"; // Replace with actual URL
	
		// Detect if the user is on iOS
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			console.log("iOS detected, redirecting to iOS download URL");
			window.location.href = iosUrl;
		} else if (/android/i.test(userAgent)) {
			console.log("Android detected, redirecting to Android download URL");
			window.location.href = androidUrl;
		} else {
			alert("Unsupported platform. Please use an Android or iOS device.");
		}
		// var u = navigator.userAgent;
		// var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		// var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
	
		// let gameId = getQueryVariable("from_gameid");
		// let code = getQueryVariable("channelCode");
		// let copyObj = {
		// 	from_gameid: gameId,
		// 	channelCode: code,
		// };
		// let copyStr = JSON.stringify(copyObj);
		// copyText(copyStr, function () {
		// 	console.log("Copy successful", copyStr);
		// });
	
		// if (isiOS) {
		// 	window.location.href = "https://zbgmg.hjfoycmy.com/api/c/xttclkk8"; // Replace with your iOS download URL
		// } else if (isAndroid) {
		// 	window.location.href = "https://appsvip.s3.ap-south-1.amazonaws.com/rummmytry.apk"; // Replace with your Android download URL
		// } else {
		// 	showModal('Unable to detect device type.');
		// }
	} DownSoft();

    // Modal handling (assuming you have a modal with id 'myModal')
    const modal = document.getElementById('myModal');
    const modalMessage = document.getElementById('modalMessage');
    const span = document.getElementsByClassName('close')[0];

    function showModal(message) {
		const modal = document.getElementById('myModal');
		const modalMessage = document.getElementById('modalMessage');
		modalMessage.textContent = message;
		modal.style.display = "block";
	}

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        };
    } else {
        console.error('Span element with class "close" not found.');
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Event listeners for download buttons (assuming you have buttons with these ids)
    const androidButton = document.getElementById('androidDownload');
    const androidtopButton = document.getElementById('androidtopDownload');
    const androidbottomButton = document.getElementById('androidbottomDownload');
    const iosButton = document.getElementById('iosDownload');

    if (androidButton) {
        androidButton.addEventListener('click', function() {
            const device = detectDevice();
            if (device === 'android') {
                DownSoft();
            } else if (device === 'ios') {
                showModal('Your phone is an iOS device. Please choose the iOS download button.');
            } else {
                showModal('Unable to detect device type.');
            }
        });
    } 

    if (androidtopButton) {
        androidtopButton.addEventListener('click', function() {
            const device = detectDevice();
            if (device === 'android') {
                DownSoft();
            } else if (device === 'ios') {
                showModal('Your phone is an iOS device. Please choose the iOS download button.');
            } else {
                showModal('Unable to detect device type.');
            }
        });
    } 

    if (androidbottomButton) {
        androidbottomButton.addEventListener('click', function() {
            const device = detectDevice();
            if (device === 'android') {
                DownSoft();
            } else if (device === 'ios') {
                showModal('Your phone is an iOS device. Please choose the iOS download button.');
            } else {
                showModal('Unable to detect device type.');
            }
        });
    } 

    if (iosButton) {
        iosButton.addEventListener('click', function() {
            const device = detectDevice();
            if (device === 'ios') {
                DownSoft();
            } else if (device === 'android') {
                showModal('Your phone is an Android device. Please choose the Android download button.');
            } else {
                showModal('Unable to detect device type.');
            }
        });
    } 
});


