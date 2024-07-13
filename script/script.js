document.addEventListener('DOMContentLoaded', function() { /*to ensure the JavaScript runs after the DOM has been fully loaded.*/
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            document.querySelectorAll('.content').forEach(content => {
                content.style.display = 'none';
            });
            const contentId = 'content' + this.id.slice(-1);
            document.getElementById(contentId).style.display = 'flex';
        });
    });
});