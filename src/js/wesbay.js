async function load() {
  const page = await import('./global.js');
  page.render();
}

load();
