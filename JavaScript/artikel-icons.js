// Wähle die relevanten Icons (Daumen hoch und Daumen runter)
const likeIcons = document.querySelectorAll('.like-icon');
const dislikeIcons = document.querySelectorAll('.dislike-icon');

// Event Listener für Daumen hoch
likeIcons.forEach((likeIcon) => {
    likeIcon.addEventListener('click', function () {
        this.classList.toggle('active');

        // Entferne die aktive Klasse von dem entsprechenden Daumen-runter-Icon im gleichen Container
        const parent = this.closest('.icons-container');
        const siblingDislike = parent.querySelector('.dislike-icon');
        if (this.classList.contains('active')) {
            siblingDislike.classList.remove('active');
        }
    });
});

// Event Listener für Daumen runter
dislikeIcons.forEach((dislikeIcon) => {
    dislikeIcon.addEventListener('click', function () {
        this.classList.toggle('active');

        // Entferne die aktive Klasse von dem entsprechenden Daumen-hoch-Icon im gleichen Container
        const parent = this.closest('.icons-container');
        const siblingLike = parent.querySelector('.like-icon');
        if (this.classList.contains('active')) {
            siblingLike.classList.remove('active');
        }
    });
});
