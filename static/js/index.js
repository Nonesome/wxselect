/**
 * Created by nonesome on 2017/2/13.
 */

;(function(win) {
	var ctx = document.getElementById('canvas').getContext("2d"),
		img = document.getElementsByClassName("avatar-source");
	var xArr = [], yArr = [], iArr = [];
	var INDEX = win.INDEX = {
		init: function() {
			INDEX.getList();
			INDEX._bind();
		},
		_bind: function() {
			var disable = false;
			var $result = document.getElementById('result').getContext("2d"),
				$dialog = $("#J_dialog"),
				$mask = $("#J_mask");
			$("#J_run").on('click', function(e) {
				e.preventDefault();
				if(disable) {
					return false;
				}
				var right = Math.ceil(Math.random() * 92);
				disable = true;
				var index = right%2;
				var interval = setInterval(function() {
					ctx.drawImage(img[iArr[index]], xArr[index], yArr[index], 77, 96, 0, 0, 500, 600);
					index+=2;
					if(index >= 92) {
						clearInterval(interval);
						disable = false;
						ctx.drawImage(img[iArr[right]], xArr[right], yArr[right], 77, 96, 0, 0, 500, 600);
						$result.drawImage(img[iArr[right]], xArr[right], yArr[right], 77, 96, 0, 0, 600, 719);
						$dialog.show();
						$mask.show();
					}
				}, 50);
			});

			$("#J_close").on('click', function(e) {
				e.preventDefault();
				$dialog.hide();
				$mask.hide();
			})
		},
		getList: function() {
			img[0].onload = function() {
				ctx.drawImage(img[0], 77, 0, 77, 93, 0, 0, 500, 600);
			};

			var len = [36, 36, 21];
			for(var i = 0; i < 3; i ++) {
				for(var j = 0; j < len[i]; j++) {
					if(!i && !j) {
						continue;
					}
					xArr.push(77 * (j % 9));
					yArr.push(parseInt(j/9) * 96);
					iArr.push(i);
				}
			}
		},
		alert: function() {

		}
	};

	INDEX.init();
})(window);