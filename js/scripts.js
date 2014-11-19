(function() {
	
	var demo = document.querySelector('.localstorage');
	// 檢測瀏覽器是否支援localStorage
	function supportsLocalStorage() {
		return typeof(Storage)!== 'undefined';
	}
	if (!supportsLocalStorage()) {
		demo.value = '你所用的瀏覽器不支援localStorage！';
	} else {
		try {
			// 每隔1秒貯存textarea內容
			setInterval(function() {
				localStorage.setItem('autosave', demo.value);
			}, 1000);
		} catch (e) {
			// 超出localStorage貯存限額時
			if (e == QUOTA_EXCEEDED_ERR) {
				alert('localStorage內存已滿！');
			}
		}
		// 如果localStorage內有數據
		if (localStorage.getItem('autosave')) {
			demo.value = localStorage.getItem('autosave');
		}
		document.querySelector('.clear').onclick = function() {
			demo.value = '';
			localStorage.removeItem('autosave');
		};
		document.querySelector('.empty').onclick = function() {
			demo.value = '';
			localStorage.clear();	
		};
	}
	
})();