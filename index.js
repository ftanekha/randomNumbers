var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
document.addEventListener('DOMContentLoaded', function () {
    var getLuckyText = 'get lucky!';
    var goodLuckText = 'good luck!';
    function displayNumbers() {
        function getRandomNumbers(max, maxLines) {
            if (maxLines === void 0) { maxLines = 5; }
            //create a line of unique numbers
            function getLine(array) {
                if (array === void 0) { array = []; }
                var myNumbers = __spreadArray([], array, true);
                if (myNumbers.length >= 6)
                    return myNumbers;
                var nextNumber = Math.ceil(Math.random() * max);
                //enforce uniqueness
                if (myNumbers.includes(nextNumber)) {
                    return getLine(myNumbers);
                }
                else {
                    myNumbers.push(nextNumber);
                    return getLine(myNumbers);
                }
            }
            var ticket = [];
            //sort numbers in ascending order
            for (var line = 0; line < maxLines; line++) {
                ticket.push(getLine().sort(function (a, b) { return a - b; }));
            }
            return ticket;
        }
        var randomNumbers = getRandomNumbers(59);
        randomNumbers.forEach(function (line, index) {
            var targetEl = document.getElementById("".concat(index + 1));
            //clear the ticket
            targetEl.innerHTML = '';
            //render the lines
            line.forEach(function (number) {
                var listItem = document.createElement('li');
                listItem.className = "w-1/6 bg-gray-".concat(11 - index, "00 text-gray-").concat(index + 1, "00 font-black text-lg text-center border-b-4 border-gray-").concat(index + 2, "00");
                listItem.textContent = String(number);
                targetEl === null || targetEl === void 0 ? void 0 : targetEl.append(listItem);
            });
        });
        document.getElementById('numbers-container').style.height = '500px';
        var timer = setTimeout(function () {
            var button = document.getElementById('get-lucky');
            if (button.textContent === getLuckyText) {
                button.textContent = goodLuckText;
                button.classList.replace('text-gray-300', 'text-amber-500');
            }
            setTimeout(function () {
                button.textContent = getLuckyText;
                button.classList.replace('text-amber-500', 'text-gray-300');
                clearTimeout(timer);
            }, 10000);
        }, 2000);
    }
    var getLucky = document.getElementById('get-lucky');
    getLucky.addEventListener('click', displayNumbers);
    // /////////////////////////////////////////////////////
    function subDisplayNumbers() {
        function getRandomNumbers(max, maxLines) {
            if (maxLines === void 0) { maxLines = 5; }
            //create a line of unique numbers
            function getLine(array) {
                if (array === void 0) { array = []; }
                var myNumbers = __spreadArray([], array, true);
                if (myNumbers.length >= 5)
                    return myNumbers;
                var nextNumber = Math.ceil(Math.random() * max);
                //enforce uniqueness
                if (myNumbers.includes(nextNumber)) {
                    return getLine(myNumbers);
                }
                else {
                    myNumbers.push(nextNumber);
                    return getLine(myNumbers);
                }
            }
            var ticket = [];
            //sort numbers in ascending order
            for (var line = 0; line < maxLines; line++) {
                ticket.push(getLine().sort(function (a, b) { return a - b; }));
            }
            return ticket;
        }
        var randomNumbers = getRandomNumbers(50);
        randomNumbers.forEach(function (line, index) {
            var targetEl = document.getElementById("".concat(index + 6));
            //clear the ticket
            targetEl.innerHTML = '';
            //render the lines
            line.forEach(function (number) {
                var listItem = document.createElement('li');
                listItem.className = "w-1/6 bg-gray-".concat(11 - index, "00 text-gray-").concat(index + 1, "00 font-black text-lg text-center border-b-4 border-gray-").concat(index + 2, "00");
                listItem.textContent = String(number);
                targetEl === null || targetEl === void 0 ? void 0 : targetEl.append(listItem);
            });
        });
        document.getElementById('sub-numbers-container').style.height = '500px';
        var timer = setTimeout(function () {
            var button = document.getElementById('sub-get-lucky');
            if (button.textContent === getLuckyText) {
                button.textContent = goodLuckText;
                button.classList.replace('text-gray-300', 'text-amber-500');
            }
            setTimeout(function () {
                button.textContent = getLuckyText;
                button.classList.replace('text-amber-500', 'text-gray-300');
                clearTimeout(timer);
            }, 10000);
        }, 2000);
    }
    var subGetLucky = document.getElementById('sub-get-lucky');
    subGetLucky.addEventListener('click', subDisplayNumbers);
});
