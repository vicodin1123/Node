/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX, startY) {
	var x = startX,
		y = startY,
		id,
		moveAmount = 1,
		map=-1,
		playerSize,
		oriX, oriY;
	
	// Getters and setters
	var getX = function() {
		return x;
	};

	var getY = function() {
		return y;
	};
	var getOriX = function() {
		return oriX;
	};

	var getOriY = function() {
		return oriY;
	};
	var getMap = function(){
		return map;
	}

	var setX = function(newX) {
		x = newX;
	};

	var setY = function(newY) {
		y = newY;
	};
	var setOriX = function(newX) {
		oriX = newX;
	};

	var setOriY = function(newY) {
		oriY = newY;
	};

	var setMap  = function(newMap) {
		map = newMap;
	}

	// Update player position
	var update = function(keys) {
		// Previous position
		var prevX = x,
			prevY = y;

		// Up key takes priority over down
		if (keys.up) {
			if ((y-moveAmount>=0) && !isCollision(x, y-moveAmount, map))
				y -= moveAmount;
		} else if (keys.down) {
			if ((y+moveAmount<=pixelPerBlock*mapHeight) && !isCollision(x, y+moveAmount, map))
				y += moveAmount;
		};

		// Left key takes priority over right
		if (keys.left) {
			if ((x-moveAmount>=0) && !isCollision(x-moveAmount, y, map))
				x -= moveAmount;
		} else if (keys.right) {
			if ((x+moveAmount<=pixelPerBlock*mapWidth) && !isCollision(x+moveAmount, y, map))
				x += moveAmount;
		};

		return (prevX != x || prevY != y) ? true : false;
	};

	// Draw player
	var draw = function(ctx) {
		ctx.fillStyle = 'red';
		ctx.fillRect(x-5, y-5, 10, 10);
	};

	// Define which variables and methods can be accessed
	return {
		getX: getX,
		getY: getY,
		getOriX: getOriX,
		getOriY: getOriY,
		getMap: getMap,
		setX: setX,
		setY: setY,
		setOriX: setOriX,
		setOriY: setOriY,
		setMap: setMap,
		update: update,
		draw: draw
	}
};