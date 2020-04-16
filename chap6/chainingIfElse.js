// Example: Chaining If... Else statements
// Suppose you're ordering Chinese food. Your favorite Chinese dish if lemon chicken. 
// If it's not on the menu, you'll have beef with black bean sauce. If that's not on the menu, 
// you'll gave sweet and sour pork. In the rare case that none of those options is available, 
// you'll have egg fried rice. 

// The representation of that problem is the following:
var lemonChicken = false;  // is available?
var beefWithBlackBean = true;
var sweetAndSourPork = true;

if (lemonChicken){
    console.log("Great! I1m having lemon chicken!");
} else if (beefWithBlackBean) {
    console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
    console.log("Ok, I'll have the pork.");
} else {     // none of the options is available
    console.log("Well, guess I'll have the rice then.");
}
