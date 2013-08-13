function include(src) {
	HTMLCode = '<script language="javascript" src="' + src + '"></script>';
	document.write(HTMLCode)
}
include("js/jquery.queryloader2.js");
$(document).ready(function() {
	
	/*$("html").scrollTop(0);$("#01_A").click(function(){
		$(window).scrollTop(0);console.log("111111111111"+$(window).scrollTop());
	});
	
	$("#01_A").click();*/
	
	//预加载图片
	$("#puv").queryLoader2({
		barColor: "#111111",
		backgroundColor: "#000",
		percentage: true,
		barHeight: 18,
		completeAnimation: "grow"
	});
});
function paowu(contentID, ID, startX, startY, endX, endY, timeDE, appendID_C) {
	var index = 0;
	var startX = startX;
	var startY = startY;
	var endX = endX;
	var endY = endY;
	var vMultiple = 20;
	var vDistance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
	var vX = (startX - endX) / vMultiple;
	var vY = (endY - startY) / vMultiple;
	var vNewX = 0;
	var vNewY = 0;
	var i = 2;
	var inter;
	var display = function() {
			if (i <= vMultiple) {
				vNewX = startX - vX * i;
				vNewY = startY + vY * i;
				$("#" + ID).css({
					top: vNewY,
					left: vNewX
				});
				i++
			}
			if (vNewY == endY && vNewX == endX) {
				window.clearInterval(inter)
			}
		};
	$(function() {
		$("#" + appendID_C).append(contentID);
		$("#" + ID).css({
			position: 'absolute',
			left: startX,
			top: startY
		});
		inter = setInterval(function() {
			display();
		}, timeDE);

		/*if(ID!=="iphoneBG" && ID!=="xiang_du" && ID!=="qinwang_du"){
		window.clearInterval(inter)
		}*/
	});
	
}
$(function() {
	(function(c, j) {
		function k(a, b) {
			var d = a.nodeName.toLowerCase();
			if ("area" === d) {
				b = a.parentNode;
				d = b.name;
				if (!a.href || !d || b.nodeName.toLowerCase() !== "map") return false;
				a = c("img[usemap=#" + d + "]")[0];
				return !!a && l(a)
			}
			return (/input|select|textarea|button|object/.test(d) ? !a.disabled : "a" == d ? a.href || b : b) && l(a)
		}
		function l(a) {
			return !c(a).parents().andSelf().filter(function() {
				return c.curCSS(this, "visibility") === "hidden" || c.expr.filters.hidden(this)
			}).length
		}
		c.ui = c.ui || {};
		if (!c.ui.version) {
			c.extend(c.ui, {
				version: "1.8.16",
				keyCode: {
					ALT: 18,
					BACKSPACE: 8,
					CAPS_LOCK: 20,
					COMMA: 188,
					COMMAND: 91,
					COMMAND_LEFT: 91,
					COMMAND_RIGHT: 93,
					CONTROL: 17,
					DELETE: 46,
					DOWN: 40,
					END: 35,
					ENTER: 13,
					ESCAPE: 27,
					HOME: 36,
					INSERT: 45,
					LEFT: 37,
					MENU: 93,
					NUMPAD_ADD: 107,
					NUMPAD_DECIMAL: 110,
					NUMPAD_DIVIDE: 111,
					NUMPAD_ENTER: 108,
					NUMPAD_MULTIPLY: 106,
					NUMPAD_SUBTRACT: 109,
					PAGE_DOWN: 34,
					PAGE_UP: 33,
					PERIOD: 190,
					RIGHT: 39,
					SHIFT: 16,
					SPACE: 32,
					TAB: 9,
					UP: 38,
					WINDOWS: 91
				}
			});
			c.fn.extend({
				propAttr: c.fn.prop || c.fn.attr,
				_focus: c.fn.focus,
				focus: function(a, b) {
					return typeof a === "number" ? this.each(function() {
						var d = this;
						setTimeout(function() {
							c(d).focus();
							b && b.call(d)
						}, a)
					}) : this._focus.apply(this, arguments)
				},
				scrollParent: function() {
					var a;
					a = c.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
						return /(relative|absolute|fixed)/.test(c.curCSS(this, "position", 1)) && /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
					}).eq(0) : this.parents().filter(function() {
						return /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
					}).eq(0);
					return /fixed/.test(this.css("position")) || !a.length ? c(document) : a
				},
				zIndex: function(a) {
					if (a !== j) return this.css("zIndex", a);
					if (this.length) {
						a = c(this[0]);
						for (var b; a.length && a[0] !== document;) {
							b = a.css("position");
							if (b === "absolute" || b === "relative" || b === "fixed") {
								b = parseInt(a.css("zIndex"), 10);
								if (!isNaN(b) && b !== 0) return b
							}
							a = a.parent()
						}
					}
					return 0
				},
				disableSelection: function() {
					return this.bind((c.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
						a.preventDefault()
					})
				},
				enableSelection: function() {
					return this.unbind(".ui-disableSelection")
				}
			});
			c.each(["Width", "Height"], function(a, b) {
				function d(f, g, m, n) {
					c.each(e, function() {
						g -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0;
						if (m) g -= parseFloat(c.curCSS(f, "border" + this + "Width", true)) || 0;
						if (n) g -= parseFloat(c.curCSS(f, "margin" + this, true)) || 0
					});
					return g
				}
				var e = b === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
					h = b.toLowerCase(),
					i = {
						innerWidth: c.fn.innerWidth,
						innerHeight: c.fn.innerHeight,
						outerWidth: c.fn.outerWidth,
						outerHeight: c.fn.outerHeight
					};
				c.fn["inner" + b] = function(f) {
					if (f === j) return i["inner" + b].call(this);
					return this.each(function() {
						c(this).css(h, d(this, f) + "px")
					})
				};
				c.fn["outer" + b] = function(f, g) {
					if (typeof f !== "number") return i["outer" + b].call(this, f);
					return this.each(function() {
						c(this).css(h, d(this, f, true, g) + "px")
					})
				}
			});
			c.extend(c.expr[":"], {
				data: function(a, b, d) {
					return !!c.data(a, d[3])
				},
				focusable: function(a) {
					return k(a, !isNaN(c.attr(a, "tabindex")))
				},
				tabbable: function(a) {
					var b = c.attr(a, "tabindex"),
						d = isNaN(b);
					return (d || b >= 0) && k(a, !d)
				}
			});
			c(function() {
				var a = document.body,
					b = a.appendChild(b = document.createElement("div"));
				c.extend(b.style, {
					minHeight: "100px",
					height: "auto",
					padding: 0,
					borderWidth: 0
				});
				c.support.minHeight = b.offsetHeight === 100;
				c.support.selectstart = "onselectstart" in b;
				a.removeChild(b).style.display = "none"
			});
			c.extend(c.ui, {
				plugin: {
					add: function(a, b, d) {
						a = c.ui[a].prototype;
						for (var e in d) {
							a.plugins[e] = a.plugins[e] || [];
							a.plugins[e].push([b, d[e]])
						}
					},
					call: function(a, b, d) {
						if ((b = a.plugins[b]) && a.element[0].parentNode) for (var e = 0; e < b.length; e++) a.options[b[e][0]] && b[e][1].apply(a.element, d)
					}
				},
				contains: function(a, b) {
					return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
				},
				hasScroll: function(a, b) {
					if (c(a).css("overflow") === "hidden") return false;
					b = b && b === "left" ? "scrollLeft" : "scrollTop";
					var d = false;
					if (a[b] > 0) return true;
					a[b] = 1;
					d = a[b] > 0;
					a[b] = 0;
					return d
				},
				isOverAxis: function(a, b, d) {
					return a > b && a < b + d
				},
				isOver: function(a, b, d, e, h, i) {
					return c.ui.isOverAxis(a, d, h) && c.ui.isOverAxis(b, e, i)
				}
			})
		}
	})(jQuery);
	(function(b, j) {
		if (b.cleanData) {
			var k = b.cleanData;
			b.cleanData = function(a) {
				for (var c = 0, d;
				(d = a[c]) != null; c++) try {
					b(d).triggerHandler("remove")
				} catch (e) {}
				k(a)
			}
		} else {
			var l = b.fn.remove;
			b.fn.remove = function(a, c) {
				return this.each(function() {
					if (!c) if (!a || b.filter(a, [this]).length) b("*", this).add([this]).each(function() {
						try {
							b(this).triggerHandler("remove")
						} catch (d) {}
					});
					return l.call(b(this), a, c)
				})
			}
		}
		b.widget = function(a, c, d) {
			var e = a.split(".")[0],
				f;
			a = a.split(".")[1];
			f = e + "-" + a;
			if (!d) {
				d = c;
				c = b.Widget
			}
			b.expr[":"][f] = function(h) {
				return !!b.data(h, a)
			};
			b[e] = b[e] || {};
			b[e][a] = function(h, g) {
				arguments.length && this._createWidget(h, g)
			};
			c = new c;
			c.options = b.extend(true, {}, c.options);
			b[e][a].prototype = b.extend(true, c, {
				namespace: e,
				widgetName: a,
				widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a,
				widgetBaseClass: f
			}, d);
			b.widget.bridge(a, b[e][a])
		};
		b.widget.bridge = function(a, c) {
			b.fn[a] = function(d) {
				var e = typeof d === "string",
					f = Array.prototype.slice.call(arguments, 1),
					h = this;
				d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) : d;
				if (e && d.charAt(0) === "_") return h;
				e ? this.each(function() {
					var g = b.data(this, a),
						i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g;
					if (i !== g && i !== j) {
						h = i;
						return false
					}
				}) : this.each(function() {
					var g = b.data(this, a);
					g ? g.option(d || {})._init() : b.data(this, a, new c(d, this))
				});
				return h
			}
		};
		b.Widget = function(a, c) {
			arguments.length && this._createWidget(a, c)
		};
		b.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			options: {
				disabled: false
			},
			_createWidget: function(a, c) {
				b.data(c, this.widgetName, this);
				this.element = b(c);
				this.options = b.extend(true, {}, this.options, this._getCreateOptions(), a);
				var d = this;
				this.element.bind("remove." + this.widgetName, function() {
					d.destroy()
				});
				this._create();
				this._trigger("create");
				this._init()
			},
			_getCreateOptions: function() {
				return b.metadata && b.metadata.get(this.element[0])[this.widgetName]
			},
			_create: function() {},
			_init: function() {},
			destroy: function() {
				this.element.unbind("." + this.widgetName).removeData(this.widgetName);
				this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
			},
			widget: function() {
				return this.element
			},
			option: function(a, c) {
				var d = a;
				if (arguments.length === 0) return b.extend({}, this.options);
				if (typeof a === "string") {
					if (c === j) return this.options[a];
					d = {};
					d[a] = c
				}
				this._setOptions(d);
				return this
			},
			_setOptions: function(a) {
				var c = this;
				b.each(a, function(d, e) {
					c._setOption(d, e)
				});
				return this
			},
			_setOption: function(a, c) {
				this.options[a] = c;
				if (a === "disabled") this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c);
				return this
			},
			enable: function() {
				return this._setOption("disabled", false)
			},
			disable: function() {
				return this._setOption("disabled", true)
			},
			_trigger: function(a, c, d) {
				var e = this.options[a];
				c = b.Event(c);
				c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
				d = d || {};
				if (c.originalEvent) {
					a = b.event.props.length;
					for (var f; a;) {
						f = b.event.props[--a];
						c[f] = c.originalEvent[f]
					}
				}
				this.element.trigger(c, d);
				return !(b.isFunction(e) && e.call(this.element[0], c, d) === false || c.isDefaultPrevented())
			}
		}
	})(jQuery);
	(function(b, d) {
		b.widget("ui.progressbar", {
			options: {
				value: 0,
				max: 100
			},
			min: 0,
			_create: function() {
				this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
					role: "progressbar",
					"aria-valuemin": this.min,
					"aria-valuemax": this.options.max,
					"aria-valuenow": this._value()
				});
				this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
				this.oldValue = this._value();
				this._refreshValue()
			},
			destroy: function() {
				this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
				this.valueDiv.remove();
				b.Widget.prototype.destroy.apply(this, arguments)
			},
			value: function(a) {
				if (a === d) return this._value();
				this._setOption("value", a);
				return this
			},
			_setOption: function(a, c) {
				if (a === "value") {
					this.options.value = c;
					this._refreshValue();
					this._value() === this.options.max && this._trigger("complete")
				}
				b.Widget.prototype._setOption.apply(this, arguments)
			},
			_value: function() {
				var a = this.options.value;
				if (typeof a !== "number") a = 0;
				return Math.min(this.options.max, Math.max(this.min, a))
			},
			_percentage: function() {
				return 100 * this._value() / this.options.max
			},
			_refreshValue: function() {
				var a = this.value(),
					c = this._percentage();
				if (this.oldValue !== a) {
					this.oldValue = a;
					this._trigger("change")
				}
				this.valueDiv.toggle(a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(c.toFixed(0) + "%");
				this.element.attr("aria-valuenow", a)
			}
		});
		b.extend(b.ui.progressbar, {
			version: "1.8.16"
		})
	})(jQuery)
});
var Jarallax = function(controller) {
		this.FPS = 40;
		this.FPS_INTERVAL = 1000 / this.FPS;
		this.FRAME_DATA_SAMPLE = 24;
		this.FRAME_DATA_REFRESH = 12;
		this.fpsTop = 0;
		this.fpsBottom = 1000;
		this.animations = [];
		this.defaultValues = [];
		this.progress = 0.0;
		this.prev_progress = 0.0;
		this.controllers = [];
		this.maxProgress = 1;
		this.timer = undefined;
		this.allowWeakProgress = true;
		this.frameRate = this.FPS;
		this.stepSize = 0;
		this.jumping = false;

		if (controller === undefined) {
			if ($.browser.iDevice) {
				this.controllers.push(new ControllerApple(false))
			} else if ($.browser.mozilla) {
				this.controllers.push(new ControllerScroll(false))
			} else {
				this.controllers.push(new ControllerScroll(true))
			}
		} else if (controller !== 'none') {
			if (controller.length) {
				this.controllers = controller
			} else if (typeof(controller) === 'object') {
				this.controllers.push(controller)
			} else {
				throw new Error('wrong controller data type: "' + typeof(controller) + '". Expected "object" or "array"')
			}
		}
		for (var i in this.controllers) {
			//console.log(this.controllers[i]);
			this.controllers[i].activate(this)
		}
		this.frameChart = [];
		for (var j = 1; j <= 600; j++) {
			this.frameChart[j] = (1000 / j)
		}
	};
