export const simpleClock = {
  formatedTime: () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    return hours + ':' + minutes;
  },

  updatePlaceholder: (value) => {
    const placeholder = document.querySelector('.clock');
    placeholder.innerText = value;
  },

  getLocation: () => {

  }
};
