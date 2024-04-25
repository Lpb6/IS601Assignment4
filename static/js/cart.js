const revString = localStorage.getItem('revString')
console.log(revString);
function countChars() {
    let str = revString;
    if (str) {
      let vowels = 0;
      let spaces = 0;
      let consonants = 0;
      const vowArray = ['a', 'e', 'i', 'o', 'u'];
      const conArray = ['b', 'c', 'd', 'f', 'g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
      str = str.toLowerCase().split('');
      console.log(str);
      for (const i in str) {
        if (vowArray.includes(str[i])) {
          vowels++;
        } else if (conArray.includes(str[i])) {
          consonants++;
        } else {
          spaces++;
        }
      }
      document.querySelector('.reversed-string').textContent = revString;
      document.querySelector('.vowel-count').textContent = vowels;
      document.querySelector('.consonant-count').textContent = consonants;
    }
  }
  countChars();