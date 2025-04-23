document.getElementById('verifier').addEventListener('click', () => {
    const mtnMatin = parseFloat(document.getElementById('mtn-matin').value) || 0;
    const moovMatin = parseFloat(document.getElementById('moov-matin').value) || 0;
    const celtisMatin = parseFloat(document.getElementById('celtis-matin').value) || 0;
    const especeMatin = parseFloat(document.getElementById('espece-matin').value) || 0;
  
    const mtnSoir = parseFloat(document.getElementById('mtn-soir').value) || 0;
    const moovSoir = parseFloat(document.getElementById('moov-soir').value) || 0;
    const celtisSoir = parseFloat(document.getElementById('celtis-soir').value) || 0;
    const especeSoir = parseFloat(document.getElementById('espece-soir').value) || 0;
  
    const totalNumeriqueMatin = mtnMatin + moovMatin + celtisMatin;
    const totalNumeriqueSoir = mtnSoir + moovSoir + celtisSoir;
    const totalEspeceMatin = especeMatin;
    const totalEspeceSoir = especeSoir;
  
    const variationNumerique = totalNumeriqueSoir - totalNumeriqueMatin;
    const variationEspece = totalEspeceSoir - totalEspeceMatin;
  
    const resultatDiv = document.getElementById('resultat');
    resultatDiv.innerHTML = `
      <p>Total numérique matin: ${totalNumeriqueMatin.toFixed(2)}</p>
      <p>Total numérique soir: ${totalNumeriqueSoir.toFixed(2)}</p>
      <p>Total espèce matin: ${totalEspeceMatin.toFixed(2)}</p>
      <p>Total espèce soir: ${totalEspeceSoir.toFixed(2)}</p>
      <p>Variation numérique: ${variationNumerique.toFixed(2)}</p>
      <p>Variation espèce: ${variationEspece.toFixed(2)}</p>
    `;
  
    if (Math.abs(variationNumerique + variationEspece) < 0.01) {
      resultatDiv.innerHTML += `<p class="text-green-600 font-bold">✅ Les variations sont cohérentes.</p>`;
    } else {
      resultatDiv.innerHTML += `<p class="text-red-600 font-bold">⚠️ Incohérence détectée dans les variations.</p>`;
    }
  
    const ctx = document.getElementById('graphique').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['MTN', 'Moov', 'Celtis', 'Espèce'],
        datasets: [
          {
            label: 'Matin',
            data: [mtnMatin, moovMatin, celtisMatin, especeMatin],
            backgroundColor: 'rgba(59, 130, 246, 0.5)',
          },
          {
            label: 'Soir',
            data: [mtnSoir, moovSoir, celtisSoir, especeSoir],
  
  ::contentReference[oaicite:0]{index=0}
   
  