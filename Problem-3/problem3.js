function generate() {
      let a = parseInt(document.getElementById('num').value);
      if (isNaN(a) || a <= 0) {
        document.getElementById('output').innerText = 'Enter a positive integer';
        return;
      }

      let limit = (a % 2 === 0) ? a - 1 : a;
      let series = [];
      for (let i = 1; i <= limit * 2 - 1; i += 2) {
        series.push(i);
      }
      document.getElementById('output').innerText = series.join(', ');
    }