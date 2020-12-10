var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

// console.log("Discount percentage is: " + discountPercent);

displayDiscountPerentage = Math.round(discountPercent);
console.log(displayDiscountPerentage + "% OFF");

var result = listingPrice > sellingPrice;
console.log(typeof result);

// Reference ****MDN DOCS****