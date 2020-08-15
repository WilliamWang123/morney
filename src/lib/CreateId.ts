let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;
function createId() {
  window.localStorage.setItem('_idMax', id.toString());
  id++
  return id
}

export default createId