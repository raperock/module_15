const btn = document.querySelector('.j-btn-test');
const chart = document.querySelector('.btn_icon');
let icon=false;

btn.addEventListener('click', () => {
        btn.classList.toggle('btn--magic');
        if (icon) {
            chart.innerHTML = ` 
  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.879-2.828a.5.5 0 1 1 .707.707L6.732 9.975H9.5a.5.5 0 1 1 0 1H5.525a.5.5 0 0 1-.5-.5V6.5a.5.5 0 1 1 1 0v2.768l4.096-4.096z"/>
</svg>`;

            icon=false;
        }
        else {chart.innerHTML= ` <svg class="bi bi-arrow-clockwise" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"/>
      <path fill-rule="evenodd" d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"/>
    </svg>`
            icon=true;
        }



    }

);