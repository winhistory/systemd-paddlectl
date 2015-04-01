// recycled from 2014 :p

var AprilFools = {

    setField: function(name, value) {
        var element = document.getElementById(name);
        if (element) {
            element.innerHTML = "";
            element.appendChild(document.createTextNode(value));
            return true;
        }
        return false;
    },

    randInt: function(lower, upper) {
        return lower + Math.floor((upper - lower + 1) * Math.random());
    },
    
    randIntStr: function(lower, upper, mindigits) {
        var str = "" + this.randInt(lower, upper);
        if (str.length < mindigits) {
            return Array(mindigits - str.length + 1).join("0") + str;
        } else {
            return str;
        }
    },
    
    randTimeStr: function() {
        // Nachmittagszeiten sind plausibler :p
        return this.randIntStr(16, 23, 2) + ":" + this.randIntStr(0, 59, 2);
    },
    
    nowStr: function() {
        var date = new Date();
        var hours = date.getHours();
        if (hours < 10) hours = "0" + hours;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        return hours + ":" + minutes;
    },

    fadeFraction: 0,
    shadeFadeIn: function() {
        this.fadeFraction++;
        document.getElementById("shade").style.opacity = this.fadeFraction / 32;
        if (this.fadeFraction < 24) {
            setTimeout(function() { AprilFools.shadeFadeIn(); }, 33);
        }
    },
    shadeFadeOut: function() {
        this.fadeFraction -= 2;
        document.getElementById("shade").style.opacity = this.fadeFraction / 32;
        if (this.fadeFraction >= 2) {
            setTimeout(function() { AprilFools.shadeFadeOut(); }, 33);
        } else {
            document.getElementById("shade").style.display = "none";
        }
    },

    /*        n##n,
     *        /" /##
     * YAY!  (__/ ##_   ___
     *          |    ```   `\
     *          \   /  /    |\
     *          || /_,-\   / #
     *          |||     >> >
     *         //_(    //_(
     */
    firstNames: ['Apple', 'Bee', 'Button', 'Diamond', 'Feather', 'Marble', 'Pound', 'Rumble', 'Silver'],
    secondNames: ['Bumpkin', 'Cookie', 'Dancer', 'Fire', 'Flight', 'Flower', 'Pie', 'Puddinghead', 'Rager', 'Smash', 'Zapp'],
    
    initName: function() {
        var firstName = this.firstNames[this.randInt(0, this.firstNames.length - 1)];
        var secondName = this.secondNames[this.randInt(0, this.secondNames.length - 1)];
        this.fullName = firstName + " " + secondName;
        this.setField("fakename", this.fullName);
    },

};


document.cookie = "visited_paddlectl=true";

window.addEventListener("load", function() {
    AprilFools.setField("fakecount", AprilFools.randIntStr(1, 999, 0));
    AprilFools.setField("faketime", AprilFools.randTimeStr());
    AprilFools.setField("realtime", AprilFools.nowStr());
    AprilFools.initName();
    document.getElementById("shade").addEventListener("click", function() {
        AprilFools.shadeFadeOut();
    });
    // don't dim the rest of the page on mobile - buggy!
    if (!window.breakout || !breakout.IS_MOBILE) {
        AprilFools.shadeFadeIn();
    } else {
        document.getElementById("shade").style.display = "none";
    }
});
