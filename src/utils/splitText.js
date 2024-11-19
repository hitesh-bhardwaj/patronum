import SplitType from 'split-type';

export function SplitInLineOnly(element) {
  if (!element) return null;
  return new SplitType(element, {
    types: 'lines',
  });
}

export function SplitInLine(element) {
   if (!element) return null;
 
   // Break the text into lines
   const splitInstance = new SplitType(element, {
     types: 'lines',
   });
 
   // Add an additional div inside each line with the class name 'line-internal'
   splitInstance.lines.forEach(line => {
     const internalDiv = document.createElement('div');
     internalDiv.className = 'line-internal';
     internalDiv.innerHTML = line.innerHTML;
     line.innerHTML = '';
     line.appendChild(internalDiv);
   });
 
   return splitInstance;
 }

export function SplitInLineWordChar(element) {
    if (!element) return null;
    return new SplitType(element, {
      types: 'lines, words, chars',
    });
  }

export function SplitInLineWord(element) {
    if (!element) return null;
    return new SplitType(element, {
      types: 'lines, words',
    });
}

export function SplitInChar(element) {
  if (!element) return null;
  return new SplitType(element, {
    types: 'chars',
  });
}

export function SplitInWordChar(element) {
  if (!element) return null;
  return new SplitType(element, {
    types: 'words, chars',
  });
}

export function SplitInWordOnly(element) {
    if (!element) return null;
    return new SplitType(element, {
      types: 'words',
    });
  }
