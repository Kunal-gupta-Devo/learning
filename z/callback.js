  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }
  
  loadScript('first.js', script => {
    alert(`Cool, the script ${script} is loaded`);
    alert( _ );
  
  })