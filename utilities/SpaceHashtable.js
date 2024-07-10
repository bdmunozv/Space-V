/*
 * SpaceAPI.Hashtable
 * Copyright(c) 2012-2015 wtApi, Inc.
 * licensing@widetech.com.co
 * http://www.widetech.com.co/license
 */
 
(function () { SpaceAPI.Hashtable = function (config) { config = config || {}; SpaceAPI.apply(this, config); } })();
SpaceAPI.apply(SpaceAPI.Hashtable.prototype, function(){
	let hash = new Array(),
		keys = new Array(),
		location = 0;
	
	SpaceAPI.apply( this, arguments );
	
	function init(){
	    this.hash = new Array();
	    this.keys = new Array();
	    this.location = 0;
	}
	
	function put(key, value){
	    if (value == null)
		    return;
	    if (this.hash[key] == null)
		    this.keys[this.keys.length] = key;
	    this.hash[key] = value;
    }
    
    function get(key){ return this.hash[key]; }
    
    function remove(key){
	    for (let i = 0; i < this.keys.length; i++){
		    //did we found our key?
		    if (key == this.keys[i]){
			    //remove it from the hash
			    this.hash[this.keys[i]] = null;
			    //and throw away the key...
			    this.keys.splice(i ,1);
			    return;
		    }
	    }
    }
    
    function size(){ return this.keys.length; }
    
    function populateItems(){}
    
    function next(){
	    if (++this.location < this.keys.length)
		    return true;
	    else
		    return false;
	}

    
    function moveFirst(){
	    try {
		    this.location = -1;
	    } catch(e) {/*//do nothing here :-)*/}
    }
    
    function moveLast(){
	    try {
		    this.location = this.keys.length - 1;
	    } catch(e) {/*//do nothing here :-)*/}
    }
    
    function getKey(){
	    try {
		    return this.keys[this.location];
	    } catch(e) {
		    return null;
	    }
    }
    
    function getValue(){
	    try {
		    return this.hash[this.keys[this.location]];
	    } catch(e) {
		    return null;
	    }
    }
    
    function getKeyOfValue(value){
	    for (let i = 0; i < this.keys.length; i++)
		    if (this.hash[this.keys[i]] == value)
			    return this.keys[i]
	    return null;
    }
    
    function toString(){
	    try {
		    let s = new Array(this.keys.length);
		    s[s.length] = "{";

		    for (let i = 0; i < this.keys.length; i++){
			    s[s.length] = this.keys[i];
			    s[s.length] = "=";
			    let v = this.hash[this.keys[i]];
			    if (v)
				    s[s.length] = v.toString();
			    else
				    s[s.length] = "null";

			    if (i != this.keys.length-1)
				    s[s.length] = ", ";
		    }
	    } catch(e) {
		    //do nothing here :-)
	    }finally{
		    s[s.length] = "}";
	    }

	    return s.join("");
    }
    
    function toString2(){
	    try {
		    let s = new Array(this.keys.length);
		    s[s.length] = "";

		    for (let i = 0; i < this.keys.length; i++){
			    s[s.length] = this.keys[i];
			    if (i != this.keys.length-1)
				    s[s.length] = ", ";
		    }
	    } catch(e) {
		    //do nothing here :-)
	    }finally{
		    s[s.length] = "";
	    }

	    return s.join("");
    }
    
    function add(ht){
	    try {
		    ht.moveFirst();
		    while(ht.next()){
			    let key = ht.getKey();
			    //put the new value in both cases (exists or not).
			    this.hash[key] = ht.getValue();
			    //but if it is a new key also increase the key set
			    if (this.get(key) != null){
				    this.keys[this.keys.length] = key;
			    }
		    }
	    } catch(e) {
		    //do nothing here :-)
	    } finally {
		    return this;
	    }
    }
    
	return {
	    init                    : init,
		put				        : put,
		get     				: get,
		remove	                : remove,
		size     				: size,
		populateItems			: populateItems,
		next     				: next,
		moveFirst				: moveFirst,
		moveLast     			: moveLast,
		getKey				    : getKey,
		getValue     			: getValue,
		getKeyOfValue			: getKeyOfValue,
		toString     			: toString,
		toString2				: toString2,
		add     				: add,
		hash                    : hash,
	    keys                    : keys,
		location: location		
	}
}());