Jarallax.prototype.setProgress = function(progress, isWeak) {
	if (progress > 1) {
		progress = 1
	} else if (progress < 0) {
		progress = 0
	} else {
		progress = Math.round(progress * 1000) / 1000
	}
	if (this.progress != progress) {
		this.progress = progress;
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		var interval;
		var _scrollTop_wfc = parseFloat(this.progress * 1000);

		//console.log(_scrollTop_wfc);
		if(_scrollTop_wfc<264 && _scrollTop_wfc>100){
			if(!!$("#picList").length){
				$("#picList").remove();
			}
		}
		if (_scrollTop_wfc <= 500) {
			if (_scrollTop_wfc >= 300) {
				if ( !! $("#ball1").length === false) {
					$("#sparks").remove();
					$("#picList").remove();
					//console.log(!!$("#picList").length);
					if(!!$("#picList").length ===false ){
						$("#kuang").before($('<div id="picList" style="position:absolute; z-index:3; left:50%; margin-left:-500px; top:1600px; width:1000px; height:1600px; opacity:1;"></div>'));
					
					paowu('<div id="ball1"></div>', 'ball1', 290, 300, 100, 150, 15, "picList");
					paowu('<div id="ball3"></div>', 'ball3', 290, 300, 800, 200, 15, "picList");
					paowu('<div id="ball2"></div>', 'ball2', 290, 300, 250, 200, 15, "picList");
					paowu('<div id="ball4"></div>', 'ball4', 290, 300, 670, 300, 15, "picList");
					paowu('<div id="ball5"></div>', 'ball5', 290, 300, 230, 400, 15, "picList");
					paowu('<div id="ball6"></div>', 'ball6', 290, 300, 730, 530, 15, "picList");
					paowu('<div id="ball7"></div>', 'ball7', 290, 300, 150, 550, 15, "picList");
					paowu('<div id="ball8"></div>', 'ball8', 290, 300, 850, 400, 15, "picList");
					paowu('<div id="ball9"></div>', 'ball9', 290, 300, 30, 380, 15, "picList");
					paowu('<div id="ball10"></div>', 'ball10', 290, 300, 290, 250, 15, "picList");
					}
					
				} else {
					$("#chengbao03").css("display", "none");
					$("#sparks").css("display", "none");
				}
			} else {
				$("#chengbao03").css("display", "none");
			}
		}
		
		if (_scrollTop_wfc <= 628 && _scrollTop_wfc >= 618) {
			if (($("#ball10").css("display") === "none")) {
				$("#featured-area ul li a").html("");
				$("#01_A").append('<img src="images/people/01.png" alt="" />');
				$("#02_A").append('<img src="images/people/02.png" alt="" />');
				$("#03_A").append('<img src="images/people/03.png" alt="" />');
				$("#04_A").append('<img src="images/people/04.png" alt="" />');
				$("#05_A").append('<img src="images/people/05.png" alt="" />');
				$("#06_A").append('<img src="images/people/06.png" alt="" />');
				$("#07_A").append('<img src="images/people/07.png" alt="" />');
				$("#08_A").append('<img src="images/people/08.png" alt="" />');
				$("#09_A").append('<img src="images/people/09.png" alt="" />');
				$("#10_A").append('<img src="images/people/10.png" alt="" />');
			}
		}
		if (_scrollTop_wfc < 618 && _scrollTop_wfc >= 600) {
			if (($("#ball10").css("display") === "block")) {
				$("#featured-area ul li a").html("");
				$("#01_A").append('<img src="images/people/01_bg.png" alt="" />');
				$("#02_A").append('<img src="images/people/02_bg.png" alt="" />');
				$("#03_A").append('<img src="images/people/03_bg.png" alt="" />');
				$("#04_A").append('<img src="images/people/04_bg.png" alt="" />');
				$("#05_A").append('<img src="images/people/05_bg.png" alt="" />');
				$("#06_A").append('<img src="images/people/06_bg.png" alt="" />');
				$("#07_A").append('<img src="images/people/07_bg.png" alt="" />');
				$("#08_A").append('<img src="images/people/08_bg.png" alt="" />');
				$("#09_A").append('<img src="images/people/09_bg.png" alt="" />');
				$("#10_A").append('<img src="images/people/10_bg.png" alt="" />');

				if($("#card-indicators span:eq(0)").attr("class")==='card-indicator active'){return;}
				$("#card-indicators span:eq(0)").click();
			}
		}
		if (_scrollTop_wfc < 790 && _scrollTop_wfc >= 700) {
			if ( !! $("#peoList div#iphoneBG").length == false) {
				paowu('<div id="iphoneBG"></div>', 'iphoneBG', 0, 800, 0, 500, 15, "peoList");
			}
		}
		if (_scrollTop_wfc < 850 && _scrollTop_wfc >= 790) {
			if ( !! $("#peoList div#xiang_du").length == false) {
				paowu('<div id="xiang_du"></div>', 'xiang_du', 0, 100, 0, 345, 15, "peoList");
				paowu('<div id="qinwang_du"></div>', 'qinwang_du', 972, 0, 972, 344, 15, "peoList");
			}
		}
		if (_scrollTop_wfc <= 675 && _scrollTop_wfc >= 650) {
			$("#peoList").html("")
		}
		if (this.allowWeakProgress || !weak) {
			this.previousTime = new Date();
			this.currentTime = new Date();
			var weak = isWeak || false;
			for (var defaultValue in this.defaultValues) {
				this.defaultValues[defaultValue].activate(this.progress)
			}
			for (var animation in this.animations) {
				this.animations[animation].activate(this.progress)
			}
			
			for (var controller in this.controllers) {
				//console.log(this);
				this.controllers[controller].update(this.progress)
			}
			this.currentTime = new Date();
			this.stepSize = Math.max(this.currentTime - this.previousTime, this.stepSize)
		}
	}
};
Jarallax.prototype.clearAnimations = function() {
	this.animations = []
};
Jarallax.prototype.clearDefaults = function() {
	this.defaultValues = []
};
Jarallax.prototype.clearControllers = function() {
	this.controllers = []
};
Jarallax.prototype.jumpToProgress = function(progress, time, fps) {
	if (!progress.indexOf) {
		progress = progress / this.maxProgress
	} else if (progress.indexOf('%') != -1) {
		progress = parseFloat(progress) / 100
	}
	if (progress == this.progress) {
		return false
	}
	if (progress > 1) {
		progress = 1
	} else if (progress < 0) {
		progress = 0
	}
	this.smoothProperties = {};
	this.smoothProperties.timeStep = 1000 / fps;
	this.smoothProperties.steps = time / this.smoothProperties.timeStep;
	this.smoothProperties.currentStep = 0;
	this.smoothProperties.startProgress = this.progress;
	this.smoothProperties.diffProgress = progress - this.progress;
	this.smoothProperties.previousValue = this.progress;
	this.smooth();
	this.allowWeakProgress = false;
	return false
};
Jarallax.prototype.smooth = function(externalScope) {
	var scope;
	if (!externalScope) {
		scope = this
	} else {
		scope = externalScope
	}
	scope.smoothProperties.currentStep++;
	clearTimeout(scope.timer);
	if (scope.smoothProperties.currentStep < scope.smoothProperties.steps) {
		var position = scope.smoothProperties.currentStep / scope.smoothProperties.steps;
		var newProgress = Jarallax.EASING.easeOut(position, scope.smoothProperties.startProgress, scope.smoothProperties.diffProgress, 1, 5);
		scope.jumping_allowed = true;
		scope.setProgress(newProgress);
		scope.jumping_allowed = false;
		scope.timer = window.setTimeout(function() {
			scope.smooth(scope)
		}, scope.smoothProperties.timeStep);
		scope.smoothProperties.previousValue = newProgress;
		scope.allowWeakProgress = false
	} else {
		scope.jumping_allowed = true;
		scope.setProgress(scope.smoothProperties.startProgress + scope.smoothProperties.diffProgress);
		scope.jumping_allowed = false;
		scope.clearSmooth(scope)
	}
};
Jarallax.prototype.clearSmooth = function(scope) {
	scope.allowWeakProgress = true;
	clearTimeout(scope.timer);
	delete scope.smoothProperties
};
Jarallax.prototype.setDefault = function(selector, values) {
	if (!selector) {
		throw new Error('no selector defined.')
	}
	if (JarallaxTools.isValues(values)) {
		var newDefault = new JarallaxObject(selector, values);
		newDefault.activate();
		this.defaultValues.push(newDefault)
	}
};
Jarallax.prototype.addStatic = function(selector, values) {
	if (!selector) {
		throw new Error('no selector defined.')
	}
	if (JarallaxTools.isValues(values)) {
		var newDefault = new JarallaxStatic(selector, values[0], values[1]);
		this.defaultValues.push(newDefault)
	}
};
Jarallax.prototype.addCounter = function(properties) {
	this.animations.push(new JarallaxCounter(this, properties))
};
Jarallax.prototype.addController = function(controller, activate) {
	this.controllers.push(controller);
	if (activate) {
		controller.activate(this)
	}
};
Jarallax.prototype.addAnimation = function(selector, values, platforms, allMustBeTrue) {
	if (!platforms) {
		platforms = ['any']
	} else if (platforms.substring) {
		platforms = [platforms]
	} else {
		platforms = platforms || [JarallaxTools.Platform.Any]
	}
	if (JarallaxTools.PlatformAllowed(platforms, allMustBeTrue)) {
		var newAnimation;
		if (!selector) {
			throw new Error('no selector defined.')
		}
		var returnValue = [];
		if (JarallaxTools.isValues(values)) {
			if (values.length) {
				for (var i = 0; i < values.length - 1; i++) {
					if (values[i] && values[i + 1]) {
						if (values[i].progress && values[i + 1].progress) {
							if (values[i + 1].progress.indexOf('%') == -1) {
								if (this.maxProgress < values[i + 1].progress) {
									this.maxProgress = values[i + 1].progress
								}
							}
							newAnimation = new JarallaxAnimation(selector, values[i], values[i + 1], this);
							this.animations.push(newAnimation);
							returnValue.push(newAnimation)
						} else {
							throw new Error('no animation boundry found.')
						}
					} else {
						throw new Error('bad animation data.')
					}
				}
			} else {
				if (!values.progress) {
					values.progress = '100%'
				}
				var startValues = {};
				for (var j in values) {
					startValues[j] = $(selector).css(j)
				}
				startValues.progress = '0%';
				newAnimation = new JarallaxAnimation(selector, startValues, values, this);
				this.animations.push(newAnimation);
				returnValue.push(newAnimation)
			}
		}
		return returnValue
	}
	return false
};
Jarallax.prototype.cloneAnimation = function(selector, adittionalValues, animations) {
	if (!selector) {
		throw new Error('no selector defined.')
	}
	var newAnimations = [];
	var adittionalValuesArray = [];
	for (var i = 0; i < animations.length + 1; i++) {
		if (adittionalValues instanceof Array) {
			adittionalValuesArray.push(adittionalValues[i])
		} else {
			adittionalValuesArray.push(adittionalValues)
		}
	}
	for (i = 0; i < animations.length; i++) {
		var currentAnimation = animations[i];
		var newStart = JarallaxTools.clone(currentAnimation.startValues);
		var newEnd = JarallaxTools.clone(currentAnimation.endValues);
		var adittionalValueStart = adittionalValuesArray[i];
		var adittionalValueEnd = adittionalValuesArray[i + 1];
		for (var j in newStart) {
			if (adittionalValueStart[j]) {
				newStart[j] = JarallaxTools.calculateNewValue(adittionalValueStart[j], newStart[j])
			}
		}
		for (var k in newEnd) {
			if (adittionalValueEnd[k]) {
				newEnd[k] = JarallaxTools.calculateNewValue(adittionalValueEnd[k], newEnd[k])
			}
		}
		newAnimations.push(this.addAnimation(selector, [newStart, newEnd])[0])
	}
	return newAnimations
};
Jarallax.EASING = {
	'linear': function(currentTime, beginningValue, changeInValue, duration, power) {
		return currentTime / duration * changeInValue + beginningValue
	},
	'easeOut': function(currentTime, beginningValue, changeInValue, duration, power) {
		if (power === undefined) {
			power = 2
		}
		return ((Math.pow((duration - currentTime) / duration, power) * -1) + 1) * changeInValue + beginningValue
	},
	'easeIn': function(currentTime, beginningValue, changeInValue, duration, power) {
		if (power === undefined) {
			power = 2
		}
		return Math.pow(currentTime / duration, power) * changeInValue + beginningValue
	},
	'easeInOut': function(currentTime, beginningValue, changeInValue, duration, power) {
		if (power === undefined) {
			power = 2
		}
		changeInValue /= 2;
		currentTime *= 2;
		if (currentTime < duration) {
			return Math.pow(currentTime / duration, power) * changeInValue + beginningValue
		} else {
			currentTime = currentTime - duration;
			return ((Math.pow((duration - currentTime) / duration, power) * -1) + 1) * changeInValue + beginningValue + changeInValue
		}
		return Math.pow(currentTime / duration, power) * changeInValue + beginningValue
	}
};
Jarallax.EASING.none = Jarallax.EASING.linear;
JarallaxTools = {};
JarallaxTools.hasNumbers = function(t) {
	var expr = new RegExp('\\d');
	return expr.test(t)
};
JarallaxTools.isValues = function(object) {
	if (!object) {
		throw new Error('no values set.')
	}
	if (typeof object != 'object') {
		throw new Error('wrong data type values. expected: "object", got: "' + typeof object + '"')
	}
	if (object.size === 0) {
		throw new Error('Got an empty values object')
	}
	return true
};
JarallaxTools.PlatformAllowed = function(platforms, allMustBeTrue, invert) {
	allMustBeTrue = allMustBeTrue || false;
	invert = invert || false;
	for (var i = 0; i < platforms.length; i++) {
		if (platforms[i] == 'any') {
			return !invert
		}
		if (jQuery.browser[platforms[i]]) {
			if (!allMustBeTrue) {
				return !invert
			}
		} else if (allMustBeTrue) {
			return invert
		}
	}
	return !invert ? allMustBeTrue : !allMustBeTrue
};
JarallaxTools.calculateNewValue = function(modifier, original) {
	var result;
	var units = JarallaxTools.getUnits(original);
	if (modifier.indexOf('+') === 0) {
		result = String(parseFloat(original) + parseFloat(modifier) + units)
	} else if (modifier.indexOf('-') === 0) {
		result = String(parseFloat(original) + parseFloat(modifier) + units)
	} else if (modifier.indexOf('*') === 0) {
		result = String(parseFloat(original) * parseFloat(modifier.substr(1)) + units)
	} else if (modifier.indexOf('/') === 0) {
		result = String(parseFloat(original) / parseFloat(modifier.substr(1)) + units)
	} else {
		result = modifier
	}
	if (original.indexOf) {
		if (original.indexOf('%') > 0) {
			return result + '%'
		}
	}
	return result
};
JarallaxTools.getUnits = function(string) {
	return string.replace(/\d+/g, '')
};
JarallaxTools.clone = function(obj) {
	var newObj = {};
	for (var i in obj) {
		newObj[i] = obj[i]
	}
	return newObj
};
Position = function(x, y) {
	this.x = x;
	this.y = y
};
Position.prototype.add = function(value) {
	return new Position(this.x + value.x, this.y + value.y)
};
Position.prototype.subract = function(value) {
	return new Position(this.x - value.x, this.y - value.y)
};
JarallaxTools.Platforms = ['webkit', 'opera', 'msie', 'mozilla', 'android', 'blackBerry', 'webOs', 'windowsPhone', 'iDevice', 'iPad', 'iPhone', 'iPod', 'msie', 'mobile', 'nonMobile'];
jQuery.browser.android = /android/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.blackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.webOs = /webos/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.windowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.iDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.iPad = /ipad/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.iPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.iPod = /ipod/i.test(navigator.userAgent.toLowerCase());
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackBerry || jQuery.browser.webOs || jQuery.browser.windowsPhone || jQuery.browser.iDevice;
jQuery.browser.nonMobile = !jQuery.browser.mobile;
jQuery.platform = {};
jQuery.platform.windows = navigator.appVersion.indexOf("Win") != -1;
jQuery.platform.macOs = navigator.appVersion.indexOf("Mac") != -1;
jQuery.platform.unix = navigator.appVersion.indexOf("X11") != -1;
jQuery.platform.linux = navigator.appVersion.indexOf("Linux") != -1;
jQuery.platform.unknown = !(jQuery.platform.windows || jQuery.platform.macOs || jQuery.platform.unix || jQuery.platform.linux);
JarallaxController = function() {
	this.isActive = false;
	this.bindings = []
};
JarallaxController.prototype.activate = function(jarallax) {
	this.isActive = true;
	if (!this.jarallax || this.jarallax !== jarallax) {
		this.jarallax = jarallax
	}
};
JarallaxController.prototype.deactivate = function(jarallax) {
	this.isActive = false
};
JarallaxController.prototype.update = function(progress) {};
JarallaxCounter = function(jarallax, properties) {
	if (!properties) {
		throw new Error('No properties defined.')
	} else if (!properties.selector) {
		throw new Error('No selector defined. properties.selector.')
	}
	this.jarallax = jarallax;
	this.selector = properties.selector;
	this.startNumber = properties.startNumber || 0;
	this.endNumber = properties.endNumber || 100;
	this.startProgress = properties.startProgress || '0%';
	this.endProgress = properties.endProgress || '100%';
	this.decimals = properties.decimals || 0;
	this.stepSize = properties.stepSize;
	if (this.decimals === 0 && this.stepSize < 1) {
		tmp = this.stepSize.toString().split('.');
		this.decimals = tmp[1].length
	}
};
JarallaxCounter.prototype.activate = function() {
	var rawDiff = this.endNumber - this.startNumber;
	var rawNumber = rawDiff * this.jarallax.progress + this.startNumber;
	if (this.startProgress.indexOf('%') >= 0) {
		start = parseInt(this.startProgress, 10) / 100
	} else if (JarallaxTools.hasNumbers(this.startProgress)) {
		start = parseInt(this.startProgress, 10) / this.jarallax.maxProgress
	}
	if (this.endProgress.indexOf('%') >= 0) {
		end = parseInt(this.endProgress, 10) / 100
	} else if (JarallaxTools.hasNumbers(this.endProgress)) {
		end = parseInt(this.endProgress, 10) / this.jarallax.maxProgress
	}
	if (this.jarallax.progress < start) {
		$(this.selector).html(this.startNumber)
	} else if (this.jarallax.progress > end) {
		$(this.selector).html(this.endNumber)
	} else {
		var duration = end - start;
		var currentTime = (this.jarallax.progress - start);
		var changeInValue = this.endNumber - this.startNumber;
		var result = Jarallax.EASING.none(currentTime, this.startNumber, changeInValue, duration);
		if (this.stepSize) {
			result = Math.round(result / this.stepSize) * this.stepSize
		}
		if (this.decimals > 0) {
			result = result.toFixed(this.decimals)
		}
		$(this.selector).html(result)
	}
};
JarallaxObject = function(selector, values) {
	this.selector = selector;
	this.values = values
};
JarallaxObject.prototype.activate = function(position) {
	for (var i in this.values) {
		$(this.selector).css(i, this.values[i])
	}
};
JarallaxAnimation = function(selector, startValues, endValues, jarallax) {
	this.progress = -1;
	this.selector = selector;
	this.startValues = startValues;
	this.endValues = endValues;
	this.jarallax = jarallax
};
JarallaxAnimation.prototype.activate = function(progress) {
	if (this.progress != progress) {
		var start;
		var end;
		var style;
		if (this.startValues.style === undefined) {
			style = {
				easing: 'linear'
			}
		} else {
			style = this.startValues.style
		}
		if (this.startValues.progress.indexOf('%') >= 0) {
			start = parseInt(this.startValues.progress, 10) / 100
		} else if (JarallaxTools.hasNumbers(this.startValues.progress)) {
			start = parseInt(this.startValues.progress, 10) / this.jarallax.maxProgress
		}
		if (this.endValues.progress.indexOf('%') >= 0) {
			end = parseInt(this.endValues.progress, 10) / 100
		} else if (JarallaxTools.hasNumbers(this.endValues.progress)) {
			end = parseInt(this.endValues.progress, 10) / this.jarallax.maxProgress
		}
		if (this.startValues.event) {
			this.dispatchEvent(this.progress, progress, start, end)
		}
		if (progress >= start && progress <= end) {
			for (var i in this.startValues) {
				if (i !== 'progress' && i !== 'style' && i !== 'event') {
					if (undefined !== this.endValues[i] && i !== 'display' && i !== 'backgroundImage' && i !== 'background-position') {
						var units = JarallaxTools.getUnits(this.startValues[i] + '');
						units = units.replace('-', '');
						var startValue = parseFloat(this.startValues[i]);
						var endValue = parseFloat(this.endValues[i]);
						var duration = end - start;
						var currentTime = (progress - start);
						var changeInValue = endValue - startValue;
						var result = Jarallax.EASING[style.easing](currentTime, startValue, changeInValue, duration, style.power);
						if (units == 'px') {
							result = parseInt(result, 10)
						}
						if (units !== '.') {
							result += units
						}
						$(this.selector).css(i, result)
					} else {
						$(this.selector).css(i, this.startValues[i])
					}
				}
			}
		}
		this.progress = progress
	}
};
JarallaxAnimation.prototype.dispatchEvent = function(progress_old, progress_new, start, end) {
	var events = this.startValues.event;
	var event_data = {};
	event_data.animation = this;
	event_data.selector = this.selector;
	if (progress_new >= start && progress_new <= end) {
		if (events.start && progress_old < start) {
			event_data.type = 'start';
			events.start(event_data)
		}
		if (events.start && progress_old > end) {
			event_data.type = 'rewind';
			events.start(event_data)
		}
		if (events.animating) {
			event_data.type = 'animating';
			events.animating(event_data)
		}
		if (events.forward && progress_old < progress_new) {
			event_data.type = 'forward';
			events.forward(event_data)
		}
		if (events.reverse && progress_old > progress_new) {
			event_data.type = 'reverse';
			events.reverse(event_data)
		}
	} else {
		if (events.complete && progress_old < end && progress_new > end) {
			event_data.type = 'complete';
			events.complete(event_data)
		}
		if (events.rewinded && progress_old > start && progress_new < start) {
			event_data.type = 'rewind';
			events.rewinded(event_data)
		}
	}
};
ControllerApple = function(scrollPage) {
	if (scrollPage === undefined) {
		this.scrollPage = true
	} else {
		this.scrollPage = scrollPage
	}
	this.target = $('body');
	this.scrollPostion = new Position(0, 0);
};
ControllerApple.prototype = new JarallaxController();
ControllerApple.prototype.activate = function(jarallax) {
	JarallaxController.prototype.activate.call(this, jarallax);
	this.scrollSpace = $('body').height() - $(window).height();
	this.target.bind('touchmove', {
		scope: this
	}, this.onMove);
	this.target.bind('touchstart', {
		scope: this
	}, this.onTouch)
};
ControllerApple.prototype.deactivate = function(jarallax) {
	JarallaxController.prototype.deactivate.call(this, jarallax);
	this.target.unbind('touchmove');
	this.target.unbind('touchstart')
};
ControllerApple.prototype.onTouch = function(event) {
	var controller = event.data.scope;
	var targetEvent = event.originalEvent.touches.item(0);
	controller.startPosition = new Position(targetEvent.clientX, targetEvent.clientY);
	event.preventDefault()
};
ControllerApple.prototype.onMove = function(event) {
	var controller = event.data.scope;
	var targetEvent = event.originalEvent.touches.item(0);
	var tempPosition = new Position(targetEvent.clientX, targetEvent.clientY);
	var vector = tempPosition.subract(controller.startPosition);
	controller.startPosition = tempPosition;
	controller.scrollPostion = vector.add(controller.scrollPostion);
	controller.scrollPostion.y = Math.max(Math.min(controller.scrollPostion.y, 0), -controller.scrollSpace);
	controller.jarallax.setProgress(-controller.scrollPostion.y / controller.scrollSpace, false);
	$('body').scrollTop(controller.scrollSpace * controller.jarallax.progress);
	if (!controller.scrollPage) {
		event.preventDefault()
	}
};
ControllerApple.prototype.update = function(progress) {
	this.position.y = Math.round(progress * this.scrollSpace);
};
ControllerMobile = function(disableDefault, height) {
	this.disableDefault = disableDefault || false;
	this.y = 0;
	this.previousY = undefined;
	this.height = height
};
ControllerMobile.prototype = new JarallaxController();
ControllerMobile.prototype.activate = function(jarallax) {
	JarallaxController.prototype.activate.call(this, jarallax);
	if (!this.height) {
		this.height = this.height = parseInt($("body").css('height'), 10);
		if (this.height == $(window).height) {
			this.height = parseInt($("#wrapper").css('height'), 10)
		}
	}
	$('body').bind('touchmove', {
		scope: this
	}, this.onTouchMove);
	$('body').bind('touchend', {
		scope: this
	}, this.onTouchEnd)
};
ControllerMobile.prototype.onTouchEnd = function(event) {
	this.previousY = undefined
};
ControllerMobile.prototype.onTouchMove = function(event, manuel) {
	if (this.isActive) {
		if (this.disableDefault) {
			event.preventDefault()
		}
		var scope = event.data.scope;
		var targetEvent = manuel ? event : event.originalEvent.touches.item(0);
		if (scope.previousY === undefined) {
			scope.previousY = targetEvent.clientY
		} else {
			scope.y += (targetEvent.clientY - scope.previousY);
			scope.y = scope.y < scope.height ? scope.y : scope.height;
			scope.y = scope.y > 0 ? scope.y : 0;
			scope.previousY = targetEvent.clientY;
			var poss = scope.y / scope.height;
			scope.jarallax.setProgress(scope.y / scope.height)
		}
	}
};
ControllerMobile.prototype.deactivate = function(jarallax) {
	JarallaxController.prototype.deactivate.call(this, jarallax);
	$('body').unbind('touchmove')
};
ControllerMobile.prototype.update = function(progress) {};
ControllerScroll = function(smoothing, scrollSpace) {
	this.target = $(window);
	$(window).scrollTop(0);
	this.height = parseInt($("body").css('height'), 10);
	this.scrollSpace = scrollSpace || this.height - this.target.height();
	if (this.scrollSpace < 10) {
		this.height = parseInt($("#wrapper").css('height'), 10);
		this.scrollSpace = this.height - this.target.height();
	}
	this.smoothing = smoothing || false;
	this.targetProgress = 0;
};
ControllerScroll.prototype = new JarallaxController();
ControllerScroll.prototype.activate = function(jarallax) {
	JarallaxController.prototype.activate.call(this, jarallax);
	this.target.bind('scroll', {
		scope: this
	}, this.onScroll)
};
ControllerScroll.prototype.deactivate = function(jarallax) {
	JarallaxController.prototype.deactivate.call(this, jarallax);
	this.target.unbind('scroll')
};
ControllerScroll.prototype.onScroll = function(event) {
	var controller = event.data.scope;
	if (controller.jarallax.jumping) {
		if (!controller.jarallax.jumping_allowed) {
			controller.jarallax.clearSmooth(controller.jarallax)
		}
	}
	if (controller.isActive) {
		var y = event.data.y || controller.target.scrollTop();
		var progress = y / controller.scrollSpace;
		if (!controller.smoothing) {
			controller.jarallax.setProgress(progress, true)
		} else {
			controller.targetProgress = progress;
			controller.smooth()
		}
	}
};
ControllerScroll.prototype.smooth = function(externalScope) {
	var scope;
	if (!externalScope) {
		scope = this
	} else {
		scope = externalScope
	}
	var oldProgress = scope.jarallax.progress;
	var animationSpace = scope.targetProgress - oldProgress;
	clearTimeout(scope.timer);
	if (animationSpace > 0.0001 || animationSpace < -0.0001) {
		var newProgress = oldProgress + animationSpace / 5;
		scope.timer = window.setTimeout(function() {
			scope.smooth(scope)
		}, scope.jarallax.FPS_INTERVAL);
		scope.jarallax.setProgress(newProgress, true)
	} else {
		scope.jarallax.setProgress(scope.targetProgress, true)
	}
};
ControllerScroll.prototype.update = function(progress) {
	//clearTimeout(this.timer);
	
	var scrollPosition = progress * this.scrollSpace;
	var UnloadConfirm = {};
		UnloadConfirm.MSG_UNLOAD = "";
		UnloadConfirm.set = function(a) {
			
			
			window.onbeforeunload = function(b) {
				//console.log("aaaaaaaaaaaaaaaaaa");
				scrollPosition=0;
				$(window).scrollTop(scrollPosition);
				b = b || window.event;
				//b.returnValue = a;
				//return a
			}
		};
		UnloadConfirm.clear = function() {
			fckDraft.delDraftById();
			window.onbeforeunload = function() {
				//console.log("bbbbbbbbbbbbb");scrollPosition=0;
				}
		};
		UnloadConfirm.set(UnloadConfirm.MSG_UNLOAD);
	if (!this.jarallax.allowWeakProgress) {
		$(window).scrollTop(scrollPosition);
	}
	//console.log("uuuuuuuuuuuuuuu:"+scrollPosition);
};
ControllerDrag = function(selector, start, end) {
	this.object = $(selector);
	this.start = start;
	this.end = end;
	this.container = "";
	this.width = 0;
	this.startX = 0;
	this.startY = 0
};
ControllerDrag.prototype = new JarallaxController();
ControllerDrag.prototype.activate = function(jarallax) {
	JarallaxController.prototype.activate.call(this, jarallax);
	this.container = "#scrollbar";
	this.object.draggable({
		containment: this.container,
		axis: 'x'
	});
	this.object.bind("drag", {
		scope: this
	}, this.onDrag);
	this.container = $(this.container);
	this.width = $(this.container).innerWidth() - this.object.outerWidth()
};
ControllerDrag.prototype.onDrag = function(event) {
	var controller = event.data.scope;
	if (controller.isActive) {
		var x = parseInt($(this).css('left'), 10);
		var position = (x / event.data.scope.width);
		event.data.scope.jarallax.setProgress(position)
	}
};
ControllerDrag.prototype.deactivate = function(jarallax) {
	JarallaxController.prototype.deactivate.call(this, jarallax);
	this.object.unbind('drag');
	this.object.draggable('destroy')
};
ControllerDrag.prototype.update = function(progress) {
	this.object.css('left', progress * this.width)
};
ControllerKeyboard = function(keys, preventDefault, repetitiveInput) {
	this.repetitiveInput = repetitiveInput;
	this.preventDefault = preventDefault || false;
	this.keys = keys || {
		38: -0.01,
		40: 0.01
	};
	this.keysState = {}
};
ControllerKeyboard.prototype = new JarallaxController();
ControllerKeyboard.prototype.activate = function(jarallax) {
	JarallaxController.prototype.activate.call(this, jarallax);
	$(document.documentElement).keydown({
		scope: this
	}, this.keyDown);
	$(document.documentElement).keyup({
		scope: this
	}, this.keyUp);
	for (var key in this.keys) {
		this.keysState[key] = false
	}
};
ControllerKeyboard.prototype.deactivate = function(jarallax) {
	JarallaxController.prototype.deactivate.call(this, jarallax)
};
ControllerKeyboard.prototype.keyDown = function(event) {
	var controller = event.data.scope;
	if (controller.isActive) {
		for (var key in controller.keys) {
			if (key == event.keyCode) {
				if (controller.keysState[key] !== true || controller.repetitiveInput) {
					controller.jarallax.setProgress(controller.jarallax.progress + controller.keys[key])
				}
				controller.keysState[key] = true;
				if (controller.preventDefault) {
					event.preventDefault()
				}
			}
		}
	}
};
ControllerKeyboard.prototype.keyUp = function(event) {
	if (this.isActive) {
		var controller = event.data.scope;
		for (var key in controller.keys) {
			if (key == event.keyCode) {
				controller.keysState[key] = false
			}
		}
	}
};
ControllerKeyboard.prototype.update = function(progress) {};
ControllerTime = function(speed, interval, type) {
	this.interval = interval;
	this.speed = speed;
	this.playForward = true;
	this.type = type || ControllerTime.TYPES.NORMAL;
};
ControllerTime.prototype = new JarallaxController();
ControllerTime.prototype.activate = function(jarallax) {
	JarallaxController.prototype.activate.call(this, jarallax);
	this.progress = 0;
	this.timer = setInterval(this.onInterval.bind(this, {
		scope: this
	}), this.interval);
};
ControllerTime.prototype.deactivate = function(jarallax) {
	JarallaxController.prototype.deactivate.call(this, jarallax);
	clearInterval(this.timer);
};
ControllerTime.prototype.onInterval = function(event) {
	var scope = event.scope;
	if (this.isActive) {
		if (this.playForward) {
			this.progress += this.speed
		} else {
			this.progress -= this.speed
		}
		if (this.progress >= 1) {
			switch (this.type) {
			case ControllerTime.TYPES.NORMAL:
				this.progress = 1;
				this.deactivate(this.jarallax);
				break;
			case ControllerTime.TYPES.LOOP:
				this.progress = 0;
				break;
			case ControllerTime.TYPES.BOUNCE:
				this.progress = 1 - this.speed;
				this.playForward = false;
				break
			}
		} else if (this.progress <= 0) {
			this.progress = 0 + this.speed;
			this.playForward = true
		}
		this.jarallax.setProgress(this.progress)
	}
};
ControllerTime.TYPES = {
	NORMAL: 0,
	LOOP: 1,
	BOUNCE: 2
};
ControllerTime.prototype.update = function(progress) {
	this.progress = progress
};
ControllerMousewheel = function(sensitivity, preventDefault) {
	this.sensitivity = -sensitivity;
	this.preventDefault = preventDefault || false
};
ControllerMousewheel.prototype = new JarallaxController();
ControllerMousewheel.prototype.activate = function(jarallax) {
	JarallaxController.prototype.activate.call(this, jarallax);
	$('body').bind('mousewheel', {
		scope: this
	}, this.onScroll)
};
ControllerMousewheel.prototype.deactivate = function(jarallax) {
	$('body').unbind('mousewheel');
	JarallaxController.prototype.deactivate(this, jarallax);
};
ControllerMousewheel.prototype.onScroll = function(event, delta) {
	var controller = event.data.scope;
	if (controller.isActive) {
		controller.jarallax.setProgress(controller.jarallax.progress + controller.sensitivity * delta);
		if (controller.preventDefault) {
			event.preventDefault()
		}
	}
};
ControllerMousewheel.prototype.update = function(progress) {};
$(function() {
	(function($) {
		"use strict";
		var defaults, internalData, methods;
		$.extend({
			roundaboutShapes: {
				def: "lazySusan",
				lazySusan: function(r, a, t) {
					return {
						x: Math.sin(r + a),
						y: (Math.sin(r + 3 * Math.PI / 2 + a) / 8) * t,
						z: (Math.cos(r + a) + 1) / 2,
						scale: (Math.sin(r + Math.PI / 2 + a) / 2) + 0.5
					}
				}
			}
		});
		defaults = {
			bearing: 0.0,
			tilt: 0.0,
			minZ: 100,
			maxZ: 280,
			minOpacity: 0.4,
			maxOpacity: 1.0,
			minScale: 0.4,
			maxScale: 1.0,
			duration: 600,
			btnNext: null,
			btnNextCallback: function() {},
			btnPrev: null,
			btnPrevCallback: function() {},
			btnToggleAutoplay: null,
			btnStartAutoplay: null,
			btnStopAutoplay: null,
			easing: "swing",
			clickToFocus: true,
			clickToFocusCallback: function() {},
			focusBearing: 0.0,
			shape: "lazySusan",
			debug: false,
			childSelector: "li",
			startingChild: null,
			reflect: false,
			floatComparisonThreshold: 0.001,
			autoplay: false,
			autoplayDuration: 1000,
			autoplayPauseOnHover: false,
			autoplayCallback: function() {},
			autoplayInitialDelay: 0,
			enableDrag: false,
			dropDuration: 600,
			dropEasing: "swing",
			dropAnimateTo: "nearest",
			dropCallback: function() {},
			dragAxis: "x",
			dragFactor: 4,
			triggerFocusEvents: true,
			triggerBlurEvents: true,
			responsive: false
		};
		internalData = {
			autoplayInterval: null,
			autoplayIsRunning: false,
			autoplayStartTimeout: null,
			animating: false,
			childInFocus: -1,
			touchMoveStartPosition: null,
			stopAnimation: false,
			lastAnimationStep: false
		};
		methods = {
			init: function(options, callback, relayout) {
				var settings, now = (new Date()).getTime();
				options = (typeof options === "object") ? options : {};
				callback = ($.isFunction(callback)) ? callback : function() {};
				callback = ($.isFunction(options)) ? options : callback;
				settings = $.extend({}, defaults, options, internalData);
				return this.each(function() {
					var self = $(this),
						childCount = self.children(settings.childSelector).length,
						period = 360.0 / childCount,
						startingChild = (settings.startingChild && settings.startingChild > (childCount - 1)) ? (childCount - 1) : settings.startingChild,
						startBearing = (settings.startingChild === null) ? settings.bearing : 360 - (startingChild * period),
						holderCSSPosition = (self.css("position") !== "static") ? self.css("position") : "relative";
					self.css({
						padding: 0,
						position: holderCSSPosition
					}).addClass("roundabout-holder").data("roundabout", $.extend({}, settings, {
						startingChild: startingChild,
						bearing: startBearing,
						oppositeOfFocusBearing: methods.normalize.apply(null, [settings.focusBearing - 180]),
						dragBearing: startBearing,
						period: period
					}));
					if (relayout) {
						self.unbind(".roundabout").children(settings.childSelector).unbind(".roundabout")
					} else {
						if (settings.responsive) {
							$(window).bind("resize", function() {
								methods.stopAutoplay.apply(self);
								methods.relayoutChildren.apply(self)
							})
						}
					}
					var loadItem = '';
					if (settings.clickToFocus) {
						self.children(settings.childSelector).each(function(i) {
							loadItem += '<span class="card-indicator" data-index="' + i + '"></span>';
							$(this).bind("click.roundabout", function() {
								var degrees = methods.getPlacement.apply(self, [i]);
								if (!methods.isInFocus.apply(self, [degrees])) {
									methods.stopAnimation.apply($(this));
									if (!self.data("roundabout").animating) {
										methods.animateBearingToFocus.apply(self, [degrees, self.data("roundabout").clickToFocusCallback])
									}
									return false
								}
							})
						});
						$("#card-indicators").append(loadItem)
					}
					if (settings.btnNext) {
						$(settings.btnNext).bind("click.roundabout", function() {
							if (!self.data("roundabout").animating) {
								methods.animateToNextChild.apply(self, [self.data("roundabout").btnNextCallback])
							}
							return false
						})
					}
					if (settings.btnPrev) {
						$(settings.btnPrev).bind("click.roundabout", function() {
							methods.animateToPreviousChild.apply(self, [self.data("roundabout").btnPrevCallback]);
							return false
						})
					}
					if (settings.btnToggleAutoplay) {
						$(settings.btnToggleAutoplay).bind("click.roundabout", function() {
							methods.toggleAutoplay.apply(self);
							return false
						})
					}
					if (settings.btnStartAutoplay) {
						$(settings.btnStartAutoplay).bind("click.roundabout", function() {
							methods.startAutoplay.apply(self);
							return false
						})
					}
					if (settings.btnStopAutoplay) {
						$(settings.btnStopAutoplay).bind("click.roundabout", function() {
							methods.stopAutoplay.apply(self);
							return false
						})
					}
					if (settings.autoplayPauseOnHover) {
						self.bind("mouseenter.roundabout.autoplay", function() {
							methods.stopAutoplay.apply(self, [true])
						}).bind("mouseleave.roundabout.autoplay", function() {
							methods.startAutoplay.apply(self)
						})
					}
					if (settings.enableDrag) {
						if (!$.isFunction(self.drag)) {
							if (settings.debug) {
								alert("You do not have the drag plugin loaded.")
							}
						} else if (!$.isFunction(self.drop)) {
							if (settings.debug) {
								alert("You do not have the drop plugin loaded.")
							}
						} else {
							self.drag(function(e, properties) {
								var data = self.data("roundabout"),
									delta = (data.dragAxis.toLowerCase() === "x") ? "deltaX" : "deltaY";
								methods.stopAnimation.apply(self);
								methods.setBearing.apply(self, [data.dragBearing + properties[delta] / data.dragFactor])
							}).drop(function(e) {
								var data = self.data("roundabout"),
									method = methods.getAnimateToMethod(data.dropAnimateTo);
								methods.allowAnimation.apply(self);
								methods[method].apply(self, [data.dropDuration, data.dropEasing, data.dropCallback]);
								data.dragBearing = data.period * methods.getNearestChild.apply(self)
							})
						}
						self.each(function() {
							var element = $(this).get(0),
								data = $(this).data("roundabout"),
								page = (data.dragAxis.toLowerCase() === "x") ? "pageX" : "pageY",
								method = methods.getAnimateToMethod(data.dropAnimateTo);
							if (element.addEventListener) {
								element.addEventListener("touchstart", function(e) {
									data.touchMoveStartPosition = e.touches[0][page]
								}, false);
								element.addEventListener("touchmove", function(e) {
									var delta = (e.touches[0][page] - data.touchMoveStartPosition) / data.dragFactor;
									e.preventDefault();
									methods.stopAnimation.apply($(this));
									methods.setBearing.apply($(this), [data.dragBearing + delta])
								}, false);
								element.addEventListener("touchend", function(e) {
									e.preventDefault();
									methods.allowAnimation.apply($(this));
									method = methods.getAnimateToMethod(data.dropAnimateTo);
									methods[method].apply($(this), [data.dropDuration, data.dropEasing, data.dropCallback]);
									data.dragBearing = data.period * methods.getNearestChild.apply($(this))
								}, false)
							}
						})
					}
					methods.initChildren.apply(self, [callback, relayout])
				})
			},
			initChildren: function(callback, relayout) {
				var self = $(this),
					data = self.data("roundabout");
				callback = callback ||
				function() {};
				self.children(data.childSelector).each(function(i) {
					var startWidth, startHeight, startFontSize, degrees = methods.getPlacement.apply(self, [i]);
					if (relayout && $(this).data("roundabout")) {
						startWidth = $(this).data("roundabout").startWidth;
						startHeight = $(this).data("roundabout").startHeight;
						startFontSize = $(this).data("roundabout").startFontSize
					}
					$(this).addClass("roundabout-moveable-item").css("position", "absolute");
					$(this).data("roundabout", {
						startWidth: startWidth || $(this).width(),
						startHeight: startHeight || $(this).height(),
						startFontSize: startFontSize || parseInt($(this).css("font-size"), 10),
						degrees: degrees,
						backDegrees: methods.normalize.apply(null, [degrees - 180]),
						childNumber: i,
						currentScale: 1,
						parent: self
					});
					$("#card-indicators span").eq(i).bind("click.roundabout", function() {
						methods.animateBearingToFocus.apply(self, [degrees, self.data("roundabout").clickToFocusCallback])
					})
				});
				methods.updateChildren.apply(self);
				if (data.autoplay) {
					data.autoplayStartTimeout = setTimeout(function() {
						methods.startAutoplay.apply(self)
					}, data.autoplayInitialDelay)
				}
				self.trigger('ready');
				callback.apply(self);
				return self
			},
			updateChildren: function() {
				return this.each(function() {
					var self = $(this),
						data = self.data("roundabout"),
						inFocus = -1,
						info = {
							bearing: data.bearing,
							tilt: data.tilt,
							stage: {
								width: Math.floor($(this).width() * 0.9),
								height: Math.floor($(this).height() * 0.9)
							},
							animating: data.animating,
							inFocus: data.childInFocus,
							focusBearingRadian: methods.degToRad.apply(null, [data.focusBearing]),
							shape: $.roundaboutShapes[data.shape] || $.roundaboutShapes[$.roundaboutShapes.def]
						};
					info.midStage = {
						width: info.stage.width / 2,
						height: info.stage.height / 2
					};
					info.nudge = {
						width: info.midStage.width + (info.stage.width * 0.05),
						height: info.midStage.height + (info.stage.height * 0.05)
					};
					info.zValues = {
						min: data.minZ,
						max: data.maxZ,
						diff: data.maxZ - data.minZ
					};
					info.opacity = {
						min: data.minOpacity,
						max: data.maxOpacity,
						diff: data.maxOpacity - data.minOpacity
					};
					info.scale = {
						min: data.minScale,
						max: data.maxScale,
						diff: data.maxScale - data.minScale
					};
					self.children(data.childSelector).each(function(i) {
						if (methods.updateChild.apply(self, [$(this), info, i, function() {
							$(this).trigger('ready')
						}]) && (!info.animating || data.lastAnimationStep)) {
							inFocus = i;
							$(this).addClass("roundabout-in-focus");
							$("#card-indicators span").eq(i).addClass("active")
						} else {
							$(this).removeClass("roundabout-in-focus");
							$("#card-indicators span").eq(i).removeClass("active")
						}
					});
					if (inFocus !== info.inFocus) {
						if (data.triggerBlurEvents) {
							self.children(data.childSelector).eq(info.inFocus).trigger("blur")
						}
						data.childInFocus = inFocus;
						if (data.triggerFocusEvents && inFocus !== -1) {
							self.children(data.childSelector).eq(inFocus).trigger("focus")
						}
					}
					self.trigger("childrenUpdated")
				})
			},
			updateChild: function(childElement, info, childPos, callback) {
				var factors, self = this,
					child = $(childElement),
					data = child.data("roundabout"),
					out = [],
					rad = methods.degToRad.apply(null, [(360.0 - data.degrees) + info.bearing]);
				callback = callback ||
				function() {};
				rad = methods.normalizeRad.apply(null, [rad]);
				factors = info.shape(rad, info.focusBearingRadian, info.tilt);
				factors.scale = (factors.scale > 1) ? 1 : factors.scale;
				factors.adjustedScale = (info.scale.min + (info.scale.diff * factors.scale)).toFixed(4);
				factors.width = (factors.adjustedScale * data.startWidth).toFixed(4);
				factors.height = (factors.adjustedScale * data.startHeight).toFixed(4);
				child.css({
					left: ((factors.x * info.midStage.width + info.nudge.width) - factors.width / 2.0).toFixed(0) + "px",
					top: ((factors.y * info.midStage.height + info.nudge.height) - factors.height / 2.0).toFixed(0) + "px",
					width: factors.width + "px",
					height: factors.height + "px",
					opacity: (info.opacity.min + (info.opacity.diff * factors.scale)).toFixed(2),
					zIndex: Math.round(info.zValues.min + (info.zValues.diff * factors.z)),
					fontSize: (factors.adjustedScale * data.startFontSize).toFixed(1) + "px"
				});
				data.currentScale = factors.adjustedScale;
				if (self.data("roundabout").debug) {
					out.push("<div style=\"font-weight: normal; font-size: 10px; padding: 2px; width: " + child.css("width") + "; background-color: #ffc;\">");
					out.push("<strong style=\"font-size: 12px; white-space: nowrap;\">Child " + childPos + "</strong><br />");
					out.push("<strong>left:</strong> " + child.css("left") + "<br />");
					out.push("<strong>top:</strong> " + child.css("top") + "<br />");
					out.push("<strong>width:</strong> " + child.css("width") + "<br />");
					out.push("<strong>opacity:</strong> " + child.css("opacity") + "<br />");
					out.push("<strong>height:</strong> " + child.css("height") + "<br />");
					out.push("<strong>z-index:</strong> " + child.css("z-index") + "<br />");
					out.push("<strong>font-size:</strong> " + child.css("font-size") + "<br />");
					out.push("<strong>scale:</strong> " + child.data("roundabout").currentScale);
					out.push("</div>");
					child.html(out.join(""))
				}
				child.trigger("reposition");
				callback.apply(self);
				return methods.isInFocus.apply(self, [data.degrees])
			},
			setBearing: function(bearing, callback) {
				callback = callback ||
				function() {};
				bearing = methods.normalize.apply(null, [bearing]);
				this.each(function() {
					var diff, lowerValue, higherValue, self = $(this),
						data = self.data("roundabout"),
						oldBearing = data.bearing;
					data.bearing = bearing;
					self.trigger("bearingSet");
					methods.updateChildren.apply(self);
					diff = Math.abs(oldBearing - bearing);
					if (!data.animating || diff > 180) {
						return
					}
					diff = Math.abs(oldBearing - bearing);
					self.children(data.childSelector).each(function(i) {
						var eventType;
						if (methods.isChildBackDegreesBetween.apply($(this), [bearing, oldBearing])) {
							eventType = (oldBearing > bearing) ? "Clockwise" : "Counterclockwise";
							$(this).trigger("move" + eventType + "ThroughBack")
						}
					})
				});
				callback.apply(this);
				return this
			},
			adjustBearing: function(delta, callback) {
				callback = callback ||
				function() {};
				if (delta === 0) {
					return this
				}
				this.each(function() {
					methods.setBearing.apply($(this), [$(this).data("roundabout").bearing + delta])
				});
				callback.apply(this);
				return this
			},
			setTilt: function(tilt, callback) {
				callback = callback ||
				function() {};
				this.each(function() {
					$(this).data("roundabout").tilt = tilt;
					methods.updateChildren.apply($(this))
				});
				callback.apply(this);
				return this
			},
			adjustTilt: function(delta, callback) {
				callback = callback ||
				function() {};
				this.each(function() {
					methods.setTilt.apply($(this), [$(this).data("roundabout").tilt + delta])
				});
				callback.apply(this);
				return this
			},
			animateToBearing: function(bearing, duration, easing, passedData, callback) {
				var now = (new Date()).getTime();
				callback = callback ||
				function() {};
				if ($.isFunction(passedData)) {
					callback = passedData;
					passedData = null
				} else if ($.isFunction(easing)) {
					callback = easing;
					easing = null
				} else if ($.isFunction(duration)) {
					callback = duration;
					duration = null
				}
				this.each(function() {
					var timer, easingFn, newBearing, self = $(this),
						data = self.data("roundabout"),
						thisDuration = (!duration) ? data.duration : duration,
						thisEasingType = (easing) ? easing : data.easing || "swing";
					if (!passedData) {
						passedData = {
							timerStart: now,
							start: data.bearing,
							totalTime: thisDuration
						}
					}
					timer = now - passedData.timerStart;
					if (data.stopAnimation) {
						methods.allowAnimation.apply(self);
						data.animating = false;
						return
					}
					if (timer < thisDuration) {
						if (!data.animating) {
							self.trigger("animationStart")
						}
						data.animating = true;
						if (typeof $.easing.def === "string") {
							easingFn = $.easing[thisEasingType] || $.easing[$.easing.def];
							newBearing = easingFn(null, timer, passedData.start, bearing - passedData.start, passedData.totalTime)
						} else {
							newBearing = $.easing[thisEasingType]((timer / passedData.totalTime), timer, passedData.start, bearing - passedData.start, passedData.totalTime)
						}
						if (methods.compareVersions.apply(null, [$().jquery, "1.7.2"]) >= 0 && !($.easing["easeOutBack"])) {
							newBearing = passedData.start + ((bearing - passedData.start) * newBearing)
						}
						newBearing = methods.normalize.apply(null, [newBearing]);
						data.dragBearing = newBearing;
						methods.setBearing.apply(self, [newBearing, function() {
							setTimeout(function() {
								methods.animateToBearing.apply(self, [bearing, thisDuration, thisEasingType, passedData, callback])
							}, 0)
						}])
					} else {
						data.lastAnimationStep = true;
						bearing = methods.normalize.apply(null, [bearing]);
						methods.setBearing.apply(self, [bearing, function() {
							self.trigger("animationEnd")
						}]);
						data.animating = false;
						data.lastAnimationStep = false;
						data.dragBearing = bearing;
						callback.apply(self)
					}
				});
				return this
			},
			animateToNearbyChild: function(passedArgs, which) {
				var duration = passedArgs[0],
					easing = passedArgs[1],
					callback = passedArgs[2] ||
				function() {};
				if ($.isFunction(easing)) {
					callback = easing;
					easing = null
				} else if ($.isFunction(duration)) {
					callback = duration;
					duration = null
				}
				return this.each(function() {
					var j, range, self = $(this),
						data = self.data("roundabout"),
						bearing = (!data.reflect) ? data.bearing % 360 : data.bearing,
						length = self.children(data.childSelector).length;
					if (!data.animating) {
						if ((data.reflect && which === "previous") || (!data.reflect && which === "next")) {
							bearing = (Math.abs(bearing) < data.floatComparisonThreshold) ? 360 : bearing;
							for (j = 0; j < length; j += 1) {
								range = {
									lower: (data.period * j),
									upper: (data.period * (j + 1))
								};
								range.upper = (j === length - 1) ? 360 : range.upper;
								if (bearing <= Math.ceil(range.upper) && bearing >= Math.floor(range.lower)) {
									if (length === 2 && bearing === 360) {
										methods.animateToDelta.apply(self, [-180, duration, easing, callback])
									} else {
										methods.animateBearingToFocus.apply(self, [range.lower, duration, easing, callback])
									}
									break
								}
							}
						} else {
							bearing = (Math.abs(bearing) < data.floatComparisonThreshold || 360 - Math.abs(bearing) < data.floatComparisonThreshold) ? 0 : bearing;
							for (j = length - 1; j >= 0; j -= 1) {
								range = {
									lower: data.period * j,
									upper: data.period * (j + 1)
								};
								range.upper = (j === length - 1) ? 360 : range.upper;
								if (bearing >= Math.floor(range.lower) && bearing < Math.ceil(range.upper)) {
									if (length === 2 && bearing === 360) {
										methods.animateToDelta.apply(self, [180, duration, easing, callback])
									} else {
										methods.animateBearingToFocus.apply(self, [range.upper, duration, easing, callback])
									}
									break
								}
							}
						}
					}
				})
			},
			animateToNearestChild: function(duration, easing, callback) {
				callback = callback ||
				function() {};
				if ($.isFunction(easing)) {
					callback = easing;
					easing = null
				} else if ($.isFunction(duration)) {
					callback = duration;
					duration = null
				}
				return this.each(function() {
					var nearest = methods.getNearestChild.apply($(this));
					methods.animateToChild.apply($(this), [nearest, duration, easing, callback])
				})
			},
			animateToChild: function(childPosition, duration, easing, callback) {
				callback = callback ||
				function() {};
				if ($.isFunction(easing)) {
					callback = easing;
					easing = null
				} else if ($.isFunction(duration)) {
					callback = duration;
					duration = null
				}
				return this.each(function() {
					var child, self = $(this),
						data = self.data("roundabout");
					if (data.childInFocus !== childPosition && !data.animating) {
						child = self.children(data.childSelector).eq(childPosition);
						methods.animateBearingToFocus.apply(self, [child.data("roundabout").degrees, duration, easing, callback])
					}
				})
			},
			animateToNextChild: function(duration, easing, callback) {
				return methods.animateToNearbyChild.apply(this, [arguments, "next"])
			},
			animateToPreviousChild: function(duration, easing, callback) {
				return methods.animateToNearbyChild.apply(this, [arguments, "previous"])
			},
			animateToDelta: function(degrees, duration, easing, callback) {
				callback = callback ||
				function() {};

				if ($.isFunction(easing)) {
					callback = easing;
					easing = null
				} else if ($.isFunction(duration)) {
					callback = duration;
					duration = null
				}
				return this.each(function() {
					var delta = $(this).data("roundabout").bearing + degrees;
					methods.animateToBearing.apply($(this), [delta, duration, easing, callback])
				})
			},
			animateBearingToFocus: function(degrees, duration, easing, callback) {
				callback = callback ||
				function() {};
				if ($.isFunction(easing)) {
					callback = easing;
					easing = null
				} else if ($.isFunction(duration)) {
					callback = duration;
					duration = null
				}
				return this.each(function() {
					var delta = $(this).data("roundabout").bearing - degrees;
					delta = (Math.abs(360 - delta) < Math.abs(delta)) ? 360 - delta : -delta;
					delta = (delta > 180) ? -(360 - delta) : delta;
					if (delta !== 0) {
						methods.animateToDelta.apply($(this), [delta, duration, easing, callback])
					}
				})
			},
			stopAnimation: function() {
				return this.each(function() {
					$(this).data("roundabout").stopAnimation = true
				})
			},
			allowAnimation: function() {
				return this.each(function() {
					$(this).data("roundabout").stopAnimation = false
				})
			},
			startAutoplay: function(callback) {
				return this.each(function() {
					var self = $(this),
						data = self.data("roundabout");
					callback = callback || data.autoplayCallback ||
					function() {};
					clearInterval(data.autoplayInterval);
					data.autoplayInterval = setInterval(function() {
						methods.animateToNextChild.apply(self, [callback])
					}, data.autoplayDuration);
					data.autoplayIsRunning = true;
					self.trigger("autoplayStart")
				})
			},
			stopAutoplay: function(keepAutoplayBindings) {
				return this.each(function() {
					clearInterval($(this).data("roundabout").autoplayInterval);
					$(this).data("roundabout").autoplayInterval = null;
					$(this).data("roundabout").autoplayIsRunning = false;
					if (!keepAutoplayBindings) {
						$(this).unbind(".autoplay")
					}
					$(this).trigger("autoplayStop")
				})
			},
			toggleAutoplay: function(callback) {
				return this.each(function() {
					var self = $(this),
						data = self.data("roundabout");
					callback = callback || data.autoplayCallback ||
					function() {};
					if (!methods.isAutoplaying.apply($(this))) {
						methods.startAutoplay.apply($(this), [callback])
					} else {
						methods.stopAutoplay.apply($(this), [callback])
					}
				})
			},
			isAutoplaying: function() {
				return (this.data("roundabout").autoplayIsRunning)
			},
			changeAutoplayDuration: function(duration) {
				return this.each(function() {
					var self = $(this),
						data = self.data("roundabout");
					data.autoplayDuration = duration;
					if (methods.isAutoplaying.apply(self)) {
						methods.stopAutoplay.apply(self);
						setTimeout(function() {
							methods.startAutoplay.apply(self)
						}, 10)
					}
				})
			},
			normalize: function(degrees) {
				var inRange = degrees % 360.0;
				return (inRange < 0) ? 360 + inRange : inRange
			},
			normalizeRad: function(radians) {
				while (radians < 0) {
					radians += (Math.PI * 2)
				}
				while (radians > (Math.PI * 2)) {
					radians -= (Math.PI * 2)
				}
				return radians
			},
			isChildBackDegreesBetween: function(value1, value2) {
				var backDegrees = $(this).data("roundabout").backDegrees;
				if (value1 > value2) {
					return (backDegrees >= value2 && backDegrees < value1)
				} else {
					return (backDegrees < value2 && backDegrees >= value1)
				}
			},
			getAnimateToMethod: function(effect) {
				effect = effect.toLowerCase();
				if (effect === "next") {
					return "animateToNextChild"
				} else if (effect === "previous") {
					return "animateToPreviousChild"
				}
				return "animateToNearestChild"
			},
			relayoutChildren: function() {
				return this.each(function() {
					var self = $(this),
						settings = $.extend({}, self.data("roundabout"));
					settings.startingChild = self.data("roundabout").childInFocus;
					methods.init.apply(self, [settings, null, true])
				})
			},
			getNearestChild: function() {
				var self = $(this),
					data = self.data("roundabout"),
					length = self.children(data.childSelector).length;
				if (!data.reflect) {
					return ((length) - (Math.round(data.bearing / data.period) % length)) % length
				} else {
					return (Math.round(data.bearing / data.period) % length)
				}
			},
			degToRad: function(degrees) {
				return methods.normalize.apply(null, [degrees]) * Math.PI / 180.0
			},
			getPlacement: function(child) {
				var data = this.data("roundabout");
				return (!data.reflect) ? 360.0 - (data.period * child) : data.period * child
			},
			isInFocus: function(degrees) {
				var diff, self = this,
					data = self.data("roundabout"),
					bearing = methods.normalize.apply(null, [data.bearing]);
				degrees = methods.normalize.apply(null, [degrees]);
				diff = Math.abs(bearing - degrees);
				return (diff <= data.floatComparisonThreshold || diff >= 360 - data.floatComparisonThreshold)
			},
			getChildInFocus: function() {
				var data = $(this).data("roundabout");
				return (data.childInFocus > -1) ? data.childInFocus : false
			},
			compareVersions: function(baseVersion, compareVersion) {
				var i, base = baseVersion.split(/\./i),
					compare = compareVersion.split(/\./i),
					maxVersionSegmentLength = (base.length > compare.length) ? base.length : compare.length;
				for (i = 0; i <= maxVersionSegmentLength; i++) {
					if (base[i] && !compare[i] && parseInt(base[i], 10) !== 0) {
						return 1
					} else if (compare[i] && !base[i] && parseInt(compare[i], 10) !== 0) {
						return -1
					} else if (base[i] === compare[i]) {
						continue
					}
					if (base[i] && compare[i]) {
						if (parseInt(base[i], 10) > parseInt(compare[i], 10)) {
							return 1
						} else {
							return -1
						}
					}
				}
				return 0
			}
		};
		$.fn.roundabout = function(method) {
			if (methods[method]) {
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1))
			} else if (typeof method === "object" || $.isFunction(method) || !method) {
				return methods.init.apply(this, arguments)
			} else {
				$.error("Method " + method + " does not exist for jQuery.roundabout.")
			}
		}
	})(jQuery)
});
$(function() {
	jQuery.easing['jswing'] = jQuery.easing['swing'];
	jQuery.extend(jQuery.easing, {
		def: 'easeOutQuad',
		swing: function(x, t, b, c, d) {
			return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
		},
		easeInQuad: function(x, t, b, c, d) {
			return c * (t /= d) * t + b
		},
		easeOutQuad: function(x, t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b
		},
		easeInOutQuad: function(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			return -c / 2 * ((--t) * (t - 2) - 1) + b
		},
		easeInCubic: function(x, t, b, c, d) {
			return c * (t /= d) * t * t + b
		},
		easeOutCubic: function(x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b
		},
		easeInOutCubic: function(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t + 2) + b
		},
		easeInQuart: function(x, t, b, c, d) {
			return c * (t /= d) * t * t * t + b
		},
		easeOutQuart: function(x, t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b
		},
		easeInOutQuart: function(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b
		},
		easeInQuint: function(x, t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b
		},
		easeOutQuint: function(x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b
		},
		easeInOutQuint: function(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
		},
		easeInSine: function(x, t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
		},
		easeOutSine: function(x, t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b
		},
		easeInOutSine: function(x, t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
		},
		easeInExpo: function(x, t, b, c, d) {
			return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
		},
		easeOutExpo: function(x, t, b, c, d) {
			return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
		},
		easeInOutExpo: function(x, t, b, c, d) {
			if (t == 0) return b;
			if (t == d) return b + c;
			if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
		},
		easeInCirc: function(x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
		},
		easeOutCirc: function(x, t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
		},
		easeInOutCirc: function(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
		},
		easeInElastic: function(x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d) == 1) return b + c;
			if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;
				var s = p / 4
			} else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
		},
		easeOutElastic: function(x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d) == 1) return b + c;
			if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;
				var s = p / 4
			} else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
		},
		easeInOutElastic: function(x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d / 2) == 2) return b + c;
			if (!p) p = d * (.3 * 1.5);
			if (a < Math.abs(c)) {
				a = c;
				var s = p / 4
			} else var s = p / (2 * Math.PI) * Math.asin(c / a);
			if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
		},
		easeInBack: function(x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * (t /= d) * t * ((s + 1) * t - s) + b
		},
		easeOutBack: function(x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
		},
		easeInOutBack: function(x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
			return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
		},
		easeInBounce: function(x, t, b, c, d) {
			return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
		},
		easeOutBounce: function(x, t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b
			} else if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
			} else if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
			} else {
				return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
			}
		},
		easeInOutBounce: function(x, t, b, c, d) {
			if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
			return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
		}

	})
});
include("js/jquery.event.drag-2.2.js");
$(function() {;
	(function($) {
		$.fn.drop = function(str, arg, opts) {
			var type = typeof str == "string" ? str : "",
				fn = $.isFunction(str) ? str : $.isFunction(arg) ? arg : null;
			if (type.indexOf("drop") !== 0) type = "drop" + type;
			opts = (str == fn ? arg : opts) || {};
			return fn ? this.bind(type, opts, fn) : this.trigger(type)
		};
		$.drop = function(opts) {
			opts = opts || {};
			drop.multi = opts.multi === true ? Infinity : opts.multi === false ? 1 : !isNaN(opts.multi) ? opts.multi : drop.multi;
			drop.delay = opts.delay || drop.delay;
			drop.tolerance = $.isFunction(opts.tolerance) ? opts.tolerance : opts.tolerance === null ? null : drop.tolerance;
			drop.mode = opts.mode || drop.mode || 'intersect'
		};
		var $event = $.event,
			$special = $event.special,
			drop = $.event.special.drop = {
				multi: 1,
				delay: 20,
				mode: 'overlap',
				targets: [],
				datakey: "dropdata",
				noBubble: true,
				add: function(obj) {
					var data = $.data(this, drop.datakey);
					data.related += 1
				},
				remove: function() {
					$.data(this, drop.datakey).related -= 1
				},
				setup: function() {
					if ($.data(this, drop.datakey)) return;
					var data = {
						related: 0,
						active: [],
						anyactive: 0,
						winner: 0,
						location: {}
					};
					$.data(this, drop.datakey, data);
					drop.targets.push(this)
				},
				teardown: function() {
					var data = $.data(this, drop.datakey) || {};
					if (data.related) return;
					$.removeData(this, drop.datakey);
					var element = this;
					drop.targets = $.grep(drop.targets, function(target) {
						return (target !== element)
					})
				},
				handler: function(event, dd) {
					var results, $targets;
					if (!dd) return;
					switch (event.type) {
					case 'mousedown':
					case 'touchstart':
						$targets = $(drop.targets);
						if (typeof dd.drop == "string") $targets = $targets.filter(dd.drop);
						$targets.each(function() {
							var data = $.data(this, drop.datakey);
							data.active = [];
							data.anyactive = 0;
							data.winner = 0
						});
						dd.droppable = $targets;
						$special.drag.hijack(event, "dropinit", dd);
						break;
					case 'mousemove':
					case 'touchmove':
						drop.event = event;
						if (!drop.timer) drop.tolerate(dd);
						break;
					case 'mouseup':
					case 'touchend':
						drop.timer = clearTimeout(drop.timer);
						if (dd.propagates) {
							$special.drag.hijack(event, "drop", dd);
							$special.drag.hijack(event, "dropend", dd)
						}
						break
					}
				},
				locate: function(elem, index) {
					var data = $.data(elem, drop.datakey),
						$elem = $(elem),
						posi = $elem.offset() || {},
						height = $elem.outerHeight(),
						width = $elem.outerWidth(),
						location = {
							elem: elem,
							width: width,
							height: height,
							top: posi.top,
							left: posi.left,
							right: posi.left + width,
							bottom: posi.top + height
						};
					if (data) {
						data.location = location;
						data.index = index;
						data.elem = elem
					}
					return location
				},
				contains: function(target, test) {
					return ((test[0] || test.left) >= target.left && (test[0] || test.right) <= target.right && (test[1] || test.top) >= target.top && (test[1] || test.bottom) <= target.bottom)
				},
				modes: {
					'intersect': function(event, proxy, target) {
						return this.contains(target, [event.pageX, event.pageY]) ? 1e9 : this.modes.overlap.apply(this, arguments)
					},
					'overlap': function(event, proxy, target) {
						return Math.max(0, Math.min(target.bottom, proxy.bottom) - Math.max(target.top, proxy.top)) * Math.max(0, Math.min(target.right, proxy.right) - Math.max(target.left, proxy.left))
					},
					'fit': function(event, proxy, target) {
						return this.contains(target, proxy) ? 1 : 0
					},
					'middle': function(event, proxy, target) {
						return this.contains(target, [proxy.left + proxy.width * .5, proxy.top + proxy.height * .5]) ? 1 : 0
					}
				},
				sort: function(a, b) {
					return (b.winner - a.winner) || (a.index - b.index)
				},
				tolerate: function(dd) {
					var i, drp, drg, data, arr, len, elem, x = 0,
						ia, end = dd.interactions.length,
						xy = [drop.event.pageX, drop.event.pageY],
						tolerance = drop.tolerance || drop.modes[drop.mode];
					do
					if (ia = dd.interactions[x]) {
						if (!ia) return;
						ia.drop = [];
						arr = [];
						len = ia.droppable.length;
						if (tolerance) drg = drop.locate(ia.proxy);
						i = 0;
						do
						if (elem = ia.droppable[i]) {
							data = $.data(elem, drop.datakey);
							drp = data.location;
							if (!drp) continue;
							data.winner = tolerance ? tolerance.call(drop, drop.event, drg, drp) : drop.contains(drp, xy) ? 1 : 0;
							arr.push(data)
						}
						while (++i < len);
						arr.sort(drop.sort);
						i = 0;
						do
						if (data = arr[i]) {
							if (data.winner && ia.drop.length < drop.multi) {
								if (!data.active[x] && !data.anyactive) {
									if ($special.drag.hijack(drop.event, "dropstart", dd, x, data.elem)[0] !== false) {
										data.active[x] = 1;
										data.anyactive += 1
									} else data.winner = 0
								}
								if (data.winner) ia.drop.push(data.elem)
							} else if (data.active[x] && data.anyactive == 1) {
								$special.drag.hijack(drop.event, "dropend", dd, x, data.elem);
								data.active[x] = 0;
								data.anyactive -= 1
							}
						}
						while (++i < len)
					}
					while (++x < end) if (drop.last && xy[0] == drop.last.pageX && xy[1] == drop.last.pageY) delete drop.timer;
					else drop.timer = setTimeout(function() {
						drop.tolerate(dd)
					}, drop.delay);
					drop.last = drop.event
				}
			};
		$special.dropinit = $special.dropstart = $special.dropend = drop
	})(jQuery)
});
var jarallax;
init = function() {
	jarallax = new Jarallax(new ControllerScroll(true));
	var currentProgress = 0;
	var progressSteps = 1 / 5;
	jarallax.setDefault('#poster', {
		opacity: 1,
		display: 'block'
	});
	jarallax.setDefault('#produce_ziti', {
		opacity: 1,
		display: 'block'
	});
	jarallax.setDefault('#chengbao', {
		opacity: 1,
		display: 'block'
	});
	jarallax.setDefault('#ziti_one', {
		opacity: 0,
		display: 'none'
	});
	/*jarallax.setDefault('#ziti_two', {
		opacity: 0,
		display: 'none'
	});*/
	jarallax.setDefault('#ziti_three', {
		opacity: 0,
		display: 'none'
	});
	jarallax.setDefault('#ziti_four', {
		opacity: 0,
		display: 'none'
	});
	jarallax.addAnimation('#produce_ziti', [{
		progress: '1%',
		display: 'block',
		opacity: '1',
		top: '800px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		top: '800px'
	}]);
	jarallax.addAnimation('#ziti_one', [{
		progress: '3%',
		display: 'none',
		opacity: '0',
		top: '0px'
	}, {
		progress: '4%',
		display: 'block',
		opacity: '0.1',
		top: '25px'
	}, {
		progress: '5%',
		display: 'block',
		opacity: '0.2',
		top: '50px'
	}, {
		progress: '6%',
		display: 'block',
		opacity: '1',
		top: '75px'
	}, {
		progress: '7%',
		display: 'block',
		opacity: '1',
		top: '100px'
	}, {
		progress: '8%',
		display: 'block',
		opacity: '1',
		top: '125px'
	}, {
		progress: '9%',
		display: 'block',
		opacity: '1',
		top: '150px'
	}, {
		progress: '10%',
		display: 'block',
		opacity: '1',
		top: '175px'
	}, {
		progress: '11%',
		display: 'block',
		opacity: '1',
		top: '200px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		top: '200px'
	}]);
	/*jarallax.addAnimation('#ziti_two', [{
		progress: '10%',
		display: 'block',
		opacity: '0',
		top: '300px'
	}, {
		progress: '11%',
		display: 'block',
		opacity: '1',
		top: '310px'
	}, {
		progress: '12%',
		display: 'block',
		opacity: '1',
		top: '320px'
	}, {
		progress: '13%',
		display: 'block',
		opacity: '1',
		top: '330px'
	}, {
		progress: '14%',
		display: 'block',
		opacity: '1',
		top: '340px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		top: '340px'
	}]);*/
	jarallax.addAnimation('#ziti_three', [{
		progress: '11%',
		display: 'block',
		opacity: '0',
		top: '350px'
	}, {
		progress: '12%',
		display: 'block',
		opacity: '1',
		top: '450px'
	}, {
		progress: '13%',
		display: 'block',
		opacity: '1',
		top: '550px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		top: '550px'
	}]);
	jarallax.addAnimation('#ziti_four', [{
		progress: '3%',
		display: 'none',
		opacity: '0',
		top: '340px'
	}, {
		progress: '4%',
		display: 'block',
		opacity: '1',
		top: '290px'
	}, {
		progress: '5%',
		display: 'block',
		opacity: '1',
		top: '240px'
	}, {
		progress: '6%',
		display: 'block',
		opacity: '1',
		top: '190px'
	}, {
		progress: '7%',
		display: 'block',
		opacity: '1',
		top: '140px'
	}, {
		progress: '8%',
		display: 'block',
		opacity: '1',
		top: '90px'
	}, {
		progress: '9%',
		display: 'block',
		opacity: '1',
		top: '40px'
	}, {
		progress: '10%',
		display: 'block',
		opacity: '1',
		top: '-10px'
	}, {
		progress: '11%',
		display: 'block',
		opacity: '1',
		top: '-60px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		top: '-60px'
	}]);
	jarallax.addAnimation('#chengbao', [{
		progress: '15%',
		display: 'block',
		opacity: '1',
		top: '1600px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		top: '1600px'
	}]);
	jarallax.addAnimation('#chengbao01', [{
		progress: '25%',
		display: 'none',
		opacity: '0',
		top: '1800px'
	}, {
		progress: '26%',

		display: 'block',
		opacity: '0',
		top: '1760px'
	}, {
		progress: '27%',
		display: 'block',
		opacity: '1',
		top: '1720px'
	}, {
		progress: '28%',
		display: 'block',
		opacity: '1',
		top: '1680px'
	}, {
		progress: '29%',
		display: 'block',
		opacity: '1',
		top: '1640px'
	}, {
		progress: '30%',
		display: 'block',
		opacity: '1',
		top: '1600px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		top: '1600px'
	}]);
	jarallax.addAnimation('#chengbao02', [{
		progress: '25%',
		display: 'none',
		opacity: '0',
		top: '1400px'
	}, {
		progress: '26%',
		display: 'block',
		opacity: '1',
		top: '1440px'
	}, {
		progress: '27%',
		display: 'block',
		opacity: '1',
		top: '1480px'
	}, {
		progress: '28%',
		display: 'block',
		opacity: '1',
		top: '1520px'
	}, {
		progress: '29%',
		display: 'block',
		opacity: '1',
		top: '1560px'
	}, {
		progress: '30%',
		display: 'block',
		opacity: '1',
		top: '1600px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		top: '1600px'
	}]);
	jarallax.addAnimation('#ball10', [{
		progress: '33%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '250px',
		'background-position': '0px 0px',
		width: '470px',
		height: '580px'
	}, {
		progress: '36%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '357px',
		'background-position': '0px -580px',
		width: '470px',
		height: '580px'
	}, {
		progress: '38%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '464px',
		'background-position': '0px -1160px',
		width: '470px',
		height: '580px'
	}, {
		progress: '40%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '571px',
		'background-position': '0px -1740px',
		width: '470px',
		height: '580px'
	}, {
		progress: '42%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '678px',
		'background-position': '0px -2320px',
		width: '470px',
		height: '580px'
	}, {
		progress: '43%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '785px',
		'background-position': '0px -2900px',
		width: '470px',
		height: '580px'
	}, {
		progress: '44%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '892px',
		'background-position': '0px -2900px',
		width: '470px',
		height: '580px'
	}, {

		progress: '45%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1000px',
		'background-position': '0px -2900px',
		width: '470px',
		height: '580px'
	}, {
		progress: '50%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1000px',
		'background-position': '0px -2900px',
		width: '470px',
		height: '580px'
	}, {

		progress: '51%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1069px',
		'background-position': '0px -2900px',
		width: '470px',
		height: '580px'
	}, {
		progress: '52%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1138px',
		'background-position': '0px -2900px',
		width: '470px',
		height: '580px'
	}, {
		progress: '53%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1207px',
		'background-position': '0px -2900px',
		width: '470px',
		height: '580px'
	}, {
		progress: '54%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1276px',
		'background-position': '0px -2320px',
		width: '470px',
		height: '580px'
	}, {
		progress: '55%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1345px',
		'background-position': '0px -2320px',
		width: '470px',
		height: '580px'
	}, {
		progress: '56%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1414px',
		'background-position': '0px -2320px',
		width: '470px',
		height: '580px'
	}, {
		progress: '57%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1483px',
		'background-position': '0px -2320px',
		width: '470px',
		height: '580px'
	}, {
		progress: '58%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1552px',
		'background-position': '0px -1740px',
		width: '470px',
		height: '580px'
	}, {
		progress: '59%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1623px',
		'background-position': '0px -1740px',
		width: '470px',
		height: '580px'
	}, {
		progress: '60%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1692px',
		'background-position': '0px -1740px',
		width: '470px',
		height: '580px'
	}, {
		progress: '61%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1692px',
		'background-position': '0px -1740px',
		width: '470px',
		height: '580px'
	}, {
		progress: '62%',
		display: 'none',
		opacity: '0',
		left: '290px',
		top: '1692px',
		'background-position': '0px -1740px',
		width: '470px',
		height: '580px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		left: '290px',
		top: '1692px',
		'background-position': '0px -1740px',
		width: '470px',
		height: '580px'
	}]);
	jarallax.addAnimation('#ball1', [{
		progress: '33%',
		display: 'block',
		opacity: '1',
		left: '100px',
		top: '150px',
		'background-position': '0px 0px',
		width: '300px',
		height: '170px'
	}, {
		progress: '36%',
		display: 'block',
		opacity: '1',
		left: '105px',
		top: '247px',
		'background-position': '0px -358px',
		width: '300px',
		height: '193px'
	}, {
		progress: '38%',
		display: 'block',
		opacity: '1',
		left: '110px',
		top: '344px',
		'background-position': '0px -716px',
		width: '300px',
		height: '205px'
	}, {
		progress: '40%',
		display: 'block',
		opacity: '1',
		left: '115px',
		top: '441px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '42%',
		display: 'block',
		opacity: '1',
		left: '120px',
		top: '538px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '43%',
		display: 'block',
		opacity: '1',
		left: '125px',
		top: '635px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '44%',
		display: 'block',
		opacity: '1',
		left: '130px',
		top: '732px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '45%',
		display: 'block',
		opacity: '1',
		left: '138px',
		top: '828px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '50%',
		display: 'block',
		opacity: '1',
		left: '138px',
		top: '828px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '51%',
		display: 'block',
		opacity: '1',
		left: '225px',
		top: '930px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '52%',
		display: 'block',
		opacity: '1',
		left: '312px',
		top: '1030px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '53%',
		display: 'block',
		opacity: '1',
		left: '399px',
		top: '1130px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '54%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1230px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '55%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1330px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '56%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1430px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '57%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1480px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '58%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1580px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '59%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1680px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '60%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1700px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '61%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1770px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '62%',
		display: 'none',
		opacity: '0',
		left: '400px',
		top: '1770px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1770px',
		'background-position': '0px -1074px',
		width: '300px',
		height: '225px'
	}]);
	jarallax.addAnimation('#ball5', [{
		progress: '33%',
		display: 'block',
		opacity: '1',
		left: '230px',
		top: '400px',
		'background-position': '0px 0px',
		width: '200px',
		height: '168px'
	}, {
		progress: '36%',
		display: 'block',
		opacity: '1',
		left: '236px',
		top: '466px',
		'background-position': '0px -324px',
		width: '200px',
		height: '185px'
	}, {
		progress: '38%',
		display: 'block',
		opacity: '1',
		left: '242px',
		top: '532px',
		'background-position': '0px -648px',
		width: '200px',
		height: '206px'
	}, {
		progress: '40%',
		display: 'block',
		opacity: '1',
		left: '248px',
		top: '598px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '42%',
		display: 'block',
		opacity: '1',
		left: '254px',
		top: '664px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '43%',
		display: 'block',
		opacity: '1',
		left: '260px',
		top: '730px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '44%',
		display: 'block',
		opacity: '1',
		left: '266px',
		top: '796px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '45%',
		display: 'block',
		opacity: '1',
		left: '270px',
		top: '860px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '50%',
		display: 'block',
		opacity: '1',
		left: '270px',
		top: '860px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '51%',
		display: 'block',
		opacity: '1',
		left: '313px',
		top: '930px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '52%',
		display: 'block',
		opacity: '1',
		left: '356px',
		top: '1030px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '53%',
		display: 'block',
		opacity: '1',
		left: '399px',
		top: '1130px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '54%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1230px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '55%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1330px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '56%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1430px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '57%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1480px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '58%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1580px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '59%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1680px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '60%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1700px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '61%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1770px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '62%',
		display: 'none',
		opacity: '0',
		left: '400px',
		top: '1770px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1770px',
		'background-position': '0px -952px',
		width: '200px',
		height: '235px'
	}]);
	jarallax.addAnimation('#ball9', [{
		progress: '33%',
		display: 'block',
		opacity: '1',
		left: '30px',
		top: '380px',
		'background-position': '0px 0px',
		width: '212px',
		height: '195px'
	}, {
		progress: '36%',
		display: 'block',
		opacity: '1',
		left: '30px',
		top: '472px',
		'background-position': '0px -356px',
		width: '212px',
		height: '220px'
	}, {
		progress: '38%',
		display: 'block',
		opacity: '1',
		left: '30px',
		top: '564px',
		'background-position': '0px -712px',
		width: '212px',
		height: '245px'
	}, {
		progress: '40%',
		display: 'block',
		opacity: '1',
		left: '30px',
		top: '656px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '42%',
		display: 'block',
		opacity: '1',
		left: '30px',
		top: '748px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '43%',
		display: 'block',
		opacity: '1',
		left: '30px',
		top: '840px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '44%',
		display: 'block',
		opacity: '1',
		left: '30px',
		top: '932px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '45%',
		display: 'block',
		opacity: '1',
		left: '30px',
		top: '1020px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '50%',
		display: 'block',
		opacity: '1',
		left: '30px',
		top: '1020px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '51%',
		display: 'block',
		opacity: '1',
		left: '153px',
		top: '930px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '52%',
		display: 'block',
		opacity: '1',
		left: '276px',
		top: '1030px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '53%',
		display: 'block',
		opacity: '1',
		left: '399px',
		top: '1130px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '54%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1230px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '55%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1330px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '56%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1430px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '57%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1480px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '58%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1580px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '59%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1680px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '60%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1700px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '61%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1770px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}, {
		progress: '62%',
		display: 'none',
		opacity: '0',
		left: '400px',
		top: '1770px',
		'background-position': '0px -1068px',
		width: '212px',

		height: '260px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1770px',
		'background-position': '0px -1068px',
		width: '212px',
		height: '260px'
	}]);
	jarallax.addAnimation('#ball2', [{
		progress: '33%',
		display: 'block',
		opacity: '1',
		left: '250px',
		top: '200px',
		'background-position': '0px 0px',
		width: '230px',
		height: '180px'
	}, {
		progress: '36%',
		display: 'block',
		opacity: '1',
		left: '284px',
		top: '290px',
		'background-position': '0px -350px',
		width: '230px',
		height: '203px'
	}, {
		progress: '38%',
		display: 'block',
		opacity: '1',
		left: '301px',
		top: '380px',
		'background-position': '0px -700px',
		width: '230px',
		height: '218px'
	}, {
		progress: '40%',
		display: 'block',
		opacity: '1',
		left: '335px',
		top: '470px',
		'background-position': '0px -1050px',
		width: '230px',
		height: '222px'
	}, {
		progress: '42%',
		display: 'block',
		opacity: '1',
		left: '369px',
		top: '560px',
		'background-position': '0px -1400px',
		width: '230px',
		height: '239px'
	}, {
		progress: '43%',
		display: 'block',
		opacity: '1',
		left: '386px',
		top: '650px',
		'background-position': '0px -1750px',
		width: '230px',
		height: '247px'
	}, {
		progress: '44%',
		display: 'block',
		opacity: '1',
		left: '403px',
		top: '740px',
		'background-position': '0px -1750px',
		width: '230px',
		height: '247px'
	}, {
		progress: '45%',
		display: 'block',
		opacity: '1',
		left: '448px',
		top: '916px',
		'background-position': '0px -1750px',
		width: '230px',
		height: '247px'
	}, {
		progress: '50%',
		display: 'block',
		opacity: '1',
		left: '448px',
		top: '916px',
		'background-position': '0px -1750px',
		width: '230px',
		height: '247px'
	}, {
		progress: '51%',
		display: 'block',
		opacity: '1',
		left: '393px',
		top: '930px',
		'background-position': '0px -2100px',
		width: '230px',
		height: '255px'
	}, {
		progress: '52%',
		display: 'block',
		opacity: '1',
		left: '338px',
		top: '1030px',
		'background-position': '0px -2100px',
		width: '230px',
		height: '255px'
	}, {
		progress: '53%',
		display: 'block',
		opacity: '1',
		left: '283px',
		top: '1130px',
		'background-position': '0px -2450px',
		width: '230px',
		height: '260px'
	}, {
		progress: '54%',
		display: 'block',
		opacity: '1',
		left: '228px',
		top: '1230px',
		'background-position': '0px -2450px',
		width: '230px',
		height: '260px'
	}, {
		progress: '55%',
		display: 'block',
		opacity: '1',
		left: '173px',
		top: '1330px',
		'background-position': '0px -2450px',
		width: '230px',
		height: '260px'
	}, {
		progress: '56%',
		display: 'block',
		opacity: '1',
		left: '173px',
		top: '1430px',
		'background-position': '0px -2450px',
		width: '230px',
		height: '260px'
	}, {
		progress: '57%',
		display: 'block',
		opacity: '1',
		left: '173px',
		top: '1480px',
		'background-position': '0px -2450px',
		width: '230px',
		height: '260px'
	}, {
		progress: '58%',
		display: 'block',
		opacity: '1',
		left: '173px',
		top: '1580px',
		'background-position': '0px -2450px',
		width: '230px',
		height: '260px'
	}, {
		progress: '59%',
		display: 'block',
		opacity: '1',
		left: '173px',
		top: '1680px',
		'background-position': '0px -2450px',
		width: '230px',
		height: '260px'
	}, {
		progress: '60%',
		display: 'block',
		opacity: '1',
		left: '173px',
		top: '1788px',
		'background-position': '0px -2450px',
		width: '230px',
		height: '260px'
	}, {
		progress: '61%',
		display: 'block',
		opacity: '1',
		left: '173px',
		top: '1788px',
		'background-position': '0px -2450px',
		width: '230px',
		height: '260px'
	}, {
		progress: '62%',
		display: 'none',
		opacity: '0',
		left: '173px',
		top: '1788px',
		'background-position': '0px -2450px',
		width: '230px',
		height: '260px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		left: '173px',
		top: '1788px',
		'background-position': '0px -2450px',
		width: '230px',
		height: '260px'
	}]);
	jarallax.addAnimation('#ball3', [{
		progress: '33%',
		display: 'block',
		opacity: '1',
		left: '800px',
		top: '200px',
		'background-position': '0px 0px',
		width: '270px',
		height: '180px'
	}, {
		progress: '36%',
		display: 'block',
		opacity: '1',
		left: '767px',
		top: '290px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '38%',
		display: 'block',
		opacity: '1',
		left: '734px',
		top: '380px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '40%',
		display: 'block',
		opacity: '1',
		left: '701px',
		top: '470px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '42%',
		display: 'block',
		opacity: '1',
		left: '668px',
		top: '560px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '43%',
		display: 'block',
		opacity: '1',
		left: '635px',
		top: '650px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '44%',
		display: 'block',
		opacity: '1',
		left: '602px',
		top: '740px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '45%',
		display: 'block',
		opacity: '1',
		left: '570px',
		top: '860px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '50%',
		display: 'block',
		opacity: '1',
		left: '570px',
		top: '860px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '51%',
		display: 'block',
		opacity: '1',
		left: '520px',
		top: '930px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '52%',
		display: 'block',
		opacity: '1',
		left: '470px',
		top: '1030px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '53%',
		display: 'block',
		opacity: '1',
		left: '420px',
		top: '1130px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '54%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1230px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '55%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1330px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '56%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1430px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '57%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1480px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '58%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1580px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '59%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1680px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '60%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1700px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '61%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1770px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '62%',
		display: 'none',
		opacity: '0',
		left: '400px',
		top: '1770px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1770px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}]);
	jarallax.addAnimation('#ball4', [{
		progress: '33%',
		display: 'block',
		opacity: '1',
		left: '670px',
		top: '300px',
		'background-position': '0px 0px',
		width: '270px',
		height: '180px'
	}, {
		progress: '36%',
		display: 'block',
		opacity: '1',
		left: '677px',
		top: '393px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '38%',
		display: 'block',
		opacity: '1',
		left: '684px',
		top: '486px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '40%',
		display: 'block',
		opacity: '1',
		left: '691px',
		top: '579px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '42%',
		display: 'block',
		opacity: '1',
		left: '698px',
		top: '672px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '43%',
		display: 'block',
		opacity: '1',
		left: '715px',
		top: '765px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '44%',
		display: 'block',
		opacity: '1',
		left: '715px',
		top: '858px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '45%',
		display: 'block',
		opacity: '1',
		left: '715px',
		top: '950px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '50%',
		display: 'block',
		opacity: '1',
		left: '715px',
		top: '950px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '51%',
		display: 'block',
		opacity: '1',
		left: '615px',
		top: '930px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '52%',
		display: 'block',
		opacity: '1',
		left: '515px',
		top: '1030px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '53%',
		display: 'block',
		opacity: '1',
		left: '415px',
		top: '1130px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '54%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1230px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '55%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1330px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '56%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1430px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '57%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1480px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '58%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1580px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '59%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1680px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '60%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1700px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '61%',
		display: 'block',
		opacity: '0',
		left: '400px',
		top: '1770px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}, {
		progress: '62%',
		display: 'none',
		opacity: '0',
		left: '400px',
		top: '1770px',
		'background-position': '0px -350px',

		width: '270px',
		height: '210px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		left: '400px',
		top: '1770px',
		'background-position': '0px -350px',
		width: '270px',
		height: '210px'
	}]);
	jarallax.addAnimation('#ball6', [{
		progress: '33%',
		display: 'block',
		opacity: '1',
		left: '730px',
		top: '530px',
		'background-position': '0px 0px',
		width: '260px',
		height: '215px'
	}, {
		progress: '36%',
		display: 'block',
		opacity: '1',
		left: '712px',
		top: '634px',
		'background-position': '0px -367px',
		width: '260px',
		height: '268px'
	}, {
		progress: '38%',
		display: 'block',
		opacity: '1',
		left: '694px',
		top: '738px',
		'background-position': '0px -734px',
		width: '260px',
		height: '289px'
	}, {
		progress: '40%',
		display: 'block',
		opacity: '1',
		left: '676px',
		top: '842px',
		'background-position': '0px -1101px',
		width: '260px',
		height: '302px'
	}, {
		progress: '42%',
		display: 'block',
		opacity: '1',
		left: '658px',
		top: '946px',
		'background-position': '0px -1468px',
		width: '260px',
		height: '320px'
	}, {
		progress: '43%',
		display: 'block',
		opacity: '1',
		left: '640px',
		top: '1050px',
		'background-position': '0px -1835px',
		width: '260px',
		height: '342px'
	}, {
		progress: '44%',
		display: 'block',
		opacity: '1',
		left: '622px',
		top: '1154px',
		'background-position': '0px -1835px',
		width: '260px',
		height: '342px'
	}, {
		progress: '45%',
		display: 'block',
		opacity: '1',
		left: '605px',
		top: '1258px',
		'background-position': '0px -1835px',
		width: '260px',
		height: '342px'
	}, {
		progress: '50%',
		display: 'block',
		opacity: '1',
		left: '605px',
		top: '1258px',
		'background-position': '0px -1835px',
		width: '260px',
		height: '342px'
	}, {
		progress: '51%',
		display: 'block',
		opacity: '1',
		left: '598px',
		top: '1308px',
		'background-position': '0px -2202px',
		width: '260px',
		height: '360px'
	}, {
		progress: '52%',
		display: 'block',
		opacity: '1',
		left: '591px',
		top: '1358px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '360px'
	}, {
		progress: '53%',
		display: 'block',
		opacity: '1',
		left: '584px',
		top: '1408px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '367px'
	}, {
		progress: '54%',
		display: 'block',
		opacity: '1',
		left: '577px',
		top: '1458px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '367px'
	}, {
		progress: '55%',
		display: 'block',
		opacity: '1',
		left: '573px',
		top: '1508px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '367px'
	}, {
		progress: '56%',
		display: 'block',
		opacity: '1',
		left: '573px',
		top: '1558px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '367px'
	}, {
		progress: '57%',
		display: 'block',
		opacity: '1',
		left: '573px',
		top: '1608px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '367px'
	}, {
		progress: '58%',
		display: 'block',
		opacity: '1',
		left: '573px',
		top: '1658px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '367px'
	}, {
		progress: '59%',
		display: 'block',
		opacity: '1',
		left: '573px',
		top: '1708px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '367px'
	}, {
		progress: '60%',
		display: 'block',
		opacity: '1',
		left: '573px',
		top: '1755px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '367px'
	}, {
		progress: '61%',
		display: 'block',
		opacity: '1',
		left: '573px',
		top: '1755px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '367px'
	}, {
		progress: '62%',
		display: 'none',
		opacity: '0',
		left: '573px',
		top: '1755px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '367px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		left: '573px',
		top: '1755px',
		'background-position': '0px -2569px',
		width: '260px',
		height: '367px'
	}]);
	jarallax.addAnimation('#ball7', [{
		progress: '33%',
		display: 'block',
		opacity: '1',
		left: '150px',
		top: '550px',
		'background-position': '0px 0px',
		width: '430px',
		height: '186px'
	}, {
		progress: '36%',
		display: 'block',
		opacity: '1',
		left: '136px',
		top: '647px',
		'background-position': '0px -350px',
		width: '430px',
		height: '220px'
	}, {
		progress: '38%',
		display: 'block',
		opacity: '1',
		left: '122px',
		top: '744px',
		'background-position': '0px -700px',
		width: '430px',
		height: '232px'
	}, {
		progress: '40%',
		display: 'block',
		opacity: '1',
		left: '108px',
		top: '841px',
		'background-position': '0px -1050px',
		width: '430px',
		height: '268px'
	}, {
		progress: '42%',
		display: 'block',
		opacity: '1',
		left: '94px',
		top: '938px',
		'background-position': '0px -1400px',
		width: '430px',
		height: '278px'
	}, {
		progress: '43%',
		display: 'block',
		opacity: '1',
		left: '80px',
		top: '1035px',
		'background-position': '0px -1750px',
		width: '430px',
		height: '305px'
	}, {
		progress: '44%',
		display: 'block',
		opacity: '1',
		left: '66px',
		top: '1132px',
		'background-position': '0px -1750px',
		width: '430px',
		height: '305px'
	}, {
		progress: '45%',
		display: 'block',
		opacity: '1',
		left: '50px',
		top: '1230px',
		'background-position': '0px -1750px',
		width: '430px',
		height: '305px'
	}, {
		progress: '50%',
		display: 'block',
		opacity: '1',
		left: '50px',
		top: '1230px',
		'background-position': '0px -1750px',
		width: '430px',
		height: '305px'
	}, {
		progress: '51%',
		display: 'block',
		opacity: '1',
		left: '40px',
		top: '1285px',
		'background-position': '0px -1750px',
		width: '430px',
		height: '305px'
	}, {
		progress: '52%',
		display: 'block',
		opacity: '1',
		left: '30px',
		top: '1340px',
		'background-position': '0px -1750px',
		width: '430px',
		height: '305px'
	}, {
		progress: '53%',
		display: 'block',
		opacity: '1',
		left: '20px',
		top: '1395px',
		'background-position': '0px -1750px',
		width: '430px',
		height: '305px'
	}, {
		progress: '54%',
		display: 'block',
		opacity: '1',
		left: '10px',
		top: '1450px',
		'background-position': '0px -1400px',
		width: '430px',
		height: '278px'
	}, {
		progress: '55%',
		display: 'block',
		opacity: '1',
		left: '0px',
		top: '1505px',
		'background-position': '0px -1400px',
		width: '430px',
		height: '278px'
	}, {
		progress: '56%',
		display: 'block',
		opacity: '1',
		left: '0px',
		top: '1560px',
		'background-position': '0px -1400px',
		width: '430px',
		height: '278px'
	}, {
		progress: '57%',
		display: 'block',
		opacity: '1',
		left: '0px',
		top: '1615px',
		'background-position': '0px -1400px',
		width: '430px',
		height: '278px'
	}, {
		progress: '58%',
		display: 'block',
		opacity: '1',
		left: '0px',
		top: '1670px',
		'background-position': '0px -1050px',
		width: '430px',
		height: '268px'
	}, {
		progress: '59%',
		display: 'block',
		opacity: '1',
		left: '0px',
		top: '1725px',
		'background-position': '0px -1050px',
		width: '430px',
		height: '268px'
	}, {
		progress: '60%',
		display: 'block',
		opacity: '1',
		left: '0px',
		top: '1788px',
		'background-position': '0px -1050px',
		width: '430px',
		height: '268px'
	}, {
		progress: '61%',
		display: 'block',
		opacity: '1',
		left: '0px',
		top: '1788px',
		'background-position': '0px -1050px',
		width: '430px',
		height: '268px'
	}, {
		progress: '62%',
		display: 'none',
		opacity: '0',
		left: '0px',
		top: '1788px',
		'background-position': '0px -1050px',
		width: '430px',
		height: '268px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		left: '0px',
		top: '1788px',
		'background-position': '0px -1050px',
		width: '430px',
		height: '268px'
	}]);
	jarallax.addAnimation('#ball8', [{
		progress: '33%',
		display: 'block',
		opacity: '1',
		left: '850px',
		top: '400px',
		'background-position': '0px 0px',
		width: '364px',
		height: '149px'
	}, {
		progress: '36%',
		display: 'block',
		opacity: '1',
		left: '830px',
		top: '490px',
		'background-position': '0px -363px',
		width: '364px',
		height: '178px'
	}, {
		progress: '38%',
		display: 'block',
		opacity: '1',
		left: '810px',
		top: '580px',
		'background-position': '0px -726px',
		width: '364px',
		height: '208px'
	}, {
		progress: '40%',
		display: 'block',
		opacity: '1',
		left: '790px',
		top: '670px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '42%',
		display: 'block',
		opacity: '1',
		left: '770px',
		top: '760px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '43%',
		display: 'block',
		opacity: '1',
		left: '750px',
		top: '850px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '44%',
		display: 'block',
		opacity: '1',
		left: '732px',
		top: '940px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '45%',
		display: 'block',
		opacity: '1',
		left: '732px',
		top: '1130px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '50%',
		display: 'block',
		opacity: '1',
		left: '732px',
		top: '1130px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '51%',
		display: 'block',
		opacity: '1',
		left: '737px',
		top: '1130px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '52%',
		display: 'block',
		opacity: '1',
		left: '742px',
		top: '1226px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '53%',
		display: 'block',
		opacity: '1',
		left: '747px',
		top: '1322px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '54%',
		display: 'block',
		opacity: '1',
		left: '749px',
		top: '1418px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '55%',
		display: 'block',
		opacity: '1',
		left: '750px',
		top: '1514px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '56%',
		display: 'block',
		opacity: '1',
		left: '750px',
		top: '1610px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '57%',
		display: 'block',
		opacity: '1',
		left: '750px',
		top: '1706px',
		'background-position': '0px -1089px',
		width: '364px',
		height: '236px'
	}, {
		progress: '58%',
		display: 'block',
		opacity: '1',
		left: '750px',
		top: '1702px',
		'background-position': '0px -1452px',
		width: '364px',
		height: '236px'
	}, {
		progress: '59%',
		display: 'block',
		opacity: '1',
		left: '750px',
		top: '1798px',
		'background-position': '0px -1452px',
		width: '364px',
		height: '264px'
	}, {
		progress: '60%',
		display: 'block',
		opacity: '1',
		left: '750px',
		top: '1805px',
		'background-position': '0px -1452px',
		width: '364px',
		height: '264px'
	}, {
		progress: '61%',
		display: 'block',
		opacity: '1',
		left: '750px',
		top: '1805px',
		'background-position': '0px -1452px',
		width: '364px',
		height: '264px'
	}, {
		progress: '62%',
		display: 'none',
		opacity: '0',
		left: '750px',
		top: '1805px',
		'background-position': '0px -1452px',
		width: '364px',
		height: '264px'
	}, {
		progress: '100%',
		display: 'block',
		opacity: '1',
		left: '750px',
		top: '1805px',
		'background-position': '0px -1452px',
		width: '364px',
		height: '264px'
	}])
};
$(document).ready(function() {
	/*$("#sparks").click(function() {
		$(this).unbind("hover");
		$("#sparks02").unbind("hover");
		$("#chengbao03").css("display", "none");
		$(this).css("display", "none");
		$("#sparks02").css("display", "none");
		$("#jiantou").css("display", "none");
		$("#sparks").remove();
		$("html").css("overflow-y", "scroll");
		paowu('<div id="ball1"></div>', 'ball1', 290, 300, 100, 150, 15, "picList");
		paowu('<div id="ball3"></div>', 'ball3', 290, 300, 800, 200, 15, "picList");
		paowu('<div id="ball2"></div>', 'ball2', 290, 300, 250, 200, 15, "picList");
		paowu('<div id="ball4"></div>', 'ball4', 290, 300, 670, 300, 15, "picList");
		paowu('<div id="ball5"></div>', 'ball5', 290, 300, 230, 400, 15, "picList");
		paowu('<div id="ball6"></div>', 'ball6', 290, 300, 730, 530, 15, "picList");
		paowu('<div id="ball7"></div>', 'ball7', 290, 300, 150, 550, 15, "picList");
		paowu('<div id="ball8"></div>', 'ball8', 290, 300, 850, 400, 15, "picList");
		paowu('<div id="ball9"></div>', 'ball9', 290, 300, 30, 380, 15, "picList");
		paowu('<div id="ball10"></div>', 'ball10', 290, 300, 290, 250, 15, "picList")
	});*/
	$('#featured-area ul').roundabout({
		easing: 'easeOutInCirc',
		duration: 600,
		minOpacity: 1.0,
		minScale: 0.1,
		clickToFocus: true,
		focusBearing: 0.0,
		tilt: 0,
		enableDrag: true,
		dropDuration: 600,
		dropEasing: 'swing',
		dragAxis: 'x'
	})
});
$(function() {;
	(function($, w, undefined) {
		'use strict';
		var pluginName = 'sly';
		var className = 'Sly';
		var namespace = pluginName;
		var cAF = w.cancelAnimationFrame || w.cancelRequestAnimationFrame;
		var rAF = w.requestAnimationFrame;
		var transform, gpuAcceleration;
		var $doc = $(document);
		var dragInitEvents = 'touchstart.' + namespace + ' mousedown.' + namespace;
		var dragMouseEvents = 'mousemove.' + namespace + ' mouseup.' + namespace;
		var dragTouchEvents = 'touchmove.' + namespace + ' touchend.' + namespace;
		var clickEvent = 'click.' + namespace;
		var mouseDownEvent = 'mousedown.' + namespace;

		function Sly(frame, options, callbackMap) {
			var o = $.extend({}, Sly.defaults, options);
			var self = this;
			var initialized = 0;
			var parallax = isNumber(frame);
			var $frame = $(frame);
			var $slidee = $frame.children().eq(0);
			var frameSize = 0;
			var slideeSize = 0;
			var pos = {

				start: 0,
				center: 0,
				end: 0,
				cur: 0,
				dest: 0
			};
			var $sb = $(o.scrollBar).eq(0);
			var $handle = $sb.children().eq(0);
			var sbSize = 0;
			var handleSize = 0;
			var hPos = {
				start: 0,
				end: 0,
				cur: 0
			};
			var $pb = $(o.pagesBar);
			var $pages = 0;
			var pages = [];
			var $items = 0;
			var items = [];
			var rel = {
				firstItem: 0,
				lastItem: 0,
				centerItem: 0,
				activeItem: -1,
				activePage: 0
			};
			var basicNav = o.itemNav === 'basic';
			var forceCenteredNav = o.itemNav === 'forceCentered';
			var centeredNav = o.itemNav === 'centered' || forceCenteredNav;
			var itemNav = !parallax && (basicNav || centeredNav || forceCenteredNav);
			var $scrollSource = o.scrollSource ? $(o.scrollSource) : $frame;
			var $dragSource = o.dragSource ? $(o.dragSource) : $frame;
			var $forwardButton = $(o.forward);
			var $backwardButton = $(o.backward);
			var $prevButton = $(o.prev);
			var $nextButton = $(o.next);
			var $prevPageButton = $(o.prevPage);
			var $nextPageButton = $(o.nextPage);
			var callbacks = {};
			var last = {};
			var animation = {};
			var move = {};
			var dragging = {
				released: 1
			};
			var renderID = 0;
			var historyID = 0;
			var cycleID = 0;
			var continuousID = 0;
			var i, l;
			if (!parallax) {
				frame = $frame[0]
			}
			self.frame = frame;
			self.slidee = $slidee[0];
			self.pos = pos;
			self.rel = rel;
			self.items = items;
			self.pages = pages;
			self.isPaused = 0;
			self.options = o;

			function load() {
				var ignoredMargin = 0;
				pos.old = $.extend({}, pos);
				frameSize = parallax ? 0 : $frame[o.horizontal ? 'width' : 'height']();
				sbSize = $sb[o.horizontal ? 'width' : 'height']();
				slideeSize = parallax ? frame : $slidee[o.horizontal ? 'outerWidth' : 'outerHeight']();
				pages.length = 0;
				pos.start = 0;
				pos.end = Math.max(slideeSize - frameSize, 0);
				last = {};
				if (itemNav) {
					var lastItemsCount = items.length;
					$items = $slidee.children(o.itemSelector);
					items.length = 0;
					var paddingStart = getPx($slidee, o.horizontal ? 'paddingLeft' : 'paddingTop');
					var paddingEnd = getPx($slidee, o.horizontal ? 'paddingRight' : 'paddingBottom');
					var marginStart = getPx($items, o.horizontal ? 'marginLeft' : 'marginTop');
					var marginEnd = getPx($items.slice(-1), o.horizontal ? 'marginRight' : 'marginBottom');
					var centerOffset = 0;
					var areFloated = $items.css('float') !== 'none';
					ignoredMargin = marginStart ? 0 : marginEnd;
					slideeSize = 0;
					$items.each(function(i, element) {
						var $item = $(element);
						var itemSize = $item[o.horizontal ? 'outerWidth' : 'outerHeight'](true);
						var itemMarginStart = getPx($item, o.horizontal ? 'marginLeft' : 'marginTop');
						var itemMarginEnd = getPx($item, o.horizontal ? 'marginRight' : 'marginBottom');
						var itemData = {
							el: element,
							size: itemSize,
							half: itemSize / 2,
							start: slideeSize - (!i || o.horizontal ? 0 : itemMarginStart),
							center: slideeSize - Math.round(frameSize / 2 - itemSize / 2),
							end: slideeSize - frameSize + itemSize - (marginStart ? 0 : itemMarginEnd)
						};
						if (!i) {
							centerOffset = -(forceCenteredNav ? Math.round(frameSize / 2 - itemSize / 2) : 0) + paddingStart;
							slideeSize += paddingStart
						}
						slideeSize += itemSize;
						if (!o.horizontal && !areFloated) {
							if (itemMarginEnd && itemMarginStart && i > 0) {
								slideeSize -= Math.min(itemMarginStart, itemMarginEnd)
							}
						}
						if (i === $items.length - 1) {
							slideeSize += paddingEnd
						}
						items.push(itemData)
					});
					$slidee[0].style[o.horizontal ? 'width' : 'height'] = slideeSize + 'px';
					slideeSize -= ignoredMargin;
					pos.start = centerOffset;
					pos.end = forceCenteredNav ? (items.length ? items[items.length - 1].center : centerOffset) : Math.max(slideeSize - frameSize, 0);
					if (rel.activeItem >= items.length || lastItemsCount === 0 && items.length > 0) {
						activate(items.length > 0 ? items.length - 1 : 0)
					}
				}
				pos.center = Math.round(pos.end / 2 + pos.start / 2);
				updateRelatives();
				if ($handle.length && sbSize > 0) {
					if (o.dynamicHandle) {
						if (forceCenteredNav) {
							handleSize = items.length ? sbSize * frameSize / (frameSize + items[items.length - 1].center - items[0].center) : sbSize
						} else {
							handleSize = sbSize * frameSize / slideeSize
						}
						handleSize = within(Math.round(handleSize), o.minHandleSize, sbSize);
						$handle[0].style[o.horizontal ? 'width' : 'height'] = handleSize + 'px'
					} else {
						handleSize = $handle[o.horizontal ? 'outerWidth' : 'outerHeight']()
					}
					hPos.end = sbSize - handleSize;
					if (!renderID) {
						syncScrollbar()
					}
				}
				if (!parallax && frameSize > 0) {
					var tempPagePos = pos.start;
					var pagesHtml = '';
					if (itemNav) {
						$.each(items, function(i, item) {
							if (forceCenteredNav || item.start + item.size > tempPagePos) {
								tempPagePos = item[forceCenteredNav ? 'center' : 'start'];
								pages.push(tempPagePos);
								tempPagePos += frameSize
							}
						})
					} else {
						while (tempPagePos - frameSize < pos.end) {
							pages.push(tempPagePos);
							tempPagePos += frameSize
						}
					}
					if ($pb[0]) {
						for (var i = 0; i < pages.length; i++) {
							pagesHtml += o.pageBuilder.call(self, i)
						}
						$pages = $pb.html(pagesHtml).children()
					}
				}
				slideTo(within(pos.dest, pos.start, pos.end));
				rel.slideeSize = slideeSize;
				rel.frameSize = frameSize;
				rel.sbSize = sbSize;
				rel.handleSize = handleSize;
				trigger('load')
			}
			self.reload = load;

			function slideTo(newPos, immediate, dontAlign) {
				if (itemNav && dragging.released && !dontAlign) {
					var tempRel = getRelatives(newPos);
					var isNotBordering = newPos > pos.start && newPos < pos.end;
					if (centeredNav) {
						if (isNotBordering) {
							newPos = items[tempRel.centerItem].center
						}
						if (forceCenteredNav && o.activateMiddle) {
							activate(tempRel.centerItem)
						}
					} else if (isNotBordering) {
						newPos = items[tempRel.firstItem].start
					}
				}
				if (dragging.init && dragging.slidee && o.elasticBounds) {
					if (newPos > pos.end) {
						newPos = pos.end + (newPos - pos.end) / 6
					} else if (newPos < pos.start) {
						newPos = pos.start + (newPos - pos.start) / 6
					}
				} else {
					newPos = within(newPos, pos.start, pos.end)
				}
				animation.start = +new Date();
				animation.time = 0;
				animation.from = pos.cur;
				animation.to = newPos;
				animation.delta = newPos - pos.cur;
				animation.tweesing = dragging.tweese || dragging.init && !dragging.slidee;
				animation.immediate = immediate || dragging.init && dragging.slidee && !dragging.tweese;
				dragging.tweese = 0;
				if (newPos !== pos.dest) {
					pos.dest = newPos;
					trigger('change');
					if (!renderID) {
						render()
					}
				}
				resetCycle();
				updateRelatives();
				updateButtonsState();
				syncPagesbar()
			}
			function render() {
				if (!renderID) {
					renderID = rAF(render);
					if (dragging.released) {
						trigger('moveStart')
					}
					return
				}
				if (animation.immediate) {
					pos.cur = animation.to
				} else if (animation.tweesing) {
					animation.tweeseDelta = animation.to - pos.cur;
					if (Math.abs(animation.tweeseDelta) < 0.1) {
						pos.cur = animation.to
					} else {
						pos.cur += animation.tweeseDelta * (dragging.released ? o.swingSpeed : o.syncSpeed)
					}
				} else {
					animation.time = Math.min(+new Date() - animation.start, o.speed);
					pos.cur = animation.from + animation.delta * jQuery.easing[o.easing](animation.time / o.speed, animation.time, 0, 1, o.speed)
				}
				if (animation.to === pos.cur) {
					pos.cur = animation.to;
					dragging.tweese = renderID = 0
				} else {
					renderID = rAF(render)
				}
				trigger('move');
				if (!parallax) {
					if (transform) {
						$slidee[0].style[transform] = gpuAcceleration + (o.horizontal ? 'translateX' : 'translateY') + '(' + (-pos.cur) + 'px)'
					} else {
						$slidee[0].style[o.horizontal ? 'left' : 'top'] = -Math.round(pos.cur) + 'px'
					}
				}
				if (!renderID && dragging.released) {
					trigger('moveEnd')
				}
				syncScrollbar()
			}
			function syncScrollbar() {
				if ($handle.length) {
					hPos.cur = pos.start === pos.end ? 0 : (((dragging.init && !dragging.slidee) ? pos.dest : pos.cur) - pos.start) / (pos.end - pos.start) * hPos.end;
					hPos.cur = within(Math.round(hPos.cur), hPos.start, hPos.end);
					if (last.hPos !== hPos.cur) {
						last.hPos = hPos.cur;
						if (transform) {
							$handle[0].style[transform] = gpuAcceleration + (o.horizontal ? 'translateX' : 'translateY') + '(' + hPos.cur + 'px)'
						} else {
							$handle[0].style[o.horizontal ? 'left' : 'top'] = hPos.cur + 'px'
						}
					}
				}
			}
			function syncPagesbar() {
				if ($pages[0] && last.page !== rel.activePage) {
					last.page = rel.activePage;
					$pages.removeClass(o.activeClass).eq(rel.activePage).addClass(o.activeClass);
					trigger('activePage', last.page)
				}
			}
			self.getPos = function(item) {
				if (itemNav) {
					var index = getIndex(item);
					return index !== -1 ? items[index] : false
				} else {
					var $item = $slidee.find(item).eq(0);
					if ($item[0]) {
						var offset = o.horizontal ? $item.offset().left - $slidee.offset().left : $item.offset().top - $slidee.offset().top;
						var size = $item[o.horizontal ? 'outerWidth' : 'outerHeight']();
						return {
							start: offset,
							center: offset - frameSize / 2 + size / 2,
							end: offset - frameSize + size,
							size: size
						}
					} else {
						return false
					}
				}
			};
			self.moveBy = function(speed) {
				move.speed = speed;
				if (dragging.init || !move.speed || pos.cur === (move.speed > 0 ? pos.end : pos.start)) {
					return
				}
				move.lastTime = +new Date();
				move.startPos = pos.cur;
				continuousInit('button');
				dragging.init = 1;
				trigger('moveStart');
				cAF(continuousID);
				moveLoop()
			};

			function moveLoop() {
				if (!move.speed || pos.cur === (move.speed > 0 ? pos.end : pos.start)) {
					self.stop()
				}
				continuousID = dragging.init ? rAF(moveLoop) : 0;
				move.now = +new Date();
				move.pos = pos.cur + (move.now - move.lastTime) / 1000 * move.speed;
				slideTo(dragging.init ? move.pos : Math.round(move.pos));
				if (!dragging.init && pos.cur === pos.dest) {
					trigger('moveEnd')
				}
				move.lastTime = move.now
			}
			self.stop = function() {
				if (dragging.source === 'button') {
					dragging.init = 0;
					dragging.released = 1
				}
			};
			self.prev = function() {
				self.activate(rel.activeItem - 1)
			};
			self.next = function() {
				self.activate(rel.activeItem + 1)
			};
			self.prevPage = function() {
				self.activatePage(rel.activePage - 1)
			};
			self.nextPage = function() {
				self.activatePage(rel.activePage + 1)
			};
			self.slideBy = function(delta, immediate) {
				slideTo(pos.dest + delta, immediate)
			};
			self.slideTo = function(pos, immediate) {
				slideTo(pos, immediate)
			};

			function to(location, item, immediate) {
				if (type(item) === 'boolean') {
					immediate = item;
					item = undefined
				}
				if (item === undefined) {
					slideTo(pos[location], immediate)
				} else {
					if (centeredNav && location !== 'center') {
						return
					}
					var itemPos = self.getPos(item);
					if (itemPos) {
						slideTo(itemPos[location], immediate, !centeredNav)
					}
				}
			}
			self.toStart = function(item, immediate) {
				to('start', item, immediate)
			};
			self.toEnd = function(item, immediate) {
				to('end', item, immediate)
			};
			self.toCenter = function(item, immediate) {
				to('center', item, immediate)
			};

			function getIndex(item) {
				return type(item) !== 'undefined' ? isNumber(item) ? item >= 0 && item < items.length ? item : -1 : $items.index(item) : -1
			}
			self.getIndex = getIndex;

			function getRelativeIndex(item) {
				return getIndex(isNumber(item) && item < 0 ? item + items.length : item)
			}
			function activate(item) {
				var index = getIndex(item);
				if (!itemNav || index < 0) {
					return false
				}
				if (last.active !== index) {
					$items.eq(rel.activeItem).removeClass(o.activeClass);
					$items.eq(index).addClass(o.activeClass);
					last.active = rel.activeItem = index;
					updateButtonsState();
					trigger('active', index)
				}
				return index
			}
			self.activate = function(item, immediate) {
				var index = activate(item);
				if (o.smart && index !== false) {
					if (centeredNav) {
						self.toCenter(index, immediate)
					} else if (index >= rel.lastItem) {
						self.toStart(index, immediate)
					} else if (index <= rel.firstItem) {
						self.toEnd(index, immediate)
					} else {
						resetCycle()
					}
				}
			};
			self.activatePage = function(index, immediate) {
				if (isNumber(index)) {
					slideTo(pages[within(index, 0, pages.length - 1)], immediate)
				}
			};

			function getRelatives(slideePos) {
				slideePos = within(isNumber(slideePos) ? slideePos : pos.dest, pos.start, pos.end);
				var relatives = {};
				var centerOffset = forceCenteredNav ? 0 : frameSize / 2;
				if (!parallax) {
					for (var p = 0, pl = pages.length; p < pl; p++) {
						if (slideePos >= pos.end || p === pages.length - 1) {
							relatives.activePage = pages.length - 1;
							break
						}
						if (slideePos <= pages[p] + centerOffset) {
							relatives.activePage = p;
							break
						}
					}
				}
				if (itemNav) {
					var first = false;
					var last = false;
					var center = false;
					for (var i = 0, il = items.length; i < il; i++) {
						if (first === false && slideePos <= items[i].start + items[i].half) {
							first = i
						}
						if (center === false && slideePos <= items[i].center + items[i].half) {
							center = i
						}
						if (i === il - 1 || slideePos <= items[i].end + items[i].half) {
							last = i;
							break
						}
					}
					relatives.firstItem = isNumber(first) ? first : 0;
					relatives.centerItem = isNumber(center) ? center : relatives.firstItem;
					relatives.lastItem = isNumber(last) ? last : relatives.centerItem
				}
				return relatives
			}
			function updateRelatives(newPos) {
				$.extend(rel, getRelatives(newPos))
			}
			function updateButtonsState() {
				var isStart = pos.dest <= pos.start;
				var isEnd = pos.dest >= pos.end;
				var slideePosState = isStart ? 1 : isEnd ? 2 : 3;
				if (last.slideePosState !== slideePosState) {
					last.slideePosState = slideePosState;
					if ($prevPageButton.is('button,input')) {
						$prevPageButton.prop('disabled', isStart)
					}
					if ($nextPageButton.is('button,input')) {
						$nextPageButton.prop('disabled', isEnd)
					}
					$prevPageButton.add($backwardButton)[isStart ? 'addClass' : 'removeClass'](o.disabledClass);
					$nextPageButton.add($forwardButton)[isEnd ? 'addClass' : 'removeClass'](o.disabledClass)
				}
				if (last.fwdbwdState !== slideePosState && dragging.released) {
					last.fwdbwdState = slideePosState;
					if ($backwardButton.is('button,input')) {
						$backwardButton.prop('disabled', isStart)
					}
					if ($forwardButton.is('button,input')) {
						$forwardButton.prop('disabled', isEnd)
					}
				}
				if (itemNav) {
					var isFirst = rel.activeItem === 0;
					var isLast = rel.activeItem >= items.length - 1;
					var itemsButtonState = isFirst ? 1 : isLast ? 2 : 3;
					if (last.itemsButtonState !== itemsButtonState) {
						last.itemsButtonState = itemsButtonState;
						if ($prevButton.is('button,input')) {
							$prevButton.prop('disabled', isFirst)
						}
						if ($nextButton.is('button,input')) {
							$nextButton.prop('disabled', isLast)
						}
						$prevButton[isFirst ? 'addClass' : 'removeClass'](o.disabledClass);
						$nextButton[isLast ? 'addClass' : 'removeClass'](o.disabledClass)
					}
				}
			}
			self.resume = function(priority) {
				if (!o.cycleBy || !o.cycleInterval || o.cycleBy === 'items' && !items[0] || priority < self.isPaused) {
					return
				}
				self.isPaused = 0;
				if (cycleID) {
					cycleID = clearTimeout(cycleID)
				} else {
					trigger('resume')
				}
				cycleID = setTimeout(function() {
					trigger('cycle');
					switch (o.cycleBy) {
					case 'items':
						self.activate(rel.activeItem >= items.length - 1 ? 0 : rel.activeItem + 1);
						break;
					case 'pages':
						self.activatePage(rel.activePage >= pages.length - 1 ? 0 : rel.activePage + 1);
						break
					}
				}, o.cycleInterval)
			};
			self.pause = function(priority) {
				if (priority < self.isPaused) {
					return
				}
				self.isPaused = priority || 100;
				if (cycleID) {
					cycleID = clearTimeout(cycleID);
					trigger('pause')
				}
			};
			self.toggle = function() {
				self[cycleID ? 'pause' : 'resume']()
			};
			self.set = function(name, value) {
				if ($.isPlainObject(name)) {
					$.extend(o, name)
				} else if (o.hasOwnProperty(name)) {
					o[name] = value
				}
			};
			self.add = function(element, index) {
				var $element = $(element);
				if (itemNav) {
					if (type(index) === 'undefined' || !items[0]) {
						$element.appendTo($slidee)
					} else if (items.length) {
						$element.insertBefore(items[index].el)
					}
					if (index <= rel.activeItem) {
						last.active = rel.activeItem += $element.length
					}
				} else {
					$slidee.append($element)
				}
				load()
			};
			self.remove = function(element) {
				if (itemNav) {
					var index = getRelativeIndex(element);
					if (index > -1) {
						$items.eq(index).remove();
						var reactivate = index === rel.activeItem && !(forceCenteredNav && o.activateMiddle);
						if (index < rel.activeItem || rel.activeItem >= items.length - 1) {
							last.active = --rel.activeItem
						}
						load();
						if (reactivate) {
							self.activate(rel.activeItem)
						}
					}
				} else {
					$(element).remove();
					load()
				}
			};

			function moveItem(item, position, after) {
				item = getRelativeIndex(item);
				position = getRelativeIndex(position);
				if (item > -1 && position > -1 && item !== position && (!after || position !== item - 1) && (after || position !== item + 1)) {
					$items.eq(item)[after ? 'insertAfter' : 'insertBefore'](items[position].el);
					var shiftStart = item < position ? item : (after ? position : position - 1);
					var shiftEnd = item > position ? item : (after ? position + 1 : position);
					var shiftsUp = item > position;
					if (item === rel.activeItem) {
						last.active = rel.activeItem = after ? (shiftsUp ? position + 1 : position) : (shiftsUp ? position : position - 1)
					} else if (rel.activeItem > shiftStart && rel.activeItem < shiftEnd) {
						last.active = rel.activeItem += shiftsUp ? 1 : -1
					}
					load()
				}
			}
			self.moveAfter = function(item, position) {
				moveItem(item, position, 1)
			};
			self.moveBefore = function(item, position) {
				moveItem(item, position)
			};
			self.on = function(name, fn) {
				if (type(name) === 'object') {
					for (var key in name) {
						if (name.hasOwnProperty(key)) {
							self.on(key, name[key])
						}
					}
				} else if (type(fn) === 'function') {
					var names = name.split(' ');
					for (var n = 0, nl = names.length; n < nl; n++) {
						callbacks[names[n]] = callbacks[names[n]] || [];
						if (callbackIndex(names[n], fn) === -1) {
							callbacks[names[n]].push(fn)
						}
					}
				} else if (type(fn) === 'array') {
					for (var f = 0, fl = fn.length; f < fl; f++) {
						self.on(name, fn[f])
					}
				}
			};
			self.off = function(name, fn) {
				if (fn instanceof Array) {
					for (var f = 0, fl = fn.length; f < fl; f++) {
						self.off(name, fn[f])
					}
				} else {
					var names = name.split(' ');
					for (var n = 0, nl = names.length; n < nl; n++) {
						callbacks[names[n]] = callbacks[names[n]] || [];
						if (type(fn) === 'undefined') {
							callbacks[names[n]].length = 0
						} else {
							var index = callbackIndex(names[n], fn);
							if (index !== -1) {
								callbacks[names[n]].splice(index, 1)

							}
						}
					}
				}
			};

			function callbackIndex(name, fn) {
				for (var i = 0, l = callbacks[name].length; i < l; i++) {
					if (callbacks[name][i] === fn) {
						return i
					}
				}
				return -1
			}
			function resetCycle() {
				if (dragging.released && !self.isPaused) {
					self.resume()
				}
			}
			function handleToSlidee(handlePos) {
				return Math.round(within(handlePos, hPos.start, hPos.end) / hPos.end * (pos.end - pos.start)) + pos.start
			}
			function draggingHistoryTick() {
				dragging.history[0] = dragging.history[1];
				dragging.history[1] = dragging.history[2];
				dragging.history[2] = dragging.history[3];
				dragging.history[3] = dragging.delta
			}
			function continuousInit(source) {
				dragging.released = 0;
				dragging.source = source;
				dragging.slidee = source === 'slidee'
			}
			function dragInit(event) {
				if (dragging.init) {
					return
				}
				var isTouch = event.type === 'touchstart';
				var source = event.data.source;
				var isSlidee = source === 'slidee';
				if (source === 'handle' && (!o.dragHandle || hPos.start === hPos.end)) {
					return
				}
				if (isSlidee && !(isTouch ? o.touchDragging : o.mouseDragging && event.which < 2)) {
					return
				}
				if (!isTouch) {
					stopDefault(event, 1)
				}
				continuousInit(source);
				dragging.$source = $(event.target);
				dragging.init = 0;
				dragging.touch = isTouch;
				dragging.pointer = isTouch ? event.originalEvent.touches[0] : event;
				dragging.initX = dragging.pointer.pageX;
				dragging.initY = dragging.pointer.pageY;
				dragging.initPos = isSlidee ? pos.cur : hPos.cur;
				dragging.start = +new Date();
				dragging.time = 0;
				dragging.path = 0;
				dragging.pathToInit = isSlidee ? isTouch ? 50 : 10 : 0;
				dragging.history = [0, 0, 0, 0];
				dragging.initLoc = dragging[o.horizontal ? 'initX' : 'initY'];
				dragging.deltaMin = isSlidee ? -dragging.initLoc : -hPos.cur;
				dragging.deltaMax = isSlidee ? document[o.horizontal ? 'width' : 'height'] - dragging.initLoc : hPos.end - hPos.cur;
				(isSlidee ? $slidee : $handle).addClass(o.draggedClass);
				$doc.on(isTouch ? dragTouchEvents : dragMouseEvents, dragHandler);
				if (isSlidee) {
					historyID = setInterval(draggingHistoryTick, 10)
				}
			}
			function dragHandler(event) {
				dragging.released = event.type === 'mouseup' || event.type === 'touchend';
				dragging.pointer = dragging.touch ? event.originalEvent[dragging.released ? 'changedTouches' : 'touches'][0] : event;
				dragging.pathX = dragging.pointer.pageX - dragging.initX;
				dragging.pathY = dragging.pointer.pageY - dragging.initY;
				dragging.pathTotal = Math.sqrt(Math.pow(dragging.pathX, 2) + Math.pow(dragging.pathY, 2));
				dragging.delta = within(o.horizontal ? dragging.pathX : dragging.pathY, dragging.deltaMin, dragging.deltaMax);
				if (!dragging.init && dragging.pathTotal > dragging.pathToInit) {
					if (dragging.slidee) {
						if (o.horizontal ? Math.abs(dragging.pathX) < Math.abs(dragging.pathY) : Math.abs(dragging.pathX) > Math.abs(dragging.pathY)) {
							dragEnd();
							return
						}
						dragging.$source.on(clickEvent, disableOneEvent)
					}
					dragging.init = 1;
					self.pause(1);
					trigger('moveStart')
				}
				if (dragging.init) {
					if (dragging.released) {
						if (!dragging.touch) {
							stopDefault(event)
						}
						dragging.init = 0;
						if (o.releaseSwing && dragging.slidee) {
							dragging.swing = (dragging.delta - dragging.history[0]) / 40 * 300;
							dragging.delta += dragging.swing;
							dragging.tweese = Math.abs(dragging.swing) > 10
						}
					} else {
						stopDefault(event)
					}
					slideTo(dragging.slidee ? Math.round(dragging.initPos - dragging.delta) : handleToSlidee(dragging.initPos + dragging.delta))
				}
				if (dragging.released) {
					dragEnd()
				}
			}
			function dragEnd() {
				clearInterval(historyID);
				$doc.off(dragging.touch ? dragTouchEvents : dragMouseEvents, dragHandler);
				(dragging.slidee ? $slidee : $handle).removeClass(o.draggedClass);
				self.resume(1);
				if (dragging.init && pos.cur === pos.dest) {
					trigger('moveEnd')
				}
			}
			function movementReleaseHandler() {
				self.stop();
				$doc.off('mouseup', movementReleaseHandler)
			}
			function buttonsHandler(event) {
				stopDefault(event);
				switch (this) {
				case $forwardButton[0]:
				case $backwardButton[0]:
					self.moveBy($forwardButton.is(this) ? o.moveBy : -o.moveBy);
					$doc.on('mouseup', movementReleaseHandler);
					break;
				case $prevButton[0]:
					self.prev();
					break;
				case $nextButton[0]:
					self.next();
					break;
				case $prevPageButton[0]:
					self.prevPage();
					break;
				case $nextPageButton[0]:
					self.nextPage();
					break
				}
			}
			function normalizeWheelDelta(event) {
				return within(-event.wheelDelta || event.detail, -1, 1)
			}
			function scrollHandler(event) {
				if (!o.scrollBy || pos.start === pos.end) {
					return
				}
				stopDefault(event, 1);
				var delta = normalizeWheelDelta(event.originalEvent);
				if (itemNav) {
					self[centeredNav ? 'toCenter' : 'toStart'](within((centeredNav ? rel.centerItem : rel.firstItem) + o.scrollBy * delta, 0, items.length))
				} else {
					self.slideBy(o.scrollBy * delta)
				}
			}
			function scrollbarHandler(event) {
				if (o.clickBar && event.target === $sb[0]) {
					stopDefault(event);
					slideTo(handleToSlidee((o.horizontal ? event.pageX - $sb.offset().left : event.pageY - $sb.offset().top) - handleSize / 2))
				}
			}
			function keyboardHandler(event) {
				if (!o.keyboardNavBy) {
					return
				}
				switch (event.which) {
				case o.horizontal ? 37:
					38 : stopDefault(event);
					self[o.keyboardNavBy === 'pages' ? 'prevPage' : 'prev']();
					break;
				case o.horizontal ? 39:
					40 : stopDefault(event);
					self[o.keyboardNavBy === 'pages' ? 'nextPage' : 'next']();
					break
				}
			}
			function activateHandler() {
				if (this.parentNode === $slidee[0]) {
					self.activate(this)
				}
			}
			function activatePageHandler() {
				if (this.parentNode === $pb[0]) {
					self.activatePage($pages.index(this))
				}
			}
			function pauseOnHoverHandler(event) {
				if (o.pauseOnHover) {
					self[event.type === 'mouseenter' ? 'pause' : 'resume'](2)
				}
			}
			function trigger(name, arg1) {
				if (callbacks[name]) {
					for (i = 0, l = callbacks[name].length; i < l; i++) {
						callbacks[name][i].call(self, name, arg1)
					}
				}
			}
			self.destroy = function() {
				$doc.add($scrollSource).add($handle).add($sb).add($pb).add($forwardButton).add($backwardButton).add($prevButton).add($nextButton).add($prevPageButton).add($nextPageButton).unbind('.' + namespace);
				$prevButton.add($nextButton).add($prevPageButton).add($nextPageButton).removeClass(o.disabledClass);
				if ($items) {
					$items.eq(rel.activeItem).removeClass(o.activeClass)
				}
				$pb.empty();
				if (!parallax) {
					$frame.unbind('.' + namespace);
					$slidee.add($handle).css(transform || (o.horizontal ? 'left' : 'top'), transform ? 'none' : 0);
					$.removeData(frame, namespace)
				}
				initialized = 0;
				return self
			};
			self.init = function() {
				if (initialized) {
					return
				}
				self.on(callbackMap);
				var $movables = $handle;
				if (!parallax) {
					$movables = $movables.add($slidee);
					$frame.css('overflow', 'hidden');
					if (!transform && $frame.css('position') === 'static') {
						$frame.css('position', 'relative')
					}
				}
				if (transform) {
					if (gpuAcceleration) {
						$movables.css(transform, gpuAcceleration)
					}
				} else {
					if ($sb.css('position') === 'static') {
						$sb.css('position', 'relative')
					}
					$movables.css({
						position: 'absolute'
					})
				}
				if (o.forward) {
					$forwardButton.on(mouseDownEvent, buttonsHandler)
				}
				if (o.backward) {
					$backwardButton.on(mouseDownEvent, buttonsHandler)
				}
				if (o.prev) {
					$prevButton.on(clickEvent, buttonsHandler)
				}
				if (o.next) {
					$nextButton.on(clickEvent, buttonsHandler)
				}
				if (o.prevPage) {
					$prevPageButton.on(clickEvent, buttonsHandler)
				}
				if (o.nextPage) {
					$nextPageButton.on(clickEvent, buttonsHandler)
				}
				$scrollSource.on('DOMMouseScroll.' + namespace + ' mousewheel.' + namespace, scrollHandler);
				if ($sb[0]) {
					$sb.on(clickEvent, scrollbarHandler)
				}
				if (itemNav && o.activateOn) {
					$frame.on(o.activateOn + '.' + namespace, '*', activateHandler)
				}
				if ($pb[0] && o.activatePageOn) {
					$pb.on(o.activatePageOn + '.' + namespace, '*', activatePageHandler)
				}
				$dragSource.on(dragInitEvents, {
					source: 'slidee'
				}, dragInit);
				if ($handle) {
					$handle.on(dragInitEvents, {
						source: 'handle'
					}, dragInit)
				}
				$doc.bind('keydown.' + namespace, keyboardHandler);
				if (!parallax) {
					$frame.on('mouseenter.' + namespace + ' mouseleave.' + namespace, pauseOnHoverHandler);
					$frame.on('scroll.' + namespace, resetScroll)
				}
				load();
				if (itemNav) {
					activate(o.startAt);
					self[centeredNav ? 'toCenter' : 'toStart'](o.startAt)
				} else {
					slideTo(o.startAt, 1)
				}
				if (o.cycleBy && !parallax) {
					self[o.startPaused ? 'pause' : 'resume']()
				}
				initialized = 1;
				return self
			}
		}
		function type(value) {
			if (value == null) {
				return String(value)
			}
			if (typeof value === 'object' || typeof value === 'function') {
				return Object.prototype.toString.call(value).match(/\s([a-z]+)/i)[1].toLowerCase() || 'object'
			}
			return typeof value
		}
		function stopDefault(event, noBubbles) {
			event.preventDefault();
			if (noBubbles) {
				event.stopPropagation()
			}
		}
		function disableOneEvent(event) {
			stopDefault(event, 1);
			$(this).off(event.type, disableOneEvent)
		}
		function resetScroll() {
			this.scrollLeft = 0;
			this.scrollTop = 0
		}
		function isNumber(value) {
			return !isNaN(parseFloat(value)) && isFinite(value)
		}
		function getPx($item, property) {
			return parseInt($item.css(property), 10) || 0
		}
		function within(number, min, max) {
			return number < min ? min : number > max ? max : number
		}(function(w) {
			var vendors = ['moz', 'webkit', 'o'];
			var lastTime = 0;
			for (var i = 0, l = vendors.length; i < l && !cAF; ++i) {
				cAF = w[vendors[i] + 'CancelAnimationFrame'] || w[vendors[i] + 'CancelRequestAnimationFrame'];
				rAF = cAF && w[vendors[i] + 'RequestAnimationFrame']
			}
			if (!cAF) {
				rAF = function(callback) {
					var currTime = +new Date();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					lastTime = currTime + timeToCall;
					return w.setTimeout(function() {
						callback(currTime + timeToCall)
					}, timeToCall)
				};
				cAF = function(id) {
					clearTimeout(id)
				}
			}
		}(window));
		(function() {
			var prefixes = ['', 'webkit', 'moz', 'ms', 'o'];
			var el = document.createElement('div');

			function testProp(prop) {
				for (var p = 0, pl = prefixes.length; p < pl; p++) {
					var prefixedProp = prefixes[p] ? prefixes[p] + prop.charAt(0).toUpperCase() + prop.slice(1) : prop;
					if (el.style[prefixedProp] !== undefined) {
						return prefixedProp
					}
				}
			}
			transform = testProp('transform');
			gpuAcceleration = testProp('perspective') ? 'translateZ(0) ' : ''
		}());
		w[className] = Sly;
		$.fn[pluginName] = function(options, callbackMap) {
			var method, methodArgs;
			if (!$.isPlainObject(options)) {
				if (type(options) === 'string' || options === false) {
					method = options === false ? 'destroy' : options;
					methodArgs = Array.prototype.slice.call(arguments, 1)
				}
				options = {}
			}
			return this.each(function(i, element) {
				var plugin = $.data(element, namespace);
				if (!plugin && !method) {
					plugin = $.data(element, namespace, new Sly(element, options, callbackMap).init())
				} else if (plugin && method) {
					if (plugin[method]) {
						plugin[method].apply(plugin, methodArgs)
					}
				}
			})
		};
		Sly.defaults = {
			horizontal: 0,
			itemNav: null,
			itemSelector: null,
			smart: 0,
			activateOn: null,
			activateMiddle: 0,
			scrollSource: null,
			scrollBy: 0,
			dragSource: null,
			mouseDragging: 0,
			touchDragging: 0,
			releaseSwing: 0,
			swingSpeed: 0.2,
			elasticBounds: 0,
			scrollBar: null,
			dragHandle: 0,
			dynamicHandle: 0,
			minHandleSize: 50,
			clickBar: 0,
			syncSpeed: 0.5,
			pagesBar: null,
			activatePageOn: null,
			pageBuilder: function(index) {
				return '<li>' + (index + 1) + '</li>'
			},
			forward: null,
			backward: null,
			prev: null,
			next: null,
			prevPage: null,
			nextPage: null,
			cycleBy: null,
			cycleInterval: 5000,
			pauseOnHover: 0,
			startPaused: 0,
			moveBy: 300,
			speed: 0,
			easing: 'swing',
			startAt: 0,
			keyboardNavBy: null,
			draggedClass: 'dragged',
			activeClass: 'active',
			disabledClass: 'disabled'
		}
	}(jQuery, window))
});
$(document).ready(function() {
	var $frame = $('#effects');
	var $wrap = $frame.parent();
	$frame.sly({
		horizontal: 1,
		itemNav: 'forceCentered',
		smart: 1,
		activateMiddle: 1,
		activateOn: 'click',
		mouseDragging: 1,
		touchDragging: 1,
		releaseSwing: 1,
		startAt: 0,
		scrollBar: $wrap.find('.scrollbar'),
		scrollBy: 1,
		speed: 300,
		elasticBounds: 1,
		easing: 'swing',
		dragHandle: 1,
		dynamicHandle: 1,
		clickBar: 1,
		prev: $('.prev'),
		next: $('.next')
	})
});
$(function() {;
	(function($) {
		$.fn.jcMarquee = function(options) {
			var defaults = {
				'marquee': 'x',
				'margin_bottom': '0',
				'margin_right': '0',
				'speed': '10'
			};
			var options = $.extend(defaults, options);
			return this.each(function() {
				var $marquee = $(this),
					$marquee_scroll = $marquee.children('ul');
				$marquee_scroll.append("<li class='clone'>" + "</li>");
				$marquee_scroll.find('li').eq(0).children().clone().appendTo('.clone');
				var $marquee_left = $marquee_scroll.find('li');
				if (options.marquee == 'x') {
					var x = 0;
					$marquee_scroll.css('width', '1000%');
					$marquee_left.find('div').css({
						'margin-right': options.margin_right
					});
					$marquee_left.css({
						'margin-right': 0
					});

					function Marquee_x() {
						$marquee.scrollLeft(++x);
						_margin = parseInt($marquee_left.find('div').css('margin-right'));
						if (x == $marquee_left.width() + _margin) {
							x = 0
						}
					};
					var MyMar = setInterval(Marquee_x, options.speed);
					$marquee.hover(function() {
						clearInterval(MyMar)
					}, function() {
						MyMar = setInterval(Marquee_x, options.speed)
					})
				}
				if (options.marquee == 'y') {
					var y = 0;
					$marquee_scroll.css('height', '1000%');
					$marquee_left.find('div').css('margin-bottom', options.margin_bottom);
					$marquee_left.css('margin-bottom', options.margin_bottom);

					function Marquee_y() {
						$marquee.scrollTop(++y);
						_margin = parseInt($marquee_left.find('div').css('margin-bottom'));
						if (y == $marquee_left.height() + _margin) {
							y = 0
						}
					};
					var MyMar = setInterval(Marquee_y, options.speed);
					$marquee.hover(function() {
						clearInterval(MyMar)
					}, function() {
						MyMar = setInterval(Marquee_y, options.speed)
					})
				}
			})
		}
	})(jQuery)
});
$(function() {
	$('#Marquee_x').jcMarquee({
		'marquee': 'x',
		'margin_right': '10px',
		'speed': 1
	})
});