const result = document.getElementById("result");
window.addEventListener("keydown", function (e) {
  result.innerHTML = `
  <table class="Color">
        <tr class="Color">
            <th class="Color">Key</th>
            <th class="Color">KeyCode</th>
            <th class="Color">Code</th>
        </tr>
        <tr class="Color">
            <td class="Color">${e.key === ' ' ? "space": e.key}</td>
            <td class="Color">${e.keyCode}</td>
            <td class="Color">${e.code}</td>
        </tr>
    </table>`;
});
