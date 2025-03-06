function calculateBestFuel() {
  const alcoholInput = document.getElementById("alcohol");
  const alcoholIcon = document.getElementById("alcohol-icon");
  const alcohol = Number.parseFloat(alcoholInput.value);

  const gasolineInput = document.getElementById("gasoline");
  const gasolineIcon = document.getElementById("gasoline-icon");
  const gasoline = Number.parseFloat(gasolineInput.value);

  if (alcohol / gasoline > 0.7) {
    setSuccess(gasolineInput);
    setFailure(alcoholInput);
    setIconSuccess(gasolineIcon);
    setIconFailure(alcoholIcon)
  } else {
    setSuccess(alcoholInput);
    setFailure(gasolineInput);
    setIconSuccess(alcoholIcon);
    setIconFailure(gasolineIcon)
  }
}

function setSuccess(obj) {
  obj.classList.remove("is-danger");
  obj.classList.add("is-success");
}

function setFailure(obj) {
  obj.classList.remove("is-success");
  obj.classList.add("is-danger");
}

function setIconSuccess(obj) {
  obj.classList.remove("fa-exclamation-triangle");
  obj.classList.add("fa-check");
}

function setIconFailure(obj) {
  obj.classList.remove("fa-check");
  obj.classList.add("fa-exclamation-triangle");
}
