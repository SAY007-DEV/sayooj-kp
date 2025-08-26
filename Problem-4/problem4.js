function countMultiples(arr) {
      let result = {};
      for (let i = 1; i <= 9; i++) {
        result[i] = arr.filter(num => num % i === 0).length;
      }
      return result;
    }

    function findMultiples() {
      let raw = document.getElementById('list').value;
      if (!raw) {
        document.getElementById('output').innerText = 'Please enter some numbers.';
        return;
      }

      let arr = raw.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));
      if (arr.length === 0) {
        document.getElementById('output').innerText = 'Invalid input. Enter numbers separated by commas.';
        return;
      }

      let result = countMultiples(arr);
      document.getElementById('output').innerText = JSON.stringify(result, null, 2);
    }