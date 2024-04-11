const alertDialogOverlay = document.getElementById('alertDialogOverlay');
const alertDialogTitle = document.querySelector('.alert-dialog-title');
const alertDialogCancel = document.querySelector('.alert-dialog-cancel');
const alertDialogAction = document.querySelector('.alert-dialog-action');
const alertDialogDescription = document.querySelector('.alert-dialog-description');

// alert 대용으로 사용할 alertDialog.
function alertDialogOpen(title, inform) {
    alertDialogTitle.textContent = title;
    alertDialogDescription.textContent = inform;

    alertDialogOverlay.classList.add('show');
}

// alertDialogCancel.addEventListener('click', () => {
//     alertDialogOverlay.classList.remove('show');
// });

alertDialogAction.addEventListener('click', () => {
    alertDialogOverlay.classList.remove('show');
});