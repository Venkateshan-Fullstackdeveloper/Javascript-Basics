console.log(name);

let name = "venky"; // when you declared a variable with var keyword , its considered to be gloal scope whih means we can use the variable where ever we want ut in case of let keyword the variable will not be accessed outside of its scope.. for example below

if (true) {
    var lastName = "Prabhakaran";
    console.log(lastName);
}
console.log(lastName);
// here if var keyword O/P be like 
/**
 * Prabhakaran
 * Prabhakaran
 */
// if let keyword is used in the if clause O/P be like
/**
 * Prabhakaran
 * error lastName is not defined because lastName variable scope is gone once it is executed but in the above O/P variable is logged beause of its var keyword
 */
