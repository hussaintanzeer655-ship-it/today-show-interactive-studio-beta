const grid = document.getElementById('grid');
const zones = [
  {name:'Anchor Desk', color:'#e0f2fe'},
  {name:'Lighting Rig', color:'#fce7f3'},
  {name:'Camera 1', color:'#eff6ff'},
  {name:'Walk-in','?':false},
  {name:'Green Room', color:'#f0f9ff'},
  {name:'Control Room', color:'#eef2ff'}
];
function createPanel(title, color){
  const div = document.createElement('div');
  div.className = 'panel';
  div.style.background = '#fff';
  div.style.borderColor = '#e5e7eb';
  const h = document.createElement('h3');
  h.textContent = title;
  const p = document.createElement('p');
  p.className = 'hint';
  p.textContent = 'Status: ready';
  div.appendChild(h);
  div.appendChild(p);
  div.style.background = color || '#fff';
  return div;
}
function renderGrid(){
  grid.innerHTML = '';
  zones.forEach(z => {
    const panel = createPanel(z.name, z.color);
    grid.appendChild(panel);
  });
}
renderGrid();
