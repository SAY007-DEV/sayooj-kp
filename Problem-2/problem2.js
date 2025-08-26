 function generateOddSeries(a) {
      let series = [];
      for (let i = 1; i <= a; i++) {
        series.push(2 * i - 1);
      }
      return series.join(", ");
    }

    function showSeries() {
      const a = parseInt(document.getElementById("a").value);
      if (isNaN(a) || a <= 0) {
        document.getElementById("result").textContent = "Please enter a positive integer!";
        return;
      }
      document.getElementById("result").textContent = generateOddSeries(a);
    }