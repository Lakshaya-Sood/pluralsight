//TIP #1 -> Don't use undefined as a means of denoting validity
//TIP #1.1 -> Recommended to use == null to check for both undefined or null

//For example an awful function like this:
function toInt1(str:string) {
  return str ? parseInt(str) : undefined;
}

//can be much better written like this:
function toInt2(str: string): { valid: boolean, int?: number } {
  const int = parseInt(str);
  if (isNaN(int)) {
    return { valid: false };
  }
  else {
    return { valid: true, int };
  }
}

//"Douglas Crockford thinks null is a bad idea and we should all just use undefined."