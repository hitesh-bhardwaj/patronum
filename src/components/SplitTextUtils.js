import SplitType from 'split-type';

export function SplitInLineOnly(element) {
  if (!element) return null;
  return new SplitType(element, {
    types: 'lines',
  });
}

export function SplitInLine(element) {
   if (!element) return null;
 
   const splitInstance = new SplitType(element, {
     types: 'lines',
   });
 
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
